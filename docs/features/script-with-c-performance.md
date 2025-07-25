---
id: script-with-c-performance
title: Script with C-performance
---

# Script with C-performance

Terra is a simple and expressive statically typed compiled language built on top of LuaJIT, the fastest JIT-compiler in the West. This unique combination allows Terra to deliver performance comparable to C while maintaining the flexibility and ease of a scripting language.

## High Performance via LuaJIT

Terra leverages LuaJIT’s powerful JIT (Just-In-Time) compilation capabilities, which use the same LLVM backend as Apple’s C compilers. This means Terra code achieves near-C performance—often within 5% of equivalent C code compiled with Clang, as demonstrated by benchmarks like `nbody` and `fannhakunen` from the [Programming Language Benchmark Game](http://benchmarksgame.alioth.debian.org). Here’s a simple example from Terra’s introduction:

```terra
-- Plain Lua code
function printhello()
    print("Hello, Lua!")
end
printhello()

-- Terra code JIT-compiled via LuaJIT
C = terralib.includec("stdio.h")
terra hello(argc : int, argv : &rawstring)
    C.printf("Hello, Terra!\n")
    return 0
end
hello(0, nil) -- JIT-compiled and executed



__Terra__ is a low-level system programming language that is embedded in and meta-programmed by the __Lua__ programming language:
```terra
--This top-level code is plain Lua code.
function printhello()
    -- This is a plain Lua function
    print("Hello, Lua!")
end
printhello()

-- Terra is backwards compatible with C, we'll use C's io library in our example.
C = terralib.includec("stdio.h")

-- The keyword 'terra' introduces a new Terra function.
terra hello(argc : int, argv : &rawstring)
    -- Here we call a C function from Terra
    C.printf("Hello, Terra!\n")
    return 0
end

-- You can call Terra functions directly from Lua, they are JIT compiled 
-- using LLVM to create machine code
hello(0,nil)

-- Terra functions are first-class values in Lua, and can be introspected 
-- and meta-programmed using it
hello:disas()
--[[ output:
    assembly for function at address 0x60e6010
    0x60e6010(+0):		push	rax
    0x60e6011(+1):		movabs	rdi, 102129664
    0x60e601b(+11):		movabs	rax, 140735712154681
    0x60e6025(+21):		call	rax
    0x60e6027(+23):		xor	eax, eax
    0x60e6029(+25):		pop	rdx
    0x60e602a(+26):		ret
]]

-- You can save Terra code as executables, object files, or shared libraries 
-- and link them into existing programs
terralib.saveobj("helloterra",{ main = hello })
```
Try this example and others in your browser via [Replit](https://replit.com/@terralang/terra).
