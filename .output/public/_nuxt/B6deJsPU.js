import{_ as j}from"./BOPjOsjd.js";import{_ as N}from"./0NiqOSFJ.js";import{_ as O}from"./0uve1ueu.js";import{e as z,h as L,i as S,o as l,p as _,w as t,b as e,_ as g,d as w,t as V,n,Q as q,a,v as x,q as U,aM as A,aN as B,bg as P,bh as F,bi as H,bj as T,bk as W,j as G,c as y,F as M,a0 as E}from"./Bnh0oe4E.js";import{S as Q}from"./DZdx-L9o.js";import{_ as J}from"./DlAUqK2U.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=z("CircleUserRoundIcon",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=z("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=z("WalletMinimalIcon",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]),X=L({__name:"profile-menu",setup(b){const{logOut:u,auth_user:s}=S(),h=()=>{U().push("/login")};return(i,o)=>{const v=A,d=B,k=P,c=N,r=F,$=H,D=T,R=W;return l(),_(R,null,{default:t(()=>[e(k,{asChild:""},{default:t(()=>[e(g,{variant:"ghost",class:"w-auto h-auto !p-0 !rounded-full"},{default:t(()=>[e(d,{class:"bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle"},{default:t(()=>[e(v,{class:"leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase"},{default:t(()=>{var p,f,m;return[w(V(("getInitials"in i?i.getInitials:n(q))(((p=n(s))==null?void 0:p.stage_name)??((f=n(s))==null?void 0:f.user_name)??((m=n(s))==null?void 0:m.email)??"")),1)]}),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:t(()=>[e($,{class:"z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"},{default:t(()=>{var p,f,m;return[((p=n(s))==null?void 0:p.role)==="host"?(l(),_(r,{key:0,asChild:""},{default:t(()=>[e(c,{to:"/dashboard",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(I),{class:"size-4 mr-2"}),o[1]||(o[1]=a("span",null,"Dashboard",-1))]),_:1})]),_:1})):x("",!0),e(r,{asChild:""},{default:t(()=>[e(c,{to:"/profile",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(I),{class:"size-4 mr-2"}),o[2]||(o[2]=a("span",null,"Profile",-1))]),_:1})]),_:1}),((f=n(s))==null?void 0:f.role)==="audience"?(l(),_(r,{key:1,asChild:""},{default:t(()=>[e(c,{to:"/order-history",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(C),{class:"mr-2 size-4"}),o[3]||(o[3]=a("span",null,"Order History",-1))]),_:1})]),_:1})):x("",!0),((m=n(s))==null?void 0:m.role)==="host"?(l(),_(r,{key:2,asChild:""},{default:t(()=>[e(c,{to:"/wallet",class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"},{default:t(()=>[e(n(C),{class:"mr-2 size-4"}),o[4]||(o[4]=a("span",null,"Wallet",-1))]),_:1})]),_:1})):x("",!0),e(r,{class:"relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",onSelect:o[0]||(o[0]=le=>n(u)(h))},{default:t(()=>[e(n(K),{class:"size-4 mr-2"}),o[5]||(o[5]=a("span",null,"Log out",-1))]),_:1})]}),_:1})]),_:1})]),_:1})}}}),Y={class:"flex items-center justify-between container"},Z={class:"flex items-center gap-x-2"},ee=L({__name:"navigation",setup(b){const{isLoggedIn:u,auth_user:s}=S(),h=G(()=>{var i;if(!u.value)return"/";(i=s.value)==null||i.role});return(i,o)=>{var r;const v=j,d=N,k=O,c=X;return l(),y("header",Y,[e(d,{class:"flex items-center gap-x-px",to:n(h)},{default:t(()=>[e(v,{class:"scale-75"}),o[0]||(o[0]=a("div",{class:"text-lg font-semibold font-display hidden sm:block"}," SpinRequest ",-1))]),_:1},8,["to"]),a("nav",Z,[n(u)?(l(),y(M,{key:0},[((r=n(s))==null?void 0:r.role)==="audience"?(l(),_(d,{key:0,to:"/audience"},{default:t(()=>[e(k,{message:"Search host",delay:50},{default:t(()=>[e(g,{size:"icon",class:"!size-[40px]",variant:"ghost"},{default:t(()=>[e(n(Q),{class:"size-5"})]),_:1})]),_:1})]),_:1})):x("",!0),e(c)],64)):(l(),y(M,{key:1},[e(d,{to:"/login"},{default:t(()=>[e(g,null,{default:t(()=>o[1]||(o[1]=[w(" LOGIN ")])),_:1})]),_:1}),e(d,{to:"/signup"},{default:t(()=>[e(g,{variant:"secondary"},{default:t(()=>o[2]||(o[2]=[w(" SIGN UP ")])),_:1})]),_:1})],64))])])}}}),te={},oe={class:"debug-screens"},ne={class:"fixed py-4 left-0 right-0 border-b bg-background z-[100]"},se={class:"pt-[72px] h-screen"};function ae(b,u){const s=ee;return l(),y("main",oe,[a("div",ne,[e(s)]),a("div",se,[E(b.$slots,"default")])])}const fe=J(te,[["render",ae]]);export{fe as default};