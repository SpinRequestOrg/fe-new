import{h as d,o,c as n,a,b as c,m as t,K as l,t as m,q as i,B as p,L as u,C as g}from"./ZzYuc5FK.js";const f={key:0,class:"inset-0 absolute bg-black/40 z-[50]"},k={class:"place-center"},_={class:"text-destructive place-center text-center"},y=d({__name:"loading-area",props:{loading:{type:Boolean},error:{},fallback_error_message:{default:"Failed"}},setup(h){return(e,v)=>(o(),n("div",{class:p(("cn"in e?e.cn:t(g))(e.loading||e.error?"min-h-[60vh]":""))},[e.loading?(o(),n("div",f,[a("div",k,[c(t(u),{class:"size-5 animate-spin"})])])):e.error?l(e.$slots,"error",{key:1},()=>{var s,r;return[a("div",_,[a("div",null,m(((r=(s=e.error)==null?void 0:s.data)==null?void 0:r.message)??e.fallback_error_message),1)])]}):i("",!0),e.error?i("",!0):l(e.$slots,"default",{key:2})],2))}});export{y as _};
