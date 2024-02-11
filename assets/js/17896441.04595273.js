"use strict";(self.webpackChunknziie_xyz=self.webpackChunknziie_xyz||[]).push([[752],{5104:(e,t,s)=>{s.r(t),s.d(t,{default:()=>re});var n=s(1504),a=s(5756),o=s(1100),i=s(7624);const l=n.createContext(null);function c(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,i.jsx)(l.Provider,{value:a,children:t})}function d(){const e=(0,n.useContext)(l);if(null===e)throw new o.AH("DocProvider");return e}function r(){var e;const{metadata:t,frontMatter:s,assets:n}=d();return(0,i.jsx)(a.U7,{title:t.title,description:t.description,keywords:s.keywords,image:null!=(e=n.image)?e:s.image})}var m=s(5456),u=s(1432),h=s(4357),b=s(308);function p(e){const{previous:t,next:s}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(b.c,{...t,subLabel:(0,i.jsx)(h.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,i.jsx)(b.c,{...s,subLabel:(0,i.jsx)(h.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=d();return(0,i.jsx)(p,{previous:e.previous,next:e.next})}var v=s(8264),j=s(6016),f=s(2840),g=s(5864),N=s(4592),C=s(9920);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(h.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(h.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=L[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function U(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,i.jsx)(h.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(j.c,{to:s,onClick:n,children:(0,i.jsx)(h.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,v.c)(),{pluginId:a}=(0,f.UF)({failfast:!0}),{savePreferredVersionName:o}=(0,N.iy)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,f.i8)(a),d=null!=l?l:(r=c).docs.find((e=>e.id===r.mainDocId));var r;return(0,i.jsxs)("div",{className:(0,m.c)(t,g.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(_,{siteTitle:n,versionMetadata:s})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(U,{versionLabel:c.label,to:d.path,onClick:()=>o(c.name)})})]})}function y(e){let{className:t}=e;const s=(0,C.E)();return s.banner?(0,i.jsx)(T,{className:t,versionMetadata:s}):null}function w(e){let{className:t}=e;const s=(0,C.E)();return s.badge?(0,i.jsx)("span",{className:(0,m.c)(t,g.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,i.jsx)(h.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function A(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function M(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:g.W.common.lastUpdated,children:[(0,i.jsx)(h.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,i.jsx)(k,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:n?(0,i.jsx)(A,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var B=s(7790),I=s(7088);const H={lastUpdated:"lastUpdated_vwxv"};function E(e){return(0,i.jsx)("div",{className:(0,m.c)(g.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(I.c,{...e})})})}function V(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,m.c)(g.W.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(B.c,{editUrl:t})}),(0,i.jsx)("div",{className:(0,m.c)("col",H.lastUpdated),children:(s||n)&&(0,i.jsx)(M,{lastUpdatedAt:s,formattedLastUpdatedAt:a,lastUpdatedBy:n})})]})}function W(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:a,tags:o}=e,l=o.length>0,c=!!(t||s||a);return l||c?(0,i.jsxs)("footer",{className:(0,m.c)(g.W.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)(E,{tags:o}),c&&(0,i.jsx)(V,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,formattedLastUpdatedAt:n})]}):null}var D=s(8448),P=s(3088);const S={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...s}=e;return(0,i.jsx)("button",{type:"button",...s,className:(0,m.c)("clean-btn",S.tocCollapsibleButton,!t&&S.tocCollapsibleButtonExpanded,s.className),children:(0,i.jsx)(h.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,D.a)({initialState:!0});return(0,i.jsxs)("div",{className:(0,m.c)(F.tocCollapsible,!o&&F.tocCollapsibleExpanded,s),children:[(0,i.jsx)(z,{collapsed:o,onClick:l}),(0,i.jsx)(D.U,{lazy:!0,className:F.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(P.c,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const G={tocMobile:"tocMobile_ITEo"};function R(){const{toc:e,frontMatter:t}=d();return(0,i.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.c)(g.W.docs.docTocMobile,G.tocMobile)})}var Y=s(5124);function K(){const{toc:e,frontMatter:t}=d();return(0,i.jsx)(Y.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.W.docs.docTocDesktop})}var Z=s(6448),q=s(1200);function J(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=d();return t.hide_title||void 0!==s?null:e.title}();return(0,i.jsxs)("div",{className:(0,m.c)(g.W.docs.docMarkdown,"markdown"),children:[s&&(0,i.jsx)("header",{children:(0,i.jsx)(Z.c,{as:"h1",children:s})}),(0,i.jsx)(q.c,{children:t})]})}var Q=s(9940),X=s(3376),$=s(964);function ee(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,$.c)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(j.c,{"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(ee,{className:te.breadcrumbHomeIcon})})})}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ae(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,i.jsx)(j.c,{className:a,href:s,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function oe(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.c)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ie(){const e=(0,Q.js)(),t=(0,X.Y5)();return e?(0,i.jsx)("nav",{className:(0,m.c)(g.W.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,h.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(se,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(oe,{active:n,index:s,addMicrodata:!!a,children:(0,i.jsx)(ae,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var le=s(1528);const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=d(),s=(0,u.U)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,i.jsx)(R,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,i.jsx)(K,{})}}(),{metadata:{unlisted:n}}=d();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,m.c)("col",!s.hidden&&ce.docItemCol),children:[n&&(0,i.jsx)(le.c,{}),(0,i.jsx)(y,{}),(0,i.jsxs)("div",{className:ce.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ie,{}),(0,i.jsx)(w,{}),s.mobile,(0,i.jsx)(J,{children:t}),(0,i.jsx)(W,{})]}),(0,i.jsx)(x,{})]})]}),s.desktop&&(0,i.jsx)("div",{className:"col col--3",children:s.desktop})]})}function re(e){const t="docs-doc-id-"+e.content.metadata.id,s=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.cr,{className:t,children:[(0,i.jsx)(r,{}),(0,i.jsx)(de,{children:(0,i.jsx)(s,{})})]})})}},4244:(e,t,s)=>{s.d(t,{c:()=>d});s(1504);var n=s(5456),a=s(5864);const o={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=s(7624);function l(e){let{type:t,className:s,children:l}=e;return(0,i.jsx)("div",{className:(0,n.c)(a.W.common.admonition,a.W.common.admonitionType(t),o.admonition,s),children:l})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:o.admonitionContent,children:t}):null}function d(e){const{type:t,icon:s,title:n,children:a,className:o}=e;return(0,i.jsx)(l,{type:t,className:o,children:(0,i.jsx)(c,{children:a})})}}}]);