import{a as i}from"./index.becf6c0c.js";import{_ as c,o as p,bv as m,f as a,V as f,a as _,e,g as k,d as V}from"./index.fcfdb788.js";import{a as l,V as n}from"./VRow.4d970496.js";import{V as d}from"./VTextarea.a59759c0.js";import"./VField.6431dcf7.js";const I={data(){return{userInput:"",aiFeedback:""}},methods:{async getAIResponse(){try{const o=await i.post("https://api.cohere.ai/v1/generate",{model:"your-cohere-model",prompt:`Analyze the following input and provide suggestions: ${this.userInput}`,maxTokens:100,temperature:.7},{headers:{Authorization:"Bearer YOUR_COHERE_API_KEY","Content-Type":"application/json"}});this.aiFeedback=o.data.generations[0].text}catch(o){console.error("Error fetching AI response:",o),this.aiFeedback="Error fetching AI feedback. Please try again."}}}};function y(o,t,b,g,r,u){return p(),m(f,null,{default:a(()=>[t[3]||(t[3]=_("h1",{class:"text-center"},"Check with AI",-1)),e(n,{justify:"center"},{default:a(()=>[e(l,{cols:"12",sm:"8",md:"6"},{default:a(()=>[e(d,{modelValue:r.userInput,"onUpdate:modelValue":t[0]||(t[0]=s=>r.userInput=s),label:"Enter your data",rows:"4",outlined:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{justify:"center",class:"mt-5"},{default:a(()=>[e(l,{cols:"12",sm:"8",md:"6"},{default:a(()=>[e(d,{modelValue:r.aiFeedback,"onUpdate:modelValue":t[1]||(t[1]=s=>r.aiFeedback=s),label:"AI Feedback",rows:"4",outlined:"",readonly:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{justify:"center",class:"mt-5"},{default:a(()=>[e(l,{cols:"12",sm:"6",md:"3"},{default:a(()=>[e(k,{large:"",block:"",color:"primary",onClick:u.getAIResponse},{default:a(()=>t[2]||(t[2]=[V(" Get AI Feedback ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var w=c(I,[["render",y],["__scopeId","data-v-d6b0d3a2"]]);export{w as default};