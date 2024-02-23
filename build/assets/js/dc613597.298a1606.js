"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[601],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(7462),a=n(7294),o=n(6010),i=n(2957),s=n(6550),l=n(5238),c=n(3609),u=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=l??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(1048);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(3992),o=n(425);function i(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:i}=e;return r.createElement(a.Z,{groupId:"development-environment"},r.createElement(o.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(o.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(o.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(i,null)))}},662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>y,default:()=>A,frontMatter:()=>w,metadata:()=>C,toc:()=>N});var r=n(7462),a=(n(7294),n(4137)),o=n(415);const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"aps.js")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," folder. This is where we will be implementing\nall the APS logic that will be used in different areas of our server application. Let's start\nby adding the following code to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"const fs = require('fs');\nconst APS = require('forge-apis');\nconst { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_BUCKET } = require('../config.js');\n\nlet internalAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);\nlet publicAuthClient = new APS.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, ['viewables:read'], true);\n\nconst service = module.exports = {};\n\nservice.getInternalToken = async () => {\n    if (!internalAuthClient.isAuthorized()) {\n        await internalAuthClient.authenticate();\n    }\n    return internalAuthClient.getCredentials();\n};\n\nservice.getPublicToken = async () => {\n    if (!publicAuthClient.isAuthorized()) {\n        await publicAuthClient.authenticate();\n    }\n    return publicAuthClient.getCredentials();\n};\n")),(0,a.kt)("p",null,"The code creates two authentication clients, one for generating tokens for internal use\n(giving us read/write access to the Data Management buckets and objects), and one for generating\ntokens for public use (only giving a read access to the translation outputs from the Model Derivative\nservice), and two helper methods to generate the corresponding tokens for us."))}s.isMDXComponent=!0;const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getPublicToken } = require('../services/aps.js');\n\nlet router = express.Router();\n\nrouter.get('/api/auth/token', async function (req, res, next) {\n    try {\n        res.json(await getPublicToken());\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,a.kt)("p",null,"Here we implement a new ",(0,a.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"Express Router")," that will handle\nrequests coming to our server, with the URL ending with ",(0,a.kt)("inlineCode",{parentName:"p"},"/token"),", by generating a public access token\nand sending it back to the client as a JSON response."),(0,a.kt)("p",null,'Let\'s "mount" the router to our server application by modifying the ',(0,a.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst { PORT } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\n// highlight-start\napp.use(require('./routes/auth.js'));\n// highlight-end\napp.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });\n")))}c.isMDXComponent=!0;const u={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,a.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,a.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}p.isMDXComponent=!0;const d={toc:[]};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"APS.cs")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Models")," subfolder. That is where we will be implementing\nall the APS-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.cs"',title:'"Models/APS.cs"'},'public partial class APS\n{\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private readonly string _bucket;\n\n    public APS(string clientId, string clientSecret, string bucket = null)\n    {\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n        _bucket = string.IsNullOrEmpty(bucket) ? string.Format("{0}-basic-app", _clientId.ToLower()) : bucket;\n    }\n}\n')),(0,a.kt)("p",null,"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"APS")," class is declared as ",(0,a.kt)("inlineCode",{parentName:"p"},"partial"),". We're going to extend it\nin other ",(0,a.kt)("inlineCode",{parentName:"p"},"*.cs")," files later. An ",(0,a.kt)("inlineCode",{parentName:"p"},"APS")," singleton will then be provided to our server\nthrough ASP.NET's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"dependency injection"),"."),(0,a.kt)("p",null,"Then create another file in the same ",(0,a.kt)("inlineCode",{parentName:"p"},"Models")," subfolder, and call it ",(0,a.kt)("inlineCode",{parentName:"p"},"APS.Auth.cs"),".\nHere we will implement all the authentication logic. Populate the file with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.Auth.cs"',title:'"Models/APS.Auth.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\n\npublic record Token(string AccessToken, DateTime ExpiresAt);\n\npublic partial class APS\n{\n    private Token _internalTokenCache;\n    private Token _publicTokenCache;\n\n    private async Task<Token> GetToken(Scope[] scopes)\n    {\n        dynamic auth = await new TwoLeggedApi().AuthenticateAsync(_clientId, _clientSecret, "client_credentials", scopes);\n        return new Token(auth.access_token, DateTime.UtcNow.AddSeconds(auth.expires_in));\n    }\n\n    public async Task<Token> GetPublicToken()\n    {\n        if (_publicTokenCache == null || _publicTokenCache.ExpiresAt < DateTime.UtcNow)\n            _publicTokenCache = await GetToken(new Scope[] { Scope.ViewablesRead });\n        return _publicTokenCache;\n    }\n\n    private async Task<Token> GetInternalToken()\n    {\n        if (_internalTokenCache == null || _internalTokenCache.ExpiresAt < DateTime.UtcNow)\n            _internalTokenCache = await GetToken(new Scope[] { Scope.BucketCreate, Scope.BucketRead, Scope.DataRead, Scope.DataWrite, Scope.DataCreate });\n        return _internalTokenCache;\n    }\n}\n')),(0,a.kt)("p",null,"This part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"APS")," class creates two authentication clients, one for internal use\n(giving us read/write access to the Data Management buckets and objects), and one for public use\n(only allowing access to the translation outputs from the Model Derivative service), and a couple\nof methods for generating the corresponding tokens for us."),(0,a.kt)("p",null,"Next, let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file to make a singleton instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"APS")," class\navailable to our server application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var clientID = Configuration["APS_CLIENT_ID"];\n        var clientSecret = Configuration["APS_CLIENT_SECRET"];\n        var bucket = Configuration["APS_BUCKET"]; // Optional\n        if (string.IsNullOrEmpty(clientID) || string.IsNullOrEmpty(clientSecret))\n        {\n            throw new ApplicationException("Missing required environment variables APS_CLIENT_ID or APS_CLIENT_SECRET.");\n        }\n        // highlight-start\n        services.AddSingleton<APS>(new APS(clientID, clientSecret, bucket));\n        // highlight-end\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')))}h.isMDXComponent=!0;const m={toc:[]};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthController.cs")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    public record AccessToken(string access_token, long expires_in);\n\n    private readonly APS _aps;\n\n    public AuthController(APS aps)\n    {\n        _aps = aps;\n    }\n\n    [HttpGet("token")]\n    public async Task<AccessToken> GetAccessToken()\n    {\n        var token = await _aps.GetPublicToken();\n        return new AccessToken(\n            token.AccessToken,\n            (long)Math.Round((token.ExpiresAt - DateTime.UtcNow).TotalSeconds)\n        );\n    }\n}\n')),(0,a.kt)("p",null,"The controller will receive the instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"APS")," - our Autodesk Platform Services client - through ASP.NET's\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"Dependency injection"),",\nand it will handle requests to ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/auth/token")," by generating a new access token\nand sending it back to the client as a JSON payload."))}g.isMDXComponent=!0;const f={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,a.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,a.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}k.isMDXComponent=!0;const b={toc:[]};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,a.kt)("em",{parentName:"p"},"Debug > Restart"),",\nor by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"), otherwise start it again (using ",(0,a.kt)("em",{parentName:"p"},"Debug > Start Debugging"),",\nor by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"). When you navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/token"},"http://localhost:8080/api/auth/token"),"\nin the browser, the server should now respond with a JSON object containing the access token data."))}v.isMDXComponent=!0;const w={},y="Authentication",C={unversionedId:"tutorials/simple-viewer/auth",id:"tutorials/simple-viewer/auth",title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/03-tutorials/01-simple-viewer/02-auth.mdx",sourceDirName:"03-tutorials/01-simple-viewer",slug:"/tutorials/simple-viewer/auth",permalink:"/tutorials/simple-viewer/auth",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/01-simple-viewer/02-auth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Setup",permalink:"/tutorials/simple-viewer/setup"},next:{title:"Data & Derivatives",permalink:"/tutorials/simple-viewer/data"}},T={},N=[{value:"Access tokens",id:"access-tokens",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],S={toc:N};function A(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},S,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the APS platform, and generate access tokens for different use cases."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing you to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.')),(0,a.kt)("h2",{id:"access-tokens"},"Access tokens"),(0,a.kt)(o.Z,{NodeJsVsCode:s,DotNetVsCode:h,DotNetVs2022:h,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,a.kt)("p",null,"Now we can expose this functionality through the first endpoint of our server."),(0,a.kt)(o.Z,{NodeJsVsCode:c,DotNetVsCode:g,DotNetVs2022:g,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"Let's see if our new server endpoint works."),(0,a.kt)(o.Z,{NodeJsVsCode:p,DotNetVsCode:k,DotNetVs2022:v,mdxType:"EnvTabs"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using Google Chrome, consider installing ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"},"JSON Formatter"),"\nor a similar extension to automatically format JSON responses.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Response",src:n(3572).Z,width:"1500",height:"929"})))}A.isMDXComponent=!0},3572:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auth-response-e690484520882a382b8404b417e32853.webp"}}]);