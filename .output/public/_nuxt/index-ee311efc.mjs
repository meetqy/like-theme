import{u as ce,x as te,z as fe,k as x,am as pe,v as y,w as I,p as de,an as ve,ao as _e,ap as me,i as L,aq as C}from"./entry-0effd9e2.mjs";var Q;const T=typeof window!="undefined",ge=e=>typeof e=="function",Oe=e=>typeof e=="string",E=()=>{};T&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():ce(e)}function W(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const re=e=>e();function he(e,r={}){let t,n;return o=>{const s=P(e),l=P(r.maxWait);if(t&&clearTimeout(t),s<=0||l!==void 0&&l<=0)return n&&(clearTimeout(n),n=null),o();l&&!n&&(n=setTimeout(()=>{t&&clearTimeout(t),n=null,o()},l)),t=setTimeout(()=>{n&&clearTimeout(n),n=null,o()},s)}}function we(e,r=!0,t=!0){let n=0,a,o=!0;const s=()=>{a&&(clearTimeout(a),a=void 0)};return i=>{const c=P(e),f=Date.now()-n;if(s(),c<=0)return n=Date.now(),i();f>c&&(t||!o)?(n=Date.now(),i()):r&&(a=setTimeout(()=>{n=Date.now(),o=!0,s(),i()},c)),!t&&!a&&(a=setTimeout(()=>o=!0,c)),o=!1}}function ye(e=re){const r=y(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...o)=>{r.value&&e(...o)}}}function Pe(e){return e}function ne(e){return ve()?(_e(e),!0):!1}function be(e,r=200,t={}){return W(he(r,t),e)}function Se(e,r=200,t=!1,n=!0){return W(we(r,t,n),e)}function $e(e,r=!0){te()?de(e):r?e():x(e)}function ae(e,r=!0){te()?fe(e):r?e():x(e)}function Ot(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=pe(e),o=y(e);function s(l){if(arguments.length)return o.value=l,o.value;{const i=P(t);return o.value=o.value===i?P(n):i,o.value}}return a?s:[o,s]}var H=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Ie=(e,r)=>{var t={};for(var n in e)je.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&H)for(var n of H(e))r.indexOf(n)<0&&Ee.call(e,n)&&(t[n]=e[n]);return t};function Te(e,r,t={}){const n=t,{eventFilter:a=re}=n,o=Ie(n,["eventFilter"]);return I(e,W(a,r),o)}var De=Object.defineProperty,Ne=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,V=(e,r,t)=>r in e?De(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Le=(e,r)=>{for(var t in r||(r={}))oe.call(r,t)&&V(e,t,r[t]);if(F)for(var t of F(r))se.call(r,t)&&V(e,t,r[t]);return e},Ce=(e,r)=>Ne(e,Fe(r)),Me=(e,r)=>{var t={};for(var n in e)oe.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&F)for(var n of F(e))r.indexOf(n)<0&&se.call(e,n)&&(t[n]=e[n]);return t};function Ae(e,r,t={}){const n=t,{eventFilter:a}=n,o=Me(n,["eventFilter"]),{eventFilter:s,pause:l,resume:i,isActive:c}=ye(a);return{stop:Te(e,r,Ce(Le({},o),{eventFilter:s})),pause:l,resume:i,isActive:c}}function xe(e){var r;const t=P(e);return(r=t==null?void 0:t.$el)!=null?r:t}const j=T?window:void 0;T&&window.document;T&&window.navigator;T&&window.location;function le(...e){let r,t,n,a;if(Oe(e[0])?([t,n,a]=e,r=j):[r,t,n,a]=e,!r)return E;let o=E;const s=I(()=>xe(r),i=>{o(),i&&(i.addEventListener(t,n,a),o=()=>{i.removeEventListener(t,n,a),o=E})},{immediate:!0,flush:"post"}),l=()=>{s(),o()};return ne(l),l}function We(e,r=!1){const t=y(),n=()=>t.value=Boolean(e());return n(),ae(n,r),t}function Qe(e,r={}){const{window:t=j}=r,n=We(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=y(!1),s=()=>{!n.value||(a||(a=t.matchMedia(e)),o.value=a.matches)};return $e(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),ne(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}const M=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A="__vueuse_ssr_handlers__";M[A]=M[A]||{};const He=M[A];function ie(e,r){return He[e]||r}function Ve(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Re=Object.defineProperty,R=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?Re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,J=(e,r)=>{for(var t in r||(r={}))Be.call(r,t)&&B(e,t,r[t]);if(R)for(var t of R(r))Je.call(r,t)&&B(e,t,r[t]);return e};const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function ze(e,r,t,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:i=!0,mergeDefaults:c=!1,shallow:f,window:m=j,eventFilter:v,onError:h=u=>{console.error(u)}}=n,g=(f?me:y)(r);if(!t)try{t=ie("getDefaultStorage",()=>{var u;return(u=j)==null?void 0:u.localStorage})()}catch(u){h(u)}if(!t)return g;const d=P(r),O=Ve(d),_=(a=n.serializer)!=null?a:ke[O],{pause:p,resume:b}=Ae(g,()=>S(g.value),{flush:o,deep:s,eventFilter:v});return m&&l&&le(m,"storage",D),D(),g;function S(u){try{u==null?t.removeItem(e):t.setItem(e,_.write(u))}catch(w){h(w)}}function $(u){if(!(u&&u.key!==e)){p();try{const w=u?u.newValue:t.getItem(e);if(w==null)return i&&d!==null&&t.setItem(e,_.write(d)),d;if(!u&&c){const N=_.read(w);return ge(c)?c(N,d):O==="object"&&!Array.isArray(N)?J(J({},d),N):N}else return typeof w!="string"?w:_.read(w)}catch(w){h(w)}finally{b()}}}function D(u){u&&u.key!==e||(g.value=$(u))}}function ue(e){return Qe("(prefers-color-scheme: dark)",e)}var Ue=Object.defineProperty,k=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ke=(e,r)=>{for(var t in r||(r={}))qe.call(r,t)&&z(e,t,r[t]);if(k)for(var t of k(r))Ge.call(r,t)&&z(e,t,r[t]);return e};function Xe(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:a=j,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:i,emitAuto:c}=e,f=Ke({auto:"",light:"light",dark:"dark"},e.modes||{}),m=ue({window:a}),v=L(()=>m.value?"dark":"light"),h=i||(s==null?y(n):ze(s,n,o,{window:a,listenToStorageChanges:l})),g=L({get(){return h.value==="auto"&&!c?v.value:h.value},set(p){h.value=p}}),d=ie("updateHTMLAttrs",(p,b,S)=>{const $=a==null?void 0:a.document.querySelector(p);if(!!$)if(b==="class"){const D=S.split(/\s/g);Object.values(f).flatMap(u=>(u||"").split(/\s/g)).filter(Boolean).forEach(u=>{D.includes(u)?$.classList.add(u):$.classList.remove(u)})}else $.setAttribute(b,S)});function O(p){var b;const S=p==="auto"?v.value:p;d(r,t,(b=f[S])!=null?b:S)}function _(p){e.onChanged?e.onChanged(p,O):O(p)}return I(g,_,{flush:"post",immediate:!0}),c&&I(v,()=>_(g.value),{flush:"post"}),ae(()=>_(g.value)),g}var Ye=Object.defineProperty,Ze=Object.defineProperties,et=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,q=(e,r,t)=>r in e?Ye(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,nt=(e,r)=>{for(var t in r||(r={}))tt.call(r,t)&&q(e,t,r[t]);if(U)for(var t of U(r))rt.call(r,t)&&q(e,t,r[t]);return e},at=(e,r)=>Ze(e,et(r));function ht(e={}){const{valueDark:r="dark",valueLight:t="",window:n=j}=e,a=Xe(at(nt({},e),{onChanged:(l,i)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,l==="dark"):i(l)},modes:{dark:r,light:t}})),o=ue({window:n});return L({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}function ot(e,r={}){const{throttle:t=0,idle:n=200,onStop:a=E,onScroll:o=E,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0}}=r,i=y(0),c=y(0),f=y(!1),m=C({left:!0,right:!1,top:!0,bottom:!1}),v=C({left:!1,right:!1,top:!1,bottom:!1}),h=be(d=>{f.value=!1,v.left=!1,v.right=!1,v.top=!1,v.bottom=!1,a(d)},t+n),g=d=>{const O=d.target===document?d.target.documentElement:d.target,_=O.scrollLeft;v.left=_<i.value,v.right=_>i.value,m.left=_<=0+(s.left||0),m.right=_+O.clientWidth>=O.scrollWidth-(s.right||0),i.value=_;let p=O.scrollTop;d.target===document&&!p&&(p=document.body.scrollTop),v.top=p<c.value,v.bottom=p>c.value,m.top=p<=0+(s.top||0),m.bottom=p+O.clientHeight>=O.scrollHeight-(s.bottom||0),c.value=p,f.value=!0,h(d),o(d)};return le(e,"scroll",t?Se(g,t):g,l),{x:i,y:c,isScrolling:f,arrivedState:m,directions:v}}var st=Object.defineProperty,lt=Object.defineProperties,it=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?st(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,X=(e,r)=>{for(var t in r||(r={}))ut.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))ct.call(r,t)&&K(e,t,r[t]);return e},ft=(e,r)=>lt(e,it(r));function wt(e,r,t={}){var n,a;const o=(n=t.direction)!=null?n:"bottom",s=C(ot(e,ft(X({},t),{offset:X({[o]:(a=t.distance)!=null?a:0},t.offset)})));I(()=>s.arrivedState[o],async l=>{var i,c;if(l){const f=P(e),m={height:(i=f==null?void 0:f.scrollHeight)!=null?i:0,width:(c=f==null?void 0:f.scrollWidth)!=null?c:0};await r(s),t.preserveScrollPosition&&f&&x(()=>{f.scrollTo({top:f.scrollHeight-m.height,left:f.scrollWidth-m.width})})}})}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));var pt=Object.defineProperty,Z=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,ee=(e,r,t)=>r in e?pt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_t=(e,r)=>{for(var t in r||(r={}))dt.call(r,t)&&ee(e,t,r[t]);if(Z)for(var t of Z(r))vt.call(r,t)&&ee(e,t,r[t]);return e};const mt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};_t({linear:Pe},mt);export{wt as a,ot as b,ht as c,Ot as d,Xe as e,ze as u};
