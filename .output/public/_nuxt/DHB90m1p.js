import{_ as S}from"./BcKNt5iN.js";import{p as w,u as E,q as k,r as B,o as c,z as g,w as l,a,b as o,y as r,A as $,t as A,_ as C,s as y,B as F,L as R,c as V,d as m,C as G}from"./_S93IMfv.js";import{_ as v,F as I}from"./DAZdCxtH.js";const z=["onSubmit"],O=w({__name:"login-form",setup(h){const{$repo:p}=E(),{saveAuthUser:e}=k(),s=B(!1),u=async({email:n,password:_})=>{var i,f,x;const d={email:n,password:_};try{s.value=!0;const t=await p.auth.loginUser(d),N=t==null?void 0:t.message;y({title:"Success",description:N,variant:"normal"}),e(t.data.token,t.data.user),s.value=!1;const L=((i=t==null?void 0:t.data)==null?void 0:i.role)==="host"?"/dashboard":"/search";F().push(L)}catch(t){s.value=!1,y({title:"Failed",description:((f=t==null?void 0:t.data)==null?void 0:f.message)??"Invalid credentials",variant:"warning"}),console.error("ERROR LOGGING IN",(x=t==null?void 0:t.data)==null?void 0:x.message)}},b={email:n=>n?!0:"Enter your email",password:n=>n?!0:"Enter your password"};return(n,_)=>(c(),g(r(I),{"validation-schema":b,as:"div"},{default:l(({handleSubmit:d})=>[a("form",{onSubmit:i=>d(i,u),class:"space-y-7"},[o(v,{name:"email",placeholder:"Enter your email here",label:"Email"}),o(v,{name:"password",placeholder:"Enter your password here",type:"password",label:"Password"}),o(C,{class:"w-full",type:"submit",size:"lg",disabled:r(s)},{default:l(()=>[r(s)?(c(),g(r(R),{key:0,class:"animate-spin mr-2"})):$("",!0),a("span",null,A(r(s)?"Please wait...":"Submit"),1)]),_:1},8,["disabled"])],40,z)]),_:1}))}}),P={class:"h-full"},T={class:"w-[400px] max-w-full mx-auto"},U={class:"flex justify-center gap-x-4 mt-2"},j={class:"flex gap-x-2"},H=w({__name:"login",setup(h){return(p,e)=>{const s=S,u=G;return c(),V("div",P,[o(u,{name:"auth"},{default:l(()=>[a("div",null,[e[3]||(e[3]=a("div",{class:"text-primary text-center mb-2 text-xl"},"Login",-1)),e[4]||(e[4]=a("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"}," Welcome, Log in to your account ",-1)),a("div",T,[o(O),a("div",U,[o(s,{to:"/forgot-password",class:"underline hover:no-underline ml-1"},{default:l(()=>e[0]||(e[0]=[m("Forgot password")])),_:1}),a("div",j,[e[2]||(e[2]=m(" Not a user? ")),o(s,{to:"/signup",class:"underline hover:no-underline"},{default:l(()=>e[1]||(e[1]=[m(" Sign up ")])),_:1})])])])])]),_:1})])}}});export{H as default};
