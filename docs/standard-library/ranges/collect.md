## Collecting Results

Ranges can be collected into containers implementing `Stack` or `DStack` concepts:

```terra
range:collect(container)  -- For fixed-size stacks (pre-allocate space)
range:pushall(container)  -- For dynamic stacks
```