import{j as b,n as Y,aY as v,aZ as $,r as H,J as A,l as T}from"./BnLl13wx.js";function h(t){return v()?($(t),!0):!1}function u(t){return typeof t=="function"?t():Y(t)}const y=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const k=Object.prototype.toString,C=t=>k.call(t)==="[object Object]",F=()=>{};function G(t,e=!1,n="Timeout"){return new Promise((r,s)=>{setTimeout(e?()=>s(n):r,t)})}const L=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,O=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function j(t,e,n,r){let s=t<12?"AM":"PM";return r&&(s=s.split("").reduce((a,i)=>a+=`${i}.`,"")),n?s.toLowerCase():s}function f(t){const e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}function E(t,e,n={}){var r;const s=t.getFullYear(),a=t.getMonth(),i=t.getDate(),o=t.getHours(),c=t.getMinutes(),l=t.getSeconds(),m=t.getMilliseconds(),w=t.getDay(),d=(r=n.customMeridiem)!=null?r:j,S={Yo:()=>f(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>a+1,Mo:()=>f(a+1),MM:()=>`${a+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(u(n.locales),{month:"short"}),MMMM:()=>t.toLocaleDateString(u(n.locales),{month:"long"}),D:()=>String(i),Do:()=>f(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(o),Ho:()=>f(o),HH:()=>`${o}`.padStart(2,"0"),h:()=>`${o%12||12}`.padStart(1,"0"),ho:()=>f(o%12||12),hh:()=>`${o%12||12}`.padStart(2,"0"),m:()=>String(c),mo:()=>f(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(l),so:()=>f(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${m}`.padStart(3,"0"),d:()=>w,dd:()=>t.toLocaleDateString(u(n.locales),{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(u(n.locales),{weekday:"short"}),dddd:()=>t.toLocaleDateString(u(n.locales),{weekday:"long"}),A:()=>d(o,c),AA:()=>d(o,c,!1,!0),a:()=>d(o,c,!0),aa:()=>d(o,c,!0,!0)};return e.replace(O,(p,g)=>{var D,M;return(M=g??((D=S[p])==null?void 0:D.call(S)))!=null?M:p})}function R(t){if(t===null)return new Date(Number.NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(L);if(e){const n=e[2]-1||0,r=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,r)}}return new Date(t)}function I(t,e="HH:mm:ss",n={}){return b(()=>E(R(u(t)),u(e),n))}function N(t,e=1e3,n={}){const{immediate:r=!0,immediateCallback:s=!1}=n;let a=null;const i=H(!1);function o(){a&&(clearInterval(a),a=null)}function c(){i.value=!1,o()}function l(){const m=u(e);m<=0||(i.value=!0,s&&t(),o(),a=setInterval(t,m))}if(r&&y&&l(),A(e)||typeof e=="function"){const m=T(e,()=>{i.value&&y&&l()});h(m)}return h(c),{isActive:i,pause:c,resume:l}}export{C as a,h as b,N as c,y as i,F as n,G as p,u as t,I as u};
