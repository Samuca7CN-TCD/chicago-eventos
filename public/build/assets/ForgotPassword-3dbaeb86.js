import{T as d,e as r,b as e,u as a,w as o,F as c,o as l,Z as f,t as _,f as p,a as t,n as g,g as h,i as b}from"./app-92fc4aab.js";import{A as v}from"./AuthenticationCard-80f39556.js";import{A as x}from"./AuthenticationCardLogo-5257191e.js";import{_ as w,a as V}from"./TextInput-9d8c5a2b.js";import{_ as k}from"./InputLabel-f82e8e30.js";import{_ as y}from"./PrimaryButton-0c8141e3.js";import"./_plugin-vue_export-helper-c27b6911.js";const C=t("div",{class:"mb-4 text-sm text-gray-600"}," Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos um e-mail com um link de redefinição de senha que permitirá que você escolha um novo. ",-1),S={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],A={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:String},setup(i){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(B,m)=>(l(),r(c,null,[e(a(f),{title:"Forgot Password"}),e(v,null,{logo:o(()=>[e(x)]),default:o(()=>[C,i.status?(l(),r("div",S,_(i.status),1)):p("",!0),t("form",{onSubmit:b(n,["prevent"])},[t("div",null,[e(k,{for:"email",value:"Email"}),e(w,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":m[0]||(m[0]=u=>a(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(V,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",A,[e(y,{class:g({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:o(()=>[h(" Link de redefinição de senha de e-mail ")]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64))}};export{j as default};
