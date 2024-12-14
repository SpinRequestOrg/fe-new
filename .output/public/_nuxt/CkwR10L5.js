import{A as ae,_ as oe}from"./QEt6da2c.js";import{_ as ie}from"./t-pUVUSg.js";import{_ as I}from"./gKF8NT45.js";import{e as de,h as C,r as T,l as le,f as re,o as r,c as v,n as e,b as s,L as P,v as k,a as t,F as L,E as F,d as R,t as m,w as o,_ as q,s as J,p as w,G as X,H as Y,J as ue,z as j,X as W,K as ce,M as pe,N as me,O as Z,T as ee,P as te,k as se,j as U,A as fe,B as _e,C as ge,D as ve,m as ye}from"./DnpCbRTJ.js";import{_ as he}from"./CjY_SuWl.js";import{_ as qe}from"./D0voErjr.js";import{_ as V}from"./D0XFfPQK.js";import{_ as xe}from"./fVqZO4hQ.js";import{_ as M,e as O}from"./CiHFQmxZ.js";import{u as A}from"./C4VN1FV5.js";import{C as be}from"./B6vD5Iaa.js";import{D as K}from"./BMduc7sZ.js";import{u as we}from"./CuH6kOYn.js";import{a as $e,u as ke}from"./B7XP8EbF.js";import{_ as Ue}from"./D8jKD0d5.js";import"./BbVo0cS7.js";import"./ugp_FfYg.js";import"./DIdQnTI5.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=de("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),Re={class:"w-full border rounded-3xl bg-white/5 px-6 py-4 relative"},Ce={key:0,class:"absolute inset-0 grid place-items-center bg-background/65 rounded-[inherit] z-10"},ze={class:"space-y-6 my-8"},Ee={class:"text-lg text-muted-foreground capitalize min-w-fit"},Le=C({__name:"event-rate-card",props:{services:{default:()=>[{id:1,name:"song",price:0},{id:2,name:"hype",price:0}]},onUpdate:{}},setup(x){const f=x,i=T(!1),_=T([]);le(()=>f.services,u=>{_.value=u},{immediate:!0});const{$repo:{event:g}}=re(),l=async(u,n)=>await g.updateEventPrice(u,n),d=async()=>{var u;try{i.value=!0;const n=await Promise.all(_.value.map(a=>l(a.id,a.price)));i.value=!1,J({title:"Prices updated"})}catch(n){i.value=!1,J({title:((u=n==null?void 0:n.data)==null?void 0:u.message)??"Failed to update prices",variant:"warning"}),console.error("FAILED TO UPDATE PRICES",n)}};return(u,n)=>(r(),v("div",Re,[e(i)?(r(),v("div",Ce,[s(e(P),{class:"size-5 animate-spin"})])):k("",!0),n[5]||(n[5]=t("div",{class:"text-2xl font-medium"},"Live prices",-1)),t("div",ze,[(r(!0),v(L,null,F(e(_),a=>(r(),v("div",{class:"flex justify-between items-center",key:a.id},[t("div",Ee,[R(m(a.name)+" ",1),n[0]||(n[0]=t("span",{class:"hidden md:inline"},"request",-1))]),s(he,{modelValue:a.price,"onUpdate:modelValue":y=>a.price=y,id:`PRICE-FOR-${a.name}-${a.id}`,step:100},null,8,["modelValue","onUpdate:modelValue","id"]),k("",!0)]))),128))]),s(q,{class:"w-full",onClick:d},{default:o(()=>n[4]||(n[4]=[R("Update price")])),_:1})]))}}),Se={class:"space-y-1 text-left"},De={class:"font-medium"},Ne={class:"text-sm text-muted-foreground"},Ae={class:"py-4 mt-4 border-t border-t-white/5"},Be={class:"flex gap-x-2"},Te={class:"space-y-1 w-full"},Ve={class:"text-white/80"},Ie={class:"space-y-1 w-full"},Pe={class:"tabular-nums text-white/80"},Fe={key:0,class:"flex gap-x-4 mt-8"},je={key:1,class:"py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"},Me=C({__name:"request-collapsible-item",props:{request:{},index:{},onUpdate:{},defaultOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(x){const f=x,i=T(f.defaultOpen),_=T(!1),{updateEventRequest:g,update_status:l,updating:d}=A(),u=()=>{f.disabled||_.value||(i.value=!i.value)},n=a=>{g(f.request.id,a,f.onUpdate)};return(a,y)=>{const z=ce,S=pe,h=me;return r(),w(h,{class:"bg-white/5 rounded-2xl",open:e(i),disabled:a.disabled},{default:o(()=>[s(z,{class:"grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&[data-state='open']_.caret]:rotate-180",onClick:u},{default:o(()=>{var p;return[t("div",{class:X(("cn"in a?a.cn:e(Y))(a.request.status==="now-playing"?"text-primary text-base font-medium":"text-foreground"))},m(a.index??"-"),3),t("div",Se,[a.request.type==="hype"?(r(),w(M,{key:0,content:(p=a.request)==null?void 0:p.description,modelValue:e(_),"onUpdate:modelValue":y[0]||(y[0]=c=>ue(_)?_.value=c:null)},null,8,["content","modelValue"])):(r(),v(L,{key:1},[t("div",De,m(a.request.song_title),1),t("div",Ne," by "+m(a.request.artist),1)],64))]),s(e(be),{class:"size-5 caret transition-transform relative"})]}),_:1}),s(S,{class:"data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-4 sm:px-6"},{default:o(()=>[t("div",Ae,[t("div",Be,[t("div",Te,[y[2]||(y[2]=t("div",{class:"text-sm text-muted-foreground"},"Requested by",-1)),t("div",Ve,m(a.request.nickname??a.request.audience.name),1)]),t("div",Ie,[y[3]||(y[3]=t("div",{class:"text-sm text-muted-foreground"},"Amount paid",-1)),t("div",Pe," ₦"+m(("formatMoney"in a?a.formatMoney:e(j))(a.request.price)),1)])]),a.request.status==="new"?(r(),v("div",Fe,[s(q,{class:"w-full",disabled:e(d),loading:e(d)&&e(l)==="now-playing",onClick:y[1]||(y[1]=p=>n("now-playing"))},{default:o(()=>[R(m(a.request.type==="hype"?"Perform":"Play")+" ",1),s(e(ne),{class:"size-4 ml-2"})]),_:1},8,["disabled","loading"]),s(I,{onConfirm:()=>n("declined")},{default:o(()=>[s(q,{variant:"secondary",class:"w-full !border-destructive !text-destructive",disabled:e(d),loading:e(d)&&e(l)==="declined"},{default:o(()=>[y[4]||(y[4]=R(" Reject ")),s(e(W),{class:"size-4 ml-2"})]),_:1},8,["disabled","loading"])]),_:1},8,["onConfirm"])])):a.request.status==="now-playing"?(r(),v("div",je," Now "+m(a.request.type==="hype"?"performing hype":"playing"),1)):k("",!0)])]),_:1})]),_:1},8,["open","disabled"])}}}),Oe={class:"grid grid-cols-request-line-item gap-x-4 items-center px-2 sm:px-6 py-4 bg-white/5 rounded-2xl"},He={class:"space-y-1"},Ge={class:"font-medium"},Je={class:"text-sm text-muted-foreground"},Ke={class:"space-y-1"},Qe={class:"text-white/80"},Xe={class:"space-y-1"},Ye={class:"tabular-nums text-white/80"},We={key:0,class:"flex gap-x-2 justify-self-end"},Ze={key:1,class:"py-1 px-6 bg-foreground text-background text-center text-sm rounded-2xl animate-pulse justify-self-end"},et=C({__name:"request-line-item",props:{request:{},index:{},onUpdate:{type:Function}},setup(x){const f=x,{updateEventRequest:i,update_status:_,updating:g}=A(),l=d=>{i(f.request.id,d,f.onUpdate)};return(d,u)=>{var n;return r(),v("div",Oe,[t("div",{class:X(("cn"in d?d.cn:e(Y))(d.request.status==="now-playing"?"text-primary text-base font-medium":"text-foreground"))},m(d.index??"-"),3),t("div",He,[d.request.type==="hype"?(r(),w(M,{key:0,content:(n=d.request)==null?void 0:n.description},null,8,["content"])):(r(),v(L,{key:1},[t("div",Ge,m(d.request.song_title),1),t("div",Je,"by "+m(d.request.artist),1)],64))]),t("div",Ke,[u[1]||(u[1]=t("div",{class:"text-sm text-muted-foreground"},"Requested by",-1)),t("div",Qe,m(d.request.nickname??d.request.audience.name),1)]),t("div",Xe,[u[2]||(u[2]=t("div",{class:"text-sm text-muted-foreground"},"Amount paid",-1)),t("div",Ye," ₦"+m(("formatMoney"in d?d.formatMoney:e(j))(d.request.price)),1)]),d.request.status==="new"?(r(),v("div",We,[s(q,{onClick:u[0]||(u[0]=a=>l("now-playing")),disabled:e(g),loading:e(g)&&e(_)==="now-playing"},{default:o(()=>[R(m(d.request.type==="hype"?"Perform":"Play")+" ",1),s(e(ne),{class:"size-3 ml-2"})]),_:1},8,["disabled","loading"]),s(I,{onConfirm:()=>l("declined"),message:"Are you sure you want to reject this request?"},{default:o(()=>[s(q,{variant:"secondary",disabled:e(g),loading:e(g)&&e(_)==="declined",class:"!border-destructive !text-destructive"},{default:o(()=>[u[3]||(u[3]=R(" Reject ")),s(e(W),{class:"size-3 ml-2"})]),_:1},8,["disabled","loading"])]),_:1},8,["onConfirm"])])):d.request.status==="now-playing"?(r(),v("div",Ze," Now "+m(d.request.type==="hype"?"performing hype":"playing"),1)):k("",!0)])}}}),tt={key:0,class:"min-h-[350px]"},st={class:"place-center grid place-items-center gap-2"},nt={class:"size-12 rounded-full bg-white/40 relative"},at={class:"text-xl text-muted-foreground font-medium"},Q=C({__name:"request-list",props:{requests:{default:()=>O},onUpdate:{},type:{default:"song"},loading:{type:Boolean,default:!1}},setup(x){const f=i=>{i.preventDefault()};return(i,_)=>{const g=Z,l=V,d=ee,u=te;return r(),w(u,null,{default:o(()=>[s(d,{class:"space-y-2 relative"},{default:o(()=>[(r(!0),v(L,null,F(i.requests,(n,a)=>(r(),w(g,{key:n.id,value:n.id,onSelect:f},{default:o(()=>[s(Me,{request:n,class:"min-[880px]:hidden",index:a+1,onUpdate:i.onUpdate,"default-open":n.status==="now-playing",disabled:n.status==="now-playing"},null,8,["request","index","onUpdate","default-open","disabled"]),s(et,{request:n,class:"hidden min-[880px]:grid",index:a+1,onUpdate:i.onUpdate},null,8,["request","index","onUpdate"])]),_:2},1032,["value"]))),128)),!i.requests.length&&!i.loading?(r(),v("div",tt,[t("div",st,[t("div",nt,[s(l,{class:"scale-75 place-center",name:i.type=="song"?"music":"mic"},null,8,["name"])]),t("div",at," No "+m(i.type)+" requests ",1),_[0]||(_[0]=t("div",{class:"text-muted-foreground"}," Get prepared, requests may come soon ",-1))])])):k("",!0)]),_:1})]),_:1})}}}),ot={class:"grid md:grid-cols-[70px_1fr] gap-2 px-2 sm:px-6 py-4 b-white/5 rounded-2xl text-muted-foreground"},it={class:"grid md:grid-cols-[1fr_200px] gap-2 items-center"},dt={class:"space-y-1"},lt={class:"flex gap-x-2 items-center"},rt={class:"text-base text-foreground font-medium"},ut={class:"text-sm"},ct={class:"flex gap-x- items-center"},pt={class:"flex items-center gap-x-1"},mt={class:"uppercase"},ft={class:"tabular-nums"},_t={class:"flex gap-x-1 md:justify-end items-center text-sm"},gt={class:"capitalize"},vt=C({__name:"request-history-line-item",props:{request:{},index:{},onUpdate:{type:Function}},setup(x){const f=x,{updateEventRequest:i,updating:_}=A(),g=l=>{i(f.request.id,l,f.onUpdate)};return(l,d)=>{const u=V,n=q;return r(),v("div",ot,[t("div",null,m(("useDateFormat"in l?l.useDateFormat:e(we))(new Date(l.request.created_at),"h:mma")),1),t("div",it,[t("div",dt,[t("div",lt,[l.request.type==="hype"?(r(),w(M,{key:0,content:l.request.description,class:"text-base text-foreground font-medium"},null,8,["content"])):(r(),v(L,{key:1},[t("div",rt,m(l.request.song_title),1),t("div",ut,"by "+m(l.request.artist),1)],64))]),t("div",ct,[t("div",null,m(l.request.nickname??l.request.audience.name),1),s(e(K)),t("div",pt,[s(u,{class:"scale-50",name:l.request.type=="song"?"music":"mic"},null,8,["name"]),t("div",mt,m(l.request.type),1)]),s(e(K)),t("div",ft,"₦"+m(("formatMoney"in l?l.formatMoney:e(j))(l.request.price)),1)])]),t("div",_t,[t("div",gt,m(l.request.status),1),(["ignored","declined"].includes(l.request.status),k("",!0))])])])}}}),yt={key:0,class:"min-h-[350px]"},ht={class:"place-center grid place-items-center gap-2 text-center"},qt={class:"size-12 rounded-full bg-white/40 relative"},xt=C({__name:"request-history-list",props:{requests:{default:()=>O},onUpdate:{},loading:{type:Boolean,default:!1}},setup(x){const f=i=>{i.preventDefault()};return(i,_)=>{const g=Z,l=V,d=ee,u=te;return r(),w(u,null,{default:o(()=>[s(d,{class:"space-y-2 relative"},{default:o(()=>[(r(!0),v(L,null,F(i.requests,n=>(r(),w(g,{key:n.id,value:n.id,onSelect:f},{default:o(()=>[s(vt,{request:n,onUpdate:i.onUpdate},null,8,["request","onUpdate"])]),_:2},1032,["value"]))),128)),!i.requests.length&&!i.loading?(r(),v("div",yt,[t("div",ht,[t("div",qt,[s(l,{class:"scale-75 place-center",name:"history"})]),_[0]||(_[0]=t("div",{class:"text-xl text-muted-foreground font-medium"}," Nothing yet ",-1)),_[1]||(_[1]=t("div",{class:"text-muted-foreground"}," Your completed/rejected requests will be here ",-1))])])):k("",!0)]),_:1})]),_:1})}}}),bt={class:"size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"},wt={class:"size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"},$t={class:"md:hidden"},kt={key:2,class:"py-8 absolute inset-0 bg-white/5 rounded-[inherit] grid place-items-center z-10"},Ut={key:1,class:"grid place-items-center gap-y-4"},Rt={class:"text-destructive text-center"},Ct=C({__name:"requests-tab",props:{requests:{default:()=>O},event_id:{default:"1"}},setup(x){const f=x,i=se(),_=U(()=>{var p;return(p=i==null?void 0:i.query)==null?void 0:p.request_tab}),g=U(()=>_.value??"song"),{fetchEventRequests:l}=A(),{data:d,status:u,error:n,refresh:a}=$e(`EVENT-${f.event_id}-REQUESTS`,()=>l(f.event_id),{transform:p=>{const c={"now-playing":0,new:1,"payment-pending":2,completed:3,declined:4,ignored:5};return p.data.sort(($,b)=>(c==null?void 0:c[$.status])-c[b.status])}}),y=U(()=>{var p;return!d.value||n.value?[]:(p=d.value)==null?void 0:p.filter(c=>c.status==="new"||c.status==="now-playing")}),z=U(()=>{var p;return!d.value||n.value?[]:(p=d.value)==null?void 0:p.filter(c=>c.status!=="new"&&c.status!=="now-playing")}),S=U(()=>y.value.filter(p=>p.type==="song")),h=U(()=>y.value.filter(p=>p.type==="hype"));return(p,c)=>{const $=qe,b=fe,E=_e,N=V,D=ge,B=ve;return r(),w(B,{class:"border bg-white/5 rounded-3xl relative","default-value":e(g)},{default:o(()=>{var H,G;return[e(g)==="history"?(r(),w(E,{key:0,class:"p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000"},{default:o(()=>[c[2]||(c[2]=t("div",{class:"text-lg font-medium pl-6 hidden md:block"},"Request history",-1)),s(b,{value:"song","as-child":""},{default:o(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"song"}},class:"flex items-center gap-x-1 ml-auto pr-6"},{default:o(()=>[s(q,{variant:"outline",size:"icon"},{default:o(()=>[s(e(ae))]),_:1}),c[1]||(c[1]=t("div",null,"Back to live request",-1))]),_:1},8,["to"])]),_:1})]),_:1})):(r(),w(E,{key:1,class:"p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10"},{default:o(()=>[s(b,{value:"song","as-child":""},{default:o(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"song"}},class:"[&[data-state='active']_.count]:hidden"},{default:o(()=>[s(q,{variant:e(g)==="song"?"primary":"outline",class:"gap-x-2 md:min-w-[100px]"},{default:o(()=>[c[3]||(c[3]=t("div",null,"song",-1)),t("div",bt,m(e(S).length),1)]),_:1},8,["variant"])]),_:1},8,["to"])]),_:1}),s(b,{value:"hype","as-child":""},{default:o(()=>[s($,{replace:"",to:{query:{...e(i).query,request_tab:"hype"}},class:"[&[data-state='active']_.count]:hidden"},{default:o(()=>[s(q,{variant:e(g)==="hype"?"primary":"outline",class:"gap-x-2 md:min-w-[100px]"},{default:o(()=>[c[4]||(c[4]=t("div",null,"hype",-1)),t("div",wt,m(e(h).length),1)]),_:1},8,["variant"])]),_:1},8,["to"])]),_:1}),s(b,{value:"history","as-child":""},{default:o(()=>[s($,{to:{query:{...e(i).query,request_tab:"history"}},replace:"",class:"ml-auto"},{default:o(()=>[s(q,{variant:"ghost",class:"gap-x-2 text-muted-foreground hidden md:inline-flex"},{default:o(()=>[s(N,{name:"history"}),c[5]||(c[5]=t("div",null,"Request history",-1))]),_:1}),t("div",$t,[s(xe,{message:"Request history"},{default:o(()=>[s(q,{variant:"ghost",size:"icon"},{default:o(()=>[s(N,{name:"history"})]),_:1})]),_:1})])]),_:1},8,["to"])]),_:1})]),_:1})),e(u)=="pending"||e(n)?(r(),v("div",kt,[e(u)==="pending"?(r(),w(e(P),{key:0,class:"size-5 animate-spin"})):e(n)?(r(),v("div",Ut,[t("div",Rt,m(((G=(H=e(n))==null?void 0:H.data)==null?void 0:G.message)??"Failed to load request"),1),s(q,{variant:"secondary",onClick:c[0]||(c[0]=()=>e(a)())},{default:o(()=>c[6]||(c[6]=[R(" Retry ")])),_:1})])):k("",!0)])):k("",!0),e(n)?k("",!0):(r(),v(L,{key:3},[s(D,{value:"song"},{default:o(()=>[s(Q,{type:"song",loading:e(u)==="pending",requests:e(S),onUpdate:e(a),class:"p-4"},null,8,["loading","requests","onUpdate"])]),_:1}),s(D,{value:"hype",class:"p-4"},{default:o(()=>[s(Q,{type:"hype",loading:e(u)==="pending",requests:e(h),onUpdate:e(a)},null,8,["loading","requests","onUpdate"])]),_:1}),s(D,{value:"history",class:"p-4"},{default:o(()=>[s(xt,{loading:e(u)==="pending",requests:e(z),onUpdate:e(a)},null,8,["loading","requests","onUpdate"])]),_:1})],64))]}),_:1},8,["default-value"])}}}),zt={class:"container py-20"},Et={class:"flex items-center gap-x-2"},Lt={class:"text-foreground font-medium text-lg"},St={class:"grid xl:grid-cols-[1fr_auto] items-start gap-4"},Dt={class:"xl:max-w-[900px]"},Nt={class:"max-w-[700px] mx-auto w-full xl:w-[380px] relative"},At={key:0,class:"absolute inset-0 grid place-items-center bg-background/40"},es=C({__name:"index",setup(x){const f=se(),{endEvent:i,ending:_}=A(),{data:g,error:l,status:d,refresh:u}=ke(`/events/${f.params.id}`),n=()=>{i(f.params.id)},a=U(()=>{var h;return(h=f==null?void 0:f.query)==null?void 0:h.request_tab}),y=U(()=>f.params.id),z=U(()=>{var h,p,c,$,b;return(p=(h=g.value)==null?void 0:h.data)!=null&&p.requests?(b=($=(c=g.value)==null?void 0:c.data)==null?void 0:$.requests)==null?void 0:b.filter(E=>E.status==="new"):[]}),S=U(()=>{var p;const h=(p=z==null?void 0:z.value)==null?void 0:p.length;return h?`Ending the event will reject all pending ${h} requests. Are you sure you want to end event?`:"Are you sure you want to end event?"});return ye({title:()=>a.value==="history"?"Request History":"Song and Hype Request List"}),(h,p)=>{var b,E,N;const c=oe,$=ie;return r(),v("div",null,[s(Ue,{ending:e(_),onEndEvent:n,"start-date":(b=e(g))==null?void 0:b.data.start_date,animate:""},null,8,["ending","start-date"]),t("div",zt,[t("div",Et,[s(c,{to:"/dashboard"}),t("div",Lt,m((N=(E=e(g))==null?void 0:E.data)==null?void 0:N.title),1)]),s($,{error:e(l),class:"mt-8",loading:e(_)},{default:o(()=>{var D,B;return[t("div",St,[t("div",Dt,[s(Ct,{event_id:e(y)},null,8,["event_id"])]),t("div",Nt,[e(d)==="pending"?(r(),v("div",At,[s(e(P),{class:"size-5 animate-spin"})])):k("",!0),s(Le,{services:((B=(D=e(g))==null?void 0:D.data)==null?void 0:B.types)??[],onUpdate:e(u)},null,8,["services","onUpdate"]),s(I,{onConfirm:n,message:e(S)},{default:o(()=>[s(q,{class:"w-full mt-6",variant:"destructive",size:"lg",loading:e(_)},{default:o(()=>p[0]||(p[0]=[R(" END EVENT ")])),_:1},8,["loading"])]),_:1},8,["message"])])])]}),_:1},8,["error","loading"])])])}}});export{es as default};
