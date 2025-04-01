# Custom Allocators
Custom alloctors can be implemented easily by defining a new class that satisfies the low-level allocator interface. By calling a base class the allocator user-interface is automatically generated.

## Implementing a new allocator
Implementing a new allocator is easy. Given a struct
```terra
local myallocator = terralib.newstruct("myallocator")
```
the following (lowlevel) interface should be implemented:
```terra
myallocator.methods.__allocate :: {&block, size_t, size_t} -> {}   
myallocator.methods.__deallocate :: {&block} -> {}
myallocator.methods.__reallocate :: {&block, size_t, size_t} -> {}

```
Finally, by calling the following base class the implementation is completed:
```terra
AllocatorBase(myallocator)
```
For an example, please have a look at the corresponding implementation of the `DefaultAllocator` that uses malloc/free.

### The allocator base class
The allocator base class generates and completes the implementation of `myallocator`. It implements the following basic interfaces
```terra
function AllocatorBase(A)

    A.methods.owns :: {&A, blk : &block} -> bool
    
    A.methods.__allocators_best_friend :: {&A, &block, size_t, size_t} -> {}

    A.methods.allocate :: {&A, &block, size_t, size_t} -> {block}
    A.methods.deallocate :: {&A, &block} -> {}
    A.methods.reallocate :: {&A, &block, size_t, size_t} -> {}

end
```
We already covered the implementation of `owns`. The implementation of `__allocators_best_friend` is also straightforward. It looks like this:
```terra
terra A:__allocators_best_friend(blk : &block, size : size_t, counter : size_t)
    var requested_bytes = size * counter
    if blk:isempty() and requested_bytes > 0 then
        self:allocate(blk, size, counter)
    else
        if requested_bytes == 0 then
            --free memory
            self:deallocate(blk)
        elseif requested_bytes > blk:size_in_bytes() then
            --reallocate memory
            self:reallocate(blk, size, counter)
        end
    end
end
```
The idea of wrapping the three key allocator functions in one function is inspired from Lua's  lua_Alloc. See also the blog post on an [allocator API for C](https://nullprogram.com/blog/2023/12/17/).

Let's look at the `allocate` method:
```terra
terra A:allocate(blk : &block, elsize : size_t, counter : size_t)    
    var blk = Imp.__allocate(elsize, counter)
    blk.alloc = self
    return blk
end
```
The implementation of `__allocate`, `__reallocate` and `__deallocate` is specific to each allocator.


## Use in containers
Here follows an example of a simple `DynamicStack` class. A couple of interesting things are the following:
* The allocator is not passed as a template type parameter!
* A `__dtor` method need not be implemented to release the dynamic resources. One is generated automatically since `__dtor` is implemented for `block`.
* In `new` an opaque `block` is automatically cast to a `S = alloc.SmartBlock(T)`. 
* A `get` and `set` method is available for SmartBlock objects of type `S`. Essentially, `S = alloc.SmartBlock(T)` is a smart pointer type.
```terra
local alloc = require("alloc")

local Allocator = alloc.Allocator

local size_t = uint64

local DynamicStack = terralib.memoize(function(T)

    local S = alloc.SmartBlock(T)
    S:complete()

    local struct stack{
        data: S
    }

    stack.staticmethods = {}

    stack.staticmethods.new = terra(alloc : Allocator, size: size_t)
        return stack{alloc:allocate(sizeof(T), size)}
    end

    stack.metamethods.__getmethod = function(self, methodname)
        return self.methods[methodname] or stack.staticmethods[methodname]
    end

    terra stack:size()
        return self.data:size()
    end

    terra stack:get(i : size_t)
        return self.data:get(i)
    end

    terra stack:set(i : size_t, v : T)
        self.data:set(i, v)
    end

    return stack
end)
```
The above class can be used as follows:
```terra
local stack = DynamicStack(double)
local DefaultAllocator =  alloc.DefaultAllocator()

terra main()
    var alloc : DefaultAllocator
    var x = stack.new(&alloc, 2)
    x:set(0, 1.0)
    x:set(1, 2.0)
    io.printf("value of x[0] is: %f\n", x:get(0))
    io.printf("value of x[1] is: %f\n", x:get(1))
end
```

## Recursive datastructures
Recursive datastructures, such as linked lists can be implemented using specialized `__dtor`'s and keeping an array of nodes, or, directly, using smart blocks. The implementation of `block` supports automatic destruction of recursive datastructures, and even cycles. Here follows an example of a cyclical double linked list:

```terra
local alloc = require("alloc")

local DefaultAllocator = alloc.DefaultAllocator()
local Allocator = alloc.Allocator

--implementation of double-linked list
local struct d_node
local smrt_d_node = alloc.SmartBlock(d_node)

--metamethod used here for testing - counting the number
--of times the __dtor method is called
local smrt_d_node_dtor_counter = global(int, 0)
smrt_d_node.metamethods.__dtor = macro(function(self)
    return quote
        if self:owns_resource() then
            smrt_d_node_dtor_counter  = smrt_d_node_dtor_counter + 1
        end
    end
end)

smrt_d_node.metamethods.__entrymissing = macro(function(entryname, self)
    return `self.ptr.[entryname]
end)

smrt_d_node.metamethods.__methodmissing = macro(function(method, self, ...)
    local args = terralib.newlist{...}
    return `self.ptr:[method](args)
end)

struct d_node{
    index : int
    prev : smrt_d_node
    next : smrt_d_node
}
d_node:complete()


smrt_d_node.metamethods.__eq = terra(self : &smrt_d_node, other : &smrt_d_node)
    if not self:isempty() and not other:isempty() then
        return self.ptr == other.ptr
    end
    return false
end

terra smrt_d_node:allocate_next(A : Allocator)
    self.next = A:allocate(sizeof(d_node), 1)
    self.next.index = self.index + 1
    self.next.prev = self --create a view
end

terra smrt_d_node:set_next(next : &smrt_d_node)
    self.next = next  --create a view
end

terra smrt_d_node:set_prev(prev : &smrt_d_node)
    self.prev = prev  --create a view
end

terra main()
    smrt_d_node_dtor_counter = 0
    do
        --define head node
        var head : smrt_d_node = A:allocate(sizeof(d_node), 1)
        head.index = 0
        --make allocations
        head:allocate_next(&A)  --node 1
        head.next:allocate_next(&A) --node 2
        head.next.next:allocate_next(&A) --node 3
        --close loop
        head:set_prev(&head.next.next.next)
        head.next.next.next:set_next(&head) --node 3
    end
    return smrt_d_node_dtor_counter
end
--check that destructor is called four times
assert(main() == 4) 
```

## To do:
The following things remain:
* The current implementation of `block.methods.__dtor` relies on recursion. LLVM may not be able to fully optimize the recursion to a loop, which may seriously limit the size of such datastrutures due to limits in stack-space. In the near future I will rewrite the algorithm using a while loop.
* Right now only a default allocator is implemented based on `malloc`, `realloc`, `calloc` and `aligned_alloc`. Other standard allocators need to be implemented, such as, a 'stack', 'arena', 'freelist' allocators, etc.
* Functionality for composing allocators to build new ones.
* A `SmartBlock(T)` can already be cast to a `SmartBlock(vector(T))` for primitive types `T`. By adding a `__for` metamethod it would become possible to iterate over a `SmartBlock(vector(T))` and enable 'SIMD' instructions in a range for loop.
