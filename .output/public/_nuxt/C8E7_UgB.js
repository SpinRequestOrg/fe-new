import{_ as q}from"./CN5lk10w.js";import{_ as D}from"./CPKCF57A.js";import{_ as E}from"./tzp8P3Dt.js";import{h as j,m as A,k as F,j as R,o as c,c as p,a as t,b as a,d as g,t as l,n as i,w as u,v,O,F as T,E as G,p as H,G as _,H as f,P as L,L as M,x as P,V as U,N as J}from"./CbOI5dCu.js";import{u as K}from"./c7xwM23q.js";import{D as Q}from"./BF6eb5gG.js";import{A as z}from"./CrWiVz4s.js";const W={class:"container pt-16 pb-40 relative"},X={class:"max-w-full w-[912px] mx-auto"},Y={class:"flex gap-x-1 items-center text-muted-foreground fixed top-24 z-10"},Z={class:"font-display text-xl ml-6"},h={class:"font-semibold ml-2"},ee={class:"text-xl"},te={class:"relative mt-6"},se={class:"grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base"},ne={class:"text-base font-semibold"},ie={class:"flex justify-between items-center"},ae={class:"font-semibold"},le={class:"font-semibold"},oe={class:"font-semibold"},de={class:"flex items-center gap-x-4"},re={class:"text-base font-semibold"},ce={class:"flex justify-between items-center"},ue={class:"space-y-px"},me={class:"font-semibold"},pe={class:"space-y-px"},ge={class:"font-semibold"},_e={class:"space-y-px"},fe={class:"font-semibold"},ve={class:"min-w-4"},xe={key:1,class:"p-4 text-center text-base text-muted-foreground"},be={key:0,class:"place-center"},Ne=j({__name:"search",setup(we){var w;A({title:"Search Results"});const x=(w=F().query)==null?void 0:w.search,{data:I,status:b}=K(`user/search-host?name=${x}&per_page=100&page=1`),m=R(()=>{var n;return((n=I.value)==null?void 0:n.data.hosts)??[]}),S=(n,s)=>{n.preventDefault(),P(`/${s}`)};return(n,s)=>{const V=q,y=D,k=E,N=U,B=J,C=O;return c(),p("div",W,[t("div",X,[t("div",Y,[a(V,{to:"/audience"}),t("div",Z,[s[0]||(s[0]=g(" Showing results for ")),t("span",h,'"'+l(i(x))+'"',1)]),a(i(Q),{class:"size-12"}),t("div",ee,l(i(m).length)+" results",1)]),t("div",te,[a(C,{class:"w-full"},{default:u(()=>[a(B,{class:"w-full space-y-1"},{default:u(()=>[i(m).length?(c(!0),p(T,{key:0},G(i(m),(e,$)=>(c(),H(N,{key:e.id+$,value:e.id,onSelect:o=>S(o,e.slug)},{default:u(()=>[a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))((e.is_live,"grid-cols-host-item__live"),"w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("div",se,[t("span",ne,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1),t("div",ie,[t("div",null,[t("span",ae,l(((o=e==null?void 0:e.stats)==null?void 0:o.followers)??0),1),s[1]||(s[1]=g(" followers "))]),t("div",null,[t("span",le,l(((d=e==null?void 0:e.stats)==null?void 0:d.events)??0),1),s[2]||(s[2]=g(" events "))]),t("div",null,[t("span",oe,l(((r=e==null?void 0:e.stats)==null?void 0:r.requests)??0),1),s[3]||(s[3]=g(" requests "))])])]),t("div",null,[t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",e.is_live?"opacity-100":"opacity-0"))},s[4]||(s[4]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2)]),a(i(z),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})]}),_:2},1032,["to","class"]),a(k,{to:`/${e==null?void 0:e.slug}`,class:_(("cn"in n?n.cn:i(f))("w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"))},{default:u(()=>{var o,d,r;return[t("div",de,[a(y,{initials:("getInitials"in n?n.getInitials:i(L))((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),image:e.profile_picture},null,8,["initials","image"]),t("span",re,l((e==null?void 0:e.stage_name)??(e==null?void 0:e.email)),1)]),t("div",ce,[t("div",ue,[t("div",me,l(((o=e.stats)==null?void 0:o.followers)??0),1),s[5]||(s[5]=t("div",null,"followers",-1))]),t("div",pe,[t("div",ge,l(((d=e.stats)==null?void 0:d.events)??0),1),s[6]||(s[6]=t("div",null,"events",-1))]),t("div",_e,[t("div",fe,l(((r=e.stats)==null?void 0:r.requests)??0),1),s[7]||(s[7]=t("div",null,"requests",-1))]),t("div",{class:_(("cn"in n?n.cn:i(f))("inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1"))},s[8]||(s[8]=[t("span",null,"LIVE",-1),t("span",{class:"size-2 rounded-full bg-destructive"},null,-1)]),2),t("div",ve,[a(i(z),{class:"goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"})])])]}),_:2},1032,["to","class"])]),_:2},1032,["value","onSelect"]))),128)):v("",!0),!i(m).length&&i(b)!=="pending"?(c(),p("div",xe," No match found ")):v("",!0)]),_:1})]),_:1}),i(b)==="pending"?(c(),p("div",be,[a(i(M),{class:"animate-spin size-5"})])):v("",!0)])])])}}});export{Ne as default};
