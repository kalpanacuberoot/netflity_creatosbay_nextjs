(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4502],{35456:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creator_single_chat",function(){return t(67201)}])},67201:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return j}});var o=t(85893),l=t(93153),s=t(66029),r=t(11163),n=t(31955),i=t(67294),d=t(59262),c=t(25675),u=t.n(c),m=t(38417),h=t(2859);t(99924);var g=e=>(console.log("Brand_Avatar_single_withoutbadge",e.item),(0,o.jsx)(o.Fragment,{children:e.item.length>0&&e.item.map((e,a)=>{var t,l,s,r,n,i;return(0,o.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,o.jsx)(u(),{className:"rounded-full",src:(null==e?void 0:null===(t=e.campaign)||void 0===t?void 0:null===(l=t.brand)||void 0===l?void 0:l.logo)?null==e?void 0:null===(s=e.campaign)||void 0===s?void 0:null===(r=s.brand)||void 0===r?void 0:r.logo:m.Z.avatar1,alt:"",width:52,height:52}),(0,o.jsxs)("div",{className:"font-medium dark:text-white",children:[(0,o.jsx)("div",{className:"font_size_16 capitalize",children:null==e?void 0:null===(n=e.campaign)||void 0===n?void 0:n.brand.name}),(0,o.jsx)("div",{className:"text-sm text-gray-500 font_size_14 dark:text-gray-400 capitalize",children:null==e?void 0:null===(i=e.campaign)||void 0===i?void 0:i.name})]})]},a)})})),p=t(91444);t(71399);var v=t(63018),x=e=>{let a=(0,r.useRouter)(),[t,l]=(0,i.useState)([]),[c,h]=(0,i.useState)(!1),[g,x]=(0,i.useState)([]),[f,j]=(0,i.useState)(!1),[w,y]=(0,i.useState)(""),[b,_]=(0,i.useState)(null),[N,k]=(0,i.useState)(0),C=(0,i.useRef)(null),S=(0,i.useRef)(null),Z=async()=>{if(!b){alert("No file selected.");return}let e=new FormData;e.append("file",b);let t=JSON.parse(n.Z.get("creator_user_data"));console.log("categories cookieValue------------2",null==t?void 0:t.token);let o={Authorization:"Bearer ".concat(null==t?void 0:t.token)};try{let t=await fetch("".concat(d.HQ,"/saveimage"),{method:"POST",headers:o,body:e});if(console.log("creator chat upload portfolio",t),t.ok){console.log("creator file uploaded",b);let e=await t.json();return _(null==e?void 0:e.url),console.log("image response ok",null==e?void 0:e.url),p.Am.success("Image Uploaded Successfully",{position:"top-center",autoClose:2e3}),e}if(413===t.status)return p.Am.error("Request Entity Too Large",{position:"top-center",autoClose:3e3}),null;if(404===t.status)return console.error("File not found or other specific error."),a.push("/login"),null;return p.Am.error("Image upload failed",{position:"top-center",autoClose:3e3}),null}catch(e){return console.error("An error occurred:",e),null}};console.log("sleectded craetor file",b);let A=async()=>{h(!0);let t=JSON.parse(n.Z.get("creator_user_data"));try{var o,l,s,r,i;let n={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(null==t?void 0:t.token)}},c=new URLSearchParams({brand:null==e?void 0:null===(o=e.campaignBrandData)||void 0===o?void 0:null===(l=o.campaign)||void 0===l?void 0:null===(s=l.brand)||void 0===s?void 0:s.id,creator:null==e?void 0:null===(r=e.campaignBrandData)||void 0===r?void 0:r.creator_id,campaign:null==e?void 0:null===(i=e.campaignBrandData)||void 0===i?void 0:i.campaign_id}),u=await fetch("".concat(d.HQ,"/messages?").concat(c.toString()),n);if(console.log("campaigns communication------",u),401===u.status)p.Am.error("Session Expired: Please login again to continue.",{position:"top-center",autoClose:5e3}),a.push("/login");else if(429===u.status)p.Am.error("Too many requests: Please wait for a few minutes to try and login again.",{position:"top-center",autoClose:5e3}),a.push("/login");else if(500===u.status)p.Am.error("Server Error: Please wait while we fix this problem for you.",{position:"top-center",autoClose:5e3}),a.push("/login");else if(!u.ok)throw Error("Request failed with status: ".concat(u.status));let m=await u.json();console.log("responseData messgaes",Math.ceil(m.data.total/m.data.per_page)),console.log("all creator messages chats :",m.data.data),k(m.data.total),h(!1),E()}catch(e){throw console.error("Error:",e),e}},B=async a=>{if(!b&&!g){alert("Please select a file or enter text.");return}a.preventDefault();let t=JSON.parse(n.Z.get("creator_user_data"));console.log("campaigns cookieValue------------1",null==t?void 0:t.token);try{var o,l,s,r,i;let a="text",n=new FormData;if(n.append("brand_id",null==e?void 0:null===(o=e.campaignBrandData)||void 0===o?void 0:null===(l=o.campaign)||void 0===l?void 0:null===(s=l.brand)||void 0===s?void 0:s.id),n.append("campaign_id",null==e?void 0:null===(r=e.campaignBrandData)||void 0===r?void 0:r.campaign_id),n.append("creator_id",null==e?void 0:null===(i=e.campaignBrandData)||void 0===i?void 0:i.creator_id),n.append("sender_type","creator"),n.append("type",a),b){let e=b.type;if(e.startsWith("image/")||e.startsWith("video/")){let e=await Z();e&&(a="file",n.append("data",e.url))}}else a="text",n.append("data",g);let c={Authorization:"Bearer ".concat(null==t?void 0:t.token)},u=await fetch("".concat(d.HQ,"/messages"),{method:"POST",headers:c,body:n}),m=await u.json();console.log("handleClick creator1",u,m),console.log("handleClick creator",m),"success"===m.status?(console.log("POST response creator chats type-------------:",null==m?void 0:m.data),p.Am.success("Message is Sent",{position:"top-center",autoClose:5e3}),x(""),_(null),await A(),h(!1)):p.Am.error("Too many requests: Please wait for a few minutes to try and login again.",{position:"top-center",autoClose:5e3})}catch(e){console.log("cahts creator handleClickerror",e)}},z=async()=>{var a,o,s,r,i;let c=t.length+10;console.log("loadItems",c,t.length);let u=JSON.parse(n.Z.get("creator_user_data")),m=null==e?void 0:null===(a=e.campaignBrandData)||void 0===a?void 0:null===(o=a.campaign)||void 0===o?void 0:null===(s=o.brand)||void 0===s?void 0:s.id,h=null==e?void 0:null===(r=e.campaignBrandData)||void 0===r?void 0:r.creator_id,g=null==e?void 0:null===(i=e.campaignBrandData)||void 0===i?void 0:i.campaign_id,p={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(null==u?void 0:u.token)}};try{let e=await fetch("".concat(d.HQ,"/messages?brand=").concat(m,"&creator=").concat(h,"&campaign=").concat(g,"&per_page=").concat(c),p);if(!e.ok)throw Error("Request failed with status: ".concat(e.status));let a=await e.json(),t=a.data.data;k(c),l(t)}catch(e){console.error("Error:",e)}};(0,i.useEffect)(()=>{if(N>0){var a,t,o,s,r;let i=JSON.parse(n.Z.get("creator_user_data")),c=Math.ceil(N/10);console.log("change_per_page",c,N,10),console.log("totalMessages",N);let u=null==e?void 0:null===(a=e.campaignBrandData)||void 0===a?void 0:null===(t=a.campaign)||void 0===t?void 0:null===(o=t.brand)||void 0===o?void 0:o.id,m=null==e?void 0:null===(s=e.campaignBrandData)||void 0===s?void 0:s.creator_id,g=null==e?void 0:null===(r=e.campaignBrandData)||void 0===r?void 0:r.campaign_id,p={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(null==i?void 0:i.token)}},v=async()=>{try{let e=await fetch("".concat(d.HQ,"/messages?brand=").concat(u,"&creator=").concat(m,"&campaign=").concat(g,"&current_page=").concat(c),p);if(!e.ok)throw Error("Request failed with status: ".concat(e.status));let a=await e.json();l(a.data.data),console.log("responseData changebpermessgaes",Math.ceil(a.data.total/a.data.per_page)),h(!1)}catch(e){console.error("Error:",e),h(!1)}};v()}},[N]),(0,i.useEffect)(()=>{A(),e&&A()},[e]);let E=()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)};return console.log("creator single chat allMessages",t),(0,o.jsx)(o.Fragment,{children:c?(0,o.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,o.jsx)(u(),{width:100,height:100,alt:"",src:m.Z.Loader})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"chat-container px-5 pt-5 rounded overflow-y-auto",ref:S,style:{scrollBehavior:"smooth"},children:[t.length<N&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{onClick:z,className:"w-full text-sm bg-green-600 text-white py-1 rounded text-center",children:"Click on Load More button to get older Messages"})}),t.length>0&&t.map((e,a)=>{let t="creator"===e.sender_type,l="brand"===e.sender_type,r=l?"left-message":t?"right-message":"",n=null==e?void 0:e.updated_at,i=new Date(n),d=i.getHours().toString().padStart(2,"0"),c=i.getMinutes().toString().padStart(2,"0"),u="".concat(d,":").concat(c);console.log(u);let m=0===e.content&&/\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(e.data),h=0===e.content&&/\.(mp4|avi|mov|wmv|flv|mkv|webm|ogg|ogv)$/i.test(e.data)||/(youtube\.com|instagram\.com)/i.test(e.data)||/youtu\.be/i.test(e.data)||/youtube\.com\/shorts/i.test(e.data);return(console.log("isImageLink",m),m)?(0,o.jsx)("div",{className:"px-5 py-5 overflow-y-auto",style:{backgroundColor:s.Z.light_bg_clr},children:(0,o.jsxs)("div",{className:"chat-message shadow-lg ".concat(r),children:[(0,o.jsx)("a",{href:null==e?void 0:e.data,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)("img",{src:null==e?void 0:e.data,alt:"Image",style:{maxWidth:"100%",maxHeight:"150px",opacity:1}}),(0,o.jsx)("div",{className:"flex items-center justify-center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer",backgroundColor:"#000000a1",padding:"5px",width:"100%",height:"100%"},onClick:e=>{e.stopPropagation()},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"30.000000pt",height:"30.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:(0,o.jsxs)("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#fff",stroke:"none",children:[(0,o.jsx)("path",{d:"M2175 5106 c-37 -17 -70 -52 -84 -89 -8 -19 -11 -360 -11 -1083 l0 -1054 -332 0 c-303 0 -337 -2 -374 -19 -61 -28 -89 -73 -89 -142 0 -50 5 -63 35 -101 19 -24 283 -327 587 -674 379 -434 563 -636 586 -648 44 -20 90 -20 134 0 23 12 207 214 586 648 304 347 568 650 587 674 31 39 35 50 35 102 0 50 -5 64 -31 96 -49 60 -62 62 -431 63 l-333 1 -2 1069 c-3 1063 -3 1070 -24 1097 -11 15 -33 37 -48 48 -26 20 -41 21 -394 23 -291 2 -373 0 -397 -11z"}),(0,o.jsx)("path",{d:"M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z"})]})})})]})}),(0,o.jsxs)("div",{className:"flex justify-end items-center mt-5",children:[(0,o.jsx)("p",{className:"pt-1 text-gray-500 me-2",children:u}),(0,o.jsx)("svg",{className:"bg-grey-500",xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"15.000000pt",height:"15.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:(0,o.jsxs)("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#A0A0A0",stroke:"none",children:[(0,o.jsx)("path",{d:"M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"}),(0,o.jsx)("path",{d:"M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"})]})})]})]})},a):h?(0,o.jsx)("div",{className:"px-5 py-5 overflow-y-auto",style:{backgroundColor:s.Z.light_bg_clr},children:(0,o.jsx)("div",{className:"chat-message shadow-lg ".concat(r),children:"video"===e.type?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(v.Z,{url:null==e?void 0:e.data})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("a",{href:null==e?void 0:e.data,target:"_blank",rel:"noopener noreferrer",children:(null==e?void 0:e.type)==="text"?(0,o.jsx)("span",{children:null==e?void 0:e.data}):(0,o.jsxs)("span",{children:[(0,o.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Download File"]})})})})},a):(0,o.jsx)("div",{className:"px-5 py-5 overflow-y-auto",style:{backgroundColor:s.Z.light_bg_clr},children:(0,o.jsxs)("div",{className:"chat-message shadow-lg ".concat(r),children:[(0,o.jsx)("div",{className:"pe-10 ps-1",children:e.data}),(0,o.jsxs)("div",{className:"flex justify-end items-center",children:[(0,o.jsx)("p",{className:"pt-1 text-gray-500 me-2",children:u}),(0,o.jsx)("svg",{className:"bg-grey-500",xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"15.000000pt",height:"15.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:(0,o.jsxs)("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#A0A0A0",stroke:"none",children:[(0,o.jsx)("path",{d:"M3249 3826 c-19 -7 -45 -19 -57 -28 -12 -8 -358 -347 -770 -754 -411 -406 -840 -830 -953 -942 l-206 -203 -401 418 c-221 230 -423 435 -449 455 -130 102 -310 60 -389 -92 -29 -55 -26 -163 6 -222 16 -30 201 -229 512 -551 268 -278 512 -527 541 -554 59 -54 108 -73 183 -73 105 0 69 -33 1204 1090 580 574 1065 1057 1078 1074 69 94 49 256 -41 332 -72 61 -174 80 -258 50z"}),(0,o.jsx)("path",{d:"M4777 3816 c-20 -8 -52 -25 -70 -40 -17 -14 -452 -442 -966 -950 l-935 -925 -63 59 c-103 96 -204 113 -315 53 -85 -46 -128 -121 -128 -223 0 -70 17 -117 61 -169 81 -94 295 -302 328 -317 20 -10 64 -20 98 -22 121 -8 57 -65 1218 1083 578 572 1060 1053 1072 1071 92 133 22 328 -136 382 -45 16 -117 14 -164 -2z"})]})})]})]})},a)}),f&&(0,o.jsx)("div",{className:"modal",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsx)("span",{className:"close",onClick:()=>{y(""),j(!1)},children:"\xd7"}),(0,o.jsxs)("video",{controls:!0,width:"500",height:"auto",children:[(0,o.jsx)("source",{src:w,type:"video/mp4"}),"Your browser does not support the video tag."]})]})})]}),(0,o.jsxs)("div",{className:" flex flex-col h-auto px-5 pb-5 ",children:[(0,o.jsx)("hr",{className:"my-5"}),(0,o.jsxs)("form",{className:"flex items-center",children:[(0,o.jsx)("label",{htmlFor:"voice-search",className:"sr-only",children:"Search"}),(0,o.jsxs)("div",{className:"relative w-full overflow-y-auto",children:[(0,o.jsx)("input",{type:"text",id:"voice-search",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Type something here......",value:b?null==b?void 0:b.name:g,onChange:e=>x(e.target.value)}),b&&(0,o.jsx)("button",{onClick:()=>_(null),className:"absolute inset-y-0 right-14 flex items-center pr-3 text-sm",children:"Clear"}),(0,o.jsx)("button",{className:"absolute inset-y-0 right-0 flex items-center pr-10",children:(0,o.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"})})}),(0,o.jsxs)("div",{className:"border",children:[(0,o.jsx)("button",{type:"button",className:"absolute inset-y-0 right-0 flex items-center pr-3",onClick:()=>{C.current.click()},children:(0,o.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 20",children:(0,o.jsx)("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",d:"M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"})})}),(0,o.jsx)("input",{type:"file",onChange:e=>{_(e.target.files[0])},style:{display:"none"},ref:C})]})]}),(0,o.jsx)("button",{type:"submit",className:"inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:B,children:(0,o.jsx)("svg",{className:"w-4 h-4 rotate-90","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,o.jsx)("path",{d:"m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"})})})]})]}),(0,o.jsx)(p.Ix,{})]})})},f=()=>{let e=(0,r.useRouter)(),[a,t]=(0,i.useState)(null),[l,c]=(0,i.useState)(null),[p,v]=(0,i.useState)(null),[f,j]=(0,i.useState)(null),[w,y]=(0,i.useState)(!0),b=async()=>{var a,o,l,s,r,i;let c=JSON.parse(n.Z.get("creator_user_data")),u=null==JSON?void 0:JSON.parse(null===n.Z||void 0===n.Z?void 0:n.Z.get("creator_user_data"));console.log("cookieValue creator",null==c?void 0:c.token,null==u?void 0:null===(a=u.user)||void 0===a?void 0:a.id);try{let a={Authorization:"Bearer ".concat(null==c?void 0:c.token),"Content-Type":"application/json"},m=await fetch("".concat(d.HQ,"/creators/?user=").concat(null==u?void 0:null===(o=u.user)||void 0===o?void 0:o.id),{method:"Get",headers:a});if(console.log("response get creators",m),null==m?void 0:m.ok){let a=await m.json();if(console.log("creators response: homepage",null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.data[0]),n.Z.set("creator_profile_id",JSON.stringify(null==a?void 0:null===(s=a.data)||void 0===s?void 0:s.data[0])),(null==a?void 0:a.status)==="success"){let e=null===(r=null==a?void 0:null===(i=a.data)||void 0===i?void 0:i.data[0])||void 0===r?void 0:r.id;t(e),await _(e)}else 429===m.status?(toast.error("Too many requests: Please wait for a few minutes to try and login again.",{position:"top-center",autoClose:5e3}),e.push("/login")):500===m.status&&(toast.error("Server Error: Please wait while we fix this problem for you.",{position:"top-center",autoClose:5e3}),e.push("/login"))}else console.error("Error:",m.statusText)}catch(e){console.error("Error:",e)}},_=async a=>{try{var t,o,l,s,r,i,u;let m=n.Z.get("creator_user_data");console.log("categories cookieValue------------1",JSON.parse(m).user.type);let h=null===(t=JSON.parse(m))||void 0===t?void 0:null===(o=t.user)||void 0===o?void 0:o.type;if(void 0===m||"creator"!==h)console.log("User not authenticated, navigating to login page..."),e.push("/login"),console.log("categories cookieValue----brand--------userId",null==m?void 0:m.token);else{let t=JSON.parse(n.Z.get("creator_user_data")),o=JSON.parse(n.Z.get("creator_campaign_id"));try{let n={Authorization:"Bearer ".concat(null==t?void 0:t.token)},m=await fetch("".concat(d.HQ,"/campaigncreators?creator=").concat(a),{method:"Get",headers:n});if(429===m.status){let e=parseInt(m.headers.get("Retry-After"))||60;return console.log("Rate limited. Retrying after ".concat(e," seconds.")),await new Promise(a=>setTimeout(a,1e3*e)),makeRequest()}if(console.log("GET campaigns?brand=1 response:",m),null==m?void 0:m.ok){let a=await m.json();console.log("campaigns response:",null==a?void 0:null===(l=a.data)||void 0===l?void 0:l.data),null==a||null===(s=a.data)||void 0===s||s.data;let t=null==a?void 0:null===(r=a.data)||void 0===r?void 0:r.data.filter(e=>(null==e?void 0:e.campaign_id)===o);if(c(t),a.status){let e=null==a?void 0:null===(i=a.data)||void 0===i?void 0:i.data.filter(e=>(null==e?void 0:e.campaign_id)===o&&0===e.approved);v(e);let t=null==a?void 0:null===(u=a.data)||void 0===u?void 0:u.data.filter(e=>(null==e?void 0:e.campaign_id)===o&&1===e.approved);j(t)}else 429===m.status?(toast.error("Too many requests: Please wait for a few minutes to try and login again.",{position:"top-center",autoClose:5e3}),e.push("/login")):500===m.status&&(toast.error("Server Error: Please wait while we fix this problem for you.",{position:"top-center",autoClose:5e3}),e.push("/login"))}else console.error("Error:",m.statusText)}catch(e){console.error("Error:",e)}}}catch(e){console.error("Error parsing user_data cookie:",e)}};(0,i.useEffect)(()=>{b()},[]),console.log("allInactiveBrands single chat",p);let N=e=>{console.log("creator inactiveinActiveClick",e),c(e),y(!1)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"flex container_invoice w-full",style:{background:s.Z.logo_background_clr},children:(0,o.jsxs)("div",{className:"m-2  auto-cols-max text-start p-2  w-full",children:[(0,o.jsx)("div",{style:{background:s.Z.invoice_gradient_clr},className:"auto-cols-max p-3 rounded-md flex flex-row",children:(0,o.jsx)("div",{className:"flex flex-row justify-between items-center  w-full",children:(0,o.jsx)("div",{className:"font_size_40",style:{color:s.Z.white_clr},children:"Communication"})})}),(0,o.jsxs)("div",{className:"flex flex-row items-start  justify-between w-full",children:[(0,o.jsxs)("div",{style:{background:s.Z.white_clr},className:"rounded-md my-3 me-3 w-2/4 h-screen overflow-y-auto",children:[(0,o.jsxs)("div",{className:" p-4 border shadow rounded m-3 ",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between ",children:[(0,o.jsx)("div",{className:"font_size_21",children:"Active Conversations"}),(0,o.jsx)("span",{style:{background:s.Z.gray2,borderColor:s.Z.light_grey_clr},className:"px-2 rounded-md border"})]}),(0,o.jsx)("hr",{className:""}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("div",{className:"py-3"})})]}),(0,o.jsxs)("div",{className:"  p-4 border shadow rounded m-3",children:[(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between ",children:[(0,o.jsx)("div",{className:"font_size_21",children:"InActive Conversations"}),(0,o.jsx)("span",{style:{background:s.Z.gray2,borderColor:s.Z.light_grey_clr},className:"px-2 rounded-md border",children:(null==p?void 0:p.length)?null==p?void 0:p.length:0})]}),(0,o.jsx)("hr",{className:""}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("div",{className:"py-3",children:(null==p?void 0:p.length)>0&&p.map((e,a)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{onClick:()=>N(e),children:(0,o.jsx)(h.Z,{item:e},a)})}))})})]})]}),(0,o.jsxs)("div",{className:"flex flex-col justify-between rounded-md my-3 overflow-y-auto me-3 w-full h-full",style:{background:s.Z.white_clr},children:[!w&&(0,o.jsxs)("div",{className:"flex flex-row items-center p-4 justify-between",children:[(0,o.jsx)(g,{item:p}),(0,o.jsxs)("div",{style:{background:s.Z.gray2},className:"py-3 px-3 rounded-md",children:[(0,o.jsx)("button",{type:"button",className:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",children:"Inactive"}),(0,o.jsx)("button",{type:"button",className:"focus:outline-none text-white bg-yellow-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",children:"Refresh"})]})]}),w&&(0,o.jsx)("div",{className:"h-full flex",children:(0,o.jsxs)("div",{className:"flex flex-col items-center pt-10 justify-center max-w-lg mx-auto top-2/4",children:[(0,o.jsx)(u(),{src:m.Z.chat_box_placeholder,width:150,height:150,className:"rounded h-auto",alt:""}),(0,o.jsx)("span",{className:"text-center py-5",children:"Make calls, share your screen and get a faster experience when you download the Windows app."})]})}),(0,o.jsx)("hr",{className:""}),(0,o.jsx)(o.Fragment,{children:!w&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:" bg-zinc-100 flex flex-col justify-end ",style:{height:"100vh"},children:(0,o.jsx)(x,{campaignBrandData:l})})})})]}),(0,o.jsxs)("div",{style:{background:s.Z.white_clr},className:"rounded-md my-3 w-2/4 h-screen overflow-y-auto",children:[(0,o.jsx)("div",{className:"font_size_21  p-4 capitalize",children:"Campaign Info"}),(0,o.jsx)("hr",{className:""}),(null==p?void 0:p.length)>0&&(null==p?void 0:p.map((e,a)=>{var t,l,s,r,n,i,d,c;return(0,o.jsxs)("div",{className:" border shadow rounded m-3",children:[(0,o.jsxs)("div",{className:"p-4 capitalize",children:[null==e?void 0:null===(t=e.campaign)||void 0===t?void 0:t.name,(0,o.jsx)("h3",{})]}),(0,o.jsx)("div",{className:"py-3",children:(0,o.jsx)(u(),{src:(null==e?void 0:null===(l=e.campaign)||void 0===l?void 0:null===(s=l.brand)||void 0===s?void 0:s.logo)?null==e?void 0:null===(r=e.campaign)||void 0===r?void 0:null===(n=r.brand)||void 0===n?void 0:n.logo:m.Z.card_img,height:200,width:200,className:"mx-auto",alt:""})}),(0,o.jsx)("div",{className:"px-4",children:(0,o.jsx)("p",{className:"font_size_16 communication_text py-2",children:null==e?void 0:null===(i=e.campaign)||void 0===i?void 0:i.description})}),(0,o.jsx)("div",{className:"px-4",children:(0,o.jsxs)("p",{className:"font_size_16 communication_text py-2",children:[null==e?void 0:null===(d=e.campaign)||void 0===d?void 0:d.starting_date," - ",null==e?void 0:null===(c=e.campaign)||void 0===c?void 0:c.ending_date]})}),(0,o.jsxs)("div",{className:" border shadow rounded mx-3 my-4 py-4 px-3",children:[(0,o.jsxs)("div",{className:"flex px-4 items-center",children:[(0,o.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",children:(0,o.jsx)("i",{children:"Image Count : "})}),(0,o.jsxs)("div",{className:"px-3",children:[null==e?void 0:e.image_count,"/2"]})]}),(0,o.jsxs)("div",{className:"flex px-4 items-center",children:[(0,o.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",children:(0,o.jsx)("i",{children:" Video Count : "})}),(0,o.jsxs)("div",{className:"px-3",children:[null==e?void 0:e.video_count,"/2"]})]}),(0,o.jsxs)("div",{className:"flex px-4 items-center",children:[(0,o.jsx)("label",{htmlFor:"first_name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full",children:(0,o.jsx)("i",{children:" Revision Submitted :"})}),(0,o.jsxs)("div",{className:"px-3",children:[null==e?void 0:e.video_count,"/2"]})]})]})]},a)}))]})]})]})})})},j=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(f,{})]})})}},function(e){e.O(0,[9598,3153,7111,9774,2888,179],function(){return e(e.s=35456)}),_N_E=e.O()}]);