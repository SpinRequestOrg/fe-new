import{f as b,aJ as d,r as D,am as O,a9 as B,aK as M,aL as E,l as H,aE as p,aM as R,m as S,al as V,aD as z}from"./bU2t7sMy.js";const K=s=>s==="defer"||s===!1;function F(...s){var v;const i=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(i);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=b(),g=u,P=()=>d.value,C=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??P,a.getCachedData=a.getCachedData??C,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,e),h=f!=null;if(!e._asyncData[t]||!a.immediate){(v=e.payload._errors)[t]??(v[t]=d.errorValue);const o=a.deep?D:O;e._asyncData[t]={data:o(h?f:a.default()),pending:D(!h),error:B(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(K(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial||e.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,e);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,n)=>{try{c(g(e))}catch(y){n(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let n=c;a.transform&&(n=await a.transform(c)),a.pick&&(n=N(n,a.pick)),e.payload.data[t]=n,r.data.value=n,r.error.value=d.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=R(c),r.data.value=S(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>j(e,t);const m=()=>r.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const o=V();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const n=o._nuxtOnBeforeMountCbs;M(()=>{n.forEach(y=>{y()}),n.splice(0,n.length)}),E(()=>n.splice(0,n.length))}w&&e.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(m):a.immediate&&m();const l=z();if(a.watch){const n=H(a.watch,()=>r.refresh());l&&p(n)}const c=e.hook("app:data:refresh",async n=>{(!n||n.includes(t))&&await r.refresh()});l&&p(c)}const _=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(_,r),_}function j(s,i){i in s.payload.data&&(s.payload.data[i]=void 0),i in s.payload._errors&&(s.payload._errors[i]=d.errorValue),s._asyncData[i]&&(s._asyncData[i].data.value=void 0,s._asyncData[i].error.value=d.errorValue,s._asyncData[i].pending.value=!1,s._asyncData[i].status.value="idle"),i in s._asyncDataPromises&&(s._asyncDataPromises[i]&&(s._asyncDataPromises[i].cancelled=!0),s._asyncDataPromises[i]=void 0)}function N(s,i){const t={};for(const u of i)t[u]=s[u];return t}export{F as u};