"use strict";(self.webpackChunkterra_website=self.webpackChunkterra_website||[]).push([[8401],{665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(7289),i=n(204),r=n(2362),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(a.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,o.jsx)(a.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AE,{}),(0,o.jsx)(l,{...e})]})}},1021:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6540),a=n(3115);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(6289),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.p)(),v=c??x.tableOfContents.minHeadingLevel,f=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>r({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:f}}),[o,l,v,f])),(0,m.jsx)(g,{toc:p,className:n,linkClassName:o,...h})}},1865:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(6289),i=n(4848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},2075:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(4164),a=n(7289),i=n(204),r=n(2362),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(r.A,{type:"caution",title:(0,o.jsx)(a.Yh,{}),className:(0,s.A)(t,i.G.common.draftBanner),children:(0,o.jsx)(a.TT,{})})}var c=n(665);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(c.A,{}),s.draft&&(0,o.jsx)(l,{})]})}},3953:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),a=n(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function o(e){let{permalink:t,label:n,count:o,description:l}=e;return(0,r.jsxs)(a.A,{href:t,title:l,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,r.jsx)("span",{children:o})]})}},5446:(e,t,n)=>{n.d(t,{A:()=>h});var s=n(6540),a=n(8069),i=n(4639);let r=null,o=null;let l=null,c=null;function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>")}async function u(e,t){void 0===t&&(t=!1);const n=e.replace(/\n+$/,"");console.log("Trimmed Terra code:",JSON.stringify(n));try{const e=await async function(){return r||o||(o=(async()=>{try{await i.iX.init();const e=new i.iX,t=await i.TM.load("/terra-website/wasm/tree-sitter-exoterra.wasm");return e.setLanguage(t),r=e,e}catch(e){throw o=null,new Error(`Parser initialization failed: ${e instanceof Error?e.message:String(e)}`)}})(),o)}(),t=await async function(e){return l||c||(c=(async()=>{const t=await fetch("/terra-website/scm/highlights.scm");if(!t.ok)throw new Error(`Failed to fetch highlights.scm: ${t.statusText}`);const n=await t.text(),s=e.language;if(!s)throw new Error("Parser language is not set");const a=new i.XK(s,n);return l=a,a})(),c)}(e),s=e.parse(n);if(console.log("parse-tree",s.rootNode.toString()),!s)throw new Error("Failed to parse code");const a=await async function(e,t){const n=new Map;for(const i of t.matches(e.rootNode))for(const e of i.captures)n.set(e.node.id,{text:e.node.text,tag:e.name,startIndex:e.node.startIndex,endIndex:e.node.endIndex});let s="",a=0;for(const[,i]of n)i.startIndex<a||(i.startIndex>a&&(s+=d(e.rootNode.text.substring(a,i.startIndex))),s+=`<span class="${i.tag}">${d(i.text)}</span>`,a=i.endIndex);a<e.rootNode.text.length&&(s+=d(e.rootNode.text.substring(a)));return s}(s,t);return console.log("highlightTerraCode output:",a),a}catch(s){return console.error(`Highlighting failed: ${s instanceof Error?s.message:String(s)}`),d(n)}}Symbol.iterator;var m=n(4848);const h=e=>{const{children:t,...n}=e,i=e.language||(e.className?.includes("language-")?e.className.replace("language-",""):void 0)||e.metastring?.match(/{([^}]+)}/)?.[1],r=!e.className&&!e.metastring,o=String(t).replace(/\n$/,"");if("terra"===i){const[e,t]=(0,s.useState)("");return(0,s.useEffect)((()=>{console.log("Highlighting Terra code:",o,"isInline:",r),u(o,r).then((e=>{console.log("Highlighting successful, result:",e),t(e)})).catch((e=>{console.error("Highlighting error:",e),t(r?"Error":"Error highlighting code")}))}),[o,r]),r?(0,m.jsx)("code",{dangerouslySetInnerHTML:{__html:e}}):(0,m.jsxs)("div",{className:"terra-code-container",style:{position:"relative"},children:[(0,m.jsx)("pre",{className:"language-terra",children:(0,m.jsx)("code",{dangerouslySetInnerHTML:{__html:e}})}),(0,m.jsxs)("button",{className:"terra-copy-btn","aria-label":"Copy code to clipboard",onClick:()=>{navigator.clipboard.writeText(o);const e=document.activeElement;e.classList.add("copied"),setTimeout((()=>e.classList.remove("copied")),2e3)},children:[(0,m.jsx)("svg",{viewBox:"0 0 24 24",className:"copy-icon",children:(0,m.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}),(0,m.jsx)("svg",{viewBox:"0 0 24 24",className:"copied-icon",children:(0,m.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})]})]})}return(0,m.jsx)(a.A,{...e})}},6239:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164),a=n(539),i=n(3953);const r={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(4848);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:r.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},7197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var s=n(6540),a=n(1082),i=n(6849),r=n(4848);const o=s.createContext(null);function l(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,r.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,r.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(6682),h=n(539),g=n(1865);function x(e){const{previous:t,next:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(g.A,{...t,subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,r.jsx)(g.A,{...n,subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,r.jsx)(x,{previous:e.previous,next:e.next})}var f=n(797),p=n(6289),b=n(6942),j=n(204),A=n(6351),N=n(1858);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=L[e.versionMetadata.banner];return(0,r.jsx)(t,{...e})}function T(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(p.A,{to:n,onClick:s,children:(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,f.A)(),{pluginId:a}=(0,b.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:l}=(0,b.HW)(a),c=o??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,r.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(T,{versionLabel:l.label,to:c.path,onClick:()=>i(l.name)})})]})}function k(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,r.jsx)(C,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,r.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var H=n(6239),y=n(5783);function M(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(H.A,{tags:a})})}),o&&(0,r.jsx)(y.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var I=n(3535),E=n(1021);const V="tocCollapsibleButton_TO0P",B="tocCollapsibleButtonExpanded_MG3E";function S(e){let{collapsed:t,...n}=e;return(0,r.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",V,!t&&B,n.className),children:(0,r.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const O="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",G="tocCollapsibleExpanded_sAul";function R(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,I.u)({initialState:!0});return(0,r.jsxs)("div",{className:(0,u.A)(O,!i&&G,n),children:[(0,r.jsx)(S,{collapsed:i,onClick:o}),(0,r.jsx)(I.N,{lazy:!0,className:F,collapsed:i,children:(0,r.jsx)(E.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const P="tocMobile_bxCs";function D(){const{toc:e,frontMatter:t}=c();return(0,r.jsx)(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,P)})}var U=n(7959);function $(){const{toc:e,frontMatter:t}=c();return(0,r.jsx)(U.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var z=n(9303),q=n(7502);function W(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,r.jsx)("header",{children:(0,r.jsx)(z.A,{as:"h1",children:n})}),(0,r.jsx)(q.A,{children:t})]})}var Z=n(3751),X=n(214),Y=n(9030);function J(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Q="breadcrumbHomeIcon_YNFT";function K(){const e=(0,Y.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(J,{className:Q})})})}const ee="breadcrumbsContainer_Z_bl";function te(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,r.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,r.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:a,children:t})}function ne(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,r.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function se(){const e=(0,Z.OF)(),t=(0,X.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,ee),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(K,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(ne,{active:s,index:n,addMicrodata:!!a,children:(0,r.jsx)(te,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ae=n(2075);const ie="docItemContainer_c0TR",re="docItemCol_z5aJ";function oe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,r.jsx)(D,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)($,{})}}(),{metadata:s}=c();return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&re),children:[(0,r.jsx)(ae.A,{metadata:s}),(0,r.jsx)(k,{}),(0,r.jsxs)("div",{className:ie,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(se,{}),(0,r.jsx)(w,{}),n.mobile,(0,r.jsx)(W,{children:t}),(0,r.jsx)(M,{})]}),(0,r.jsx)(v,{})]})]}),n.desktop&&(0,r.jsx)("div",{className:"col col--3",children:n.desktop})]})}function le(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,r.jsx)(l,{content:e.content,children:(0,r.jsxs)(a.e3,{className:t,children:[(0,r.jsx)(d,{}),(0,r.jsx)(oe,{children:(0,r.jsx)(n,{})})]})})}const ce="navigationContainer_MZYS",de="navArrows_zGQG",ue="navLink_khJ7",me="spacer_eUuD",he="homeLink_Zq3u",ge=["script-with-c-performance","multistage-programming","backwards-compatible-with-c","scope-based-resource-management","exascale-computing","powerful-standard-library"],xe=e=>{let{currentId:t}=e;const n=ge.indexOf(t),s=n>0?ge[n-1]:null,a=n<ge.length-1?ge[n+1]:null;return(0,r.jsxs)("div",{className:ce,children:[(0,r.jsxs)("div",{className:de,children:[s&&(0,r.jsx)(p.A,{to:`/docs/features/${s}`,className:ue,children:"\u2190 Previous"}),(0,r.jsx)("span",{className:me}),a&&(0,r.jsx)(p.A,{to:`/docs/features/${a}`,className:ue,children:"Next \u2192"})]}),(0,r.jsx)(p.A,{to:"/",className:he,children:"Back to Home"})]})},ve=e=>{console.log("CustomDocItem full props:",e);const{content:t}=e,{metadata:n}=t;if(!n)return console.error("CustomDocItem: No metadata available",e),(0,r.jsx)(le,{...e});console.log("CustomDocItem metadata:",n);const s=n.id.startsWith("features/"),a=s?n.id.replace("features/",""):null;return console.log("Is feature page?",s),console.log("Feature ID:",a),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(le,{...e}),s&&a&&(0,r.jsx)(xe,{currentId:a})]})}},7289:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});n(6540);var s=n(539),a=n(7143),i=n(4848);function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},7959:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(1021);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.A,{...n,linkClassName:o,linkActiveClassName:l})})}}}]);