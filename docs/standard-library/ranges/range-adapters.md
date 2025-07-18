

## Range Adapters

Adapters are applied using `>>` and can be chained (e.g., `range >> adapter1 >> adapter2`).

### transform
Applies a function to each element.

Syntax:
```terra
local adapter = rn.transform(func, {captures})  -- func is a terra function or macro
-- Example: Double each value
local doubled = range >> rn.transform([terra(i: int) return 2 * i end])
```

### filter
Filters elements based on a predicate.

Syntax:
```terra
local adapter = rn.filter(predicate, {captures})
-- Example: Even numbers
local evens = range >> rn.filter([terra(i: int) return i % 2 == 0 end])
```

### take
Takes the first `n` elements.

Syntax:
```terra
local adapter = rn.take(n: int64)
-- Example
local first_three = range >> rn.take(3)
```

### drop
Drops the first `n` elements.

Syntax:
```terra
local adapter = rn.drop(n: int64)
-- Example
local after_three = range >> rn.drop(3)
```

### take_while
Takes elements while a predicate is true.

Syntax:
```terra
local adapter = rn.take_while(predicate, {captures})
-- Example: Values less than 4
local small = range >> rn.take_while([terra(i: int) return i < 4 end])
```

### drop_while
Drops elements while a predicate is true.

Syntax:
```terra
local adapter = rn.drop_while(predicate, {captures})
-- Example: Drop values less than 4
local large = range >> rn.drop_while([terra(i: int) return i < 4 end])
```

### reverse
Reverses the order of elements (applied as a transform).

Syntax:
```terra
local reversed = range >> rn.reverse()
```
