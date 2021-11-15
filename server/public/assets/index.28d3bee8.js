var _e=Object.defineProperty,Je=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Fe=(t,n,a)=>n in t?_e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,i=(t,n)=>{for(var a in n||(n={}))Be.call(n,a)&&Fe(t,a,n[a]);if(de)for(var a of de(n))qe.call(n,a)&&Fe(t,a,n[a]);return t},l=(t,n)=>Je(t,Ye(n));var z=(t,n)=>{var a={};for(var r in t)Be.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&de)for(var r of de(t))n.indexOf(r)<0&&qe.call(t,r)&&(a[r]=t[r]);return a};import{a as Ve,c as E,b as te,W as We,s as S,m as k,d as P,e as v,t as R,l as A,f as j,g as Y,h as O,p as M,i as V,j as Ce,u as y,k as p,R as e,L as q,r as g,A as ue,G as He,F as Ke,n as Qe,o as we,q as B,v as Ne,w as $e,x as ae,y as x,z as me,B as Ie,C as pe,D as ne,E as re,H as _,M as Xe,I as De,J as Ze,K as et,S as tt,N as at,O as nt,P as rt,Q as ot,T as ct}from"./vendor.96fc062c.js";const it=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}};it();const f=Ve.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),W=E("auth/login",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/auth/login",t);return a}catch({response:{data:a}}){return n(a)}}),U=E("auth/logout",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/auth/logout");return a}catch({response:{data:a}}){return n(a)}}),he=E("auth/signup",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/auth/signup",t);return a}catch({response:{data:a}}){return n(a)}}),ge=E("auth/isLoggedIn",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/auth/isloggedin");return a}catch({response:{data:a}}){return n(a)}}),xe=E("auth/editUser",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.patch("/api/auth/edituser",t);return a}catch({response:{data:a}}){return n(a)}}),lt={userData:JSON.parse(localStorage.getItem("userData"))||{},loggedIn:!1},st=te({name:"auth",initialState:lt,reducers:{},extraReducers:t=>{t.addCase(W.rejected,(n,a)=>i({},n)).addCase(W.fulfilled,(n,a)=>l(i({},n),{userData:a.payload.userData,loggedIn:a.payload.loggedIn})).addCase(U.fulfilled,(n,a)=>l(i({},n),{userData:{},loggedIn:a.payload.loggedIn})).addCase(U.rejected,(n,a)=>l(i({},n),{userData:{},loggedIn:!1})).addCase(ge.fulfilled,(n,a)=>l(i({},n),{loggedIn:a.payload.loggedIn})).addCase(ge.rejected,(n,a)=>l(i({},n),{userData:{},loggedIn:a.payload.loggedIn})).addCase(xe.fulfilled,(n,a)=>l(i({},n),{userData:a.payload.userUpdated}))}});var dt=st.reducer;const J=E("cart/getCart",async(t,{rejectWithValue:n})=>{try{const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),oe=E("cart/addProductToCart",async(t,{rejectWithValue:n})=>{try{await f.post(`/api/cart/add/${t}`);const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),H=E("cart/removeProductFromCart",async(t,{rejectWithValue:n})=>{try{await f.delete(`/api/cart/delete/${t}`);const{data:[a]}=await f.get("/api/cart/list");return a}catch({response:{data:a}}){return n(a)}}),ut={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null,totalItems:JSON.parse(localStorage.getItem("totalItems"))||null},mt=te({name:"cart",initialState:ut,reducers:{},extraReducers:t=>{t.addCase(J.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(J.rejected,(n,a)=>({cartData:[],total:null,totalItems:null})).addCase(oe.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(H.fulfilled,(n,a)=>l(i({},n),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(H.rejected,(n,a)=>l(i({},n),{cartData:[],total:null,totalItems:null})).addCase(U.fulfilled,(n,a)=>({cartData:[],total:null,totalItems:null}))}});var pt=mt.reducer;const fe=E("products/getAllProducts",async()=>{const{data:{products:t}}=await f.get("/api/products/list");return t}),K=E("products/getProductById",async(t,{rejectWithValue:n})=>{try{const{data:{product:a}}=await f.get(`/api/products/list/${t}`);return a}catch({response:{data:a}}){return n(a.error)}}),Se=E("products/addProduct",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.post("/api/products/add",t);return a}catch({response:{data:a}}){return n(a.error)}}),ce=E("products/editProduct",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.patch(`/api/products/update/${t.id}`,t.formData);return a}catch({response:{data:a}}){return n(a.error)}}),ke=E("products/deleteProduct",async(t,{rejectWithValue:n})=>{try{await f.delete(`/api/products/delete/${t}`);const{data:{products:a}}=await f.get("/api/products/list");return a}catch({response:{data:a}}){return n(a.error)}}),ht={products:[],product:[]},Le=te({name:"products",initialState:ht,reducers:{clearProduct(t,n){return l(i({},t),{product:[]})}},extraReducers:t=>{t.addCase(fe.fulfilled,(n,a)=>l(i({},n),{products:a.payload})).addCase(fe.rejected,(n,a)=>l(i({},n),{products:[]})).addCase(K.fulfilled,(n,a)=>l(i({},n),{product:a.payload})).addCase(K.rejected,(n,a)=>l(i({},n),{product:[]})).addCase(ce.fulfilled,(n,a)=>l(i({},n),{product:a.payload.updatedProduct})).addCase(ce.rejected,(n,a)=>l(i({},n),{product:[]})).addCase(ke.fulfilled,(n,a)=>l(i({},n),{products:a.payload})).addCase(ke.rejected,(n,a)=>l(i({},n),{products:[]}))}}),{clearProduct:Te}=Le.actions;var gt=Le.reducer;const Q=E("order/getPurchases",async(t,{rejectWithValue:n})=>{try{const{data:a}=await f.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return n(a)}}),ye=E("order/purchase",async(t,{rejectWithValue:n})=>{try{const{data:{msg:a}}=await f.post("/api/orders/purchase");return a}catch({response:{data:a}}){return n(a)}}),xt={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},ft=te({name:"purchase",initialState:xt,reducers:{},extraReducers:t=>{t.addCase(Q.fulfilled,(n,a)=>l(i({},n),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(Q.rejected,(n,a)=>({purchases:[],total:null})).addCase(U.fulfilled,(n,a)=>({purchases:[],totalPaid:null}))}});var yt=ft.reducer;const Et={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},ze=te({name:"ui",initialState:Et,reducers:{clearErrorMsg(t,n){return l(i({},t),{errorMsg:null})},clearSuccessMsg(t,n){return l(i({},t),{successMsg:null})},setUserMenu(t,n){return l(i({},t),{userMenu:n.payload})}},extraReducers:t=>{t.addCase(K.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(K.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(Se.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(Se.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(ce.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(ce.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(W.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(W.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(W.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(U.fulfilled,(n,a)=>l(i({},n),{userMenu:!1})).addCase(U.rejected,(n,a)=>l(i({},n),{userMenu:!1})).addCase(ge.rejected,(n,a)=>l(i({},n),{userMenu:!1})).addCase(xe.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(xe.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(he.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(he.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload.msg})).addCase(he.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(J.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(J.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(J.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(oe.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(oe.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:"Product added to cart"})).addCase(oe.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error})).addCase(H.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(H.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(H.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(Q.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(Q.fulfilled,(n,a)=>l(i({},n),{loading:!1})).addCase(Q.rejected,(n,a)=>l(i({},n),{loading:!1})).addCase(ye.pending,(n,a)=>l(i({},n),{loading:!0})).addCase(ye.fulfilled,(n,a)=>l(i({},n),{loading:!1,successMsg:a.payload})).addCase(ye.rejected,(n,a)=>l(i({},n),{loading:!1,errorMsg:a.payload.error}))}}),{clearErrorMsg:Ee,clearSuccessMsg:Pe,setUserMenu:X}=ze.actions;var bt=ze.reducer;const Ct=We`

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
  }
`,u=S(k.div)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`,h=S(k.h1)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	font-family: ${t=>t.theme.fonts.chakra};
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,ve=S(k.ul)`
	${P}
	${A}
	${j}
	${M}
	${v}
	z-index: 100;
	transition: all .2s ease-in-out;
`,C=S(k.img)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${M}
	${O}
    height: ${t=>t.height?t.height:"auto"};
	cursor: ${t=>t.cursor&&"pointer"};
	opacity: ${t=>t.opacity};
	background-size: cover;
	background-position: center;
`,F=S(k.li)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	cursor: pointer;
`,s=S(k.p)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,wt=()=>{const t=y(),{userData:n}=p(o=>o.auth),a=()=>{t(U()),t(X(!1)),t(Pe())},r=()=>{t(X(!1))};return e.createElement(u,{position:"absolute",width:["100%","100%","120px"],alignItems:"center",right:[0,0,"110px"],top:60,justifyContent:"center",bg:"#272727",color:"#e4e4e4",height:"160px",zIndex:100,initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{ease:"easeInOut"}},e.createElement(ve,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/profile",onClick:r},"Edit User")),e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/purchases",onClick:r},"Purchases")),n.isAdmin&&e.createElement(F,{mb:"20px"},e.createElement(q,{to:"/adminpanel",onClick:r},"Admin Panel")),e.createElement(F,{onClick:a},"Logout")))};var $t="/assets/cart.7e54eda4.svg";function It({isOpen:t,setIsOpen:n}){const a=y(),{userData:r,loggedIn:o}=p(D=>D.auth),{cartData:c,totalItems:d}=p(D=>D.cart),{userMenu:m}=p(D=>D.ui),b=()=>{a(X(!1)),n(!1)},I=()=>{a(X(!m)),n(!1)};return g.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(r))},[r]),g.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(c))},[c]),e.createElement(u,{as:"nav",flex:1,justifyContent:["flex-end","flex-end","flex-start"]},e.createElement(ve,{width:"100%",position:["absolute","absolute","relative"],top:[60,60,0],left:[t?0:"-100%",t?0:"-100%",0],flexDirection:["column","column","row"],flex:1,justifyContent:"space-evenly",alignItems:"center",p:["20px","20px",0],bg:["#272727","#272727","transparent"],opacity:[t?1:0,t?1:0,1]},e.createElement(F,{mb:["20px","20px",0]},e.createElement(q,{to:"/",onClick:b},"Shop")),e.createElement(F,{mb:["20px","20px",0]},e.createElement(q,{to:"/about",onClick:b},"About")),e.createElement(F,null,e.createElement(q,{to:"/contact",onClick:b},"Contact"))),e.createElement(ve,{justifyContent:"space-evenly"},e.createElement(F,{alignItems:"center",mr:"20px",onClick:b},e.createElement(q,{to:"/cart"},e.createElement(C,{mr:"5px",src:$t}),o&&c&&e.createElement(s,null,d))),e.createElement(F,{height:"100%",alignItems:"center"},o?e.createElement(u,{onClick:I},e.createElement(C,{borderRadius:"100%",width:"20px",mr:"10px",src:r.avatar,alt:"avatar"}),e.createElement(s,null,r.name)):e.createElement(q,{to:"/login"},"Login"))),e.createElement(ue,{exitBeforeEnter:!0},m&&e.createElement(wt,null)))}function Dt(){const{colors:{primary:t}}=g.exports.useContext(He),[n,a]=g.exports.useState(!1),r=y(),o=()=>{a(!n),r(X(!1))};return e.createElement(u,{position:"relative",as:"header",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:t,color:"white",borderBottom:"1px solid white"},e.createElement(u,{onClick:o,display:["flex","flex","none"],mr:"10px"},n?e.createElement(Ke,{fontSize:"25px"}):e.createElement(Qe,{fontSize:"25px"})),e.createElement(q,{to:"/",onClick:()=>r(X(!1))},e.createElement(h,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement(It,{isOpen:n,setIsOpen:a}))}const G=S(k.main)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function ie({children:t}){const{loading:n}=p(a=>a.ui);return e.createElement(G,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column"},n?e.createElement(u,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(we.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,t))}const w=S(k.section)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${Y}
	${O}
	${M}
	${V}
	${Ce}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function le({children:t}){return e.createElement(w,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(u,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},t))}function Ae({children:t}){return e.createElement(w,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},t)}function St({name:t,price:n,thumbnail:a,id:r}){const o=B(),c=y(),d=()=>{o.push(`/product/${r}`),c(Te()),c(Ee())};return e.createElement(u,{onClick:d,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(s,null,"USD ",n))}var kt="/assets/emptycart.178cfab5.svg";function je({children:t}){return e.createElement(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(C,{mb:"20px",width:["70%","70%","30%"],src:kt}),e.createElement(s,null,t))}function Pt(){const t=y(),{products:n}=p(a=>a.products);return g.exports.useEffect(()=>{t(fe()),t(J())},[t]),n.length===0?e.createElement(je,null,"No products in db"):e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Shop Tech"),e.createElement(s,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Ae,null,n.map(a=>e.createElement(St,{key:a._id,name:a.name,price:a.price,thumbnail:a.thumbnail,id:a._id}))))}var vt="/assets/about.74ce83db.svg";function At(){return e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"About Us"),e.createElement(s,null,"Wanna know more about us?.. this is the page")),e.createElement(w,{flexDirection:"column",py:"54px",px:["20px","20px","145px"],alignItems:"center"},e.createElement(C,{width:["50%","50%","30%"],src:vt,alt:"about",mb:"40px"}),e.createElement(s,{fontSize:"20px"},"As a company, our goal is to improve people's lives, to contribute to the development of our communities and the preservation of the environment. Nowadays, all businesses are generating torrents of data every day about their internal and external customers, and with the right tools and technologies, Edrans can help you get the most out of that information: from insights on consumer behavior, KPIs and environment metrics you can get a deeper level of understanding of your customers\u2019 sentiment and emotional drivers when engaging with your business, and forecasts based on historical data and modelled projections. We humanize data by understanding human behavior, focusing on the functional and emotional aspects of data to create experiences through technology that empower your business and create lasting value.")))}var jt="/assets/contact.7e96ee01.svg";function Mt(){return e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Contact Us"),e.createElement(s,null,"We are here to help!")),e.createElement(w,{flexDirection:["column","column","row"],py:"54px",px:["20px","20px","145px"],alignItems:"center",justifyContent:"center"},e.createElement(C,{width:["70%","70%","40%"],src:jt,alt:"about",mb:"40px"}),e.createElement(u,{flexDirection:"column"},e.createElement(h,{mb:"20px"},"Get In Touch"),e.createElement(s,null,"Whatsapp: +5491128576884"),e.createElement(s,null,"Email: joxpulp@gmail.com"))))}var Rt="/assets/404.20cf8557.svg";const N=S(k.button)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${M}
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
`;function Bt(){const t=B();return e.createElement(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(C,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:Rt,alt:"404"}),e.createElement(s,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(N,{bg:"black",color:"white",width:"125px",onClick:()=>t.push("/")},"Back to Shop"))}function qt(){const{id:t}=Ne(),n=B(),a=y(),{product:r}=p(m=>m.products),{loading:o,errorMsg:c}=p(m=>m.ui),d=()=>{a(oe(t))};return g.exports.useEffect(()=>{a(K(t))},[a,t]),c?e.createElement(u,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement($e,{to:"/login"}),";"):e.createElement(G,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(ue,{exitBeforeEnter:!0},o?e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(we.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):r.map(m=>e.createElement(w,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:m._id},e.createElement(C,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:m.thumbnail}),e.createElement(u,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(h,{my:"10px"},m.name),e.createElement(s,{mb:"20px"},"Price: USD ",m.price),e.createElement(s,{mb:"10px",fontSize:"12px"},"Category: ",m.category),e.createElement(s,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(s,{fontSize:"12px"},m.description),e.createElement(u,{mt:"20px"},e.createElement(N,{onClick:d,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(N,{onClick:()=>n.push("/")},"Go Back")))))))}const Me=["image/png","image/jpeg","image/jpg"],Ft=ae({email:x().email("The email address is invalid, try again").required("Required"),password:x().min(8,"Password must be at least 8 characters").required("Required")}),Nt=ae({email:x().email("The email address is invalid, try again").required("Email is required"),password:x().min(8,"Password must be 8 mininum characters").required("Password is required"),name:x().min(3,"Name must be at least 3 characters").required("Name is Required"),lastname:x().min(3,"Lastname must be at least 3 characters").required("Lastname is Required"),age:me().min(16,"You must have 16 years old or more to register").required("Age is required"),cardId:x().matches(/^\d{8}$/,"Card Id must be 8 digits only").required("Card Id (DNI) is required"),address:x().min(10,"Address must have 10 characters or more").required("Address is required")}),Lt=ae({name:x().min(3,"Name must be at least 3 characters"),lastname:x().min(3,"Lastname must be at least 3 characters"),password:x().min(8,"Password must be at least 8 characters"),age:me().min(16,"Your age must be 16 or more"),cardId:x().matches(/^\d{8}$/,"DNI must be 8 digits only"),address:x().min(10,"Address must at least 10 characters"),avatar:Ie().nullable().test("fileType","File type not supported only .png .jpg .jpeg",t=>!t||t&&Me.includes(t.type))}),Tt=ae({name:x().min(3,"Product name must be at least 3 characters").required("Product name is required"),description:x().min(20,"Product description must be at least 20 characters").required("Product description is required"),category:x().min(4,"Product category must be at least 4 characters").required("Product category is required"),price:me().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required"),thumbnail:Ie().nullable().required("Thumbnail image is required").test("fileType","File type not supported only .png .jpg .jpeg",t=>t&&Me.includes(t.type))}),zt=ae({name:x().min(3,"Product name must be at least 3 characters"),description:x().min(20,"Product description must be at least 20 characters"),category:x().min(4,"Product category be at least 4 characters"),price:me().min(10,"Min price is 10").max(3e4,"Max price is 30000"),thumbnail:Ie().nullable().test("fileType","File type not supported only .png .jpg .jpeg",t=>!t||t&&Me.includes(t.type))});function Z(a){var r=a,{children:t}=r,n=z(r,["children"]);const{loading:o}=p(c=>c.ui);return e.createElement(N,i({bg:"black",color:"white",type:"submit",mr:"10px",disabled:o},n),o?e.createElement(we.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):t)}const Oe=S(k.input)`
	${P}
	${v}
	${R}
	${A}
	${j}
	${M}
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
`;function $(a){var r=a,{label:t}=r,n=z(r,["label"]);const[o,c]=pe(n);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Oe,i(i({width:["60%","60%","30%"]},o),n)),c.touched&&c.error&&e.createElement(s,{mt:"3px",color:"red"},c.error))}function Ot(){const t=B(),n=y(),{loading:a,errorMsg:r}=p(c=>c.ui),o=()=>{t.push("/signup"),n(Ee()),n(Pe())};return e.createElement(G,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(ne,{initialValues:{email:"",password:""},validationSchema:Ft,onSubmit:({email:c,password:d})=>{n(Ee()),n(W({email:c,password:d}))}},e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Welcome Back"),e.createElement(s,{color:"#A9ABBD"},"Login with your email:"),r&&e.createElement(s,{m:"20px",color:"#b62929"},r),e.createElement($,{disabled:a,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement($,{disabled:a,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(Z,null,"Login")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:o},"Or create an account"))}function Ut(){const t=B(),n=y(),{loading:a,errorMsg:r}=p(o=>o.ui);return e.createElement(G,{overflow:"hidden",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",my:"50px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(ne,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:Nt,onSubmit:(o,{resetForm:c})=>{n(Ee()),n(he(o)),c()}},e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Signup"),e.createElement(s,{color:"#A9ABBD"},"Fill your info"),r&&e.createElement(s,{m:"20px",color:"#b62929"},r),e.createElement($,{id:"email",name:"email",type:"email",placeholder:"Email*",disabled:a}),e.createElement($,{id:"password",name:"password",type:"password",placeholder:"Password*",disabled:a}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement($,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*",disabled:a}),e.createElement($,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement($,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*",disabled:a}),e.createElement($,{id:"address",name:"address",type:"text",placeholder:"Address*",disabled:a}),e.createElement(Z,null,"Sign Up")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>t.push("/login")},"Or go to login"))}const Ue=r=>{var o=r,{isAuth:t,component:n}=o,a=z(o,["isAuth","component"]);return e.createElement(_,i({},a),t?e.createElement($e,{to:"/"}):e.createElement(n,null))},ee=r=>{var o=r,{isAuth:t,component:n}=o,a=z(o,["isAuth","component"]);return e.createElement(_,i({},a),t?e.createElement(n,null):e.createElement($e,{to:"/login"}))};function L(o){var c=o,{onCancel:t,currentValue:n,width:a}=c,r=z(c,["onCancel","currentValue","width"]);const[d,m]=pe(r),[b,I]=g.exports.useState(!1),{userData:D}=p(be=>be.auth),{product:T}=p(be=>be.products),se=()=>{I(!b),t()};return g.exports.useEffect(()=>{I(!1)},[D,T]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},b?e.createElement(Oe,i(i({width:a||"80%"},d),r)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:se,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(h,{color:"#9b9b9b"},n)),e.createElement(N,{ml:"10px",width:"30px",onClick:se,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(s,{color:"red"},m.error))}function Re({currentImage:t,file:n,label:a,onCancel:r}){const[o,c]=g.exports.useState(null),d=["image/png","image/jpeg","image/jpg"],{userData:m}=p(T=>T.auth),{product:b}=p(T=>T.products),I=new FileReader;n&&I.readAsDataURL(n),I.onload=()=>{d.includes(n.type)&&c(I.result)};const D=()=>{c(null),r()};return g.exports.useEffect(()=>{c(null)},[m,b]),e.createElement(u,{position:"relative"},o&&e.createElement(u,{position:"absolute",right:"0",cursor:"pointer",zIndex:2,onClick:D},e.createElement(Xe,{color:"#fa6868",fontSize:"35px"})),e.createElement("label",{htmlFor:a},e.createElement(C,{cursor:"pointer",width:"150px",m:"10px",borderRadius:"10px",src:o||t})))}function Gt(){const t=y(),{userData:n}=p(a=>a.auth);return e.createElement(G,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:Lt,onSubmit:(a,{resetForm:r})=>{const o=new FormData;a.name!==""&&o.append("name",a.name),a.lastname!==""&&o.append("lastname",a.lastname),a.age!==""&&o.append("age",a.age),a.address!==""&&o.append("address",a.address),a.password!==""&&o.append("password",a.password),a.avatar&&o.append("avatar",a.avatar),t(xe(o)),r()}},({values:a,setFieldValue:r})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Your Profile"),e.createElement(s,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(Re,{currentImage:n.avatar,label:"avatar",file:a.avatar,onCancel:()=>r("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:o=>r("avatar",o.target.files[0]),style:{display:"none"}}),e.createElement(De,{name:"avatar"},o=>e.createElement(s,{color:"red"},o)),e.createElement(L,{currentValue:n.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>r("name","")}),e.createElement(L,{currentValue:n.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>r("lastname","")}),e.createElement(L,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>r("password","")}),e.createElement(L,{currentValue:n.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>r("age","")}),e.createElement(L,{currentValue:n.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>r("cardId","")}),e.createElement(L,{currentValue:n.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>r("address","")}),e.createElement(Z,null,"Save profile")))))}const _t=({name:t,price:n,thumbnail:a,productId:r,quantity:o})=>{const c=y();return e.createElement(u,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(C,{borderRadius:"5px",width:["30%","30%","25%"],src:a,alt:"productImg"}),e.createElement(u,{mx:["10px","10px","30px"],flexDirection:"column"},e.createElement(h,{fontSize:["16px","16px","24px"]},t),e.createElement(s,{my:"15px"},"USD ",n),e.createElement(s,null,"Quantity: ",o)),e.createElement(u,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(s,{onClick:()=>c(H(r)),cursor:"pointer"},"Remove")))};function Jt(){const{cartData:t,total:n}=p(d=>d.cart),{successMsg:a}=p(d=>d.ui),r=y(),o=B(),c=()=>{r(ye())};return g.exports.useEffect(()=>{r(J())},[r,a]),t.length===0?e.createElement(je,null,"Your cart is empty :("):e.createElement(G,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(w,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(h,null,"Your Cart"),e.createElement(s,{my:"20px",cursor:"pointer",onClick:()=>o.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(u,{flexDirection:["column","column","row"]},e.createElement(u,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},t.map(d=>e.createElement(_t,{key:d._id,name:d.name,price:d.price,thumbnail:d.thumbnail,productId:d._id,quantity:d.quantity}))),e.createElement(u,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(h,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(h,{my:"20px"},"Total: $",n),e.createElement(Z,{onClick:c},"Purchase")))))}function Yt({name:t,price:n,thumbnail:a}){return e.createElement(u,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(s,null,"USD ",n))}function Vt(){const t=y(),{purchases:n}=p(a=>a.purchase);return g.exports.useEffect(()=>{t(Q())},[t]),n.length===0?e.createElement(je,null,"You dont have any purchases"):e.createElement(ie,null,e.createElement(le,null,e.createElement(h,null,"Your Purchases"),e.createElement(s,null,"Your history of purchases in one place")),e.createElement(Ae,null,n.map((a,r)=>e.createElement(Yt,{key:r,name:a.name,price:a.price,thumbnail:a.thumbnail}))))}function Wt({thumbnail:t,id:n}){const a=B(),r=y(),o=()=>{a.push(`adminpanel/productedit/${n}`),r(Te())};return e.createElement(u,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(C,{width:"100%",src:t,alt:"productImg"}),e.createElement(u,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(N,{width:"30%",onClick:o,mr:"10px"},"Edit"),e.createElement(N,{width:"30%",onClick:()=>r(ke(n))},"Delete")))}function Ht(){const t=B(),{products:n}=p(r=>r.products),a=y();return g.exports.useEffect(()=>{a(fe())},[a]),e.createElement(ie,null,e.createElement(le,null,e.createElement(h,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(N,{onClick:()=>t.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Ae,null,n.map((r,o)=>e.createElement(Wt,{key:o,id:r._id,name:r.name,price:r.price,thumbnail:r.thumbnail}))))}const Ge=S(k.textarea)`
	${P}
	${v}
	${O}
	${R}
	${A}
	${j}
	${M}
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
`;function Kt(o){var c=o,{onCancel:t,currentValue:n,width:a}=c,r=z(c,["onCancel","currentValue","width"]);const[d,m]=pe(r),[b,I]=g.exports.useState(!1),{userData:D}=p(se=>se.auth),T=()=>{I(!b),t()};return g.exports.useEffect(()=>{I(!1)},[D]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},b?e.createElement(Ge,i(i({width:a||"80%"},d),r)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:T,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(s,{fontSize:"13px",color:"#9b9b9b"},n)),e.createElement(N,{ml:"10px",width:"30px",onClick:T,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(s,{color:"red"},m.error))}const Qt=()=>{const{id:t}=Ne(),n=B(),a=y(),{product:r}=p(o=>o.products);return g.exports.useEffect(()=>{a(K(t))},[a,t]),e.createElement(G,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"900px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:zt,onSubmit:o=>{const c=new FormData;o.name!==""&&c.append("name",o.name),o.description!==""&&c.append("description",o.description),o.category!==""&&c.append("category",o.category),o.price!==""&&c.append("price",o.price),o.thumbnail&&c.append("thumbnail",o.thumbnail),a(ce({id:t,formData:c}))}},({values:o,setFieldValue:c})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Edit Product"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),r.map(d=>e.createElement(e.Fragment,null,e.createElement(Re,{currentImage:d.thumbnail,label:"thumbnail",file:o.thumbnail,onCancel:()=>c("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:m=>c("thumbnail",m.target.files[0]),style:{display:"none"}}),e.createElement(De,{name:"thumbnail"},m=>e.createElement(s,{color:"red"},m)),e.createElement(L,{currentValue:d.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>c("name","")}),e.createElement(Kt,{currentValue:d.description,id:"description",name:"description",type:"text",placeholder:"Description",onCancel:()=>c("description","")}),e.createElement(L,{currentValue:d.category,id:"category",name:"category",type:"text",placeholder:"category",onCancel:()=>c("category","")}),e.createElement(L,{currentValue:d.price,id:"price",name:"price",type:"number",placeholder:"Price",onCancel:()=>c("price","")}))),e.createElement(Z,null,"Save")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>n.go(-1)},"Go Back"))};function Xt(a){var r=a,{label:t}=r,n=z(r,["label"]);const[o,c]=pe(n);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ge,i(i({width:["60%","60%","30%"]},o),n)),c.touched&&c.error&&e.createElement(s,{mt:"3px",color:"red"},c.error))}var Zt="/assets/uploadphoto.e961d561.svg";const ea=()=>{const t=B(),n=y(),{loading:a}=p(r=>r.ui);return e.createElement(G,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"900px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ne,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Tt,onSubmit:(r,{resetForm:o})=>{const c=new FormData;r.name!==""&&c.append("name",r.name),r.description!==""&&c.append("description",r.description),r.category!==""&&c.append("category",r.category),r.price!==""&&c.append("price",r.price),r.thumbnail&&c.append("thumbnail",r.thumbnail),n(Se(c)),o()}},({values:r,setFieldValue:o})=>e.createElement(re,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Add a new product"),e.createElement(s,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(Re,{currentImage:Zt,label:"thumbnail",file:r.thumbnail,onCancel:()=>o("thumbnail",null)}),e.createElement("input",{id:"thumbnail",name:"thumbnail",type:"file",onChange:c=>o("thumbnail",c.target.files[0]),hidden:!0}),e.createElement(De,{name:"thumbnail"},c=>e.createElement(s,{color:"red"},c)),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*",disabled:a}),e.createElement(Xt,{id:"description",name:"description",type:"text",placeholder:"Description*",disabled:a}),e.createElement($,{id:"category",name:"category",type:"text",placeholder:"Category*",disabled:a}),e.createElement($,{id:"price",name:"price",type:"number",placeholder:"Price*",disabled:a}),e.createElement(Z,null,"Add Product")))),e.createElement(s,{m:"30px",cursor:"pointer",onClick:()=>t.go(-1)},"Go Back"))};function ta({error:t,children:n}){return e.createElement(u,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"absolute",top:"5",left:"2",p:"20px",bg:t?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(s,{color:t?"#98210A":"#235234"},n))}function aa(){const t=g.exports.useRef(null),n=y(),{userData:a,loggedIn:r}=p(d=>d.auth),{successMsg:o}=p(d=>d.ui),c=Ze();return g.exports.useEffect(()=>{n(ge())},[n]),g.exports.useEffect(()=>{setTimeout(()=>{n(Pe())},2e3)},[n,o]),e.createElement(e.Fragment,null,e.createElement(Ct,null),e.createElement(Dt,null),e.createElement(et,{ref:t,timeout:1e3*120,onIdle:()=>n(U()),crossTab:{emitOnAllTabs:!0}}),e.createElement(ue,{exitBeforeEnter:!0},o&&e.createElement(ta,null,o)),e.createElement(ue,{exitBeforeEnter:!0},e.createElement(tt,{location:c,key:c.pathname},e.createElement(_,{exact:!0,path:"/",component:Pt}),e.createElement(_,{path:"/product/:id",component:qt}),e.createElement(_,{path:"/about",component:At}),e.createElement(_,{path:"/contact",component:Mt}),e.createElement(Ue,{isAuth:r,path:"/login",component:Ot}),e.createElement(Ue,{isAuth:r,path:"/signup",component:Ut}),e.createElement(ee,{isAuth:r,path:"/profile",component:Gt}),e.createElement(ee,{isAuth:r,path:"/cart",component:Jt}),e.createElement(ee,{isAuth:r,path:"/purchases",component:Vt}),e.createElement(ee,{exact:!0,isAuth:a.isAdmin,path:"/adminpanel",component:Ht}),e.createElement(ee,{isAuth:a.isAdmin,path:"/adminpanel/add",component:ea}),e.createElement(ee,{isAuth:a.isAdmin,path:"/adminpanel/productedit/:id",component:Qt}),e.createElement(_,{path:"*",component:Bt}))))}const na={colors:{primary:"#0D0D0D",secondary:"#979797",text:"#151875",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function ra({children:t}){return e.createElement(at,{theme:na},t)}const oa=nt({reducer:{auth:dt,products:gt,cart:pt,purchase:yt,ui:bt},devTools:!1});rt.render(e.createElement(e.StrictMode,null,e.createElement(ot,{store:oa},e.createElement(ra,null,e.createElement(ct,null,e.createElement(aa,null))))),document.getElementById("root"));
