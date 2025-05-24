```js file=./test.js start=start_here end=end_here
```


# Tutorial - Move semantics in Terra
In this tutorial, we explore Terra’s resource management system through the lens of move semantics—its default approach to handling resources. We’ll implement basic data structures to demonstrate how managed types integrate seamlessly, showcasing the power and simplicity of ownership transfer in Terra.

We’ll build the following managed types:

* `DynamicStack`: A dynamically sized container that allocates memory on the heap. It offers element access, push and pop methods, and automatically reallocates resources when capacity is exceeded.
* `DynamicVector`: A dynamically sized container that allocates a single chunk of heap memory without reallocation. It provides element access and supports a user-defined cast from a `DynamicStack` for resource transfer.
* `Pair`: An aggregate type combining two Dynamic Vectors, with element access to its paired components.

Our focus is on Terra’s move semantics: how resources are transferred efficiently by default, ensuring single ownership without unnecessary copying. Let’s dive in and see these concepts in action!

## Tutorial setup
You can either download the tutorial files [here](https://github.com/simkinetic/tutorial-move-semantics.git) or follow along. We'll consider the following directory structure:
```plaintext
/tutorial-move-semantics/
  ├── libtutorial.t
  ├── tutorial.t
  └── utils.t
```
First we'll write a small library for logging and checking asserts. Put the code below in a file `utils.t`. Note how easy it is to simply hijack C-functions you are familiar with.



```terra
local C = terralib.includecstring [[
    #include <stdio.h>
    #include <stdlib.h>
]]

local ffi = require("ffi")

local S = {}

S.error = macro(function(expr, msg)
    local tree = expr.tree
    local filename = tree.filename
    local linenumber = tree.linenumber
    local offset = tree.offset
    local loc = filename .. ":" .. linenumber .. "+" .. offset
    return quote
        terralib.debuginfo(filename, linenumber)
        C.printf("%s: %s\n", loc, msg)
        escape
            --traceback currently does not work on macos
            if ffi.os == "Linux" then
                emit quote terralib.traceback(nil) end
            end
        end
        C.abort()
    end
end)

S.assert = macro(function(condition)
    return quote
        if not condition then
            S.error(condition, "assertion failed!")
        end
    end
end)

S.printf = C.printf

return S
```

## Implementation of a dynamic stack
Let’s kick off with `DynamicStack`, a managed type that exemplifies Terra’s move semantics. This dynamic, heap-allocated container supports element access via `stack(i)`, along with push and pop methods. It automatically reallocates when capacity is exceeded. By defining only `__init` and `__dtor`, we leverage Terra’s auto-generated `__move` for efficient resource transfers, enforcing move-only behavior without copying—a perfect entry point to understanding Terra’s default ownership and resource management.

Some general remarks are:
* Library Support: Load `terralibext` for memory management and C’s `stdlib` via    `terralib.includec("stdlib.h")`.
* The Lua function `terralib.memoize` enables caching of the definition `DynamicStack(T)` for element type `T`.
* Static Methods:`Stack.metamethods.__getmethod` simplifies static method access, enabling calls like `Stack.new`.
* Element Access: `Stack.metamethods.__apply`, a macro, enables `stack(i)` for both get/set access.

**Memory Management Notes**
* C Integration: Uses `malloc`, `realloc`, and `free` from C’s `stdlib` for heap management.
* Move Semantics: `push` and `pop` use `__move__` to transfer resources via a type’s `__move` method (if defined), avoiding copies.
* Implementation: Implements `__init` and `__dtor`; `__move` is auto-generated, making the stack movable but not copyable by default.

```terra
-- Load support for RAII
require "terralibext"
-- Load C functions for io and stdlib
local C = terralib.includec("stdlib.h")
-- Load terra assert library
local debug = require("debug")

local DynamicStack = terralib.memoize(function(T)
    local struct Stack {
        data : &T       -- Pointer to heap-allocated elements
        size : int      -- Current number of elements
        capacity : int  -- Maximum capacity before reallocation
    }

    -- This table stores all the static methods
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
        if self.data~=nil then
            debug.printf("Deleting stack.\n")
            C.free(self.data)
            self.data = nil
        end
    end

    -- Create a new stack with initial capacity
    Stack.staticmethods.new = terra(capacity : int)
        return Stack{data=[&T](C.malloc(capacity * sizeof(T))), capacity=capacity}
    end

    -- Reallocate when capacity is exceeded
    terra Stack:realloc(capacity : int)
        debug.printf("Reallocating stack memory.\n")
        self.data = [&T](C.realloc(self.data, capacity * sizeof(T)))
        self.capacity = capacity
    end

    -- Push an element, moving it into the stack
    terra Stack:push(v : T)
        if self.size == self.capacity then
            self:realloc(1 + 2 * self.capacity) -- Double capacity plus one
        end
        self.size = self.size + 1
        self.data[self.size - 1] = __move__(v) -- Explicit move, avoiding copy when `v` is managed and copyable
    end

    -- Pop an element, moving it out
    terra Stack:pop()
        if self.size > 0 then
            var tmp = __move__(self.data[self.size - 1]) -- Explicit move, cleaning resources of Stack element in case `T` is managed
            self.size = self.size - 1
            return tmp
        end
    end

    return Stack
end)
```

## Implementation of a dynamic vector
Next, we’ll implement `DynamicVector`, a managed type that builds on Terra’s move semantics to create a fixed-size, heap-allocated container. Unlike `DynamicStack`, it doesn’t reallocate, maintaining a single memory chunk. It supports element access with `vector(i)` and introduces a user-defined cast from `DynamicStack` to transfer resources efficiently. With `__init` and `__dtor` defined, the auto-generated `__move` ensures move-only behavior by default, making it a natural extension of our exploration into Terra’s ownership model.

The same general remarks apply as for the `DynamicStack` implementation. C's `malloc`, `realloc` and `free` are used to allocate, reallocate, and deallocate resources, respectively.

Specific notes on memory management are:
* Move Semantics: The `__cast` metamethod reinterpretes a reference to a stack as a reference to a vector. Paired with an auto-generated move method `__move :: {&Vector, &Vector} -> {}` it enables moving from a stack into a vector object.
* Implementation: Implements `__init` and `__dtor`; `__move` is auto-generated, ensuring movability without copyability by default.

```terra
-- Load support for RAII
require "terralibext"
-- Load C functions for io and stdlib
local C = terralib.includec("stdlib.h")
-- Load terra assert library
local debug = require("debug")

local 

local DynamicVector = terralib.memoize(function(T)

    local struct Vector {
        data : &T   -- Pointer to fixed heap memory
        size : int  -- Number of elements
    }

    -- This table stores all the static methods
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
        if self.data~=nil then
            C.printf("Deleting vector.\n")
            C.free(self.data)
            self.data = nil
            self.size = 0
        end
    end

    terra Vector:size() return self.size end

    -- Macro for get/set access: vector(i)
    Vector.metamethods.__apply = macro(function(self, i)
        return `self.data[i]
    end)

    -- Allocate a dynamic vector of `size`
    Vector.staticmethods.new = terra(size : int)
        return Vector{data=[&T](C.malloc(size * sizeof(T))), size=size}
    end

    -- Import DynamicStack for casting
    local Stack = DynamicStack(T)

    -- Reinterprete a reference to a stack to a reference of a vector. This is for example used in `__move :: {&Vector, &Vector}` when one of the arguments is a pointer to a stack
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

## Implementation of an aggregate managed type
The `DualVector` is an aggregate datastructure of two `DynamicVector`'s. Since `DynamicVector` is a managed type, `DualVector` is too. It's `__init`, `__move`, and `__dtor` method will be auto-generated.
```terra
local DualVector = terralib.memoize(function(T)

    local Vector = DynamicVector(T)

    local struct Dualvec {
        first : Vector
        second : Vector
    }

    -- This table stores all the static methods
    Dualvec.staticmethods = {}

    -- Enable static method dispatch (e.g., Dualvec.new)
    Dualvec.metamethods.__getmethod = function(self, methodname)
        return self.methods[methodname] or Dualvec.staticmethods[methodname]
    end

    -- Create a new `DualVector`. Note that the function arguments are passed by value. Since `Vector` does not implement `__copy`, the function argumens will be moved from by default. 
    Dualvec.staticmethods.new = terra(first : Vector, second : Vector)
        debug.assert(first:size() == second:size(), "Error: sizes are not compatible.")
        return Dualvec{first=first, second=second}
    end

    -- Macro for get/set access: dualvector(i)
    Dualvec.metamethods.__apply = macro(function(self, i)
        return quote
        in
            self.first(i), self.second(i)
        end
    end)

    terra Dualvec:size() return self.first:size() end

    return Dualvec
end)
```

Consider next the following application code where the data structures are combined. We'll highlight where moves or copies are taking place
```terra
local C = terralib.includec("stdlib")

local Stack = DynamicStack(int)
local Vector = DynamicVector(int)
local Dualvector = DualVector(int)

terra main()
    --create a stack and push some data
    var s = Stack.new(3)
    C.printf("Adding three elements to 's'.\n")
    s:push(1)
    s:push(2)
    s:push(3)
    C.printf("Adding two more elements to 's'.\n")
    s:push(4) --reallocating here
    s:push(5)

    --move contents of `s` into a Vector
    C.printf("Move 's' -> 'v'\n")
    debug.assert(s:size() == 5)
    var v : Vector = s
    debug.assert(s:size() == 0)
    debug.assert(v:size() == 5)

    --create another stack and push some data
    var t = Stack.new(5)
    t:push(1)
    t:push(2)
    t:push(3)
    t:push(2)
    t:push(1)

    --move contents of `t` into a Vector
    C.printf("Move 't' -> 'w'\n")
    debug.assert(t:size() == 5)
    var w : Vector = t
    debug.assert(t:size() == 0)
    debug.assert(w:size() == 5)

    --move contents of vector v, w into the aggregate data-structure
    C.printf("Move '(v, w)' -> 'dual'\n")
    var dual = Dualvector.new(v, w)
    debug.assert(dual:size() == 5)
    debug.assert(v:size() == 0 and w:size() == 0)

    --print contents of aggregate data type
    C.printf("Contents of 'dual':\n")
    for i=0,5 do
        var x, y = dual(i)
        C.printf("  dual(%d) = (%d, %d)\n", i, x, y)
    end 

end
```