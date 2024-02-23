"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[820],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),i=n(2957),l=n(6550),s=n(5238),u=n(3609),c=n(2560);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=n(1048);const b="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",g,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(3992),r=n(425);function i(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:i}=e;return a.createElement(o.Z,{groupId:"development-environment"},a.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},a.createElement(t,null)),a.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},a.createElement(n,null)),a.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},a.createElement(i,null)))}},3516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>S,frontMatter:()=>v,metadata:()=>y,toc:()=>C});var a=n(7462),o=(n(7294),n(4137)),r=n(415);const i={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Command-line interface, a ",(0,o.kt)("em",{parentName:"p"},"CLI"),", is an essential tool when developing modern web applications.\nIt is often used to initialize new projects, handle their dependencies, or to manage their\nsource code. Different operating systems have their own options (for example, in Windows there's\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PowerShell"},"PowerShell"),",\nand Unix-based systems have all sorts of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_shell"},"shells"),")\nbut in our case we're going to be using ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," which is available ",(0,o.kt)("em",{parentName:"p"},"cross-platform"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Unix-based systems, ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")," (or one of its flavors like ",(0,o.kt)("inlineCode",{parentName:"li"},"zsh"),") is most likely available\nalready, and if not, you can get it from ",(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash"},"https://www.gnu.org/software/bash"),"."),(0,o.kt)("li",{parentName:"ul"},"On Windows, you can install ",(0,o.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows")," which comes bundled\nwith a ",(0,o.kt)("inlineCode",{parentName:"li"},"bash")," terminal")))}l.isMDXComponent=!0;const s={toc:[]};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Another essential part of the modern software development, especially for web, is the source code\nmanagement tool ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git"),". Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Downloads"),"\nsection, and install the latest release for your platform. As mentioned in the previous section,\nthe Windows installer comes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," CLI as well."),(0,o.kt)("p",null,"To check whether ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," is installed and available, try running the following command in ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Checking git in terminal",src:n(3613).Z,width:"1644",height:"994"})))}u.isMDXComponent=!0;var c=n(5944);const d={toc:[]};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For the coding itself you're welcome to use whichever editor you like the most.\nIf you're looking for recommendations, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),"\nas it is free, cross-platform, fast, and packed with lots of great features.\nSimply install the latest stable build for your platform."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We've built an extension for Visual Studio Code that provides insight into\nsome of the APS services and data directly from the editor:\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools"},"Autodesk Forge Tools"),".\nThis could be useful when debugging your own APS applications.")),(0,o.kt)("p",null,"Then you need to install ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C# Extension")," (if don't have it yet) for Visual Studio Code. To install, click on extensions tab on the left sidebar of your Visual Studio Code, then search for ",(0,o.kt)("inlineCode",{parentName:"p"},"C#")," and click install as shown in the image below."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This extension is used for developing web applications in C# in the Visual Studio Code editor:\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C# Extension"),".\nThis could be useful when setting up and debugging your own APS applications.")),(0,o.kt)(c.Z,{img:n(9547),mdxType:"Image"}))}p.isMDXComponent=!0;const m={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,o.kt)(l,{mdxType:"CliSetup"}),(0,o.kt)("h2",{id:"source-code-management"},"Source code management"),(0,o.kt)(u,{mdxType:"GitSetup"}),(0,o.kt)("h2",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"We will also need the Node.js ",(0,o.kt)("em",{parentName:"p"},"runtime")," to run our code, and the Node.js package manager, ",(0,o.kt)("em",{parentName:"p"},"NPM"),",\nto manage 3rd party dependencies. You can get an installer for your platform on ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download"),"\nwhich will install both."),(0,o.kt)("p",null,"To make sure the tools are available, try running the following two commands in ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Checking node in terminal",src:n(2998).Z,width:"1644",height:"994"})),(0,o.kt)("h2",{id:"editor"},"Editor"),(0,o.kt)(p,{mdxType:"VSCodeSetup"}))}h.isMDXComponent=!0;const f={toc:[{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Source code management",id:"source-code-management",level:2},{value:"Runtime",id:"runtime",level:2},{value:"Editor",id:"editor",level:2}]};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command-line-interface"},"Command-line interface"),(0,o.kt)(l,{mdxType:"CliSetup"}),(0,o.kt)("h2",{id:"source-code-management"},"Source code management"),(0,o.kt)(u,{mdxType:"GitSetup"}),(0,o.kt)("h2",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"We will also need the .NET 6 ",(0,o.kt)("em",{parentName:"p"},"runtime")," to run our code and manage 3rd party dependencies.\nYou can get an installer for your platform on ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/6.0"},"https://dotnet.microsoft.com/download/dotnet/6.0"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our sample applications have been developed and tested with .NET 6.0.")),(0,o.kt)("p",null,"To make sure the tool is available, try running the following command in ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet --version\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Checking dotnet in terminal",src:n(7142).Z,width:"1644",height:"994"})),(0,o.kt)("h2",{id:"editor"},"Editor"),(0,o.kt)(p,{mdxType:"VSCodeSetup"}))}k.isMDXComponent=!0;const b={toc:[]};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In our tutorials we will be using Visual Studio Community 2022. You can download ",(0,o.kt)("em",{parentName:"p"},"Visual Studio Installer"),"\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/vs/community/"},"here"),", and then install the desired version and edition\nof Visual Studio from the installer application:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Visual Studio Installer",src:n(5608).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"Make sure to include the ",(0,o.kt)("em",{parentName:"p"},"ASP.NET and web development")," component, and consider including\nthe ",(0,o.kt)("em",{parentName:"p"},".NET desktop development")," component as well if you plan to develop plugins for desktop applications\nsuch as Revit or Inventor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Visual Studio Components",src:n(3710).Z,width:"1280",height:"720"})))}g.isMDXComponent=!0;const v={},w="Environment Setup",y={unversionedId:"setup/index",id:"setup/index",title:"Environment Setup",description:"Some of the tutorials on this website are provided for various combinations",source:"@site/docs/02-setup/index.mdx",sourceDirName:"02-setup",slug:"/setup/",permalink:"/setup/",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/02-setup/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Simple Viewer",permalink:"/tutorials/simple-viewer/"}},N={},C=[],E={toc:C};function S(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,o.kt)("p",null,"Some of the tutorials on this website are provided for various combinations\nof programming languages and IDEs. Based on your preference, setup one of the\nfollowing development environments on your machine:"),(0,o.kt)(r.Z,{NodeJsVsCode:h,DotNetVsCode:k,DotNetVs2022:g,mdxType:"EnvTabs"}),(0,o.kt)("p",null,"And you're all set. Now head over to one of the tutorials and let's code!"))}S.isMDXComponent=!0},9547:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/extension-b0c2ef4e822dafc5363d4a2283fccef9.webp"},3710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vs-components-87b972c7036ae79bdbd72cf6e06c42c7.webp"},5608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vs-installer-7f12e84120348b7e909e862f63eeb45a.webp"},7142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dotnet-46b40ecea2f72f0a2eb242ffb81b6f26.webp"},3613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-7882c81e05c8c23046769fb2d4f8a7cd.webp"},2998:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-850a56ad027351d7448d8e7c215463b3.webp"}}]);