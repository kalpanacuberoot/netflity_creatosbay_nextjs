(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8082],{97383:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brand",function(){return l(6643)}])},6643:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var r=l(85893),o=l(67294),a=l(91e3),s=l(57318);l(87486);var n=l(66029);l(41664);var d=l(39332),i=l(59262),c=l(31955),u=l(91444);l(71399);var g=l(38417),x=l(25675),h=l.n(x),p=()=>{let e=(0,d.useRouter)(),[t,l]=(0,o.useState)(""),[a,s]=(0,o.useState)(""),[x,p]=(0,o.useState)(!1),[m,f]=(0,o.useState)([]),[b,y]=(0,o.useState)(null);(0,o.useRef)(null);let[w,v]=(0,o.useState)(""),[j,N]=(0,o.useState)([]),[k,_]=(0,o.useState)(null),[S,C]=(0,o.useState)(!1),[Z,B]=(0,o.useState)([]);console.log("dropdownvalues",m),console.log("file",b),console.log("file--------",b);let O=async()=>{try{var t,l,r,o;let a=c.Z.get("user_data");console.log("categories cookieValue------------1",JSON.parse(a).user.type);let s=null===(t=JSON.parse(a))||void 0===t?void 0:null===(l=t.user)||void 0===l?void 0:l.type;if(void 0===a||"brand"!==s)console.log("User not authenticated, navigating to login page..."),e.push("/login"),console.log("categories cookieValue----brand--------userId",null==a?void 0:a.token);else{let e=JSON.parse(c.Z.get("user_data"));console.log("categories cookieValue------------1",null==e?void 0:e.token);try{let t=await fetch("".concat(i.HQ,"/categories"),{method:"Get",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(null==e?void 0:e.token)}});if(console.log("categories response------",t),t.ok){let e=await t.json();console.log("brand result------------",null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.data),f(null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.data)}else console.error("Error:",t.statusText)}catch(e){console.error("Error:",e)}}}catch(e){console.error("Error parsing user_data cookie:",e)}};(0,o.useEffect)(()=>{O()},[]);let E=(e,t)=>{Z.some(e=>e.id===t.id)?B(Z.filter(e=>e.id!==t.id)):B([...Z,t])},F=Z.map(e=>null==e?void 0:e.id);return console.log("setSelectedValues",Z,F),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"p-10 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full rounded-lg border-1",children:[!x&&(0,r.jsx)("div",{className:"bg-white p-10 m-10 rounded-md",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{className:"font-bold",style:{color:n.Z.logo_clr},children:"1/2"}),(0,r.jsx)("h1",{className:"mt-0 mb-5 font-bold text-left text-gray-900   ",children:"Brand Details."}),(0,r.jsx)("input",{type:"compant",id:"company_name",className:"appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Brand Name",value:t,onChange:e=>l(e.target.value),required:!0,pattern:"[a-zA-Z ]{3,190}",title:"Only Alphabets and Spaces are allowed. Minimum characters 3"}),(0,r.jsx)("input",{type:"url",id:"website",className:"appearance-none border rounded-md w-full mt-5 bg-gray-100  py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:"Add Website URL or Social Links",value:a,onChange:e=>s(e.target.value),required:!0}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:()=>C(!S),id:"dropdownBgHoverButton",className:"  focus:border-purple-500 focus:ring-purple-500 hidden relative flex flex-row justify-between items-center text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500",type:"button",children:(0,r.jsx)("svg",{className:" w-2.5 h-2.5 ml-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})})}),(0,r.jsx)("div",{className:"flex flex-row justify-between items-center",children:(0,r.jsx)("div",{className:"select",children:(0,r.jsx)("input",{type:"text",className:"cursor-pointer focus:border-purple-500 focus:ring-purple-500 text-left block appearance-none border rounded-md w-full mt-5 bg-gray-100 outline-none py-5 px-3 text-gray-700 focus:shadow-outline border-gray-300 pr-8 leading-tight focus:outline-none focus:border-gray-500",value:Z.map(e=>e.name).join(", "),readOnly:!0,placeholder:"Select Your Industry Type",onClick:()=>C(!S),required:!0})})}),S&&(0,r.jsx)("div",{id:"dropdownBgHover",className:"z-10 w-full bg-white rounded-lg shadow dark:bg-gray-700",children:(0,r.jsx)("ul",{className:"p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownBgHoverButton",children:m.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-base",children:[(0,r.jsx)("input",{id:"checkbox-item-".concat(t),type:"checkbox",value:JSON.stringify(e),onChange:t=>E(t,e),checked:Z.some(t=>JSON.stringify(t)===JSON.stringify(e)),className:"w-4 h-4 me-5 text-base text-blue-600 bg-gray-300 border-slate-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),(0,r.jsx)("label",{htmlFor:"checkbox-item-".concat(t),className:"cursor-pointer w-full ml-2 capitalize text-base text-gray-600 rounded dark:text-gray-300",children:e.name})]})},t))})})]}),(0,r.jsx)("button",{type:"submit",onClick:()=>p(!0),className:" rounded-3xl mt-5 text-white w-full  font-bold py-3 px-4  focus:outline-none focus:shadow-outline",style:{backgroundColor:n.Z.logo_clr},children:"Next"})]})}),(0,r.jsx)(u.Ix,{}),x&&(0,r.jsx)("div",{className:"p-4 lg:p-10 bg-zinc-100 border-gray-300 border-solid w-full w-90 rounded-lg border-1",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-md",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center w-full",children:[(0,r.jsx)(h(),{src:g.Z.arrowleft_icon,alt:"",width:45,height:25,onClick:()=>p(!1)}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("h4",{className:" text-center font-bold",style:{color:n.Z.logo_clr},children:"2/2"})})]}),(0,r.jsxs)("div",{className:"px-14 mt-5",children:[(0,r.jsx)("h1",{className:"mt-0 mb-5  font-bold text-left text-gray-900 ",children:"Brand Details."}),(0,r.jsx)("div",{className:" ",children:(0,r.jsx)("div",{className:" focus:border-purple-500 focus:ring-purple-500 border-dotted h-48 align-middle border-4 rounded-lg bg-white py-4 px-6 flex flex-col items-center justify-center",onChange:e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onloadend=()=>{y(t),_(e.result)},e.readAsDataURL(t)}else y(null),_(null)},children:(0,r.jsxs)("label",{htmlFor:"fileInput",style:{borderColor:n.Z.logo_clr},className:"w-auto py-5",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",className:"absolute w-screen hidden "}),!b&&(0,r.jsx)(h(),{src:g.Z.plus_icon,width:15,height:15,alt:"",className:"mx-auto cursor-default m-5 mb-0"})]}),k&&(0,r.jsx)(h(),{src:k,alt:"Selected",style:{maxWidth:"100%",maxHeight:"300px"},width:50,height:50,className:"mx-auto"}),b&&(0,r.jsx)("p",{className:"text-base text-center",children:null==b?void 0:b.name}),!b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:" text-base text-gray-300 ",children:"Company Logo(Upload Image)"}),(0,r.jsx)("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-300  text-center",id:"file_input_help",children:"SVG, PNG, JPG or GIF"})]})]})})}),(0,r.jsx)("textarea",{id:"descriptionInput",type:"text",placeholder:"Brand Description",className:"appearance-none border rounded-md w-full align-top mt-5 bg-gray-100 h-40 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",rows:4,value:w,onChange:e=>v(e.target.value),required:!0}),(0,r.jsx)("button",{type:"submit",className:"rounded-3xl mt-5 text-white w-full py-3 px-4  focus:outline-none focus:shadow-outline",style:{backgroundColor:n.Z.logo_clr},onClick:()=>e.push("/home"),children:"Save"})]})]})})]})})};l(11163);var m=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:" flex flex-row h-screen bg-zinc-100 ",children:[(0,r.jsx)("div",{className:"auto-cols-max w-2/3 h-screen ",children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(p,{})})}),(0,r.jsx)("div",{className:"auto-cols-max h-screen",children:(0,r.jsx)(s.Z,{})})]})})}},function(e){e.O(0,[6008,7944,9774,2888,179],function(){return e(e.s=97383)}),_N_E=e.O()}]);