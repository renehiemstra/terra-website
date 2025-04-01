# Unit-testing



`Terratest` is a lightweight, intuitive unit-testing library designed specifically for the Terra programming language. Implemented as a language extension, it seamlessly integrates with Terra's hybrid Lua-Terra ecosystem, providing a simple yet powerful way to test small units of code. With just four constructs—`test`, `testenv`, `testset`, and `terracode`—it enables both inline assertions and organized test suites.

## Design and API
The design of terratest emphasizes:

* Simplicity: A minimal API for straightforward, safe testing without overhead.
* Flexibility: Write tests inline or in scoped `testenv` and `testset` blocks.
* Integration: Combine Lua and Terra naturally, respecting scoping and closures.
* Control: Inline tests run by default, while `testenv` and `testset` require `--test` or `-t`.

Key constructs include:

* `test`: Evaluates a boolean terra expression (e.g., test foo(1) == 2).
* `testenv`: A named closure for grouping inline tests and testset's, tracking statistics.
* `testset`: A nested closure within testenv for organizing related tests.
* `terracode`: A block for Terra statements that can be used in `testenv` and `testset` environments.

This balance makes terratest beginner-friendly yet robust for advanced use, like parameterized testing.

## Instalation and use
Simply copy paste the file `terratest.t` into your folder or use the Cosm package manager to add it as a dependency to your project. Subsequently, import the language extension by means of the statement:
```terra
import "terratest"
```
Now we're ready to go. Let's dive into some examples.