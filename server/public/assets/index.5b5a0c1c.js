var Te=Object.defineProperty,ze=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(t,r,a)=>r in t?Te(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(t,r)=>{for(var a in r||(r={}))je.call(r,a)&&Re(t,a,r[a]);if(se)for(var a of se(r))Me.call(r,a)&&Re(t,a,r[a]);return t},l=(t,r)=>ze(t,Ge(r));var N=(t,r)=>{var a={};for(var n in t)je.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&se)for(var n of se(t))r.indexOf(n)<0&&Me.call(t,n)&&(a[n]=t[n]);return a};import{a as _e,c as E,b as Q,W as Je,s as I,m as D,d as k,e as A,t as j,l as P,f as S,g as _,h as F,p as v,i as J,j as Ee,u as f,k as p,R as e,L as R,r as y,G as Ye,n as be,o as M,q as Be,v as Ce,A as we,w as X,x as g,y as de,z as ue,F as Z,B as ee,C as T,D as Ve,E as We,S as He,H as Ke,I as Qe,J as Xe,P as Ze,K as et}from"./vendor.ffb80fa1.js";const tt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}};tt();const x=_e.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),Y=E("auth/login",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.post("/api/auth/login",t);return a}catch({response:{data:a}}){return r(a)}}),z=E("auth/logout",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.get("/api/auth/logout");return a}catch({response:{data:a}}){return r(a)}}),me=E("auth/signup",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.post("/api/auth/signup",t);return a}catch({response:{data:a}}){return r(a)}}),$e=E("auth/isLoggedIn",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.get("/api/auth/isloggedin");return a}catch({response:{data:a}}){return r(a)}}),te=E("auth/editUser",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.patch("/api/auth/edituser",t);return a}catch({response:{data:a}}){return r(a)}}),at={userData:JSON.parse(localStorage.getItem("userData"))||{},loggedIn:!1},rt=Q({name:"auth",initialState:at,reducers:{},extraReducers:t=>{t.addCase(Y.rejected,(r,a)=>i({},r)).addCase(Y.fulfilled,(r,a)=>l(i({},r),{userData:a.payload.userData,loggedIn:a.payload.loggedIn})).addCase(z.fulfilled,(r,a)=>l(i({},r),{userData:{},loggedIn:a.payload.loggedIn})).addCase(z.rejected,(r,a)=>l(i({},r),{userData:{},loggedIn:!1})).addCase($e.fulfilled,(r,a)=>l(i({},r),{loggedIn:a.payload.loggedIn})).addCase($e.rejected,(r,a)=>l(i({},r),{userData:{},loggedIn:a.payload.loggedIn})).addCase(te.fulfilled,(r,a)=>l(i({},r),{userData:a.payload.userUpdated}))}});var nt=rt.reducer;const O=E("cart/getCart",async(t,{rejectWithValue:r})=>{try{const{data:[a]}=await x.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),ae=E("cart/addProductToCart",async(t,{rejectWithValue:r})=>{try{await x.post(`/api/cart/add/${t}`);const{data:[a]}=await x.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),pe=E("cart/removeProductFromCart",async(t,{rejectWithValue:r})=>{try{await x.delete(`/api/cart/delete/${t}`);const{data:[a]}=await x.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),ot={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null,totalItems:JSON.parse(localStorage.getItem("totalItems"))||null},ct=Q({name:"cart",initialState:ot,reducers:{},extraReducers:t=>{t.addCase(O.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(O.rejected,(r,a)=>({cartData:[],total:null,totalItems:null})).addCase(ae.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(pe.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total,totalItems:a.payload.totalItems})).addCase(pe.rejected,(r,a)=>l(i({},r),{cartData:[],total:null,totalItems:null})).addCase(z.fulfilled,(r,a)=>({cartData:[],total:null,totalItems:null}))}});var it=ct.reducer;const he=E("products/getAllProducts",async()=>{const{data:{products:t}}=await x.get("/api/products/list");return t}),G=E("products/getProductById",async(t,{rejectWithValue:r})=>{try{const{data:{product:a}}=await x.get(`/api/products/list/${t}`);return a}catch({response:{data:a}}){return r(a.error)}}),Ie=E("products/addProduct",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.post("/api/products/add",t);return a}catch({response:{data:a}}){return r(a.error)}}),re=E("products/editProduct",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.patch(`/api/products/update/${t.id}`,t.formData);return a}catch({response:{data:a}}){return r(a.error)}}),De=E("products/deleteProduct",async(t,{rejectWithValue:r})=>{try{await x.delete(`/api/products/delete/${t}`);const{data:{products:a}}=await x.get("/api/products/list");return a}catch({response:{data:a}}){return r(a.error)}}),lt={products:[],product:[]},qe=Q({name:"products",initialState:lt,reducers:{clearProduct(t,r){return l(i({},t),{product:[]})}},extraReducers:t=>{t.addCase(he.fulfilled,(r,a)=>l(i({},r),{products:a.payload})).addCase(he.rejected,(r,a)=>l(i({},r),{products:[]})).addCase(G.fulfilled,(r,a)=>l(i({},r),{product:a.payload})).addCase(G.rejected,(r,a)=>l(i({},r),{product:[]})).addCase(re.fulfilled,(r,a)=>l(i({},r),{product:a.payload.updatedProduct})).addCase(re.rejected,(r,a)=>l(i({},r),{product:[]})).addCase(De.fulfilled,(r,a)=>l(i({},r),{products:a.payload})).addCase(De.rejected,(r,a)=>l(i({},r),{products:[]}))}}),{clearProduct:Le}=qe.actions;var st=qe.reducer;const V=E("order/getPurchases",async(t,{rejectWithValue:r})=>{try{const{data:a}=await x.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return r(a)}}),ne=E("order/purchase",async(t,{rejectWithValue:r})=>{try{const{data:{msg:a}}=await x.post("/api/orders/purchase");return a}catch({response:{data:a}}){return r(a)}}),dt={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},ut=Q({name:"purchase",initialState:dt,reducers:{},extraReducers:t=>{t.addCase(V.fulfilled,(r,a)=>l(i({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(V.rejected,(r,a)=>({purchases:[],total:null})).addCase(ne.fulfilled,(r,a)=>l(i({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(z.fulfilled,(r,a)=>({purchases:[],totalPaid:null}))}});var mt=ut.reducer;const pt={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},Ne=Q({name:"ui",initialState:pt,reducers:{clearErrorMsg(t,r){return l(i({},t),{errorMsg:null})},clearSuccessMsg(t,r){return l(i({},t),{successMsg:null})},setUserMenu(t,r){return l(i({},t),{userMenu:r.payload})}},extraReducers:t=>{t.addCase(G.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(G.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(G.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload})).addCase(Ie.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(Ie.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:a.payload.msg})).addCase(re.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(re.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:a.payload.msg})).addCase(Y.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(Y.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(Y.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(z.fulfilled,(r,a)=>l(i({},r),{userMenu:!1})).addCase(te.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(te.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(te.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(me.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(me.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:a.payload.msg})).addCase(me.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(O.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(O.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(O.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(ae.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(ae.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:"Product added to cart"})).addCase(ae.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(pe.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(V.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(V.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(V.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(ne.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(ne.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:a.payload.msg})).addCase(ne.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error}))}}),{clearErrorMsg:ge,clearSuccessMsg:ke,setUserMenu:xe}=Ne.actions;var ht=Ne.reducer;const gt=Je`

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
  }
`,u=I(D.div)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	${Ee}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`,h=I(D.h1)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	font-family: ${t=>t.theme.fonts.chakra};
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,Pe=I(D.ul)`
	${k}
	${P}
	${S}
	${v}
	display:${t=>t.display?t.display:"flex"};
`,B=I(D.li)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	cursor: pointer;
`,d=I(D.p)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,C=I(D.img)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${v}
	${F}
    height: ${t=>t.height?t.height:"auto"};
	cursor: ${t=>t.cursor&&"pointer"};
	opacity: ${t=>t.opacity};
	background-size: cover;
	background-position: center;
`;var xt="/assets/cart.7e54eda4.svg";const yt=()=>{const t=f(),{userData:r}=p(o=>o.auth),a=()=>{t(z()),t(xe(!1)),t(ke())},n=()=>{t(xe(!1))};return e.createElement(u,{position:"absolute",width:"120px",alignItems:"center",right:["10px","10px","110px"],top:"5",justifyContent:"center",bg:"#1d1d1dfd",color:"#e4e4e4",height:"160px",zIndex:100,onBlur:n},e.createElement(Pe,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(R,{to:"/profile",onClick:n},e.createElement(B,{mb:"20px"},"Edit User")),e.createElement(R,{to:"/purchases",onClick:n},e.createElement(B,{mb:"20px"},"Purchases")),r.isAdmin&&e.createElement(R,{to:"/adminpanel",onClick:n},e.createElement(B,{mb:"20px"},"Admin Panel")),e.createElement(B,{onClick:a},"Logout")))};function ft(){const{colors:{primary:t}}=y.exports.useContext(Ye),r=f(),{userData:a,loggedIn:n}=p(b=>b.auth),{cartData:o,totalItems:c}=p(b=>b.cart),{userMenu:s}=p(b=>b.ui);y.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(a))},[a]),y.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(o))},[o]);const m=()=>{r(xe(!1))};return e.createElement(u,{position:"relative",as:"header",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:t,color:"white",borderBottom:"1px solid white"},e.createElement(R,{to:"/",onClick:m},e.createElement(h,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement(u,{as:"nav",flex:1},e.createElement(Pe,{flex:1,justifyContent:"space-evenly"},e.createElement(R,{to:"/",onClick:m},e.createElement(B,null,"Shop")),e.createElement(R,{to:"/about",onClick:m},e.createElement(B,null,"About")),e.createElement(R,{to:"/contact",onClick:m},e.createElement(B,null,"Contact"))),e.createElement(Pe,{justifyContent:"space-evenly"},e.createElement(R,{to:"/cart"},e.createElement(u,{alignItems:"center",mr:"20px",onClick:m},e.createElement(C,{mr:"5px",src:xt}),e.createElement(d,null,n&&o.length!==0&&c))),e.createElement(u,{height:"100%",alignItems:"center"},n?e.createElement(u,{onClick:()=>r(xe(!s))},e.createElement(C,{borderRadius:"100%",width:"20px",mr:"10px",src:a.avatar,alt:"avatar"}),e.createElement(B,null,a.name)):e.createElement(R,{to:"/login"},e.createElement(B,null,"Login")))),s&&e.createElement(yt,null)))}const U=I(D.main)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	${Ee}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function oe({children:t}){const{loading:r}=p(a=>a.ui);return e.createElement(U,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column"},r?e.createElement(u,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(be.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,t))}const w=I(D.section)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${_}
	${F}
	${v}
	${J}
	${Ee}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function ce({children:t}){return e.createElement(w,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(u,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},t))}function Se({children:t}){return e.createElement(w,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},t)}function Et({name:t,price:r,thumbnail:a,id:n}){const o=M(),c=f(),s=()=>{o.push(`/product/${n}`),c(Le()),c(ge())};return e.createElement(u,{onClick:s,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(d,null,"USD ",r))}var bt="/assets/emptycart.178cfab5.svg";function ve({children:t}){return e.createElement(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(C,{mb:"20px",width:["70%","70%","30%"],src:bt}),e.createElement(d,null,t))}function Ct(){const t=f(),{products:r}=p(a=>a.products);return y.exports.useEffect(()=>{t(he()),t(O())},[t]),r.length===0?e.createElement(ve,null,"No products in db"):e.createElement(oe,null,e.createElement(ce,null,e.createElement(h,null,"Shop Tech"),e.createElement(d,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Se,null,r.map(a=>e.createElement(Et,{key:a._id,name:a.name,price:a.price,thumbnail:a.thumbnail,id:a._id}))))}var wt="/assets/about.74ce83db.svg";function $t(){return e.createElement(oe,null,e.createElement(ce,null,e.createElement(h,null,"About Us"),e.createElement(d,null,"Wanna know more about us?.. this is the page")),e.createElement(w,{flexDirection:"column",py:"54px",px:["20px","20px","145px"],alignItems:"center"},e.createElement(C,{width:["50%","50%","30%"],src:wt,alt:"about",mb:"40px"}),e.createElement(d,{fontSize:"20px"},"As a company, our goal is to improve people's lives, to contribute to the development of our communities and the preservation of the environment. Nowadays, all businesses are generating torrents of data every day about their internal and external customers, and with the right tools and technologies, Edrans can help you get the most out of that information: from insights on consumer behavior, KPIs and environment metrics you can get a deeper level of understanding of your customers\u2019 sentiment and emotional drivers when engaging with your business, and forecasts based on historical data and modelled projections. We humanize data by understanding human behavior, focusing on the functional and emotional aspects of data to create experiences through technology that empower your business and create lasting value.")))}var It="/assets/contact.7e96ee01.svg";function Dt(){return e.createElement(oe,null,e.createElement(ce,null,e.createElement(h,null,"Contact Us"),e.createElement(d,null,"We are here to help!")),e.createElement(w,{flexDirection:["column","column","row"],py:"54px",px:["20px","20px","145px"],alignItems:"center",justifyContent:"center"},e.createElement(C,{width:["70%","70%","40%"],src:It,alt:"about",mb:"40px"}),e.createElement(u,{flexDirection:"column"},e.createElement(h,{mb:"20px"},"Get In Touch"),e.createElement(d,null,"Whatsapp: +5491128576884"),e.createElement(d,null,"Email: joxpulp@gmail.com"))))}var kt="/assets/404.20cf8557.svg";const q=I(D.button)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${v}
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
`;function Pt(){const t=M();return e.createElement(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(C,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:kt,alt:"404"}),e.createElement(d,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(q,{bg:"black",color:"white",width:"125px",onClick:()=>t.push("/")},"Back to Shop"))}function St(){const{id:t}=Be(),r=M(),a=f(),{product:n}=p(m=>m.products),{loading:o,errorMsg:c}=p(m=>m.ui),s=()=>{a(ae(t))};return y.exports.useEffect(()=>{a(G(t))},[a,t]),c?e.createElement(u,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement(Ce,{to:"/login"}),";"):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(we,{exitBeforeEnter:!0},o?e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(be.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):n.map(m=>e.createElement(w,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:m._id},e.createElement(C,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:m.thumbnail}),e.createElement(u,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(h,{my:"10px"},m.name),e.createElement(d,{mb:"20px"},"Price: USD ",m.price),e.createElement(d,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(d,{fontSize:"12px"},m.description),e.createElement(u,{mt:"20px"},e.createElement(q,{onClick:s,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(q,{onClick:()=>r.push("/")},"Go Back")))))))}const vt=X({email:g().email("The email address is invalid, try again").required("Required"),password:g().min(8,"Password must be at least 8 characters").required("Required")}),At=X({email:g().email("The email address is invalid, try again").required("Email is required"),password:g().min(8,"Password must be 8 mininum characters").required("Password is required"),name:g().min(3,"Name must be at least 3 characters").required("Name is Required"),lastname:g().min(3,"Lastname must be at least 3 characters").required("Lastname is Required"),age:de().min(16,"You must have 16 years old or more to register").required("Age is required"),cardId:g().matches(/^\d{8}$/,"Card Id must be 8 digits only").required("Card Id (DNI) is required"),address:g().min(10,"Address must have 10 characters or more").required("Address is required")}),jt=X({name:g().min(3,"Name must be at least 3 characters"),lastname:g().min(3,"Lastname must be at least 3 characters"),password:g().min(8,"Password must be at least 8 characters"),age:de().min(16,"Your age must be 16 or more"),cardId:g().matches(/^\d{8}$/,"DNI must be 8 digits only"),address:g().min(10,"Address must at least 10 characters")}),Mt=X({name:g().min(3,"Product name must be at least 3 characters").required("Product name is required"),description:g().min(20,"Product description must be at least 20 characters").required("Product description is required"),category:g().min(4,"Product category must be at least 4 characters").required("Product category is required"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required")}),Rt=X({name:g().min(3,"Product name must be at least 3 characters"),description:g().min(20,"Product description must be at least 20 characters"),category:g().min(4,"Product category be at least 4 characters"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000")});function W(a){var n=a,{children:t}=n,r=N(n,["children"]);const{loading:o}=p(c=>c.ui);return e.createElement(q,i({bg:"black",color:"white",type:"submit",mr:"10px",disabled:o},r),o?e.createElement(be.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):t)}const Fe=I(D.input)`
	${k}
	${A}
	${j}
	${P}
	${S}
	${v}
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
`;function $(a){var n=a,{label:t}=n,r=N(n,["label"]);const[o,c]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Fe,i(i({width:["60%","60%","30%"]},o),r)),c.touched&&c.error&&e.createElement(d,{mt:"3px",color:"red"},c.error))}function Bt(){const t=M(),r=f(),{loading:a,errorMsg:n}=p(c=>c.ui),o=()=>{t.push("/signup"),r(ge()),r(ke())};return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(Z,{initialValues:{email:"",password:""},validationSchema:vt,onSubmit:({email:c,password:s})=>{r(ge()),r(Y({email:c,password:s}))}},e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Welcome Back"),e.createElement(d,{color:"#A9ABBD"},"Login with your email:"),n&&e.createElement(d,{m:"20px",color:"#b62929"},n),e.createElement($,{disabled:a,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement($,{disabled:a,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(W,null,"Login")))),e.createElement(d,{m:"30px",cursor:"pointer",onClick:o},"Or create an account"))}function qt(){const t=M(),r=f(),{loading:a,errorMsg:n}=p(o=>o.ui);return e.createElement(U,{overflow:"hidden",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",my:"50px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(Z,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:At,onSubmit:(o,{resetForm:c})=>{r(ge()),r(me(o)),c()}},e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Signup"),e.createElement(d,{color:"#A9ABBD"},"Fill your info"),n&&e.createElement(d,{m:"20px",color:"#b62929"},n),e.createElement($,{id:"email",name:"email",type:"email",placeholder:"Email*",disabled:a}),e.createElement($,{id:"password",name:"password",type:"password",placeholder:"Password*",disabled:a}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement($,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*",disabled:a}),e.createElement($,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement($,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*",disabled:a}),e.createElement($,{id:"address",name:"address",type:"text",placeholder:"Address*",disabled:a}),e.createElement(W,null,"Sign Up")))),e.createElement(d,{m:"30px",cursor:"pointer",onClick:()=>t.push("/login")},"Or go to login"))}const Oe=n=>{var o=n,{isAuth:t,component:r}=o,a=N(o,["isAuth","component"]);return e.createElement(T,i({},a),t?e.createElement(Ce,{to:"/"}):e.createElement(r,null))},H=n=>{var o=n,{isAuth:t,component:r}=o,a=N(o,["isAuth","component"]);return e.createElement(T,i({},a),t?e.createElement(r,null):e.createElement(Ce,{to:"/login"}))};function L(o){var c=o,{onCancel:t,currentValue:r,width:a}=c,n=N(c,["onCancel","currentValue","width"]);const[s,m]=ue(n),[b,K]=y.exports.useState(!1),{userData:ye}=p(fe=>fe.auth),{product:ie}=p(fe=>fe.products),le=()=>{K(!b),t()};return y.exports.useEffect(()=>{K(!1)},[ye,ie]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},b?e.createElement(Fe,i(i({width:a||"80%"},s),n)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:le,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(h,{color:"#9b9b9b"},r)),e.createElement(q,{ml:"10px",width:"30px",onClick:le,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(d,{color:"red"},m.error))}var Lt="/assets/cancel.a4530b38.svg";function Ae({currentImage:t,file:r,label:a,onCancel:n}){const[o,c]=y.exports.useState(null),s=new FileReader;r&&s.readAsDataURL(r),s.onload=()=>{r&&c(s.result)};const m=()=>{c(null),n()};return e.createElement(u,{position:"relative"},r&&e.createElement(C,{position:"absolute",cursor:"pointer",m:"10px",right:"0",width:"30px",src:Lt,onClick:m,zIndex:"2"}),e.createElement("label",{htmlFor:a},e.createElement(C,{cursor:"pointer",width:"150px",m:"10px",src:o||t})))}function Nt(){const t=f(),{userData:r}=p(a=>a.auth);return p(a=>a.ui),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:jt,onSubmit:a=>{const n=new FormData;a.name!==""&&n.append("name",a.name),a.lastname!==""&&n.append("lastname",a.lastname),a.age!==""&&n.append("age",a.age),a.address!==""&&n.append("address",a.address),a.password!==""&&n.append("password",a.password),a.avatar&&n.append("avatar",a.avatar),t(te(n))}},({values:a,setFieldValue:n})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Your Profile"),e.createElement(d,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(d,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(Ae,{currentImage:r.avatar,label:"avatar",file:a.avatar,onCancel:()=>n("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:o=>n("avatar",o.target.files[0]),style:{display:"none"}}),e.createElement(L,{currentValue:r.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>n("name","")}),e.createElement(L,{currentValue:r.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>n("lastname","")}),e.createElement(L,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>n("password","")}),e.createElement(L,{currentValue:r.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>n("age","")}),e.createElement(L,{currentValue:r.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>n("cardId","")}),e.createElement(L,{currentValue:r.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>n("address","")}),e.createElement(W,null,"Save profile")))))}const Ft=({name:t,price:r,thumbnail:a,productId:n,quantity:o})=>{const c=f();return e.createElement(u,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(C,{borderRadius:"5px",width:["30%","30%","25%"],src:a,alt:"productImg"}),e.createElement(u,{mx:"30px",flexDirection:"column"},e.createElement(h,null,t),e.createElement(d,{my:"15px"},"USD ",r),e.createElement(d,null,"Quantity: ",o)),e.createElement(u,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(d,{onClick:()=>c(pe(n)),cursor:"pointer"},"Remove")))};function Ot(){const{cartData:t,total:r}=p(s=>s.cart),{purchases:a}=p(s=>s.purchase),n=f(),o=M(),c=()=>{n(ne())};return y.exports.useEffect(()=>{n(O())},[n,a]),t.length===0?e.createElement(ve,null,"Your cart is empty :("):e.createElement(U,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(w,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(h,null,"Your Cart"),e.createElement(d,{my:"20px",cursor:"pointer",onClick:()=>o.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(u,{flexDirection:["column","column","row"]},e.createElement(u,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},t.map(s=>e.createElement(Ft,{key:s._id,name:s.name,price:s.price,thumbnail:s.thumbnail,productId:s._id,quantity:s.quantity}))),e.createElement(u,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(h,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(h,{my:"20px"},"Total: $",r),e.createElement(W,{onClick:c},"Purchase")))))}function Ut({name:t,price:r,thumbnail:a}){return e.createElement(u,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(C,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(h,{my:"15px"},t),e.createElement(d,null,"USD ",r))}function Tt(){const t=f(),{purchases:r}=p(a=>a.purchase);return y.exports.useEffect(()=>{t(V()),t(O())},[t]),r.length===0?e.createElement(ve,null,"You dont have any purchases"):e.createElement(oe,null,e.createElement(ce,null,e.createElement(h,null,"Your Purchases"),e.createElement(d,null,"Your history of purchases in one place")),e.createElement(Se,null,r.map((a,n)=>e.createElement(Ut,{key:n,name:a.name,price:a.price,thumbnail:a.thumbnail}))))}function zt({thumbnail:t,id:r}){const a=M(),n=f(),o=()=>{a.push(`adminpanel/productedit/${r}`),n(Le())};return e.createElement(u,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(C,{width:"100%",src:t,alt:"productImg"}),e.createElement(u,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(q,{width:"30%",onClick:o,mr:"10px"},"Edit"),e.createElement(q,{width:"30%",onClick:()=>n(De(r))},"Delete")))}function Gt(){const t=M(),{products:r}=p(n=>n.products),a=f();return y.exports.useEffect(()=>{a(he())},[a]),e.createElement(oe,null,e.createElement(ce,null,e.createElement(h,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(q,{onClick:()=>t.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Se,null,r.map((n,o)=>e.createElement(zt,{key:o,id:n._id,name:n.name,price:n.price,thumbnail:n.thumbnail}))))}const Ue=I(D.textarea)`
	${k}
	${A}
	${F}
	${j}
	${P}
	${S}
	${v}
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
`;function _t(o){var c=o,{onCancel:t,currentValue:r,width:a}=c,n=N(c,["onCancel","currentValue","width"]);const[s,m]=ue(n),[b,K]=y.exports.useState(!1),{userData:ye}=p(le=>le.auth),ie=()=>{K(!b),t()};return y.exports.useEffect(()=>{K(!1)},[ye]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},b?e.createElement(Ue,i(i({width:a||"80%"},s),n)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:ie,alignItems:"center",justifyContent:"center",width:a||"80%",borderBottom:"1px solid #C2C5E1"},e.createElement(d,{fontSize:"13px",color:"#9b9b9b"},r)),e.createElement(q,{ml:"10px",width:"30px",onClick:ie,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(d,{color:"red"},m.error))}const Jt=()=>{const{id:t}=Be(),r=M(),a=f(),{product:n}=p(o=>o.products);return y.exports.useEffect(()=>{a(G(t))},[a,t]),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Rt,onSubmit:o=>{const c=new FormData;o.name!==""&&c.append("name",o.name),o.description!==""&&c.append("description",o.description),o.category!==""&&c.append("category",o.category),o.price!==""&&c.append("price",o.price),o.thumbnail&&c.append("thumbnail",o.thumbnail),a(re({id:t,formData:c}))}},({values:o,setFieldValue:c})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Edit Product"),e.createElement(d,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),n.map(s=>e.createElement(e.Fragment,null,e.createElement(Ae,{currentImage:s.thumbnail,label:"thumbnail",file:o.thumbnail,onCancel:()=>c("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:m=>c("thumbnail",m.target.files[0]),style:{display:"none"}}),e.createElement(L,{currentValue:s.name,id:"name",name:"name",type:"text",placeholder:"Name",width:"400px",onCancel:()=>c("name","")}),e.createElement(_t,{currentValue:s.description,id:"description",name:"description",type:"text",width:"400px",placeholder:"Description",onCancel:()=>c("description","")}),e.createElement(L,{currentValue:s.category,id:"category",name:"category",type:"text",placeholder:"category",width:"400px",onCancel:()=>c("category","")}),e.createElement(L,{currentValue:s.price,id:"price",name:"price",type:"number",placeholder:"Price",width:"400px",onCancel:()=>c("price","")}))),e.createElement(W,null,"Save")))),e.createElement(d,{m:"30px",cursor:"pointer",onClick:()=>r.go(-1)},"Go Back"))};function Yt(a){var n=a,{label:t}=n,r=N(n,["label"]);const[o,c]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ue,i(i({width:["60%","60%","30%"]},o),r)),c.touched&&c.error&&e.createElement(d,{mt:"3px",color:"red"},c.error))}var Vt="/assets/uploadphoto.e961d561.svg";const Wt=()=>{const t=M(),r=f(),{loading:a}=p(n=>n.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Mt,onSubmit:(n,{resetForm:o})=>{const c=new FormData;n.name!==""&&c.append("name",n.name),n.description!==""&&c.append("description",n.description),n.category!==""&&c.append("category",n.category),n.price!==""&&c.append("price",n.price),n.thumbnail&&c.append("thumbnail",n.thumbnail),r(Ie(c)),o()}},({values:n,setFieldValue:o})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(h,{my:"10px"},"Add a new product"),e.createElement(d,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(Ae,{currentImage:Vt,label:"thumbnail",file:n.thumbnail,onCancel:()=>o("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:c=>o("thumbnail",c.target.files[0]),style:{display:"none"}}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*",disabled:a}),e.createElement(Yt,{id:"description",name:"description",type:"text",placeholder:"Description*",disabled:a}),e.createElement($,{id:"category",name:"category",type:"text",placeholder:"Category*",disabled:a}),e.createElement($,{id:"price",name:"price",type:"number",placeholder:"Price*",disabled:a}),e.createElement(W,null,"Add Product")))),e.createElement(d,{m:"30px",cursor:"pointer",onClick:()=>t.go(-1)},"Go Back"))};function Ht({error:t,children:r}){return e.createElement(u,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"absolute",top:"5",left:"2",p:"20px",bg:t?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(d,{color:t?"#98210A":"#235234"},r))}function Kt(){const t=y.exports.useRef(null),r=f(),{userData:a,loggedIn:n}=p(s=>s.auth),{successMsg:o}=p(s=>s.ui),c=Ve();return y.exports.useEffect(()=>{r($e())},[r]),y.exports.useEffect(()=>{setTimeout(()=>{r(ke())},2e3)},[r,o]),e.createElement(e.Fragment,null,e.createElement(gt,null),e.createElement(ft,null),e.createElement(We,{ref:t,timeout:1e3*120,onIdle:()=>r(z()),crossTab:{emitOnAllTabs:!0}}),e.createElement(we,{exitBeforeEnter:!0},o&&e.createElement(Ht,null,o)),e.createElement(we,{exitBeforeEnter:!0},e.createElement(He,{location:c,key:c.pathname},e.createElement(T,{exact:!0,path:"/",component:Ct}),e.createElement(T,{path:"/product/:id",component:St}),e.createElement(T,{path:"/about",component:$t}),e.createElement(T,{path:"/contact",component:Dt}),e.createElement(Oe,{isAuth:n,path:"/login",component:Bt}),e.createElement(Oe,{isAuth:n,path:"/signup",component:qt}),e.createElement(H,{isAuth:n,path:"/profile",component:Nt}),e.createElement(H,{isAuth:n,path:"/cart",component:Ot}),e.createElement(H,{isAuth:n,path:"/purchases",component:Tt}),e.createElement(H,{exact:!0,isAuth:a.isAdmin,path:"/adminpanel",component:Gt}),e.createElement(H,{isAuth:a.isAdmin,path:"/adminpanel/add",component:Wt}),e.createElement(H,{isAuth:a.isAdmin,path:"/adminpanel/productedit/:id",component:Jt}),e.createElement(T,{path:"*",component:Pt}))))}const Qt={colors:{primary:"#0D0D0D",secondary:"#979797",text:"#151875",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function Xt({children:t}){return e.createElement(Ke,{theme:Qt},t)}const Zt=Qe({reducer:{auth:nt,products:st,cart:it,purchase:mt,ui:ht}});Xe.render(e.createElement(e.StrictMode,null,e.createElement(Ze,{store:Zt},e.createElement(Xt,null,e.createElement(et,null,e.createElement(Kt,null))))),document.getElementById("root"));
