var te=Object.defineProperty,ne=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var B=(e,l,n)=>l in e?te(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,m=(e,l)=>{for(var n in l||(l={}))M.call(l,n)&&B(e,n,l[n]);if(g)for(var n of g(l))N.call(l,n)&&B(e,n,l[n]);return e},C=(e,l)=>ne(e,le(l));var h=(e,l)=>{var n={};for(var u in e)M.call(e,u)&&l.indexOf(u)<0&&(n[u]=e[u]);if(e!=null&&g)for(var u of g(e))l.indexOf(u)<0&&N.call(e,u)&&(n[u]=e[u]);return n};import{a as ae,b as ue,u as ie,V as E,d as oe,e as se,g as re,f as ce}from"./VField.6431dcf7.js";import{i as de,h as fe,a1 as ve,a2 as me,U as y,a0 as F,u as xe,a3 as Ve,e as a,$ as k,b as ge,W as ye,F as P,a4 as Ce,a5 as U,a6 as he}from"./index.fcfdb788.js";const Fe=["color","file","time","date","datetime-local","week","month"],ke=de(m(m({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object},ae()),ue()),"VTextField"),Se=fe()({name:"VTextField",directives:{Intersect:ve},inheritAttrs:!1,props:ke(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:n,emit:u,slots:i}=l;const r=me(e,"modelValue"),{isFocused:d,focus:p,blur:O}=ie(e),j=y(()=>{var t;return typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:((t=r.value)!=null?t:"").toString().length}),z=y(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),b=y(()=>["plain","underlined"].includes(e.variant));function W(t,o){var s,c;!e.autofocus||!t||(c=(s=o[0].target)==null?void 0:s.focus)==null||c.call(s)}const _=F(),I=F(),f=F(),$=y(()=>Fe.includes(e.type)||e.persistentPlaceholder||d.value||e.active);function x(){var t;f.value!==document.activeElement&&((t=f.value)==null||t.focus()),d.value||p()}function q(t){u("mousedown:control",t),t.target!==f.value&&(x(),t.preventDefault())}function G(t){x(),u("click:control",t)}function H(t){t.stopPropagation(),x(),U(()=>{r.value=null,he(e["onClick:clear"],t)})}function J(t){var s;const o=t.target;if(r.value=o.value,((s=e.modelModifiers)==null?void 0:s.trim)&&["text","search","password","tel","url"].includes(e.type)){const c=[o.selectionStart,o.selectionEnd];U(()=>{o.selectionStart=c[0],o.selectionEnd=c[1]})}}return xe(()=>{const t=!!(i.counter||e.counter!==!1&&e.counter!=null),o=!!(t||i.details),[s,c]=Ve(n),S=E.filterProps(e),{modelValue:Pe}=S,K=h(S,["modelValue"]),L=oe(e);return a(E,k({ref:_,modelValue:r.value,"onUpdate:modelValue":v=>r.value=v,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":b.value},e.class],style:e.style},s,K,{centerAffix:!b.value,focused:d.value}),C(m({},i),{default:v=>{let{id:V,isDisabled:w,isDirty:A,isReadonly:Q,isValid:X}=v;return a(se,k({ref:I,onMousedown:q,onClick:G,"onClick:clear":H,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},L,{id:V.value,active:$.value||A.value,dirty:A.value||e.dirty,disabled:w.value,focused:d.value,error:X.value===!1}),C(m({},i),{default:Y=>{let{props:ee}=Y,T=ee,{class:D}=T,Z=h(T,["class"]);const R=ge(a("input",k({ref:f,value:r.value,onInput:J,autofocus:e.autofocus,readonly:Q.value,disabled:w.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:x,onBlur:O},Z,c),null),[[ye("intersect"),{handler:W},null,{once:!0}]]);return a(P,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[a("span",{class:"v-text-field__prefix__text"},[e.prefix])]),i.default?a("div",{class:D,"data-no-activator":""},[i.default(),R]):Ce(R,{class:D}),e.suffix&&a("span",{class:"v-text-field__suffix"},[a("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}}))},details:o?v=>{var V;return a(P,null,[(V=i.details)==null?void 0:V.call(i,v),t&&a(P,null,[a("span",null,null),a(re,{active:e.persistentCounter||d.value,value:j.value,max:z.value,disabled:e.disabled},i.counter)])])}:void 0}))}),ce({},_,I,f)}});export{Se as V,ke as m};
