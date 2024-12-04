import{_ as J}from"./B-i6Kiki.js";import{_ as P}from"./BmhXuPma.js";import{h as k,o as r,p as _,w as m,a as c,n as e,b as n,c as R,t as y,v as q,i as z,j as w,d as A,z as F,_ as I,k as U,l as W,r as K,m as Q,F as T,E as X,J as Y,V as Z,W as ee}from"./BxMGRyn4.js";import{_ as te}from"./6F9_yzHY.js";import{a as G,_ as E,F as H}from"./D-l_7klc.js";import{_ as ae}from"./CpTCZBGT.js";import{c as se,b as ne,a as g}from"./DUXXyp4T.js";import{u as O}from"./DMPmDxUD.js";import{u as oe}from"./CewMtQvT.js";import"./DohEApYL.js";import"./Cpj98o6Y.js";const re=["name","value"],S=k({__name:"form-hidden-input",props:{name:{}},setup(h){return(a,i)=>(r(),_(e(G),{name:a.name,class:"relative h-0 invisible",as:"div"},{default:m(({value:l})=>[c("input",{type:"hidden",name:a.name,value:l},null,8,re)]),_:1},8,["name"]))}}),ie={key:0,class:"text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"},le=k({__name:"form-textarea",props:{name:{},label:{},type:{},id:{},placeholder:{},disabled:{type:Boolean},showErrorOnTouch:{type:Boolean,default:!1}},setup(h){return(a,i)=>(r(),_(e(G),{name:a.name,class:"relative",as:"div"},{default:m(({value:l,handleChange:u,errorMessage:d,meta:p})=>[n(ae,{"model-value":l,onChange:u,name:a.name,type:a.type,disabled:a.disabled,placeholder:a.placeholder,id:a.id,label:a.label,state:d&&p.touched?"error":"normal"},null,8,["model-value","onChange","name","type","disabled","placeholder","id","label","state"]),p.touched||a.showErrorOnTouch?(r(),R("div",ie,y(d),1)):q("",!0)]),_:1},8,["name"]))}}),D=se({type:ne().oneOf(["hype","song"]).required(),event_id:g().required(),nickname:g().optional()}),ue=D.shape({description:g().required("Hype description required"),nickname:g().required("Nickname required")}),me=D.shape({artist:g().required("Artist name required"),song_title:g().required("Song name required")}),de=k({__name:"hype-request-form",props:{request:{},event_id:{},host_slug:{}},setup(h){const a=h,{auth_user:i}=z(),l=w(()=>{var t;return{type:a.request.name,event_id:Number(a.event_id),nickname:(t=i.value)==null?void 0:t.user_name}}),{createEventRequest:u,creating:d}=O(),p=t=>{u(t,a.host_slug)};return(t,f)=>(r(),_(e(H),{"validation-schema":e(ue),"initial-values":e(l),onSubmit:p,class:"space-y-7"},{default:m(()=>[n(S,{name:"event_id"}),n(S,{name:"type"}),n(le,{name:"description",placeholder:"Enter hype description",label:"Tell us about your hype",type:"text"}),n(E,{name:"nickname",placeholder:"Enter your nickname",label:"nickname"}),n(I,{type:"submit",size:"lg",class:"max-w-full w-[400px] mx-auto !flex uppercase",loading:e(d)},{default:m(()=>{var s;return[A(" Request Hype For "+y(Number((s=t.request)==null?void 0:s.price)>0?`₦${("formatMoney"in t?t.formatMoney:e(F))(t.request.price)}`:"FREE"),1)]}),_:1},8,["loading"])]),_:1},8,["validation-schema","initial-values"]))}}),pe=k({__name:"song-request-form",props:{request:{},event_id:{},host_slug:{}},setup(h){const a=h,{auth_user:i}=z(),l=w(()=>{var t;return{type:a.request.name,event_id:Number(a.event_id),nickname:(t=i.value)==null?void 0:t.user_name}}),{createEventRequest:u,creating:d}=O(),p=t=>{u(t,a.host_slug)};return(t,f)=>(r(),_(e(H),{"validation-schema":e(me),"initial-values":e(l),onSubmit:p,class:"space-y-7"},{default:m(()=>[n(S,{name:"event_id"}),n(S,{name:"type"}),n(E,{name:"song_title",placeholder:"Enter song title",label:"Song title",type:"text"}),n(E,{name:"artist",placeholder:"Enter artiste name",label:"Artiste",type:"text"}),n(E,{name:"nickname",placeholder:"Enter your nickname",label:"nickname (optional)"}),n(I,{type:"submit",size:"lg",class:"max-w-full w-[400px] mx-auto !flex uppercase",loading:e(d)},{default:m(()=>{var s;return[A(" Request Song For "+y(Number((s=t.request)==null?void 0:s.price)>0?`₦${("formatMoney"in t?t.formatMoney:e(F))(t.request.price)}`:"FREE"),1)]}),_:1},8,["loading"])]),_:1},8,["validation-schema","initial-values"]))}}),ce={class:"container pt-6 pb-20"},_e={class:"max-w-[640px] w-full mx-auto"},fe={class:"flex items-center gap-x-1"},he={class:"text-4xl font-bold text-primary tabular-nums"},ve={class:"text-2xl font-medium my-4 mb-2 capitalize"},ye={class:"text-muted-foreground"},Ve=k({__name:"make-a-request",setup(h){const a=U(),i=a.params.host,l=a.params.event_id,{data:u,error:d,status:p}=oe(`/user/host/${i}`);W(u,s=>{var o,v,x;((x=(v=(o=s==null?void 0:s.data)==null?void 0:o.live_event)==null?void 0:v.types)==null?void 0:x.length)===1&&(t.value=s.data.live_event.types[0].name)});const t=K(""),f=w(()=>{var s,o;return(o=(s=u.value)==null?void 0:s.data.live_event)==null?void 0:o.types.find(v=>v.name===t.value)});return Q({title:"Make A Request"}),(s,o)=>{const v=J,x=P,L=Z,j=ee;return r(),R("div",ce,[n(v,{to:`/${e(i)}`},null,8,["to"]),n(te,{loading:e(p)==="pending",error:e(d)},{default:m(()=>{var V,B,M;return[c("div",_e,[o[1]||(o[1]=c("div",{class:"text-primary text-center text-lg"},"Make a request",-1)),o[2]||(o[2]=c("div",{class:"text-3xl font-semibold text-center font-display mt-2 mb-4"}," Tell me about your request ",-1)),(M=(B=(V=e(u))==null?void 0:V.data)==null?void 0:B.live_event)!=null&&M.types?(r(),_(j,{key:0,class:"grid grid-cols-[repeat(auto-fit,_minmax(305px,_1fr))] gap-6 my-6",modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=$=>Y(t)?t.value=$:null)},{default:m(()=>{var $,N,C;return[(r(!0),R(T,null,X((C=(N=($=e(u))==null?void 0:$.data)==null?void 0:N.live_event)==null?void 0:C.types,b=>(r(),_(L,{class:"p-6 lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30",key:b.id,value:b.name},{default:m(()=>[c("div",fe,[n(x,{name:"money"}),c("div",he," ₦"+y(("formatMoney"in s?s.formatMoney:e(F))(b.price)),1)]),c("div",ve,y(b.name)+" request ",1),c("div",ye,y(b.name==="song"?"Request a song and i'll give you credit when it plays":"Steal the spotlight. Get a shout-out  for yourself or someone."),1)]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue"])):q("",!0),e(f)?(r(),R(T,{key:1},[e(f).name==="hype"?(r(),_(de,{key:0,request:e(f),event_id:e(l),host_slug:e(i)},null,8,["request","event_id","host_slug"])):q("",!0),e(f).name==="song"?(r(),_(pe,{key:1,request:e(f),event_id:e(l),host_slug:e(i)},null,8,["request","event_id","host_slug"])):q("",!0)],64)):q("",!0)])]}),_:1},8,["loading","error"])])}}});export{Ve as default};
