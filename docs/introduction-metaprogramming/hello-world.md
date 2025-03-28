# First metaproramming example

We begin with metaprogramming in `terra` by reproducing the `C` example from
the introduction:
```terra
local MSG = "Hello, World!"
local C = terralib.includec("stdio.h")

terra main()
  C.printf(MSG .. "\n")
  return 0
end
main()
```
Compared to the `C` version we observe that `MSG` is not a macro but a valid
`lua` variable. The same applies to the `C` wrapper imported with `terralib.includec`.
As we will see later, it is stored as a `lua` table!
Function calls from `stdio.h` inside the `main` function are then simple index
operations on this table. Note that in the last line of our example we explicitly
call `main`. In contrast to `C`, where the function `main` is always executed,
`terra` does not run a compiled function by default.
