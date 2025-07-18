# Ranges
Welcome to the documentation for the Ranges library, a lightweight, efficient ranges implementation in the Terra programming language. This library provides tools for creating and manipulating lazy ranges of values, inspired by concepts from languages like Haskell, Julia and C++ Ranges. It supports bounded and infinite ranges, adapters for transformation and filtering, combiners for joining multiple ranges, and accumulators for reductions.

Ranges are lazy by default, meaning they don't allocate memory for all elements upfront. This makes them suitable for high-performance numerical computing, iterators over large datasets, or composing operations without intermediate storage.

## Design Philosophy

The Ranges library is built around four core principles: composability, efficiency, ease of use, and extensibility.

* **Composability:** The library allows seamless composition of ranges with adapters (e.g., transform, filter), accumulators (e.g., foldl), and combiners (e.g., zip, product). For instance, you can start with multiple ranges, combine them using product, apply adapters like filter or transform, and finish with a reduction—all in a chained, declarative manner.

* **Lightweight and Efficient:** Leveraging Terra's low-level control and lazy evaluation, the library minimizes overhead, avoids unnecessary allocations, and supports borrowing/ownership semantics for resource management.

* **Ease of Use:** Operations are composed using an intuitive piping syntax with the `>>` operator (e.g., `range >> rn.transform(...) >> rn.filter(...)`). These can be directly iterated over in a range-for loop, making code readable and concise.

* **Extensibility:** By implementing a simple iterator interface on your custom type (with methods `next()`, `getvalue()`, and `isvalid()`), you can make it range-compatible, inheriting all the power of adapters, combiners, and operations provided by the library.

## What's next
In the following pages, you'll learn about several of the range types provided with the library, range adapters (e.g., `transform` or `filter`), range combiners (e.g., `join`, `zip`, and `product`), and accumulators (e.g., `foldl`). We also discuss the API for building custom ranges and extending the library with custom range adapters, combiners, or accumulators. Finally, we have a set of tutorials that illustrate the power of ranges in actual code. First we dicuss the core concepts that define Terra ranges.