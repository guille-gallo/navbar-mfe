/*! For license information please see guille-navbar.js.LICENSE.txt */
System.register(["react","react-dom","single-spa-react"],(function(e,t){var n={},r={},a={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){a.default=e.default}],execute:function(){e((()=>{"use strict";var e={383:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,".sidebar-container{display:flex;align-items:flex-start}.sidebar{width:250px;height:100vh;background-color:#333;color:#fff;transition:transform .3s ease-in-out;padding:15px}.sidebar.closed{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}.sidebar ul{list-style-type:none;padding:0}.sidebar ul li{margin:15px 0;cursor:pointer}.toggle-icon{font-size:30px;cursor:pointer;padding:15px;background-color:#333;color:#fff}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},228:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){i=t(o);for(var u=0;u<i.length;u++)r.call(o,i[u])&&(s[i[u]]=o[i[u]])}}return s}},20:(e,t,n)=>{n(228);var r=n(726),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:i.current}}t.jsx=c,t.jsxs=c},848:(e,t,n)=>{e.exports=n(20)},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=o[c]||0,f="".concat(c," ").concat(u);o[c]=u+1;var p=n(f),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var d=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=r(e,a),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},726:e=>{e.exports=n},867:e=>{e.exports=r},238:e=>{e.exports=a}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var i={};o.r(i),o.d(i,{bootstrap:()=>ve,mount:()=>me,unmount:()=>ye});var s,l,c=o(726),u=o(867),f=o(238),p=o(848);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}(l=s||(s={})).Pop="POP",l.Push="PUSH",l.Replace="REPLACE";const d="popstate";function v(e,t){if(!1===e||null==e)throw new Error(t)}function m(e,t){return{usr:e.state,key:e.key,idx:t}}function y(e,t,n,r){return void 0===n&&(n=null),h({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?b(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var w;function x(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function j(e,t,n,r){let a;void 0===r&&(r=!1),"string"==typeof e?a=b(e):(a=h({},e),v(!a.pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let o,i=""===e||""===a.pathname,s=i?"/":a.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?b(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:R(r),hash:k(a)}}(a,o),c=s&&"/"!==s&&s.endsWith("/"),u=(i||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(w||(w={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const C=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",k=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const P=["post","put","patch","delete"],_=(new Set(P),["get",...P]);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}new Set(_),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred");const U=c.createContext(null),N=c.createContext(null),T=c.createContext(null),L=c.createContext({outlet:null,matches:[],isDataRoute:!1});function M(){return null!=c.useContext(T)}function A(){return M()||v(!1),c.useContext(T).location}function D(e){c.useContext(N).static||c.useLayoutEffect(e)}function F(){let{isDataRoute:e}=c.useContext(L);return e?function(){let{router:e}=function(){let e=c.useContext(U);return e||v(!1),e}(W.UseNavigateStable),t=function(){let e=function(){let e=c.useContext(L);return e||v(!1),e}(),t=e.matches[e.matches.length-1];return t.route.id||v(!1),t.route.id}(B.UseNavigateStable),n=c.useRef(!1);D((()=>{n.current=!0}));let r=c.useCallback((function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,E({fromRouteId:t},a)))}),[e,t]);return r}():function(){M()||v(!1);let e=c.useContext(U),{basename:t,future:n,navigator:r}=c.useContext(N),{matches:a}=c.useContext(L),{pathname:o}=A(),i=JSON.stringify(O(a,n.v7_relativeSplatPath)),s=c.useRef(!1);D((()=>{s.current=!0}));let l=c.useCallback((function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n)return void r.go(n);let l=j(n,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:C([t,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)}),[t,r,i,o,e]);return l}()}function I(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=c.useContext(N),{matches:a}=c.useContext(L),{pathname:o}=A(),i=JSON.stringify(O(a,r.v7_relativeSplatPath));return c.useMemo((()=>j(e,JSON.parse(i),o,"path"===n)),[e,i,o,n])}c.Component;var W=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(W||{}),B=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(B||{});function H(e){let{basename:t="/",children:n=null,location:r,navigationType:a=s.Pop,navigator:o,static:i=!1,future:l}=e;M()&&v(!1);let u=t.replace(/^\/*/,"/"),f=c.useMemo((()=>({basename:u,navigator:o,static:i,future:E({v7_relativeSplatPath:!1},l)})),[u,l,o,i]);"string"==typeof r&&(r=b(r));let{pathname:p="/",search:h="",hash:d="",state:m=null,key:y="default"}=r,g=c.useMemo((()=>{let e=x(p,u);return null==e?null:{location:{pathname:e,search:h,hash:d,state:m,key:y},navigationType:a}}),[u,p,h,d,m,y,a]);return null==g?null:c.createElement(N.Provider,{value:f},c.createElement(T.Provider,{children:n,value:g}))}function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}c.startTransition,new Promise((()=>{})),c.Component,new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const $=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}new Map;const z=c.startTransition;function K(e){let{basename:t,children:n,future:r,window:a}=e,o=c.useRef();null==o.current&&(o.current=function(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=s.Pop,c=null,u=f();function f(){return(i.state||{idx:null}).idx}function p(){l=s.Pop;let e=f(),t=null==e?null:e-u;u=e,c&&c({action:l,location:w.location,delta:t})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:g(e);return n=n.replace(/ $/,"%20"),v(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,i.replaceState(h({},i.state,{idx:u}),""));let w={get action(){return l},get location(){return e(a,i)},listen(e){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(d,p),c=e,()=>{a.removeEventListener(d,p),c=null}},createHref:e=>t(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=s.Push;let r=y(w.location,e,t);n&&n(r,e),u=f()+1;let p=m(r,u),h=w.createHref(r);try{i.pushState(p,"",h)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;a.location.assign(h)}o&&c&&c({action:l,location:w.location,delta:1})},replace:function(e,t){l=s.Replace;let r=y(w.location,e,t);n&&n(r,e),u=f();let a=m(r,u),p=w.createHref(r);i.replaceState(a,"",p),o&&c&&c({action:l,location:w.location,delta:0})},go:e=>i.go(e)};return w}((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return y("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:g(t)}),null,e)}({window:a,v5Compat:!0}));let i=o.current,[l,u]=c.useState({action:i.action,location:i.location}),{v7_startTransition:f}=r||{},p=c.useCallback((e=>{f&&z?z((()=>u(e))):u(e)}),[u,f]);return c.useLayoutEffect((()=>i.listen(p)),[i,p]),c.createElement(H,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}u.flushSync,c.useId;const V="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=c.forwardRef((function(e,t){let n,{onClick:r,relative:a,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:p}=e,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,$),{basename:d}=c.useContext(N),m=!1;if("string"==typeof u&&q.test(u)&&(n=u,V))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=x(t.pathname,d);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:m=!0}catch(e){}let y=function(e,t){let{relative:n}=void 0===t?{}:t;M()||v(!1);let{basename:r,navigator:a}=c.useContext(N),{hash:o,pathname:i,search:s}=I(e,{relative:n}),l=i;return"/"!==r&&(l="/"===i?r:C([r,i])),a.createHref({pathname:l,search:s,hash:o})}(u,{relative:a}),b=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:s}=void 0===t?{}:t,l=F(),u=A(),f=I(e,{relative:i});return c.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:g(u)===g(f);l(e,{replace:n,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:s})}}),[u,l,f,r,a,n,e,o,i,s])}(u,{replace:i,state:s,target:l,preventScrollReset:f,relative:a,unstable_viewTransition:p});return c.createElement("a",J({},h,{href:n||y,onClick:m||o?r:function(e){r&&r(e),e.defaultPrevented||b(e)},ref:t,target:l}))}));var Y,G;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Y||(Y={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(G||(G={}));var Q=o(72),Z=o.n(Q),ee=o(825),te=o.n(ee),ne=o(659),re=o.n(ne),ae=o(56),oe=o.n(ae),ie=o(540),se=o.n(ie),le=o(113),ce=o.n(le),ue=o(383),fe={};fe.styleTagTransform=ce(),fe.setAttributes=oe(),fe.insert=re().bind(null,"head"),fe.domAPI=te(),fe.insertStyleElement=se(),Z()(ue.A,fe),ue.A&&ue.A.locals&&ue.A.locals;var pe=function(){return pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},pe.apply(this,arguments)};const he=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",pe({className:"sidebar ".concat(t?"open":"closed")},{children:[(0,p.jsxs)("button",pe({className:"toggle-button",onClick:function(){n(!t)}},{children:[" $",t?"❌":"☰"]})),(0,p.jsxs)("ul",pe({className:"sidebar-nav"},{children:[(0,p.jsx)("li",{children:(0,p.jsx)(X,pe({to:"/",className:"link"},{children:"Homy"}))}),(0,p.jsx)("li",{children:(0,p.jsx)(X,pe({to:"root-mfe/hacker-news",className:"link"},{children:"News Reader"}))}),(0,p.jsx)("li",{children:(0,p.jsx)(X,pe({to:"root-mfe/books-store",className:"link"},{children:"Books Store"}))})]}))]}))})};var de=(0,f.default)({React:c.default,ReactDOM:u.default,rootComponent:function(){return(0,p.jsx)(K,{children:(0,p.jsx)(he,{})})},errorBoundary:function(e,t,n){return null}}),ve=de.bootstrap,me=de.mount,ye=de.unmount;return i})())}}}));