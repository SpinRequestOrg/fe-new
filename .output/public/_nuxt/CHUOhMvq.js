import{_ as x}from"./TLOt_h-d.js";import{_ as g}from"./CdCIgyyf.js";import{_ as h}from"./CSwswHNn.js";import{u as b}from"./CqKQTkTU.js";import{h as y,j as n,m as q,o as w,c as C,a as t,b as d,w as S,n as o,t as i}from"./DcGHPZRe.js";import"./BlTnFNY1.js";import"./DAiEwzdI.js";import"./C0fWSKzl.js";const B={class:"container py-20"},R={class:"flex gap-x-2 items-center fixed top-24"},k={class:"grid grid-cols-[repeat(auto-fill,_minmax(369px,_1fr))] gap-6"},E={class:"bg-white/5 p-6 rounded-2xl border space-y-2"},T={class:"text-2xl font-semibold"},$={class:"bg-white/5 p-6 rounded-2xl border space-y-2"},H={class:"text-2xl font-semibold"},N={class:"bg-white/5 p-6 rounded-2xl border space-y-2"},P={class:"text-2xl font-semibold"},V={class:"bg-white/5 p-6 rounded-2xl border mt-10"},J=y({__name:"index",setup(j){const{data:r,status:l,error:_}=b("/past/events"),a=n(()=>{var e;return(e=r.value)==null?void 0:e.data}),c=n(()=>{var e,s;return((s=(e=a.value)==null?void 0:e.event_details)==null?void 0:s.length)??0}),p=n(()=>{var e;return((e=a.value)==null?void 0:e.song_requests_count)??0}),m=n(()=>{var e;return((e=a.value)==null?void 0:e.hype_requests_count)??0});return q({title:"Previous events"}),(e,s)=>{const v=x,f=g;return w(),C("div",B,[t("div",R,[d(v,{to:"/dashboard"}),s[0]||(s[0]=t("div",{class:"text-2xl font-medium font-display"},"Previous events",-1))]),d(f,{loading:o(l)==="pending",error:o(_)},{default:S(()=>{var u;return[t("div",k,[t("div",E,[s[1]||(s[1]=t("div",{class:"text-muted-foreground"},"Total Events",-1)),t("div",T,i(o(c)),1)]),t("div",$,[s[2]||(s[2]=t("div",{class:"text-muted-foreground"},"Total Song Requests",-1)),t("div",H,i(o(p)),1)]),t("div",N,[s[3]||(s[3]=t("div",{class:"text-muted-foreground"},"Total Hype Request",-1)),t("div",P,i(o(m)),1)])]),t("div",V,[d(h,{event_history:(u=o(r))==null?void 0:u.data,loading:o(l)==="pending",disabled:""},null,8,["event_history","loading"])])]}),_:1},8,["loading","error"])])}}});export{J as default};
