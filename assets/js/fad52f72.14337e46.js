"use strict";(self.webpackChunkterra_website=self.webpackChunkterra_website||[]).push([[5658],{5806:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"core-language/resource-management/ownership-model","title":"Ownership model","description":"Terra\u2019s ownership model ensures every resource has exactly one owner at any time, akin to Rust\u2019s single-ownership principle, preventing data races, dangling pointers, and double-free errors. This model guarantees safety in sequential and shared memory parallel contexts through strict resource transfer and access rules.","source":"@site/docs/core-language/resource-management/ownership-model.md","sourceDirName":"core-language/resource-management","slug":"/core-language/resource-management/ownership-model","permalink":"/terra-website/docs/core-language/resource-management/ownership-model","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-language/resource-management/ownership-model.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Core concepts","permalink":"/terra-website/docs/core-language/resource-management/core-concepts"},"next":{"title":"Comparisons with C++ and Rust","permalink":"/terra-website/docs/core-language/resource-management/comparison"}}');var a=r(4848),i=r(8453);const l={},o="Ownership model",t={},c=[{value:"L-Values, R-Values, and B-Values",id:"l-values-r-values-and-b-values",level:2},{value:"Passing by value or by reference",id:"passing-by-value-or-by-reference",level:2},{value:"Planned safety features",id:"planned-safety-features",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"ownership-model",children:"Ownership model"})}),"\n",(0,a.jsx)(n.p,{children:"Terra\u2019s ownership model ensures every resource has exactly one owner at any time, akin to Rust\u2019s single-ownership principle, preventing data races, dangling pointers, and double-free errors. This model guarantees safety in sequential and shared memory parallel contexts through strict resource transfer and access rules."}),"\n",(0,a.jsx)(n.h2,{id:"l-values-r-values-and-b-values",children:"L-Values, R-Values, and B-Values"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["L-Values: Values explicitly allocated with a var statement (e.g., ",(0,a.jsx)(n.code,{children:"var x : T"})," or ",(0,a.jsx)(n.code,{children:"var x = ..."}),"). They represent named, persistent objects with a defined lifetime."]}),"\n",(0,a.jsx)(n.li,{children:"R-Values: Temporary objects, typically resulting from function calls. They are short-lived and exist only within their expression."}),"\n",(0,a.jsxs)(n.li,{children:["B-Values: Reference objects (",(0,a.jsx)(n.code,{children:"&T"}),"), enabling borrowing. They allow the caller to retain ownership while the callee operates on the resource without transferring it."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"passing-by-value-or-by-reference",children:"Passing by value or by reference"}),"\n",(0,a.jsx)(n.p,{children:"Passing objects to functions or in an assignment can be done in two ways:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["By value: Transfers ownership to the receiver.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["L-values: Use the ",(0,a.jsx)(n.code,{children:"__copy"})," method if defined, duplicating the resource, or default to transfering ownership using a move."]}),"\n",(0,a.jsx)(n.li,{children:"R-Values: Always transfer ownership by a move."}),"\n",(0,a.jsx)(n.li,{children:"Non-managed object are trivially copied bitwise."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["By Reference (B-Values): Grants temporary access via ",(0,a.jsx)(n.code,{children:"&T"}),". No ownership transfer occurs; the original owner retains responsibility for cleanup via ",(0,a.jsx)(n.code,{children:"__dtor"})," in case of managed types."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"planned-safety-features",children:"Planned safety features"}),"\n",(0,a.jsx)(n.p,{children:"Terra\u2019s single-ownership model enables compile-time verification of resource safety for sequential and parallel programs. The following enhancements will strengthen this model:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Initialization Tracking:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Tracks variable initialization at compile time."}),"\n",(0,a.jsx)(n.li,{children:"Flags use of uninitialized variables (e.g., after a move) as compile errors."}),"\n",(0,a.jsxs)(n.li,{children:["Skips ",(0,a.jsx)(n.code,{children:"__dtor"})," for uninitialized objects, improving safety and efficiency."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Constant References (",(0,a.jsx)(n.code,{children:"const&"}),"):"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Enforces read-only access (",(0,a.jsx)(n.code,{children:"const& T"}),") recursively at compile time."]}),"\n",(0,a.jsx)(n.li,{children:"Allows safe, unsynchronized sharing in parallel programs."}),"\n",(0,a.jsxs)(n.li,{children:["Complements ",(0,a.jsx)(n.code,{children:"__move"})," and ",(0,a.jsx)(n.code,{children:"&T"})," with immutable borrowing."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);