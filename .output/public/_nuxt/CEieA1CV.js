import{f as d,r as o,x as f,s as n}from"./ZzYuc5FK.js";const m=()=>{const{$repo:{event:u}}=d(),l=o(!1),r=o(null),v=o(!1),c=o(!1);return{fetchEventRequests:async a=>await u.getEventRequests(a),endEvent:async a=>{var t;try{l.value=!0;const e=await u.endEvent(a);l.value=!1,e.data&&f("/events/summary")}catch(e){l.value=!1,n({title:((t=e==null?void 0:e.data)==null?void 0:t.message)??"Failed to end event",variant:"warning"})}},ending:l,updateEventRequest:async(a,t,e)=>{var i;try{r.value=t,v.value=!0;const s=await u.updateEventRequest(a,t);n({title:s.message??"Updated"}),v.value=!1,r.value=null,s.data&&(e==null||e())}catch(s){r.value=null,v.value=!1,n({title:((i=s==null?void 0:s.data)==null?void 0:i.message)??"Failed to update event",variant:"warning"})}},update_status:r,updating:v,createEventRequest:async a=>{var t;try{c.value=!0;const e=await u.createRequest(a);n({title:e.message??"Request created and added to host list"}),c.value=!1,console.log({response:e})}catch(e){c.value=!1,n({title:((t=e==null?void 0:e.data)==null?void 0:t.message)??"Failed to create request",variant:"warning"})}},creating:c}};export{m as u};
