"use strict";(self.webpackChunkterra_website=self.webpackChunkterra_website||[]).push([[5503],{4853:(e,n,a)=>{a.d(n,{c:()=>i,x:()=>t});a(6540);var r=a(4848);const t=e=>{let{children:n}=e;return(0,r.jsx)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:n})},i=e=>{let{children:n,title:a}=e;return(0,r.jsxs)("div",{style:{flex:1,minWidth:"300px"},children:[a&&(0,r.jsx)("div",{style:{color:"var(--ifm-font-color-base)",padding:"0.5rem 1rem",borderRadius:"var(--ifm-pre-border-radius, 4px) var(--ifm-pre-border-radius, 4px) 0 0",borderBottom:"none",fontSize:"0.9rem",fontWeight:"bold"},children:a}),(0,r.jsx)("div",{style:{marginTop:a?"0":"inherit",borderRadius:a?"0 0 var(--ifm-pre-border-radius, 4px) var(--ifm-pre-border-radius, 4px)":"var(--ifm-pre-border-radius, 4px)",overflow:"hidden"},children:n})]})}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var r=a(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},9833:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"features/multistage-programming","title":"Multistage programming","description":"Terra is a low-level system programming language that is embedded in and meta-programmed by the Lua programming language:","source":"@site/docs/features/multistage-programming.mdx","sourceDirName":"features","slug":"/features/multistage-programming","permalink":"/terra-website/docs/features/multistage-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/multistage-programming.mdx","tags":[],"version":"current","frontMatter":{"id":"multistage-programming","title":"Multistage programming"}}');var t=a(4848),i=a(8453),s=a(4853);const o={id:"multistage-programming",title:"Multistage programming"},l="Multistage programming",c={},d=[{value:"How can you use Terra?",id:"how-can-you-use-terra",level:2},{value:"An embedded JIT-compiler for building languages",id:"an-embedded-jit-compiler-for-building-languages",level:3},{value:"A scripting-language with high-performance extensions",id:"a-scripting-language-with-high-performance-extensions",level:3},{value:"A stand-alone low-level language",id:"a-stand-alone-low-level-language",level:3},{value:"Generative Programming",id:"generative-programming",level:2},{value:"Multi-stage operators",id:"multi-stage-operators",level:3},{value:"Compiling-a-language",id:"compiling-a-language",level:3},{value:"Embedding-and-interoperability",id:"embedding-and-interoperability",level:2},{value:"Simplicity",id:"simplicity",level:2},{value:"Conditional Compilation",id:"conditional-compilation",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Templating",id:"templating",level:3},{value:"Specialization",id:"specialization",level:3},{value:"Class Systems",id:"class-systems",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"multistage-programming",children:"Multistage programming"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Terra"})," is a low-level system programming language that is embedded in and meta-programmed by the ",(0,t.jsx)(n.strong,{children:"Lua"})," programming language:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'--This top-level code is plain Lua code.\nfunction printhello()\n    -- This is a plain Lua function\n    print("Hello, Lua!")\nend\nprinthello()\n\n-- Terra is backwards compatible with C, we\'ll use C\'s io library in our example.\nC = terralib.includec("stdio.h")\n\n-- The keyword \'terra\' introduces a new Terra function.\nterra hello(argc : int, argv : &rawstring)\n    -- Here we call a C function from Terra\n    C.printf("Hello, Terra!\\n")\n    return 0\nend\n\n-- You can call Terra functions directly from Lua, they are JIT compiled \n-- using LLVM to create machine code\nhello(0,nil)\n\n-- Terra functions are first-class values in Lua, and can be introspected \n-- and meta-programmed using it\nhello:disas()\n--[[ output:\n    assembly for function at address 0x60e6010\n    0x60e6010(+0):\t\tpush\trax\n    0x60e6011(+1):\t\tmovabs\trdi, 102129664\n    0x60e601b(+11):\t\tmovabs\trax, 140735712154681\n    0x60e6025(+21):\t\tcall\trax\n    0x60e6027(+23):\t\txor\teax, eax\n    0x60e6029(+25):\t\tpop\trdx\n    0x60e602a(+26):\t\tret\n]]\n\n-- You can save Terra code as executables, object files, or shared libraries \n-- and link them into existing programs\nterralib.saveobj("helloterra",{ main = hello })\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Try this example and others in your browser via ",(0,t.jsx)(n.a,{href:"https://replit.com/@terralang/terra",children:"Replit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Like C/C++, Terra is a  ",(0,t.jsx)(n.strong,{children:"statically-typed"}),", ",(0,t.jsx)(n.strong,{children:"compiled language"})," with manual memory management.\nBut unlike C/C++, it is designed from the beginning to be ",(0,t.jsx)(n.strong,{children:"meta-programmed from Lua"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['The design of Terra comes from the realization that C/C++ is really composed of multiple "languages." It has a core language of operators, control-flow, and functions calls, but surrounding this language is a meta-language composed of a mix of features such as the pre-processor, templating system, and struct definitions. Templates alone are Turing-complete and have been used to produce optimized libraries such as ',(0,t.jsx)(n.a,{href:"http://eigen.tuxfamily.org/index.php?title=Main_Page",children:"Eigen"}),", but are horrible to use in practice."]}),"\n",(0,t.jsx)(n.p,{children:"In Terra, we just gave in to the trend of making the meta-language of C/C++ more powerful and replaced it with a real programming language, Lua."}),"\n",(0,t.jsx)(n.p,{children:"The combination of a low-level language meta-programmed by a high-level scripting language allows many behaviors that are not possible in other systems. Unlike C/C++, Terra code can be JIT-compiled and run interleaved with Lua evaluation, making it easy to write software libraries that depend on runtime code generation."}),"\n",(0,t.jsx)(n.p,{children:"Features of other languages such as conditional compilation and templating simply fall out of the combination of using Lua to meta-program Terra:"}),"\n",(0,t.jsxs)(s.x,{children:[(0,t.jsx)(s.c,{title:"Terra",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"terra add(a : int,b : int) : int\n    return a + b\nend\n"})})}),(0,t.jsx)(s.c,{title:"C++",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int add(int a, int b) {\n    return a + b;\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Conditional compilation is done with control-flow that determines what code is defined."}),"\n",(0,t.jsxs)(s.x,{children:[(0,t.jsx)(s.c,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"if iswindows() then\n    terra waitatend()\n        C.getchar()\n    end\nelse\n    terra waitatend() end\nend\n"})})}),(0,t.jsx)(s.c,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#ifdef _WIN32\n    void waitatend() { \n        getchar(); \n    }\n#else\n    void waitatend() {}\n#endif\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Templates become Lua functions that take a terra type T and use it to generate new types and code."}),"\n",(0,t.jsxs)(s.x,{children:[(0,t.jsx)(s.c,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"function Array(T)\n    struct Array {\n        N : int\n        data : &T\n    }\n    terra Array:get(i : int)\n        return self.data[i]\n    end\n    return Array\nend\n\nFloatArray = Array(float)\n"})})}),(0,t.jsx)(s.c,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template<class T>\nstruct Array {\n    int N;\n    T* data;\n\n    T get(int i) {\n        return data[i];\n    }\n\n};\n\ntypedef Array<float> FloatArray;\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-you-use-terra",children:"How can you use Terra?"}),"\n",(0,t.jsx)(n.p,{children:"Terra is a statically-typed, compiled language that interoperates seamlessly with Lua. In this setup, Lua acts as the high-level meta-programming layer, while Terra handles the low-level, performance-critical code. The two languages share a lexical environment, meaning Terra code is written within Lua programs, and Lua can dynamically generate and manipulate Terra code at runtime. You can use Terra and Lua in the followind way ..."}),"\n",(0,t.jsx)(n.h3,{id:"an-embedded-jit-compiler-for-building-languages",children:"An embedded JIT-compiler for building languages"}),"\n",(0,t.jsxs)(n.p,{children:["We use techniques from ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Multi-stage_programming",children:"multi-stage programming"})," to make it possible to  ",(0,t.jsx)(n.a,{href:"#generative-programming",children:"meta-program"})," Terra using Lua.  Terra expressions, types, and functions are all first-class Lua values, making it possible to generate arbitrary programs at runtime. This allows you to ",(0,t.jsx)(n.a,{href:"#compiling-a-language",children:"compile domain-specific languages"})," (DSLs) written in Lua into high-performance Terra code. Furthermore, since Terra is built on the Lua ecosystem, it is easy to ",(0,t.jsx)(n.a,{href:"#embedding-and-interoperability",children:"embed"})," Terra-Lua programs in other software as a library. This design allows you to add a JIT-compiler into your existing software. You can use it to add a JIT-compiled DSL to your application, or to auto-tune high-performance code dynamically."]}),"\n",(0,t.jsx)(n.h3,{id:"a-scripting-language-with-high-performance-extensions",children:"A scripting-language with high-performance extensions"}),"\n",(0,t.jsx)(n.p,{children:"While the performance of Lua and other dynamic languages is always getting better, a low-level of abstraction gives you predictable control of performance when you need it. Terra programs use the same LLVM backend that Apple uses for its C compilers. This means that Terra code performs similarly to equivalent C code. Terra also includes built-in support for SIMD operations, and other low-level features like non-temporal writes and prefetches. You can use Lua to organize and configure your application, and then call into Terra code when you need controllable performance."}),"\n",(0,t.jsx)(n.h3,{id:"a-stand-alone-low-level-language",children:"A stand-alone low-level language"}),"\n",(0,t.jsxs)(n.p,{children:["Terra was designed so that it can run independently from Lua. In fact, if your final program doesn't need Lua, you can save Terra code into a .o file or executable. In addition to ensuring a clean separation between high- and low-level code, this design lets you use Terra as a stand-alone low-level language. In this use-case, Lua serves as a powerful meta-programming language.  Here it serves as a replacement for C++ ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Template_metaprogramming",children:"template metaprogramming"})," or C preprocessor ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X_macro",children:"X-Macros"})," with better syntax and nicer properties such as ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Hygienic_macro",children:"hygiene"}),". Since Terra exists ",(0,t.jsx)(n.em,{children:"only"})," as code embedded in a Lua meta-program, features that are normally built into low-level languages can be implemented as Lua libraries. This design keeps the core of Terra simple, while enabling powerful behavior such as conditional compilation, namespaces, templating, and even ",(0,t.jsx)(n.strong,{children:"class systems"})," ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#simplicity",children:"implemented as libraries"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"generative-programming",children:"Generative Programming"}),"\n",(0,t.jsxs)(n.p,{children:["Terra entities such as functions, types, variables and expressions are first-class Lua values --- they can be stored in Lua variables and passed to or returned from Lua functions. Using constructs from multi-stage programming",(0,t.jsx)(n.a,{href:"#footnote2",children:(0,t.jsx)("sup",{children:"2"})}),", you can write Lua code to programmatically generate arbitrary Terra code."]}),"\n",(0,t.jsx)(n.h3,{id:"multi-stage-operators",children:"Multi-stage operators"}),"\n",(0,t.jsxs)(n.p,{children:["Inside Terra code, you can use an ",(0,t.jsx)(n.em,{children:"escape"})," operator (",(0,t.jsx)(n.code,{children:"[]"}),") to splice the result of a Lua expression into the Terra code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"local a = 5\nterra sin5()\n    return [ math.sin(a) ]\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["An escape is evaluated when a Terra function is ",(0,t.jsx)(n.em,{children:"compiled"}),", and the result is spliced into the Terra code. In this example, this means that ",(0,t.jsx)(n.code,{children:"math.sin(5)"})," will be evaluated ",(0,t.jsx)(n.em,{children:"once"})," and the code that implements the Terra function will return a constant. This can be verified by printing out the compiled version of the ",(0,t.jsx)(n.code,{children:"sin5"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"--output a prettified representation of what this function does\nsin5:printpretty() \n-- output:\n-- sin50 = terra() : {double}\n--     return -0.95892427466314\n-- end\n"})}),"\n",(0,t.jsx)(n.p,{children:"Escapes can also return other Terra entities such as a function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"add4 = terra(a : int) return a + 4 end\n\nterra example()\n    return [add4](3) -- 7\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, Terra will insert a call to the Terra function stored in the ",(0,t.jsx)(n.code,{children:"add4"})," variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"example:printpretty()\n-- output:\n-- example4 = terra() : {int32}\n--     return <extract0> #add43(3)#\n-- end\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In fact, ",(0,t.jsx)(n.em,{children:"any"})," name used in Terra code such as ",(0,t.jsx)(n.code,{children:"add4"})," or ",(0,t.jsx)(n.code,{children:"foo.bar"})," is treated as if it were escaped by default."]}),"\n",(0,t.jsx)(n.p,{children:"Inside an escape, you can refer to variables defined in Terra:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"--a function to be called inside an escape\nfunction choosesecond(a,b)\n    -- prints false, 'a' is not a number:\n    print(a == 1) \n    -- prints true, 'a' is a Terra symbol:\n    print(terralib.issymbol(a))\n    return b\nend\n\nterra example(input : int)\n    var a = input\n    var b = input+1\n    --create an escape that refers to 'a' and 'b'\n    return [ choosesecond(a,b) ] --returns the value of b\nend\nexample(1) --returns 2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since escapes are evaluated before a Terra function is compiled, variables ",(0,t.jsx)(n.code,{children:"a"})," and ",(0,t.jsx)(n.code,{children:"b"})," will not have concrete integer values inside the escape. Instead, inside the Lua code ",(0,t.jsx)(n.code,{children:"a"})," and ",(0,t.jsx)(n.code,{children:"b"})," are Terra ",(0,t.jsx)(n.em,{children:"symbols"})," that represent references to Terra values. Since ",(0,t.jsx)(n.code,{children:"choosesecond"})," returns the symbol ",(0,t.jsx)(n.code,{children:"b"}),", the ",(0,t.jsx)(n.code,{children:"example"})," function will return the value of Terra variable ",(0,t.jsx)(n.code,{children:"b"})," when called."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"quotation"})," operator (a backtick) allows you to generate Terra statements and expression in Lua. They can then be spliced into Terra code using the escape operator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"function addtwo(a,b)\n    return `a + b\nend\nterra example(input : int)\n    var a = input\n    var b = input+1\n    return [ addtwo(a,b) ]\nend\nexample(1) -- returns 3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To generate statements rather than expressions you can use the ",(0,t.jsx)(n.code,{children:"quote"})," operator:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'local printtwice = quote\n    C.printf("hello\\n")\n    C.printf("hello\\n")\nend\nterra print4()\n    [printtwice]\n    [printtwice]\nend\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"compiling-a-language",children:"Compiling-a-language"}),"\n",(0,t.jsxs)(n.p,{children:["With these two operators, you can use Lua to generate ",(0,t.jsx)(n.em,{children:"arbitrary"})," Terra code at compile-time. This makes the combination of Lua/Terra well suited for writing compilers for high-performance domain-specific languages. For instance, we can implement a ",(0,t.jsx)(n.em,{children:"compiler"})," for ",(0,t.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Brainfuck",children:"BF"}),", a minimal language that emulates a Turing machine. The Lua function ",(0,t.jsx)(n.code,{children:"compile"})," will take a string of BF code, and a maximum tape size ",(0,t.jsx)(n.code,{children:"N"}),". It then generates a Terra function that implements the BF code. Here is a skeleton that sets up the BF program:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"local function compile(code,N)\n    local function body(data,ptr)\n        --<<implementation of body>>\n    end\n    return terra()\n        --an array to hold the tape\n        var data : int[N]\n        --clear the tape initially\n        for i = 0, N do\n            data[i] = 0\n        end\n        var ptr = 0\n        --generate the code for the body\n        [ body(data,ptr) ]\n    end\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.code,{children:"body"})," is responsible for generating body of the BF program given the code string:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'local function body(data,ptr)\n    --the list of terra statements that make up the BF program\n    local stmts = terralib.newlist()\n\n    --loop over each character in the BF code\n    for i = 1,#code do\n        local c = code:sub(i,i)\n        local stmt\n        --generate the corresponding Terra statement\n        --for each BF operator\n        if c == ">" then\n            stmt = quote ptr = ptr + 1 end\n        elseif c == "<" then\n            stmt = quote ptr = ptr - 1 end\n        elseif c == "+" then\n            stmt = quote data[ptr] = data[ptr] + 1 end\n        elseif c == "-" then\n            stmt = quote data[ptr] = data[ptr] - 1 end\n        elseif c == "." then\n            stmt = quote C.putchar(data[ptr]) end\n        elseif c == "," then\n            stmt = quote data[ptr] = C.getchar() end\n        elseif c == "[" then\n            error("Implemented below")\n        elseif c == "]" then\n            error("Implemented below")\n        else\n            error("unknown character "..c)\n        end\n        stmts:insert(stmt)\n    end\n    return stmts\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:['It loops over the code string, and generates the corresponding Terra code for each character of BF (e.g. ">" shifts the tape over by 1 and is implemented by the Terra code ',(0,t.jsx)(n.code,{children:"ptr = ptr + 1"}),"). We can now compile a BF function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'add3 = compile(",+++.")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The result, ",(0,t.jsx)(n.code,{children:"add3"}),", is a Terra function that adds3 to an input character and then prints it out:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"add3:printpretty()\n-- bf_t_46_1 = terra() : {}\n-- var data : int32[256]\n-- ...\n-- var ptr : int32 = 0\n-- data[ptr] = <extract0> #getchar()#\n-- data[ptr] = data[ptr] + 1\n-- data[ptr] = data[ptr] + 1\n-- data[ptr] = data[ptr] + 1\n-- <extract0> #putchar(data[ptr])#\n-- end\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can also use ",(0,t.jsx)(n.code,{children:"goto"})," statements (",(0,t.jsx)(n.code,{children:"goto labelname"}),") and labels (",(0,t.jsx)(n.code,{children:"::labelname::"}),") to implement BF's looping construct:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'local function body(data,ptr)\n    local stmts = terralib.newlist()\n    \n    --add a stack to keep track of the beginning of each loop\n    local jumpstack = {}\n    \n    for i = 1,#code do\n        local c = code:sub(i,i)\n        local stmt\n        --generate the corresponding Terra statement\n        --for each BF operator\n        if c == ">" then\n            stmt = quote ptr = ptr + 1 end\n        elseif c == "<" then\n            -- ...\n            -- handle \'+\', etc\n            -- ...\n        elseif c == "[" then\n            --generate labels to represent the beginning \n            --and ending of the loop\n            --the \'symbol\' function generates a globally unique\n            --name for the label\n            local target = { before = symbol(), after = symbol() }\n            table.insert(jumpstack,target)\n            stmt = quote \n                --label for beginning of the loop\n                ::[target.before]:: \n                if data[ptr] == 0 then\n                    goto [target.after] --exit the loop\n                end\n            end\n        elseif c == "]" then\n            --retrieve the labels that match this loop\n            local target = table.remove(jumpstack)\n            assert(target)\n            stmt = quote \n                goto [target.before] --loop back edge\n                :: [target.after] :: --label for end of the loop\n            end\n        else\n            error("unknown character "..c)\n        end\n        stmts:insert(stmt)\n    end\n    return stmts\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We are using these generative programming constructs to implement domain-specific languages and auto-tuners: check out our ",(0,t.jsx)(n.a,{href:"/publications.html",children:"PLDI paper"})," that describes our implementation of Orion, a language for image processing kernels, and ",(0,t.jsx)(n.a,{href:"http://ebblang.org/",children:"Ebb"}),", which is a DSL for solving mesh-based PDE's in Terra."]}),"\n",(0,t.jsx)(n.h2,{id:"embedding-and-interoperability",children:"Embedding-and-interoperability"}),"\n",(0,t.jsx)(n.p,{children:"Programming languages don't exist in a vacuum, and the generative programming features of Terra can be useful even in projects that are primarily implemented in other programming languages. We make it possible to integrate Terra with other projects so you can use it to generate low-level code, while keeping most of your project in a well-established language."}),"\n",(0,t.jsxs)(n.p,{children:["First, we make it possible to pass values between Lua and Terra. Our implementation is built on top of LuaJIT's ",(0,t.jsx)(n.a,{href:"http://luajit.org/ext_ffi_tutorial.html",children:"foreign fuction interface"}),". You can call Terra functions directly from Lua (or vice-versa), and access Terra objects directly from Lua (more details in the ",(0,t.jsx)(n.a,{href:"/api.html#converting-between-lua-values-and-terra-values",children:"API reference"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, Lua-Terra is backwards compatible with both pure Lua and C, which makes it easy to use preexisting code. In Lua-Terra, you can use ",(0,t.jsx)(n.code,{children:"require"})," or ",(0,t.jsx)(n.code,{children:"loadfile"})," and it will treat the file as a Lua program (use ",(0,t.jsx)(n.code,{children:"terralib.loadfile"})," to load a combined Lua-Terra file). You can use ",(0,t.jsx)(n.code,{children:"terralib.includec"})," to import C functions from already existing header files."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, Lua-Terra can also be ",(0,t.jsx)(n.em,{children:"embedded"})," in pre-existing applications by linking the application against ",(0,t.jsx)(n.code,{children:"libterra.a"})," and using Terra's C API. The interface is very similar to that of the ",(0,t.jsx)(n.a,{href:"http://queue.acm.org/detail.cfm?id=1983083",children:"Lua interpreter"}),". A simple example initializes Terra and then runs code from the file specified in each argument:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <stdio.h>\n#include "terra.h"\n\nint main(int argc, char ** argv) {\n    lua_State * L = luaL_newstate(); //create a plain lua state\n    luaL_openlibs(L);                //initialize its libraries\n    //initialize the terra state in lua\n    terra_init(L);\n    for(int i = 1; i < argc; i++)\n        //run the terra code in each file\n        if(terra_dofile(L,argv[i]))  \n            exit(1);\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"simplicity",children:"Simplicity"}),"\n",(0,t.jsx)(n.p,{children:"The combination of a simple low-level language with a simple dynamic programming language means that many built-in features of statically-typed low-level languages can be implemented as libraries in the dynamic language. Here are just a few examples:"}),"\n",(0,t.jsx)(n.h3,{id:"conditional-compilation",children:"Conditional Compilation"}),"\n",(0,t.jsxs)(n.p,{children:["Normally conditional compilation is accomplished using preprocessor directives (e.g., ",(0,t.jsx)(n.code,{children:"#ifdef"}),"), or custom build systems. Using Lua-Terra, we can write Lua code to decide how to construct a Terra function. Since Lua is a full programming language, it can do things that most preprocessors cannot, such as call external programs. In this example, we conditionally compile a Terra function differently on OSX and Linux by first calling ",(0,t.jsx)(n.code,{children:"uname"})," to discover the operating system, and then using an ",(0,t.jsx)(n.code,{children:"if"})," statement to instantiate a different version of the Terra function depending on the result:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'--run uname to figure out what OS we are running\nlocal uname = io.popen("uname","r"):read("*a")\nlocal C = terralib.includec("stdio.h")\n\nif uname == "Darwin\\n" then\n    terra reportos()\n        C.printf("this is osx\\n")\n    end\nelseif uname == "Linux\\n" then\n    terra reportos()\n        C.printf("this is linux\\n")\n    end\nelse\n    error("OS Unknown")\nend\n\n--conditionally compiled to \n--the right version for this os\nreportos()\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,t.jsxs)(n.p,{children:["Statically-typed languages normally need constructs that specifically deal with the problem of namespaces (e.g., C++'s ",(0,t.jsx)(n.code,{children:"namespace"})," keyword, or Java's ",(0,t.jsx)(n.code,{children:"import"}),' constructs). For Terra, we just use Lua\'s first-class tables as way to organize functions. When you use any "name" such as ',(0,t.jsx)(n.code,{children:"myfunctions.add"})," inside a Terra function, the Terra will resolve it at ",(0,t.jsx)(n.em,{children:"compile time"})," to the Terra value it holds. Here is an example of placing a Terra function inside a Lua table, and then calling it from another Terra function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'local myfunctions = {}\n-- terra functions are first-class Lua values\n\n-- they can be stored in Lua tables\nterra myfunctions.add(a : int, b : int) : int\n    return a + b\nend\n\n-- and called from the tables as well\nterra myfunctions.add3(a : int)\n    return myfunctions.add(a,3)\nend\n\n--the declaration of myfunctions.add is just syntax sugar for:\n\nmyfunctions["add"] = terra(a : int, b : int) : int\n    return a + b\nend\n\nprint(myfunctions.add3(4))\n'})}),"\n",(0,t.jsx)(n.p,{children:"In fact, you've already seen this behavior when we imported C functions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'C = terralib.includec("stdio.h")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The function ",(0,t.jsx)(n.code,{children:"includec"})," just returns a Lua table (",(0,t.jsx)(n.code,{children:"C"}),") that contains the C functions. Since ",(0,t.jsx)(n.code,{children:"C"})," is a Lua table, you can iterate through it if you want:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"for k,v in pairs(C) do\n    print(k,v)\nend\n\n-- seek         <terra function>\n-- asprintf     <terra function>\n-- gets         <terra function>\n-- size_t       uint64\n-- ...\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"templating",children:"Templating"}),"\n",(0,t.jsxs)(n.p,{children:["Since Terra types and functions are first class values, you can get functionality similar to a C++ template by simply creating a Terra type and defining a Terra function ",(0,t.jsx)(n.em,{children:"inside"})," of a Lua function. Here is an example where we define the Lua function ",(0,t.jsx)(n.code,{children:"MakeArray(T)"})," which takes a Terra type ",(0,t.jsx)(n.code,{children:"T"})," and generates an ",(0,t.jsx)(n.code,{children:"Array"})," object that can hold multiple ",(0,t.jsx)(n.code,{children:"T"})," objects (i.e. a simple version of C++'s ",(0,t.jsx)(n.code,{children:"std::vector"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'C = terralib.includec("stdlib.h")\nfunction MakeArray(T)\n    --create a new Struct type that contains a pointer \n    --to a list of T\'s and a size N\n    local struct ArrayT {\n        --&T is a pointer to T\n        data : &T;\n        N : int;\n    } \n    --add some methods to the type\n    terra ArrayT:init(N : int)\n        -- the syntax [&T](...) is a cast,\n        -- the C equivalent is (T*)(...)\n        self.data = [&T](C.malloc(sizeof(T)*N))\n        self.N = N\n    end\n    terra ArrayT:get(i : int)\n        return self.data[i]\n    end\n    terra ArrayT:set(i : int, v : T)\n        self.data[i] = v\n    end\n    --return the type as a \n    return ArrayT\nend\n\nIntArray = MakeArray(int)\nDoubleArray = MakeArray(double)\n\nterra UseArrays()\n    var ia : IntArray\n    var da : DoubleArray\n    ia:init(1) \n    da:init(1)\n    ia:set(0,3)\n    da:set(0,4.5)\n    return ia:get(0) + da:get(0)\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As shown in this example, Terra allows you to define methods on ",(0,t.jsx)(n.code,{children:"struct"})," types.\nUnlike other statically-typed languages with classes, there are no built-in mechanisms for inheritance or runtime polymorphism.\nMethods declarations are just a syntax sugar that associates table of Lua methods with each type. Here the ",(0,t.jsx)(n.code,{children:"get"})," method is equivalent to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:"ArrayT.methods.get = terra(self : &T, i : int)\n    return self.data[i]\nend\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The object ",(0,t.jsx)(n.code,{children:"ArrayT.methods"})," is a Lua table that holds the methods for type ",(0,t.jsx)(n.code,{children:"ArrayT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Similarly an invocation such as ",(0,t.jsx)(n.code,{children:"ia:get(0)"})," is equivalent to ",(0,t.jsx)(n.code,{children:"T.methods.get(&ia,0)"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"specialization",children:"Specialization"}),"\n",(0,t.jsx)(n.p,{children:"By nesting a Terra function inside a Lua function, you can compile different versions of a function. Here we generate different versions\nof the power function (e.g. pow2, or pow3):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'--generate a power function for a specific N (e.g. N = 3)\nfunction makePowN(N)\n    local function emit(a,N)\n        if N == 0 then return 1\n        else return `a*[emit(a,N-1)]\n        end\n    end\n    return terra(a : double)\n        return [emit(a,N)]\n    end\nend\n\n--use it to fill in a table of functions\nlocal mymath = {}\nfor n = 1,10 do\n    mymath["pow"..n] = makePowN(n)\nend\nprint(mymath.pow3(2)) -- 8\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"class-systems",children:"Class Systems"}),"\n",(0,t.jsxs)(n.p,{children:["As shown in the templating example, Terra allows you to define methods on ",(0,t.jsx)(n.code,{children:"struct"})," types but does not provide any built-in mechanism for inheritance or polymorphism. Instead, normal class systems can be written as libraries.  For instance, a user might write:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-terra",children:'J = terralib.require("lib/javalike")\nDrawable = J.interface { draw = {} -> {} }\nstruct Square { length : int; }\nJ.extends(Square,Shape)\nJ.implements(Square,Drawable)\nterra Square:draw() : {}\n    --draw implementation\nend\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The functions ",(0,t.jsx)(n.code,{children:"J.extends"})," and ",(0,t.jsx)(n.code,{children:"J.implements"})," are Lua functions that generate the appropriate Terra code to implement a class system. More information is available in our ",(0,t.jsx)(n.a,{href:"/publications.html",children:"PLDI Paper"}),". The file ",(0,t.jsx)(n.a,{href:"https://github.com/terralang/terra/blob/master/tests/lib/javalike.t",children:"lib/javalike.t"})," has one possible implementation of a Java-like class system, while the file ",(0,t.jsx)(n.a,{href:"https://github.com/terralang/terra/blob/master/tests/lib/golike.t",children:"lib/golike.t"})," is more similar to Google's Go language."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);