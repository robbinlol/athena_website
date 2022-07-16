"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[4512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={slug:"music/api",title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",authors:"jhr",tags:["python","Python\u52a0\u8f7d\u5668\u63d2\u4ef6"]},p=void 0,o={permalink:"/athena_website/en/blog/music/api",editUrl:"https://github.com/xfyun/athena_website/tree/master/blog/wrapper-third-api.md",source:"@site/blog/wrapper-third-api.md",title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",description:"\u80fd\u529b",date:"2022-07-16T01:16:13.000Z",formattedDate:"July 16, 2022",tags:[{label:"python",permalink:"/athena_website/en/blog/tags/python"},{label:"Python\u52a0\u8f7d\u5668\u63d2\u4ef6",permalink:"/athena_website/en/blog/tags/python\u52a0\u8f7d\u5668\u63d2\u4ef6"}],readingTime:5.855,hasTruncateMarker:!1,authors:[{name:"jhr",title:"Junior Engineer",url:"https://github.com/robbinlol",imageURL:"https://avatars.githubusercontent.com/u/10591513?v=4",key:"jhr"}],frontMatter:{slug:"music/api",title:"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6",authors:"jhr",tags:["python","Python\u52a0\u8f7d\u5668\u63d2\u4ef6"]},prevItem:{title:"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7",permalink:"/athena_website/en/blog/yolov7"},nextItem:{title:"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)",permalink:"/athena_website/en/blog/sealos4-athenaserving"}},l={authorsImageUrls:[void 0]},s=[{value:"\u80fd\u529b",id:"\u80fd\u529b",level:3},{value:"\u52a0\u8f7d\u5668\u63d2\u4ef6",id:"\u52a0\u8f7d\u5668\u63d2\u4ef6",level:3},{value:"\u5b9e\u73b0\u52a0\u8f7d\u5668\u63d2\u4ef6",id:"\u5b9e\u73b0\u52a0\u8f7d\u5668\u63d2\u4ef6",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u80fd\u529b"},"\u80fd\u529b"),(0,a.kt)("p",null,"AI\u80fd\u529b\u662f\u6307\u5df2\u5b8c\u6210\u4e91\u670d\u52a1\u5316\u7684AI\u5f15\u64ce\u3002\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u80fd\u529b\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7API\u548c\u751f\u6210\u7684\u63a5\u53e3\u6587\u6863\u8fdb\u884c\u96c6\u6210\u53ca\u8c03\u7528\u3002\u5177\u4f53\u5b9a\u4e49\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://www.iflyaicloud.com/aipaas-doc/docs/01-%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D/02-%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A.html"},"ASE\u5f15\u64ce\u540d\u8bcd\u89e3\u91ca")),(0,a.kt)("h3",{id:"\u52a0\u8f7d\u5668\u63d2\u4ef6"},"\u52a0\u8f7d\u5668\u63d2\u4ef6"),(0,a.kt)("p",null,"\u80fd\u529b\u662f\u901a\u8fc7\u52a0\u8f7d\u5668\u63d2\u4ef6\u6765\u8c03\u7528\u3002\u8c03\u7528\u7684\u80fd\u529b\u4e0d\u4ec5\u5305\u542bAI\u80fd\u529b\u7684\u4f7f\u7528\uff0c\u666e\u901a\u7f51\u7edc\u8bf7\u6c42\u7684\u8c03\u7528\u540c\u6837\u9002\u7528\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u975e\u6d41\u5f0f\u7684\u7f51\u7edc\u8bf7\u6c42\u2014\u2014HTTP\u8bf7\u6c42\u2014\u2014\u6765\u8bf4\uff0c\u63d2\u4ef6\u7684\u4e3b\u4f53\u5305\u62ec\u56db\u6b65\uff1b\u52a0\u8f7d\u5668\u7684\u521d\u59cb\u5316\uff1b\u52a0\u8f7d\u5668\u7684\u5b8c\u6210\uff1b\u52a0\u8f7d\u5668\u7684\u6267\u884c\uff1b\u52a0\u8f7d\u5668\u7684\u9519\u8bef\u5904\u7406\u3002\u5206\u522b\u5bf9\u5e94\u4e86\u56db\u4e2a\u6267\u884c\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperFini"),"\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperError"),"\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b9e\u73b0\u91c7\u7528\u4e86C++\u8bed\u8a00\uff0c\u5bf9\u4e8e\u719f\u8c19C++\u8bed\u8a00\u7684\u7528\u6237\u6765\u8bf4\u6beb\u65e0\u538b\u529b\uff0c\u5f53\u4e86\u89e3\u52a0\u8f7d\u5668\u63d2\u4ef6\u7684\u8fd0\u884c\u6d41\u7a0b\u3001\u6570\u636e\u8f93\u5165\u548c\u8f93\u51fa\u65b9\u5f0f\u540e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684\u52a0\u8f7d\u5668\u63d2\u4ef6\uff0c\u968f\u5373\u901a\u8fc7\u7f16\u8bd1\u6210",(0,a.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5e93\u6587\u4ef6"),"\u540e\u53ef\u8c03\u7528\u3002"),(0,a.kt)("p",null,"Python\u662f\u4e00\u79cd\u5f31\u7c7b\u578b\u8bed\u97f3\uff0c\u76f8\u6bd4\u4e8eC++\uff0cPython\u66f4\u5c0f\u5de7\u7cbe\u608d\uff0c\u7528\u6237\u4e5f\u80fd\u591f\u66f4\u5bb9\u6613\u4e0a\u624b\u6784\u5efa\u52a0\u8f7d\u5668\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u672c\u4f8b\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u8c03\u7528",(0,a.kt)("a",{parentName:"strong",href:"https://docs.acrcloud.cn/api-reference/identification-api"},"\u4e09\u65b9\u97f3\u4e50\u8bc6\u522bAPI"),"\u7684Python\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b9e\u73b0\u6b65\u9aa4\u3002\u8c03\u7528\u97f3\u4e50\u8bc6\u522bAPI\u65f6\u7528\u6237\u4f1a\u53d1\u9001\u5f85\u8bc6\u522b\u97f3\u4e50\u7684\u4e8c\u8fdb\u5236\u6d41\u6570\u636e\uff0c\u97f3\u4e50\u683c\u5f0f\u652f\u6301mp3\u3001wav\u3001wma\u3001amr\u3001ogg\u3001ape\u3001acc\u3001spx\u3001m4a\u3001mp4\u3001FLAC\u7b49\uff0c\u8fd4\u56de\u7684\u8bc6\u522b\u7ed3\u679c\u662fJSON\u5bf9\u8c61\u3002")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u52a0\u8f7d\u5668\u63d2\u4ef6"},"\u5b9e\u73b0\u52a0\u8f7d\u5668\u63d2\u4ef6"),(0,a.kt)("p",null,"\u52a0\u8f7d\u5668\u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperInit"),"\u7528\u4e8e\u521d\u59cb\u5316\u52a0\u8f7d\u5668\u6267\u884c\u8fc7\u7a0b\u4e2d\u7528\u5230\u7684\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53c2\u6570\u4ece\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u4e2d\u8bfb\u5165\uff0c\u5176\u4e2d",(0,a.kt)("strong",{parentName:"p"},"requrl"),"\u662f\u53d1\u9001\u8bf7\u6c42\u7684\u5730\u5740\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"global requrl, http_method, http_uri\nglobal access_key_music, access_secret_music, access_key_humming, access_secret_humming\n\nrequrl, http_method, http_uri = config['requrl'], config['http_method'], config['http_uri']\naccess_key_music, access_secret_music = config['access_key_music'], config['access_secret_music']\naccess_key_humming, access_secret_humming = config['access_key_humming'], config['access_secret_humming']\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u5668\u63d2\u4ef6\u6267\u884c\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperOnceExec"),"\u7684\u6267\u884c\u4e3b\u8981\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9274\u6743"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u53d1\u9001HTTP\u8bf7\u6c42"),"\u3002"),(0,a.kt)("p",null,"\u9274\u6743\u7684\u7b7e\u540d\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"http_method"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"http_uri"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"access_key"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data_type"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"signature_version"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"\u65f6\u95f4\u6233"),"\u7b49\u6765\u6784\u5efa\uff0c\u6784\u5efa\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"signature_version, data_type = '1', 'audio'\n\ntimestamp = time.time()\n\nstring_to_sign = http_method + '\\n' \\\n                + http_uri + '\\n' \\\n                + access_key + '\\n' \\\n                + data_type + '\\n' \\\n                + signature_version + '\\n' \\\n                + str(timestamp)\nsign = base64.b64encode(hmac.new(access_secret.encode('ascii'), string_to_sign.encode('ascii'),\n                                digestmod=hashlib.sha1).digest()).decode('ascii')\n\nif sign is None:\n    logging.error('HMAC failure.')\n    return 5014\n")),(0,a.kt)("p",null,"HTTP\u8bf7\u6c42\u4f53\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u62ec\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\u6570\u636e"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"access_key"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u7684\u957f\u5ea6"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u65f6\u95f4\u6233"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\u7b7e\u540d"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data_type"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"signature_version"),"\u7b49\u3002"),(0,a.kt)("p",null,"\u6784\u5efa\u7684HTTP\u8bf7\u6c42\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"files = {'sample': src}\ndata = {\n    'access_key': access_key,\n    'sample_bytes': sample_bytes,\n    'timestamp': str(timestamp),\n    'signature': sign,\n    'data_type': data_type,\n    'signature_version': signature_version\n}\nr = requests.post(requrl, files=files, data=data, timeout=5)\n")),(0,a.kt)("p",null,"\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9519\u8bef\u9700\u8981",(0,a.kt)("strong",{parentName:"p"},"\u5c3d\u53ef\u80fd\u65e9"),"\u6355\u83b7\uff0c\u9519\u8bef\u7801\u4e5f\u8981\u548c\u7b2c\u4e09\u65b9\u5e73\u53f0\u533a\u522b\u5f00\u6765\uff0c\u5373\u4f7f\u662f\u9ed8\u8ba4\u7684HTTP\u9519\u8bef\u7801\u4e5f\u8981\u6709\u8fa8\u522b\u4e5f\u597d\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"try:\n    r = requests.post(requrl, files=files, data=data, timeout=5)\nexcept requests.exceptions.ConnectTimeout:\n    logging.error('Http post timeout.')\n    return 4408# http timeout\n\nif r is None:\n    logging.error(\"HTTP\u5185\u5bb9\u975e\u6cd5\")\n    return 4003\nif r.status_code != 200:\n    return 4000 + r.status_code\n")),(0,a.kt)("p",null,"\u54cd\u5e94\u6570\u636e\u4e3aJSON\u683c\u5f0f\uff0c\u6709\u4e09\u4e2a\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"cost_time":...\n"status":...\n"metadata":...\n}\n')),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\u5b57\u6bb5\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"\u4ee3\u8868\u4e86\u54cd\u5e94\u7684\u72b6\u6001\uff0c\u4e3a0\u8868\u793a\u8bf7\u6c42\u6210\u529f\uff0c\u5426\u5219\u5931\u8d25\u3002\u6240\u4ee5\u5e94\u8be5\u5224\u65ad",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"\u7684\u53d6\u503c\uff0c\u5f53\u4e0d\u4e3a\u96f6\u65f6\u5219\u63d0\u524d\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"code"),"\u8868\u793a\u7684\u9519\u8bef\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pattern = re.compile('\"code\":\\d+')\nerror_code = re.findall(pattern, r.text)\nerror_code = error_code[0].split(':')[-1]\nif int(error_code):\n    return int(error_code)\n")),(0,a.kt)("p",null,"\u54cd\u5e94\u6210\u529f\u5219\u8fd4\u56de\u4e00\u4e2a\u9884\u5148\u5b9a\u4e49\u597d\u7684\u5b57\u5178\u8868\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"r.encoding = 'utf-8'\n\nrespData.append({\n    'key': 'output_text',\n    'type': 0,\n    'status': 3,\n    \"data\": r.text,\n    \"len\": len(r.text.encode())\n})\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u5668\u63d2\u4ef6\u9519\u8bef\u5904\u7406\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperError"),"\u5c06\u4f1a\u8fd4\u56de\u9519\u8bef\u7801\u4ee3\u8868\u7684\u542b\u4e49\uff0c\u5728\u672c\u4f8b\u4e2d\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if ret == 1001:\n    return "\u8bc6\u522b\u65e0\u7ed3\u679c"\nelif ret == 2000:\n    return "\u5f55\u97f3\u5931\u8d25\uff0c\u53ef\u80fd\u662f\u8bbe\u5907\u6743\u9650\u95ee\u9898"\nelif ret == 2001:\n    return "\u521d\u59cb\u5316\u9519\u8bef\u6216\u8005\u521d\u59cb\u5316\u8d85\u65f6"\nelif ret == 2002:\n    return "\u5904\u7406metadata\u9519\u8bef"\nelif ret == 2004:\n    return "\u65e0\u6cd5\u751f\u6210\u6307\u7eb9\uff08\u6709\u53ef\u80fd\u662f\u9759\u97f3\uff09"\nelif ret == 2005:\n    return "\u8d85\u65f6"\nelif ret == 3000:\n    return "\u670d\u52a1\u7aef\u9519\u8bef"\nelif ret == 3001:\n    return "Access Key\u4e0d\u5b58\u5728\u6216\u9519\u8bef"\nelif ret == 3002:\n    return "HTTP\u5185\u5bb9\u975e\u6cd5"\nelif ret == 3003:\n    return "\u8bf7\u6c42\u6570\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09"\nelif ret == 3006:\n    return "\u53c2\u6570\u975e\u6cd5"\nelif ret == 3014:\n    return "\u7b7e\u540d\u975e\u6cd5"\nelif ret == 3015:\n    return "QPS\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09"\nelse:\n    return f"User Defined Error: {ret}"\n')),(0,a.kt)("p",null,"\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b8c\u6210\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperFini"),"\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u52a0\u8f7d\u5668\u7684\u6536\u5c3e\u5de5\u4f5c\uff0c\u5728C++\u8bed\u8a00\u4e2d\u91cc\u9762\u4f1a\u6267\u884c\u4e00\u4e9b\u5806\u533a\u548c\u6307\u9488\u7684\u91ca\u653e\uff0c\u5bf9\u4e8ePython\u8bed\u8a00\uff0c\u901a\u5e38\u4e0d\u9700\u8981\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def wrapperFini() -> int:\n    logging.info('Wrapper finished.')\n    return 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5\u4e0a\u5c31\u662f\u4e00\u4e2a\u8c03\u7528\u4e09\u65b9API\u7684Python\u52a0\u8f7d\u5668\u5b9e\u73b0\u7684\u7b80\u5355\u4ecb\u7ecd")),(0,a.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xfyun/aiges/tree/master/demo"},"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6")))}u.isMDXComponent=!0}}]);