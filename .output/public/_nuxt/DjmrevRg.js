import{h as _,a6 as b,Z as g,r as x,o as w,p as C,w as a,b as s,a0 as d,a as r,t as P,v as V,n as h,J as k,b3 as B,b4 as y,b5 as z,b6 as N,b7 as R,b8 as M}from"./CS4avWYd.js";const j=_({__name:"popover",props:b({side:{default:"top"},content:{default:""}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const l=g(i,"modelValue"),o=x(l.value),p=()=>{o.value=!o.value};return(t,e)=>{const u=B,S=M,m=y,f=z,c=N,v=R;return w(),C(v,{open:h(o),"onUpdate:open":[e[0]||(e[0]=n=>k(o)?o.value=n:null),e[1]||(e[1]=n=>l.value=n)]},{default:a(()=>[s(u,{"aria-label":"Read more","as-child":""},{default:a(()=>[d(t.$slots,"default",{},()=>[e[2]||(e[2]=r("div",{class:"text-sm"},"Read more",-1))])]),_:3}),s(c,null,{default:a(()=>[s(f,{side:t.side,"side-offset":0,class:"rounded-md font-sans z-[10] max-w-[99.9vw] sm:max-w-[500px] max-h-52 overflow-auto border bg-popover-foreground p-3.5 text-popover/80 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"},{default:a(()=>[d(t.$slots,"content",{toggle:p},()=>[r("div",null,P(t.content),1)]),V("",!0),s(m,{class:"fill-foreground size-2"})]),_:3},8,["side"])]),_:3})]),_:3},8,["open"])}}});export{j as _};
