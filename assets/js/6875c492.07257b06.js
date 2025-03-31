"use strict";(self.webpackChunkterra_website=self.webpackChunkterra_website||[]).push([[4813],{665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(7289),r=n(204),i=n(2362),o=n(4848);function l(e){let{className:t}=e;return(0,o.jsx)(i.A,{type:"caution",title:(0,o.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,o.jsx)(s.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.AE,{}),(0,o.jsx)(l,{...e})]})}},1865:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(6289),r=n(4848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:o}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},1926:(e,t,n)=>{n.d(t,{Y4:()=>g,ZD:()=>o,np:()=>d,uz:()=>c,wI:()=>l});n(6540);var a=n(539),s=n(1430),r=n(4848);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(e){const t=i();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function l(e){const t=i();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function g(){return(0,r.jsx)(a.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},3953:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(6289);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(4848);function o(e){let{permalink:t,label:n,count:o,description:l}=e;return(0,i.jsxs)(s.A,{href:t,title:l,className:(0,a.A)(r.tag,o?r.tagWithCount:r.tagRegular),children:[n,o&&(0,i.jsx)("span",{children:o})]})}},4005:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(3750),s=n(8189),r=n(4848);function i(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},5446:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(6540),s=n(8069),r=n(4639);let i=null,o=null;let l=null,c=null;function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>")}async function g(e,t){void 0===t&&(t=!1);const n=e.replace(/\n+$/,"");console.log("Trimmed Terra code:",JSON.stringify(n));try{const e=await async function(){return i||o||(o=(async()=>{try{await r.iX.init();const e=new r.iX,t="/terra-website/wasm/tree-sitter-terra.wasm",n=await r.TM.load(t);return e.setLanguage(n),i=e,e}catch(e){throw o=null,new Error(`Parser initialization failed: ${e instanceof Error?e.message:String(e)}`)}})(),o)}(),t=await async function(e){return l||c||(c=(async()=>{const t=await fetch("/terra-website/scm/highlights.scm");if(!t.ok)throw new Error(`Failed to fetch highlights.scm: ${t.statusText}`);const n=await t.text(),a=e.language;if(!a)throw new Error("Parser language is not set");const s=new r.XK(a,n);return l=s,s})(),c)}(e),a=e.parse(n);if(!a)throw new Error("Failed to parse code");const s=await async function(e,t){const n=new Map;for(const r of t.matches(e.rootNode))for(const e of r.captures)n.set(e.node.id,{text:e.node.text,tag:e.name,startIndex:e.node.startIndex,endIndex:e.node.endIndex});let a="",s=0;for(const[,r]of n)r.startIndex<s||(r.startIndex>s&&(a+=d(e.rootNode.text.substring(s,r.startIndex))),a+=`<span class="${r.tag}">${d(r.text)}</span>`,s=r.endIndex);s<e.rootNode.text.length&&(a+=d(e.rootNode.text.substring(s)));return a}(a,t);return console.log("highlightTerraCode output:",s),s}catch(a){return console.error(`Highlighting failed: ${a instanceof Error?a.message:String(a)}`),d(n)}}Symbol.iterator;var u=n(4848);const h=e=>{const{children:t,...n}=e,r=e.language||(e.className?.includes("language-")?e.className.replace("language-",""):void 0)||e.metastring?.match(/{([^}]+)}/)?.[1],i=!e.className&&!e.metastring,o=String(t).replace(/\n$/,"");if("terra"===r){const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>{console.log("Highlighting Terra code:",o,"isInline:",i),g(o,i).then((e=>{console.log("Highlighting successful, result:",e),t(e)})).catch((e=>{console.error("Highlighting error:",e),t(i?"Error":"Error highlighting code")}))}),[o,i]),i?(0,u.jsx)("code",{dangerouslySetInnerHTML:{__html:e}}):(0,u.jsxs)("div",{className:"terra-code-container",style:{position:"relative"},children:[(0,u.jsx)("pre",{className:"language-terra",children:(0,u.jsx)("code",{dangerouslySetInnerHTML:{__html:e}})}),(0,u.jsxs)("button",{className:"terra-copy-btn","aria-label":"Copy code to clipboard",onClick:()=>{navigator.clipboard.writeText(o);const e=document.activeElement;e.classList.add("copied"),setTimeout((()=>e.classList.remove("copied")),2e3)},children:[(0,u.jsx)("svg",{viewBox:"0 0 24 24",className:"copy-icon",children:(0,u.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}),(0,u.jsx)("svg",{viewBox:"0 0 24 24",className:"copied-icon",children:(0,u.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})]})]})}return(0,u.jsx)(s.A,{...e})}},6239:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(539),r=n(3953);const i={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(4848);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:i.tag,children:(0,o.jsx)(r.A,{...e})},e.permalink)))})]})}},6956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(4164),s=n(539),r=n(1082),i=n(204),o=n(1926),l=n(6289),c=n(569),d=n(7448),g=n(7220),u=n(4005),h=n(665),m=n(9303),p=n(4848);function x(e){let{tag:t}=e;const n=(0,o.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:n,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const i=(0,o.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(h.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.A,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(l.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function j(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(f,{...e})]})}},7289:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>i,TT:()=>d,Uh:()=>o,Yh:()=>c});n(6540);var a=n(539),s=n(7143),r=n(4848);function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},7448:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(539),s=n(1865),r=n(4848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,n)=>{n.d(t,{A:()=>M});n(6540);var a=n(4164),s=n(3750),r=n(4848);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(6289);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=n,g=i?"h1":"h2";return(0,r.jsx)(g,{className:(0,a.A)(l.title,t),children:i?d:(0,r.jsx)(o.A,{to:c,children:d})})}var d=n(539),g=n(1430),u=n(8569);const h={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:i,readingTime:o}=n,l=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{readingTime:o})]})]});var c}var j=n(5921);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,s.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!o&&(l?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(j.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(f,{}),(0,r.jsx)(A,{})]})}var w=n(99),T=n(7502);function N(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?w.LU:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(T.A,{children:t})})}var y=n(204),_=n(5783),k=n(6239);function P(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function L(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(P,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:i,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&l,u=n.length>0;if(!(u||g||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.A,{tags:n})})}),e&&(0,r.jsx)(_.A,{className:(0,a.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":g}),children:(0,r.jsx)(k.A,{tags:n})}),g&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(L,{blogPostTitle:i,to:e.permalink})})]})}function M(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,a.A)(o,n),children:[(0,r.jsx)(v,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(C,{})]})}}}]);