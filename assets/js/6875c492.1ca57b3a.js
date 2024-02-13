"use strict";(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[2392],{2687:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var a=t(4357),i=t(308),s=t(7624);function o(e){const{metadata:n}=e,{previousPage:t,nextPage:o}=n;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,s.jsx)(i.c,{permalink:t,title:(0,s.jsx)(a.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,s.jsx)(i.c,{permalink:o,title:(0,s.jsx)(a.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},992:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var a=t(3152),i=t(7792),s=t(7624);function o(e){let{items:n,component:t=i.c}=e;return(0,s.jsx)(s.Fragment,{children:n.map((e=>{let{content:n}=e;return(0,s.jsx)(a.E,{content:n,children:(0,s.jsx)(t,{children:(0,s.jsx)(n,{})})},n.metadata.permalink)}))})}},2948:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(1504);var a=t(5456),i=t(4357),s=t(5944),o=t(5756),l=t(5864),r=t(6016),c=t(9452),d=t(2687),g=t(8712),u=t(992),m=t(1528),h=t(6448),p=t(7624);function x(e){const n=function(){const{selectMessage:e}=(0,s.A)();return n=>e(n,(0,i.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:n}))}();return(0,i.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){let{tag:n}=e;const t=x(n);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.U7,{title:t}),(0,p.jsx)(g.c,{tag:"blog_tags_posts"})]})}function b(e){let{tag:n,items:t,sidebar:a,listMetadata:s}=e;const o=x(n);return(0,p.jsxs)(c.c,{sidebar:a,children:[n.unlisted&&(0,p.jsx)(m.c,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.c,{as:"h1",children:o}),(0,p.jsx)(r.c,{href:n.allTagsPath,children:(0,p.jsx)(i.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.c,{items:t}),(0,p.jsx)(d.c,{metadata:s})]})}function f(e){return(0,p.jsxs)(o.cr,{className:(0,a.c)(l.W.wrapper.blogPages,l.W.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(b,{...e})]})}},1528:(e,n,t)=>{t.d(n,{c:()=>m});t(1504);var a=t(5456),i=t(4357),s=t(6952),o=t(7624);function l(){return(0,o.jsx)(i.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(i.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(s.c,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5864),g=t(2712);function u(e){let{className:n}=e;return(0,o.jsx)(g.c,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,a.c)(n,d.W.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function m(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(u,{...e})]})}},4244:(e,n,t)=>{t.d(n,{c:()=>c});t(1504);var a=t(5456),i=t(5864);const s={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var o=t(7624);function l(e){let{type:n,className:t,children:l}=e;return(0,o.jsx)("div",{className:(0,a.c)(i.W.common.admonition,i.W.common.admonitionType(n),s.admonition,t),children:l})}function r(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:s.admonitionContent,children:n}):null}function c(e){const{type:n,icon:t,title:a,children:i,className:s}=e;return(0,o.jsx)(l,{type:n,className:s,children:(0,o.jsx)(r,{children:i})})}}}]);