(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9502],{94946:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test_payment",function(){return t(80711)}])},80711:function(e,n,t){"use strict";t.r(n);var a=t(85893),i=t(67294),r=t(6154),o=t(68214),l=t.n(o);n.default=function(){let[e,n]=(0,i.useState)({amount:"",name:"",email:"",phone:""}),t=t=>{let{name:a,value:i}=t.target;n({...e,[a]:i})},o=async n=>{n.preventDefault();let t={key:"rAI8gg",txnid:l()(5).toString(),amount:e.amount,productinfo:"Product Info",firstname:e.name,email:e.email,phone:e.phone,surl:"https://0f22-157-37-143-117.ngrok-free.app/success",furl:"https://0f22-157-37-143-117.ngrok-free.app/failure",service_provider:"https://test.payu.in/_payment"};try{let e=await r.Z.post("https://sandboxsecure.payu.in/_payment",t);window.location=e.data}catch(e){console.error("Payment error:",e)}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"PayUMoney Payment Form"}),(0,a.jsxs)("form",{onSubmit:o,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"amount",children:"Amount:"}),(0,a.jsx)("input",{type:"number",id:"amount",name:"amount",value:e.amount,onChange:t,required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:t,required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:t,required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"phone",children:"Phone:"}),(0,a.jsx)("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:t,required:!0})]}),(0,a.jsx)("button",{type:"submit",children:"Pay Now"})]})]})}},42480:function(){}},function(e){e.O(0,[8214,8764,6154,9774,2888,179],function(){return e(e.s=94946)}),_N_E=e.O()}]);