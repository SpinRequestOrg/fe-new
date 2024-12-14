import{h as z,a7 as V,Z as B,r as k,o as d,p as i,w as o,a0 as l,b as t,d as f,_ as M,v as m,a as s,n as r,X as T,G as $,Y as N,aD as j,aE as O,aF as G,aG as S,aH as X,aI as Y,aJ as E,aK as F}from"./Bnh0oe4E.js";const H={class:"px-6 py-4 flex justify-between relative border-b border-input"},J=z({__name:"modal",props:V({showClose:{type:Boolean,default:!0},size:{default:"md"},controlled:{type:Boolean,default:!1},hideTrigger:{type:Boolean,default:!1}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(u){const _=N("content fixed bg-gray-900 overflow-auto top-[50%] left-[50%] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]",{variants:{size:{xl:"max-w-[4xl] max-h-[95vh]",lg:"max-w-3xl max-h-[85vh]",md:"max-w-xl max-h-[75vh]",sm:"max-w-[500px] max-h-[55vh]"}},defaultVariants:{size:"lg"}}),p=B(u,"modelValue"),n=k(!1),c=e=>{if(u.controlled){p.value=e;return}n.value=e},g=()=>{n.value=!n.value};return(e,a)=>{const x=j,v=O,h=G,w=S,y=X,b=Y,C=E,D=F;return d(),i(D,{open:e.controlled?p.value:r(n),"onUpdate:open":c},{default:o(()=>[e.hideTrigger?m("",!0):(d(),i(x,{key:0,"as-child":""},{default:o(()=>[l(e.$slots,"trigger",{},()=>[t(M,{variant:"outline"},{default:o(()=>a[0]||(a[0]=[f("Open")])),_:1})])]),_:3})),t(C,null,{default:o(()=>[t(v,{class:"fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),t(b,{class:"[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1"},{default:o(()=>[s("div",{class:$(r(_)({size:e.size}))},[s("div",H,[l(e.$slots,"heading"),e.showClose?(d(),i(h,{key:0,class:"text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none","aria-label":"Close"},{default:o(()=>[t(r(T))]),_:1})):m("",!0)]),s("div",null,[t(w,null,{default:o(()=>[l(e.$slots,"title",{},()=>[a[1]||(a[1]=s("div",{class:"sr-only"},"Modal Title",-1))])]),_:3}),t(y,null,{default:o(()=>[l(e.$slots,"description",{},()=>[a[2]||(a[2]=s("div",{class:"sr-only"},"Modal Description",-1))])]),_:3}),l(e.$slots,"default",{toggle:g},()=>[a[3]||(a[3]=f("Modal Content"))])])],2)]),_:3})]),_:3})]),_:3},8,["open"])}}});export{J as _};
