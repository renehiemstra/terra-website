## Range Combiners

### enumerate
Adds indices to a range (starting from 0).

Syntax:
```terra
for i, v in rn.enumerate(range) do ... end
```

### join
Concatenates multiple ranges.

Syntax:
```terra
local combined = rn.join(range1, range2, ...)
```

### zip
Zips multiple ranges into tuples (stops at the shortest range).

Syntax:
```terra
for t in rn.zip(range1, range2, ...) do
    -- t is a tuple {t._0, t._1, ...}
end
```

### product
Cartesian product of ranges.

Syntax:
```terra
local prod = rn.product(range1, range2, ..., {perm = {order}})  -- perm: optional permutation for iteration order
-- Default perm: reverse order for row-major array indexing
```