import{_ as A}from"./D-r3Cif1.js";import{h as v,f as N,i as S,r as k,o as m,p as x,w as r,b as s,n,L as E,v as L,a as o,t as C,_ as $,s as y,q as B,m as F,c as G,y as R,d as h}from"./BnLl13wx.js";import{_ as V}from"./BOYXWpeF.js";import{_ as u,F as I}from"./D6YCwCtw.js";import{A as O}from"./KGbqBcss.js";import"./DUXXyp4T.js";import"./Cpj98o6Y.js";const P=v({__name:"audience-signup-form",setup(g){const{$repo:{auth:c}}=N(),{saveAuthUser:a}=S(),t=k(!1),i=async l=>{var p,_,f;t.value=!0;const d={...l,password_confirmation:l.password};try{t.value=!0;const e=await c.registerAudience(d),w=e==null?void 0:e.message;y({title:w,description:"Follow the link in your email to verify your email",variant:"normal",duration:8e4}),t.value=!1,a(e.data.token,e.data.user);const b=((p=e==null?void 0:e.data)==null?void 0:p.role)==="host"?"/dashboard":"/audience";B().push(b)}catch(e){t.value=!1,y({title:"Failed",description:((_=e==null?void 0:e.data)==null?void 0:_.message)??"Sign up failed. Please try again",variant:"warning"}),console.error("ERROR LOGGING IN",(f=e==null?void 0:e.data)==null?void 0:f.message)}};return(l,d)=>(m(),x(n(I),{"validation-schema":n(O),onSubmit:i,class:"space-y-7"},{default:r(()=>[s(u,{name:"email",placeholder:"Enter your email",label:"Email",type:"email"}),s(u,{name:"user_name",placeholder:"Enter your username",label:"Username",type:"text"}),s(u,{name:"password",placeholder:"Enter your password",type:"password",label:"Password"}),s($,{class:"w-full",type:"submit",size:"lg",disabled:n(t)},{default:r(()=>[n(t)?(m(),x(n(E),{key:0,class:"animate-spin mr-2"})):L("",!0),o("span",null,C(n(t)?"Please wait...":"Submit"),1)]),_:1},8,["disabled"])]),_:1},8,["validation-schema"]))}}),U={class:"h-full"},T={class:"absolute top-12 left-[var(--cp)]"},q={class:"w-full"},z={class:"max-w-full w-[400px] mx-auto"},D={class:"text-center mt-2"},Y=v({__name:"audience",setup(g){return F({title:"Sign Up As An Audience"}),(c,a)=>{const t=A,i=R;return m(),G("div",U,[s(i,{name:"auth"},{default:r(()=>[o("div",T,[s(V,{to:"/signup"})]),o("div",q,[a[2]||(a[2]=o("div",{class:"text-primary text-center mb-2 text-xl"}," Create your account ",-1)),a[3]||(a[3]=o("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"}," Create your free audience account ",-1)),o("div",z,[s(P),o("div",D,[a[1]||(a[1]=h(" Already a user? ")),s(t,{to:"/login",class:"underline hover:no-underline ml-1"},{default:r(()=>a[0]||(a[0]=[h("LOGIN")])),_:1})])])])]),_:1})])}}});export{Y as default};
