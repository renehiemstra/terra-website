# Tutorial - Move semantics in Terra
In this tutorial, we explore Terra’s resource management system through the lens of move semantics—its default approach to handling resources. We’ll implement basic data structures to demonstrate how managed types integrate seamlessly, showcasing the power and simplicity of ownership transfer in Terra.

We’ll build the following managed types:

* Dynamic Stack: A dynamically sized container that allocates memory on the heap. It offers element access, push and pop methods, and automatically reallocates resources when capacity is exceeded.
* Dynamic Vector: A fixed-size container that allocates a single chunk of heap memory without reallocation. It provides element access and supports a user-defined cast from a Dynamic Stack for resource transfer.
* Quadrature Rule: An aggregate type combining two Dynamic Vectors, with element access to its paired components.

Our focus is on Terra’s move semantics: how resources are transferred efficiently by default, ensuring single ownership without unnecessary copying. Let’s dive in and see these concepts in action!


## Implementation of a dynamic stack
Let’s kick off with DynamicStack, a managed type that exemplifies Terra’s move semantics. This dynamic, heap-allocated container supports element access via `stack(i)`, along with push and pop methods. It automatically reallocates when capacity is exceeded. By defining only `__init` and `__dtor`, we leverage Terra’s auto-generated `__move` for efficient resource transfers, enforcing move-only behavior without copying—a perfect entry point to understanding Terra’s default ownership and resource management.

Some general remarks are:
* Library Support: Load `terralibext` for memory management and C’s `stdlib` via    `terralib.includec("stdlib.h")`.
* The Lua function `terralib.memoize` enables caching of the definition `DynamicStack(T)` for element type `T`.
* Static Methods:`Stack.metamethods.__getmethod` allows `Stack.new` calls, simplifying static method access.
* Element Access: `Stack.metamethods.__apply`, a macro, enables `stack(i)` for both get/set access.

**Memory Management Notes**
* C Integration: Uses `malloc`, `realloc`, and `free` from C’s `stdlib` for heap management.
* Move Semantics: `push` and `pop` use `__move__` to transfer resources via a type’s `__move` method (if defined), avoiding copies.
* Implementation: Implements `__init` and `__dtor`; `__move` is auto-generated, making the stack movable but not copyable by default.

```terra
require "terralibext"
local C = terralib.includec("stdlib.h")

local DynamicStack = terralib.memoize(function(T)
    local struct Stack {
        data : &T       -- Pointer to heap-allocated elements
        size : int      -- Current number of elements
        capacity : int  -- Maximum capacity before reallocation
    }

    Stack.staticmethods = {}

    -- Enable static method dispatch (e.g., Stack.new)
    Stack.metamethods.__getmethod = function(self, methodname)
        return self.methods[methodname] or Stack.staticmethods[methodname]
    end

    terra Stack:size() return self.size end
    terra Stack:capacity() return self.capacity end

    -- Macro for get/set access: stack(i)
    Stack.metamethods.__apply = macro(function(self, i)
        return `self.data[i]
    end)

    -- Initialize with null pointer and zero size/capacity
    terra Stack:__init()
        self.data = nil
        self.size = 0
        self.capacity = 0
    end

    -- Free heap memory and reset state
    terra Stack:__dtor()
        C.free(self.data)
        self:__init()
    end

    -- Create a new stack with initial capacity
    Stack.staticmethods.new = terra(capacity : int)
        return Stack{data=[&T](C.malloc(capacity * sizeof(T))), capacity=capacity}
    end

    -- Reallocate when capacity is exceeded
    terra Stack:realloc(capacity : int)
        self.data = [&T](C.realloc(self.data, capacity * sizeof(T)))
        self.capacity = capacity
    end

    -- Push an element, moving it into the stack
    terra Stack:push(v : T)
        if self.size == self.capacity then
            self:realloc(1 + 2 * self.capacity) -- Double capacity plus one
        end
        self.size = self.size + 1
        self.data[self.size - 1] = __move__(v) -- Move resource
    end

    -- Pop an element, moving it out
    terra Stack:pop()
        if self.size > 0 then
            var tmp = __move__(self.data[self.size - 1]) -- Move resource
            self.size = self.size - 1
            return tmp
        end
    end

    return Stack
end)
```

## Implementation of a dynamic vector
Next, we’ll implement DynamicVector, a managed type that builds on Terra’s move semantics to create a fixed-size, heap-allocated container. Unlike DynamicStack, it doesn’t reallocate, maintaining a single memory chunk. It supports element access with vector(i) and introduces a user-defined cast from DynamicStack to transfer resources efficiently. With __init and __dtor defined, the auto-generated __move ensures move-only behavior by default, making it a natural extension of our exploration into Terra’s ownership model.

The same general remarks apply as for the dynamic stack implementation. As for the dynamic stack, C's `malloc`, `realloc` and `free` are used to allocate, reallocate, and deallocate resources, respectively.

Specific notes on memory management are:
* Move Semantics: The `__cast` metamethod interpretes a reference to a stack as a reference to a vector. Paired with an auto-generated move method `__move :: {&Vector, &Vector} -> {}` it enables moving from a stack into a vector object.
moves resources from a DynamicStack, nulling its capacity to enforce single ownership.
* Implementation: Implements `__init` and `__dtor`; `__move` is auto-generated, ensuring movability without copyability by default.

```terra
local DynamicVector = terralib.memoize(function(T)

    local struct Vector {
        data : &T   -- Pointer to fixed heap memory
        size : int  -- Number of elements
    }

    Vector.staticmethods = {}

    -- Enable static method dispatch (e.g., Vector.new)
    Vector.metamethods.__getmethod = function(self, methodname)
        return self.methods[methodname] or Vector.staticmethods[methodname]
    end

    -- Initialize with null pointer and zero size
    terra Vector:__init()
        self.data = nil
        self.size = 0
    end

    -- Free heap memory and reset
    terra Vector:__dtor()
        C.free(self.data)
        self.size = 0
    end

    terra Vector:size() return self.size end

    -- Macro for get/set access: vector(i)
    Vector.metamethods.__apply = macro(function(self, i)
        return `self.data[i]
    end)

    -- Allocate a fixed-size vector
    Vector.staticmethods.new = terra(size : int)
        return Vector{[&T](C.malloc(size * sizeof(T))), size}
    end

    -- Import DynamicStack for casting
    local Stack = DynamicStack(T)

    -- Cast preps for calls to `__move :: {&Vector, &Vector} ` mapping a reference to a stack to a reference to a vector.
    Vector.metamethods.__cast = function(from, to, exp)
        if from:ispointer() and from.type == Stack and to:ispointer() and to.type == Vector then
            return quote
                exp.capacity = 0 -- Invalidate Stack’s ownership
            in
                [&Vector](exp) -- Transfer to &Vector, preps for `__move :: {&Vector, &Vector} -> {}`
            end
        else
            error("ArgumentError: not able to cast " .. tostring(from) .. " to " .. tostring(to) .. ".")
        end
    end

    return Vector
end)
```