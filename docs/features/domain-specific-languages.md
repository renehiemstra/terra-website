# Build your own DSL
Domain-Specific Languages (DSLs) are specialized programming languages crafted to tackle specific types of problems—think image processing, physical simulations, or financial modeling—without the complexity of general-purpose languages like Python, Terra or C++. By focusing on what matters most in your field, DSLs streamline workflows, boost productivity, and bridge the gap between technical experts and domain specialists.

Terra implements an API that makes it really easy to build your own language constructs with tailored syntax, abstractions, and tools that make coding faster, more intuitive, and less prone to error.


## Brainfuck - a minimal language that emulates a Turing machine
With these two operators, you can use Lua to generate _arbitrary_ Terra code at compile-time. This makes the combination of Lua/Terra well suited for writing compilers for high-performance domain-specific languages. For instance, we can implement a _compiler_ for [BF](http://en.wikipedia.org/wiki/Brainfuck), a minimal language that emulates a Turing machine. The Lua function `compile` will take a string of BF code, and a maximum tape size `N`. It then generates a Terra function that implements the BF code. Here is a skeleton that sets up the BF program:

```terra
local function compile(code,N)
    local function body(data,ptr)
        --<<implementation of body>>
    end
    return terra()
        --an array to hold the tape
        var data : int[N]
        --clear the tape initially
        for i = 0, N do
            data[i] = 0
        end
        var ptr = 0
        --generate the code for the body
        [ body(data,ptr) ]
    end
end
```

The function `body` is responsible for generating body of the BF program given the code string:
```terra
local function body(data,ptr)
    --the list of terra statements that make up the BF program
    local stmts = terralib.newlist()

    --loop over each character in the BF code
    for i = 1,#code do
        local c = code:sub(i,i)
        local stmt
        --generate the corresponding Terra statement
        --for each BF operator
        if c == ">" then
            stmt = quote ptr = ptr + 1 end
        elseif c == "<" then
            stmt = quote ptr = ptr - 1 end
        elseif c == "+" then
            stmt = quote data[ptr] = data[ptr] + 1 end
        elseif c == "-" then
            stmt = quote data[ptr] = data[ptr] - 1 end
        elseif c == "." then
            stmt = quote C.putchar(data[ptr]) end
        elseif c == "," then
            stmt = quote data[ptr] = C.getchar() end
        elseif c == "[" then
            error("Implemented below")
        elseif c == "]" then
            error("Implemented below")
        else
            error("unknown character "..c)
        end
        stmts:insert(stmt)
    end
    return stmts
end
```
It loops over the code string, and generates the corresponding Terra code for each character of BF (e.g. ">" shifts the tape over by 1 and is implemented by the Terra code `ptr = ptr + 1`). We can now compile a BF function:
```terra
add3 = compile(",+++.")
```
The result, `add3`, is a Terra function that adds3 to an input character and then prints it out:
```terra
add3:printpretty()
-- bf_t_46_1 = terra() : {}
-- var data : int32[256]
-- ...
-- var ptr : int32 = 0
-- data[ptr] = <extract0> #getchar()#
-- data[ptr] = data[ptr] + 1
-- data[ptr] = data[ptr] + 1
-- data[ptr] = data[ptr] + 1
-- <extract0> #putchar(data[ptr])#
-- end
```

We can also use `goto` statements (`goto labelname`) and labels (`::labelname::`) to implement BF's looping construct:
```terra
local function body(data,ptr)
    local stmts = terralib.newlist()
    
    --add a stack to keep track of the beginning of each loop
    local jumpstack = {}
    
    for i = 1,#code do
        local c = code:sub(i,i)
        local stmt
        --generate the corresponding Terra statement
        --for each BF operator
        if c == ">" then
            stmt = quote ptr = ptr + 1 end
        elseif c == "<" then
            -- ...
            -- handle '+', etc
            -- ...
        elseif c == "[" then
            --generate labels to represent the beginning 
            --and ending of the loop
            --the 'symbol' function generates a globally unique
            --name for the label
            local target = { before = symbol(), after = symbol() }
            table.insert(jumpstack,target)
            stmt = quote 
                --label for beginning of the loop
                ::[target.before]:: 
                if data[ptr] == 0 then
                    goto [target.after] --exit the loop
                end
            end
        elseif c == "]" then
            --retrieve the labels that match this loop
            local target = table.remove(jumpstack)
            assert(target)
            stmt = quote 
                goto [target.before] --loop back edge
                :: [target.after] :: --label for end of the loop
            end
        else
            error("unknown character "..c)
        end
        stmts:insert(stmt)
    end
    return stmts
end
```

We are using these generative programming constructs to implement domain-specific languages and auto-tuners: check out our [PLDI paper](/publications.html) that describes our implementation of Orion, a language for image processing kernels, and [Ebb](http://ebblang.org/), which is a DSL for solving mesh-based PDE's in Terra.