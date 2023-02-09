"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[6677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Strings",s={unversionedId:"guidelines/strings",id:"guidelines/strings",title:"Strings",description:"Use string interpolation to concatenate short strings.",source:"@site/docs-contributing/guidelines/4_strings.md",sourceDirName:"guidelines",slug:"/guidelines/strings",permalink:"/docs-contributing/guidelines/strings",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commenting",permalink:"/docs-contributing/guidelines/commenting"},next:{title:"Implicitly Typed Local Variables",permalink:"/docs-contributing/guidelines/implicity-typed-local-variables"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strings"},"Strings"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated"},(0,i.kt)("inlineCode",{parentName:"a"},"string interpolation"))," to concatenate short strings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'string remixInfo = $"Title: {Beatmap.properties["remixtitle"]}, Creator: {Beatmap.properties["remixauthor"]}";\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Path.Combine")," to concatenate system and local paths."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'string filtersPath = Path.Combine("Application.streamingAssetsPath", "Filters");\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When appending strings in loops, use a ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"StringBuilder"))," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'var text = "hello";\nvar manyOfText = new StringBuilder();\nfor (var i = 0; i < 1337; i++)\n{\n    manyOfText.Append(text);\n}\nDebug.Log(manyOfText);\n')))}m.isMDXComponent=!0}}]);