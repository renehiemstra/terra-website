## Examples

From tests:

1. **Basic Unitrange**:
   ```terra
   local r = rn.Unitrange(int).new(1, 4)  -- 1,2,3
   for v in r do print(v) end
   ```

2. **Chained Adapters**:
   ```terra
   local filtered_doubled = rn.Unitrange(int){0, 5} >>
       rn.filter([terra(i: int) return i % 2 == 0 end]) >>
       rn.transform([terra(i: int) return 3 * i end])
   -- Yields: 0, 6, 12
   ```

3. **Zip and Reduce**:
   ```terra
   for w in rn.zip(rn.Unitrange(int){1,4}, rn.Unitrange(int){2,6}) >> rn.reduce(rn.op.add) do
       print(w)  -- 3,5,7
   end
   ```

4. **Product**:
   ```terra
   for t in rn.product(rn.Unitrange(int){1,4}, rn.Unitrange(int){2,4}) do
       print(t._0, t._1)  -- Cartesian pairs
   end
   ```