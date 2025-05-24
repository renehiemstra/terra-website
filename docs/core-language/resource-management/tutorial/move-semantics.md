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

```terra file=./tutorials/tutorial-move-semantics/utils.t start=utils_start end=utils_end
```
The implementation of the dynamic stack, vector and vector pair will be added to a `libtutorial.t` file.

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

```terra file=./tutorials/tutorial-move-semantics/libtutorial.t start=dynamic_stack_start end=dynamic_stack_end
```

## Implementation of a dynamic vector
Next, we’ll implement `DynamicVector`, a managed type that builds on Terra’s move semantics to create a fixed-size, heap-allocated container. Unlike `DynamicStack`, it doesn’t reallocate, maintaining a single memory chunk. It supports element access with `vector(i)` and introduces a user-defined cast from `DynamicStack` to transfer resources efficiently. With `__init` and `__dtor` defined, the auto-generated `__move` ensures move-only behavior by default, making it a natural extension of our exploration into Terra’s ownership model.

The same general remarks apply as for the `DynamicStack` implementation. C's `malloc`, `realloc` and `free` are used to allocate, reallocate, and deallocate resources, respectively.

Specific notes on memory management are:
* Move Semantics: The `__cast` metamethod reinterpretes a reference to a stack as a reference to a vector. Paired with an auto-generated move method `__move :: {&Vector, &Vector} -> {}` it enables moving from a stack into a vector object.
* Implementation: Implements `__init` and `__dtor`; `__move` is auto-generated, ensuring movability without copyability by default.

```terra file=./tutorials/tutorial-move-semantics/libtutorial.t start=dynamic_vector_start end=dynamic_vector_end
```


## Implementation of an aggregate managed type
The `DualVector` is an aggregate datastructure of two `DynamicVector`'s. Since `DynamicVector` is a managed type, `DualVector` is too. It's `__init`, `__move`, and `__dtor` method will be auto-generated.

```terra file=./tutorials/tutorial-move-semantics/libtutorial.t start=dynamic_vector_pair_start end=dynamic_vector_pair_end
```


Consider next the following application code where the data structures are combined. We'll highlight where moves or copies are taking place

```terra file=./tutorials/tutorial-move-semantics/tutorial.t start=tutorial_start end=tutorial_end
```