# Comparisons with C++ and Rust
Terra’s resource management system harmonizes C++’s control with Rust’s ownership principles, emphasizing both simplicity and efficiency. Compared to C++, Terra forgoes certain flexibilities, such as constructors, in favor of a concise Rule of Three (`__init`, `__copy`, `__dtor`) characterized by simple and safe rules. It enhances performance over C++ for R-values by consistently employing a bitwise copy (memcpy), avoiding C++’s potential for implicit copying or dependence on optimizations.

Relative to Rust, Terra offers increased flexibility at the expense of some safety assurances. Both languages emphasize efficient defaults, yet Terra’s consistent R-value moves avoid the copying that Rust applies to Copy types. Upcoming safety features, like compile-time initialization checks and read-only borrowing with `const&`, will boost Terra’s safety, getting closer to Rust’s strictness while keeping its flexible design.

## Terra vs. C++

### Similarities
* **Explicit memory management**: Both leverage explicit memory management (Terra via C’s `malloc`/`free`, C++ via `new`/`delete`).
* **Assignment Operators**: Terra’s `__copy` resembles C++’s copy assignment operator (`operator=`).
* **Read-Only References**: Planned `const&` mirrors C++’s `const T&` for read-only access.


### Differences
* **Simplicity**: Terra's rule of three (`__init`, `__copy`, `__dtor`) reduces boilerplate by omitting constructors, while C++'s rule of five requires destructor, copy/move constructors, and copy/move assignment.
* **R-Value Handling**: Terra always moves R-values with memcpy, enhancing performance over C++’s potential deep-copying or reliance on optimizations.
* **L-Value Handling**: Terra invokes a move for L-values by default (when `__copy` is not implemented), ensuring explicit transfer, whereas C++ may copy unless an explicit move is implemented.
* **Defaults**: Terra auto-generates `__move` for managed types and `__copy` for aggregrate copyable manged types; C++ defaults to shallow copies unless overridden.

## Terra vs. Rust

### Similarities
* **Single Ownership**: Both ensure one owner per resource, preventing data races.
* **Move-by-Default**: Terra and Rust move resources unless copying is opted in (`__copy` vs. `Copy` trait).
* **Efficient Defaults**: Both prioritize performance, with Terra and Rust moving non-copyable types efficiently.

### Differences
* **Copy Customization**: Terra’s `__copy` allows custom logic for L-values; Rust separates Copy (bitwise) and Clone (custom), applying Copy implicitly.
* **R-Value Semantics**: Terra moves all R-values via memcpy; Rust copies R-values of Copy types, moving only non-Copy types.
* **Safety**: Rust’s borrow checker offers stricter safety; Terra relies on planned features like initialization tracking and `const&` that will bring it closer to Rust's safety features.