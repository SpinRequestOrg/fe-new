import{ad as $,ae as L,af as z,ag as R,ah as O,ai as U,aj as I,u as P,ak as D,P as y,m as F,al as T,r as j,T as V,o as E,c as k,a1 as G,p as W,a as x,I as J,b as Q}from"./BLB5eLYR.js";import{_ as X}from"./DlAUqK2U.js";async function Y(e,t){return await Z(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function Z(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function K({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=N(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=N(s[n]))}),(n={})=>Object.entries(n).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=s[a];return typeof l=="function"&&(c=l(n[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(i)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function ee(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function te(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function re(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function ie(e){const t={options:e},i=(s,n={})=>B(t,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:O(n,o.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,o,a)=>r(n,o,{...e.presets[s],...a});return r.options=e,r.getImage=i,r.getMeta=(s,n)=>se(t,s,n),r.getSizes=(s,n)=>ae(t,s,n),t.$img=r,r}async function se(e,t,i){const r=B(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await Y(e,r.url)}function B(e,t,i){var l,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=ne(e,i.provider||e.options.provider),n=oe(e,i.preset);if(t=$(t)?t:L(t),!r.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const h=e.options.alias[g];h&&(t=z(h,t.slice(g.length)))}}if(r.validateDomains&&$(t)){const g=R(t).host;if(!e.options.domains.find(h=>h===g))return{url:t}}const o=O(i,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=v(o.modifiers.width)),(u=o.modifiers)!=null&&u.height&&(o.modifiers.height=v(o.modifiers.height));const c=r.getImage(t,o,e);return c.format=c.format||a||"",c}function ne(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function oe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ae(e,t,i){var b,q,S,d,m;const r=v((b=i.modifiers)==null?void 0:b.width),s=v((q=i.modifiers)==null?void 0:q.height),n=re(i.sizes),o=(S=i.densities)!=null&&S.trim()?ee(i.densities.trim()):e.options.densities;te(o);const a=r&&s?s/r:0,c=[],l=[];if(Object.keys(n).length>=1){for(const f in n){const p=M(f,String(n[f]),s,a,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of o)l.push({width:p._cWidth*w,src:A(e,t,i,p,w)})}}de(c)}else for(const f of o){const p=Object.keys(n)[0];let w=p?M(p,String(n[p]),s,a,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(d=i.modifiers)==null?void 0:d.width,_cHeight:(m=i.modifiers)==null?void 0:m.height}),l.push({width:f,src:A(e,t,i,w,f)})}ce(l);const u=l[l.length-1],g=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,h=g?"w":"x",_=l.map(f=>`${f.src} ${f.width}${h}`).join(", ");return{sizes:g,srcset:_,src:u==null?void 0:u.src}}function M(e,t,i,r,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const c=r?Math.round(a*r):i;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:c}}function A(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function de(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function ce(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const le=K({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>I(e)+"_"+I(t)}),ue=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=le(t)||"_";return i||(i=z(r.options.nuxt.baseURL,"/_ipx")),{url:z(i,s,U(e))}},fe=!0,ge=!0,he=Object.freeze(Object.defineProperty({__proto__:null,getImage:ue,supportsAlias:ge,validateDomains:fe},Symbol.toStringTag,{value:"Module"})),C={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};C.providers={ipxStatic:{provider:he,defaults:{}}};const H=()=>{const e=D(),t=P();return t.$img||t._img||(t._img=ie({...C,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function me(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const pe={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ve=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=H(),s=y(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},ye={...pe,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},we=["src"],_e=F({__name:"NuxtImg",props:ye,emits:["load","error"],setup(e,{emit:t}){const i=e,r=T(),s=t,n=!1,o=H(),a=ve(i),c=j(!1),l=j(),u=y(()=>o.getSizes(i.src,{...a.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...a.modifiers.value,width:v(i.width),height:v(i.height)}})),g=y(()=>{const d={...a.attrs.value,"data-nuxt-img":""};return(!i.placeholder||c.value)&&(d.sizes=u.value.sizes,d.srcset=u.value.srcset),d}),h=y(()=>{let d=i.placeholder;if(d===""&&(d=!0),!d||c.value)return!1;if(typeof d=="string")return d;const m=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return o(i.src,{...a.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},a.options.value)}),_=y(()=>i.sizes?u.value.src:o(i.src,a.modifiers.value,a.options.value)),b=y(()=>h.value?h.value:_.value),S=P().isHydrating;return V(()=>{if(h.value){const d=new Image;_.value&&(d.src=_.value),i.sizes&&(d.sizes=u.value.sizes||"",d.srcset=u.value.srcset),d.onload=m=>{c.value=!0,s("load",m)},me("nuxt-image");return}l.value&&(l.value.complete&&S&&(l.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),l.value.onload=d=>{s("load",d)},l.value.onerror=d=>{s("error",d)})}),(d,m)=>(E(),k("img",G({ref_key:"imgEl",ref:l,class:i.placeholder&&!c.value?i.placeholderClass:void 0},{...W(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...W(r)},{src:b.value}),null,16,we))}}),be={},Se={class:"grid md:grid-cols-2 gap-10 min-h-full"},xe={class:"relative container mx-auto z-10"},qe={class:"relative z-[3]"},ze={class:"md:h-full min-h-[300px] hidden md:block md:min-h-0 bottom-0 w-full absolute md:relative bg-background rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"};function $e(e,t){const i=_e;return E(),k("div",Se,[x("div",xe,[t[0]||(t[0]=x("div",{class:"bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"},null,-1)),x("div",qe,[J(e.$slots,"default")])]),x("div",ze,[Q(i,{src:"/images/night-life.png",class:"object-fill md:object-cover w-full h-full absolute rounded-[inherit]"})])])}const We=X(be,[["render",$e]]);export{We as default};
