import{_ as d,o as g,bv as f,f as s,V as p,a as i,t as _,e as a,g as n,d as u}from"./index.fcfdb788.js";import{a as c,V as k}from"./VRow.4d970496.js";const C={data(){return{message:"Choose an option to get started"}},mounted(){const o=new URLSearchParams(window.location.search),e=o.get("firstName"),t=o.get("lastName"),r=o.get("email");if(console.log("First Name:",e),console.log("Last Name:",t),console.log("Email:",r),e&&t&&r){const l={firstName:e,lastName:t,email:r};localStorage.setItem("user",JSON.stringify(l)),console.log("User data stored in localStorage:",l)}else console.error("User data not found in query parameters.")},methods:{goCreateResume(){this.$router.push({name:"create-resume"})},goAllResumes(){this.$router.push({name:"all-resumes"})},goCheckAI(){this.$router.push({name:"check-ai"})},goUploadResume(){this.$router.push({name:"upload-resume"})}}},h={class:"text-center"};function N(o,e,t,r,l,m){return g(),f(p,null,{default:s(()=>[e[4]||(e[4]=i("h1",{class:"text-center"},"Resume Management",-1)),i("h4",h,_(l.message),1),a(k,{class:"mt-5",justify:"center"},{default:s(()=>[a(c,{cols:"12",sm:"6",md:"3"},{default:s(()=>[a(n,{large:"",block:"",onClick:m.goCreateResume,color:"primary"},{default:s(()=>e[0]||(e[0]=[u("Create Resume")])),_:1},8,["onClick"])]),_:1}),a(c,{cols:"12",sm:"6",md:"3"},{default:s(()=>[a(n,{large:"",block:"",onClick:m.goAllResumes,color:"primary"},{default:s(()=>e[1]||(e[1]=[u("All Your Resumes")])),_:1},8,["onClick"])]),_:1}),a(c,{cols:"12",sm:"6",md:"3"},{default:s(()=>[a(n,{large:"",block:"",onClick:m.goCheckAI,color:"primary"},{default:s(()=>e[2]||(e[2]=[u("Check with AI")])),_:1},8,["onClick"])]),_:1}),a(c,{cols:"12",sm:"6",md:"3"},{default:s(()=>[a(n,{large:"",block:"",onClick:m.goUploadResume,color:"primary"},{default:s(()=>e[3]||(e[3]=[u("Upload Your Resume")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var V=d(C,[["render",N],["__scopeId","data-v-b936eaec"]]);export{V as default};
