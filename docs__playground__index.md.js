(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"0zqC":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),l=a("q1tI"),o=a.n(l),c=a("k3GJ"),r=a("MZF8"),i=a("dEAq"),d=a("ZpkN");a("TIsu");function u(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var s=e=>{var t,a,s,m=Object(l["useRef"])(),f=Object(l["useContext"])(i["context"]),b=f.locale,p=Object(i["useLocaleProps"])(b,e),_=Object(i["useDemoUrl"])(p.identifier),v=p.demoUrl||_,E=(null===r["a"]||void 0===r["a"]?void 0:r["a"].location.hash)==="#".concat(p.identifier),j=1===Object.keys(p.sources).length,O=Object(i["useCodeSandbox"])(null!==(t=p.hideActions)&&void 0!==t&&t.includes("CSB")?null:p),g=Object(i["useRiddle"])(null!==(a=p.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:p),w=Object(i["useMotions"])(p.motions||[],m.current),k=Object(n["default"])(w,2),y=k[0],h=k[1],N=Object(i["useCopy"])(),C=Object(n["default"])(N,2),x=C[0],S=C[1],T=Object(l["useState"])("_"),A=Object(n["default"])(T,2),I=A[0],L=A[1],P=Object(l["useState"])(u(I,p.sources[I])),R=Object(n["default"])(P,2),q=R[0],J=R[1],M=Object(l["useState"])(Boolean(p.defaultShowCode)),B=Object(n["default"])(M,2),D=B[0],F=B[1],U=Object(l["useState"])(Math.random()),$=Object(n["default"])(U,2),z=$[0],G=$[1],X=p.sources[I][q]||p.sources[I].content,Z=Object(i["useTSPlaygroundUrl"])(b,X),H=Object(l["useRef"])(),K=Object(i["usePrefersColor"])(),V=Object(n["default"])(K,1),Q=V[0];function W(e){L(e),J(u(e,p.sources[e]))}return Object(l["useEffect"])((()=>{G(Math.random())}),[Q]),o.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:z,src:v,ref:H}):p.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&o.a.createElement(i["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},O&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:O}),g&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),p.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:h,onClick:()=>y()}),p.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>G(Math.random())}),!(null!==(s=p.hideActions)&&void 0!==s&&s.includes("EXTERNAL"))&&o.a.createElement(i["Link"],{target:"_blank",to:v},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:()=>x(X)}),"tsx"===q&&D&&o.a.createElement(i["Link"],{target:"_blank",to:Z},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>F(!D)})),D&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!j&&o.a.createElement(c["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:W},Object.keys(p.sources).map((e=>o.a.createElement(c["TabPane"],{tab:"_"===e?"index.".concat(u(e,p.sources[e])):e,key:e})))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(d["a"],{code:X,lang:q,showCopy:!1}))))};t["default"]=s},TIsu:function(e,t,a){},f3kx:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=(a("dEAq"),a("0zqC")),c=a("JjdP"),r=l.a.memo(c["default"]["docs-playground"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"}),l.a.createElement(o["default"],c["default"]["docs-playground"].previewerProps,l.a.createElement(r,null))))}}}]);