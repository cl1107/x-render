(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{l0cc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),c=t("ZpkN");t("JjdP");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"faq"},r.a.createElement(l["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"FAQ"),r.a.createElement("h3",{id:"1-\u5982\u4f55\u5728-typescript-\u9879\u76ee\u4e2d\u4f7f\u7528\uff1f"},r.a.createElement(l["AnchorLink"],{to:"#1-\u5982\u4f55\u5728-typescript-\u9879\u76ee\u4e2d\u4f7f\u7528\uff1f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"1. \u5982\u4f55\u5728 TypeScript \u9879\u76ee\u4e2d\u4f7f\u7528\uff1f"),r.a.createElement("p",null,"\u5728 typescript \u4e2d\u4f7f\u7528\u76f4\u63a5\u5f15\u5165 from-render\uff0c\u4f1a\u62a5\u4ee5\u4e0b\u9519\u8bef\uff1a"),r.a.createElement("p",null,r.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB14eJFrUT1gK0jSZFrXXcNCXXa-1003-202.png",alt:""})),r.a.createElement(c["a"],{code:"/Users/nasa/code/try/cra-ts/src/App.tsx\nTypeScript error in /Users/nasa/code/try/cra-ts/src/App.tsx(2,24):\nCould not find a declaration file for module 'form-render/lib/antd'. '/Users/nasa/code/try/cra-ts/node_modules/form-render/lib/antd.js' implicitly has an 'any' type.\n  Try `npm install @types/form-render` if it exists or add a new declaration (.d.ts) file containing `declare module 'form-render/lib/antd';`  TS7016\n\n    1 | import React, { useState } from 'react';\n  > 2 | import FormRender from 'form-render/lib/antd';\n      |                        ^\n    3 | import SCHEMA from './schema.json';\n    4 |\n    5 | const App: React.FC = () => {",lang:"js"}),r.a.createElement("p",null,"\u56e0\u4e3a form-render \u662f\u4ee5 JavaScript \u4e66\u5199\uff0c\u7f3a\u5c11 typescript \u7684\u58f0\u660e\u6587\u4ef6\u3002 \u76ee\u524d\u5728 ts \u9879\u76ee\u4e2d\u4f7f\u7528 form-render \u53ea\u9700\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a ",r.a.createElement("code",null,"index.d.ts"),"\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5728 ",r.a.createElement("code",null,"src")," \u4e2d\u521b\u5efa\u4e00\u4e2a ",r.a.createElement("code",null,"types")," \u76ee\u5f55\uff0c\u7528\u6765\u5b58\u653e\u6240\u6709\u58f0\u660e\u6587\u4ef6 ",r.a.createElement("code",null,"index.d.ts"),"\u3002")),r.a.createElement("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),r.a.createElement(c["a"],{code:"/path/to/project\n\u251c\u2500\u2500 src\n|  \u251c\u2500\u2500 index.ts\n|  \u2514\u2500\u2500 types\n|        \u2514\u2500\u2500 index.d.ts\n|\n\u2514\u2500\u2500 tsconfig.json",lang:"unknown"}),r.a.createElement("ol",{start:2},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("code",null,"index.d.ts")," \u6587\u4ef6\u5982\u4e0b\u4e66\u5199\u3002\u6ce8\u610f\u4f7f\u7528 fusion \u7684\u540c\u5b66 module \u540d\u79f0\u53d8\u4e3a",r.a.createElement("code",null,"'form-render/lib/fusion'")),r.a.createElement(c["a"],{code:"declare module 'form-render/lib/antd' {\n  import React from 'react';\n  export interface FRProps {\n    schema: object;\n    formData: object;\n    onChange(data?: object): void;\n    onMount(): void;\n    name?: string;\n    column?: number;\n    uiSchema?: object;\n    widgets?: any;\n    FieldUI?: any;\n    fields?: any;\n    mapping?: object;\n    showDescIcon?: boolean;\n    showValidate?: boolean;\n    displayType?: string;\n    onValidate: any;\n    readOnly?: boolean;\n    labelWidth?: number | string;\n  }\n  class FormRender extends React.Component<FRProps> {}\n  export default FormRender;\n}",lang:"js"}),r.a.createElement("p",null,"\u5982\u6b64\u5c31\u5927\u529f\u544a\u6210\u5566\uff01\u7b14\u8005\u5728 codesandbox \u5efa\u4e86\u4e00\u4e2a",r.a.createElement(l["Link"],{to:"https://codesandbox.io/s/zaitypescriptxiashiyongform-render-f309f"},"\u5b8c\u6574\u7684\u6837\u4f8b"),"\uff0c\u4f9b\u5927\u5bb6\u53c2\u8003\u3002"))),r.a.createElement("h3",{id:"2-\u6211\u5f15\u5165\u4e86\u7ec4\u4ef6\uff0c\u4f46\u53d1\u73b0\u65e0\u8bba\u5982\u4f55\u90fd\u663e\u793a\u4e0d\u51fa\u6765\uff1f"},r.a.createElement(l["AnchorLink"],{to:"#2-\u6211\u5f15\u5165\u4e86\u7ec4\u4ef6\uff0c\u4f46\u53d1\u73b0\u65e0\u8bba\u5982\u4f55\u90fd\u663e\u793a\u4e0d\u51fa\u6765\uff1f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"2. \u6211\u5f15\u5165\u4e86\u7ec4\u4ef6\uff0c\u4f46\u53d1\u73b0\u65e0\u8bba\u5982\u4f55\u90fd\u663e\u793a\u4e0d\u51fa\u6765\uff1f"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9996\u5148\u53bb ",r.a.createElement(l["Link"],{to:"/playground"},"Playground")," \u4e2d\u53bb\u5c06\u5bf9\u4e8e\u7684\u53c2\u6570\u586b\u5165\u8fdb\u53bb\uff0c\u770b\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u51fa\u73b0"),r.a.createElement("li",null,"\u5047\u5982\u53ef\u4ee5\uff0c\u68c0\u67e5\u4e00\u4e0b onChange \u56de\u8c03\u91cc\u9762\u662f\u5426\u5bf9 formData \u8fdb\u884c\u4e86 setState\uff0c\u6ca1\u6709\u7684\u8bdd\uff0c\u53ef\u80fd\u7531\u4e8e\u521d\u59cb\u5316\u95ee\u9898\u6ca1\u6709\u663e\u793a\uff0c\u52a0\u4e0a\u5373\u53ef")),r.a.createElement("h3",{id:"3-\u6211\u7684-formrender-\u53ef\u4ee5\u6b63\u5e38\u6e32\u67d3\uff0c\u4f46\u662f\u8c8c\u4f3c-antd-\u7684\u6837\u5f0f\u90fd\u6ca1\u6709\u751f\u6548\uff1f"},r.a.createElement(l["AnchorLink"],{to:"#3-\u6211\u7684-formrender-\u53ef\u4ee5\u6b63\u5e38\u6e32\u67d3\uff0c\u4f46\u662f\u8c8c\u4f3c-antd-\u7684\u6837\u5f0f\u90fd\u6ca1\u6709\u751f\u6548\uff1f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"3. \u6211\u7684 FormRender \u53ef\u4ee5\u6b63\u5e38\u6e32\u67d3\uff0c\u4f46\u662f\u8c8c\u4f3c antd \u7684\u6837\u5f0f\u90fd\u6ca1\u6709\u751f\u6548\uff1f"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u539f\u6709\u7684 jsx \u6587\u4ef6\u4e2d\uff0c\u68c0\u6d4b\u662f\u5426\u6709\u9ed8\u8ba4 antd \u7684\u6837\u5f0f\uff0c\u6216\u8005\u662f\u5426\u5f15\u5165\u4e86\u4e24\u4e2a antd \u7248\u672c"),r.a.createElement("li",null,"\u82e5\u65e0\u6837\u5f0f\uff0c\u5219\u52a0\u5165 ",r.a.createElement("code",null,"import 'antd/dist/antd.css';")," \u6837\u5f0f\u5373\u53ef"),r.a.createElement("li",null,"\u82e5\u4e24\u4e2a\u7248\u672c\uff0c\u76f4\u63a5 ",r.a.createElement("code",null,"tnpm update")," \u5373\u53ef")),r.a.createElement("h3",{id:"4tooltip-\u5982\u679c\u5728\u6709\u5176\u4ed6\u5c42\u7ea7\u5143\u7d20\u5185\u90e8\uff0c\u5c31\u4f1a\u88ab\u906e\u6321\uff0c\u6211\u8bd5\u4e86\u8c03-z-index-\u4e5f\u6ca1\u7528"},r.a.createElement(l["AnchorLink"],{to:"#4tooltip-\u5982\u679c\u5728\u6709\u5176\u4ed6\u5c42\u7ea7\u5143\u7d20\u5185\u90e8\uff0c\u5c31\u4f1a\u88ab\u906e\u6321\uff0c\u6211\u8bd5\u4e86\u8c03-z-index-\u4e5f\u6ca1\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"4.tooltip \u5982\u679c\u5728\u6709\u5176\u4ed6\u5c42\u7ea7\u5143\u7d20\u5185\u90e8\uff0c\u5c31\u4f1a\u88ab\u906e\u6321\uff0c\u6211\u8bd5\u4e86\u8c03 z-index \u4e5f\u6ca1\u7528?"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5e94\u8be5\u662f\u7236\u5bb9\u5668\u8bbe\u7f6e\u4e86 overflow \u4e3a hidden\uff0c\u4fee\u6539\u6210 auto \u5e94\u8be5\u5c31\u597d\u4e86")),r.a.createElement("p",null,"\u5982\u679c\u6709\u65b0\u95ee\u9898\uff0c\u6b22\u8fce\u63d0\u4ea4 PR \u6765\u8865\u5145\uff0c\u9047\u5230\u4e0d\u80fd\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u6dfb\u52a0\u9489\u9489\u7fa4\uff0c\u5bfb\u627e\u8fdc\u7a0b\u534f\u52a9\u3002")))}}}]);