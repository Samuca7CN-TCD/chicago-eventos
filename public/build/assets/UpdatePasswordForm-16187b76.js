import{d as i,T as f,c as w,w as e,o as g,g as n,a as l,b as o,u as a,n as v}from"./app-92fc4aab.js";import{_ as V}from"./ActionMessage-a98a0c22.js";import{_ as S}from"./FormSection-e1606fed.js";import{_ as d,a as p}from"./TextInput-9d8c5a2b.js";import{_ as u}from"./InputLabel-f82e8e30.js";import{_ as b}from"./PrimaryButton-0c8141e3.js";import"./SectionTitle-f4abee17.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={class:"col-span-6 sm:col-span-4"},y={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup(P){const c=i(null),m=i(null),s=f({current_password:"",password:"",password_confirmation:""}),_=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(h,r)=>(g(),w(S,{onSubmitted:_},{title:e(()=>[n(" Atualizar senha ")]),description:e(()=>[n(" Certifique-se de que sua conta esteja usando uma senha longa e aleatória para se manter segura. ")]),form:e(()=>[l("div",k,[o(u,{for:"current_password",value:"Senha atual"}),o(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:a(s).current_password,"onUpdate:modelValue":r[0]||(r[0]=t=>a(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),o(p,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",y,[o(u,{for:"password",value:"Nova Senha"}),o(d,{id:"password",ref_key:"passwordInput",ref:c,modelValue:a(s).password,"onUpdate:modelValue":r[1]||(r[1]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",$,[o(u,{for:"password_confirmation",value:"Confirme sua senha"}),o(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(p,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[o(V,{on:a(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Salvo. ")]),_:1},8,["on"]),o(b,{class:v({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:e(()=>[n(" Salvar ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
