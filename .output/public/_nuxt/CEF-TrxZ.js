import{_}from"./TLOt_h-d.js";import{_ as x,F as g}from"./BvIpPWci.js";import{h as v,f as w,r as h,m as b,o as r,c as y,b as n,a as s,w as m,n as i,s as d,q as E,_ as k,p as S,L as B,v as F,t as R}from"./DcGHPZRe.js";import{c as $,a as q}from"./DUXXyp4T.js";import"./BlTnFNY1.js";import"./Cpj98o6Y.js";const N={class:"container pt-8"},C={class:"max-w-[90%] mx-auto w-[400px]"},D={class:"flex justify-center gap-x-1 items-center mt-2 text-muted-foreground"},L=["disabled"],T=v({__name:"index",setup(V){const c=$({email:q().required("Email is required").email("Enter a valid email")}),{$repo:{auth:u}}=w(),t=h(!1),p=async({email:l})=>{var a,o;try{t.value=!0;const e=await u.requestResetLink(l),f=e==null?void 0:e.message;d({title:"Success",description:f,variant:"normal"}),E().push("/login"),t.value=!1}catch(e){t.value=!1,d({title:"Failed",description:((a=e==null?void 0:e.data)==null?void 0:a.message)??"Failed to send reset link",variant:"warning"}),console.error("ERROR",(o=e==null?void 0:e.data)==null?void 0:o.message)}};return b({title:"Forget Password"}),(l,a)=>{const o=_;return r(),y("div",N,[n(o,{to:"/login"}),a[1]||(a[1]=s("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"}," Forgot password? ",-1)),a[2]||(a[2]=s("div",{class:"text-muted-foreground text-center mb-6"}," Enter your email and we will send you a reset link ",-1)),s("div",C,[n(i(g),{"validation-schema":i(c),onSubmit:p},{default:m(()=>[n(x,{type:"email",name:"email",placeholder:"Enter your email",label:"Email"}),n(k,{class:"w-full flex mt-6",size:"lg",disabled:i(t)},{default:m(()=>[i(t)?(r(),S(i(B),{key:0,class:"size-4 animate-spin mr-2"})):F("",!0),s("span",null,R(i(t)?"Please wait":"Send link"),1)]),_:1},8,["disabled"]),s("div",D,[a[0]||(a[0]=s("span",null,"Didn't receive the mail?",-1)),s("button",{class:"outline-none underline hover:no-underline",disabled:i(t)}," RESEND ",8,L)])]),_:1},8,["validation-schema"])])])}}});export{T as default};
