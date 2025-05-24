# Core concepts
Below we summarize the core concepts and rules relevant to resource management in Terra. These concepts will be explained in greater detail in the next sections.

## Rule of three
There are three methods that the user can implement for a struct `T` in order to manage resources:
1. `__init :: &T -> {}`: Optional object initialization. A default is auto-generated setting pointer fields to nil. 
2. `__copy :: {&S, &T} -> {}`: Optional copy-assignment. Supports source and receiver to be of different types.
3. `__dtor :: &T -> {}`: User-defined destructor.

## Managed types
A struct is managed if it implements `__dtor`. Managed types require explicit resource cleanup (e.g., freeing heap memory). Without `__dtor`, a type behaves as a regular stack-allocated object with no special management.

## Copyable types
A type is copyable if:
1. It is a primitive type (e.g., int, double) or a simd vector type or a function pointer, which are all trivially copyable by default.
2. An unmanaged struct with trivially copyable fields.
3. It is a managed struct with a `__copy` method, either:
    * User-defined;
    * Auto-generated for aggregates where all fields are copyable and at least one is a managed type.
4. An array with an element type that is trivially copyable or uses `__copy`.

It's easier to remember the types that are not copyable:
1. It is a pointer type, excluding function pointers.
2. It is a managed struct type that does not implement a `__copy` method. In this case the trait `T.iscopyable = false` will be set automatically.

## Movable types
Unmanaged types are generally moveable but just invoke a memcopy. A managed type is movable if it can be transferred via a move. Key rules:
1. All managed types (those with `__dtor`) are movable by default.
2. A type `T` can be made immovable by setting the type trait `T.ismovable = false`, in which case moving will be prohibited at compile-time.

For managed types the move from a source to a reciever is implemented as follows: (1) the reciever's `__dtor` is called first, followed by a memcopy from source to receiver and subsequent initialization of the source.


