import{v as D,$ as u,ao as F,a2 as T,ap as x,u as A}from"./BYH92m9P.js";import{u as L}from"./DDMv6X7i.js";function O(a,o,i){const[e={},r]=typeof o=="string"?[{},o]:[o,i],t=D(()=>u(a)),n=e.key||F([r,typeof t.value=="string"?t.value:"",...R(e)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const c=n===r?"$f"+n:n;if(!e.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:d,lazy:y,default:b,transform:g,pick:w,watch:h,immediate:v,getCachedData:$,deep:_,dedupe:k,...q}=e,p=T({...x,...q,cache:typeof e.cache=="boolean"?void 0:e.cache}),C={server:d,lazy:y,default:b,transform:g,pick:w,immediate:v,getCachedData:$,deep:_,dedupe:k,watch:h===!1?[]:[p,t,...h||[]]};let s;return L(c,()=>{var m;(m=s==null?void 0:s.abort)==null||m.call(s,"Request aborted as another request to the same endpoint was initiated."),s=typeof AbortController<"u"?new AbortController:{};const l=u(e.timeout);let f;return l&&(f=setTimeout(()=>s.abort("Request aborted due to timeout."),l),s.signal.onabort=()=>clearTimeout(f)),(e.$fetch||globalThis.$fetch)(t.value,{signal:s.signal,...p}).finally(()=>{clearTimeout(f)})},C)}function R(a){var i;const o=[((i=u(a.method))==null?void 0:i.toUpperCase())||"GET",u(a.baseURL)];for(const e of[a.params||a.query]){const r=u(e);if(!r)continue;const t={};for(const[n,c]of Object.entries(r))t[u(n)]=u(c);o.push(t)}return o}const G=(a,o={})=>O(a,{...o,$fetch:A().$api},"$sC22i8rhLA");export{G as u};
