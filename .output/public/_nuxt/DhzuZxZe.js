<<<<<<<< HEAD:.output/public/_nuxt/BgNeePoh.js
import{_ as q}from"./DB5mFlWy.js";import{_ as A}from"./BM03PN8t.js";import{_ as D}from"./2Yb_zUac.js";import{h as E,m as T,k as j,j as F,o as c,c as p,a as t,b as a,d as g,t as l,n as i,w as u,v,P as R,F as G,E as H,p as M,G as _,H as f,Q as L,L as O,x as P,O as Q,T as U}from"./CKUYctw9.js";import{u as J}from"./BlGtBlPV.js";import{D as K}from"./C0IBmcq6.js";import{A as I}from"./BUN9zz4_.js";const W={class:"container pt-16 pb-40 relative"},X={class:"max-w-full w-[912px] mx-auto"},Y={class:"flex gap-x-1 items-center text-muted-foreground"},Z={class:"font-display text-xl ml-6"},h={class:"font-semibold ml-2"},ee={class:"text-xl"},te={class:"relative mt-6"},se={class:"grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base"},ne={class:"text-base font-semibold"},ie={class:"flex justify-between items-center"},ae={class:"font-semibold"},le={class:"font-semibold"},oe={class:"font-semibold"},de={class:"flex items-center gap-x-4"},re={class:"text-base font-semibold"},ce={class:"flex justify-between items-center"},ue={class:"space-y-px"},me={class:"font-semibold"},pe={class:"space-y-px"},ge={class:"font-semibold"},_e={class:"space-y-px"},fe={class:"font-semibold"},ve={class:"min-w-4"},xe={key:1,class:"p-4 text-center text-base text-muted-foreground"},be={key:0,class:"place-center"},Ce=E({__name:"search",setup(we){var w;T({title:"Search Results"});const x=(w=j().query)==null?void 0:w.search,{data:S,status:b}=J(`user/search-host?name=${x}&per_page=100&page=1`),m=F(()=>{var n;return((n=S.value)==null?void 0:n.data.hosts)??[]}),z=(n,s)=>{n.preventDefault(),P(`/${s}`)};return(n,s)=>{const B=q,y=A,k=D,C=Q,N=U,V=R;return c(),p("div",W,[t("div",X,[t("div",Y,[a(B,{to:"/audience"}),t("div",Z,[s[0]||(s[0]=g(" Showing results for ")),t("span",h,'"'+l(i(x))+'"',1)]),a(i(K),{class:"size-12"}),t("div",ee,l(i(m).length)+" results",1)]),t("div",te,[a(V,{class:"w-full"},{default:u(()=>[a(N,{class:"w-full space-y-1"},{default:u(()=>[i(m).length?(c(!0),p(G,{key:0},H(i(m),(e,$)=>(c(),M(C,{key:e.id+$,value:e.id,onSelect:o=>z(o,e.slug)},{default:u(()=>[a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))((e.is_live,"grid-cols-host-item__live"),"w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("div",se,[t("span",ne,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1),t("div",ie,[t("div",null,[t("span",ae,l(((o=e==null?void 0:e.stats)==null?void 0:o.followers)??0),1),s[1]||(s[1]=g(" followers "))]),t("div",null,[t("span",le,l(((d=e==null?void 0:e.stats)==null?void 0:d.events)??0),1),s[2]||(s[2]=g(" events "))]),t("div",null,[t("span",oe,l(((r=e==null?void 0:e.stats)==null?void 0:r.requests)??0),1),s[3]||(s[3]=g(" requests "))])])]),t("div",null,[t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",e.is_live?"opacity-100":"opacity-0"))},s[4]||(s[4]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2)]),a(i(I),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})]}),_:2},1032,["to","class"]),a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))("w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[t("div",de,[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("span",re,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1)]),t("div",ce,[t("div",ue,[t("div",me,l(((o=e.stats)==null?void 0:o.followers)??0),1),s[5]||(s[5]=t("div",null,"followers",-1))]),t("div",pe,[t("div",ge,l(((d=e.stats)==null?void 0:d.events)??0),1),s[6]||(s[6]=t("div",null,"events",-1))]),t("div",_e,[t("div",fe,l(((r=e.stats)==null?void 0:r.requests)??0),1),s[7]||(s[7]=t("div",null,"requests",-1))]),t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1"))},s[8]||(s[8]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2),t("div",ve,[a(i(I),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})])])]}),_:2},1032,["to","class"])]),_:2},1032,["value","onSelect"]))),128)):v("",!0),!i(m).length&&i(b)!=="pending"?(c(),p("div",xe," No match found ")):v("",!0)]),_:1})]),_:1}),i(b)==="pending"?(c(),p("div",be,[a(i(O),{class:"animate-spin size-5"})])):v("",!0)])])])}}});export{Ce as default};
========
import{_ as q}from"./OWLNppFj.js";import{_ as A}from"./CdDTZ6NQ.js";import{_ as D}from"./DMAhSTlz.js";import{h as E,m as T,k as j,j as F,o as c,c as p,a as t,b as a,d as g,t as l,n as i,w as u,v,P as R,F as G,E as H,p as M,G as _,H as f,Q as L,L as O,x as P,O as Q,T as U}from"./B3oCP8tS.js";import{u as J}from"./fJQd6cbo.js";import{D as K}from"./Dzc-TjvY.js";import{A as I}from"./kmLkamzt.js";const W={class:"container pt-16 pb-40 relative"},X={class:"max-w-full w-[912px] mx-auto"},Y={class:"flex gap-x-1 items-center text-muted-foreground"},Z={class:"font-display text-xl ml-6"},h={class:"font-semibold ml-2"},ee={class:"text-xl"},te={class:"relative mt-6"},se={class:"grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base"},ne={class:"text-base font-semibold"},ie={class:"flex justify-between items-center"},ae={class:"font-semibold"},le={class:"font-semibold"},oe={class:"font-semibold"},de={class:"flex items-center gap-x-4"},re={class:"text-base font-semibold"},ce={class:"flex justify-between items-center"},ue={class:"space-y-px"},me={class:"font-semibold"},pe={class:"space-y-px"},ge={class:"font-semibold"},_e={class:"space-y-px"},fe={class:"font-semibold"},ve={class:"min-w-4"},xe={key:1,class:"p-4 text-center text-base text-muted-foreground"},be={key:0,class:"place-center"},Ce=E({__name:"search",setup(we){var w;T({title:"Search Results"});const x=(w=j().query)==null?void 0:w.search,{data:S,status:b}=J(`user/search-host?name=${x}&per_page=100&page=1`),m=F(()=>{var n;return((n=S.value)==null?void 0:n.data.hosts)??[]}),z=(n,s)=>{n.preventDefault(),P(`/${s}`)};return(n,s)=>{const B=q,y=A,k=D,C=Q,N=U,V=R;return c(),p("div",W,[t("div",X,[t("div",Y,[a(B,{to:"/audience"}),t("div",Z,[s[0]||(s[0]=g(" Showing results for ")),t("span",h,'"'+l(i(x))+'"',1)]),a(i(K),{class:"size-12"}),t("div",ee,l(i(m).length)+" results",1)]),t("div",te,[a(V,{class:"w-full"},{default:u(()=>[a(N,{class:"w-full space-y-1"},{default:u(()=>[i(m).length?(c(!0),p(G,{key:0},H(i(m),(e,$)=>(c(),M(C,{key:e.id+$,value:e.id,onSelect:o=>z(o,e.slug)},{default:u(()=>[a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))((e.is_live,"grid-cols-host-item__live"),"w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("div",se,[t("span",ne,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1),t("div",ie,[t("div",null,[t("span",ae,l(((o=e==null?void 0:e.stats)==null?void 0:o.followers)??0),1),s[1]||(s[1]=g(" followers "))]),t("div",null,[t("span",le,l(((d=e==null?void 0:e.stats)==null?void 0:d.events)??0),1),s[2]||(s[2]=g(" events "))]),t("div",null,[t("span",oe,l(((r=e==null?void 0:e.stats)==null?void 0:r.requests)??0),1),s[3]||(s[3]=g(" requests "))])])]),t("div",null,[t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",e.is_live?"opacity-100":"opacity-0"))},s[4]||(s[4]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2)]),a(i(I),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})]}),_:2},1032,["to","class"]),a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))("w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[t("div",de,[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("span",re,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1)]),t("div",ce,[t("div",ue,[t("div",me,l(((o=e.stats)==null?void 0:o.followers)??0),1),s[5]||(s[5]=t("div",null,"followers",-1))]),t("div",pe,[t("div",ge,l(((d=e.stats)==null?void 0:d.events)??0),1),s[6]||(s[6]=t("div",null,"events",-1))]),t("div",_e,[t("div",fe,l(((r=e.stats)==null?void 0:r.requests)??0),1),s[7]||(s[7]=t("div",null,"requests",-1))]),t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1"))},s[8]||(s[8]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2),t("div",ve,[a(i(I),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})])])]}),_:2},1032,["to","class"])]),_:2},1032,["value","onSelect"]))),128)):v("",!0),!i(m).length&&i(b)!=="pending"?(c(),p("div",xe," No match found ")):v("",!0)]),_:1})]),_:1}),i(b)==="pending"?(c(),p("div",be,[a(i(O),{class:"animate-spin size-5"})])):v("",!0)])])])}}});export{Ce as default};
>>>>>>>> 1284d1b7c268752b39346e9194f5fedd89983677:.output/public/_nuxt/DhzuZxZe.js
