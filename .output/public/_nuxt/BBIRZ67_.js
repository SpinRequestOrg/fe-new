import{c as G,g as Y}from"./Cpj98o6Y.js";import{r as K,n as Q,x as oe}from"./DcGHPZRe.js";import{p as ae}from"./C9fG-VQ7.js";var Z={exports:{}};(function(D,M){(function(r,g){g()})(G,function(){function r(l,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function g(l,f,b){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){A(d.response,f,b)},d.onerror=function(){console.error("could not download file")},d.send()}function S(l){var f=new XMLHttpRequest;f.open("HEAD",l,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function k(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(f)}}var v=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof G=="object"&&G.global===G?G:void 0,y=v.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),A=v.saveAs||(typeof window!="object"||window!==v?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(l,f,b){var d=v.URL||v.webkitURL,P=document.createElement("a");f=f||l.name||"download",P.download=f,P.rel="noopener",typeof l=="string"?(P.href=l,P.origin===location.origin?k(P):S(P.href)?g(l,f,b):k(P,P.target="_blank")):(P.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(P.href)},4e4),setTimeout(function(){k(P)},0))}:"msSaveOrOpenBlob"in navigator?function(l,f,b){if(f=f||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(r(l,b),f);else if(S(l))g(l,f,b);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){k(d)})}}:function(l,f,b,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return g(l,f,b);var P=l.type==="application/octet-stream",_=/constructor/i.test(v.HTMLElement)||v.safari,$=/CriOS\/[\d]+/.test(navigator.userAgent);if(($||P&&_||y)&&typeof FileReader<"u"){var V=new FileReader;V.onloadend=function(){var H=V.result;H=$?H:H.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=H:location=H,d=null},V.readAsDataURL(l)}else{var W=v.URL||v.webkitURL,X=W.createObjectURL(l);d?d.location=X:location.href=X,d=null,setTimeout(function(){W.revokeObjectURL(X)},4e4)}});v.saveAs=A.saveAs=A,D.exports=A})})(Z);var ie=Z.exports;const he=Y(ie);var ee={exports:{}};(function(D){(function(M){var r=H(),g=te(),S=ne(),k=re(),v={imagePlaceholder:void 0,cacheBust:!1},y={toSvg:A,toPng:f,toJpeg:b,toBlob:d,toPixelData:l,impl:{fontFaces:S,images:k,util:r,inliner:g,options:{}}};D.exports=y;function A(n,t){return t=t||{},P(t),Promise.resolve(n).then(function(i){return $(i,t.filter,!0)}).then(V).then(W).then(o).then(function(i){return X(i,t.width||r.width(n),t.height||r.height(n))});function o(i){return t.bgcolor&&(i.style.backgroundColor=t.bgcolor),t.width&&(i.style.width=t.width+"px"),t.height&&(i.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(h){i.style[h]=t.style[h]}),i}}function l(n,t){return _(n,t||{}).then(function(o){return o.getContext("2d").getImageData(0,0,r.width(n),r.height(n)).data})}function f(n,t){return _(n,t||{}).then(function(o){return o.toDataURL()})}function b(n,t){return t=t||{},_(n,t).then(function(o){return o.toDataURL("image/jpeg",t.quality||1)})}function d(n,t){return _(n,t||{}).then(r.canvasToBlob)}function P(n){typeof n.imagePlaceholder>"u"?y.impl.options.imagePlaceholder=v.imagePlaceholder:y.impl.options.imagePlaceholder=n.imagePlaceholder,typeof n.cacheBust>"u"?y.impl.options.cacheBust=v.cacheBust:y.impl.options.cacheBust=n.cacheBust}function _(n,t){return A(n,t).then(r.makeImage).then(r.delay(100)).then(function(i){var h=o(n);return h.getContext("2d").drawImage(i,0,0),h});function o(i){var h=document.createElement("canvas");if(h.width=t.width||r.width(i),h.height=t.height||r.height(i),t.bgcolor){var s=h.getContext("2d");s.fillStyle=t.bgcolor,s.fillRect(0,0,h.width,h.height)}return h}}function $(n,t,o){if(!o&&t&&!t(n))return Promise.resolve();return Promise.resolve(n).then(i).then(function(a){return h(n,a,t)}).then(function(a){return s(n,a)});function i(a){return a instanceof HTMLCanvasElement?r.makeImage(a.toDataURL()):a.cloneNode(!1)}function h(a,u,T){var B=a.childNodes;if(B.length===0)return Promise.resolve(u);return w(u,r.asArray(B),T).then(function(){return u});function w(N,U,E){var L=Promise.resolve();return U.forEach(function(O){L=L.then(function(){return $(O,E)}).then(function(R){R&&N.appendChild(R)})}),L}}function s(a,u){if(!(u instanceof Element))return u;return Promise.resolve().then(T).then(B).then(w).then(N).then(function(){return u});function T(){U(window.getComputedStyle(a),u.style);function U(E,L){E.cssText?L.cssText=E.cssText:O(E,L);function O(R,j){r.asArray(R).forEach(function(e){j.setProperty(e,R.getPropertyValue(e),R.getPropertyPriority(e))})}}}function B(){[":before",":after"].forEach(function(E){U(E)});function U(E){var L=window.getComputedStyle(a,E),O=L.getPropertyValue("content");if(O===""||O==="none")return;var R=r.uid();u.className=u.className+" "+R;var j=document.createElement("style");j.appendChild(e(R,E,L)),u.appendChild(j);function e(c,p,m){var x="."+c+":"+p,C=m.cssText?J(m):z(m);return document.createTextNode(x+"{"+C+"}");function J(I){var F=I.getPropertyValue("content");return I.cssText+" content: "+F+";"}function z(I){return r.asArray(I).map(F).join("; ")+";";function F(q){return q+": "+I.getPropertyValue(q)+(I.getPropertyPriority(q)?" !important":"")}}}}}function w(){a instanceof HTMLTextAreaElement&&(u.innerHTML=a.value),a instanceof HTMLInputElement&&u.setAttribute("value",a.value)}function N(){u instanceof SVGElement&&(u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u instanceof SVGRectElement&&["width","height"].forEach(function(U){var E=u.getAttribute(U);E&&u.style.setProperty(U,E)}))}}}function V(n){return S.resolveAll().then(function(t){var o=document.createElement("style");return n.appendChild(o),o.appendChild(document.createTextNode(t)),n})}function W(n){return k.inlineAll(n).then(function(){return n})}function X(n,t,o){return Promise.resolve(n).then(function(i){return i.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(i)}).then(r.escapeXhtml).then(function(i){return'<foreignObject x="0" y="0" width="100%" height="100%">'+i+"</foreignObject>"}).then(function(i){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+o+'">'+i+"</svg>"}).then(function(i){return"data:image/svg+xml;charset=utf-8,"+i})}function H(){return{escape:N,parseExtension:t,mimeType:o,dataAsUrl:w,isDataUrl:i,canvasToBlob:s,resolveUrl:a,getAndEncode:B,uid:u(),delay:U,asArray:E,escapeXhtml:L,makeImage:T,width:O,height:R};function n(){var e="application/font-woff",c="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:c,jpeg:c,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var c=/\.([^\.\/]*?)$/g.exec(e);return c?c[1]:""}function o(e){var c=t(e).toLowerCase();return n()[c]||""}function i(e){return e.search(/^(data:)/)!==-1}function h(e){return new Promise(function(c){for(var p=window.atob(e.toDataURL().split(",")[1]),m=p.length,x=new Uint8Array(m),C=0;C<m;C++)x[C]=p.charCodeAt(C);c(new Blob([x],{type:"image/png"}))})}function s(e){return e.toBlob?new Promise(function(c){e.toBlob(c)}):h(e)}function a(e,c){var p=document.implementation.createHTMLDocument(),m=p.createElement("base");p.head.appendChild(m);var x=p.createElement("a");return p.body.appendChild(x),m.href=c,x.href=e,x.href}function u(){var e=0;return function(){return"u"+c()+e++;function c(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function T(e){return new Promise(function(c,p){var m=new Image;m.onload=function(){c(m)},m.onerror=p,m.src=e})}function B(e){var c=3e4;return y.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime()),new Promise(function(p){var m=new XMLHttpRequest;m.onreadystatechange=J,m.ontimeout=z,m.responseType="blob",m.timeout=c,m.open("GET",e,!0),m.send();var x;if(y.impl.options.imagePlaceholder){var C=y.impl.options.imagePlaceholder.split(/,/);C&&C[1]&&(x=C[1])}function J(){if(m.readyState===4){if(m.status!==200){x?p(x):I("cannot fetch resource: "+e+", status: "+m.status);return}var F=new FileReader;F.onloadend=function(){var q=F.result.split(/,/)[1];p(q)},F.readAsDataURL(m.response)}}function z(){x?p(x):I("timeout of "+c+"ms occured while fetching resource: "+e)}function I(F){console.error(F),p("")}})}function w(e,c){return"data:"+c+";base64,"+e}function N(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function U(e){return function(c){return new Promise(function(p){setTimeout(function(){p(c)},e)})}}function E(e){for(var c=[],p=e.length,m=0;m<p;m++)c.push(e[m]);return c}function L(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function O(e){var c=j(e,"border-left-width"),p=j(e,"border-right-width");return e.scrollWidth+c+p}function R(e){var c=j(e,"border-top-width"),p=j(e,"border-bottom-width");return e.scrollHeight+c+p}function j(e,c){var p=window.getComputedStyle(e).getPropertyValue(c);return parseFloat(p.replace("px",""))}}function te(){var n=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:h,shouldProcess:t,impl:{readUrls:o,inline:i}};function t(s){return s.search(n)!==-1}function o(s){for(var a=[],u;(u=n.exec(s))!==null;)a.push(u[1]);return a.filter(function(T){return!r.isDataUrl(T)})}function i(s,a,u,T){return Promise.resolve(a).then(function(w){return u?r.resolveUrl(w,u):w}).then(T||r.getAndEncode).then(function(w){return r.dataAsUrl(w,r.mimeType(a))}).then(function(w){return s.replace(B(a),"$1"+w+"$3")});function B(w){return new RegExp(`(url\\(['"]?)(`+r.escape(w)+`)(['"]?\\))`,"g")}}function h(s,a,u){if(T())return Promise.resolve(s);return Promise.resolve(s).then(o).then(function(B){var w=Promise.resolve(s);return B.forEach(function(N){w=w.then(function(U){return i(U,N,a,u)})}),w});function T(){return!t(s)}}}function ne(){return{resolveAll:n,impl:{readAll:t}};function n(){return t().then(function(o){return Promise.all(o.map(function(i){return i.resolve()}))}).then(function(o){return o.join(`
`)})}function t(){return Promise.resolve(r.asArray(document.styleSheets)).then(i).then(o).then(function(s){return s.map(h)});function o(s){return s.filter(function(a){return a.type===CSSRule.FONT_FACE_RULE}).filter(function(a){return g.shouldProcess(a.style.getPropertyValue("src"))})}function i(s){var a=[];return s.forEach(function(u){try{r.asArray(u.cssRules||[]).forEach(a.push.bind(a))}catch(T){console.log("Error while reading CSS rules from "+u.href,T.toString())}}),a}function h(s){return{resolve:function(){var u=(s.parentStyleSheet||{}).href;return g.inlineAll(s.cssText,u)},src:function(){return s.style.getPropertyValue("src")}}}}}function re(){return{inlineAll:t,impl:{newImage:n}};function n(o){return{inline:i};function i(h){return r.isDataUrl(o.src)?Promise.resolve():Promise.resolve(o.src).then(h||r.getAndEncode).then(function(s){return r.dataAsUrl(s,r.mimeType(o.src))}).then(function(s){return new Promise(function(a,u){o.onload=a,o.onerror=u,o.src=s})})}}function t(o){if(!(o instanceof Element))return Promise.resolve(o);return i(o).then(function(){return o instanceof HTMLImageElement?n(o).inline():Promise.all(r.asArray(o.childNodes).map(function(h){return t(h)}))});function i(h){var s=h.style.getPropertyValue("background");return s?g.inlineAll(s).then(function(a){h.style.setProperty("background",a,h.style.getPropertyPriority("background"))}).then(function(){return h}):Promise.resolve(h)}}}})()})(ee);var ue=ee.exports;const ce=Y(ue),me=(D,M,r=[])=>{const g=K(!1),S=K();return{blob:S,converting:g,convertNodeToImage:async()=>{try{g.value=!0;const v=document.querySelector(D),y=v?await ce.toBlob(v,{filter(A){return!(r!=null&&r.includes(A==null?void 0:A.id))}}):null;g.value=!1,y&&(S.value=y,M==null||M(y))}catch(v){g.value=!1,console.error("FAILED TO CONVERT NODE",v)}}}},de=(D,M)=>{const r=decodeURIComponent(Q(D)),g=Q(M),S=K(!1),k=()=>{const b=`https://www.facebook.com/sharer/sharer.php?u=${r}`;window.open(b,"_blank","width=600,height=400")},v=`https://x.com/intent/post?url=${r}&feature=shared&text=${g??""}&via=spinrequest`,y=`https://api.whatsapp.com/send?text=${g}%20${r}&feature=shared&type=custom_url&app_absent=0`,A=`mailto:?subject=${g}&body=${r}`;return{shareToFacebook:k,copyLink:async()=>{await navigator.clipboard.writeText(r),S.value=!0,await ae(1200),S.value=!1},externalNavigate:b=>oe(b,{external:!0,open:{target:"_blank"}}),twitterShareLink:v,whatsappShareLink:y,emailShareLink:A,copied:S}};export{ie as F,de as a,he as s,me as u};
