# Allocator interface
Allocators follow a simple design: an allocator implements the following interface:
```terra
local Allocator = interface.Interface:new{
    allocate = {size_t, size_t} -> {block},
    reallocate = {&block, size_t, size_t} -> {},
    deallocate = {&block} -> {},
    owns = {&block} -> {bool}
}
```
where 'block = block(opaque)'.

Interfaces, such as the one here, are essentially opaque objects that are equiped with a vtable containing function pointers to the actual implementations at runtime. They can simply be passed by reference and do not require any template metaprogramming, since its based on runtime polymorphism.

