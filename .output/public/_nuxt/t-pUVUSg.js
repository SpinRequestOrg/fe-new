import{h as p,o as n,c as l,G as t,n as a,a as r,b as m,a0 as i,t as u,v as d,H as c,L as f}from"./DnpCbRTJ.js";const g={class:"place-center"},k={class:"text-destructive place-center text-center"},y=p({__name:"loading-area",props:{loading:{type:Boolean},error:{},fallback_error_message:{default:"Failed"},fixed:{type:Boolean,default:!0}},setup(v){return(e,b)=>(n(),l("div",{class:t(("cn"in e?e.cn:a(c))(e.loading||e.error?"min-h-[60vh]":""))},[e.loading?(n(),l("div",{key:0,class:t(("cn"in e?e.cn:a(c))("inset-0 bg-black/40 z-[50]",e.fixed?"fixed":"absolute"))},[r("div",g,[m(a(f),{class:"size-5 animate-spin"})])],2)):e.error?i(e.$slots,"error",{key:1},()=>{var s,o;return[r("div",k,[r("div",null,u(((o=(s=e.error)==null?void 0:s.data)==null?void 0:o.message)??e.fallback_error_message),1)])]}):d("",!0),e.error?d("",!0):i(e.$slots,"default",{key:2})],2))}});export{y as _};
