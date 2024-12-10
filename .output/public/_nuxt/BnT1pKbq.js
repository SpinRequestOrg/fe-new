import{_ as F}from"./D-r3Cif1.js";import{h as b,f as $,i as B,k as R,r as V,o as c,p as y,w as l,a as s,b as o,n as r,L as A,v as C,t as G,_ as I,s as h,x as P,m as T,c as O,y as U,d as m}from"./BnLl13wx.js";import{_ as w,F as j}from"./D6YCwCtw.js";const z=["onSubmit"],D=b({__name:"login-form",setup(N){const{$repo:p}=$(),{saveAuthUser:t}=B(),i=R(),a=V(!1),L=async({email:n,password:_})=>{var u,f,x,g;const d={email:n,password:_};try{a.value=!0;const e=await p.auth.loginUser(d),k=e==null?void 0:e.message;h({title:"Success",description:k,variant:"normal"}),t(e.data.token,e.data.user),a.value=!1;const v=(u=i.redirectedFrom)==null?void 0:u.fullPath,E=v||(((f=e==null?void 0:e.data)==null?void 0:f.role)==="host"?"/dashboard":"/audience");return P(E)}catch(e){a.value=!1,h({title:"Failed",description:((x=e==null?void 0:e.data)==null?void 0:x.message)??"Invalid credentials",variant:"warning"}),console.error("ERROR LOGGING IN",(g=e==null?void 0:e.data)==null?void 0:g.message)}},S={email:n=>n?!0:"Enter your email",password:n=>n?!0:"Enter your password"};return(n,_)=>(c(),y(r(j),{"validation-schema":S,as:"div"},{default:l(({handleSubmit:d})=>[s("form",{onSubmit:u=>d(u,L),class:"space-y-7"},[o(w,{name:"email",placeholder:"Enter your email here",label:"Email"}),o(w,{name:"password",placeholder:"Enter your password here",type:"password",label:"Password"}),o(I,{class:"w-full",type:"submit",size:"lg",disabled:r(a)},{default:l(()=>[r(a)?(c(),y(r(A),{key:0,class:"animate-spin mr-2"})):C("",!0),s("span",null,G(r(a)?"Please wait...":"Submit"),1)]),_:1},8,["disabled"])],40,z)]),_:1}))}}),M={class:"h-full"},W={class:"max-w-[90%] mx-auto w-[400px]"},q={class:"flex justify-center gap-x-4 mt-2"},H={class:"flex gap-x-2"},X=b({__name:"login",setup(N){return T({title:"Login"}),(p,t)=>{const i=F,a=U;return c(),O("div",M,[o(a,{name:"auth"},{default:l(()=>[s("div",null,[t[3]||(t[3]=s("div",{class:"text-primary text-center mb-2 text-xl"},"Login",-1)),t[4]||(t[4]=s("div",{class:"text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"}," Welcome, Log in to your account ",-1)),s("div",W,[o(D),s("div",q,[o(i,{to:"/forgot-password",class:"underline hover:no-underline ml-1"},{default:l(()=>t[0]||(t[0]=[m("Forgot password")])),_:1}),s("div",H,[t[2]||(t[2]=m(" Not a user? ")),o(i,{to:"/signup",class:"underline hover:no-underline"},{default:l(()=>t[1]||(t[1]=[m(" Sign up ")])),_:1})])])])])]),_:1})])}}});export{X as default};
