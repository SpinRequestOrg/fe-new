import{_ as m}from"./DKx0YSRY.js";import{h as u,o as _,p,w as s,Y as C,b as n,d as a,_ as i,a as r,t as v}from"./DDutlV_8.js";const x={class:"p-[25px]"},k={class:"pb-6 text-2xl font-medium text-center font-display"},w={class:"flex items-center gap-4"},$=u({__name:"confirm-dialog",props:{message:{default:"Are you sure you want to continue?"},closeOnConfirm:{type:Boolean,default:!0},onConfirm:{}},setup(d){const o=d,f=t=>{var e;(e=o.onConfirm)==null||e.call(o),o.closeOnConfirm&&(t==null||t())};return(t,e)=>{const c=m;return _(),p(c,{size:"sm"},{trigger:s(()=>[C(t.$slots,"default",{},()=>[n(i,{variant:"destructive"},{default:s(()=>e[0]||(e[0]=[a("Confirm")])),_:1})])]),default:s(({toggle:l})=>[r("div",x,[r("div",k,v(t.message),1),r("div",w,[n(i,{variant:"destructive",class:"w-full",onClick:y=>f(l)},{default:s(()=>e[1]||(e[1]=[a(" Yes ")])),_:2},1032,["onClick"]),n(i,{variant:"outline",class:"w-full",onClick:l},{default:s(()=>e[2]||(e[2]=[a(" No ")])),_:2},1032,["onClick"])])])]),_:3})}}});export{$ as _};