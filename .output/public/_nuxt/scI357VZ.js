import{_ as U}from"./BK_HpqKZ.js";import{_ as J}from"./DQLPMMnl.js";import{h as b,o as i,n as h,w as _,a as c,m as e,z,A as Q,c as k,a7 as W,t as v,B as I,a8 as T,b as s,q,j as S,d as D,K as V,_ as G,k as X,l as Y,r as Z,F as A,E as ee,y as te,D as ae,P as ne}from"./bU2t7sMy.js";import{_ as se}from"./BM4eTSzp.js";import{a as H,_ as R,F as O}from"./D5R6KTZn.js";import{c as oe,b as re,a as y}from"./DUXXyp4T.js";import{u as P}from"./BRAjfQtD.js";import{u as le}from"./C5kKTf1t.js";import{u as ie}from"./DO3jfBZY.js";import"./CbiDtum7.js";import"./Cpj98o6Y.js";import"./Dm0AIJm0.js";const ue=["name","value"],E=b({__name:"form-hidden-input",props:{name:{}},setup(f){return(t,u)=>(i(),h(e(H),{name:t.name,class:"relative h-0 invisible",as:"div"},{default:_(({value:d})=>[c("input",{type:"hidden",name:t.name,value:d},null,8,ue)]),_:1},8,["name"]))}}),de=["value"],me=b({__name:"textarea",props:z({label:{},state:{},type:{},name:{},id:{},placeholder:{},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:z(["change","blur"],["update:modelValue"]),setup(f,{emit:t}){const u=T("relative rounded-lg border shadow-sm transition-colors bg-white/5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1",{variants:{state:{normal:"border-input focus-within:ring-ring",valid:"border-input focus-within:ring-input",error:"border-destructive focus-within:ring-destructive"}},defaultVariants:{state:"normal"}}),d=T("absolute text-sm font-medium top-3 left-3 -translate-y-1/2 label-text transition-all",{variants:{state:{normal:"text-muted-foreground",valid:"text-muted-foreground",error:"text-destructive"}},defaultVariants:{state:"normal"}}),r=Q(f,"modelValue"),m=t,a=n=>{r.value=n.target.value,m("change",n)},p=f;return(n,l)=>(i(),k("div",{class:I(e(u)({state:n.state}))},[c("textarea",W({...p,type:n.type,placeholder:p.placeholder||""},{value:r.value,onInput:a,onBlur:l[0]||(l[0]=o=>m("blur",o)),class:"flex rounded-[inherit] [&:focus_~_span.label-text]:!top-3 [&:placeholder-shown_~_span.label-text]:top-1/2 px-3 leading-6 w-full h-[56px] text-base pt-6 bg-transparent text-foreground transition-colors placeholder:text-transparent focus-visible:placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent relative z-10"}),null,16,de),c("span",{class:I(e(d)({state:n.state}))},v(n.label),3)],2))}}),pe={key:0,class:"text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"},ce=b({__name:"form-textarea",props:{name:{},label:{},type:{},id:{},placeholder:{},disabled:{type:Boolean},showErrorOnTouch:{type:Boolean,default:!1}},setup(f){return(t,u)=>(i(),h(e(H),{name:t.name,class:"relative",as:"div"},{default:_(({value:d,handleChange:r,errorMessage:m,meta:a})=>[s(me,{"model-value":d,onChange:r,name:t.name,type:t.type,disabled:t.disabled,placeholder:t.placeholder,id:t.id,label:t.label,state:m&&a.touched?"error":"normal"},null,8,["model-value","onChange","name","type","disabled","placeholder","id","label","state"]),a.touched||t.showErrorOnTouch?(i(),k("div",pe,v(m),1)):q("",!0)]),_:1},8,["name"]))}}),L=oe({type:re().oneOf(["hype","song"]).required(),event_id:y().required(),nickname:y().optional()}),fe=L.shape({description:y().required("Hype description required"),nickname:y().required("Nickname required")}),_e=L.shape({artist:y().required("Artist name required"),song_title:y().required("Song name required")}),he=b({__name:"hype-request-form",props:{request:{},event_id:{},host_slug:{}},setup(f){const t=f,u=S(()=>({type:t.request.name,event_id:Number(t.event_id)})),{createEventRequest:d,creating:r}=P(),m=a=>{d(a,t.host_slug)};return(a,p)=>(i(),h(e(O),{"validation-schema":e(fe),"initial-values":e(u),onSubmit:m,class:"space-y-7"},{default:_(()=>[s(E,{name:"event_id"}),s(E,{name:"type"}),s(ce,{name:"description",placeholder:"Enter hype description",label:"Tell us about your hype",type:"text"}),s(R,{name:"nickname",placeholder:"Enter your nickname",label:"nickname"}),s(G,{type:"submit",size:"lg",class:"max-w-full w-[400px] mx-auto !flex uppercase",loading:e(r)},{default:_(()=>{var n;return[D(" Request Hype For "+v(Number((n=a.request)==null?void 0:n.price)>0?`₦${("formatMoney"in a?a.formatMoney:e(V))(a.request.price)}`:"FREE"),1)]}),_:1},8,["loading"])]),_:1},8,["validation-schema","initial-values"]))}}),ve=b({__name:"song-request-form",props:{request:{},event_id:{},host_slug:{}},setup(f){const t=f,u=S(()=>({type:t.request.name,event_id:Number(t.event_id)})),{createEventRequest:d,creating:r}=P(),m=a=>{d(a,t.host_slug)};return(a,p)=>(i(),h(e(O),{"validation-schema":e(_e),"initial-values":e(u),onSubmit:m,class:"space-y-7"},{default:_(()=>[s(E,{name:"event_id"}),s(E,{name:"type"}),s(R,{name:"song_title",placeholder:"Enter song title",label:"Song title",type:"text"}),s(R,{name:"artist",placeholder:"Enter artiste name",label:"Artiste",type:"text"}),s(R,{name:"nickname",placeholder:"Enter your nickname",label:"nickname (optional)"}),s(G,{type:"submit",size:"lg",class:"max-w-full w-[400px] mx-auto !flex uppercase",loading:e(r)},{default:_(()=>{var n;return[D(" Request Song For "+v(Number((n=a.request)==null?void 0:n.price)>0?`₦${("formatMoney"in a?a.formatMoney:e(V))(a.request.price)}`:"FREE"),1)]}),_:1},8,["loading"])]),_:1},8,["validation-schema","initial-values"]))}}),ge={class:"container pt-6 pb-20"},ye={class:"max-w-[640px] w-full mx-auto"},be={class:"flex items-center gap-x-1"},xe={class:"text-4xl font-bold text-primary tabular-nums"},qe={class:"text-2xl font-medium my-4 mb-2 capitalize"},ke={class:"text-muted-foreground"},Ie=b({__name:"make-a-request",setup(f){const t=X(),u=t.params.host,d=t.params.event_id,{data:r,error:m,status:a}=le(`/user/host/${u}`);Y(r,l=>{var o,g,w;((w=(g=(o=l==null?void 0:l.data)==null?void 0:o.live_event)==null?void 0:g.types)==null?void 0:w.length)===1&&(p.value=l.data.live_event.types[0].name)});const p=Z(""),n=S(()=>{var l,o;return(o=(l=r.value)==null?void 0:l.data.live_event)==null?void 0:o.types.find(g=>g.name===p.value)});return ie({title:"Make A Request"}),(l,o)=>{const g=U,w=J,j=ae,K=ne;return i(),k("div",ge,[s(g,{to:`/${e(u)}`},null,8,["to"]),s(se,{loading:e(a)==="pending",error:e(m)},{default:_(()=>{var B,M,F;return[c("div",ye,[o[1]||(o[1]=c("div",{class:"text-primary text-center text-lg"},"Make a request",-1)),o[2]||(o[2]=c("div",{class:"text-3xl font-semibold text-center font-display mt-2 mb-4"}," Tell me about your request ",-1)),(F=(M=(B=e(r))==null?void 0:B.data)==null?void 0:M.live_event)!=null&&F.types?(i(),h(K,{key:0,class:"grid grid-cols-[repeat(auto-fit,_minmax(305px,_1fr))] gap-6 my-6",modelValue:e(p),"onUpdate:modelValue":o[0]||(o[0]=$=>te(p)?p.value=$:null)},{default:_(()=>{var $,N,C;return[(i(!0),k(A,null,ee((C=(N=($=e(r))==null?void 0:$.data)==null?void 0:N.live_event)==null?void 0:C.types,x=>(i(),h(j,{class:"p-6 lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30",key:x.id,value:x.name},{default:_(()=>[c("div",be,[s(w,{name:"money"}),c("div",xe," ₦"+v(("formatMoney"in l?l.formatMoney:e(V))(x.price)),1)]),c("div",qe,v(x.name)+" request ",1),c("div",ke,v(x.name==="song"?"Request a song and i'll give you credit when it plays":"Steal the spotlight. Get a shout-out  for yourself or someone."),1)]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue"])):q("",!0),e(n)?(i(),k(A,{key:1},[e(n).name==="hype"?(i(),h(he,{key:0,request:e(n),event_id:e(d),host_slug:e(u)},null,8,["request","event_id","host_slug"])):q("",!0),e(n).name==="song"?(i(),h(ve,{key:1,request:e(n),event_id:e(d),host_slug:e(u)},null,8,["request","event_id","host_slug"])):q("",!0)],64)):q("",!0)])]}),_:1},8,["loading","error"])])}}});export{Ie as default};