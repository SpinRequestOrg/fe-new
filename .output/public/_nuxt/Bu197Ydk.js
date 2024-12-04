import{_ as I}from"./B-i6Kiki.js";import{_ as Y}from"./6F9_yzHY.js";import{h as G,k as L,j as W,m as J,r as K,o as T,c as B,b as n,w as O,n as s,a as e,t as i,z as d,v as P}from"./BxMGRyn4.js";import{_ as Q}from"./CcaMD0QA.js";import{u as U}from"./CewMtQvT.js";import{C as X}from"./DRtGemmn.js";import{u as $,p as Z}from"./C1zSV-XI.js";import"./DohEApYL.js";import"./BmhXuPma.js";import"./CfAu45FD.js";const ee={class:"container py-20"},te={class:"grid md:grid-cols-3 lg:grid-cols-[2fr,_1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl"},se={class:"space-y-2"},oe={class:"text-4xl font-semibold"},ae={class:"flex items-center gap-2 md:flex-col md:space-x-0 md:items-start"},ie={class:"absolute left-0 translate-x-full"},ne={key:0,class:"py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"},de={class:"flex items-center gap-x-1 cursor-pointer"},re={class:"bg-white/5 p-6 rounded-3xl grid md:grid-cols-2 gap-y-4 gap-x-20 mt-6"},le={class:"space-y-4"},me={class:"flex items-center justify-between"},ce={class:"font-semibold"},fe={class:"flex items-center justify-between"},ue={class:"text-muted-foreground"},pe={class:"font-semibold"},ve={class:"flex items-center justify-between"},_e={class:"font-semibold"},ge={class:"space-y-4"},be={class:"flex items-center justify-between"},ye={class:"font-semibold"},xe={class:"flex items-center justify-between"},he={class:"font-semibold"},we={class:"flex items-center justify-between"},Me={class:"font-semibold"},De={class:"p-6 border bg-white/5 rounded-3xl mt-8"},Ae=G({__name:"event-earnings",setup(Ce){const V=L(),q=W(()=>V.params.reference),{data:a,status:l,error:A}=U(`/wallets/event/history/${q.value}`);J({title:()=>{var o,t;return((t=(o=a.value)==null?void 0:o.data)==null?void 0:t.title)??"Earnings"}});const r=K(!1),R=async o=>{await navigator.clipboard.writeText(o),r.value=!0,await Z(1200),r.value=!1};return(o,t)=>{const z=I,H=Y;return T(),B("div",ee,[n(z,{to:"/wallet",class:"fixed top-20"}),n(H,{loading:s(l)==="pending",error:s(A)},{default:O(()=>{var m,c,f,u,p,v,_,g,b,y,x,h,w,M,D,C,j,k,E,F;return[e("div",te,[e("div",se,[t[1]||(t[1]=e("div",{class:"text-[#38F08D]"},"EVENT EARNINGS",-1)),e("div",oe," ₦"+i(("formatMoney"in o?o.formatMoney:s(d))(((c=(m=s(a))==null?void 0:m.data)==null?void 0:c.earning)??0)),1)]),e("div",ae,[t[2]||(t[2]=e("div",{class:"text-muted-foreground"},"Event name",-1)),e("div",null,i(((u=(f=s(a))==null?void 0:f.data)==null?void 0:u.title)??""),1)]),e("div",{class:"flex items-center gap-2 md:flex-col md:space-x-0 md:items-start relative",onClick:t[0]||(t[0]=je=>{var N,S;return R(((S=(N=s(a))==null?void 0:N.data)==null?void 0:S.reference)??"")})},[e("div",ie,[s(r)?(T(),B("div",ne," Copied ")):P("",!0)]),t[3]||(t[3]=e("div",{class:"text-muted-foreground"},"Transaction id",-1)),e("div",de,[n(s(X),{class:"size-4"}),e("span",null,i(((v=(p=s(a))==null?void 0:p.data)==null?void 0:v.reference)??""),1)])])]),e("div",re,[e("div",le,[e("div",me,[t[4]||(t[4]=e("div",{class:"text-muted-foreground"},"Amount earned",-1)),e("div",ce," ₦"+i(("formatMoney"in o?o.formatMoney:s(d))(((g=(_=s(a))==null?void 0:_.data)==null?void 0:g["amount earned"])??0)),1)]),e("div",fe,[e("div",ue," Commissions (-"+i(((y=(b=s(a))==null?void 0:b.data)==null?void 0:y.commission_percent)??0)+" %) ",1),e("div",pe," -₦"+i(("formatMoney"in o?o.formatMoney:s(d))(((h=(x=s(a))==null?void 0:x.data)==null?void 0:h.commission)??0)),1)]),e("div",ve,[t[5]||(t[5]=e("div",{class:"text-muted-foreground"},"Withdrawable balance",-1)),e("div",_e," ₦"+i(("formatMoney"in o?o.formatMoney:s(d))(((w=s(a))==null?void 0:w.data.earning)??0)),1)])]),e("div",ge,[e("div",be,[t[6]||(t[6]=e("div",{class:"text-muted-foreground"},"Date",-1)),e("div",ye,i(("useDateFormat"in o?o.useDateFormat:s($))(((D=(M=s(a))==null?void 0:M.data)==null?void 0:D.date)??"","YY-MM-DD")),1)]),e("div",xe,[t[7]||(t[7]=e("div",{class:"text-muted-foreground"},"Time",-1)),e("div",he,i(("useDateFormat"in o?o.useDateFormat:s($))(((j=(C=s(a))==null?void 0:C.data)==null?void 0:j.date)??"","HH:mm")),1)]),e("div",we,[t[8]||(t[8]=e("div",{class:"text-muted-foreground"},"Status",-1)),e("div",Me,i(((E=(k=s(a))==null?void 0:k.data)==null?void 0:E.status)??""),1)])])]),e("div",De,[t[9]||(t[9]=e("div",{class:"text-2xl font-semibold mb-6"},"Event Requests",-1)),n(Q,{loading:s(l)==="pending",event_requests:((F=s(a))==null?void 0:F.data.history)??[],disabled:""},null,8,["loading","event_requests"])])]}),_:1},8,["loading","error"])])}}});export{Ae as default};
