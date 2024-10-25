import{A as ie,_ as de}from"./CZ3-iNoy.js";import{_ as le}from"./CIqiVcPo.js";import{_ as B,a as re}from"./DQ58iMwX.js";import{e as K,h as R,r as D,l as ue,f as ce,o as l,c as v,m as e,b as s,L as F,q as b,a as t,F as C,E as I,d as k,t as f,w as a,_ as h,s as Q,n as q,B as X,C as Z,y as pe,K as M,X as J,Q as me,R as fe,S as _e,T as W,U as ee,Y as te,k as se,j as U,Z as ge,$ as ve,a0 as ye,a1 as he}from"./bxmSTM4p.js";import{_ as qe}from"./BWAYAOHl.js";import{_ as xe}from"./B4M3g5MA.js";import{_ as T}from"./DlDWhlZT.js";import{_ as ne}from"./BuIk8_VN.js";import{_ as V,e as j,u as be}from"./M6jX-MO5.js";import{u as A}from"./CiSXusqe.js";import{C as $e}from"./u1ODcd0D.js";import{D as Y}from"./BoUYCQBg.js";import{u as we}from"./DCkb20XM.js";import{u as ke}from"./DsQ42j_F.js";import{u as Re}from"./NZmLVfKA.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=K("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=K("RefreshCcwIcon",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),Ce={class:"w-full border rounded-3xl bg-white/5 px-6 py-4 relative"},ze={key:0,class:"absolute inset-0 grid place-items-center bg-background/65 rounded-[inherit] z-10"},Ee={class:"space-y-6 my-8"},Le={class:"text-lg text-muted-foreground capitalize min-w-fit"},Se=R({__name:"event-rate-card",props:{services:{},onUpdate:{type:Function}},setup(x){const m=x,i=D(!1),p=D([]);ue(()=>m.services,u=>{p.value=u},{immediate:!0});const{$repo:{event:_}}=ce(),r=async(u,n)=>await _.updateEventPrice(u,n),d=async()=>{var u;try{i.value=!0;const n=await Promise.all(p.value.map(o=>r(o.id,o.price)));i.value=!1,Q({title:"Prices updated"})}catch(n){i.value=!1,Q({title:((u=n==null?void 0:n.data)==null?void 0:u.message)??"Failed to update prices",variant:"warning"}),console.error("FAILED TO UPDATE PRICES",n)}};return(u,n)=>(l(),v("div",Ce,[e(i)?(l(),v("div",ze,[s(e(F),{class:"size-5 animate-spin"})])):b("",!0),n[5]||(n[5]=t("div",{class:"text-2xl font-medium"},"Live prices",-1)),t("div",Ee,[(l(!0),v(C,null,I(e(p),o=>(l(),v("div",{class:"flex justify-between items-center",key:o.id},[t("div",Le,[k(f(o.name)+" ",1),n[0]||(n[0]=t("span",{class:"hidden md:inline"},"request",-1))]),s(qe,{modelValue:o.price,"onUpdate:modelValue":y=>o.price=y,id:`PRICE-FOR-${o.name}-${o.id}`,step:100},null,8,["modelValue","onUpdate:modelValue","id"]),b("",!0)]))),128))]),s(h,{class:"w-full",onClick:d},{default:a(()=>n[4]||(n[4]=[k("Update price")])),_:1})]))}}),Ae={class:"space-y-1 text-left"},De={class:"font-medium"},Te={class:"text-sm text-muted-foreground"},Ne={class:"py-4 mt-4 border-t border-t-white/5"},Be={class:"flex gap-x-2"},Fe={class:"space-y-1 w-full"},Ie={class:"text-white/80"},Me={class:"space-y-1 w-full"},Ve={class:"tabular-nums text-white/80"},je={key:0,class:"flex gap-x-4 mt-8"},Pe={key:1,class:"py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"},Oe=R({__name:"request-collapsible-item",props:{request:{},index:{},onUpdate:{},defaultOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(x){const m=x,i=D(m.defaultOpen),p=D(!1),{updateEventRequest:_,update_status:r,updating:d}=A(),u=()=>{m.disabled||p.value||(i.value=!i.value)},n=o=>{_(m.request.id,o,m.onUpdate)};return(o,y)=>{const z=me,E=fe,L=_e;return l(),q(L,{class:"bg-white/5 rounded-2xl",open:e(i),disabled:o.disabled},{default:a(()=>[s(z,{class:"grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&[data-state='open']_.caret]:rotate-180",onClick:u},{default:a(()=>{var g;return[t("div",{class:X(("cn"in o?o.cn:e(Z))(o.request.status==="now-playing"?"text-primary text-base font-medium":"text-foreground"))},f(o.index??"-"),3),t("div",Ae,[o.request.type==="hype"?(l(),q(V,{key:0,content:(g=o.request)==null?void 0:g.description,modelValue:e(p),"onUpdate:modelValue":y[0]||(y[0]=c=>pe(p)?p.value=c:null)},null,8,["content","modelValue"])):(l(),v(C,{key:1},[t("div",De,f(o.request.song_title),1),t("div",Te," by "+f(o.request.artist),1)],64))]),s(e($e),{class:"size-5 caret transition-transform relative"})]}),_:1}),s(E,{class:"data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-4 sm:px-6"},{default:a(()=>[t("div",Ne,[t("div",Be,[t("div",Fe,[y[2]||(y[2]=t("div",{class:"text-sm text-muted-foreground"},"Requested by",-1)),t("div",Ie,f(o.request.nickname??o.request.audience.name),1)]),t("div",Me,[y[3]||(y[3]=t("div",{class:"text-sm text-muted-foreground"},"Amount paid",-1)),t("div",Ve," ₦"+f(("formatMoney"in o?o.formatMoney:e(M))(o.request.price)),1)])]),o.request.status==="new"?(l(),v("div",je,[s(h,{class:"w-full",disabled:e(d),loading:e(d)&&e(r)==="now-playing",onClick:y[1]||(y[1]=g=>n("now-playing"))},{default:a(()=>[y[4]||(y[4]=k(" Accept ")),s(e(ae),{class:"size-4 ml-2"})]),_:1},8,["disabled","loading"]),s(B,{onConfirm:()=>n("declined")},{default:a(()=>[s(h,{variant:"secondary",class:"w-full !border-destructive !text-destructive",disabled:e(d),loading:e(d)&&e(r)==="declined"},{default:a(()=>[y[5]||(y[5]=k(" Reject ")),s(e(J),{class:"size-4 ml-2"})]),_:1},8,["disabled","loading"])]),_:1},8,["onConfirm"])])):o.request.status==="now-playing"?(l(),v("div",Pe," Now "+f(o.request.type==="hype"?"performing hype":"playing"),1)):b("",!0)])]),_:1})]),_:1},8,["open","disabled"])}}}),He={class:"grid grid-cols-request-line-item gap-x-4 items-center px-2 sm:px-6 py-4 bg-white/5 rounded-2xl"},Qe={class:"space-y-1"},Ye={class:"font-medium"},Ge={class:"text-sm text-muted-foreground"},Ke={class:"space-y-1"},Xe={class:"text-white/80"},Ze={class:"space-y-1"},Je={class:"tabular-nums text-white/80"},We={key:0,class:"flex gap-x-2 justify-self-end"},et={key:1,class:"py-1 px-6 bg-foreground text-background text-center text-sm rounded-2xl animate-pulse justify-self-end"},tt=R({__name:"request-line-item",props:{request:{},index:{},onUpdate:{type:Function}},setup(x){const m=x,{updateEventRequest:i,update_status:p,updating:_}=A(),r=d=>{i(m.request.id,d,m.onUpdate)};return(d,u)=>{var n;return l(),v("div",He,[t("div",{class:X(("cn"in d?d.cn:e(Z))(d.request.status==="now-playing"?"text-primary text-base font-medium":"text-foreground"))},f(d.index??"-"),3),t("div",Qe,[d.request.type==="hype"?(l(),q(V,{key:0,content:(n=d.request)==null?void 0:n.description},null,8,["content"])):(l(),v(C,{key:1},[t("div",Ye,f(d.request.song_title),1),t("div",Ge,"by "+f(d.request.artist),1)],64))]),t("div",Ke,[u[1]||(u[1]=t("div",{class:"text-sm text-muted-foreground"},"Requested by",-1)),t("div",Xe,f(d.request.nickname??d.request.audience.name),1)]),t("div",Ze,[u[2]||(u[2]=t("div",{class:"text-sm text-muted-foreground"},"Amount paid",-1)),t("div",Je," ₦"+f(("formatMoney"in d?d.formatMoney:e(M))(d.request.price)),1)]),d.request.status==="new"?(l(),v("div",We,[s(h,{onClick:u[0]||(u[0]=o=>r("now-playing")),disabled:e(_),loading:e(_)&&e(p)==="now-playing"},{default:a(()=>[u[3]||(u[3]=k(" Accept ")),s(e(ae),{class:"size-3 ml-2"})]),_:1},8,["disabled","loading"]),s(B,{onConfirm:()=>r("declined"),message:"Are you sure you want to reject this request?"},{default:a(()=>[s(h,{variant:"secondary",disabled:e(_),loading:e(_)&&e(p)==="declined",class:"!border-destructive !text-destructive"},{default:a(()=>[u[4]||(u[4]=k(" Reject ")),s(e(J),{class:"size-3 ml-2"})]),_:1},8,["disabled","loading"])]),_:1},8,["onConfirm"])])):d.request.status==="now-playing"?(l(),v("div",et," Now "+f(d.request.type==="hype"?"performing hype":"playing"),1)):b("",!0)])}}}),st={key:0,class:"min-h-[350px]"},nt={class:"place-center grid place-items-center gap-2"},at={class:"size-12 rounded-full bg-white/40 relative"},ot={class:"text-xl text-muted-foreground font-medium"},G=R({__name:"request-list",props:{requests:{default:()=>j},onUpdate:{},type:{default:"song"},loading:{type:Boolean,default:!1}},setup(x){const m=i=>{i.preventDefault()};return(i,p)=>{const _=W,r=T,d=ee,u=te;return l(),q(u,null,{default:a(()=>[s(d,{class:"space-y-2 relative"},{default:a(()=>[(l(!0),v(C,null,I(i.requests,(n,o)=>(l(),q(_,{key:n.id,value:n.id,onSelect:m},{default:a(()=>[s(Oe,{request:n,class:"min-[880px]:hidden",index:o+1,onUpdate:i.onUpdate,"default-open":n.status==="now-playing",disabled:n.status==="now-playing"},null,8,["request","index","onUpdate","default-open","disabled"]),s(tt,{request:n,class:"hidden min-[880px]:grid",index:o+1,onUpdate:i.onUpdate},null,8,["request","index","onUpdate"])]),_:2},1032,["value"]))),128)),!i.requests.length&&!i.loading?(l(),v("div",st,[t("div",nt,[t("div",at,[s(r,{class:"scale-75 place-center",name:i.type=="song"?"music":"mic"},null,8,["name"])]),t("div",ot," No "+f(i.type)+" requests ",1),p[0]||(p[0]=t("div",{class:"text-muted-foreground"}," Get prepared, requests may come soon ",-1))])])):b("",!0)]),_:1})]),_:1})}}}),it={class:"grid md:grid-cols-[70px_1fr] gap-2 px-2 sm:px-6 py-4 b-white/5 rounded-2xl text-muted-foreground"},dt={class:"grid md:grid-cols-[1fr_200px] gap-2 items-center"},lt={class:"space-y-1"},rt={class:"flex gap-x-2 items-center"},ut={class:"text-base text-foreground font-medium"},ct={class:"text-sm"},pt={class:"flex gap-x- items-center"},mt={class:"flex items-center gap-x-1"},ft={class:"uppercase"},_t={class:"tabular-nums"},gt={class:"flex gap-x-1 md:justify-end items-center text-sm"},vt={class:"capitalize"},yt=R({__name:"request-history-line-item",props:{request:{},index:{},onUpdate:{type:Function}},setup(x){const m=x,{updateEventRequest:i,updating:p}=A(),_=r=>{i(m.request.id,r,m.onUpdate)};return(r,d)=>{const u=T,n=h;return l(),v("div",it,[t("div",null,f(("useDateFormat"in r?r.useDateFormat:e(be))(new Date(r.request.created_at),"h:mma")),1),t("div",dt,[t("div",lt,[t("div",rt,[r.request.type==="hype"?(l(),q(V,{key:0,content:r.request.description,class:"text-base text-foreground font-medium"},null,8,["content"])):(l(),v(C,{key:1},[t("div",ut,f(r.request.song_title),1),t("div",ct,"by "+f(r.request.artist),1)],64))]),t("div",pt,[t("div",null,f(r.request.nickname??r.request.audience.name),1),s(e(Y)),t("div",mt,[s(u,{class:"scale-50",name:r.request.type=="song"?"music":"mic"},null,8,["name"]),t("div",ft,f(r.request.type),1)]),s(e(Y)),t("div",_t,"₦"+f(("formatMoney"in r?r.formatMoney:e(M))(r.request.price)),1)])]),t("div",gt,[t("div",vt,f(r.request.status),1),["ignored","declined"].includes(r.request.status)?(l(),q(ne,{key:0,message:"Return to request list",delay:200},{default:a(()=>[s(n,{size:"icon",variant:"ghost",disabled:e(p),loading:e(p),onClick:d[0]||(d[0]=()=>_("new"))},{default:a(()=>[s(e(Ue),{class:"text-muted-foreground size-4"})]),_:1},8,["disabled","loading"])]),_:1})):b("",!0)])])])}}}),ht={key:0,class:"min-h-[350px]"},qt={class:"place-center grid place-items-center gap-2 text-center"},xt={class:"size-12 rounded-full bg-white/40 relative"},bt=R({__name:"request-history-list",props:{requests:{default:()=>j},onUpdate:{},loading:{type:Boolean,default:!1}},setup(x){const m=i=>{i.preventDefault()};return(i,p)=>{const _=W,r=T,d=ee,u=te;return l(),q(u,null,{default:a(()=>[s(d,{class:"space-y-2 relative"},{default:a(()=>[(l(!0),v(C,null,I(i.requests,n=>(l(),q(_,{key:n.id,value:n.id,onSelect:m},{default:a(()=>[s(yt,{request:n,onUpdate:i.onUpdate},null,8,["request","onUpdate"])]),_:2},1032,["value"]))),128)),!i.requests.length&&!i.loading?(l(),v("div",ht,[t("div",qt,[t("div",xt,[s(r,{class:"scale-75 place-center",name:"history"})]),p[0]||(p[0]=t("div",{class:"text-xl text-muted-foreground font-medium"}," Nothing yet ",-1)),p[1]||(p[1]=t("div",{class:"text-muted-foreground"}," Your completed/rejected requests will be here ",-1))])])):b("",!0)]),_:1})]),_:1})}}}),$t={class:"size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"},wt={class:"size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"},kt={class:"md:hidden"},Rt={key:2,class:"min-h-[350px] absolute inset-0 rounded-[inherit] grid place-items-center z-10"},Ut={key:1,class:"grid place-items-center gap-y-4"},Ct={class:"text-destructive text-center"},zt=R({__name:"requests-tab",props:{requests:{default:()=>j},event_id:{default:"1"}},setup(x){const m=x,i=se(),p=U(()=>{var g;return(g=i==null?void 0:i.query)==null?void 0:g.request_tab}),_=U(()=>p.value??"song"),{fetchEventRequests:r}=A(),{data:d,status:u,error:n,refresh:o}=we(`EVENT-${m.event_id}-REQUESTS`,()=>r(m.event_id),{transform:g=>{const c={"now-playing":0,new:1,"payment-pending":2,completed:3,declined:4,ignored:5};return g.data.sort(($,w)=>(c==null?void 0:c[$.status])-c[w.status])}}),y=U(()=>{var g;return!d.value||n.value?[]:(g=d.value)==null?void 0:g.filter(c=>c.status==="new"||c.status==="now-playing")}),z=U(()=>{var g;return!d.value||n.value?[]:(g=d.value)==null?void 0:g.filter(c=>c.status!=="new"&&c.status!=="now-playing")}),E=U(()=>y.value.filter(g=>g.type==="song")),L=U(()=>y.value.filter(g=>g.type==="hype"));return(g,c)=>{const $=xe,w=ge,S=ve,P=T,N=ye,oe=he;return l(),q(oe,{class:"border bg-white/5 rounded-3xl relative","default-value":e(_)},{default:a(()=>{var O,H;return[e(_)==="history"?(l(),q(S,{key:0,class:"p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000"},{default:a(()=>[c[2]||(c[2]=t("div",{class:"text-lg font-medium pl-6 hidden md:block"},"Request history",-1)),s(w,{value:"song","as-child":""},{default:a(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"song"}},class:"flex items-center gap-x-1 ml-auto pr-6"},{default:a(()=>[s(h,{variant:"outline",size:"icon"},{default:a(()=>[s(e(ie))]),_:1}),c[1]||(c[1]=t("div",null,"Back to live request",-1))]),_:1},8,["to"])]),_:1})]),_:1})):(l(),q(S,{key:1,class:"p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10"},{default:a(()=>[s(w,{value:"song","as-child":""},{default:a(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"song"}},class:"[&[data-state='active']_.count]:hidden"},{default:a(()=>[s(h,{variant:e(_)==="song"?"primary":"outline",class:"gap-x-2 md:min-w-[100px]"},{default:a(()=>[c[3]||(c[3]=t("div",null,"song",-1)),t("div",$t,f(e(E).length),1)]),_:1},8,["variant"])]),_:1},8,["to"])]),_:1}),s(w,{value:"hype","as-child":""},{default:a(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"hype"}},class:"[&[data-state='active']_.count]:hidden"},{default:a(()=>[s(h,{variant:e(_)==="hype"?"primary":"outline",class:"gap-x-2 md:min-w-[100px]"},{default:a(()=>[c[4]||(c[4]=t("div",null,"hype",-1)),t("div",wt,f(e(L).length),1)]),_:1},8,["variant"])]),_:1},8,["to"])]),_:1}),s(w,{value:"history","as-child":""},{default:a(()=>[s($,{to:{query:{...e(i).query,request_tab:"history"}},replace:"",class:"ml-auto"},{default:a(()=>[s(h,{variant:"ghost",class:"gap-x-2 text-muted-foreground hidden md:inline-flex"},{default:a(()=>[s(P,{name:"history"}),c[5]||(c[5]=t("div",null,"Request history",-1))]),_:1}),t("div",kt,[s(ne,{message:"Request history"},{default:a(()=>[s(h,{variant:"ghost",size:"icon"},{default:a(()=>[s(P,{name:"history"})]),_:1})]),_:1})])]),_:1},8,["to"])]),_:1})]),_:1})),e(u)=="pending"||e(n)?(l(),v("div",Rt,[e(u)==="pending"?(l(),q(e(F),{key:0,class:"size-5 animate-spin"})):e(n)?(l(),v("div",Ut,[t("div",Ct,f(((H=(O=e(n))==null?void 0:O.data)==null?void 0:H.message)??"Failed to load request"),1),s(h,{variant:"secondary",onClick:c[0]||(c[0]=()=>e(o)())},{default:a(()=>c[6]||(c[6]=[k(" Retry ")])),_:1})])):b("",!0)])):b("",!0),e(n)?b("",!0):(l(),v(C,{key:3},[s(N,{value:"song"},{default:a(()=>[s(G,{type:"song",loading:e(u)==="pending",requests:e(E),onUpdate:e(o),class:"p-4"},null,8,["loading","requests","onUpdate"])]),_:1}),s(N,{value:"hype",class:"p-4"},{default:a(()=>[s(G,{type:"hype",loading:e(u)==="pending",requests:e(L),onUpdate:e(o)},null,8,["loading","requests","onUpdate"])]),_:1}),s(N,{value:"history",class:"p-4"},{default:a(()=>[s(bt,{loading:e(u)==="pending",requests:e(z),onUpdate:e(o)},null,8,["loading","requests","onUpdate"])]),_:1})],64))]}),_:1},8,["default-value"])}}}),Et={class:"container py-20"},Lt={class:"flex items-center gap-x-2"},St={class:"text-foreground font-medium text-lg"},At={class:"grid xl:grid-cols-[1fr_auto] items-start gap-4"},Dt={class:"xl:max-w-[900px]"},Tt={class:"max-w-[700px] mx-auto w-full xl:w-[380px] relative"},Nt={key:0,class:"absolute inset-0 grid place-items-center bg-background/40"},Jt=R({__name:"[id]",setup(x){const m=se(),{endEvent:i,ending:p}=A(),{data:_,error:r,status:d,refresh:u}=ke(`/events/${m.params.id}`),n=()=>{i(m.params.id)},o=U(()=>{var y;return(y=m==null?void 0:m.query)==null?void 0:y.request_tab});return Re({title:()=>o.value==="history"?"Request History":"Song and Hype Request List"}),(y,z)=>{var g,c,$;const E=de,L=le;return l(),v("div",null,[s(re,{ending:e(p),onEndEvent:n,"start-date":(g=e(_))==null?void 0:g.data.start_date,animate:""},null,8,["ending","start-date"]),t("div",Et,[t("div",Lt,[s(E,{to:"/dashboard"}),t("div",St,f(($=(c=e(_))==null?void 0:c.data)==null?void 0:$.title),1)]),s(L,{error:e(r),class:"mt-8"},{default:a(()=>{var w,S;return[t("div",At,[t("div",Dt,[s(zt,{event_id:e(m).params.id},null,8,["event_id"])]),t("div",Tt,[e(d)==="pending"?(l(),v("div",Nt,[s(e(F),{class:"size-5 animate-spin"})])):b("",!0),s(Se,{services:((S=(w=e(_))==null?void 0:w.data)==null?void 0:S.types)??[],onUpdate:e(u)},null,8,["services","onUpdate"]),s(B,{onConfirm:n,message:"Are you sure you want to end this event?"},{default:a(()=>[s(h,{class:"w-full mt-6",variant:"destructive",size:"lg",ending:e(p)},{default:a(()=>z[0]||(z[0]=[k(" END EVENT ")])),_:1},8,["ending"])]),_:1})])])]}),_:1},8,["error"])])])}}});export{Jt as default};
