import{_ as l,o as a,c as d,a as e,w as g,b as r,v as i,d as u}from"./index.f2addf97.js";const p={data(){return{username:"",password:""}},methods:{login(){this.username&&this.password?console.log("Logging in with:",this.username,this.password):console.error("Please enter both username and password.")},googleLogin(){console.log("Google login initiated"),this.$router.push({name:"createresume"})}}},m={class:"v-container v-locale--is-ltr"},v={class:"login-page"},w={class:"form-group"},_={class:"form-group"},f={class:"button-group"};function b(L,o,x,y,t,n){return a(),d("div",m,[e("div",v,[o[8]||(o[8]=e("h1",null,"Resume Builder",-1)),e("form",{onSubmit:o[3]||(o[3]=g((...s)=>n.login&&n.login(...s),["prevent"]))},[e("div",w,[o[4]||(o[4]=e("label",{for:"username"},"Username",-1)),r(e("input",{type:"text",id:"username","onUpdate:modelValue":o[0]||(o[0]=s=>t.username=s),required:""},null,512),[[i,t.username]])]),e("div",_,[o[5]||(o[5]=e("label",{for:"password"},"Password",-1)),r(e("input",{type:"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=s=>t.password=s),required:""},null,512),[[i,t.password]])]),e("div",f,[o[7]||(o[7]=e("button",{type:"submit",class:"login-btn"},"Login",-1)),e("button",{type:"button",class:"google-btn",onClick:o[2]||(o[2]=(...s)=>n.googleLogin&&n.googleLogin(...s))},o[6]||(o[6]=[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google",class:"google-icon"},null,-1),u(" Sign in with Google ")]))])],32)])])}var G=l(p,[["render",b],["__scopeId","data-v-1e1e7865"]]);export{G as default};
