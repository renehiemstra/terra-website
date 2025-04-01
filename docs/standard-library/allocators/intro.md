# Allocators in Terra
Allocators give developers the power to manage memory with precision, choosing where and how memory is allocated—whether from the stack for quick, temporary objects or the heap for longer-lived data. This flexibility helps optimize performance, reduce memory fragmentation, and keep related data close together for faster access, which is crucial for high-performance applications.

## Design Philosophy
Terra’s allocator system is designed to be simple, extensible, and composable, integrating seamlessly with its low-level capabilities. Unlike C++, which often ties allocators to container templates, Terra treats allocators as opaque objects that implement an allocator interface. This approach decouples the allocator type from the container type, eliminating the need for a template parameter to support generic allocators. Additionally, Terra makes it easy to implement custom allocators without added complexity, enhancing usability for developers.

## What’s Next
This guide will walk you through the allocator system’s design, covering key abstractions like memory blocks and interfaces, and conclude with practical tutorials. You’ll learn how to use the default allocator and explore advanced features, such as using a memory-tracing allocator, in practical Terra projects.