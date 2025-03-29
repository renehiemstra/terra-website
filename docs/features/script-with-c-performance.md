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