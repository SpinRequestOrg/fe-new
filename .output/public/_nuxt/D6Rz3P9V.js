import{h as z,j as w,r as p,f as G,o as f,p as O,w as i,n as t,s as V,x as P,b as a,a as o,_ as y,d as c,J as E,c as b,v as _,X as D,t as H,V as U,W as Y}from"./DcGHPZRe.js";import{_ as C,F as J}from"./BvIpPWci.js";import{_ as S}from"./BWAgQXI2.js";import{_ as q}from"./CNq8NFDR.js";import{c as L,a as h}from"./DUXXyp4T.js";const W=L({title:h().required("Event title required").min(5,"Title should be at least 5 characters long"),address:h().required("Event address required"),country:h().required("Event country required"),state:h().required("Event state required")}),M=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],X=()=>({all_countries:["Nigeria"],nigerian_states:M}),Z={class:"flex flex-col sm:flex-row gap-4 w-full"},Q={key:0,class:"bg-white/5 rounded-2xl p-4 !mt-8 border animate-in slide-in-from-top-1 animate-out fade-in-0"},ee={class:"my-4 space-y-4"},te={key:0,class:"flex justify-between items-center"},ae={key:1,class:"flex justify-between items-center"},se={key:0,class:"py-1 px-2 mt-8 border border-destructive bg-[#64200A] flex items-center rounded-md justify-between"},de=z({__name:"event-form",props:{edit:{type:Boolean,default:!1},id:{},title:{default:""},address:{default:""},country:{},state:{},type:{},song_price:{default:100},hype_price:{default:100}},emits:["done"],setup(A,{emit:B}){const s=A,I=B,R=w(()=>({title:s.title,address:s.address,country:s.country,state:s.state})),{all_countries:T,nigerian_states:$}=X(),n=p(s.type),l=p(s.song_price),d=p(s.hype_price),N=p(!0),F=w(()=>!n.value||Number(l.value)<0||Number(d.value)<0),g=p(!1),v=p(!1),K=w(()=>{switch(n.value){case"both":return[{name:"song",price:v.value?0:Number(l.value)},{name:"hype",price:v.value?0:Number(d.value)}];case"hype":return[{name:"hype",price:v.value?0:Number(d.value)}];case"song":return[{name:"song",price:v.value?0:Number(l.value)}];default:return[]}}),{$repo:{event:k}}=G(),j=async x=>{var u;const e={...x,types:K.value};try{g.value=!0;const m=s.edit?await k.editEvent(e,s.id):await k.createEvent(e);if(g.value=!1,V({title:m.message,variant:"normal"}),s.edit){I("done");return}m.data.id&&P("/dashboard")}catch(m){const r=m;g.value=!1,V({title:((u=r.data)==null?void 0:u.message)??s.edit?"Failed to update event":"Failed to create event",variant:"warning"}),console.error("FAILED",r)}};return(x,e)=>{const u=U,m=Y;return f(),O(t(J),{class:"space-y-6","validation-schema":t(W),"initial-values":t(R),onSubmit:j},{default:i(()=>[a(C,{name:"title",placeholder:"Enter event title",label:"Event title"}),a(C,{name:"address",placeholder:"Enter event address",label:"Address"}),o("div",Z,[a(S,{options:t(T),name:"country",placeholder:"Choose event country",label:"Country",class:"w-full"},null,8,["options"]),a(S,{options:t($),name:"state",placeholder:"Choose event state",label:"State",class:"w-full"},null,8,["options"])]),o("div",null,[e[7]||(e[7]=o("div",{class:"mb-3 font-medium"},"What type of request are you taking",-1)),a(m,{class:"grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground",name:"type",required:"",modelValue:t(n),"onUpdate:modelValue":e[0]||(e[0]=r=>E(n)?n.value=r:null)},{default:i(()=>[a(u,{"as-child":"",value:"song"},{default:i(()=>[a(y,{type:"button",variant:"outline",size:"lg",class:"ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"},{default:i(()=>e[4]||(e[4]=[c(" Song ")])),_:1})]),_:1}),a(u,{"as-child":"",value:"hype"},{default:i(()=>[a(y,{type:"button",variant:"outline",size:"lg",class:"ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"},{default:i(()=>e[5]||(e[5]=[c(" Hype ")])),_:1})]),_:1}),a(u,{"as-child":"",value:"both"},{default:i(()=>[a(y,{type:"button",variant:"outline",size:"lg",class:"col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"},{default:i(()=>e[6]||(e[6]=[c(" Song & Hype ")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),t(n)&&!t(v)?(f(),b("div",Q,[e[11]||(e[11]=o("div",{class:"text-sm text-muted-foreground"},"Set your starting prices",-1)),o("div",ee,[t(n)=="both"||t(n)=="song"?(f(),b("div",te,[e[8]||(e[8]=o("div",{class:"text-2xl font-semibold"},[c(" Song "),o("span",{class:"hidden sm:inline"},"request")],-1)),a(q,{modelValue:t(l),"onUpdate:modelValue":e[1]||(e[1]=r=>E(l)?l.value=r:null),id:"SONG_PRICE",step:100},null,8,["modelValue"])])):_("",!0),t(n)=="both"||t(n)=="hype"?(f(),b("div",ae,[e[9]||(e[9]=o("div",{class:"text-2xl font-semibold"},[c(" Hype "),o("span",{class:"hidden sm:inline"},"request")],-1)),a(q,{modelValue:t(d),"onUpdate:modelValue":e[2]||(e[2]=r=>E(d)?d.value=r:null),id:"HYPE_PRICE",step:100},null,8,["modelValue"])])):_("",!0)]),t(N)&&!x.edit?(f(),b("div",se,[e[10]||(e[10]=o("div",{class:"text-sm sm:text-base"}," You can always change the price at any time during the event ",-1)),a(t(D),{class:"size-4 cursor-pointer",onClick:e[3]||(e[3]=r=>N.value=!1)})])):_("",!0)])):_("",!0),a(y,{class:"max-w-full w-[450px] !flex !mt-8 mx-auto border",size:"lg",disabled:t(F),loading:t(g)},{default:i(()=>[c(H(s.edit?"Update":"Create")+" event ",1)]),_:1},8,["disabled","loading"])]),_:1},8,["validation-schema","initial-values"])}}});export{de as _};
