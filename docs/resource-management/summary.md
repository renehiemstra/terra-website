I am developing a new resource management system for the Terra programming language. The new approach uses scope-bound-resource management, which enable Terra's powerful metaprogramming abilities while maintaining low-level performance.

In the following I will explain the ownership model, core concepts such that we can analyze the correctness of the approach. Subsequently, I will need you help documenting the approach.

# Core concepts
Below we summarize the core concepts and rules relevant to resource management in Terra. These concepts will be explained in greater detail in the next sections.

## Rule of three
1. `__init :: &T -> {}`: Object initialization. Default generation setting pointers to nil. 
2. `__copy :: {&T, &T} -> {}`: Optional copy-assignment for l-values. Auto-generation for copyable aggregate types. Supports source and receiver to be of different types when manually implemented.
3. `__dtor :: &T -> {}`: User-defined destructor. No default generation.

## Managed types
A struct is managed if it implements `__dtor`. Managed types require explicit resource cleanup (e.g., freeing heap memory). Without `__dtor`, a type behaves as a regular stack-allocated object with no special management.

## Copyable types
A type is copyable if:
1. It is primitive type (e.g., int, double) or a simd vector type or a function pointer, which are all trivially copyable by default.
2. An unmanaged struct with trivially copyable fields.
3. It is a managed struct with a `__copy` method, either:
    * User-defined;
    * Auto-generated for aggregates where all fields are copyable and at least one is a managed type.
4. An array with an element type is trivially copyable or uses `__copy`.

A type is not copyable if:
1. It is a pointer type, excluding function pointers.
2. It is a managed struct type that does not implement a `__copy` method. In this case the trait `T.iscopyable = false` will be set automatically.

## Movable types
Unmanaged types are generally moveable but just invoke a memcopy. A managed type is movable if it can be transferred via a move. Key rules:
1. All managed types (those with `__dtor`) are movable by default.
2. A type `T` can be made immovable by setting the type trait `T.ismovable = false`, in which case moving will be prohibited at compile-time.

For managed types the move from a source to a reciever is implemented as follows: (1) the reciever's __dtor is called first, followed by a memcopy from source to receiver and subsequent initialization of the source.

## L-values, R-values and B-values
* L-values are values that have been explicity allocated using a `var ...` statement.
* R-values are temporary objects typically a result from a function call.
* B-values are reference objects (`&T`). They enable borrowing, allowing the caller to retain ownership while the callee operates on the resource.

## Move-By-Default
* If the source variable is an L-value of a managed type that is copyable then passing-by-value in a function call or an assignment invokes the `__copy` method. 
* If the source variable is an L-value of a managed type that is not copyable but is movable then passing-by-value in a function call or an assignment invokes a compiler implemented move assignment.

# New ownership model
Terra’s new ownership model ensures every resource has exactly one owner at any time, akin to Rust’s single-ownership principle, preventing data races, dangling pointers, and double-free errors. This model guarantees safety in sequential and shared memory parallel contexts through strict resource transfer and access rules.

## L-Values, R-Values, and B-Values
* L-Values: Values explicitly allocated with a var statement (e.g., `var x : T` or `var x = ...`). They represent named, persistent objects with a defined lifetime.
* R-Values: Temporary objects, typically resulting from function calls. They are short-lived and exist only within their expression.
* B-Values: Reference objects (`&T`), enabling borrowing. They allow the caller to retain ownership while the callee operates on the resource without transferring it.

## Passing by value or by reference
Passing objects to functions or in an assignment can be done in two ways:
1. By value: Transfers ownership to the receiver.
    - L-values: Use the `__copy` method if defined, duplicating the resource, or default to transfering ownership using a move.
    - R-Values: Always transfer ownership by a move (implemented as a memcopy - shallow copy - in the compiler). Terra's aggressive inlining and LLVM optimizations mean that temporaries are reduced in many scenario's.
2. By Reference (B-Values): Grants temporary access via `&T`. No ownership transfer occurs; the original owner retains responsibility for cleanup via `__dtor` in case of managed types.

## Planned safety features
Terra’s single-ownership model enables compile-time verification of resource safety for sequential and parallel programs. The following enhancements will strengthen this model:

1. **Initialization Tracking:**
    - Tracks variable initialization at compile time.
    - Flags use of uninitialized variables (e.g., after a move) as compile errors.
    - Skips `__dtor` for uninitialized objects, improving safety and efficiency.

2. **Constant References (`const&`):** 
    - Enforces read-only access (`const& T`) recursively at compile time.
    - Allows safe, unsynchronized sharing in parallel programs.
    - Complements `__move` and `&T` with immutable borrowing.