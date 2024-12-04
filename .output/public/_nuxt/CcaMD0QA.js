import{_ as C}from"./BmhXuPma.js";import{h as M,r as N,j as D,o as d,c as l,b as c,w as v,a as t,n,F as f,E as g,t as a,z as h,G as r,H as y,v as T}from"./BxMGRyn4.js";import{C as x,_ as B}from"./CfAu45FD.js";import{u as H}from"./CewMtQvT.js";import{u as F}from"./C1zSV-XI.js";const S={class:"text-muted-foreground"},w={class:"text-muted-foreground"},z={class:"font-semibold"},A={class:"min-h-[297px] grid place-items-center"},U={class:"space-y-4"},I={class:"md:hidden space-y-5"},V={class:"space-y-px"},$={class:"flex items-center gap-x-4"},j={class:"text-muted-foreground"},G={class:"flex items-center"},L={class:"min-w-fit"},O={class:"font-semibold justify-self-end border"},P={key:0,class:"min-h-[297px] grid place-items-center"},Q={class:"space-y-4"},W=M({__name:"event-requests-table",props:{event_id:{},event_requests:{},loading:{type:Boolean},disabled:{type:Boolean}},setup(E){const i=E,b=N(["#","AUDIENCE NAME","TIME","AMOUNT","REQUEST TYPE","STATUS"]),{data:p,status:k}=H(`/events/${i.event_id}`,{immediate:!i.disabled&&!!i.event_id}),m=D(()=>{var s,o;return(i==null?void 0:i.event_requests)??((o=(s=p==null?void 0:p.value)==null?void 0:s.data)==null?void 0:o.requests)??[]});return(s,o)=>{const u=C;return d(),l(f,null,[c(B,{heading:n(b),data:n(m),loading:n(k)==="pending"||s.loading,class:"hidden md:block"},{empty:v(()=>[t("div",A,[t("div",U,[c(n(x),{class:"size-8 block mx-auto"}),o[0]||(o[0]=t("div",{class:"text-2xl font-semibold text-muted-foreground text-center"}," No requests for this event ",-1))])])]),default:v(()=>[(d(!0),l(f,null,g(n(m),(e,_)=>(d(),l("tr",{key:e.id},[t("td",null,a(_+1),1),t("td",S,a(e.audience.name??e.audience.stage_name),1),t("td",w,a(("useDateFormat"in s?s.useDateFormat:n(F))(e.created_at,"HH:mm")),1),t("td",z,"₦"+a(("formatMoney"in s?s.formatMoney:n(h))((e==null?void 0:e.price)??0)),1),t("td",null,[t("div",{class:r(("cn"in s?s.cn:n(y))("flex items-center",e.type==="hype"?" text-[#FF99F1]":"text-[#FFEE99]"))},[c(u,{name:e.type==="hype"?"mic":"music",class:"scale-50 mt-1"},null,8,["name"]),t("span",null,a(e==null?void 0:e.type)+" request",1)],2)]),t("td",{class:r({"text-destructive":["ignored","declined"].includes(e.status),"text-green-500":["completed"].includes(e.status)})},a(e.status),3)]))),128))]),_:1},8,["heading","data","loading"]),t("div",I,[(d(!0),l(f,null,g(n(m),(e,_)=>(d(),l("div",{class:"grid grid-cols-[15px_1fr_auto] gap-4 items-center",key:e.id},[t("div",null,a(_+1),1),t("div",V,[t("div",null,a(e.audience.name??e.audience.stage_name),1),t("div",$,[t("div",j,a(("useDateFormat"in s?s.useDateFormat:n(F))(e.created_at,"HH:mm")),1),t("div",{class:r(("cn"in s?s.cn:n(y))("flex items-center  -mt-1 min-w-ful gap-x-4",e.type==="hype"?" text-[#FF99F1]":"text-[#FFEE99]"))},[t("div",G,[c(u,{name:e.type==="hype"?"mic":"music",class:"scale-50 mt-1"},null,8,["name"]),t("div",L,a(e==null?void 0:e.type),1)]),t("div",{class:r([{"text-destructive":["ignored","declined"].includes(e.status),"text-green-500":["completed"].includes(e.status)},"text-xs"])},a(e.status),3)],2)])]),t("div",O," ₦"+a(("formatMoney"in s?s.formatMoney:n(h))((e==null?void 0:e.price)??0)),1)]))),128)),n(m).length?T("",!0):(d(),l("div",P,[t("div",Q,[c(n(x),{class:"size-8 block mx-auto"}),o[1]||(o[1]=t("div",{class:"text-2xl font-semibold text-muted-foreground text-center"}," No requests for this event ",-1))])]))])],64)}}});export{W as _};
