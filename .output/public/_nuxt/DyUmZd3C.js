import{_}from"./BK_HpqKZ.js";import{_ as x,F as g}from"./D5R6KTZn.js";import{h as v,f as w,r as h,o as r,c as b,b as n,a as s,w as m,m as o,s as d,p as y,_ as E,n as k,L as S,q as B,t as F}from"./bU2t7sMy.js";import{c as R,a as $}from"./DUXXyp4T.js";import{u as q}from"./DO3jfBZY.js";import"./CbiDtum7.js";import"./Cpj98o6Y.js";const N={class:"container pt-8"},C={class:"max-w-[90%] mx-auto w-[400px]"},D={class:"flex justify-center gap-x-1 items-center mt-2 text-muted-foreground"},L=["disabled"],G=v({__name:"index",setup(V){const c=R({email:$().required("Email is required").email("Enter a valid email")}),{$repo:{auth:u}}=w(),a=h(!1),p=async({email:l})=>{var t,i;try{a.value=!0;const e=await u.requestResetLink(l),f=e==null?void 0:e.message;d({title:"Success",description:f,variant:"normal"}),y().push("/login"),a.value=!1}catch(e){a.value=!1,d({title:"Failed",description:((t=e==null?void 0:e.data)==null?void 0:t.message)??"Failed to send reset link",variant:"warning"}),console.error("ERROR",(i=e==null?void 0:e.data)==null?void 0:i.message)}};return q({title:"Forget Password"}),(l,t)=>{const i=_;return r(),b("div",N,[n(i,{to:"/login"}),t[1]||(t[1]=s("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"}," Forgot password? ",-1)),t[2]||(t[2]=s("div",{class:"text-muted-foreground text-center mb-6"}," Enter your email and we will send you a reset link ",-1)),s("div",C,[n(o(g),{"validation-schema":o(c),onSubmit:p},{default:m(()=>[n(x,{type:"email",name:"email",placeholder:"Enter your email",label:"Email"}),n(E,{class:"w-full flex mt-6",size:"lg",disabled:o(a)},{default:m(()=>[o(a)?(r(),k(o(S),{key:0,class:"size-4 animate-spin mr-2"})):B("",!0),s("span",null,F(o(a)?"Please wait":"Send link"),1)]),_:1},8,["disabled"]),s("div",D,[t[0]||(t[0]=s("span",null,"Didn't receive the mail?",-1)),s("button",{class:"outline-none underline hover:no-underline",disabled:o(a)}," RESEND ",8,L)])]),_:1},8,["validation-schema"])])])}}});export{G as default};