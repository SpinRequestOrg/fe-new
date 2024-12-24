import{_ as O}from"./DEpZhgJv.js";import{_ as Q}from"./Bm8eQul7.js";import{h as I,k as J,j as p,m as K,o as d,c as u,b as a,n as e,w as $,a as n,t as r,z as f,G as j,H as B,v as x,d as W,_ as X}from"./DhYnNVen.js";import{_ as Z}from"./DFkJxMWH.js";import{_ as ee}from"./DQ9fuHlD.js";import{u as C}from"./CCe5esQ8.js";import{u as te}from"./CS5VJ2Mv.js";import"./Diey_nMH.js";import"./B3_urLfg.js";import"./B-tbmP_b.js";const se={class:"container py-10"},ne={class:"max-w-full w-[400px] mx-auto"},oe={class:"bg-white/5 border rounded-2xl p-6"},ae={class:"pb-6 space-y-1 text-center border-b"},re={class:"font-bold text-primary text-4xl"},ie={class:"my-6 space-y-4"},le={class:"flex items-center justify-between"},me={key:0,class:"flex items-center justify-between"},de={key:1,class:"flex items-center justify-between"},ue={key:2,class:"flex items-center justify-between"},ce={class:"flex items-center justify-between"},pe={class:"bg-white/5 border pt-1 pb-8 rounded-tr-3xl rounded-tl-3xl"},fe={class:"flex justify-center items-center gap-x-2"},Me=I({__name:"make-payment",setup(xe){const i=J(),{status:P,data:R,error:T}=C(`/requests/${i.params.request_id}`),{status:V,data:l,error:z}=C("/wallets"),o=p(()=>{var s;return(s=R.value)==null?void 0:s.data}),A=p(()=>{var s,t;return Number(((s=l.value)==null?void 0:s.wallet_balance)??0)>=Number(((t=o.value)==null?void 0:t.price)??0)}),{payForRequest:H,paying:Y}=te(),D=p(()=>{var t,m;const s=Number(((t=o.value)==null?void 0:t.price)??0)-Number(((m=l.value)==null?void 0:m.wallet_balance)??0);return s<0?0:s}),G=()=>{var s;o.value&&H(o.value,i.params.host,((s=l.value)==null?void 0:s.wallet_balance)??0)};return K({title:"Payment"}),(s,t)=>{const m=O,c=Q,L=X,U=Z;return d(),u("div",se,[a(m,{class:"fixed top-20",to:`/${e(i).params.host}/${e(i).params.event_id}/make-a-request`},null,8,["to"]),a(U,{loading:e(P)==="pending"||e(V)==="pending",error:e(T)??e(z)},{default:$(()=>{var y,v,_,g,b,w,k,h,S,E,M,N,q,F;return[n("div",ne,[t[7]||(t[7]=n("div",{class:"text-primary text-center"},"Payment",-1)),t[8]||(t[8]=n("div",{class:"text-center font-display font-semibold text-3xl my-6"}," Make payment to submit your request ",-1)),n("div",oe,[n("div",ae,[t[0]||(t[0]=n("div",{class:"text-muted-foreground text-sm"},"Total amount",-1)),n("div",re," ₦"+r(("formatMoney"in s?s.formatMoney:e(f))(((y=e(o))==null?void 0:y.price)??0)),1)]),n("div",ie,[n("div",le,[t[1]||(t[1]=n("div",{class:"text-sm text-muted-foreground"},"Request",-1)),n("div",{class:j(("cn"in s?s.cn:e(B))("px-1 rounded-[26px] flex items-center gap-x-px text-xs min-w-[120px] max-h-6",((v=e(o))==null?void 0:v.type)==="song"?"bg-[#FFEE99]/20":"bg-[#FF99F1]/20"))},[a(ee,{name:((_=e(o))==null?void 0:_.type)==="song"?"music":"mic",class:"scale-50"},null,8,["name"]),n("div",null,r(((g=e(o))==null?void 0:g.type)==="song"?"SONG":"HYPE")+" REQUEST ",1)],2)]),((b=e(o))==null?void 0:b.type)==="hype"?(d(),u("div",me,[t[2]||(t[2]=n("div",{class:"text-sm text-muted-foreground"},"Hype",-1)),a(c,{content:((w=e(o))==null?void 0:w.description)??"",class:"max-w-[50%] text-right"},null,8,["content"])])):x("",!0),((k=e(o))==null?void 0:k.type)==="song"?(d(),u("div",de,[t[3]||(t[3]=n("div",{class:"text-sm text-muted-foreground"},"Title",-1)),a(c,{content:((h=e(o))==null?void 0:h.song_title)??"",class:"max-w-[50%] text-right"},null,8,["content"])])):x("",!0),((S=e(o))==null?void 0:S.type)==="song"?(d(),u("div",ue,[t[4]||(t[4]=n("div",{class:"text-sm text-muted-foreground"},"Artsite",-1)),a(c,{content:((E=e(o))==null?void 0:E.artist)??"",class:"max-w-[50%] text-right"},null,8,["content"])])):x("",!0),n("div",ce,[t[5]||(t[5]=n("div",{class:"text-sm text-muted-foreground"},"Your nickname",-1)),n("div",null,r(((M=e(o))==null?void 0:M.nickname)??((q=(N=e(o))==null?void 0:N.audience)==null?void 0:q.stage_name)??""),1)])]),n("div",pe,[n("div",fe,[t[6]||(t[6]=n("div",{class:"text-muted-foreground"},"Spin request balance",-1)),n("div",{class:j(("cn"in s?s.cn:e(B))(e(A)?"text-[#38F08D]":"text-[#E66840]"))}," ₦"+r(("formatMoney"in s?s.formatMoney:e(f))(((F=e(l))==null?void 0:F.wallet_balance)??0)),3)])]),a(L,{size:"lg",class:"relative -translate-y-7 w-full",onClick:G,loading:e(Y)},{default:$(()=>[W(" PAY ₦"+r(("formatMoney"in s?s.formatMoney:e(f))(e(D)??0)),1)]),_:1},8,["loading"])])])]}),_:1},8,["loading","error"])])}}});export{Me as default};
