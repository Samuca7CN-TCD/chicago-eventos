import{d as i,c as N,w as m,y as F,o as _,a as t,g as h,t as l,u as r,l as y,q as w,n as c,e as b,h as S,F as Y,f as A}from"./app-92fc4aab.js";import{_ as B}from"./AppLayout-8f562265.js";import{t as d}from"./shared_functions-016de35d.js";const E=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),P={class:"w-11/12 m-auto px-0 rounded-xl shadow-2xl min-h-[525px] my-10 bg-white select-none overflow-hidden"},L={class:"bg-stone-900 text-white rounded-md py-5 flex flex-row space-x-5 px-14 align-middle items-center text-2xl mx-5 mt-5"},T=t("p",null,"Valor Total:",-1),j=t("p",{class:"text-xs text-white"},null,-1),q={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 m-5"},G={class:"w-full bg-orange-600 text-white rounded-md py-5 flex-col-config text-2xl"},I=t("p",null,"Valor recebido",-1),U={class:"w-full bg-yellow-600 text-white rounded-md py-5 flex-col-config text-2xl"},z=t("p",null,"Valor a receber",-1),H={class:"w-full bg-red-600 text-white rounded-md py-5 flex-col-config text-2xl"},O=t("p",null,"Custos",-1),R={class:"flex-row-config space-x-10"},J=t("p",{class:"text-xs"},"Cerimônias",-1),K={class:"text-lg"},Q=["href"],W=t("p",{class:"text-xs"},"Gastos Mensais",-1),X={class:"text-lg"},Z={class:"w-full bg-green-600 text-white rounded-md py-5 flex flex-col align-middle items-center text-2xl"},tt=t("p",null,"Lucro das Cerimônias",-1),et={class:"m-10 p-10 rounded-lg bg-gray-50"},ot={class:"w-full rounded-md text-center items-center text-2xl"},st=t("p",null,"A receber no período",-1),at=t("p",{class:"text-xs text-gray-900"},"Selecine um período nos campos abaixo para saber quanto dinhero irá entrar",-1),lt={class:"col-row-config md:flex-row-config my-5 md:space-x-10"},nt={class:"w-full md:w-1/3"},rt=t("label",{for:"dashboard-begin",class:"text-xs text-slate-700"},"Início",-1),dt={class:"w-full md:w-1/3"},it=t("label",{for:"dashboard-end",class:"text-xs text-slate-700"},"Fim",-1),ct={class:"overflow-x-auto"},ut={class:"flex-row-config divide-x-2 border-2 border-full w-fit m-auto"},gt={class:"mt-10 overflow-auto"},_t={class:"w-full m-auto table-auto truncate"},ht=t("thead",{class:"lg:border-b-2 lg:border-gray-500"},[t("th",null,"Cliente"),t("th",null,"Cerimômia"),t("th",null,"Valor total"),t("th",null,"Valor Pago"),t("th",null,"Valor restante"),t("th",null,"Gasto total"),t("th",null,"Lucro estimado")],-1),pt={class:"py-3 px-5 truncate text-center"},bt=["href"],xt={class:"py-3 px-5 truncate text-center"},vt=["href"],ft={class:"py-3 px-5 truncate text-center"},mt=["href"],yt={class:"py-3 px-5 truncate text-center"},wt=["href"],Dt={class:"py-3 px-5 truncate text-center"},kt=["href"],Ct={class:"py-3 px-5 truncate text-center"},Mt=["href"],Vt={class:"py-3 px-5 truncate text-center"},$t=["href"],Nt={key:0,class:"w-full text-center py-5 text-lg"},Ft=t("p",null,"Não há orçamentos ativos no momento",-1),St=[Ft],Et={__name:"Dashboard",props:{budgets:Object,valor_total:Number,total_recebido:Number,total_a_receber:Number,total_custos:Number,total_gastos_mensais:Number,total_lucro:Number},setup(p){const g=p,D=i(g.valor_total),k=i(g.total_recebido),C=i(g.total_a_receber),M=i(g.total_gastos_mensais),V=i(g.total_custos),$=i(g.total_lucro),x=i(0),a=i({begin:"2023-05-29",end:"2023-05-29",option:0});i([{cliente:null,cerimonia:null,valor_total:0,valor_pago:0,valor_restante:0,gasto_total:0,lucro:0}]);const u=s=>{a.value.option=s;const o=new Date,e=new Date,n=new Date;switch(s){case 0:break;case 1:e.setDate(o.getDate()+1),n.setDate(o.getDate()+1);break;case 2:e.setDate(o.getDate()-o.getDay()),n.setDate(e.getDate()+6);break;case 3:e.setDate(o.getDate()+(6-o.getDay())%6+1),n.setDate(e.getDate()+6);break;case 4:e.setDate(1),n.setMonth(o.getMonth()+1,0);break;case 5:e.setMonth(o.getMonth()+1,1),n.setMonth(o.getMonth()+2,0);break;case 6:e.setMonth(0,1),n.setMonth(11,31);break;case 7:e.setFullYear(o.getFullYear()+1,0,1),n.setFullYear(o.getFullYear()+1,11,31);break}a.value.begin=f(e),a.value.end=f(n),v()},v=()=>{F.get(route("to-receive",{begin:a.value.begin,end:a.value.end})).then(s=>{x.value=s.data?s.data:0})},f=s=>{const o=s.getFullYear(),e=(s.getMonth()+1).toString().padStart(2,"0"),n=s.getDate().toString().padStart(2,"0");return`${o}-${e}-${n}`};return v(),(s,o)=>(_(),N(B,{title:"Dashboard",activated_page:-50},{header:m(()=>[E]),default:m(()=>[t("section",P,[t("div",L,[T,j,h(" "+l(r(d)(D.value)),1)]),t("div",q,[t("div",G,[I,h(" "+l(r(d)(k.value)),1)]),t("div",U,[z,h(" "+l(r(d)(C.value)),1)]),t("div",H,[O,t("span",R,[t("span",null,[J,t("p",K,l(r(d)(V.value)),1)]),t("span",null,[t("a",{href:s.route("monthly_expenses.index")},[W,t("p",X,l(r(d)(M.value)),1)],8,Q)])])]),t("div",Z,[tt,h(" "+l(r(d)($.value)),1)])]),t("div",et,[t("div",ot,[st,t("span",null,l(r(d)(x.value)),1),at]),t("div",lt,[t("div",nt,[rt,y(t("input",{type:"date",id:"dashboard-begin",placeholder:"Data de Início",class:"w-full border-slate-300 sm:text-md","onUpdate:modelValue":o[0]||(o[0]=e=>a.value.begin=e)},null,512),[[w,a.value.begin]])]),t("div",dt,[it,y(t("input",{type:"date",id:"dashboard-end",placeholder:"Data de Fim",class:"w-full border-slate-300 sm:text-md","onUpdate:modelValue":o[1]||(o[1]=e=>a.value.end=e)},null,512),[[w,a.value.end]])])]),t("div",ct,[t("ul",ut,[t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==0}]),onClick:o[2]||(o[2]=e=>u(0))},"Hoje ",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==1}]),onClick:o[3]||(o[3]=e=>u(1))},"Amanhã ",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==2}]),onClick:o[4]||(o[4]=e=>u(2))},"Esta Semana",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==3}]),onClick:o[5]||(o[5]=e=>u(3))},"Próxima Semana",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==4}]),onClick:o[6]||(o[6]=e=>u(4))},"Este Mês ",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==5}]),onClick:o[7]||(o[7]=e=>u(5))},"Próximo Mês",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==6}]),onClick:o[8]||(o[8]=e=>u(6))},"Este Ano ",2),t("li",{class:c(["px-5 py-2 hover:bg-gray-100 cursor-pointer",{"bg-gray-200":a.value.option==7}]),onClick:o[9]||(o[9]=e=>u(7))},"Próximo Ano",2)])])]),t("div",gt,[t("table",_t,[ht,t("tbody",null,[(_(!0),b(Y,null,S(p.budgets,(e,n)=>(_(),b("tr",{key:e.id,class:c(["cursor-pointer",{"bg-gray-100":n%2==0}])},[t("td",pt,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(e.client_name),9,bt)]),t("td",xt,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(e.event_name),9,vt)]),t("td",ft,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(r(d)(e.total_negociado+e.total_adicionado)),9,mt)]),t("td",yt,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(r(d)(e.valor_pago)),9,wt)]),t("td",Dt,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(r(d)(e.total_negociado+e.total_adicionado-e.valor_pago)),9,kt)]),t("td",Ct,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(r(d)(e.total_gastos)),9,Mt)]),t("td",Vt,[t("a",{href:s.route("budgets.show",e.id),target:"_blank"},l(r(d)(e.total_negociado+e.total_adicionado-e.total_gastos)),9,$t)])],2))),128))])]),p.budgets.length?A("",!0):(_(),b("div",Nt,St))])])]),_:1}))}};export{Et as default};
