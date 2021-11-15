var Ge=Object.defineProperty,_e=Object.defineProperties;var Je=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var qe=(t,n,a)=>n in t?Ge(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,i=(t,n)=>{for(var a in n||(n={}))Re.call(n,a)&&qe(t,a,n[a]);if(se)for(var a of se(n))Be.call(n,a)&&qe(t,a,n[a]);return t},l=(t,n)=>_e(t,Je(n));var T=(t,n)=>{var a={};for(var r in t)Re.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&se)for(var r of se(t))n.indexOf(r)<0&&Be.call(t,r)&&(a[r]=t[r]);return a};import{a as Ye,c as b,b as te,W as Ve,s as D,m as S,d as k,e as P,t as M,l as A,f as v,g as J,h as z,p as j,i as Y,j as Ce,u as y,k as p,R as e,L as q,r as g,A as de,G as We,F as He,n as Ke,o as we,q as R,v as Fe,w as $e,x as ae,y as x,z as ue,B as Ie,C as me,D as ne,E as re,H as G,M as Qe,I as De,J as Xe,K as Ze,S as et,N as tt,O as at,P as nt,Q as rt,T as ot}from"./vendor.96fc062c.js";const ct=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}};ct();const f=Ye.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),V=b("auth/login",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/auth/login",t);return a}catch({response:{data:a}}){return n(a)}}),O=b("auth/logout",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/auth/logout");return a}catch({response:{data:a}}){return n(a)}}),pe=b("auth/signup",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/auth/signup",t);return a}catch({response:{data:a}}){return n(a)}}),he=b("auth/isLoggedIn",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/auth/isloggedin");return a}catch({response:{data:a}}){return n(a)}}),ge=b("auth/editUser",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.patch("/api/auth/edituser",t);return a}catch({response:{data:a}}){return n(a)}}),it={userData:JSON.parse(localStorage.getItem("userData"))||{},loggedIn:!1},lt=te({name:"auth",initialState:it,reducers:{},extraReducers:t=>{t.addCase(V.rejected,(n,a)=>i({},n)).addCase(V.fulfilled,(n,a)=>l(i({},n),{userData:a.payload.userData,loggedIn:a.payload.loggedIn})).addCase(O.fulfilled,(n,a)=>l(i({},n),{userData:{},loggedIn:a.payload.loggedIn})).addCase(O.rejected,(n,a)=>l(i({},n),{userData:{},loggedIn:!1})).addCase(he.fulfilled,(n,a)=>l(i({},n),{loggedIn:a.payload.loggedIn})).addCase(he.rejected,(n,a)=>l(i({},n),{userData:{},loggedIn:a.payload.loggedIn})).addCase(ge.fulfilled,(n,a)=>l(i({},n),{userData:a.payload.userUpdated}))}});var st=lt.reducer;const _=b("cart/getCart",async(t,{rejectWithValue:n})=>{try{const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),oe=b("cart/addProductToCart",async(t,{rejectWithValue:n})=>{try{await f.post(`/api/cart/add/${t}`);const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),W=b("cart/removeProductFromCart",async(t,{rejectWithValue:n})=>{try{await f.delete(`/api/cart/delete/${t}`);const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),dt={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null,totalItems:JSON.parse(localStorage.getItem("totalItems"))||null},ut=te({name:"cart",initialState:dt,reducers:{},extraReducers:t=>{t.addCase(_.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(_.rejected,(n,a)=>({cartData:[],total:null,totalItems:null})).addCase(oe.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(W.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(W.rejected,(n,a)=>l(i({},n),{cartData:[],total:null,totalItems:null})).addCase(O.fulfilled,(n,a)=>({cartData:[],total:null,totalItems:null}))}});var mt=ut.reducer;const xe=b("products/getAllProducts",async()=>{const{data:{products:t}}=await f.get("/api/products/list");return t}),H=b("products/getProductById",async(t,{rejectWithValue:n})=>{try{const{data:{product:a}}=await f.get(`/api/products/list/${t}`);return a}catch({response:{data:a}}){return n(a.error)}}),Se=b("products/addProduct",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/products/add",t);return a}catch({response:{data:a}}){return n(a.error)}}),ce=b("products/editProduct",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.patch(`/api/products/update/${t.id}`,t.formData);return a}catch({response:{data:a}}){return n(a.error)}}),fe=b("products/deleteProduct",async(t,{rejectWithValue:n})=>{try{await f.delete(`/api/products/delete/${t}`);const{data:{products:a}}=await f.get("/api/products/list");return a}catch({response:{data:a}}){return n(a.error)}}),pt={products:[],product:[]},Ne=te({name:"products",initialState:pt,reducers:{clearProduct(t,n){return l(i({},t),{product:[]})}},extraReducers:t=>{t.addCase(xe.fulfilled,(n,a)=>l(i({},n),{products:a.payload})).addCase(xe.rejected,(n,a)=>l(i({},n),{products:[]})).addCase(H.fulfilled,(n,a)=>l(i({},n),{product:a.payload})).addCase(H.rejected,(n,a)=>l(i({},n),{product:[]})).addCase(ce.fulfilled,(n,a)=>l(i({},n),{product:a.payload.updatedProduct})).addCase(ce.rejected,(n,a)=>l(i({},n),{product:[]})).addCase(fe.fulfilled,(n,a)=>l(i({},n),{products:a.payload})).addCase(fe.rejected,(n,a)=>l(i({},n),{products:[]}))}}),{clearProduct:Le}=Ne.actions;var ht=Ne.reducer;const K=b("order/getPurchases",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return n(a)}}),ye=b("order/purchase",async(t,{rejectWithValue:n})=>{try{const{data:{msg:a}}=await f.post("/api/orders/purchase");return a}catch({response:{data:a}}){return n(a)}}),gt={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},xt=te({name:"purchase",initialState:gt,reducers:{},extraReducers:t=>{t.addCase(K.fulfilled,(n,a)=>l(i({},n),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(K.rejected,(n,a)=>({purchases:[],total:null})).addCase(O.fulfilled,(n,a)=>({purchases:[],totalPaid:null}))}});var ft=xt.reducer;const yt={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},Te=te({name:"ui",initialState:yt,reducers:{clearErrorMsg(t,n){return l(i({},t),{errorMsg:null})},clearSuccessMsg(t,n){return l(i({},t),{successMsg:null})},setUserMenu(t,n){return l(i({},t),{userMenu:n.payload})}},extraReducers:t=>{t.addCase(H.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(H.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(Se.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(Se.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(ce.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(ce.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(fe.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:"Product Deleted"})).addCase(V.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(V.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(V.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(O.fulfilled,(n,a)=>l(i({},n),{userMenu:!1})).addCase(O.rejected,(n,a)=>l(i({},n),{userMenu:!1})).addCase(he.rejected,(n,a)=>l(i({},n),{userMenu:!1})).addCase(ge.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(ge.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(pe.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(pe.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(pe.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(_.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(_.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(_.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(oe.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(oe.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:"Product added to cart"})).addCase(oe.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(W.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(W.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(W.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(K.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(K.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(K.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(ye.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(ye.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload})).addCase(ye.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error}))}}),{clearErrorMsg:Ee,clearSuccessMsg:ke,setUserMenu:Q}=Te.actions;var Et=Te.reducer;const bt=Ve`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${t=>t.theme.fonts.lato};
}

  body {
    background-color: '#979797';
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.1;
  }
  ul, li, a, ol {
    list-style-type: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
  }
`,u=D(S.div)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`,h=D(S.h1)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	font-family: ${t=>t.theme.fonts.chakra};
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,Pe=D(S.ul)`
	${k}
	${A}
	${v}
	${j}
	${P}
	z-index: 100;
	transition: all .2s ease-in-out;
`,C=D(S.img)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${j}
	${z}
    height: ${t=>t.height?t.height:"auto"};
	cursor: ${t=>t.cursor&&"pointer"};
	opacity: ${t=>t.opacity};
	background-size: cover;
	background-position: center;
`,F=D(S.li)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	cursor: pointer;
`,s=D(S.p)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,Ct=()=>{const t=y(),{userData:n}=p(o=>o.auth),a=()=>{t(O()),t(Q(!1)),t(ke())},r=()=>{t(Q(!1))};return e.createElement(u,{position:"absolute",alignItems:"center",top:60,right:[0,0,"110px"],width:["100%","100%","120px"],height:"160px",justifyContent:"center",bg:"#272727",color:"#e4e4e4",initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{ease:"easeInOut"}},e.createElement(Pe,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/profile",onClick:r},"Edit User")),e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/purchases",onClick:r},"Purchases")),n.isAdmin&&e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/adminpanel",onClick:r},"Admin Panel")),e.createElement(F,{onClick:a},"Logout")))};var wt="/assets/cart.7e54eda4.svg";function $t({isOpen:t,setIsOpen:n}){const a=y(),{userData:r,loggedIn:o}=p(I=>I.auth),{cartData:c,totalItems:d}=p(I=>I.cart),{userMenu:m}=p(I=>I.ui),E=()=>{a(Q(!1)),n(!1)},B=()=>{a(Q(!m)),n(!1)};return g.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(r))},[r]),g.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(c))},[c]),e.createElement(u,{as:"nav",flex:1,justifyContent:["flex-end","flex-end","flex-start"]},e.createElement(Pe,{width:"100%",position:["absolute","absolute","relative"],top:[60,60,0],left:[t?0:"-100%",t?0:"-100%",0],flexDirection:["column","column","row"],flex:1,justifyContent:"space-evenly",alignItems:"center",p:["20px","20px",0],bg:["#272727","#272727","transparent"],opacity:[t?1:0,t?1:0,1]},e.createElement(F,{mb:["20px","20px",0]},e.createElement(q,{to:"/",onClick:E},"Shop")),e.createElement(F,{mb:["20px","20px",0]},e.createElement(q,{to:"/about",onClick:E},"About")),e.createElement(F,null,e.createElement(q,{to:"/contact",onClick:E},"Contact"))),e.createElement(Pe,{justifyContent:"space-evenly"},e.createElement(F,{alignItems:"center",mr:"20px",onClick:E},e.createElement(q,{to:"/cart"},e.createElement(C,{mr:"5px",src:wt}),o&&c&&e.createElement(s,null,d))),e.createElement(F,{height:"100%",alignItems:"center"},o?e.createElement(u,{onClick:B},e.createElement(C,{borderRadius:"100%",width:"20px",mr:"10px",src:r.avatar,alt:"avatar"}),e.createElement(s,null,r.name)):e.createElement(q,{to:"/login"},"Login"))),e.createElement(de,{exitBeforeEnter:!0},m&&e.createElement(Ct,null)))}function It(){const{colors:{primary:t}}=g.exports.useContext(We),[n,a]=g.exports.useState(!1),r=y(),o=()=>{a(!n),r(Q(!1))};return e.createElement(u,{as:"header",position:"fixed",width:"100%",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:t,color:"white",borderBottom:"1px solid white",zIndex:1},e.createElement(u,{onClick:o,display:["flex","flex","none"],mr:"10px"},n?e.createElement(He,{fontSize:"25px"}):e.createElement(Ke,{fontSize:"25px"})),e.createElement(q,{to:"/",onClick:()=>r(Q(!1))},e.createElement(h,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement($t,{isOpen:n,setIsOpen:a}))}const U=D(S.main)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function ie({children:t}){const{loading:n}=p(a=>a.ui);return e.createElement(U,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%"},n?e.createElement(u,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(we.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,t))}const w=D(S.section)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${J}
	${z}
	${j}
	${Y}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function le({children:t}){return e.createElement(w,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(u,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},t))}function Ae({children:t}){return e.createElement(w,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},t)}function Dt({name:t,price:n,thumbnail:a,id:r}){const o=R(),c=y(),d=()=>{o.push(`/product/${r}`),c(Le()),c(Ee())};return e.createElement(u,{onClick:d,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(s,null,"USD ",n))}var St="/assets/emptycart.178cfab5.svg";function ve({children:t}){return e.createElement(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},width:"100%",height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(C,{mb:"20px",width:["70%","70%","30%"],src:St}),e.createElement(s,null,t))}function kt(){const t=y(),{products:n}=p(a=>a.products);return g.exports.useEffect(()=>{t(xe()),t(_())},[t]),n.length===0?e.createElement(ve,null,"No products in db"):e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Shop Tech"),e.createElement(s,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Ae,null,n.map(a=>e.createElement(Dt,{key:a._id,name:a.name,price:a.price,thumbnail:a.thumbnail,id:a._id}))))}var Pt="/assets/about.74ce83db.svg";function At(){return e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"About Us"),e.createElement(s,null,"Wanna know more about us?.. this is the page")),e.createElement(w,{flexDirection:"column",py:"54px",px:["20px","20px","145px"],alignItems:"center"},e.createElement(C,{width:["50%","50%","30%"],src:Pt,alt:"about",mb:"40px"}),e.createElement(s,{fontSize:"20px"},"As a company, our goal is to improve people's lives, to contribute to the development of our communities and the preservation of the environment. Nowadays, all businesses are generating torrents of data every day about their internal and external customers, and with the right tools and technologies, Edrans can help you get the most out of that information: from insights on consumer behavior, KPIs and environment metrics you can get a deeper level of understanding of your customers\u2019 sentiment and emotional drivers when engaging with your business, and forecasts based on historical data and modelled projections. We humanize data by understanding human behavior, focusing on the functional and emotional aspects of data to create experiences through technology that empower your business and create lasting value.")))}var vt="/assets/contact.7e96ee01.svg";function jt(){return e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Contact Us"),e.createElement(s,null,"We are here to help!")),e.createElement(w,{flexDirection:["column","column","row"],py:"54px",px:["20px","20px","145px"],alignItems:"center",justifyContent:"center"},e.createElement(C,{width:["70%","70%","40%"],src:vt,alt:"about",mb:"40px"}),e.createElement(u,{flexDirection:"column"},e.createElement(h,{mb:"20px"},"Get In Touch"),e.createElement(s,null,"Whatsapp: +5491128576884"),e.createElement(s,null,"Email: joxpulp@gmail.com"))))}var Mt="/assets/404.20cf8557.svg";const N=D(S.button)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${j}
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
	width: ${t=>t.width?t.width:"120px"};
	height: ${t=>t.height?t.height:"48px"};
	padding: ${t=>t.padding?t.padding:"24px"};
	background-color: ${t=>t.bg?t.bg:"#EDEDED"};
	color: ${t=>t.color?t.color:"#A3A3A3"};
	border-radius: ${t=>t.borderRadius?t.borderRadius:"3px"};
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	backdrop-filter: ${t=>t.glass&&"blur( 30px)"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(30px)"};
	&:focus {
		box-shadow: 0px 0px 5px 2px
			${t=>t.focusColor?t.focusColor:"rgb(29,31,39, .2)"};
		${t=>t.focusScale&&"transform: scale(1.1);"}
	}
	&:hover {
		background-color: ${t=>t.hover&&t.focusColor};
		color: ${t=>t.hover&&t.bg};
		${t=>t.focusScale&&"transform: scale(1.2);"}
	}

	&:disabled {
		background-color: ${t=>t.theme.colors.subtext};
		color: ${t=>t.theme.colors.secondary};
	}
`;function Rt(){const t=R();return e.createElement(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(C,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:Mt,alt:"404"}),e.createElement(s,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(N,{bg:"black",color:"white",width:"125px",onClick:()=>t.push("/")},"Back to Shop"))}function Bt(){const{id:t}=Fe(),n=R(),a=y(),{product:r}=p(m=>m.products),{loading:o,errorMsg:c}=p(m=>m.ui),d=()=>{a(oe(t))};return g.exports.useEffect(()=>{a(H(t))},[a,t]),c?e.createElement(u,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement($e,{to:"/login"}),";"):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(de,{exitBeforeEnter:!0},o?e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(we.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):r.map(m=>e.createElement(w,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:m._id},e.createElement(C,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:m.thumbnail}),e.createElement(u,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(h,{my:"10px"},m.name),e.createElement(s,{mb:"20px"},"Price: USD ",m.price),e.createElement(s,{mb:"10px",fontSize:"12px"},"Category: ",m.category),e.createElement(s,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(s,{fontSize:"12px"},m.description),e.createElement(u,{mt:"20px"},e.createElement(N,{onClick:d,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(N,{onClick:()=>n.push("/")},"Go Back")))))))}const je=["image/png","image/jpeg","image/jpg"],qt=ae({email:x().email("The email address is invalid, try again").required("Required"),password:x().min(8,"Password must be at least 8 characters").required("Required")}),Ft=ae({email:x().email("The email address is invalid, try again").required("Email is required"),password:x().min(8,"Password must be 8 mininum characters").required("Password is required"),name:x().min(3,"Name must be at least 3 characters").required("Name is Required"),lastname:x().min(3,"Lastname must be at least 3 characters").required("Lastname is Required"),age:ue().min(16,"You must have 16 years old or more to register").required("Age is required"),cardId:x().matches(/^\d{8}$/,"Card Id must be 8 digits only").required("Card Id (DNI) is required"),address:x().min(10,"Address must have 10 characters or more").required("Address is required")}),Nt=ae({name:x().min(3,"Name must be at least 3 characters"),lastname:x().min(3,"Lastname must be at least 3 characters"),password:x().min(8,"Password must be at least 8 characters"),age:ue().min(16,"Your age must be 16 or more"),cardId:x().matches(/^\d{8}$/,"DNI must be 8 digits only"),address:x().min(10,"Address must at least 10 characters"),avatar:Ie().nullable().test("fileType","File type not supported only .png .jpg .jpeg",t=>!t||t&&je.includes(t.type))}),Lt=ae({name:x().min(3,"Product name must be at least 3 characters").required("Product name is required"),description:x().min(20,"Product description must be at least 20 characters").required("Product description is required"),category:x().min(4,"Product category must be at least 4 characters").required("Product category is required"),price:ue().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required"),thumbnail:Ie().nullable().required("Thumbnail image is required").test("fileType","File type not supported only .png .jpg .jpeg",t=>t&&je.includes(t.type))}),Tt=ae({name:x().min(3,"Product name must be at least 3 characters"),description:x().min(20,"Product description must be at least 20 characters"),category:x().min(4,"Product category be at least 4 characters"),price:ue().min(10,"Min price is 10").max(3e4,"Max price is 30000"),thumbnail:Ie().nullable().test("fileType","File type not supported only .png .jpg .jpeg",t=>!t||t&&je.includes(t.type))});function X(a){var r=a,{children:t}=r,n=T(r,["children"]);const{loading:o}=p(c=>c.ui);return e.createElement(N,i({bg:"black",color:"white",type:"submit",mr:"10px",disabled:o},n),o?e.createElement(we.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):t)}const ze=D(S.input)`
	${k}
	${P}
	${M}
	${A}
	${v}
	${j}
	font-size: 20px;
	color: ${t=>t.color?t.color:t.theme.colors.secondary};
	padding: ${t=>t.padding?t.padding:"10px"};
	width: ${t=>t.width?t.width:"50%"};
	height: ${t=>t.height?t.height:"auto"};
	border: ${t=>t.border?t.border:"1px solid #C2C5E1"};
	border-radius: ${t=>t.borderRadius?t.borderRadius:"2px"};
	transition: all 0.2s ease-in-out;
	outline: none;
	
	&:focus {
		box-shadow: 0px 0px 5px 2px rgb(29, 31, 39, 0.1);
	}

	&:invalid {
		border: 1px solid #ff7d87;
	}

	&::placeholder {
		color: ${t=>t.theme.colors.subtext};
	}
`;function $(a){var r=a,{label:t}=r,n=T(r,["label"]);const[o,c]=me(n);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(ze,i(i({width:["60%","60%","30%"]},o),n)),c.touched&&c.error&&e.createElement(s,{mt:"3px",color:"red"},c.error))}function zt(){const t=R(),n=y(),{loading:a,errorMsg:r}=p(c=>c.ui),o=()=>{t.push("/signup"),n(Ee()),n(ke())};return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",py:"50px",flexDirection:"column",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(ne,{initialValues:{email:"",password:""},validationSchema:qt,onSubmit:({email:c,password:d})=>{n(Ee()),n(V({email:c,password:d}))}},e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Welcome Back"),e.createElement(s,{color:"#A9ABBD"},"Login with your email:"),r&&e.createElement(s,{m:"20px",color:"#b62929"},r),e.createElement($,{disabled:a,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement($,{disabled:a,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(X,null,"Login")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:o},"Or create an account"))}function Ot(){const t=R(),n=y(),{loading:a,errorMsg:r}=p(o=>o.ui);return e.createElement(U,{overflow:"hidden",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",py:"50px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(ne,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:Ft,onSubmit:(o,{resetForm:c})=>{n(Ee()),n(pe(o)),c()}},e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Signup"),e.createElement(s,{color:"#A9ABBD"},"Fill your info"),r&&e.createElement(s,{m:"20px",color:"#b62929"},r),e.createElement($,{id:"email",name:"email",type:"email",placeholder:"Email*",disabled:a}),e.createElement($,{id:"password",name:"password",type:"password",placeholder:"Password*",disabled:a}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement($,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*",disabled:a}),e.createElement($,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement($,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*",disabled:a}),e.createElement($,{id:"address",name:"address",type:"text",placeholder:"Address*",disabled:a}),e.createElement(X,null,"Sign Up")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>t.push("/login")},"Or go to login"))}const Oe=r=>{var o=r,{isAuth:t,component:n}=o,a=T(o,["isAuth","component"]);return e.createElement(G,i({},a),t?e.createElement($e,{to:"/"}):e.createElement(n,null))},Z=r=>{var o=r,{isAuth:t,component:n}=o,a=T(o,["isAuth","component"]);return e.createElement(G,i({},a),t?e.createElement(n,null):e.createElement($e,{to:"/login"}))};function L(o){var c=o,{onCancel:t,currentValue:n,width:a}=c,r=T(c,["onCancel","currentValue","width"]);const[d,m]=me(r),[E,B]=g.exports.useState(!1),{successMsg:I}=p(be=>be.ui),ee=()=>{B(!E),t()};return g.exports.useEffect(()=>{B(!1)},[I]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},E?e.createElement(ze,i(i({width:a||"80%"},d),r)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:ee,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(h,{color:"#9b9b9b"},n)),e.createElement(N,{ml:"10px",width:"30px",onClick:ee,type:"button"},E?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(s,{color:"red"},m.error))}function Me({currentImage:t,file:n,label:a,onCancel:r}){const[o,c]=g.exports.useState(null),d=["image/png","image/jpeg","image/jpg"],{successMsg:m}=p(I=>I.ui),E=new FileReader;n&&E.readAsDataURL(n),E.onload=()=>{d.includes(n.type)&&c(E.result)};const B=()=>{c(null),r()};return g.exports.useEffect(()=>{c(null)},[m]),e.createElement(u,{position:"relative"},o&&e.createElement(u,{position:"absolute",right:"0",cursor:"pointer",zIndex:2,onClick:B},e.createElement(Qe,{color:"#fa6868",fontSize:"35px"})),e.createElement("label",{htmlFor:a},e.createElement(C,{cursor:"pointer",width:"150px",m:"10px",borderRadius:"10px",src:o||t})))}function Ut(){const t=y(),{userData:n}=p(a=>a.auth);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",py:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:Nt,onSubmit:a=>{const r=new FormData;a.name!==""&&r.append("name",a.name),a.lastname!==""&&r.append("lastname",a.lastname),a.age!==""&&r.append("age",a.age),a.address!==""&&r.append("address",a.address),a.password!==""&&r.append("password",a.password),a.avatar&&r.append("avatar",a.avatar),t(ge(r)),a.avatar=null}},({values:a,setFieldValue:r})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Your Profile"),e.createElement(s,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(Me,{currentImage:n.avatar,label:"avatar",file:a.avatar,onCancel:()=>r("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:o=>r("avatar",o.target.files[0]),hidden:!0}),e.createElement(De,{name:"avatar"},o=>e.createElement(s,{color:"red"},o)),e.createElement(L,{currentValue:n.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>r("name","")}),e.createElement(L,{currentValue:n.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>r("lastname","")}),e.createElement(L,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>r("password","")}),e.createElement(L,{currentValue:n.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>r("age","")}),e.createElement(L,{currentValue:n.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>r("cardId","")}),e.createElement(L,{currentValue:n.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>r("address","")}),e.createElement(X,null,"Save profile")))))}const Gt=({name:t,price:n,thumbnail:a,productId:r,quantity:o})=>{const c=y();return e.createElement(u,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(C,{borderRadius:"5px",width:["30%","30%","25%"],src:a,alt:"productImg"}),e.createElement(u,{mx:["10px","10px","30px"],flexDirection:"column"},e.createElement(h,{fontSize:["16px","16px","24px"]},t),e.createElement(s,{my:"15px"},"USD ",n),e.createElement(s,null,"Quantity: ",o)),e.createElement(u,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(s,{onClick:()=>c(W(r)),cursor:"pointer"},"Remove")))};function _t(){const{cartData:t,total:n}=p(d=>d.cart),{successMsg:a}=p(d=>d.ui),r=y(),o=R(),c=()=>{r(ye())};return g.exports.useEffect(()=>{r(_())},[r,a]),t.length===0?e.createElement(ve,null,"Your cart is empty :("):e.createElement(U,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(w,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(h,null,"Your Cart"),e.createElement(s,{my:"20px",cursor:"pointer",onClick:()=>o.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(u,{flexDirection:["column","column","row"]},e.createElement(u,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},t.map(d=>e.createElement(Gt,{key:d._id,name:d.name,price:d.price,thumbnail:d.thumbnail,productId:d._id,quantity:d.quantity}))),e.createElement(u,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(h,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(h,{my:"20px"},"Total: $",n),e.createElement(X,{onClick:c},"Purchase")))))}function Jt({name:t,price:n,thumbnail:a}){return e.createElement(u,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(s,null,"USD ",n))}function Yt(){const t=y(),{purchases:n}=p(a=>a.purchase);return g.exports.useEffect(()=>{t(K())},[t]),n.length===0?e.createElement(ve,null,"You dont have any purchases"):e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Your Purchases"),e.createElement(s,null,"Your history of purchases in one place")),e.createElement(Ae,null,n.map((a,r)=>e.createElement(Jt,{key:r,name:a.name,price:a.price,thumbnail:a.thumbnail}))))}function Vt({thumbnail:t,id:n}){const a=R(),r=y(),o=()=>{a.push(`adminpanel/productedit/${n}`),r(Le())};return e.createElement(u,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(C,{width:"100%",src:t,alt:"productImg"}),e.createElement(u,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(N,{width:"30%",onClick:o,mr:"10px"},"Edit"),e.createElement(N,{width:"30%",onClick:()=>r(fe(n))},"Delete")))}function Wt(){const t=R(),{products:n}=p(r=>r.products),a=y();return g.exports.useEffect(()=>{a(xe())},[a]),e.createElement(ie,null,e.createElement(le,null,e.createElement(h,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(N,{onClick:()=>t.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Ae,null,n.map((r,o)=>e.createElement(Vt,{key:o,id:r._id,name:r.name,price:r.price,thumbnail:r.thumbnail}))))}const Ue=D(S.textarea)`
	${k}
	${P}
	${z}
	${M}
	${A}
	${v}
	${j}
	font-size: 20px;
	color: ${t=>t.color?t.color:t.theme.colors.secondary};
	padding: ${t=>t.padding?t.padding:"10px"};
	width: ${t=>t.width?t.width:"30%"};
	height: ${t=>t.height?t.height:"200px"};
	border: ${t=>t.border?t.border:"1px solid #C2C5E1"};
	border-radius: ${t=>t.borderRadius?t.borderRadius:"2px"};
	transition: all 0.2s ease-in-out;
	outline: none;

	&:focus {
		box-shadow: 0px 0px 5px 2px rgb(29, 31, 39, 0.1);
	}

	&:invalid {
		border: 1px solid #ff7d87;
	}

	&::placeholder {
		color: ${t=>t.theme.colors.subtext};
	}
`;function Ht(o){var c=o,{onCancel:t,currentValue:n,width:a}=c,r=T(c,["onCancel","currentValue","width"]);const[d,m]=me(r),[E,B]=g.exports.useState(!1),{successMsg:I}=p(be=>be.ui),ee=()=>{B(!E),t()};return g.exports.useEffect(()=>{B(!1)},[I]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},E?e.createElement(Ue,i(i({width:a||"80%"},d),r)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:ee,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(s,{fontSize:"13px",color:"#9b9b9b"},n)),e.createElement(N,{ml:"10px",width:"30px",onClick:ee,type:"button"},E?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(s,{color:"red"},m.error))}const Kt=()=>{const{id:t}=Fe(),n=R(),a=y(),{product:r}=p(o=>o.products);return g.exports.useEffect(()=>{a(H(t))},[a,t]),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",py:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"900px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Tt,onSubmit:o=>{const c=new FormData;o.name!==""&&c.append("name",o.name),o.description!==""&&c.append("description",o.description),o.category!==""&&c.append("category",o.category),o.price!==""&&c.append("price",o.price),o.thumbnail&&c.append("thumbnail",o.thumbnail),a(ce({id:t,formData:c})),o.thumbnail=null}},({values:o,setFieldValue:c})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Edit Product"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),r.map(d=>e.createElement(e.Fragment,null,e.createElement(Me,{currentImage:d.thumbnail,label:"thumbnail",file:o.thumbnail,onCancel:()=>c("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:m=>c("thumbnail",m.target.files[0]),hidden:!0}),e.createElement(De,{name:"thumbnail"},m=>e.createElement(s,{color:"red"},m)),e.createElement(L,{currentValue:d.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>c("name","")}),e.createElement(Ht,{currentValue:d.description,id:"description",name:"description",type:"text",placeholder:"Description",onCancel:()=>c("description","")}),e.createElement(L,{currentValue:d.category,id:"category",name:"category",type:"text",placeholder:"category",onCancel:()=>c("category","")}),e.createElement(L,{currentValue:d.price,id:"price",name:"price",type:"number",placeholder:"Price",onCancel:()=>c("price","")}))),e.createElement(X,null,"Save")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>n.go(-1)},"Go Back"))};function Qt(a){var r=a,{label:t}=r,n=T(r,["label"]);const[o,c]=me(n);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ue,i(i({width:["60%","60%","30%"]},o),n)),c.touched&&c.error&&e.createElement(s,{mt:"3px",color:"red"},c.error))}var Xt="/assets/uploadphoto.e961d561.svg";const Zt=()=>{const t=R(),n=y(),{loading:a}=p(r=>r.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",py:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"900px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Lt,onSubmit:(r,{resetForm:o})=>{const c=new FormData;r.name!==""&&c.append("name",r.name),r.description!==""&&c.append("description",r.description),r.category!==""&&c.append("category",r.category),r.price!==""&&c.append("price",r.price),r.thumbnail&&c.append("thumbnail",r.thumbnail),n(Se(c)),o()}},({values:r,setFieldValue:o})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Add a new product"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(Me,{currentImage:Xt,label:"thumbnail",file:r.thumbnail,onCancel:()=>o("thumbnail",null)}),e.createElement("input",{id:"thumbnail",name:"thumbnail",type:"file",onChange:c=>o("thumbnail",c.target.files[0]),hidden:!0}),e.createElement(De,{name:"thumbnail"},c=>e.createElement(s,{color:"red"},c)),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*",disabled:a}),e.createElement(Qt,{id:"description",name:"description",type:"text",placeholder:"Description*",disabled:a}),e.createElement($,{id:"category",name:"category",type:"text",placeholder:"Category*",disabled:a}),e.createElement($,{id:"price",name:"price",type:"number",placeholder:"Price*",disabled:a}),e.createElement(X,null,"Add Product")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>t.go(-1)},"Go Back"))};function ea({error:t,children:n}){return e.createElement(u,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"fixed",top:"5",left:"2",p:"20px",bg:t?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(s,{color:t?"#98210A":"#235234"},n))}function ta(){const t=g.exports.useRef(null),n=y(),{userData:a,loggedIn:r}=p(d=>d.auth),{successMsg:o}=p(d=>d.ui),c=Xe();return g.exports.useEffect(()=>{n(he())},[n]),g.exports.useEffect(()=>{setTimeout(()=>{n(ke())},2e3)},[n,o]),e.createElement(e.Fragment,null,e.createElement(bt,null),e.createElement(It,null),e.createElement(Ze,{ref:t,timeout:1e3*120,onIdle:()=>n(O()),crossTab:{emitOnAllTabs:!0}}),e.createElement(de,{exitBeforeEnter:!0},o&&e.createElement(ea,null,o)),e.createElement(u,{pt:"60px",width:"100%"},e.createElement(de,{exitBeforeEnter:!0},e.createElement(et,{location:c,key:c.pathname},e.createElement(G,{exact:!0,path:"/",component:kt}),e.createElement(G,{path:"/product/:id",component:Bt}),e.createElement(G,{path:"/about",component:At}),e.createElement(G,{path:"/contact",component:jt}),e.createElement(Oe,{isAuth:r,path:"/login",component:zt}),e.createElement(Oe,{isAuth:r,path:"/signup",component:Ot}),e.createElement(Z,{isAuth:r,path:"/profile",component:Ut}),e.createElement(Z,{isAuth:r,path:"/cart",component:_t}),e.createElement(Z,{isAuth:r,path:"/purchases",component:Yt}),e.createElement(Z,{exact:!0,isAuth:a.isAdmin,path:"/adminpanel",component:Wt}),e.createElement(Z,{isAuth:a.isAdmin,path:"/adminpanel/add",component:Zt}),e.createElement(Z,{isAuth:a.isAdmin,path:"/adminpanel/productedit/:id",component:Kt}),e.createElement(G,{path:"*",component:Rt})))))}const aa={colors:{primary:"#0D0D0D",secondary:"#979797",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function na({children:t}){return e.createElement(tt,{theme:aa},t)}const ra=at({reducer:{auth:st,products:ht,cart:mt,purchase:ft,ui:Et},devTools:!1});nt.render(e.createElement(e.StrictMode,null,e.createElement(rt,{store:ra},e.createElement(na,null,e.createElement(ot,null,e.createElement(ta,null))))),document.getElementById("root"));
