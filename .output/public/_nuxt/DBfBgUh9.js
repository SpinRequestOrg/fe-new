import{h as V,a8 as k,a0 as z,o,p as d,w as a,b as t,G as r,n,H as i,L as C,c as u,t as p,v as B,E as I,d as L,F as N,ar as j,as as F,at as M,au as T,av as D,aw as E,ax as q,ay as G,az as H}from"./C9o7SX3v.js";import{C as J}from"./DAgJp5gZ.js";const U=V({__name:"select-field",props:k({options:{default:()=>[]},label:{default:""},placeholder:{},name:{},disabled:{type:Boolean,default:!1},state:{default:"normal"},loading:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const l=z(c,"modelValue");return(e,m)=>{const f=j,g=F,b=M,h=T,y=D,x=E,v=q,w=G,_=H;return o(),d(_,{"model-value":l.value??"","onUpdate:modelValue":m[0]||(m[0]=s=>l.value=s),disabled:e.disabled||e.loading,name:e.name},{default:a(()=>[t(g,{class:r(("cn"in e?e.cn:n(i))("inline-flex relative border data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&[data-state='open']_.trigger-icon]:rotate-180 w-full rounded-lg min-w-[160px] items-center justify-between px-3 text-[14px] leading-none h-[58px] gap-[5px] bg-white/5 shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none",e.state==="error"?"border-destructive":"border-border"))},{default:a(()=>[t(f,{placeholder:e.placeholder,class:r(("cn"in e?e.cn:n(i))(l.value&&!!e.label&&"mt-4",l.value?"text-foreground ":"text-muted-foreground","text-base"))},null,8,["placeholder","class"]),e.loading?(o(),d(n(C),{key:0,class:"size-4 animate-spin"})):(o(),d(n(J),{key:1,class:"trigger-icon size-4 relative transition-transform"})),l.value&&e.label?(o(),u("span",{key:2,class:r(("cn"in e?e.cn:n(i))("absolute text-sm font-medium top-3 left-3 animate-in slide-in-from-bottom-1 -translate-y-1/2 label-text transition-all",e.state==="error"?"text-destructive":" text-muted-foreground"))},p(e.label),3)):B("",!0)]),_:1},8,["class"]),t(w,null,{default:a(()=>[t(v,{class:"min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-[#252528] border rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]",position:"popper",side:"bottom","side-offset":5},{default:a(()=>[t(x,{class:"p-3"},{default:a(()=>[(o(!0),u(N,null,I(e.options,(s,S)=>(o(),d(y,{key:S,value:s,class:"text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"},{default:a(()=>[t(b,{class:"absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center"}),t(h,null,{default:a(()=>[L(p(s),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","disabled","name"])}}});export{U as _};