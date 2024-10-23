import{_ as D}from"./CBGcTsFW.js";import{_ as v}from"./C_uAVEpq.js";import{e as k,h as w,i as I,o as r,n as _,w as t,b as e,_ as g,d as x,t as $,m as n,at as R,a,q as S,p as O,aW as V,aX as A,b6 as B,b7 as P,b8 as U,b9 as j,ba as q,c as b,F,K as G}from"./ZzYuc5FK.js";import{_ as T}from"./DlAUqK2U.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=k("CircleUserRoundIcon",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=k("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),H=w({__name:"profile-menu",setup(u){const{logOut:d,auth_user:l}=I(),s=()=>{O().push("/login")};return(c,o)=>{const p=V,z=A,C=B,y=v,f=P,L=U,N=j,M=q;return r(),_(M,null,{default:t(()=>[e(C,{asChild:""},{default:t(()=>[e(g,{variant:"ghost",class:"w-auto h-auto !p-0 !rounded-full"},{default:t(()=>[e(z,{class:"bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle"},{default:t(()=>[e(p,{class:"leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase"},{default:t(()=>{var i,m;return[x($(("getInitials"in c?c.getInitials:n(R))(((i=n(l))==null?void 0:i.stage_name)??((m=n(l))==null?void 0:m.email)??"")),1)]}),_:1})]),_:1})]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(L,{class:"z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"},{default:t(()=>{var i;return[((i=n(l))==null?void 0:i.role)==="host"?(r(),_(f,{key:0,asChild:""},{default:t(()=>[e(y,{to:"/dashboard",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(h),{class:"size-4 mr-2"}),o[1]||(o[1]=a("span",null,"Dashboard",-1))]),_:1})]),_:1})):S("",!0),e(f,{asChild:""},{default:t(()=>[e(y,{to:"/profile",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(h),{class:"size-4 mr-2"}),o[2]||(o[2]=a("span",null,"Profile",-1))]),_:1})]),_:1}),e(f,{class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",onSelect:o[0]||(o[0]=m=>n(d)(s))},{default:t(()=>[e(n(E),{class:"size-4 mr-2"}),o[3]||(o[3]=a("span",null,"Log out",-1))]),_:1})]}),_:1})]),_:1})]),_:1})}}}),K={class:"flex items-center justify-between container"},W={class:"flex items-center gap-x-2"},X=w({__name:"navigation",setup(u){const{isLoggedIn:d}=I();return(l,s)=>{const c=D,o=v,p=H;return r(),b("header",K,[e(o,{class:"flex items-center gap-x-px",to:"/"},{default:t(()=>[e(c,{class:"scale-75"}),s[0]||(s[0]=a("div",{class:"text-lg font-semibold font-display hidden sm:block"}," SpinRequest ",-1))]),_:1}),a("nav",W,[n(d)?(r(),_(p,{key:0})):(r(),b(F,{key:1},[e(o,{to:"/login"},{default:t(()=>[e(g,null,{default:t(()=>s[1]||(s[1]=[x(" LOGIN ")])),_:1})]),_:1}),e(o,{to:"/signup"},{default:t(()=>[e(g,{variant:"secondary"},{default:t(()=>s[2]||(s[2]=[x(" SIGN UP ")])),_:1})]),_:1})],64))])])}}}),J={},Q={class:"debug-screens"},Y={class:"fixed py-4 left-0 right-0 border-b bg-background z-[100]"},Z={class:"pt-[72px] h-screen"};function ee(u,d){const l=X;return r(),b("main",Q,[a("div",Y,[e(l)]),a("div",Z,[G(u.$slots,"default")])])}const ae=T(J,[["render",ee]]);export{ae as default};