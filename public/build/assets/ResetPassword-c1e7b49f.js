import{T as c,e as f,b as e,u as o,w as l,F as w,o as _,Z as g,a as r,n as V,g as b,i as k}from"./app-92fc4aab.js";import{A as v}from"./AuthenticationCard-80f39556.js";import{A as h}from"./AuthenticationCardLogo-5257191e.js";import{_ as i,a as m}from"./TextInput-9d8c5a2b.js";import{_ as n}from"./InputLabel-f82e8e30.js";import{_ as x}from"./PrimaryButton-0c8141e3.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],C={class:"mt-4"},S={class:"mt-4"},A={class:"flex items-center justify-end mt-4"},P={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,a)=>(_(),f(w,null,[e(o(g),{title:"Reset Password"}),e(v,null,{logo:l(()=>[e(h)]),default:l(()=>[r("form",{onSubmit:k(p,["prevent"])},[r("div",null,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",C,[e(n,{for:"password",value:"Senha"}),e(i,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",S,[e(n,{for:"password_confirmation",value:"Confirme sua senha"}),e(i,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),r("div",A,[e(x,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:l(()=>[b(" Redefinir senha ")]),_:1},8,["class","disabled"])])],40,y)]),_:1})],64))}};export{P as default};