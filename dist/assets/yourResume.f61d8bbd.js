import{_ as V,by as x,a0 as k,a9 as R,o as n,bv as d,f as t,V as w,a as i,e as r,c as D,r as N,d as l,t as f,bz as C,g as m,F as S}from"./index.fcfdb788.js";import{a as y,V as v}from"./VRow.4d970496.js";import{V as T,a as b,c as B,b as U,d as I}from"./VCard.b60bd416.js";import"./VAvatar.d4b3d169.js";const F={setup(){const u=x(),e=k([]),p=a=>{if(!a)return"N/A";try{return new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(c){return console.error("Date formatting error:",c),"Invalid Date"}},o=a=>{u.push({name:"resume-view",params:{id:a.id}})},_=a=>{e.value=e.value.filter(c=>c.id!==a),localStorage.setItem("resumes",JSON.stringify(e.value))},g=()=>{u.push({name:"upload-resume"})},s=()=>{u.push({name:"create-resume"})};return R(()=>{const a=JSON.parse(localStorage.getItem("resumes"))||[];console.log("Raw stored resumes:",a),e.value=a}),{resumes:e,formatDate:p,viewResume:o,deleteResume:_,goToUpload:g,goToCreate:s}}},Y={class:"d-flex justify-center gap-4 mt-4"};function j(u,e,p,o,_,g){return n(),d(w,null,{default:t(()=>[e[5]||(e[5]=i("h1",{class:"text-center mb-6"},"Your Resumes",-1)),r(v,null,{default:t(()=>[(n(!0),D(S,null,N(o.resumes,s=>(n(),d(y,{key:s.id,cols:"12",md:"6",lg:"4"},{default:t(()=>[r(T,{class:"mx-auto","max-width":"400"},{default:t(()=>[r(b,null,{default:t(()=>[l(f(s.resumeName||"Untitled Resume"),1)]),_:2},1024),r(B,null,{default:t(()=>[l(" Created: "+f(o.formatDate(s.uploadDate)),1)]),_:2},1024),s.name?(n(),d(U,{key:0},{default:t(()=>[i("p",null,f(s.name),1)]),_:2},1024)):C("",!0),r(I,null,{default:t(()=>[r(m,{color:"primary",text:"",onClick:a=>o.viewResume(s)},{default:t(()=>e[0]||(e[0]=[l(" View ")])),_:2},1032,["onClick"]),r(m,{color:"error",text:"",onClick:a=>o.deleteResume(s.id)},{default:t(()=>e[1]||(e[1]=[l(" Delete ")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),o.resumes.length===0?(n(),d(v,{key:0,justify:"center",align:"center",class:"mt-8"},{default:t(()=>[r(y,{cols:"12",class:"text-center"},{default:t(()=>[e[4]||(e[4]=i("p",{class:"text-h6 grey--text"},"No resumes yet",-1)),i("div",Y,[r(m,{color:"primary",onClick:o.goToUpload},{default:t(()=>e[2]||(e[2]=[l(" Upload Your First Resume ")])),_:1},8,["onClick"]),r(m,{color:"secondary",onClick:o.goToCreate},{default:t(()=>e[3]||(e[3]=[l(" Create Your Resume ")])),_:1},8,["onClick"])])]),_:1})]),_:1})):C("",!0)]),_:1})}var h=V(F,[["render",j],["__scopeId","data-v-c431aea2"]]);export{h as default};
