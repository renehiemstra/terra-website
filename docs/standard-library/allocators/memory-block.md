# A smart memory block
The allocator API is built around the abstraction of a memory `block`. Unlike traditional designs that store only a pointer to the allocated data, this approach encapsulates additional metadata: the size of the resource and a reference to its allocator. The structure is defined as follows:
```terra
local __Allocator = interface.Interface:new{
    __allocators_best_friend = {&block, size_t, size_t}->{}
}

local struct block{
    ptr : &T                --Pointer to the actual resource
    nbytes : size_t         --Number of bytes allocated
    alloc : __Allocator     --Handle to opaque allocator object
}

```
In this design, `alloc` is an opaque object that conforms to the `__Allocator` interface. This interface includes a handle to the concrete allocator and a vtable with a single function pointer, `__allocators_best_friend`, which manages allocation, reallocation, and deallocation in a unified manner. The alloc field occupies 16 bytes—8 bytes for the allocator handle and 8 bytes for the function pointer—providing a compact yet versatile mechanism for memory management.

This simple yet flexible design offers significant advantages. For instance, a `block` can free it's resources when it runs out of scope or reallocate new memory when the current resource is too small. The following sections will explore the key benefits of this approach in detail.

### Ownership
The allocator API distinguishes between three states of a memory block: empty blocks, blocks that borrow a resource, and blocks that own a resource. These states are determined by the presence or absence of a pointer to the resource (`alloc.ptr`) and a handle to the allocator (`alloc.handle`), as defined by the following methods:
```terra
block.methods.isempty = terra(self : &block)
    return self.ptr==nil and self.alloc.handle==nil
end

block.methods.borrows_resource = terra(self : &block)
    return self.ptr~=nil and self.alloc.handle==nil
end

block.methods.owns_resource = terra(self : &block)
    return self.ptr~=nil and self.alloc.handle~=nil
end
```

This design enables straightforward ownership verification by leveraging access to the concrete allocator instance. For a given allocator `A`, the ownership check is implemented as:
```terra
terra A:owns(blk : &block) : bool
    if not blk:isempty() then
        return [&opaque](self) == [&opaque](blk.alloc.handle)
    end
    return false
end
```
Here, the method compares the allocator’s handle (`self`) with the block’s allocator handle, cast to an opaque pointer type, ensuring a match only for non-empty blocks managed by `A`.

This is powerful, because an `owns` method like this makes it possible to construct allocators that are compositions of others (see the talk of Andrei Alexandrescu on [composable allocators in C++](https://www.youtube.com/watch?v=LIb3L4vKZ7U&t=21s)).

The ability to query ownership in this manner unlocks significant flexibility. It facilitates the construction of composite allocators—allocators built from combinations of other allocators—similar to the composable allocator designs discussed by Andrei Alexandrescu in his [talk on C++ allocator design](https://www.youtube.com/watch?v=LIb3L4vKZ7U&t=21s)). This capability enhances modularity and reuse, allowing developers to tailor memory management strategies to complex application requirements.

### Deallocation
By implementing `__dtor` from the new RAII pull request, the handle to the concrete allocator instance allows the block to be freed automatically when it runs out of scope:
```terra
block.methods.__dtor = terra(self : &block)

    if self:isempty() then return end
    
    if self:borrows_resource() then
        self:__init()
        return
    end

    --run destructors of other smart-blocks that are referenced
    --by block.ptr (allowing destruction of e.g. linked lists)
    --even with cycles.
    ...
    ...
    ...
    
    --when the resource is owned, free the resource
    self.alloc:__allocators_best_friend(self, 0, 0)
end
```
Similarly, it can allocate (when block is empty) or reallocate itself with the same allocator when requested. I'll get back to the implementation of the method `__allocators_best_friend` shortly.

### Copy construction / assignment
A specialized copy assignment is implemented (from the new RAII pull request) that returns a non-owning view of the data
```terra
block.methods.__copy = terra(from : &block, to : &block)
    to.ptr = from.ptr
    to.nbytes = from.nbytes
    to.alloc.handle = nil       --reset the allocator handle to nil
    to.alloc.vtable = nil       --reset the vtable handle to nil
end
```
This means that a resource is only owned by a single object, resulting in safe resource management (no double free's, etc).

### Opaque blocks versus typed blocks and 
The standard `block`, used by allocators, is an opaque block (`T = opaque`). A `__cast` metamethod is implemented that can cast `block(opaque)` to any `block(T)`, thereby reinterpreting the memory. Such a typed block can be used in containers.

### Notion of size
The size of the allocated resource in terms of bytes is explicitly stored in the struct definition. The current size of a typed block in terms of number of elements `T` is then computed as
```terra
block.methods.size = terra(self : &block) : size_t
    return self.nbytes / [block.elsize]
end
```