"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[920],{6060:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),r=a(9962),c=a(8559),l=a(1514),s=a(3699),u=a(6550),o=a(6136);const m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var h=a(5202),i=a(6654),p=a(1523),d=a(7976),_=a(9395),f=a(4056),E=a(5901);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const w="searchQueryInput_CFBF",I="searchResultItem_U687",S="searchResultItemPath_uIbk",b="searchResultItemSummary_oZHr";var y=a(318);function k(e){let{searchResult:{document:t,type:a,page:r,tokens:c,metadata:l}}=e;const u=0===a,o=2===a,m=(u?t.b:r.b).slice(),h=o?t.s:t.t;return u||m.push(r.t),n.createElement("article",{className:I},n.createElement("h2",null,n.createElement(s.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,p.C)(h,c):(0,d.o)(h,(0,_.m)(l,"t"),c,100)}})),m.length>0&&n.createElement("p",{className:S},(0,y.e)(m)),o&&n.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,d.o)(t.t,(0,_.m)(l,"t"),c,100)}}))}const v=function(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{searchValue:t,updateSearchPath:a}=m(),[s,u]=(0,n.useState)(t),[o,p]=(0,n.useState)(),[d,_]=(0,n.useState)(),I=(0,n.useMemo)((()=>s?g(E.Iz.search_results_for,{keyword:s}):E.Iz.search_the_documentation),[s]);(0,n.useEffect)((()=>{a(s),o&&(s?o(s,(e=>{_(e)})):_(void 0))}),[s,o]);const S=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==s&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);p((()=>(0,i.v)(t,a,100)))}()}),[e]),n.createElement(c.Z,null,n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,I)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,I),n.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:S,value:s,autoComplete:"off",autoFocus:!0}),!o&&s&&n.createElement("div",null,n.createElement(f.Z,null)),d&&(d.length>0?n.createElement("p",null,g(1===d.length?E.Iz.count_documents_found:E.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,E.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(k,{key:e.document.i,searchResult:e}))))))}}}]);