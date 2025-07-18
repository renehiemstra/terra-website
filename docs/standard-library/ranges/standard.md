## Creating Ranges

### Unitrange
A range with step size 1.

- **Bounded**: From `a` to `b` (exclusive by default).
- **Infinite**: From `a` onward.

Syntax:
```terra
local Unitrange = rn.Unitrange(T)  -- Bounded, T is the value type (e.g., int)
local range = Unitrange.new(a, b)  -- Exclusive end
local range = Unitrange.new(a, b, rn.include_last)  -- Inclusive end

-- Infinite variant
local InfUnitrange = rn.Unitrange(T, {sentinal = "infinite"})
local inf_range = InfUnitrange.new(a)
```

Examples:
```terra
local r = rn.Unitrange(int).new(1, 4)  -- 1, 2, 3
local inf_r = rn.Unitrange(int, {sentinal = "infinite"}).new(1) >> rn.take(3)  -- 1, 2, 3 (truncated)
```

Access elements with `range(i)` (0-based indexing) or loop with `for v in range do ... end`.

### Steprange
A range with a custom step.

- **Bounded**: From `a` to `b` with step `s` (supports positive/negative steps).
- **Infinite**: From `a` with step `s`.

Syntax:
```terra
local Steprange = rn.Steprange(T)  -- Bounded
local range = Steprange.new(a, b, s)  -- Exclusive end
local range = Steprange.new(a, b, s, rn.include_last)  -- Inclusive end

-- Infinite variant
local InfSteprange = rn.Steprange(T, {sentinal = "infinite"})
local inf_range = InfSteprange.new(a, s)
```

Examples:
```terra
local r = rn.Steprange(int).new(1, 7, 2)  -- 1, 3, 5
local backward = rn.Steprange(int).new(1, -5, -2)  -- 1, -1, -3
```

