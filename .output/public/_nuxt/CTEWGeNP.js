import{f as F,J as N,r as v,x as u,s as p}from"./C9o7SX3v.js";const k=()=>{const{$repo:{event:l,wallet:q},$config:{public:{APP_BASE_URL:R}}}=F(),{refreshNotifications:f}=N(),w=v(!1),y=v(null),g=v(!1),c=v(!1),_=v(!1);return{fetchEventRequests:async e=>await l.getEventRequests(e),endEvent:async e=>{var n;try{w.value=!0;const a=await l.endEvent(e);f(),w.value=!1,a.data&&u(`/events/${e}/event-earnings`)}catch(a){const r=a;w.value=!1,p({title:((n=r==null?void 0:r.data)==null?void 0:n.message)??"Failed to end event",variant:"warning"})}},ending:w,updateEventRequest:async(e,n,a)=>{var r;try{y.value=n,g.value=!0;const t=await l.updateEventRequest(e,n);f(),p({title:t.message??"Updated"}),g.value=!1,y.value=null,t.data&&(a==null||a())}catch(t){const s=t;y.value=null,g.value=!1,p({title:((r=s==null?void 0:s.data)==null?void 0:r.message)??"Failed to update event",variant:"warning"})}},update_status:y,updating:g,createEventRequest:async(e,n)=>{var a,r,t,s;try{c.value=!0;const i=await l.createRequest(e);f();const d=Number(i.data.price);return d?(c.value=!1,u(`/${n}/${e.event_id}/${i.data.id}/make-payment`)):(c.value=!1,u(`/${(r=(a=i.data)==null?void 0:a.host)==null?void 0:r.slug}`))}catch(o){const i=o;c.value=!1,p({title:((s=i==null?void 0:i.data)==null?void 0:s.message)??"Failed to create request",variant:"warning"})}},creating:c,payForRequest:async(e,n,a)=>{var r;try{let t="gateway";const s=Number(e.price);a&&(t=a>=s?"wallet":"split");const o=new URL(`${R}/${n}/${e.event_id}/${e.id}/request-receipt`),i=t==="wallet"?{redirect_url:o.href,type:t}:{redirect_url:o.href,type:t,gateway:"paystack"};_.value=!0;const d=await l.payForRequest(i,e.id);return _.value=!1,d.data.redirect_url?await u(d.data.redirect_url,{external:!0}):(f(),u(`/${n}/${e.event_id}/${e.id}/request-receipt`))}catch(t){const s=t;_.value=!1,p({title:((r=s==null?void 0:s.data)==null?void 0:r.message)??"Failed to pay for request",variant:"warning"})}},paying:_}};export{k as u};
