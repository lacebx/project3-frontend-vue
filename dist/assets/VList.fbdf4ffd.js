var At=Object.defineProperty,wt=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var Ge=(e,n,t)=>n in e?At(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))Ee.call(n,t)&&Ge(e,t,n[t]);if(ve)for(var t of ve(n))Re.call(n,t)&&Ge(e,t,n[t]);return e},E=(e,n)=>wt(e,Pt(n));var te=(e,n)=>{var t={};for(var a in e)Ee.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&ve)for(var a of ve(e))n.indexOf(a)<0&&Re.call(e,a)&&(t[a]=e[a]);return t};import{i as D,I as j,m as Q,aU as xt,j as Z,aV as Ue,h as K,as as Lt,az as Ot,aW as qe,a7 as $,U as S,ay as je,aX as _t,aB as De,aa as Xe,u as le,e as v,aY as $e,n as J,av as Bt,ah as Je,E as he,G as Se,H as be,p as Qe,al as A,$ as se,aJ as ne,s as Ae,l as we,y as Pe,aZ as Tt,C as xe,D as Ze,a_ as zt,R as Ye,aF as Ft,J as Le,K as et,L as Oe,N as _e,S as Be,a$ as Mt,a2 as fe,b0 as Gt,T as tt,b as ye,W as at,Z as nt,aR as Et,q as ae,aQ as lt,F as ge,am as pe,aj as ke,b1 as O,an as it,a0 as R,ab as st,aC as Rt,ai as jt,b2 as Dt,b3 as $t,aL as Nt,b4 as Wt,k as Ht,x as ut,M as rt,b5 as Kt,ao as Ut,b6 as H,ar as ot,ap as qt,ax as Xt}from"./index.fcfdb788.js";import{V as me}from"./VAvatar.d4b3d169.js";import{V as Jt}from"./VDivider.07fab659.js";function Qt(e){let{selectedElement:n,containerElement:t,isRtl:a,isHorizontal:i}=e;const l=ce(i,t),s=ct(i,a,t),r=ce(i,n),o=dt(i,n),k=r*.4;return s>o?o-k:s+l<o+r?o-l+r+k:s}function Zt(e){let{selectedElement:n,containerElement:t,isHorizontal:a}=e;const i=ce(a,t),l=dt(a,n),s=ce(a,n);return l-i/2+s/2}function Ne(e,n){const t=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[t])||0}function Yt(e,n){const t=e?"clientWidth":"clientHeight";return(n==null?void 0:n[t])||0}function ct(e,n,t){if(!t)return 0;const{scrollLeft:a,offsetWidth:i,scrollWidth:l}=t;return e?n?l-i+a:a:t.scrollTop}function ce(e,n){const t=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[t])||0}function dt(e,n){const t=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[t])||0}const ea=Symbol.for("vuetify:v-slide-group"),vt=D(c(c(c(c({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ea},nextIcon:{type:j,default:"$next"},prevIcon:{type:j,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)}},Q()),xt({mobile:null})),Z()),Ue({selectedClass:"v-slide-group-item--active"})),"VSlideGroup"),We=K()({name:"VSlideGroup",props:vt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:a}=Lt(),{displayClasses:i,mobile:l}=Ot(e),s=qe(e,e.symbol),r=$(!1),o=$(0),k=$(0),p=$(0),g=S(()=>e.direction==="horizontal"),{resizeRef:C,contentRect:V}=je(),{resizeRef:u,contentRect:m}=je(),d=_t(),b=S(()=>({container:C.el,duration:200,easing:"easeOutQuart"})),I=S(()=>s.selected.value.length?s.items.value.findIndex(y=>y.id===s.selected.value[0]):-1),w=S(()=>s.selected.value.length?s.items.value.findIndex(y=>y.id===s.selected.value[s.selected.value.length-1]):-1);if(De){let y=-1;Xe(()=>[s.selected.value,V.value,m.value,g.value],()=>{cancelAnimationFrame(y),y=requestAnimationFrame(()=>{if(V.value&&m.value){const h=g.value?"width":"height";k.value=V.value[h],p.value=m.value[h],r.value=k.value+1<p.value}if(I.value>=0&&u.el){const h=u.el.children[w.value];L(h,e.centerActive)}})})}const z=$(!1);function L(y,h){let f=0;h?f=Zt({containerElement:C.el,isHorizontal:g.value,selectedElement:y}):f=Qt({containerElement:C.el,isHorizontal:g.value,isRtl:a.value,selectedElement:y}),F(f)}function F(y){if(!De||!C.el)return;const h=ce(g.value,C.el),f=ct(g.value,a.value,C.el);if(!(Ne(g.value,C.el)<=h||Math.abs(y-f)<16)){if(g.value&&a.value&&C.el){const{scrollWidth:W,offsetWidth:ie}=C.el;y=W-ie-y}g.value?d.horizontal(y,b.value):d(y,b.value)}}function x(y){const{scrollTop:h,scrollLeft:f}=y.target;o.value=g.value?f:h}function M(y){if(z.value=!0,!(!r.value||!u.el)){for(const h of y.composedPath())for(const f of u.el.children)if(f===h){L(f);return}}}function Y(y){z.value=!1}let N=!1;function U(y){var h;!N&&!z.value&&!(y.relatedTarget&&((h=u.el)==null?void 0:h.contains(y.relatedTarget)))&&_(),N=!1}function B(){N=!0}function P(y){if(!u.el)return;function h(f){y.preventDefault(),_(f)}g.value?y.key==="ArrowRight"?h(a.value?"prev":"next"):y.key==="ArrowLeft"&&h(a.value?"next":"prev"):y.key==="ArrowDown"?h("next"):y.key==="ArrowUp"&&h("prev"),y.key==="Home"?h("first"):y.key==="End"&&h("last")}function _(y){var f,T;if(!u.el)return;let h;if(!y)h=Bt(u.el)[0];else if(y==="next"){if(h=(f=u.el.querySelector(":focus"))==null?void 0:f.nextElementSibling,!h)return _("first")}else if(y==="prev"){if(h=(T=u.el.querySelector(":focus"))==null?void 0:T.previousElementSibling,!h)return _("last")}else y==="first"?h=u.el.firstElementChild:y==="last"&&(h=u.el.lastElementChild);h&&h.focus({preventScroll:!0})}function q(y){const h=g.value&&a.value?-1:1,f=(y==="prev"?-h:h)*k.value;let T=o.value+f;if(g.value&&a.value&&C.el){const{scrollWidth:W,offsetWidth:ie}=C.el;T+=W-ie}F(T)}const X=S(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),ue=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!l.value;case!0:return r.value||Math.abs(o.value)>0;case"mobile":return l.value||r.value||Math.abs(o.value)>0;default:return!l.value&&(r.value||Math.abs(o.value)>0)}}),re=S(()=>Math.abs(o.value)>1),ee=S(()=>{if(!C.value)return!1;const y=Ne(g.value,C.el),h=Yt(g.value,C.el);return y-h-Math.abs(o.value)>1});return le(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!g.value,"v-slide-group--has-affixes":ue.value,"v-slide-group--is-overflowing":r.value},i.value,e.class],style:e.style,tabindex:z.value||s.selected.value.length?-1:0,onFocus:U},{default:()=>{var y,h,f,T,W;return[ue.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!re.value}],onMousedown:B,onClick:()=>re.value&&q("prev")},[(h=(y=t.prev)==null?void 0:y.call(t,X.value))!=null?h:v($e,null,{default:()=>[v(J,{icon:a.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:C,class:"v-slide-group__container",onScroll:x},[v("div",{ref:u,class:"v-slide-group__content",onFocusin:M,onFocusout:Y,onKeydown:P},[(f=t.default)==null?void 0:f.call(t,X.value)])]),ue.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ee.value}],onMousedown:B,onClick:()=>ee.value&&q("next")},[(W=(T=t.next)==null?void 0:T.call(t,X.value))!=null?W:v($e,null,{default:()=>[v(J,{icon:a.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:q,scrollOffset:o,focus:_,hasPrev:re,hasNext:ee}}}),ft=Symbol.for("vuetify:v-chip-group"),ta=D(c(c(c(c(c(c({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Je}},vt()),Q()),Ue({selectedClass:"v-chip--selected"})),Z()),he()),Se({variant:"tonal"})),"VChipGroup"),_a=K()({name:"VChipGroup",props:ta(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:a}=be(e),{isSelected:i,select:l,next:s,prev:r,selected:o}=qe(e,ft);return Qe({VChip:{color:A(e,"color"),disabled:A(e,"disabled"),filter:A(e,"filter"),variant:A(e,"variant")}}),le(()=>{const k=We.filterProps(e);return v(We,se(k,{class:["v-chip-group",{"v-chip-group--column":e.column},a.value,e.class],style:e.style}),{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t,{isSelected:i,select:l,next:s,prev:r,selected:o.value})]}})}),{}}}),aa=D(c(c(c(c(c(c(c(c(c(c(c({activeClass:String,appendAvatar:String,appendIcon:j,closable:Boolean,closeIcon:{type:j,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ne(),onClickOnce:ne()},Ae()),Q()),we()),Pe()),Tt()),xe()),Ze()),zt()),Z({tag:"span"})),he()),Se({variant:"tonal"})),"VChip"),Ba=K()({name:"VChip",directives:{Ripple:Ye},props:aa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:t,emit:a,slots:i}=n;const{t:l}=Ft(),{borderClasses:s}=Le(e),{colorClasses:r,colorStyles:o,variantClasses:k}=et(e),{densityClasses:p}=Oe(e),{elevationClasses:g}=_e(e),{roundedClasses:C}=Be(e),{sizeClasses:V}=Mt(e),{themeClasses:u}=be(e),m=fe(e,"modelValue"),d=Gt(e,ft,!1),b=tt(e,t),I=S(()=>e.link!==!1&&b.isLink.value),w=S(()=>!e.disabled&&e.link!==!1&&(!!d||e.link||b.isClickable.value)),z=S(()=>({"aria-label":l(e.closeLabel),onClick(x){x.preventDefault(),x.stopPropagation(),m.value=!1,a("click:close",x)}}));function L(x){var M;a("click",x),w.value&&((M=b.navigate)==null||M.call(b,x),d==null||d.toggle())}function F(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),L(x))}return()=>{const x=b.isLink.value?"a":e.tag,M=!!(e.appendIcon||e.appendAvatar),Y=!!(M||i.append),N=!!(i.close||e.closable),U=!!(i.filter||e.filter)&&d,B=!!(e.prependIcon||e.prependAvatar),P=!!(B||i.prepend),_=!d||d.isSelected.value;return m.value&&ye(v(x,se({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":w.value,"v-chip--filter":U,"v-chip--pill":e.pill},u.value,s.value,_?r.value:void 0,p.value,g.value,C.value,V.value,k.value,d==null?void 0:d.selectedClass.value,e.class],style:[_?o.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:w.value?0:void 0,onClick:L,onKeydown:w.value&&!I.value&&F},b.linkProps),{default:()=>{var q,X;return[nt(w.value,"v-chip"),U&&v(Et,{key:"filter"},{default:()=>[ye(v("div",{class:"v-chip__filter"},[i.filter?v(ae,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},i.filter):v(J,{key:"filter-icon",icon:e.filterIcon},null)]),[[lt,d.isSelected.value]])]}),P&&v("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?v(ae,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},i.prepend):v(ge,null,[e.prependIcon&&v(J,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&v(me,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),v("div",{class:"v-chip__content","data-no-activator":""},[(X=(q=i.default)==null?void 0:q.call(i,{isSelected:d==null?void 0:d.isSelected.value,selectedClass:d==null?void 0:d.selectedClass.value,select:d==null?void 0:d.select,toggle:d==null?void 0:d.toggle,value:d==null?void 0:d.value.value,disabled:e.disabled}))!=null?X:e.text]),Y&&v("div",{key:"append",class:"v-chip__append"},[i.append?v(ae,{key:"append-defaults",disabled:!M,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},i.append):v(ge,null,[e.appendIcon&&v(J,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&v(me,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),N&&v("button",se({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},z.value),[i.close?v(ae,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},i.close):v(J,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[at("ripple"),w.value&&e.ripple,null]])}}});const Ie=Symbol.for("vuetify:list");function yt(){const e=pe(Ie,{hasPrepend:$(!1),updateHasPrepend:()=>null}),n={hasPrepend:$(!1),updateHasPrepend:t=>{t&&(n.hasPrepend.value=t)}};return ke(Ie,n),e}function gt(){return pe(Ie,null)}const Te=e=>{const n={activate:t=>{let{id:a,value:i,activated:l}=t;return a=O(a),e&&!i&&l.size===1&&l.has(a)||(i?l.add(a):l.delete(a)),l},in:(t,a,i)=>{let l=new Set;if(t!=null)for(const s of it(t))l=n.activate({id:s,value:!0,activated:new Set(l),children:a,parents:i});return l},out:t=>Array.from(t)};return n},mt=e=>{const n=Te(e);return{activate:a=>{let o=a,{activated:i,id:l}=o,s=te(o,["activated","id"]);l=O(l);const r=i.has(l)?new Set([l]):new Set;return n.activate(E(c({},s),{id:l,activated:r}))},in:(a,i,l)=>{let s=new Set;if(a!=null){const r=it(a);r.length&&(s=n.in(r.slice(0,1),i,l))}return s},out:(a,i,l)=>n.out(a,i,l)}},na=e=>{const n=Te(e);return{activate:a=>{let o=a,{id:i,activated:l,children:s}=o,r=te(o,["id","activated","children"]);return i=O(i),s.has(i)?l:n.activate(c({id:i,activated:l,children:s},r))},in:n.in,out:n.out}},la=e=>{const n=mt(e);return{activate:a=>{let o=a,{id:i,activated:l,children:s}=o,r=te(o,["id","activated","children"]);return i=O(i),s.has(i)?l:n.activate(c({id:i,activated:l,children:s},r))},in:n.in,out:n.out}},ia={open:e=>{let{id:n,value:t,opened:a,parents:i}=e;if(t){const l=new Set;l.add(n);let s=i.get(n);for(;s!=null;)l.add(s),s=i.get(s);return l}else return a.delete(n),a},select:()=>null},ht={open:e=>{let{id:n,value:t,opened:a,parents:i}=e;if(t){let l=i.get(n);for(a.add(n);l!=null&&l!==n;)a.add(l),l=i.get(l);return a}else a.delete(n);return a},select:()=>null},sa={open:ht.open,select:e=>{let{id:n,value:t,opened:a,parents:i}=e;if(!t)return a;const l=[];let s=i.get(n);for(;s!=null;)l.push(s),s=i.get(s);return new Set(l)}},ze=e=>{const n={select:t=>{let{id:a,value:i,selected:l}=t;if(a=O(a),e&&!i){const s=Array.from(l.entries()).reduce((r,o)=>{let[k,p]=o;return p==="on"&&r.push(k),r},[]);if(s.length===1&&s[0]===a)return l}return l.set(a,i?"on":"off"),l},in:(t,a,i)=>{let l=new Map;for(const s of t||[])l=n.select({id:s,value:!0,selected:new Map(l),children:a,parents:i});return l},out:t=>{const a=[];for(const[i,l]of t.entries())l==="on"&&a.push(i);return a}};return n},St=e=>{const n=ze(e);return{select:a=>{let o=a,{selected:i,id:l}=o,s=te(o,["selected","id"]);l=O(l);const r=i.has(l)?new Map([[l,i.get(l)]]):new Map;return n.select(E(c({},s),{id:l,selected:r}))},in:(a,i,l)=>{let s=new Map;return a!=null&&a.length&&(s=n.in(a.slice(0,1),i,l)),s},out:(a,i,l)=>n.out(a,i,l)}},ua=e=>{const n=ze(e);return{select:a=>{let o=a,{id:i,selected:l,children:s}=o,r=te(o,["id","selected","children"]);return i=O(i),s.has(i)?l:n.select(c({id:i,selected:l,children:s},r))},in:n.in,out:n.out}},ra=e=>{const n=St(e);return{select:a=>{let o=a,{id:i,selected:l,children:s}=o,r=te(o,["id","selected","children"]);return i=O(i),s.has(i)?l:n.select(c({id:i,selected:l,children:s},r))},in:n.in,out:n.out}},oa=e=>{const n={select:t=>{let{id:a,value:i,selected:l,children:s,parents:r}=t;a=O(a);const o=new Map(l),k=[a];for(;k.length;){const g=k.shift();l.set(O(g),i?"on":"off"),s.has(g)&&k.push(...s.get(g))}let p=O(r.get(a));for(;p;){const g=s.get(p),C=g.every(u=>l.get(O(u))==="on"),V=g.every(u=>!l.has(O(u))||l.get(O(u))==="off");l.set(p,C?"on":V?"off":"indeterminate"),p=O(r.get(p))}return e&&!i&&Array.from(l.entries()).reduce((C,V)=>{let[u,m]=V;return m==="on"&&C.push(u),C},[]).length===0?o:l},in:(t,a,i)=>{let l=new Map;for(const s of t||[])l=n.select({id:s,value:!0,selected:new Map(l),children:a,parents:i});return l},out:(t,a)=>{const i=[];for(const[l,s]of t.entries())s==="on"&&!a.has(l)&&i.push(l);return i}};return n},de=Symbol.for("vuetify:nested"),bt={id:$(),root:{register:()=>null,unregister:()=>null,parents:R(new Map),children:R(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:R(!1),selectable:R(!1),opened:R(new Set),activated:R(new Set),selected:R(new Map),selectedValues:R([]),getPath:()=>[]}},ca=D({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),da=e=>{let n=!1;const t=R(new Map),a=R(new Map),i=fe(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),l=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return na(e.mandatory);case"single-leaf":return la(e.mandatory);case"independent":return Te(e.mandatory);case"single-independent":default:return mt(e.mandatory)}}),s=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return ra(e.mandatory);case"leaf":return ua(e.mandatory);case"independent":return ze(e.mandatory);case"single-independent":return St(e.mandatory);case"classic":default:return oa(e.mandatory)}}),r=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return sa;case"single":return ia;case"multiple":default:return ht}}),o=fe(e,"activated",e.activated,u=>l.value.in(u,t.value,a.value),u=>l.value.out(u,t.value,a.value)),k=fe(e,"selected",e.selected,u=>s.value.in(u,t.value,a.value),u=>s.value.out(u,t.value,a.value));st(()=>{n=!0});function p(u){const m=[];let d=u;for(;d!=null;)m.unshift(d),d=a.value.get(d);return m}const g=Rt("nested"),C=new Set,V={id:$(),root:{opened:i,activatable:A(e,"activatable"),selectable:A(e,"selectable"),activated:o,selected:k,selectedValues:S(()=>{const u=[];for(const[m,d]of k.value.entries())d==="on"&&u.push(m);return u}),register:(u,m,d)=>{if(C.has(u)){p(u).map(String).join(" -> "),p(m).concat(u).map(String).join(" -> ");return}else C.add(u);m&&u!==m&&a.value.set(u,m),d&&t.value.set(u,[]),m!=null&&t.value.set(m,[...t.value.get(m)||[],u])},unregister:u=>{var d;if(n)return;C.delete(u),t.value.delete(u);const m=a.value.get(u);if(m){const b=(d=t.value.get(m))!=null?d:[];t.value.set(m,b.filter(I=>I!==u))}a.value.delete(u)},open:(u,m,d)=>{g.emit("click:open",{id:u,value:m,path:p(u),event:d});const b=r.value.open({id:u,value:m,opened:new Set(i.value),children:t.value,parents:a.value,event:d});b&&(i.value=b)},openOnSelect:(u,m,d)=>{const b=r.value.select({id:u,value:m,selected:new Map(k.value),opened:new Set(i.value),children:t.value,parents:a.value,event:d});b&&(i.value=b)},select:(u,m,d)=>{g.emit("click:select",{id:u,value:m,path:p(u),event:d});const b=s.value.select({id:u,value:m,selected:new Map(k.value),children:t.value,parents:a.value,event:d});b&&(k.value=b),V.root.openOnSelect(u,m,d)},activate:(u,m,d)=>{if(!e.activatable)return V.root.select(u,!0,d);g.emit("click:activate",{id:u,value:m,path:p(u),event:d});const b=l.value.activate({id:u,value:m,activated:new Set(o.value),children:t.value,parents:a.value,event:d});b&&(o.value=b)},children:t,parents:a,getPath:p}};return ke(de,V),V.root},pt=(e,n)=>{const t=pe(de,bt),a=Symbol(jt()),i=S(()=>e.value!==void 0?e.value:a),l=E(c({},t),{id:i,open:(s,r)=>t.root.open(i.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(i.value,s,r),isOpen:S(()=>t.root.opened.value.has(i.value)),parent:S(()=>t.root.parents.value.get(i.value)),activate:(s,r)=>t.root.activate(i.value,s,r),isActivated:S(()=>t.root.activated.value.has(O(i.value))),select:(s,r)=>t.root.select(i.value,s,r),isSelected:S(()=>t.root.selected.value.get(O(i.value))==="on"),isIndeterminate:S(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator});return!t.isGroupActivator&&t.root.register(i.value,t.id.value,n),st(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),n&&ke(de,l),l},va=()=>{const e=pe(de,bt);ke(de,E(c({},e),{isGroupActivator:!0}))},fa=Dt({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return va(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),ya=D(c(c({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null},Q()),Z()),"VListGroup"),He=K()({name:"VListGroup",props:ya(),setup(e,n){let{slots:t}=n;const{isOpen:a,open:i,id:l}=pt(A(e,"value"),!0),s=S(()=>`v-list-group--id-${String(l.value)}`),r=gt(),{isBooted:o}=$t();function k(V){V.stopPropagation(),i(!a.value,V)}const p=S(()=>({onClick:k,class:"v-list-group__header",id:s.value})),g=S(()=>a.value?e.collapseIcon:e.expandIcon),C=S(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&g.value,appendIcon:e.appendIcon||!e.subgroup&&g.value,title:e.title,value:e.value}}));return le(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&v(ae,{defaults:C.value},{default:()=>[v(fa,null,{default:()=>[t.activator({props:p.value,isOpen:a.value})]})]}),v(Nt,{transition:{component:Wt},disabled:!o.value},{default:()=>{var V;return[ye(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(V=t.default)==null?void 0:V.call(t)]),[[lt,a.value]])]}})]})),{isOpen:a}}});const ga=D(c(c({opacity:[Number,String]},Q()),Z()),"VListItemSubtitle"),ma=K()({name:"VListItemSubtitle",props:ga(),setup(e,n){let{slots:t}=n;return le(()=>v(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),ha=Ht("v-list-item-title"),Sa=D(c(c(c(c(c(c(c(c(c(c({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ne(),onClickOnce:ne()},Ae()),Q()),we()),ut()),Pe()),xe()),Ze()),Z()),he()),Se({variant:"text"})),"VListItem"),Ke=K()({name:"VListItem",directives:{Ripple:Ye},props:Sa(),emits:{click:e=>!0},setup(e,n){let{attrs:t,slots:a,emit:i}=n;const l=tt(e,t),s=S(()=>e.value===void 0?l.href.value:e.value),{activate:r,isActivated:o,select:k,isOpen:p,isSelected:g,isIndeterminate:C,isGroupActivator:V,root:u,parent:m,openOnSelect:d,id:b}=pt(s,!1),I=gt(),w=S(()=>{var f;return e.active!==!1&&(e.active||((f=l.isActive)==null?void 0:f.value)||(u.activatable.value?o.value:g.value))}),z=S(()=>e.link!==!1&&l.isLink.value),L=S(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||!!I&&(u.selectable.value||u.activatable.value||e.value!=null))),F=S(()=>e.rounded||e.nav),x=S(()=>{var f;return(f=e.color)!=null?f:e.activeColor}),M=S(()=>{var f;return{color:w.value&&(f=x.value)!=null?f:e.baseColor,variant:e.variant}});Xe(()=>{var f;return(f=l.isActive)==null?void 0:f.value},f=>{f&&m.value!=null&&u.open(m.value,!0),f&&d(f)},{immediate:!0});const{themeClasses:Y}=be(e),{borderClasses:N}=Le(e),{colorClasses:U,colorStyles:B,variantClasses:P}=et(M),{densityClasses:_}=Oe(e),{dimensionStyles:q}=rt(e),{elevationClasses:X}=_e(e),{roundedClasses:ue}=Be(F),re=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ee=S(()=>({isActive:w.value,select:k,isOpen:p.value,isSelected:g.value,isIndeterminate:C.value}));function y(f){var T;i("click",f),L.value&&((T=l.navigate)==null||T.call(l,f),!V&&(u.activatable.value?r(!o.value,f):(u.selectable.value||e.value!=null)&&k(!g.value,f)))}function h(f){(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),f.target.dispatchEvent(new MouseEvent("click",f)))}return le(()=>{const f=z.value?"a":e.tag,T=a.title||e.title!=null,W=a.subtitle||e.subtitle!=null,ie=!!(e.appendAvatar||e.appendIcon),Vt=!!(ie||a.append),Fe=!!(e.prependAvatar||e.prependIcon),Ce=!!(Fe||a.prepend);return I==null||I.updateHasPrepend(Ce),e.activeColor&&Kt("active-color",["color","base-color"]),ye(v(f,se({class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":L.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Ce&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&w.value},Y.value,N.value,U.value,_.value,X.value,re.value,ue.value,P.value,e.class],style:[B.value,q.value,e.style],tabindex:L.value?I?-2:0:void 0,"aria-selected":u.activatable.value?o.value:g.value,onClick:y,onKeydown:L.value&&!z.value&&h},l.linkProps),{default:()=>{var Me;return[nt(L.value||w.value,"v-list-item"),Ce&&v("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?v(ae,{key:"prepend-defaults",disabled:!Fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var G;return[(G=a.prepend)==null?void 0:G.call(a,ee.value)]}}):v(ge,null,[e.prependAvatar&&v(me,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(J,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[T&&v(ha,{key:"title"},{default:()=>{var G,oe;return[(oe=(G=a.title)==null?void 0:G.call(a,{title:e.title}))!=null?oe:e.title]}}),W&&v(ma,{key:"subtitle"},{default:()=>{var G,oe;return[(oe=(G=a.subtitle)==null?void 0:G.call(a,{subtitle:e.subtitle}))!=null?oe:e.subtitle]}}),(Me=a.default)==null?void 0:Me.call(a,ee.value)]),Vt&&v("div",{key:"append",class:"v-list-item__append"},[a.append?v(ae,{key:"append-defaults",disabled:!ie,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var G;return[(G=a.append)==null?void 0:G.call(a,ee.value)]}}):v(ge,null,[e.appendIcon&&v(J,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(me,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[at("ripple"),L.value&&e.ripple]])}),{activate:r,isActivated:o,isGroupActivator:V,isSelected:g,list:I,select:k,root:u,id:b}}}),ba=D(c(c({color:String,inset:Boolean,sticky:Boolean,title:String},Q()),Z()),"VListSubheader"),pa=K()({name:"VListSubheader",props:ba(),setup(e,n){let{slots:t}=n;const{textColorClasses:a,textColorStyles:i}=Ut(A(e,"color"));return le(()=>{const l=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s,r;return[l&&v("div",{class:"v-list-subheader__text"},[(r=(s=t.default)==null?void 0:s.call(t))!=null?r:e.title])]}})}),{}}}),ka=D({items:Array,returnObject:Boolean},"VListChildren"),kt=K()({name:"VListChildren",props:ka(),setup(e,n){let{slots:t}=n;return yt(),()=>{var a,i,l;return(l=(a=t.default)==null?void 0:a.call(t))!=null?l:(i=e.items)==null?void 0:i.map(s=>{var V,u,m,d;let{children:r,props:o,type:k,raw:p}=s;if(k==="divider")return(u=(V=t.divider)==null?void 0:V.call(t,{props:o}))!=null?u:v(Jt,o,null);if(k==="subheader")return(d=(m=t.subheader)==null?void 0:m.call(t,{props:o}))!=null?d:v(pa,o,null);const g={subtitle:t.subtitle?b=>{var I;return(I=t.subtitle)==null?void 0:I.call(t,E(c({},b),{item:p}))}:void 0,prepend:t.prepend?b=>{var I;return(I=t.prepend)==null?void 0:I.call(t,E(c({},b),{item:p}))}:void 0,append:t.append?b=>{var I;return(I=t.append)==null?void 0:I.call(t,E(c({},b),{item:p}))}:void 0,title:t.title?b=>{var I;return(I=t.title)==null?void 0:I.call(t,E(c({},b),{item:p}))}:void 0},C=He.filterProps(o);return r?v(He,se({value:o==null?void 0:o.value},C),{activator:b=>{let{props:I}=b;const w=E(c(c({},o),I),{value:e.returnObject?p:o.value});return t.header?t.header({props:w}):v(Ke,w,g)},default:()=>v(kt,{items:r,returnObject:e.returnObject},t)}):t.item?t.item({props:o}):v(Ke,se(o,{value:e.returnObject?p:o.value}),g)})}}}),Ca=D({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Je}},"list-items");function Ve(e,n){var r;const t=H(n,e.itemTitle,n),a=H(n,e.itemValue,t),i=H(n,e.itemChildren),l=e.itemProps===!0?typeof n=="object"&&n!=null&&!Array.isArray(n)?"children"in n?ot(n,["children"]):n:void 0:H(n,e.itemProps),s=c({title:t,value:a},l);return{title:String((r=s.title)!=null?r:""),value:s.value,props:s,children:Array.isArray(i)?Ct(e,i):void 0,raw:n}}function Ct(e,n){const t=[];for(const a of n)t.push(Ve(e,a));return t}function Ta(e){const n=S(()=>Ct(e,e.items)),t=S(()=>n.value.some(l=>l.value===null));function a(l){return t.value||(l=l.filter(s=>s!==null)),l.map(s=>e.returnObject&&typeof s=="string"?Ve(e,s):n.value.find(r=>e.valueComparator(s,r.value))||Ve(e,s))}function i(l){return e.returnObject?l.map(s=>{let{raw:r}=s;return r}):l.map(s=>{let{value:r}=s;return r})}return{items:n,transformIn:a,transformOut:i}}function Ia(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Va(e,n){const t=H(n,e.itemType,"item"),a=Ia(n)?n:H(n,e.itemTitle),i=H(n,e.itemValue,void 0),l=H(n,e.itemChildren),s=e.itemProps===!0?ot(n,["children"]):H(n,e.itemProps),r=c({title:a,value:i},s);return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&l?It(e,l):void 0,raw:n}}function It(e,n){const t=[];for(const a of n)t.push(Va(e,a));return t}function Aa(e){return{items:S(()=>It(e,e.items))}}const wa=D(c(c(c(c(c(E(c(c(c(c(c(c({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":ne(),"onClick:select":ne(),"onUpdate:opened":ne()},ca({selectStrategy:"single-leaf",openStrategy:"list"})),Ae()),Q()),we()),ut()),Pe()),{itemType:{type:String,default:"type"}}),Ca()),xe()),Z()),he()),Se({variant:"text"})),"VList"),za=K()({name:"VList",props:wa(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:a}=Aa(e),{themeClasses:i}=be(e),{backgroundColorClasses:l,backgroundColorStyles:s}=qt(A(e,"bgColor")),{borderClasses:r}=Le(e),{densityClasses:o}=Oe(e),{dimensionStyles:k}=rt(e),{elevationClasses:p}=_e(e),{roundedClasses:g}=Be(e),{children:C,open:V,parents:u,select:m,getPath:d}=da(e),b=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=A(e,"activeColor"),w=A(e,"baseColor"),z=A(e,"color");yt(),Qe({VListGroup:{activeColor:I,baseColor:w,color:z,expandIcon:A(e,"expandIcon"),collapseIcon:A(e,"collapseIcon")},VListItem:{activeClass:A(e,"activeClass"),activeColor:I,baseColor:w,color:z,density:A(e,"density"),disabled:A(e,"disabled"),lines:A(e,"lines"),nav:A(e,"nav"),slim:A(e,"slim"),variant:A(e,"variant")}});const L=$(!1),F=R();function x(P){L.value=!0}function M(P){L.value=!1}function Y(P){var _;!L.value&&!(P.relatedTarget&&((_=F.value)==null?void 0:_.contains(P.relatedTarget)))&&B()}function N(P){const _=P.target;if(!(!F.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(P.key==="ArrowDown")B("next");else if(P.key==="ArrowUp")B("prev");else if(P.key==="Home")B("first");else if(P.key==="End")B("last");else return;P.preventDefault()}}function U(P){L.value=!0}function B(P){if(F.value)return Xt(F.value,P)}return le(()=>v(e.tag,{ref:F,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,l.value,r.value,o.value,p.value,b.value,g.value,e.class],style:[s.value,k.value,e.style],tabindex:e.disabled||L.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:x,onFocusout:M,onFocus:Y,onKeydown:N,onMousedown:U},{default:()=>[v(kt,{items:a.value,returnObject:e.returnObject},t)]})),{open:V,select:m,focus:B,children:C,parents:u,getPath:d}}});export{za as V,Ke as a,Ba as b,_a as c,ha as d,ma as e,Ca as m,Ta as u};
