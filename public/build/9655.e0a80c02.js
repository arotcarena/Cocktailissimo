/*! For license information please see 9655.e0a80c02.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9655],{12599:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var a;r.d(t,{Ep:()=>h,J0:()=>l,RQ:()=>B,WK:()=>$,Zn:()=>L,Zq:()=>j,aU:()=>a,cP:()=>p,fp:()=>m,lX:()=>i,pC:()=>W}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e){return void 0===e&&(e={}),d((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return u("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:h(t)}),null,e)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,r,a){return void 0===r&&(r=null),n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:r,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function d(e,t,r,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,d=s.history,f=a.Pop,m=null,v=g();function g(){return(d.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:C.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:h(e);return l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==v&&(v=0,d.replaceState(n({},d.state,{idx:v}),""));let C={get action(){return f},get location(){return e(s,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),m=e,()=>{s.removeEventListener(o,y),m=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let n=u(C.location,e,t);r&&r(n,e),v=g()+1;let o=c(n,v),i=C.createHref(n);try{d.pushState(o,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(i)}p&&m&&m({action:f,location:C.location,delta:1})},replace:function(e,t){f=a.Replace;let n=u(C.location,e,t);r&&r(n,e),v=g();let o=c(n,v),i=C.createHref(n);d.replaceState(o,"",i),p&&m&&m({action:f,location:C.location,delta:0})},go:e=>d.go(e)};return C}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,r){void 0===r&&(r="/");let n=L(("string"==typeof t?p(t):t).pathname||"/",r);if(null==n)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=P(a[e],O(n));return o}function v(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let s=B([n,i.relativePath]),c=r.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of g(e.path))a(e,t,r);else a(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===n.length)return a?[o,""]:[o];let i=g(n.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:\w+$/,b=3,C=2,w=1,E=10,R=-2,x=e=>"*"===e;function S(e,t){let r=e.split("/"),n=r.length;return r.some(x)&&(n+=R),t&&(n+=C),r.filter((e=>!x(e))).reduce(((e,t)=>e+(y.test(t)?b:""===t?w:E)),n)}function P(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let e=0;e<r.length;++e){let i=r[e],l=e===r.length-1,s="/"===a?t:t.slice(a.length)||"/",c=U({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!c)return null;Object.assign(n,c.params);let u=i.route;o.push({params:n,pathname:B([a,c.pathname]),pathnameBase:J(B([a,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(a=B([a,c.pathnameBase]))}return o}function U(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=l[r]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(l[r]||"",t),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function O(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function k(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function j(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function W(e,t,r,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=p(e):(o=n({},e),l(!o.pathname||!o.pathname.includes("?"),k("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),k("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),k("#","search","hash",o)));let i,s=""===e||""===o.pathname,c=s?"/":o.pathname;if(a||null==c)i=r;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:a=""}="string"==typeof e?p(e):e,o=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:o,search:A(n),hash:D(a)}}(o,i),h=c&&"/"!==c&&c.endsWith("/"),d=(s||"."===c)&&r.endsWith("/");return u.pathname.endsWith("/")||!h&&!d||(u.pathname+="/"),u}const B=e=>e.join("/").replace(/\/\/+/g,"/"),J=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class N extends Error{}function $(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const T=["post","put","patch","delete"],_=(new Set(T),["get",...T]);new Set(_),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},79655:(e,t,r)=>{r.d(t,{OL:()=>f,VK:()=>u});var n=r(67294),a=r(89250),o=r(12599);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}const s=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c=["aria-current","caseSensitive","className","end","style","to","children"];function u(e){let{basename:t,children:r,future:i,window:l}=e,s=n.useRef();null==s.current&&(s.current=(0,o.lX)({window:l,v5Compat:!0}));let c=s.current,[u,h]=n.useState({action:c.action,location:c.location}),{v7_startTransition:p}=i||{},d=n.useCallback((e=>{p&&a.XS?(0,a.XS)((()=>h(e))):h(e)}),[h,p]);return n.useLayoutEffect((()=>c.listen(d)),[c,d]),n.createElement(a.F0,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:c})}const h="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d=n.forwardRef((function(e,t){let r,{onClick:c,relative:u,reloadDocument:d,replace:f,state:m,target:v,to:g,preventScrollReset:y}=e,b=l(e,s),{basename:C}=n.useContext(a.Us),w=!1;if("string"==typeof g&&p.test(g)&&(r=g,h))try{let e=new URL(window.location.href),t=g.startsWith("//")?new URL(e.protocol+g):new URL(g),r=(0,o.Zn)(t.pathname,C);t.origin===e.origin&&null!=r?g=r+t.search+t.hash:w=!0}catch(e){}let E=(0,a.oQ)(g,{relative:u}),R=function(e,t){let{target:r,replace:i,state:l,preventScrollReset:s,relative:c}=void 0===t?{}:t,u=(0,a.s0)(),h=(0,a.TH)(),p=(0,a.WU)(e,{relative:c});return n.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==i?i:(0,o.Ep)(h)===(0,o.Ep)(p);u(e,{replace:r,state:l,preventScrollReset:s,relative:c})}}),[h,u,p,i,l,r,e,s,c])}(g,{replace:f,state:m,target:v,preventScrollReset:y,relative:u});return n.createElement("a",i({},b,{href:r||E,onClick:w||d?c:function(e){c&&c(e),e.defaultPrevented||R(e)},ref:t,target:v}))}));const f=n.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:o=!1,className:s="",end:u=!1,style:h,to:p,children:f}=e,m=l(e,c),v=(0,a.WU)(p,{relative:m.relative}),g=(0,a.TH)(),y=n.useContext(a.FR),{navigator:b}=n.useContext(a.Us),C=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,w=g.pathname,E=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(w=w.toLowerCase(),E=E?E.toLowerCase():null,C=C.toLowerCase());let R,x=w===C||!u&&w.startsWith(C)&&"/"===w.charAt(C.length),S=null!=E&&(E===C||!u&&E.startsWith(C)&&"/"===E.charAt(C.length)),P=x?r:void 0;R="function"==typeof s?s({isActive:x,isPending:S}):[s,x?"active":null,S?"pending":null].filter(Boolean).join(" ");let U="function"==typeof h?h({isActive:x,isPending:S}):h;return n.createElement(d,i({},m,{"aria-current":P,className:R,ref:t,style:U,to:p}),"function"==typeof f?f({isActive:x,isPending:S}):f)}));var m,v;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(m||(m={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(v||(v={}))},89250:(e,t,r)=>{var n;r.d(t,{AW:()=>W,F0:()=>B,FR:()=>c,Fg:()=>j,TH:()=>v,Us:()=>u,WU:()=>b,XS:()=>l,Z5:()=>J,oQ:()=>f,s0:()=>y});var a=r(67294),o=r(12599);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var l=(n||(n=r.t(a,2))).startTransition;const s=a.createContext(null);const c=a.createContext(null);const u=a.createContext(null);const h=a.createContext(null);const p=a.createContext({outlet:null,matches:[],isDataRoute:!1});const d=a.createContext(null);function f(e,t){let{relative:r}=void 0===t?{}:t;m()||(0,o.J0)(!1);let{basename:n,navigator:i}=a.useContext(u),{hash:l,pathname:s,search:c}=b(e,{relative:r}),h=s;return"/"!==n&&(h="/"===s?n:(0,o.RQ)([n,s])),i.createHref({pathname:h,search:c,hash:l})}function m(){return null!=a.useContext(h)}function v(){return m()||(0,o.J0)(!1),a.useContext(h).location}function g(e){a.useContext(u).static||a.useLayoutEffect(e)}function y(){let{isDataRoute:e}=a.useContext(p);return e?function(){let{router:e}=O(P.UseNavigateStable),t=k(U.UseNavigateStable),r=a.useRef(!1);return g((()=>{r.current=!0})),a.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,i({fromRouteId:t},a)))}),[e,t])}():function(){m()||(0,o.J0)(!1);let e=a.useContext(s),{basename:t,navigator:r}=a.useContext(u),{matches:n}=a.useContext(p),{pathname:i}=v(),l=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase))),c=a.useRef(!1);return g((()=>{c.current=!0})),a.useCallback((function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n)return void r.go(n);let s=(0,o.pC)(n,JSON.parse(l),i,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:(0,o.RQ)([t,s.pathname])),(a.replace?r.replace:r.push)(s,a.state,a)}),[t,r,l,i,e])}()}function b(e,t){let{relative:r}=void 0===t?{}:t,{matches:n}=a.useContext(p),{pathname:i}=v(),l=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase)));return a.useMemo((()=>(0,o.pC)(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function C(e,t,r){m()||(0,o.J0)(!1);let{navigator:n}=a.useContext(u),{matches:l}=a.useContext(p),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,g=v();if(t){var y;let e="string"==typeof t?(0,o.cP)(t):t;"/"===d||(null==(y=e.pathname)?void 0:y.startsWith(d))||(0,o.J0)(!1),f=e}else f=g;let b=f.pathname||"/",C="/"===d?b:b.slice(d.length)||"/",w=(0,o.fp)(e,{pathname:C});let E=S(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:(0,o.RQ)([d,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:(0,o.RQ)([d,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r);return t&&E?a.createElement(h.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:o.aU.Pop}},E):E}function w(){let e=function(){var e;let t=a.useContext(d),r=L(U.UseRouteError),n=k(U.UseRouteError);if(t)return t;return null==(e=r.errors)?void 0:e[n]}(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:i},r):null,null)}const E=a.createElement(w,null);class R extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(p.Provider,{value:this.props.routeContext},a.createElement(d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(s);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(p.Provider,{value:t},n)}function S(e,t,r){var n;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){var i;if(null==(i=r)||!i.errors)return null;e=r.matches}let l=e,s=null==(n=r)?void 0:n.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||(0,o.J0)(!1),l=l.slice(0,Math.min(l.length,e+1))}return l.reduceRight(((e,n,o)=>{let i=n.route.id?null==s?void 0:s[n.route.id]:null,c=null;r&&(c=n.route.errorElement||E);let u=t.concat(l.slice(0,o+1)),h=()=>{let t;return t=i?c:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(x,{match:n,routeContext:{outlet:e,matches:u,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(R,{location:r.location,revalidation:r.revalidation,component:c,error:i,children:h(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):h()}),null)}var P,U;function O(e){let t=a.useContext(s);return t||(0,o.J0)(!1),t}function L(e){let t=a.useContext(c);return t||(0,o.J0)(!1),t}function k(e){let t=function(e){let t=a.useContext(p);return t||(0,o.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.J0)(!1),r.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(P||(P={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(U||(U={}));function j(e){let{to:t,replace:r,state:n,relative:i}=e;m()||(0,o.J0)(!1);let{matches:l}=a.useContext(p),{pathname:s}=v(),c=y(),u=(0,o.pC)(t,(0,o.Zq)(l).map((e=>e.pathnameBase)),s,"path"===i),h=JSON.stringify(u);return a.useEffect((()=>c(JSON.parse(h),{replace:r,state:n,relative:i})),[c,h,i,r,n]),null}function W(e){(0,o.J0)(!1)}function B(e){let{basename:t="/",children:r=null,location:n,navigationType:i=o.aU.Pop,navigator:l,static:s=!1}=e;m()&&(0,o.J0)(!1);let c=t.replace(/^\/*/,"/"),p=a.useMemo((()=>({basename:c,navigator:l,static:s})),[c,l,s]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:d="/",search:f="",hash:v="",state:g=null,key:y="default"}=n,b=a.useMemo((()=>{let e=(0,o.Zn)(d,c);return null==e?null:{location:{pathname:e,search:f,hash:v,state:g,key:y},navigationType:i}}),[c,d,f,v,g,y,i]);return null==b?null:a.createElement(u.Provider,{value:p},a.createElement(h.Provider,{children:r,value:b}))}function J(e){let{children:t,location:r}=e;return C(N(t),r)}var A;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(A||(A={}));new Promise((()=>{}));class D extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,a=A.pending;if(r instanceof Promise)if(this.state.error){A.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(r,void 0!==n._error?A.error:void 0!==n._data?A.success:A.pending):(A.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else A.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(a===A.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(a===A.error&&!t)throw n._error;if(a===A.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(a===A.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}function N(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let i=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,N(e.props.children,i));e.type!==W&&(0,o.J0)(!1),e.props.index&&e.props.children&&(0,o.J0)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=N(e.props.children,i)),r.push(l)})),r}}}]);