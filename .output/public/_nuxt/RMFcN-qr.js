import{_ as R}from"./C86lrLPe.js";import{_ as F}from"./eK-TjSFb.js";import{h as B,o as _,p as S,w as v,b as h,c as I,F as U,E as J,G as K,n as l,H as P,P as j,a as x,t as G,v as $,x as V,V as X,N as q,O as Q,r as w,f as Y,l as Z,ag as ee,ah as te,J as ne,_ as ae}from"./CS4avWYd.js";import{A as ie}from"./Ddehe1oh.js";import{r as re,i as se,a as L}from"./QHn3D8cw.js";import{S as oe}from"./Ck3VI6wu.js";import{A as le}from"./BXFTJQwI.js";const ce={class:"text-base font-semibold"},ue={key:0,class:"inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"},de={key:1,class:"p-4 text-center text-base text-muted-foreground"},fe=B({__name:"host-search-list",props:{hosts:{default:()=>[]}},setup(t){const n=(a,s)=>{a.preventDefault(),V(`/${s}`)};return(a,s)=>{const c=F,m=R,f=X,o=q,u=Q;return _(),S(u,{class:"w-full rounded-2xl bg-[#252528]"},{default:v(()=>[h(o,{class:"max-h-[296px] overflow-auto w-full p-2"},{default:v(()=>[a.hosts.length?(_(!0),I(U,{key:0},J(a.hosts,(e,d)=>(_(),S(f,{key:e.id+d,value:e.id,onSelect:r=>n(r,e.slug)},{default:v(()=>[h(m,{to:`/${e==null?void 0:e.slug}`,class:K(("cn"in a?a.cn:l(P))(e.is_live?"grid-cols-host-item__live":"grid-cols-host-item","w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:v(()=>[h(c,{initials:("getInitials"in a?a.getInitials:l(j))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),x("span",ce,G((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1),e.is_live?(_(),I("div",ue,s[0]||(s[0]=[x("span",null,"LIVE",-1),x("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]))):$("",!0),h(l(ie),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})]),_:2},1032,["to","class"])]),_:2},1032,["value","onSelect"]))),128)):(_(),I("div",de," No match found "))]),_:1})]),_:1})}}});var E=function(){return re.Date.now()},me=/\s/;function pe(t){for(var n=t.length;n--&&me.test(t.charAt(n)););return n}var ge=/^\s+/;function _e(t){return t&&t.slice(0,pe(t)+1).replace(ge,"")}var O=NaN,he=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,be=parseInt;function z(t){if(typeof t=="number")return t;if(se(t))return O;if(L(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=L(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=_e(t);var a=ve.test(t);return a||xe.test(t)?be(t.slice(2),a?2:8):he.test(t)?O:+t}var ye="Expected a function",ke=Math.max,we=Math.min;function Ie(t,n,a){var s,c,m,f,o,u,e=0,d=!1,r=!1,b=!0;if(typeof t!="function")throw new TypeError(ye);n=z(n)||0,L(a)&&(d=!!a.leading,r="maxWait"in a,m=r?ke(z(a.maxWait)||0,n):m,b="trailing"in a?!!a.trailing:b);function p(i){var g=s,y=c;return s=c=void 0,e=i,f=t.apply(y,g),f}function M(i){return e=i,o=setTimeout(k,n),d?p(i):f}function W(i){var g=i-u,y=i-e,C=n-g;return r?we(C,m-y):C}function N(i){var g=i-u,y=i-e;return u===void 0||g>=n||g<0||r&&y>=m}function k(){var i=E();if(N(i))return A(i);o=setTimeout(k,W(i))}function A(i){return o=void 0,b&&s?p(i):(s=c=void 0,f)}function D(){o!==void 0&&clearTimeout(o),e=0,s=u=c=o=void 0}function H(){return o===void 0?f:A(E())}function T(){var i=E(),g=N(i);if(s=arguments,c=this,u=i,g){if(o===void 0)return M(u);if(r)return clearTimeout(o),o=setTimeout(k,n),p(u)}return o===void 0&&(o=setTimeout(k,n)),f}return T.cancel=D,T.flush=H,T}const Se={class:"relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 pl-12 pr-8 py-6 h-[56px]"},Te={class:"absolute right-4 top-1/2 -translate-y-[52%] z-[4]"},Ee={class:"absolute left-0 translate-y-[35px] z-[5] w-full"},Re=B({__name:"host-search-input",setup(t){const n=w(""),a=w(!1),s=w([]),c=w(!1),{$repo:{user:m}}=Y(),o=Ie(async()=>{var e,d;try{a.value=!0;const r=await m.searchHost(n.value);a.value=!1,(e=r==null?void 0:r.data)!=null&&e.hosts&&(s.value=(d=r==null?void 0:r.data)==null?void 0:d.hosts),c.value=!0}catch(r){a.value=!1,s.value=[],console.error("ERORO",r)}},300);Z(n,e=>{e&&o(),e||(s.value=[],c.value=!1)});const u=e=>{if(e.key==="Enter"&&n.value)return V(`/search?search=${n.value}`)};return(e,d)=>{const r=R,b=fe;return _(),I("div",Se,[ee(x("input",{type:"text",placeholder:"Search DJs MCs, Hypeman name",class:"focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]","onUpdate:modelValue":d[0]||(d[0]=p=>ne(n)?n.value=p:null),onKeyup:u},null,544),[[te,l(n)]]),h(l(oe),{class:"absolute left-4 top-1/2 -translate-y-[52%] size-5 text-muted-foreground"}),x("div",Te,[h(r,{to:`/search?search=${l(n)}`},{default:v(()=>{var p;return[l(n)||l(a)?(_(),S(ae,{key:0,size:"icon",variant:"outline",class:"animate-in slide-in-from-left-1 fade-out-0",loading:l(a),disabled:!((p=l(s))!=null&&p.length)},{default:v(()=>[h(l(le))]),_:1},8,["loading","disabled"])):$("",!0)]}),_:1},8,["to"])]),x("div",Ee,[l(c)&&l(n)?(_(),S(b,{key:0,hosts:l(s),class:"animate-in slide-in-from-top-1 fade-in-20"},null,8,["hosts"])):$("",!0)])])}}});export{Re as _};
