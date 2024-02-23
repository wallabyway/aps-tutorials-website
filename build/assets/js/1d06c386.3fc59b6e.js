"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[984],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=d(t),h=i,c=m["".concat(l,".").concat(h)]||m[h]||p[h]||s;return t?o.createElement(c,a(a({ref:n},u),{},{components:t})):o.createElement(c,a({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var d=2;d<s;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(7462),i=(t(7294),t(4137));const s={},a="Model Summary",r={unversionedId:"tutorials/dashboard/panel",id:"tutorials/dashboard/panel",title:"Model Summary",description:"In this step we will create another viewer extension, this time introducing custom UI elements",source:"@site/docs/03-tutorials/03-dashboard/02-panel.mdx",sourceDirName:"03-tutorials/03-dashboard",slug:"/tutorials/dashboard/panel",permalink:"/tutorials/dashboard/panel",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/03-dashboard/02-panel.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Extension",permalink:"/tutorials/dashboard/basic"},next:{title:"Histogram Charts",permalink:"/tutorials/dashboard/charts"}},l={},d=[{value:"Extension skeleton",id:"extension-skeleton",level:2},{value:"Toolbar button",id:"toolbar-button",level:2},{value:"Custom panel",id:"custom-panel",level:2},{value:"Try it out",id:"try-it-out",level:2}],u={toc:d};function p(e){let{components:n,...s}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"model-summary"},"Model Summary"),(0,i.kt)("p",null,"In this step we will create another viewer extension, this time introducing custom UI elements\nas well. We will add a custom button to the viewer toolbar, and when the button is clicked,\nwe display a docking panel with the summary of property values in different design elements."),(0,i.kt)("h2",{id:"extension-skeleton"},"Extension skeleton"),(0,i.kt)("p",null,"Just like with the previous extension, create a new file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," subfolder,\ncall it ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryExtension.js"),", and populate it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/SummaryExtension.js"',title:'"wwwroot/extensions/SummaryExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass SummaryExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n    }\n\n    load() {\n        super.load();\n        console.log('SummaryExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        console.log('SummaryExtension unloaded.');\n        return true;\n    }\n\n    onModelLoaded(model) {\n        super.onModelLoaded(model);\n        this.update();\n    }\n\n    onSelectionChanged(model, dbids) {\n        super.onSelectionChanged(model, dbids);\n        this.update();\n    }\n\n    onIsolationChanged(model, dbids) {\n        super.onIsolationChanged(model, dbids);\n        this.update();\n    }\n\n    async update() {\n        // TODO\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('SummaryExtension', SummaryExtension);\n")),(0,i.kt)("p",null,"Next, in ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot/viewer.js"),", import the extension code to our application, and pass the extension ID\nto the viewer constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import './extensions/LoggerExtension.js';\n// highlight-start\nimport './extensions/SummaryExtension.js';\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n    extensions: [\n        'LoggerExtension',\n        // highlight-start\n        'SummaryExtension',\n        // highlight-end\n    ]\n};\nconst viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n")),(0,i.kt)("h2",{id:"toolbar-button"},"Toolbar button"),(0,i.kt)("p",null,"Now we will create a new button in the viewer toolbar. Since other extensions will need\nthis functionality as well, let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class (in the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension.js")," file)\nwith the following helper methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n    }\n\n    load() {\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    unload() {\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    onToolbarCreated() {}\n\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n\n    findLeafNodes(model) {\n        return new Promise(function (resolve, reject) {\n            model.getObjectTree(function (tree) {\n                let leaves = [];\n                tree.enumNodeChildren(tree.getRootId(), function (dbid) {\n                    if (tree.getChildCount(dbid) === 0) {\n                        leaves.push(dbid);\n                    }\n                }, true);\n                resolve(leaves);\n            }, reject);\n        });\n    }\n\n    async findPropertyNames(model) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, {}, function (results) {\n                let propNames = new Set();\n                for (const result of results) {\n                    for (const prop of result.properties) {\n                        propNames.add(prop.displayName);\n                    }\n                }\n                resolve(Array.from(propNames.values()));\n            }, reject);\n        });\n    }\n\n    // highlight-start\n    createToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {\n        let group = this.viewer.toolbar.getControl('dashboard-toolbar-group');\n        if (!group) {\n            group = new Autodesk.Viewing.UI.ControlGroup('dashboard-toolbar-group');\n            this.viewer.toolbar.addControl(group);\n        }\n        const button = new Autodesk.Viewing.UI.Button(buttonId);\n        button.setToolTip(buttonTooltip);\n        group.addControl(button);\n        const icon = button.container.querySelector('.adsk-button-icon');\n        if (icon) {\n            icon.style.backgroundImage = `url(${buttonIconUrl})`; \n            icon.style.backgroundSize = `24px`; \n            icon.style.backgroundRepeat = `no-repeat`; \n            icon.style.backgroundPosition = `center`; \n        }\n        return button;\n    }\n    // highlight-end\n\n    // highlight-start\n    removeToolbarButton(button) {\n        const group = this.viewer.toolbar.getControl('dashboard-toolbar-group');\n        group.removeControl(button);\n    }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,"The new code is using classes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Autodesk.Viewing.UI")," namespace to create\na new toolbar button group, and a new toolbar button with specific ID, icon URL,\nand tooltip message."),(0,i.kt)("p",null,"Now let's use these helper methods in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryExtension")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/SummaryExtension.js"',title:'"wwwroot/extensions/SummaryExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass SummaryExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        // highlight-start\n        this._button = null;\n        // highlight-end\n    }\n\n    load() {\n        super.load();\n        console.log('SummaryExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        // highlight-start\n        if (this._button) {\n            this.removeToolbarButton(this._button);\n            this._button = null;\n        }\n        // highlight-end\n        console.log('SummaryExtension unloaded.');\n        return true;\n    }\n\n    onToolbarCreated() {\n        // highlight-start\n        this._button = this.createToolbarButton('summary-button', 'https://img.icons8.com/small/32/brief.png', 'Show Model Summary');\n        this._button.onClick = () => {\n            // TODO\n        };\n        // highlight-end\n    }\n\n    onModelLoaded(model) {\n        super.onModelLoaded(model);\n        this.update();\n    }\n\n    onSelectionChanged(model, dbids) {\n        super.onSelectionChanged(model, dbids);\n        this.update();\n    }\n\n    onIsolationChanged(model, dbids) {\n        super.onIsolationChanged(model, dbids);\n        this.update();\n    }\n\n    async update() {\n        // TODO\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('SummaryExtension', SummaryExtension);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onToolbarCreated"),' method will be automatically called by the viewer when (and if)\nthe toolbar is ready. Note that the viewer may be activated in a "headless" mode,\nin which case no UI will be created, and the ',(0,i.kt)("inlineCode",{parentName:"p"},"onToolbarCreated")," method will not be called."),(0,i.kt)("h2",{id:"custom-panel"},"Custom panel"),(0,i.kt)("p",null,"And finally, we update the ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryExtension")," extension so that when the user clicks on\nthe toolbar button, we display a custom viewer panel with data aggregated from properites\nof the currently loaded design."),(0,i.kt)("p",null,"Start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryPanel.js")," file in the same folder where ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryExtension.js"),"\nis located, and add the following code to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/SummaryPanel.js"',title:'"wwwroot/extensions/SummaryPanel.js"'},"export class SummaryPanel extends Autodesk.Viewing.UI.PropertyPanel {\n    constructor(extension, id, title) {\n        super(extension.viewer.container, id, title);\n        this.extension = extension;\n    }\n\n    async update(model, dbids, propNames) {\n        this.removeAllProperties();\n        for (const propName of propNames) {\n            const initialValue = { sum: 0, count: 0, min: Infinity, max: -Infinity };\n            const aggregateFunc = (aggregate, value, property) => {\n                return {\n                    count: aggregate.count + 1,\n                    sum: aggregate.sum + value,\n                    min: Math.min(aggregate.min, value),\n                    max: Math.max(aggregate.max, value),\n                    units: property.units,\n                    precision: property.precision\n                };\n            };\n            const { sum, count, min, max, units, precision } = await this.aggregatePropertyValues(model, dbids, propName, aggregateFunc, initialValue);\n            if (count > 0) {\n                const category = propName;\n                this.addProperty('Count', count, category);\n                this.addProperty('Sum', this.toDisplayUnits(sum, units, precision), category);\n                this.addProperty('Avg', this.toDisplayUnits((sum / count), units, precision), category);\n                this.addProperty('Min', this.toDisplayUnits(min, units, precision), category);\n                this.addProperty('Max', this.toDisplayUnits(max, units, precision), category);\n            }\n        }\n    }\n\n    async aggregatePropertyValues(model, dbids, propertyName, aggregateFunc, initialValue = 0) {\n        return new Promise(function (resolve, reject) {\n            let aggregatedValue = initialValue;\n            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {\n                for (const result of results) {\n                    if (result.properties.length > 0) {\n                        const prop = result.properties[0];\n                        aggregatedValue = aggregateFunc(aggregatedValue, prop.displayValue, prop);\n                    }\n                }\n                resolve(aggregatedValue);\n            }, reject);\n        });\n    }\n\n    toDisplayUnits(value, units, precision) {\n        return Autodesk.Viewing.Private.formatValueWithUnits(value, units, 3, precision);\n    }\n}\n")),(0,i.kt)("p",null,"The new class is derived from ",(0,i.kt)("a",{parentName:"p",href:"https://aps.autodesk.com/en/docs/viewer/v7/reference/UI/PropertyPanel/"},"Autodesk.Viewing.UI.PropertyPanel"),"\nwhich is the standard panel UI used for displaying properties of selected design elements.\nIn this case we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"removeAllProperties")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addProperty")," methods to display different\nkind of data. Given a specific set of object IDs and property names, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SummaryPanel")," will\ndisplay aggregated values (count, sum, average, minimum, and maximum) of these properties\nacross all objects."),(0,i.kt)("p",null,"Finally, let's add the panel to our extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/SummaryExtension.js"',title:'"wwwroot/extensions/SummaryExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n// highlight-start\nimport { SummaryPanel } from './SummaryPanel.js';\n// highlight-end\n\n// highlight-start\nconst SUMMARY_PROPS = ['Length', 'Area', 'Volume', 'Density', 'Mass', 'Price'];\n// highlight-end\n\nclass SummaryExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._button = null;\n        // highlight-start\n        this._panel = null;\n        // highlight-end\n    }\n\n    load() {\n        super.load();\n        console.log('SummaryExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        if (this._button) {\n            this.removeToolbarButton(this._button);\n            this._button = null;\n        }\n        // highlight-start\n        if (this._panel) {\n            this._panel.setVisible(false);\n            this._panel.uninitialize();\n            this._panel = null;\n        }\n        // highlight-end\n        console.log('SummaryExtension unloaded.');\n        return true;\n    }\n\n    onToolbarCreated() {\n        // highlight-start\n        this._panel = new SummaryPanel(this, 'model-summary-panel', 'Model Summary');\n        // highlight-end\n        this._button = this.createToolbarButton('summary-button', 'https://img.icons8.com/small/32/brief.png', 'Show Model Summary');\n        this._button.onClick = () => {\n            // highlight-start\n            this._panel.setVisible(!this._panel.isVisible());\n            this._button.setState(this._panel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);\n            if (this._panel.isVisible()) {\n                this.update();\n            }\n            // highlight-end\n        };\n    }\n\n    onModelLoaded(model) {\n        super.onModelLoaded(model);\n        this.update();\n    }\n\n    onSelectionChanged(model, dbids) {\n        super.onSelectionChanged(model, dbids);\n        this.update();\n    }\n\n    onIsolationChanged(model, dbids) {\n        super.onIsolationChanged(model, dbids);\n        this.update();\n    }\n\n    async update() {\n        // highlight-start\n        if (this._panel) {\n            const selectedIds = this.viewer.getSelection();\n            const isolatedIds = this.viewer.getIsolatedNodes();\n            if (selectedIds.length > 0) { // If any nodes are selected, compute the aggregates for them\n                this._panel.update(this.viewer.model, selectedIds, SUMMARY_PROPS);\n            } else if (isolatedIds.length > 0) { // Or, if any nodes are isolated, compute the aggregates for those\n                this._panel.update(this.viewer.model, isolatedIds, SUMMARY_PROPS);\n            } else { // Otherwise compute the aggregates for all nodes\n                const dbids = await this.findLeafNodes(this.viewer.model);\n                this._panel.update(this.viewer.model, dbids, SUMMARY_PROPS);\n            }\n        }\n        // highlight-end\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('SummaryExtension', SummaryExtension);\n")),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"This time we can test our new extension directly in the viewer. Try clicking the new toolbar\nbutton to open our summary panel. The panel shows various aggregates of properties\nwe hard-coded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SUMMARY_PROPS")," constant (",(0,i.kt)("em",{parentName:"p"},"Length"),", ",(0,i.kt)("em",{parentName:"p"},"Area"),", ",(0,i.kt)("em",{parentName:"p"},"Volume"),", ",(0,i.kt)("em",{parentName:"p"},"Density"),",\n",(0,i.kt)("em",{parentName:"p"},"Mass"),", and ",(0,i.kt)("em",{parentName:"p"},"Price"),") for all objects. And when we isolate or select some of the design\nelements by hand, the aggregated values should reflect that as well."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Aggregates Result",src:t(6257).Z,width:"3496",height:"1920"})))}p.isMDXComponent=!0},6257:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/model-summary-final-app-d48d65fec273f57ae1fef48bc013f093.webp"}}]);