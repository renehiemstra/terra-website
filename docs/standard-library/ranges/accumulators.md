## Accumulators and Reductions

### foldl
Left-fold (accumulate) over a range.

Syntax:
```terra
local acc = range >> rn.foldl(binary_func, {captures})
local result = acc:accumulatefrom(initial_value)
-- Or by reference for mutable state
```

Example:
```terra
local sum = range >> rn.foldl([terra(a: int, b: int) return a + b end])
local total = sum:accumulatefrom(0)
```

### reduce
Reduces tuples (e.g., from zip/product) using a binary operation.

Syntax:
```terra
local reducer = rn.reduce(rn.op.add)  -- or rn.op.mul, rn.op.div
local summed = zipped_range >> reducer
```

Predefined operations: `rn.op.add`, `rn.op.mul`, `rn.op.div`.