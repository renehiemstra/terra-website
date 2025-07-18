## Core Concepts
To use the Ranges library in your Terra project, load the library in your Terra script:
```terra
local rn = require("range")
```

### Ranges
A **range** is a struct that represents a sequence of values. It implements an iterator interface for use in Terra's `for` loops. Key traits:
- `value_t`: The type of values in the range (e.g., `int`).
- `iterator_t`: The internal iterator type.
- Methods: `getiterator()`, `__for` metamethod for looping.

Ranges can be **bounded** (finite, with start and end) or **infinite** (unbounded, e.g., starting from a value and incrementing forever).

### Iterators
Iterators handle traversal:
- `next()`: Advance the state.
- `getvalue()`: Get the current value.
- `isvalid()`: Check if the iterator is still valid (not at end).

The following code that simply sums up all elements in a range
```terra
var s = 0
for i in rn do
    s = s + i
end
```
expands into the following `while`-loop.
```terra
var s = 0
var iter = rn:getiterator()
while iter:isvalid() do             --while not at the end
    var value = iter:getvalue()     --get value
    s = s + value                   --use value in loop-body
    iter:next()                     --increment state
end
```


### Adapters
Adapters modify ranges lazily using the `>>` operator (e.g., `range >> adapter`). They wrap the original range without copying data.

### Combiners
Combiners merge multiple ranges (e.g., `zip`, `product`).

### Resource Management
Ranges support borrowing (pass by reference) and ownership transfer (via `__move__`). This integrates with Terra's resource management for efficiency.

