import{T as b,e as d,b as a,u as s,w as m,F as w,o as n,Z as h,t as x,f as u,a as t,c as k,g as c,j as y,n as V,i as v}from"./app-92fc4aab.js";import{A as S}from"./AuthenticationCard-80f39556.js";import{A as B}from"./AuthenticationCardLogo-5257191e.js";import{_ as C}from"./Checkbox-691aab48.js";import{_ as f,a as p}from"./TextInput-9d8c5a2b.js";import{_}from"./InputLabel-f82e8e30.js";import{_ as $}from"./PrimaryButton-0c8141e3.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={key:0,class:"mb-4 font-medium text-sm text-green-600"},A=["onSubmit"],E={class:"mt-4"},L={class:"block mt-4"},N={class:"flex items-center"},F=t("span",{class:"ml-2 text-sm text-gray-600"},"Lembre-se de mim",-1),U={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(w,null,[a(s(h),{title:"Log in"}),a(S,null,{logo:m(()=>[a(B)]),default:m(()=>[l.status?(n(),d("div",q,x(l.status),1)):u("",!0),t("form",{onSubmit:v(g,["prevent"])},[t("div",null,[a(_,{for:"email",value:"Email"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",E,[a(_,{for:"password",value:"Senha"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",L,[t("label",N,[a(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),F])]),t("div",U,[l.canResetPassword?(n(),k(s(y),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[c(" Esqueceu a Senha? ")]),_:1},8,["href"])):u("",!0),a($,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Entrar ")]),_:1},8,["class","disabled"])])],40,A)]),_:1})],64))}};export{G as default};
