# Ownership model
Terra’s ownership model ensures every resource has exactly one owner at any time, akin to Rust’s single-ownership principle, preventing data races, dangling pointers, and double-free errors. This model guarantees safety in sequential and shared memory parallel contexts through strict resource transfer and access rules.

## L-Values, R-Values, and B-Values
* L-Values: Values explicitly allocated with a var statement (e.g., `var x : T` or `var x = ...`). They represent named, persistent objects with a defined lifetime.
* R-Values: Temporary objects, typically resulting from function calls. They are short-lived and exist only within their expression.
* B-Values: Reference objects (`&T`), enabling borrowing. They allow the caller to retain ownership while the callee operates on the resource without transferring it.

## Passing by value or by reference
Passing objects to functions or in an assignment can be done in two ways:
1. By value: Transfers ownership to the receiver.
    - L-values: Use the `__copy` method if defined, duplicating the resource, or default to transfering ownership using a move.
    - R-Values: Always transfer ownership by a move.
    - Non-managed objects are trivially copied bitwise.
2. By Reference (B-Values): Grants temporary access via `&T`. No ownership transfer occurs; the original owner retains responsibility for cleanup via `__dtor` in case of managed types.

## Planned safety features
Terra’s single-ownership model enables compile-time verification of resource safety for sequential and parallel programs. The following enhancements are planned to strengthen this model:

1. **Initialization Tracking:**
    - Tracks variable initialization at compile time.
    - Flags use of uninitialized variables (e.g., after a move) as compile errors.
    - Skips `__dtor` for uninitialized objects, improving safety and efficiency.

2. **Constant References (`const&`):** 
    - Enforces read-only access (`const& T`) recursively at compile time.
    - Allows safe, unsynchronized sharing in parallel programs.