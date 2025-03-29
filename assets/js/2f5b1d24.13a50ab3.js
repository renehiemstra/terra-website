"use strict";(self.webpackChunkterra_website=self.webpackChunkterra_website||[]).push([[2739],{5084:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting started","href":"/terra-website/docs/getting-started","docId":"getting-started","unlisted":false},{"type":"category","label":"Metaprogramming","items":[{"type":"link","label":"A first example","href":"/terra-website/docs/metaprogramming/hello-world","docId":"metaprogramming/hello-world","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/terra-website/docs/metaprogramming/intro"},{"type":"category","label":"Resource management","items":[{"type":"link","label":"Core concepts","href":"/terra-website/docs/resource-management/core-concepts","docId":"resource-management/core-concepts","unlisted":false},{"type":"link","label":"Ownership model","href":"/terra-website/docs/resource-management/ownership-model","docId":"resource-management/ownership-model","unlisted":false},{"type":"link","label":"Comparisons with C++ and Rust","href":"/terra-website/docs/resource-management/comparison","docId":"resource-management/comparison","unlisted":false},{"type":"link","label":"Tutorial - Move semantics in Terra","href":"/terra-website/docs/resource-management/tutorial/move-semantics","docId":"resource-management/tutorial/move-semantics","unlisted":false},{"type":"link","label":"Tutorial - Value semantics","href":"/terra-website/docs/resource-management/tutorial/value-semantics","docId":"resource-management/tutorial/value-semantics","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/terra-website/docs/resource-management/intro"}]},"docs":{"features/backwards-compatible-with-c":{"id":"features/backwards-compatible-with-c","title":"Backwards compatible with C","description":""},"features/exascale-computing":{"id":"features/exascale-computing","title":"Terra-Regent: Task-based parallelism for distributed workloads","description":""},"features/multistage-programming":{"id":"features/multistage-programming","title":"Multistage programming","description":"Terra is a low-level system programming language that is embedded in and meta-programmed by the Lua programming language:"},"features/powerful-standard-library":{"id":"features/powerful-standard-library","title":"Powerful standard library","description":"Allocators"},"features/scope-based-resource-management":{"id":"features/scope-based-resource-management","title":"Scope-bound resource management","description":""},"features/script-with-c-performance":{"id":"features/script-with-c-performance","title":"Script with C-performance","description":"Terra is a simple and expressive statically typed compiled language built on top of LuaJIT, the fastest JIT-compiler in the West. This unique combination allows Terra to deliver performance comparable to C while maintaining the flexibility and ease of a scripting language."},"getting-started":{"id":"getting-started","title":"getting-started","description":"","sidebar":"tutorialSidebar"},"hello":{"id":"hello","title":"Getting started","description":""},"intro":{"id":"intro","title":"Documentation","description":""},"metaprogramming/hello-world":{"id":"metaprogramming/hello-world","title":"A first example","description":"We begin with metaprogramming in terra by reproducing the C example from","sidebar":"tutorialSidebar"},"metaprogramming/intro":{"id":"metaprogramming/intro","title":"Introduction into metaproramming","description":"Starting with C, many programming languages have support for multistage","sidebar":"tutorialSidebar"},"resource-management/comparison":{"id":"resource-management/comparison","title":"Comparisons with C++ and Rust","description":"Terra\u2019s resource management system harmonizes C++\u2019s control with Rust\u2019s ownership principles, emphasizing both simplicity and efficiency. Compared to C++, Terra forgoes certain flexibilities, such as constructors, in favor of a concise Rule of Three (dtor, copy, move) characterized by simple and safe rules. It enhances performance over C++ for R-values by consistently employing a bitwise copy (memcpy), avoiding C++\u2019s potential for implicit copying or dependence on optimizations. For L-values, Terra invokes a move method to ensure explicit resource transfer, with efficient defaults delivering predictable performance.","sidebar":"tutorialSidebar"},"resource-management/core-concepts":{"id":"resource-management/core-concepts","title":"Core concepts","description":"Below we summarize the core concepts and rules relevant to resource management in Terra. These concepts will be explained in greater detail in the next sections.","sidebar":"tutorialSidebar"},"resource-management/intro":{"id":"resource-management/intro","title":"Resource management in Terra","description":"Resource management is a critical aspect of programming languages, and Terra\u2019s new system blends C++\u2019s flexibility with Rust\u2019s ownership principles to deliver safe, efficient defaults while unlocking its metaprogramming potential. This implementation introduces scope-bound resource management, enhancing Terra\u2019s capabilities beyond its historical reliance on manual, C-style methods. In the sections that follow, we\u2019ll explore the core concepts, ownership model, key methods, and practical tutorials\u2014from basic data structures to advanced integrations\u2014showcasing how Terra balances performance, safety, and adaptability.","sidebar":"tutorialSidebar"},"resource-management/ownership-model":{"id":"resource-management/ownership-model","title":"Ownership model","description":"Terra\u2019s ownership model ensures every resource has exactly one owner at any time, akin to Rust\u2019s single-ownership principle, preventing data races, dangling pointers, and double-free errors. This model guarantees safety in sequential and shared memory parallel contexts through strict resource transfer and access rules.","sidebar":"tutorialSidebar"},"resource-management/summary":{"id":"resource-management/summary","title":"summary","description":"I am developing a new resource management system for the Terra programming language. The new approach uses scope-bound-resource management, which enable Terra\'s powerful metaprogramming abilities while maintaining low-level performance."},"resource-management/tutorial/move-semantics":{"id":"resource-management/tutorial/move-semantics","title":"Tutorial - Move semantics in Terra","description":"In this tutorial, we explore Terra\u2019s resource management system through the lens of move semantics\u2014its default approach to handling resources. We\u2019ll implement basic data structures to demonstrate how managed types integrate seamlessly, showcasing the power and simplicity of ownership transfer in Terra.","sidebar":"tutorialSidebar"},"resource-management/tutorial/value-semantics":{"id":"resource-management/tutorial/value-semantics","title":"Tutorial - Value semantics","description":"","sidebar":"tutorialSidebar"},"tutorial-basics/congratulations":{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template."},"tutorial-basics/create-a-blog-post":{"id":"tutorial-basics/create-a-blog-post","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed..."},"tutorial-basics/create-a-document":{"id":"tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:"},"tutorial-basics/create-a-page":{"id":"tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:"},"tutorial-basics/deploy-your-site":{"id":"tutorial-basics/deploy-your-site","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack)."},"tutorial-basics/markdown-features":{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features."},"tutorial-extras/manage-docs-versions":{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs."},"tutorial-extras/translate-your-site":{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French."}}}}')}}]);