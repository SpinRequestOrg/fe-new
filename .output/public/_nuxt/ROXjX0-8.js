import{_ as T}from"./D-r3Cif1.js";import{h as B,r as D,j as O,o as i,c,b as l,w as r,n as o,a as t,F as m,E as _,v as S,p as y,t as a,z as v,d as A,K as M,_ as R,M as z,N as V}from"./BnLl13wx.js";import{_ as F,C as g}from"./BtA51aVE.js";import{u as I}from"./CTaCKzQX.js";import{C as L}from"./Bvrb_dEm.js";const U=["onClick"],$={class:"min-h-[297px] grid place-items-center"},j={class:"space-y-4"},q={class:"space-y-1 md:hidden"},G={class:"font-semibold"},Q={class:"space-y-4 px-4 pb-4"},Y={class:"space-y-1"},H={class:""},K={class:"space-y-1"},X={class:""},J={class:"space-y-1"},P={class:""},W={class:"space-y-1"},Z={class:""},tt={key:0,class:"min-h-[297px] grid place-items-center"},et={class:"space-y-4"},it=B({__name:"event-history-table",props:{event_history:{},loading:{type:Boolean},disabled:{type:Boolean},onDone:{type:Function}},setup(x){const h=D(["EVENT","LOCATION","DATE","REQUESTS","EARNING"]),u=x,{data:b,status:f}=I("/past/events",{immediate:!u.disabled,onResponse:n=>{var e,d;(d=u.onDone)==null||d.call(u,(e=n.response._data)==null?void 0:e.data)}}),p=O(()=>{var n,e,d;return((n=u.event_history)==null?void 0:n.event_details)??((d=(e=b.value)==null?void 0:e.data)==null?void 0:d.event_details)??[]});return(n,e)=>{const d=T,k=M,C=R,N=z,w=V;return i(),c(m,null,[l(F,{heading:o(h),data:o(p),loading:o(f)==="pending"||n.loading,class:"hidden md:block"},{empty:r(()=>[t("div",$,[t("div",j,[l(o(g),{class:"size-8 block mx-auto"}),e[0]||(e[0]=t("div",{class:"text-2xl font-semibold text-muted-foreground text-center"}," No events yet ",-1)),e[1]||(e[1]=t("div",{class:"text-sm text-muted-foreground text-center"}," You haven’t completed any event yet. Once you do, your events will appear here ",-1))])])]),default:r(()=>[(i(!0),c(m,null,_(o(p),s=>(i(),y(d,{custom:"",key:s.id,to:`events/${s.id}/event-details`},{default:r(({navigate:E})=>[t("tr",{class:"!h-20 text-muted-foreground",onClick:E},[t("td",null,a(s.title),1),t("td",null,a(s.address),1),t("td",null,a(s.start_date),1),t("td",null,a(s.requests_count),1),t("td",null,"₦"+a(("formatMoney"in n?n.formatMoney:o(v))(s.earnings??0)),1)],8,U)]),_:2},1032,["to"]))),128))]),_:1},8,["heading","data","loading"]),t("div",q,[o(f)==="pending"?(i(),c(m,{key:0},_(4,s=>t("div",{class:"h-10 bg-white/5 animate-pulse",key:s})),64)):(i(),c(m,{key:1},[(i(!0),c(m,null,_(o(p),s=>(i(),y(w,{key:s.id,class:"rounded-lg bg-white/5"},{default:r(()=>[l(k,{class:"flex items-center justify-between w-full p-4 [&[data-state='open']_.caret]:rotate-180"},{default:r(()=>[t("div",G,a(s.title),1),l(o(L),{class:"size-5 caret transition-transform relative"})]),_:2},1024),l(N,{class:"data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden"},{default:r(()=>[t("div",Q,[t("div",Y,[e[2]||(e[2]=t("div",{class:"text-sm text-muted-foreground"},"LOCATION",-1)),t("div",H,a(s.address),1)]),t("div",K,[e[3]||(e[3]=t("div",{class:"text-sm text-muted-foreground"},"DATE",-1)),t("div",X,a(s.start_date),1)]),t("div",J,[e[4]||(e[4]=t("div",{class:"text-sm text-muted-foreground"},"REQUESTS",-1)),t("div",P,a(s.requests_count),1)]),t("div",W,[e[5]||(e[5]=t("div",{class:"text-sm text-muted-foreground"},"EARNING",-1)),t("div",Z,"₦"+a(("formatMoney"in n?n.formatMoney:o(v))(s.earnings??0)),1)]),l(d,{to:`events/${s.id}/event-details`,class:"block w-full border"},{default:r(()=>[l(C,{variant:"secondary",class:"w-full"},{default:r(()=>e[6]||(e[6]=[A(" Open ")])),_:1})]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1024))),128)),o(p).length?S("",!0):(i(),c("div",tt,[t("div",et,[l(o(g),{class:"size-8 block mx-auto"}),e[7]||(e[7]=t("div",{class:"text-2xl font-semibold text-muted-foreground text-center"}," No events yet ",-1)),e[8]||(e[8]=t("div",{class:"text-sm text-muted-foreground text-center"}," You haven’t completed any event yet. Once you do, your events will appear here ",-1))])]))],64))])],64)}}});export{it as _};
