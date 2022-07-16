"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[2335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,b=m["".concat(i,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={slug:"sealos4-athenaserving",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",authors:["ybyang7"],tags:["sealos","ai","sealos4","athenaserving"]},s="\u524d\u7f6e\u6761\u4ef6",o={permalink:"/athena_website/en/blog/sealos4-athenaserving",editUrl:"https://github.com/xfyun/athena_website/tree/master/blog/2022-07-15-sealos4.md",source:"@site/blog/2022-07-15-sealos4.md",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",description:"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[{label:"sealos",permalink:"/athena_website/en/blog/tags/sealos"},{label:"ai",permalink:"/athena_website/en/blog/tags/ai"},{label:"sealos4",permalink:"/athena_website/en/blog/tags/sealos-4"},{label:"athenaserving",permalink:"/athena_website/en/blog/tags/athenaserving"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"ybyang7",title:"Opensource AI Engineer",url:"https://github.com/berlinsaint",imageURL:"https://avatars.githubusercontent.com/u/10629930?v=4",key:"ybyang7"}],frontMatter:{slug:"sealos4-athenaserving",title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",authors:["ybyang7"],tags:["sealos","ai","sealos4","athenaserving"]},prevItem:{title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",permalink:"/athena_website/en/blog/music/api"},nextItem:{title:"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)",permalink:"/athena_website/en/blog/aws-sealos-3"}},i={authorsImageUrls:[void 0]},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5sealos.4.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"}," wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos &&  chmod +x sealos && mv sealos /usr/bin")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u96c6\u7fa4")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/kubernetes:v1.19.16 labring/calico:v3.22.1   --masters 192.168.64.2 -p <password>"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(4144).Z,width:"1497",height:"271"}),"\n",(0,r.kt)("img",{alt:"img2",src:a(8738).Z,width:"1542",height:"625"}),"\n",(0,r.kt)("img",{alt:"img2",src:a(8281).Z,width:"1064",height:"469"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/helm:v3.8.2 # install helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/openebs:v1.9.0 # install openebs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/athena_serving:v2.0.0rc1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sealos run labring/demo_mmocr:v3.1"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528AI demo\u80fd\u529b MMOCR\u80fd\u529b")))}u.isMDXComponent=!0},8738:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sealos4-run-k8s-2-97ee55405c9372fe1c382b7fb8f4f002.png"},8281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sealos4-run-k8s-3-844e7986a2f4a037d2a3a9da07e29ba1.png"},4144:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sealos4-run-k8s-3c401909adde6b30aa8953c31bfd3291.png"}}]);