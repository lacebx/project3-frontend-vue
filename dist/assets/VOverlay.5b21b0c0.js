var Ge=Object.defineProperty;var J=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Ee=(e,n,t)=>n in e?Ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,B=(e,n)=>{for(var t in n||(n={}))Se.call(n,t)&&Ee(e,t,n[t]);if(J)for(var t of J(n))xe.call(n,t)&&Ee(e,t,n[t]);return e};var Oe=(e,n)=>{var t={};for(var o in e)Se.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&J)for(var o of J(e))n.indexOf(o)<0&&xe.call(e,o)&&(t[o]=e[o]);return t};import{aS as Ne,b8 as _e,i as X,a0 as j,aB as z,aD as de,aa as F,b9 as Xe,ba as ke,bb as ie,bc as le,bd as Ce,U as C,a5 as me,ak as V,be as Pe,ac as I,ad as Ae,a8 as ye,bf as He,bg as Ke,aC as ae,am as Ie,bh as Te,$,aq as Qe,a7 as G,az as Ze,a9 as Je,bi as Ve,aj as et,bj as tt,b1 as nt,m as ot,x as at,E as rt,aE as it,h as lt,a2 as st,H as ct,as as ut,ap as ft,al as vt,M as dt,ab as mt,bk as yt,u as gt,e as W,bl as ht,aL as bt,b as wt,aQ as Et,W as St,F as xt,b7 as Ot,bm as kt}from"./index.fcfdb788.js";import{n as Ct,B as se,p as pe,o as Pt,j as At,s as Tt}from"./VField.6431dcf7.js";const ee=new WeakMap;function pt(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const o=_e(t),a=ee.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),ee.has(e)||ee.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Lt(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const o=_e(t),a=ee.get(e);a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function De(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Bt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Mt(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ge(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Mt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Rt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ft(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Le(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:i},n)}return ce({x:n.width/2,y:n.height/2},n)}const We={static:Ht,connected:Vt},Nt=X({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in We},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function _t(e,n){const t=j({}),o=j();z&&de(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var c,r;F(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(c=e.locationStrategy(n,e,t))==null?void 0:c.updateLocation:o.value=(r=We[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var c;(c=o.value)==null||c.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ht(){}function It(e,n){const t=Pt(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Vt(e,n,t){(Array.isArray(e.target.value)||Rt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Xe(()=>{const d=ke(n.location,e.isRtl.value),f=n.origin==="overlap"?d:n.origin==="auto"?ie(d):ke(n.origin,e.isRtl.value);return d.side===f.side&&d.align===le(f).align?{preferredAnchor:Ce(d),preferredOrigin:Ce(f)}:{preferredAnchor:d,preferredOrigin:f}}),[c,r,u,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>C(()=>{const f=parseFloat(n[d]);return isNaN(f)?1/0:f})),s=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let w=!1;const O=new ResizeObserver(()=>{w&&x()});F([e.target,e.contentEl],(d,f)=>{let[P,A]=d,[E,b]=f;E&&!Array.isArray(E)&&O.unobserve(E),P&&!Array.isArray(P)&&O.observe(P),b&&O.unobserve(b),A&&O.observe(A)},{immediate:!0}),V(()=>{O.disconnect()});function x(){if(w=!1,requestAnimationFrame(()=>w=!0),!e.target.value||!e.contentEl.value)return;const d=Ct(e.target.value),f=It(e.contentEl.value,e.isRtl.value),P=ne(e.contentEl.value),A=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=P.reduce((S,h)=>{const m=h.getBoundingClientRect(),g=new se({x:h===document.documentElement?0:m.x,y:h===document.documentElement?0:m.y,width:h.clientWidth,height:h.clientHeight});return S?new se({x:Math.max(S.left,g.left),y:Math.max(S.top,g.top),width:Math.min(S.right,g.right)-Math.max(S.left,g.left),height:Math.min(S.bottom,g.bottom)-Math.max(S.top,g.top)}):g},void 0);E.x+=A,E.y+=A,E.width-=A*2,E.height-=A*2;let b={anchor:a.value,origin:i.value};function p(S){const h=new se(f),m=Le(S.anchor,d),g=Le(S.origin,h);let{x:_,y:H}=Ft(m,g);switch(S.anchor.side){case"top":H-=s.value[0];break;case"bottom":H+=s.value[0];break;case"left":_-=s.value[0];break;case"right":_+=s.value[0];break}switch(S.anchor.align){case"top":H-=s.value[1];break;case"bottom":H+=s.value[1];break;case"left":_-=s.value[1];break;case"right":_+=s.value[1];break}return h.x+=_,h.y+=H,h.width=Math.min(h.width,u.value),h.height=Math.min(h.height,v.value),{overflows:pe(h,E),x:_,y:H}}let M=0,N=0;const k={x:0,y:0},l={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:S,y:h,overflows:m}=p(b);M+=S,N+=h,f.x+=S,f.y+=h;{const g=Pe(b.anchor),_=m.x.before||m.x.after,H=m.y.before||m.y.after;let q=!1;if(["x","y"].forEach(T=>{if(T==="x"&&_&&!l.x||T==="y"&&H&&!l.y){const D={anchor:B({},b.anchor),origin:B({},b.origin)},Y=T==="x"?g==="y"?le:ie:g==="y"?ie:le;D.anchor=Y(D.anchor),D.origin=Y(D.origin);const{overflows:U}=p(D);(U[T].before<=m[T].before&&U[T].after<=m[T].after||U[T].before+U[T].after<(m[T].before+m[T].after)/2)&&(b=D,q=l[T]=!0)}}),q)continue}m.x.before&&(M+=m.x.before,f.x+=m.x.before),m.x.after&&(M-=m.x.after,f.x-=m.x.after),m.y.before&&(N+=m.y.before,f.y+=m.y.before),m.y.after&&(N-=m.y.after,f.y-=m.y.after);{const g=pe(f,E);k.x=E.width-g.x.before-g.x.after,k.y=E.height-g.y.before-g.y.after,M+=g.x.before,f.x+=g.x.before,N+=g.y.before,f.y+=g.y.before}break}const re=Pe(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:I(ue(N)),left:e.isRtl.value?void 0:I(ue(M)),right:e.isRtl.value?I(ue(-M)):void 0,minWidth:I(re==="y"?Math.min(c.value,d.width):c.value),maxWidth:I(Be(Ae(k.x,c.value===1/0?0:c.value,u.value))),maxHeight:I(Be(Ae(k.y,r.value===1/0?0:r.value,v.value)))}),{available:k,contentBox:f}}return F(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>x()),me(()=>{const d=x();if(!d)return;const{available:f,contentBox:P}=d;P.height>f.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Be(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const oe=[];function Dt(e){!fe||oe.length?(oe.push(e),ve()):(fe=!1,e(),ve())}let Me=-1;function ve(){cancelAnimationFrame(Me),Me=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?ve():fe=!0})}const te={none:null,close:$t,block:zt,reposition:qt},Wt=X({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function jt(e,n){if(!z)return;let t;ye(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=He(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=te[e.scrollStrategy])==null||o.call(te,n,e,t)}))}),V(()=>{t==null||t.stop()})}function $t(e){var t;function n(o){e.isActive.value=!1}je((t=e.targetEl.value)!=null?t:e.contentEl.value,n)}function zt(e,n){var c;const t=(c=e.root.value)==null?void 0:c.offsetParent,o=[...new Set([...ne(e.targetEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ge(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",I(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",I(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",I(a)),r.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((r,u)=>{const v=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),w=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-v,r.scrollTop=-s,r.style.scrollBehavior=w}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function qt(e,n,t){let o=!1,a=-1,i=-1;function c(r){Dt(()=>{var s,w;const u=performance.now();(w=(s=e.updateLocation).value)==null||w.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback=="undefined"?r=>r():requestIdleCallback)(()=>{t.run(()=>{var r;je((r=e.targetEl.value)!=null?r:e.contentEl.value,u=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{c(u)})})):c(u)})})}),V(()=>{typeof cancelIdleCallback!="undefined"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function je(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Yt=Symbol.for("vuetify:v-menu"),Ut=X({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Gt(e,n){let t=()=>{};function o(c){t==null||t();const r=Number(c?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ke(r,()=>{n==null||n(c),u(c)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Xt=X(B({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean},Ut()),"VOverlay-activator");function Kt(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=ae("useActivator"),c=j();let r=!1,u=!1,v=!0;const s=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),w=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:O,runCloseDelay:x}=Gt(e,l=>{l===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(v=!0),t.value=l)}),d=j(),f={onClick:l=>{l.stopPropagation(),c.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,c.value=l.currentTarget||l.target,O())},onMouseleave:l=>{r=!1,x()},onFocus:l=>{Qe(l.target,":focus-visible")!==!1&&(u=!0,l.stopPropagation(),c.value=l.currentTarget||l.target,O())},onBlur:l=>{u=!1,l.stopPropagation(),x()}},P=C(()=>{const l={};return w.value&&(l.onClick=f.onClick),e.openOnHover&&(l.onMouseenter=f.onMouseenter,l.onMouseleave=f.onMouseleave),s.value&&(l.onFocus=f.onFocus,l.onBlur=f.onBlur),l}),A=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,O()},l.onMouseleave=()=>{r=!1,x()}),s.value&&(l.onFocusin=()=>{u=!0,O()},l.onFocusout=()=>{u=!1,x()}),e.closeOnContentClick){const L=Ie(Yt,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),E=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{v&&(r=!0,v=!1,O())},l.onMouseleave=()=>{r=!1,x()}),l});F(o,l=>{var L;l&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((L=a.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),F(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const b=Te();ye(()=>{!b.value||me(()=>{c.value=b.el})});const p=Te(),M=C(()=>e.target==="cursor"&&d.value?d.value:p.value?p.el:$e(e.target,i)||c.value),N=C(()=>Array.isArray(M.value)?void 0:M.value);let k;return F(()=>!!e.activator,l=>{l&&z?(k=He(),k.run(()=>{Qt(e,i,{activatorEl:c,activatorEvents:P})})):k&&k.stop()},{flush:"post",immediate:!0}),V(()=>{k==null||k.stop()}),{activatorEl:c,activatorRef:b,target:M,targetEl:N,targetRef:p,activatorEvents:P,contentEvents:A,scrimEvents:E}}function Qt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;F(()=>e.activator,(u,v)=>{if(v&&u!==v){const s=r(v);s&&c(s)}u&&me(()=>i())},{immediate:!0}),F(()=>e.activatorProps,()=>{i()}),V(()=>{c()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||pt(u,$(a.value,v))}function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||Lt(u,$(a.value,v))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=$e(u,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Zt(){if(!z)return G(!1);const{ssr:e}=Ze();if(e){const n=G(!1);return Je(()=>{n.value=!0}),n}else return G(!0)}const Jt=X({eager:Boolean},"lazy");function en(e,n){const t=G(!1),o=C(()=>t.value||e.eager||n.value);F(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function tn(){const n=ae("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Re=Symbol.for("vuetify:stack"),Q=Ve([]);function nn(e,n,t){const o=ae("useStack"),a=!t,i=Ie(Re,void 0),c=Ve({activeChildren:new Set});et(Re,c);const r=G(+n.value);de(e,()=>{var w;const s=(w=Q.at(-1))==null?void 0:w[1];r.value=s?s+10:+n.value,a&&Q.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(a){const O=nt(Q).findIndex(x=>x[0]===o.uid);Q.splice(O,1)}i==null||i.activeChildren.delete(o.uid)})});const u=G(!0);a&&ye(()=>{var w;const s=((w=Q.at(-1))==null?void 0:w[0])===o.uid;setTimeout(()=>u.value=s)});const v=C(()=>!c.activeChildren.size);return{globalTop:tt(u),localTop:v,stackStyles:C(()=>({zIndex:r.value}))}}function on(e){return{teleportTarget:C(()=>{const t=e();if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function an(){return!0}function ze(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=De(n);if(typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||an)(e)}function rn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&ze(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Fe(e,n){const t=De(e);n(document),typeof ShadowRoot!="undefined"&&t instanceof ShadowRoot&&n(t)}const ln={mounted(e,n){const t=a=>rn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=ze(a,e,n)};Fe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){!e._clickOutside||(Fe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function sn(e){const a=e,{modelValue:n,color:t}=a,o=Oe(a,["modelValue","color"]);return W(Ot,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&W("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const cn=X(B(B(B(B(B(B(B(B({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3}},Xt()),ot()),at()),Jt()),Nt()),Wt()),rt()),it()),"VOverlay"),dn=lt()({name:"VOverlay",directives:{ClickOutside:ln},inheritAttrs:!1,props:B({_disableGlobalStack:Boolean},cn()),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=ae("VOverlay"),c=j(),r=j(),u=j(),v=st(e,"modelValue"),s=C({get:()=>v.value,set:y=>{y&&e.disabled||(v.value=y)}}),{themeClasses:w}=ct(e),{rtlClasses:O,isRtl:x}=ut(),{hasContent:d,onAfterLeave:f}=en(e,s),P=ft(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:A,localTop:E,stackStyles:b}=nn(s,vt(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:M,target:N,targetEl:k,targetRef:l,activatorEvents:L,contentEvents:re,scrimEvents:S}=Kt(e,{isActive:s,isTop:E,contentEl:u}),{teleportTarget:h}=on(()=>{var K,be,we;const y=e.attach||e.contained;if(y)return y;const R=((K=p==null?void 0:p.value)==null?void 0:K.getRootNode())||((we=(be=i.proxy)==null?void 0:be.$el)==null?void 0:we.getRootNode());return R instanceof ShadowRoot?R:!1}),{dimensionStyles:m}=dt(e),g=Zt(),{scopeId:_}=tn();F(()=>e.disabled,y=>{y&&(s.value=!1)});const{contentStyles:H,updateLocation:q}=_t(e,{isRtl:x,contentEl:u,target:N,isActive:s});jt(e,{root:c,contentEl:u,targetEl:k,isActive:s,updateLocation:q});function T(y){a("click:outside",y),e.persistent?Z():s.value=!1}function D(y){return s.value&&A.value&&(!e.scrim||y.target===r.value||y instanceof MouseEvent&&y.shadowTarget===r.value)}z&&F(s,y=>{y?window.addEventListener("keydown",Y):window.removeEventListener("keydown",Y)},{immediate:!0}),mt(()=>{!z||window.removeEventListener("keydown",Y)});function Y(y){var R,K;y.key==="Escape"&&A.value&&(e.persistent?Z():(s.value=!1,(R=u.value)!=null&&R.contains(document.activeElement)&&((K=p.value)==null||K.focus())))}const U=yt();de(()=>e.closeOnBack,()=>{kt(U,y=>{A.value&&s.value?(y(!1),e.persistent?Z():s.value=!1):y()})});const he=j();F(()=>s.value&&(e.absolute||e.contained)&&h.value==null,y=>{if(y){const R=Bt(c.value);R&&R!==document.scrollingElement&&(he.value=R.scrollTop)}});function Z(){e.noClickAnimation||u.value&&At(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Tt})}function Ye(){a("afterEnter")}function Ue(){f(),a("afterLeave")}return gt(()=>{var y;return W(xt,null,[(y=t.activator)==null?void 0:y.call(t,{isActive:s.value,targetRef:l,props:$({ref:M},L.value,e.activatorProps)}),g.value&&d.value&&W(ht,{disabled:!h.value,to:h.value},{default:()=>[W("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},w.value,O.value,e.class],style:[b.value,{"--v-overlay-opacity":e.opacity,top:I(he.value)},e.style],ref:c},_,o),[W(sn,$({color:P,modelValue:s.value&&!!e.scrim,ref:r},S.value),null),W(bt,{appear:!0,persisted:!0,transition:e.transition,target:N.value,onAfterEnter:Ye,onAfterLeave:Ue},{default:()=>{var R;return[wt(W("div",$({ref:u,class:["v-overlay__content",e.contentClass],style:[m.value,H.value]},re.value,e.contentProps),[(R=t.default)==null?void 0:R.call(t,{isActive:s})]),[[Et,s.value],[St("click-outside"),{handler:T,closeConditional:D,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:r,target:N,animateClick:Z,contentEl:u,globalTop:A,localTop:E,updateLocation:q}}});export{Yt as V,dn as a,Bt as g,cn as m,tn as u};
