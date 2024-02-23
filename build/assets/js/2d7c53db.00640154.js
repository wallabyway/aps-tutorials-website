"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[239],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?o.createElement(b,s(s({ref:t},c),{},{components:r})):o.createElement(b,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=r(7462),n=(r(7294),r(4137)),a=r(5944);const s=r.p+"assets/images/hubs-browser-fbcb6dee0c2c18c2ff1336e5a0db3465.gif",i={},u="Hubs Browser",p={unversionedId:"tutorials/hubs-browser/index",id:"tutorials/hubs-browser/index",title:"Hubs Browser",description:"Introduction",source:"@site/docs/03-tutorials/02-hubs-browser/index.mdx",sourceDirName:"03-tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/",permalink:"/tutorials/hubs-browser/",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/02-hubs-browser/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Viewer & UI",permalink:"/tutorials/simple-viewer/viewer"},next:{title:"Application Setup",permalink:"/tutorials/hubs-browser/setup"}},c={},l=[{value:"Introduction",id:"introduction",level:2}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hubs-browser"},"Hubs Browser"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this tutorial we're going to build a APS application that will let us browse through the content\nof our authenticated users in other APS-based applications such as ",(0,n.kt)("a",{parentName:"p",href:"https://www.autodesk.com/bim-360/construction-document-management-software/"},"BIM 360 Docs"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://www.autodesk.com/products/autodesk-docs/overview"},"Autodesk Docs"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://www.autodesk.com/products/fusion-360/overview"},"Fusion Team"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to ",(0,n.kt)("a",{parentName:"p",href:"/#provision-access-in-other-products"},"provision access")," to one of your ACC or BIM360 accounts\nso that the application can see your projects, folders, and documents.")),(0,n.kt)(a.Z,{img:s,mdxType:"Image"}),(0,n.kt)("p",null,"We will use the following components of the platform:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aps.autodesk.com/en/docs/oauth/v2/developers_guide/overview"},"Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aps.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aps.autodesk.com/en/docs/viewer/v7/developers_guide/overview"},"Viewer"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you're not interested in building the application from scratch, and you just want to try\nand run it locally, the complete implementation is available on GitHub:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/autodesk-platform-services/aps-hubs-browser-nodejs"},"https://github.com/autodesk-platform-services/aps-hubs-browser-nodejs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/autodesk-platform-services/aps-hubs-browser-dotnet"},"https://github.com/autodesk-platform-services/aps-hubs-browser-dotnet")))))}m.isMDXComponent=!0}}]);