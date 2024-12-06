var K=Object.defineProperty;var h=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var x=(e,d,a)=>d in e?K(e,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[d]=a,i=(e,d)=>{for(var a in d||(d={}))Q.call(d,a)&&x(e,a,d[a]);if(h)for(var a of h(d))U.call(d,a)&&x(e,a,d[a]);return e};import{h as c,m as r,p as W,u,e as n,i as b,j as p,k as X,I as k,l as N,F as T,n as B,q as I,s as Y,x as Z,y as ee,z as ae,A as te,B as ne,C as de,D as ie,E as le,G as se,R as ce,H as re,J as ue,K as oe,L as ve,M as me,N as ye,O as ke,P as be,Q as ge,S as Ce,T as Ve,U as D,b as fe,W as Ie,X as pe,Y as Ae,Z as Pe,$ as Se}from"./index.fcfdb788.js";import{V as L}from"./VAvatar.d4b3d169.js";const he=c()({name:"VCardActions",props:r(),setup(e,d){let{slots:a}=d;return W({VBtn:{slim:!0,variant:"text"}}),u(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),xe=b(i(i({opacity:[Number,String]},r()),p()),"VCardSubtitle"),Te=c()({name:"VCardSubtitle",props:xe(),setup(e,d){let{slots:a}=d;return u(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Be=X("v-card-title"),De=b(i(i({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:[String,Number],title:[String,Number]},r()),N()),"VCardItem"),Le=c()({name:"VCardItem",props:De(),setup(e,d){let{slots:a}=d;return u(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),g=!!(t||a.prepend),o=!!(e.appendAvatar||e.appendIcon),C=!!(o||a.append),V=!!(e.title!=null||a.title),f=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(I,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(T,null,[e.prependAvatar&&n(L,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(B,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[V&&n(Be,{key:"title"},{default:()=>{var l,s;return[(s=(l=a.title)==null?void 0:l.call(a))!=null?s:e.title]}}),f&&n(Te,{key:"subtitle"},{default:()=>{var l,s;return[(s=(l=a.subtitle)==null?void 0:l.call(a))!=null?s:e.subtitle]}}),(v=a.default)==null?void 0:v.call(a)]),C&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(I,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(T,null,[e.appendIcon&&n(B,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(L,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ne=b(i(i({opacity:[Number,String]},r()),p()),"VCardText"),_e=c()({name:"VCardText",props:Ne(),setup(e,d){let{slots:a}=d;return u(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Re=b(i(i(i(i(i(i(i(i(i(i(i(i(i({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number]},Y()),r()),N()),Z()),ee()),ae()),te()),ne()),de()),ie()),p()),le()),se({variant:"elevated"})),"VCard"),Oe=c()({name:"VCard",directives:{Ripple:ce},props:Re(),setup(e,d){let{attrs:a,slots:t}=d;const{themeClasses:g}=re(e),{borderClasses:o}=ue(e),{colorClasses:C,colorStyles:V,variantClasses:f}=oe(e),{densityClasses:v}=ve(e),{dimensionStyles:l}=me(e),{elevationClasses:s}=ye(e),{loaderClasses:_}=ke(e),{locationStyles:R}=be(e),{positionClasses:F}=ge(e),{roundedClasses:E}=Ce(e),m=Ve(e,a),M=D(()=>e.link!==!1&&m.isLink.value),y=D(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return u(()=>{const O=M.value?"a":e.tag,j=!!(t.title||e.title!=null),H=!!(t.subtitle||e.subtitle!=null),$=j||H,q=!!(t.append||e.appendAvatar||e.appendIcon),w=!!(t.prepend||e.prependAvatar||e.prependIcon),z=!!(t.image||e.image),G=$||w||q,J=!!(t.text||e.text!=null);return fe(n(O,Se({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},g.value,o.value,C.value,v.value,s.value,_.value,F.value,E.value,f.value,e.class],style:[V.value,l.value,R.value,e.style],onClick:y.value&&m.navigate,tabindex:e.disabled?-1:void 0},m.linkProps),{default:()=>{var A;return[z&&n("div",{key:"image",class:"v-card__image"},[t.image?n(I,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(pe,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),G&&n(Le,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),J&&n(_e,{key:"text"},{default:()=>{var P,S;return[(S=(P=t.text)==null?void 0:P.call(t))!=null?S:e.text]}}),(A=t.default)==null?void 0:A.call(t),t.actions&&n(he,null,{default:t.actions}),Pe(y.value,"v-card")]}}),[[Ie("ripple"),y.value&&e.ripple]])}),{}}});export{Oe as V,Be as a,_e as b,Te as c,he as d};