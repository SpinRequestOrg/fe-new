import{f as T,b9 as m,r as O,a3 as B,an as F,ba as M,aR as j,l as q,a$ as $,bb as L,n as S,aE as U,a_ as V,j as x,aA as h,bc as z,aB as H,bd as K}from"./CS4avWYd.js";const I=t=>t==="defer"||t===!1;function N(...t){var w;const r=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(r);let[s,i,a={}]=t;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=T(),l=i,D=()=>m.value,C=()=>e.isHydrating?e.payload.data[s]:e.static.data[s];a.server=a.server??!0,a.default=a.default??D,a.getCachedData=a.getCachedData??C,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??m.deep,a.dedupe=a.dedupe??"cancel";const y=a.getCachedData(s,e),_=y!=null;if(!e._asyncData[s]||!a.immediate){(w=e.payload._errors)[s]??(w[s]=m.errorValue);const c=a.deep?O:B;e._asyncData[s]={data:c(_?y:a.default()),pending:O(!_),error:F(e.payload._errors,s),status:O("idle"),_default:a.default}}const n={...e._asyncData[s]};delete n._default,n.refresh=n.execute=(c={})=>{if(e._asyncDataPromises[s]){if(I(c.dedupe??a.dedupe))return e._asyncDataPromises[s];e._asyncDataPromises[s].cancelled=!0}if(c._initial||e.isHydrating&&c._initial!==!1){const u=c._initial?y:a.getCachedData(s,e);if(u!=null)return Promise.resolve(u)}n.pending.value=!0,n.status.value="pending";const f=new Promise((u,o)=>{try{u(l(e))}catch(p){o(p)}}).then(async u=>{if(f.cancelled)return e._asyncDataPromises[s];let o=u;a.transform&&(o=await a.transform(u)),a.pick&&(o=J(o,a.pick)),e.payload.data[s]=o,n.data.value=o,n.error.value=m.errorValue,n.status.value="success"}).catch(u=>{if(f.cancelled)return e._asyncDataPromises[s];n.error.value=L(u),n.data.value=S(a.default()),n.status.value="error"}).finally(()=>{f.cancelled||(n.pending.value=!1,delete e._asyncDataPromises[s])});return e._asyncDataPromises[s]=f,e._asyncDataPromises[s]},n.clear=()=>G(e,s);const v=()=>n.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const c=U();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;M(()=>{o.forEach(p=>{p()}),o.splice(0,o.length)}),j(()=>o.splice(0,o.length))}g&&e.isHydrating&&(n.error.value||y!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(v):a.immediate&&v();const f=V();if(a.watch){const o=q(a.watch,()=>n.refresh());f&&$(o)}const u=e.hook("app:data:refresh",async o=>{(!o||o.includes(s))&&await n.refresh()});f&&$(u)}const b=Promise.resolve(e._asyncDataPromises[s]).then(()=>n);return Object.assign(b,n),b}function G(t,r){r in t.payload.data&&(t.payload.data[r]=void 0),r in t.payload._errors&&(t.payload._errors[r]=m.errorValue),t._asyncData[r]&&(t._asyncData[r].data.value=void 0,t._asyncData[r].error.value=m.errorValue,t._asyncData[r].pending.value=!1,t._asyncData[r].status.value="idle"),r in t._asyncDataPromises&&(t._asyncDataPromises[r]&&(t._asyncDataPromises[r].cancelled=!0),t._asyncDataPromises[r]=void 0)}function J(t,r){const s={};for(const i of r)s[i]=t[i];return s}function Q(t,r,s){const[i={},a]=typeof r=="string"?[{},r]:[r,s],e=x(()=>h(t)),l=i.key||z([a,typeof e.value=="string"?e.value:"",...W(i)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const D=l===a?"$f"+l:l;if(!i.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:C,lazy:y,default:_,transform:n,pick:v,watch:g,immediate:b,getCachedData:w,deep:c,dedupe:f,...u}=i,o=H({...K,...u,cache:typeof i.cache=="boolean"?void 0:i.cache}),p={server:C,lazy:y,default:_,transform:n,pick:v,immediate:b,getCachedData:w,deep:c,dedupe:f,watch:g===!1?[]:[o,e,...g||[]]};let d;return N(D,()=>{var R;(R=d==null?void 0:d.abort)==null||R.call(d,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),d=typeof AbortController<"u"?new AbortController:{};const E=h(i.timeout);let P;return E&&(P=setTimeout(()=>d.abort(new DOMException("Request aborted due to timeout.","AbortError")),E),d.signal.onabort=()=>clearTimeout(P)),(i.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,...o}).finally(()=>{clearTimeout(P)})},p)}function W(t){var s;const r=[((s=h(t.method))==null?void 0:s.toUpperCase())||"GET",h(t.baseURL)];for(const i of[t.params||t.query]){const a=h(i);if(!a)continue;const e={};for(const[l,D]of Object.entries(a))e[h(l)]=h(D);r.push(e)}return r}const k=(t,r={})=>Q(t,{...r,$fetch:T().$api},"$sC22i8rhLA");export{N as a,k as u};
