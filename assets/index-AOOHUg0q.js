import{U as f,a,j as e,V as b,W as y,y as j,L as d,C as R,B as c,P as S}from"./index-CWksSG2a.js";import{F as _}from"./index-Bq0kIDKw.js";import"./index-CKGtthh-.js";const q="_signupForm_dx4zz_1",F="_buttonsRow_dx4zz_10",k="_loginButtonsWrapper_dx4zz_13",N="_feedbackMessage_dx4zz_16",r={signupForm:q,buttonsRow:F,loginButtonsWrapper:k,feedbackMessage:N};function P(){const p=f(),[m,n]=a.useState(""),[g,o]=a.useState(""),[i,l]=a.useState(""),x={name:"",email:"",password:"",confirmPassword:""},u=s=>{if(s.password!==s.confirmPassword){l("Password and Confirm password should match"),o(Date.now());return}if(m==="LOADING")return;n("LOADING");const h=t=>{l((t==null?void 0:t.message)||"Failed to  create account please try again"),o(Date.now()),n("ERROR")};y.signupUser({data:s}).then(t=>{j({message:"Your account created successfully. Please login"}),p.push("/login")},h)},w=[{name:"name",type:"text",label:"Name",rules:{required:"Required"}},{name:"email",type:"text",label:"Email",helperText:e.jsxs(e.Fragment,{children:["Use dummy email and password"," ",e.jsx(d,{to:"/privacy-terms",className:"app-link",children:"know more"})," "]}),rules:{required:"Required",pattern:{value:/\S+@\S+\.\S+/,message:"Enter a valid email"}}},{name:"password",type:"password",label:"Password",rules:{required:"Required"}},{name:"confirmPassword",type:"password",label:"Confirm Password",rules:{required:"Required"}},{type:"render",key:"buttons-wrapper",formFieldClass:r.buttonsRow,render:({handleSubmit:s})=>e.jsxs(R,{className:r.loginButtonsWrapper,children:[e.jsx(c,{type:"submit",onClick:s(u),children:"Signup"}),e.jsx("p",{className:"text-center",children:"Or"}),e.jsx(c,{component:d,to:"/login",variant:"text",children:"Login"})]})}];return e.jsxs("div",{className:r.signupForm,children:[i&&e.jsx(b,{className:r.feedbackMessage,type:"error",children:i},g),e.jsx(_,{items:w,defaultValues:x,onSubmit:u})]})}const E=()=>e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Signup"}),e.jsx(S,{title:"Signup"}),e.jsx(P,{})]});export{E as default};
