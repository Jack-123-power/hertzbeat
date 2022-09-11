"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4170],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,c=u["".concat(o,".").concat(h)]||u[h]||m[h]||p;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const p={id:"extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3eHTTP\u534f\u8bae\u76d1\u63a7"},l=void 0,i={unversionedId:"advanced/extend-http-example-hertzbeat",id:"advanced/extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",description:"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728hertzbeat\u76d1\u63a7\u7cfb\u7edf\u4e0b\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002",source:"@site/docs/advanced/extend-http-example-hertzbeat.md",sourceDirName:"advanced",slug:"/advanced/extend-http-example-hertzbeat",permalink:"/docs/advanced/extend-http-example-hertzbeat",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/advanced/extend-http-example-hertzbeat.md",tags:[],version:"current",frontMatter:{id:"extend-http-example-hertzbeat",title:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3e\u57fa\u4e8eHTTP\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b",sidebar_label:"\u6559\u7a0b\u4e00:\u9002\u914d\u4e00\u6b3eHTTP\u534f\u8bae\u76d1\u63a7"},sidebar:"docs",previous:{title:"JsonPath\u89e3\u6790\u65b9\u5f0f",permalink:"/docs/advanced/extend-http-jsonpath"},next:{title:"\u6559\u7a0b\u4e8c:\u83b7\u53d6TOKEN\u540e\u7eed\u8ba4\u8bc1\u4f7f\u7528",permalink:"/docs/advanced/extend-http-example-token"}},o={},s=[{value:"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e",id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e",level:3},{value:"\u65b0\u589e\u5bf9\u5e94\u7684\u5e94\u7528\u5b9a\u4e49YML\u548c\u53c2\u6570\u5b9a\u4e49YML",id:"\u65b0\u589e\u5bf9\u5e94\u7684\u5e94\u7528\u5b9a\u4e49yml\u548c\u53c2\u6570\u5b9a\u4e49yml",level:3},{value:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9<code>hertzbeat</code>\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",id:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7",level:3},{value:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5",level:3},{value:"\u5b8c\uff01",id:"\u5b8c",level:4}],d={toc:s};function m(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u6b64\u6559\u7a0b\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u63cf\u8ff0\u5982\u4f55\u5728hertzbeat\u76d1\u63a7\u7cfb\u7edf\u4e0b\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u57fa\u4e8ehttp\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\u3002  "),(0,r.kt)("p",null,"\u9605\u8bfb\u6b64\u6559\u7a0b\u524d\u6211\u4eec\u5e0c\u671b\u60a8\u5df2\u7ecf\u4ece",(0,r.kt)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/extend-http"},"http\u534f\u8bae\u81ea\u5b9a\u4e49"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\u3002   "),(0,r.kt)("h3",{id:"http\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\u83b7\u53d6\u6307\u6807\u6570\u636e"},"HTTP\u534f\u8bae\u89e3\u6790\u901a\u7528\u54cd\u5e94\u7ed3\u6784\u4f53\uff0c\u83b7\u53d6\u6307\u6807\u6570\u636e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f88\u591a\u573a\u666f\u6211\u4eec\u9700\u8981\u5bf9\u63d0\u4f9b\u7684 HTTP API \u63a5\u53e3\u8fdb\u884c\u76d1\u63a7\uff0c\u83b7\u53d6\u63a5\u53e3\u8fd4\u56de\u7684\u6307\u6807\u503c\u3002\u8fd9\u7bc7\u6587\u7ae0\u6211\u4eec\u901a\u8fc7http\u81ea\u5b9a\u4e49\u534f\u8bae\u6765\u89e3\u6790\u6211\u4eec\u5e38\u89c1\u7684http\u63a5\u53e3\u54cd\u5e94\u7ed3\u6784\uff0c\u83b7\u53d6\u8fd4\u56de\u4f53\u4e2d\u7684\u5b57\u6bb5\u4f5c\u4e3a\u6307\u6807\u6570\u636e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "code": 200,\n  "msg": "success",\n  "data": {}\n}\n\n')),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u901a\u5e38\u6211\u4eec\u7684\u540e\u53f0API\u63a5\u53e3\u4f1a\u8bbe\u8ba1\u8fd9\u8fd9\u6837\u4e00\u4e2a\u901a\u7528\u8fd4\u56de\u3002hertzbeat\u7cfb\u7edf\u7684\u540e\u53f0\u4e5f\u662f\u5982\u6b64\uff0c\u6211\u4eec\u4eca\u5929\u5c31\u7528hertzbeat\u7684 API \u505a\u6837\u4f8b\uff0c\u65b0\u589e\u9002\u914d\u4e00\u6b3e\u65b0\u7684\u76d1\u63a7\u7c7b\u578b ",(0,r.kt)("strong",{parentName:"p"},"hertzbeat"),"\uff0c\u76d1\u63a7\u91c7\u96c6\u5b83\u7684\u7cfb\u7edf\u6458\u8981\u7edf\u8ba1API\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1157/api/summary"),", \u5176\u54cd\u5e94\u6570\u636e\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "msg": null,\n  "code": 0,\n  "data": {\n    "apps": [\n      {\n        "category": "service",\n        "app": "jvm",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      },\n      {\n        "category": "service",\n        "app": "website",\n        "status": 0,\n        "size": 2,\n        "availableSize": 0,\n        "unManageSize": 2,\n        "unAvailableSize": 0,\n        "unReachableSize": 0\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u8fd9\u6b21\u83b7\u53d6\u5176app\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"category"),",",(0,r.kt)("inlineCode",{parentName:"strong"},"app"),",",(0,r.kt)("inlineCode",{parentName:"strong"},"status"),",",(0,r.kt)("inlineCode",{parentName:"strong"},"size"),",",(0,r.kt)("inlineCode",{parentName:"strong"},"availableSize"),"\u7b49\u6307\u6807\u6570\u636e\u3002")),(0,r.kt)("h3",{id:"\u65b0\u589e\u5bf9\u5e94\u7684\u5e94\u7528\u5b9a\u4e49yml\u548c\u53c2\u6570\u5b9a\u4e49yml"},"\u65b0\u589e\u5bf9\u5e94\u7684\u5e94\u7528\u5b9a\u4e49YML\u548c\u53c2\u6570\u5b9a\u4e49YML"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u9700\u65b0\u589e\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6")),(0,r.kt)("p",null,"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aapp-hertzbeat.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/app/ \u4e0b\n\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aparam-hertzbeat.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/param/ \u4e0b"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6 param-hertzbeat.yml")),(0,r.kt)("p",null,"\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6\u662f\u5b9a\u4e49\u6211\u4eec\u5728\u9875\u9762\u4e0a\u9700\u8981\u8f93\u5165\u54ea\u4e9b\u53c2\u6570\uff0c\u4e00\u822c\u7684HTTP\u534f\u8bae\u53c2\u6570\u4e3b\u8981\u6709ip, port, headers, params, uri, \u8d26\u6237\u5bc6\u7801\u7b49\uff0c\u6211\u4eec\u76f4\u63a5\u590d\u7528 param-api.yml \u91cc\u9762\u7684\u53c2\u6570\u5b9a\u4e49\u5185\u5bb9\uff0c\u5220\u9664\u5176\u4e2d\u7684\u6211\u4eec\u4e0d\u9700\u8981\u8f93\u5165\u7684uri\u53c2\u6570\u548ckeyword\u5173\u952e\u5b57\u7b49\u53c2\u6570\u5373\u53ef\u3002\u5b9a\u4e49\u5185\u5bb9\u5982\u4e0b:\u6ce8\u610f\u26a0\ufe0fapp\u5c5e\u6027\u503c\u9700\u8981\u6539\u4e3a\u76d1\u63a7\u7c7b\u578b\u540d\u79f0",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"app: hertzbeat\nparam:\n  - field: host\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    type: host\n    required: true\n  - field: port\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 1157\n  - field: ssl\n    name:\n      zh-CN: \u542f\u7528HTTPS\n      en-US: HTTPS\n    type: boolean\n    required: true\n  - field: timeout\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    type: number\n    required: false\n    hide: true\n  - field: authType\n    name:\n      zh-CN: \u8ba4\u8bc1\u65b9\u5f0f\n      en-US: Auth Type\n    type: radio\n    required: false\n    hide: true\n    options:\n      - label: Basic Auth\n        value: Basic Auth\n      - label: Digest Auth\n        value: Digest Auth\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 20\n    required: false\n    hide: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n    hide: true\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6 app-hertzbeat.yml")),(0,r.kt)("p",null,"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u662f\u7528\u6765\u5b9a\u4e49\u91c7\u96c6\u7c7b\u578b\u662f\u5565\uff0c\u9700\u8981\u7528\u54ea\u79cd\u534f\u8bae\u91c7\u96c6\u65b9\u5f0f\uff0c\u91c7\u96c6\u7684\u6307\u6807\u662f\u5565\uff0c\u534f\u8bae\u7684\u914d\u7f6e\u53c2\u6570\u7b49\u3002\u6211\u4eec\u76f4\u63a5\u590d\u7528 app-api.yml \u91cc\u9762\u7684\u5b9a\u4e49\u5185\u5bb9,\u4fee\u6539\u4e3a\u6211\u4eec\u5f53\u524d\u7684\u76d1\u63a7\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat"),"\u914d\u7f6e\u53c2\u6570\u5373\u53ef\uff0c\u5982\u4e0b\uff1a\u6ce8\u610f\u26a0\ufe0f\u6211\u4eec\u8fd9\u6b21\u83b7\u53d6\u63a5\u53e3\u54cd\u5e94\u6570\u636e\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"category"),",",(0,r.kt)("inlineCode",{parentName:"p"},"app"),",",(0,r.kt)("inlineCode",{parentName:"p"},"status"),",",(0,r.kt)("inlineCode",{parentName:"p"},"size"),",",(0,r.kt)("inlineCode",{parentName:"p"},"availableSize"),"\u7b49\u5b57\u6bb5\u4f5c\u4e3a\u6307\u6807\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6b64\u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1\u76d1\u63a7 db-\u6570\u636e\u5e93\u76d1\u63a7 custom-\u81ea\u5b9a\u4e49\u76d1\u63a7 os-\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\ncategory: custom\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b\u540d\u79f0(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: hertzbeat\nname:\n  zh-CN: HertzBeat\u76d1\u63a7\u7cfb\u7edf\n  en-US: HertzBeat Monitor\n# \u8f93\u5165\u53c2\u6570\u6620\u5c04map. type\u662f\u53c2\u6570\u7c7b\u578b: 0-number\u6570\u5b57, 1-string\u660e\u6587\u5b57\u7b26\u4e32, 2-secret\u52a0\u5bc6\u5b57\u7b26\u4e32\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: ssl\n    type: 1\n  - key: timeout\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n  - key: authType\n    type: 1\n# \u6307\u6807\u7ec4\u5217\u8868\nmetrics:\n  # \u7b2c\u4e00\u4e2a\u76d1\u63a7\u6307\u6807\u7ec4 summary\n  # \u6ce8\u610f\uff1a\u5185\u7f6e\u76d1\u63a7\u6307\u6807\u6709 (responseTime - \u54cd\u5e94\u65f6\u95f4)\n  - name: summary\n    # \u6307\u6807\u7ec4\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u7ec4\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u7ec4\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u7ec4\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u7ec4\u4e3a\u53ef\u7528\u6027\u6307\u6807\u7ec4,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807\u7ec4,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u6307\u6807\u7ec4\u4e2d\u7684\u5177\u4f53\u76d1\u63a7\u6307\u6807\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   instance\u662f\u5426\u4e3a\u5b9e\u4f8b\u4e3b\u952e   unit:\u6307\u6807\u5355\u4f4d\n      - field: responseTime\n        type: 0\n        unit: ms\n      - field: app\n        type: 1\n        instance: true\n      - field: category\n        type: 1\n      - field: status\n        type: 0\n      - field: size\n        type: 0\n      - field: availableSize\n        type: 0  \n# \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk, \u6211\u4eec\u8fd9\u91cc\u4f7f\u7528HTTP\u534f\u8bae\n    protocol: http\n# \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    http:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      # url\u8bf7\u6c42\u63a5\u53e3\u8def\u5f84\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u9700\u8981\u8f93\u5165\u4f20\u53c2\uff0c\u5199\u6b7b\u4e3a /api/summary\n      url: /api/summary\n      timeout: ^_^timeout^_^\n      # \u8bf7\u6c42\u65b9\u5f0f GET POST PUT DELETE PATCH\uff0c\u5199\u6b7b\u4e3a \n      method: GET\n      # \u662f\u5426\u542f\u7528ssl/tls,\u5373\u662fhttp\u8fd8\u662fhttps,\u9ed8\u8ba4false\n      ssl: ^_^ssl^_^\n      # \u8ba4\u8bc1\n      authorization:\n        # \u8ba4\u8bc1\u65b9\u5f0f: Basic Auth, Digest Auth, Bearer Token\n        type: ^_^authType^_^\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n        digestAuthUsername: ^_^username^_^\n        digestAuthPassword: ^_^password^_^\n      # \u54cd\u5e94\u6570\u636e\u89e3\u6790\u65b9\u5f0f: default-\u7cfb\u7edf\u89c4\u5219,jsonPath-jsonPath\u811a\u672c,website-\u7f51\u7ad9\u53ef\u7528\u6027\u6307\u6807\u76d1\u63a7\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528jsonpath\u6765\u89e3\u6790\u54cd\u5e94\u6570\u636e\n      parseType: jsonPath\n      parseScript: '$.data.apps.*' \n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b0\u589e\u5b8c\u6bd5\uff0c\u73b0\u5728\u6211\u4eec\u91cd\u542fhertzbeat\u7cfb\u7edf\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7cfb\u7edf\u9875\u9762\u5df2\u7ecf\u591a\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"strong"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u4e86\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5102).Z,width:"3840",height:"1724"})),(0,r.kt)("h3",{id:"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9hertzbeat\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"},"\u7cfb\u7edf\u9875\u9762\u6dfb\u52a0\u5bf9",(0,r.kt)("inlineCode",{parentName:"h3"},"hertzbeat"),"\u76d1\u63a7\u7c7b\u578b\u7684\u76d1\u63a7"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u70b9\u51fb\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"HertzBeat\u76d1\u63a7\u7cfb\u7edf"),"\uff0c\u914d\u7f6e\u76d1\u63a7IP\uff0c\u7aef\u53e3\uff0c\u91c7\u96c6\u5468\u671f\uff0c\u9ad8\u7ea7\u8bbe\u7f6e\u91cc\u7684\u8d26\u6237\u5bc6\u7801\u7b49, \u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u76d1\u63a7\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4813).Z,width:"1921",height:"860"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8852).Z,width:"1922",height:"857"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fc7\u4e00\u5b9a\u65f6\u95f4(\u53d6\u51b3\u4e8e\u91c7\u96c6\u5468\u671f)\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u76d1\u63a7\u8be6\u60c5\u770b\u5230\u5177\u4f53\u7684\u6307\u6807\u6570\u636e\u548c\u5386\u53f2\u56fe\u8868\u5566\uff01")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2105).Z,width:"1922",height:"860"})),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"},"\u8bbe\u7f6e\u9608\u503c\u544a\u8b66\u901a\u77e5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u6b63\u5e38\u7684\u8bbe\u7f6e\u9608\u503c\uff0c\u544a\u8b66\u89e6\u53d1\u540e\u53ef\u4ee5\u5728\u544a\u8b66\u4e2d\u5fc3\u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u65b0\u589e\u63a5\u6536\u4eba\uff0c\u8bbe\u7f6e\u544a\u8b66\u901a\u77e5\u7b49\uff0cHave Fun!!!")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u5b8c"},"\u5b8c\uff01"),(0,r.kt)("p",null,"HTTP\u534f\u8bae\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7684\u5b9e\u8df5\u5c31\u5230\u8fd9\u91cc\uff0cHTTP\u534f\u8bae\u8fd8\u5e26\u5176\u4ed6\u53c2\u6570headers,params\u7b49\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u7528postman\u4e00\u6837\u53bb\u5b9a\u4e49\u5b83\uff0c\u53ef\u73a9\u6027\u4e5f\u975e\u5e38\u9ad8\uff01"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u89c9\u5f97heartbeat\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u4e0d\u9519\u7684\u8bdd\u6b22\u8fce\u7ed9\u6211\u4eec\u5728GitHub Gitee star\u54e6\uff0c\u7070\u5e38\u611f\u8c22\u3002\u611f\u8c22\u8001\u94c1\u4eec\u7684\u652f\u6301\u3002\u7b14\u82af\uff01"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"github: ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gitee: ",(0,r.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}m.isMDXComponent=!0},5102:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-1-2ef7a26379015bea268420811e822d18.png"},4813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-2-cbd473f82a666e7562d932d8eeaccc57.png"},8852:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-3-8cdb9ddf2d9e2e7b469eb4082c0f9f13.png"},2105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-4-5e7e7c30cdfbd310c653ede5ea72f622.png"}}]);