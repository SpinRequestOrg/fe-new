import{i as L,n as M,a as R,t as g,b as k,c as V}from"./C1zSV-XI.js";import{r as T,a2 as z,l as q,j as C,aA as I,a3 as S,aC as W,n as j}from"./BxMGRyn4.js";const O=L?window:void 0;function E(t){var r;const s=g(t);return(r=s==null?void 0:s.$el)!=null?r:s}function D(...t){let r,s,o,a;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,o,a]=t,r=O):[r,s,o,a]=t,!r)return M;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const l=[],d=()=>{l.forEach(c=>c()),l.length=0},f=(c,i,u,y)=>(c.addEventListener(i,u,y),()=>c.removeEventListener(i,u,y)),n=q(()=>[E(r),g(a)],([c,i])=>{if(d(),!c)return;const u=R(i)?{...i}:i;l.push(...s.flatMap(y=>o.map(A=>f(c,y,A,u))))},{immediate:!0,flush:"post"}),v=()=>{n(),d()};return k(v),v}function x(){const t=T(!1),r=W();return r&&S(()=>{t.value=!0},r),t}function U(t){const r=x();return C(()=>(r.value,!!t()))}function Z(t,r={}){const{immediate:s=!0,fpsLimit:o=void 0,window:a=O}=r,l=T(!1),d=o?1e3/o:null;let f=0,n=null;function v(u){if(!l.value||!a)return;f||(f=u);const y=u-f;if(d&&y<d){n=a.requestAnimationFrame(v);return}f=u,t({delta:y,timestamp:u}),n=a.requestAnimationFrame(v)}function c(){!l.value&&a&&(l.value=!0,f=0,n=a.requestAnimationFrame(v))}function i(){l.value=!1,n!=null&&a&&(a.cancelAnimationFrame(n),n=null)}return s&&c(),k(i),{isActive:I(l),pause:i,resume:c}}function $(t,r={}){var s,o;const a=T(!1),l=z(null);let d=0,f=!0;if(L){const n=typeof r=="function"?{onDrop:r}:r,v=(s=n.multiple)!=null?s:!0,c=(o=n.preventDefaultForUnhandled)!=null?o:!1,i=e=>{var p,m;const w=Array.from((m=(p=e.dataTransfer)==null?void 0:p.files)!=null?m:[]);return w.length===0?null:v?w:[w[0]]},u=e=>{if(n.dataTypes){const p=j(n.dataTypes);return typeof p=="function"?p(e):p?p.some(m=>e.includes(m)):!0}return!0},y=e=>{var p,m;const w=Array.from((m=(p=e.dataTransfer)==null?void 0:p.items)!=null?m:[]),h=w.filter(b=>b.kind==="file").map(b=>b.type),F=u(h),_=v||w.filter(b=>b.kind==="file").length<=1;return F&&_},A=(e,p)=>{var m,w,h,F;if(f=y(e),!f){c&&e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none");return}e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy");const _=i(e);switch(p){case"enter":d+=1,a.value=!0,(m=n.onEnter)==null||m.call(n,null,e);break;case"over":(w=n.onOver)==null||w.call(n,null,e);break;case"leave":d-=1,d===0&&(a.value=!1),(h=n.onLeave)==null||h.call(n,null,e);break;case"drop":d=0,a.value=!1,f&&(l.value=_,(F=n.onDrop)==null||F.call(n,_,e));break}};D(t,"dragenter",e=>A(e,"enter")),D(t,"dragover",e=>A(e,"over")),D(t,"dragleave",e=>A(e,"leave")),D(t,"drop",e=>A(e,"drop"))}return{files:l,isOverDropZone:a}}function G(t,r,s={}){const{window:o=O,...a}=s;let l;const d=U(()=>o&&"ResizeObserver"in o),f=()=>{l&&(l.disconnect(),l=void 0)},n=C(()=>{const i=g(t);return Array.isArray(i)?i.map(u=>E(u)):[E(i)]}),v=q(n,i=>{if(f(),d.value&&o){l=new ResizeObserver(r);for(const u of i)u&&l.observe(u,a)}},{immediate:!0,flush:"post"}),c=()=>{f(),v()};return k(c),{isSupported:d,stop:c}}function H(t={}){const{controls:r=!1,interval:s="requestAnimationFrame"}=t,o=T(new Date),a=()=>o.value=new Date,l=s==="requestAnimationFrame"?Z(a,{immediate:!0}):V(a,s,{immediate:!0});return r?{now:o,...l}:o}export{G as a,$ as b,H as u};
