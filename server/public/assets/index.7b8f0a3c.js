var Te=Object.defineProperty,ze=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(a,r,t)=>r in a?Te(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,c=(a,r)=>{for(var t in r||(r={}))je.call(r,t)&&Re(a,t,r[t]);if(le)for(var t of le(r))Me.call(r,t)&&Re(a,t,r[t]);return a},l=(a,r)=>ze(a,Ge(r));var L=(a,r)=>{var t={};for(var n in a)je.call(a,n)&&r.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&le)for(var n of le(a))r.indexOf(n)<0&&Me.call(a,n)&&(t[n]=a[n]);return t};import{a as _e,c as E,b as Q,W as Je,s as I,m as D,d as k,e as j,t as M,l as S,f as P,g as _,h as N,p as v,i as J,j as fe,u as f,k as p,R as e,L as B,r as y,G as Ye,n as Ee,o as R,q as Be,v as be,A as Ce,w as X,x,y as se,z as de,F as Z,B as ee,C as T,D as Ve,E as We,S as He,H as Ke,I as Qe,J as Xe,P as Ze,K as et}from"./vendor.ffb80fa1.js";const tt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};tt();const h=_e.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),Y=E("auth/login",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.post("/api/auth/login",a);return t}catch({response:{data:t}}){return r(t)}}),z=E("auth/logout",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.get("/api/auth/logout");return t}catch({response:{data:t}}){return r(t)}}),ue=E("auth/signup",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.post("/api/auth/signup",a);return t}catch({response:{data:t}}){return r(t)}}),we=E("auth/isLoggedIn",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.get("/api/auth/isloggedin");return t}catch({response:{data:t}}){return r(t)}}),te=E("auth/editUser",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.patch("/api/auth/edituser",a);return t}catch({response:{data:t}}){return r(t)}}),at={userData:JSON.parse(localStorage.getItem("userData"))||{},loggedIn:!1},rt=Q({name:"auth",initialState:at,reducers:{},extraReducers:a=>{a.addCase(Y.rejected,(r,t)=>c({},r)).addCase(Y.fulfilled,(r,t)=>l(c({},r),{userData:t.payload.userData,loggedIn:t.payload.loggedIn})).addCase(z.fulfilled,(r,t)=>l(c({},r),{userData:{},loggedIn:t.payload.loggedIn})).addCase(z.rejected,(r,t)=>l(c({},r),{userData:{},loggedIn:!1})).addCase(we.fulfilled,(r,t)=>l(c({},r),{loggedIn:t.payload.loggedIn})).addCase(we.rejected,(r,t)=>l(c({},r),{userData:{},loggedIn:t.payload.loggedIn})).addCase(te.fulfilled,(r,t)=>l(c({},r),{userData:t.payload.userUpdated}))}});var nt=rt.reducer;const O=E("cart/getCart",async(a,{rejectWithValue:r})=>{try{const{data:[t]}=await h.get("/api/cart/list");return t}catch({response:{data:t}}){return r(t)}}),ae=E("cart/addProductToCart",async(a,{rejectWithValue:r})=>{try{await h.post(`/api/cart/add/${a}`);const{data:[t]}=await h.get("/api/cart/list");return t}catch({response:{data:t}}){return r(t)}}),me=E("cart/removeProductFromCart",async(a,{rejectWithValue:r})=>{try{await h.delete(`/api/cart/delete/${a}`);const{data:[t]}=await h.get("/api/cart/list");return t}catch({response:{data:t}}){return r(t)}}),ot={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null,totalItems:JSON.parse(localStorage.getItem("totalItems"))||null},ct=Q({name:"cart",initialState:ot,reducers:{},extraReducers:a=>{a.addCase(O.fulfilled,(r,t)=>l(c({},r),{cartData:t.payload.cartProducts,total:t.payload.total,totalItems:t.payload.totalItems})).addCase(O.rejected,(r,t)=>({cartData:[],total:null,totalItems:null})).addCase(ae.fulfilled,(r,t)=>l(c({},r),{cartData:t.payload.cartProducts,total:t.payload.total,totalItems:t.payload.totalItems})).addCase(me.fulfilled,(r,t)=>l(c({},r),{cartData:t.payload.cartProducts,total:t.payload.total,totalItems:t.payload.totalItems})).addCase(me.rejected,(r,t)=>l(c({},r),{cartData:[],total:null,totalItems:null})).addCase(z.fulfilled,(r,t)=>({cartData:[],total:null,totalItems:null}))}});var it=ct.reducer;const pe=E("products/getAllProducts",async()=>{const{data:{products:a}}=await h.get("/api/products/list");return a}),G=E("products/getProductById",async(a,{rejectWithValue:r})=>{try{const{data:{product:t}}=await h.get(`/api/products/list/${a}`);return t}catch({response:{data:t}}){return r(t.error)}}),$e=E("products/addProduct",async(a,{rejectWithValue:r})=>{try{await h.post("/api/products/add",a);const{data:{products:t}}=await h.get("/api/products/list");return t}catch({response:{data:t}}){return r(t.error)}}),Ie=E("products/editProduct",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.put(`/api/products/update/${a.id}`,a.formData);return t}catch({response:{data:t}}){return r(t.error)}}),De=E("products/deleteProduct",async(a,{rejectWithValue:r})=>{try{await h.delete(`/api/products/delete/${a}`);const{data:{products:t}}=await h.get("/api/products/list");return t}catch({response:{data:t}}){return r(t.error)}}),lt={products:[],product:[]},qe=Q({name:"products",initialState:lt,reducers:{clearProduct(a,r){return l(c({},a),{product:[]})}},extraReducers:a=>{a.addCase(pe.fulfilled,(r,t)=>l(c({},r),{products:t.payload})).addCase(pe.rejected,(r,t)=>l(c({},r),{products:[]})).addCase(G.fulfilled,(r,t)=>l(c({},r),{product:t.payload})).addCase(G.rejected,(r,t)=>l(c({},r),{product:[]})).addCase($e.fulfilled,(r,t)=>l(c({},r),{products:t.payload})).addCase($e.rejected,(r,t)=>l(c({},r),{products:[]})).addCase(Ie.fulfilled,(r,t)=>l(c({},r),{product:t.payload.updatedProduct})).addCase(Ie.rejected,(r,t)=>l(c({},r),{products:[]})).addCase(De.fulfilled,(r,t)=>l(c({},r),{products:t.payload})).addCase(De.rejected,(r,t)=>l(c({},r),{products:[]}))}}),{clearProduct:Fe}=qe.actions;var st=qe.reducer;const V=E("order/getPurchases",async(a,{rejectWithValue:r})=>{try{const{data:t}=await h.get("/api/orders/getpurchases");return t}catch({response:{data:t}}){return r(t)}}),re=E("order/purchase",async(a,{rejectWithValue:r})=>{try{await h.post("/api/orders/purchase");const{data:t}=await h.get("/api/orders/getpurchases");return t}catch({response:{data:t}}){return r(t)}}),dt={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},ut=Q({name:"purchase",initialState:dt,reducers:{},extraReducers:a=>{a.addCase(V.fulfilled,(r,t)=>l(c({},r),{purchases:t.payload.purchases,totalPaid:t.payload.total})).addCase(V.rejected,(r,t)=>({purchases:[],total:null})).addCase(re.fulfilled,(r,t)=>l(c({},r),{purchases:t.payload.purchases,totalPaid:t.payload.total})).addCase(z.fulfilled,(r,t)=>({purchases:[],totalPaid:null}))}});var mt=ut.reducer;const pt={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},Le=Q({name:"ui",initialState:pt,reducers:{clearErrorMsg(a,r){return l(c({},a),{errorMsg:null})},clearSuccessMsg(a,r){return l(c({},a),{successMsg:null})},setUserMenu(a,r){return l(c({},a),{userMenu:r.payload})}},extraReducers:a=>{a.addCase(G.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(G.fulfilled,(r,t)=>l(c({},r),{loading:!1})).addCase(G.rejected,(r,t)=>l(c({},r),{loading:!1,errorMsg:t.payload})).addCase(Y.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(Y.fulfilled,(r,t)=>l(c({},r),{loading:!1})).addCase(Y.rejected,(r,t)=>l(c({},r),{loading:!1,errorMsg:t.payload.error})).addCase(z.fulfilled,(r,t)=>l(c({},r),{userMenu:!1})).addCase(te.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(te.fulfilled,(r,t)=>l(c({},r),{loading:!1})).addCase(te.rejected,(r,t)=>l(c({},r),{loading:!1})).addCase(ue.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(ue.fulfilled,(r,t)=>l(c({},r),{loading:!1,successMsg:t.payload.msg})).addCase(ue.rejected,(r,t)=>l(c({},r),{loading:!1,errorMsg:t.payload.error})).addCase(O.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(O.fulfilled,(r,t)=>l(c({},r),{loading:!1})).addCase(O.rejected,(r,t)=>l(c({},r),{loading:!1})).addCase(ae.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(ae.fulfilled,(r,t)=>l(c({},r),{loading:!1,successMsg:"Product added to cart"})).addCase(ae.rejected,(r,t)=>l(c({},r),{loading:!1,errorMsg:t.payload.error})).addCase(me.rejected,(r,t)=>l(c({},r),{loading:!1})).addCase(V.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(V.fulfilled,(r,t)=>l(c({},r),{loading:!1})).addCase(V.rejected,(r,t)=>l(c({},r),{loading:!1})).addCase(re.pending,(r,t)=>l(c({},r),{loading:!0})).addCase(re.fulfilled,(r,t)=>l(c({},r),{loading:!1,successMsg:"Purchase Completed"})).addCase(re.rejected,(r,t)=>l(c({},r),{loading:!1,errorMsg:t.payload.error}))}}),{clearErrorMsg:he,clearSuccessMsg:ke,setUserMenu:ge}=Le.actions;var ht=Le.reducer;const gt=Je`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${a=>a.theme.fonts.lato};
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
`,d=I(D.div)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	${fe}
	display: ${a=>a.display?a.display:"flex"};
	cursor: ${a=>a.cursor};
	backdrop-filter: ${a=>a.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${a=>a.glass&&"blur(10px)"};
`,g=I(D.h1)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	font-family: ${a=>a.theme.fonts.chakra};
	transition: ${a=>a.transition};
	cursor: ${a=>a.cursor};
`,Se=I(D.ul)`
	${k}
	${S}
	${P}
	${v}
	display:${a=>a.display?a.display:"flex"};
`,q=I(D.li)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	cursor: pointer;
`,u=I(D.p)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	transition: ${a=>a.transition};
	cursor: ${a=>a.cursor};
`,C=I(D.img)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${v}
	${N}
    height: ${a=>a.height?a.height:"auto"};
	cursor: ${a=>a.cursor&&"pointer"};
	opacity: ${a=>a.opacity};
	background-size: cover;
	background-position: center;
`;var xt="/assets/cart.7e54eda4.svg";const yt=()=>{const a=f(),{userData:r}=p(o=>o.auth),t=()=>{a(z()),a(ge(!1)),a(ke())},n=()=>{a(ge(!1))};return e.createElement(d,{position:"absolute",width:"120px",alignItems:"center",right:["10px","10px","110px"],top:"5",justifyContent:"center",bg:"#1d1d1dfd",color:"#e4e4e4",height:"160px",zIndex:100},e.createElement(Se,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(B,{to:"/profile",onClick:n},e.createElement(q,{mb:"20px"},"Edit User")),e.createElement(B,{to:"/purchases",onClick:n},e.createElement(q,{mb:"20px"},"Purchases")),r.isAdmin&&e.createElement(B,{to:"/adminpanel",onClick:n},e.createElement(q,{mb:"20px"},"Admin Panel")),e.createElement(q,{onClick:t},"Logout")))};function ft(){const{colors:{primary:a}}=y.exports.useContext(Ye),r=f(),{userData:t,loggedIn:n}=p(b=>b.auth),{cartData:o,totalItems:i}=p(b=>b.cart),{userMenu:s}=p(b=>b.ui);y.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(t))},[t]),y.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(o))},[o]);const m=()=>{r(ge(!1))};return e.createElement(d,{position:"relative",as:"header",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:a,color:"white",borderBottom:"1px solid white"},e.createElement(B,{to:"/",onClick:m},e.createElement(g,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement(d,{as:"nav",flex:1},e.createElement(Se,{flex:1,justifyContent:"space-evenly"},e.createElement(B,{to:"/",onClick:m},e.createElement(q,null,"Shop")),e.createElement(B,{to:"/about",onClick:m},e.createElement(q,null,"About")),e.createElement(B,{to:"/contact",onClick:m},e.createElement(q,null,"Contact"))),e.createElement(Se,{justifyContent:"space-evenly"},e.createElement(B,{to:"/cart"},e.createElement(d,{alignItems:"center",mr:"20px",onClick:m},e.createElement(C,{mr:"5px",src:xt}),e.createElement(u,null,n&&o.length!==0&&i))),e.createElement(d,{height:"100%",alignItems:"center"},n?e.createElement(d,{onClick:()=>r(ge(!s))},e.createElement(C,{borderRadius:"100%",width:"20px",mr:"10px",src:t.avatar}),e.createElement(q,null,t.name)):e.createElement(B,{to:"/login"},e.createElement(q,null,"Login")))),s&&e.createElement(yt,null)))}const U=I(D.main)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	${fe}
	display: ${a=>a.display?a.display:"flex"};
	cursor: ${a=>a.cursor};
	backdrop-filter: ${a=>a.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${a=>a.glass&&"blur(10px)"};
`;function ne({children:a}){const{loading:r}=p(t=>t.ui);return e.createElement(U,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column"},r?e.createElement(d,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(Ee.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,a))}const w=I(D.section)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${_}
	${N}
	${v}
	${J}
	${fe}
	display: ${a=>a.display?a.display:"flex"};
	cursor: ${a=>a.cursor};
	backdrop-filter: ${a=>a.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${a=>a.glass&&"blur(10px)"};
`;function oe({children:a}){return e.createElement(w,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(d,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},a))}function Pe({children:a}){return e.createElement(w,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},a)}function Et({name:a,price:r,thumbnail:t,id:n}){const o=R(),i=f(),s=()=>{o.push(`/product/${n}`),i(Fe()),i(he())};return e.createElement(d,{onClick:s,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(C,{borderRadius:"5px",width:"100%",src:t,alt:"productImg"}),e.createElement(g,{my:"15px"},a),e.createElement(u,null,"USD ",r))}var bt="/assets/emptycart.178cfab5.svg";function ve({children:a}){return e.createElement(d,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(C,{mb:"20px",width:["70%","70%","30%"],src:bt}),e.createElement(u,null,a))}function Ct(){const a=f(),{products:r}=p(t=>t.products);return y.exports.useEffect(()=>{a(pe()),a(O())},[a]),r.length===0?e.createElement(ve,null,"No products in db"):e.createElement(ne,null,e.createElement(oe,null,e.createElement(g,null,"Shop Tech"),e.createElement(u,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Pe,null,r.map(t=>e.createElement(Et,{key:t._id,name:t.name,price:t.price,thumbnail:t.thumbnail,id:t._id}))))}var wt="/assets/about.74ce83db.svg";function $t(){return e.createElement(ne,null,e.createElement(oe,null,e.createElement(g,null,"About Us"),e.createElement(u,null,"Wanna know more about us?.. this is the page")),e.createElement(w,{flexDirection:"column",py:"54px",px:["20px","20px","145px"],alignItems:"center"},e.createElement(C,{width:["50%","50%","30%"],src:wt,alt:"about",mb:"40px"}),e.createElement(u,{fontSize:"20px"},"As a company, our goal is to improve people's lives, to contribute to the development of our communities and the preservation of the environment. Nowadays, all businesses are generating torrents of data every day about their internal and external customers, and with the right tools and technologies, Edrans can help you get the most out of that information: from insights on consumer behavior, KPIs and environment metrics you can get a deeper level of understanding of your customers\u2019 sentiment and emotional drivers when engaging with your business, and forecasts based on historical data and modelled projections. We humanize data by understanding human behavior, focusing on the functional and emotional aspects of data to create experiences through technology that empower your business and create lasting value.")))}var It="/assets/contact.7e96ee01.svg";function Dt(){return e.createElement(ne,null,e.createElement(oe,null,e.createElement(g,null,"Contact Us"),e.createElement(u,null,"We are here to help!")),e.createElement(w,{flexDirection:["column","column","row"],py:"54px",px:["20px","20px","145px"],alignItems:"center",justifyContent:"center"},e.createElement(C,{width:["70%","70%","40%"],src:It,alt:"about",mb:"40px"}),e.createElement(d,{flexDirection:"column"},e.createElement(g,{mb:"20px"},"Get In Touch"),e.createElement(u,null,"Whatsapp: +5491128576884"),e.createElement(u,null,"Email: joxpulp@gmail.com"))))}var kt="/assets/404.20cf8557.svg";const A=I(D.button)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${v}
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
	width: ${a=>a.width?a.width:"120px"};
	height: ${a=>a.height?a.height:"48px"};
	padding: ${a=>a.padding?a.padding:"24px"};
	background-color: ${a=>a.bg?a.bg:"#EDEDED"};
	color: ${a=>a.color?a.color:"#A3A3A3"};
	border-radius: ${a=>a.borderRadius?a.borderRadius:"3px"};
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	backdrop-filter: ${a=>a.glass&&"blur( 30px)"};
	-webkit-backdrop-filter: ${a=>a.glass&&"blur(30px)"};
	&:focus {
		box-shadow: 0px 0px 5px 2px
			${a=>a.focusColor?a.focusColor:"rgb(29,31,39, .2)"};
		${a=>a.focusScale&&"transform: scale(1.1);"}
	}
	&:hover {
		background-color: ${a=>a.hover&&a.focusColor};
		color: ${a=>a.hover&&a.bg};
		${a=>a.focusScale&&"transform: scale(1.2);"}
	}

	&:disabled {
		background-color: ${a=>a.theme.colors.subtext};
		color: ${a=>a.theme.colors.secondary};
	}
`;function St(){const a=R();return e.createElement(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(C,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:kt,alt:"404"}),e.createElement(u,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(A,{bg:"black",color:"white",width:"125px",onClick:()=>a.push("/")},"Back to Shop"))}function Pt(){const{id:a}=Be(),r=R(),t=f(),{product:n}=p(m=>m.products),{loading:o,errorMsg:i}=p(m=>m.ui),s=()=>{t(ae(a))};return y.exports.useEffect(()=>{t(G(a))},[t,a]),i?e.createElement(d,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement(be,{to:"/login"}),";"):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(Ce,{exitBeforeEnter:!0},o?e.createElement(d,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(Ee.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):n.map(m=>e.createElement(w,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:m._id},e.createElement(C,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:m.thumbnail}),e.createElement(d,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(g,{my:"10px"},m.name),e.createElement(u,{mb:"20px"},"Price: USD ",m.price),e.createElement(u,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(u,{fontSize:"12px"},m.description),e.createElement(d,{mt:"20px"},e.createElement(A,{onClick:s,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(A,{onClick:()=>r.push("/")},"Go Back")))))))}const vt=X({email:x().email("The email address is invalid, try again").required("Required"),password:x().min(8,"Password must be 8 mininum characters").required("Required")}),At=X({email:x().email("The email address is invalid, try again").required("Email is required"),password:x().min(8,"Password must be 8 mininum characters").required("Password is required"),name:x().min(3,"Minium 3 letters").required("Name is Required"),lastname:x().min(3,"Minium 3 letters").required("Lastname is Required"),age:se().min(16,"You must have 16 or more to register").required("Age is required"),cardId:x().matches(/^\d{8}$/,"Card Id must be 8 characters").required("Card Id (DNI) is required"),address:x().min(10,"Address must have 10 characters or more").required("Address is required")}),jt=X({password:x().min(8,"Password must be 8 mininum characters"),name:x().min(3,"Minium 3 letters"),lastname:x().min(3,"Minium 3 letters"),age:se().min(16,"You must have 16 or more to register"),cardId:x().min(8,"Card Id must be 8 characters"),address:x().min(10,"Address must have 10 characters or more")}),Mt=X({name:x().min(3,"Minium 3 characters").required("Product name is required"),description:x().min(50,"Description must have 50 characters or more").required("Product description is required"),category:x().min(3,"Min 3 characters").required("Product category is required"),price:se().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required")}),Rt=X({name:x().min(3,"Minium 3 characters"),description:x().min(50,"Description must have 50 characters or more"),category:x().min(3,"Min 3 characters"),price:se().min(10,"Min price is 10").max(3e4,"Max price is 30000")});function W(t){var n=t,{children:a}=n,r=L(n,["children"]);const{loading:o}=p(i=>i.ui);return e.createElement(A,c({bg:"black",color:"white",type:"submit",mr:"10px",disabled:o},r),o?e.createElement(Ee.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):a)}const Ne=I(D.input)`
	${k}
	${j}
	${M}
	${S}
	${P}
	${v}
	font-size: 20px;
	color: ${a=>a.color?a.color:a.theme.colors.secondary};
	padding: ${a=>a.padding?a.padding:"10px"};
	width: ${a=>a.width?a.width:"50%"};
	height: ${a=>a.height?a.height:"auto"};
	border: ${a=>a.border?a.border:"1px solid #C2C5E1"};
	border-radius: ${a=>a.borderRadius?a.borderRadius:"2px"};
	transition: all 0.2s ease-in-out;
	outline: none;
	&:focus {
		box-shadow: 0px 0px 5px 2px rgb(29, 31, 39, 0.1);
	}
	&:invalid {
		border: 1px solid #ff7d87;
	}

	&::placeholder {
		color: ${a=>a.theme.colors.subtext};
	}
`;function $(t){var n=t,{label:a}=n,r=L(n,["label"]);const[o,i]=de(r);return e.createElement(d,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ne,c(c({width:["60%","60%","30%"]},o),r)),i.touched&&i.error&&e.createElement(u,{mt:"3px",color:"red"},i.error))}function Bt(){const a=R(),r=f(),{loading:t,errorMsg:n}=p(i=>i.ui),o=()=>{a.push("/signup"),r(he()),r(ke())};return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px",flexDirection:"column",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(Z,{initialValues:{email:"",password:""},validationSchema:vt,onSubmit:({email:i,password:s})=>{r(he()),r(Y({email:i,password:s}))}},e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Welcome Back"),e.createElement(u,{color:"#A9ABBD"},"Login with your email:"),n&&e.createElement(u,{m:"20px",color:"#b62929"},n),e.createElement($,{disabled:t,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement($,{disabled:t,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(W,null,"Login")))),e.createElement(u,{m:"30px",cursor:"pointer",onClick:o},"Or create an account"))}function qt(){const a=R(),r=f(),{loading:t,errorMsg:n}=p(o=>o.ui);return e.createElement(U,{overflow:"hidden",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",my:"50px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px"},e.createElement(Z,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:At,onSubmit:(o,{resetForm:i})=>{r(he()),r(ue(o)),i()}},e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Signup"),e.createElement(u,{color:"#A9ABBD"},"Fill your info"),n&&e.createElement(u,{m:"20px",color:"#b62929"},n),e.createElement($,{id:"email",name:"email",type:"email",placeholder:"Email*",disabled:t}),e.createElement($,{id:"password",name:"password",type:"password",placeholder:"Password*",disabled:t}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement($,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*",disabled:t}),e.createElement($,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement($,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*",disabled:t}),e.createElement($,{id:"address",name:"address",type:"text",placeholder:"Address*",disabled:t}),e.createElement(W,null,"Sign Up")))),e.createElement(u,{m:"30px",cursor:"pointer",onClick:()=>a.push("/login")},"Or go to login"))}const Oe=n=>{var o=n,{isAuth:a,component:r}=o,t=L(o,["isAuth","component"]);return e.createElement(T,c({},t),a?e.createElement(be,{to:"/"}):e.createElement(r,null))},H=n=>{var o=n,{isAuth:a,component:r}=o,t=L(o,["isAuth","component"]);return e.createElement(T,c({},t),a?e.createElement(r,null):e.createElement(be,{to:"/login"}))};function F(o){var i=o,{onCancel:a,currentValue:r,width:t}=i,n=L(i,["onCancel","currentValue","width"]);const[s,m]=de(n),[b,K]=y.exports.useState(!1),{userData:xe}=p(ye=>ye.auth),{product:ce}=p(ye=>ye.products),ie=()=>{K(!b),a()};return y.exports.useEffect(()=>{K(!1)},[xe,ce]),e.createElement(d,{flexDirection:"column",m:"5px"},e.createElement(d,{mb:"5px"},b?e.createElement(Ne,c(c({width:t||"80%"},s),n)):e.createElement(d,{p:"10px",cursor:"pointer",onClick:ie,alignItems:"center",justifyContent:"center",width:t||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(g,{color:"#9b9b9b"},r)),e.createElement(A,{ml:"10px",width:"30px",onClick:ie,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(u,{color:"red"},m.error))}var Ft="/assets/cancel.a4530b38.svg";function Ae({currentImage:a,file:r,label:t,onCancel:n}){const[o,i]=y.exports.useState(null),s=new FileReader;r&&s.readAsDataURL(r),s.onload=()=>{r&&i(s.result)};const m=()=>{i(null),n()};return e.createElement(d,{position:"relative"},r&&e.createElement(C,{position:"absolute",cursor:"pointer",m:"10px",right:"0",width:"30px",src:Ft,onClick:m,zIndex:"2"}),e.createElement("label",{htmlFor:t},e.createElement(C,{cursor:"pointer",width:"150px",m:"10px",src:o||a})))}function Lt(){const a=f(),{userData:r}=p(t=>t.auth);return p(t=>t.ui),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:jt,onSubmit:t=>{const n=new FormData;t.name!==""&&n.append("name",t.name),t.lastname!==""&&n.append("lastname",t.lastname),t.age!==""&&n.append("age",t.age),t.address!==""&&n.append("address",t.address),t.password!==""&&n.append("password",t.password),t.avatar&&n.append("avatar",t.avatar),a(te(n))}},({values:t,setFieldValue:n})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Your Profile"),e.createElement(u,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(u,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(Ae,{currentImage:r.avatar,label:"avatar",file:t.avatar,onCancel:()=>n("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:o=>n("avatar",o.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:r.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>n("name","")}),e.createElement(F,{currentValue:r.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>n("lastname","")}),e.createElement(F,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>n("password","")}),e.createElement(F,{currentValue:r.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>n("age","")}),e.createElement(F,{currentValue:r.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>n("cardId","")}),e.createElement(F,{currentValue:r.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>n("address","")}),e.createElement(W,null,"Save profile")))))}const Nt=({name:a,price:r,thumbnail:t,productId:n,quantity:o})=>{const i=f();return e.createElement(d,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(C,{borderRadius:"5px",width:["30%","30%","25%"],src:t,alt:"productImg"}),e.createElement(d,{mx:"30px",flexDirection:"column"},e.createElement(g,null,a),e.createElement(u,{my:"15px"},"USD ",r),e.createElement(u,null,"Quantity: ",o)),e.createElement(d,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(u,{onClick:()=>i(me(n)),cursor:"pointer"},"Remove")))};function Ot(){const{cartData:a,total:r}=p(s=>s.cart),{purchases:t}=p(s=>s.purchase),n=f(),o=R(),i=()=>{n(re())};return y.exports.useEffect(()=>{n(O())},[n,t]),a.length===0?e.createElement(ve,null,"Your cart is empty :("):e.createElement(U,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(w,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(d,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(g,null,"Your Cart"),e.createElement(u,{my:"20px",cursor:"pointer",onClick:()=>o.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(d,{flexDirection:["column","column","row"]},e.createElement(d,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},a.map(s=>e.createElement(Nt,{key:s._id,name:s.name,price:s.price,thumbnail:s.thumbnail,productId:s._id,quantity:s.quantity}))),e.createElement(d,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(g,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(g,{my:"20px"},"Total: $",r),e.createElement(W,{onClick:i},"Purchase")))))}function Ut({name:a,price:r,thumbnail:t}){return e.createElement(d,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(C,{borderRadius:"5px",width:"100%",src:t,alt:"productImg"}),e.createElement(g,{my:"15px"},a),e.createElement(u,null,"USD ",r))}function Tt(){const a=f(),{purchases:r}=p(t=>t.purchase);return y.exports.useEffect(()=>{a(V()),a(O())},[a]),r.length===0?e.createElement(ve,null,"You dont have any purchases"):e.createElement(ne,null,e.createElement(oe,null,e.createElement(g,null,"Your Purchases"),e.createElement(u,null,"Your history of purchases in one place")),e.createElement(Pe,null,r.map((t,n)=>e.createElement(Ut,{key:n,name:t.name,price:t.price,thumbnail:t.thumbnail}))))}function zt({thumbnail:a,id:r}){const t=R(),n=f(),o=()=>{t.push(`adminpanel/productedit/${r}`),n(Fe())};return e.createElement(d,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(C,{width:"100%",src:a,alt:"productImg"}),e.createElement(d,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(A,{width:"30%",onClick:o,mr:"10px"},"Edit"),e.createElement(A,{width:"30%",onClick:()=>n(De(r))},"Delete")))}function Gt(){const a=R(),{products:r}=p(n=>n.products),t=f();return y.exports.useEffect(()=>{t(pe())},[t]),e.createElement(ne,null,e.createElement(oe,null,e.createElement(g,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(A,{onClick:()=>a.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Pe,null,r.map((n,o)=>e.createElement(zt,{key:o,id:n._id,name:n.name,price:n.price,thumbnail:n.thumbnail}))))}const Ue=I(D.textarea)`
	${k}
	${j}
	${N}
	${M}
	${S}
	${P}
	${v}
	font-size: 20px;
	padding: ${a=>a.padding?a.padding:"10px"};
	width: ${a=>a.width?a.width:"30%"};
	height: ${a=>a.height?a.height:"200px"};
	border: ${a=>a.border?a.border:"1px solid #C2C5E1"};
	border-radius: ${a=>a.borderRadius?a.borderRadius:"2px"};
	transition: all 0.2s ease-in-out;
	outline: none;
	&:focus {
		box-shadow: 0px 0px 5px 2px rgb(29, 31, 39, 0.1);
	}
`;function _t(o){var i=o,{onCancel:a,currentValue:r,width:t}=i,n=L(i,["onCancel","currentValue","width"]);const[s,m]=de(n),[b,K]=y.exports.useState(!1),{userData:xe}=p(ie=>ie.auth),ce=()=>{K(!b),a()};return y.exports.useEffect(()=>{K(!1)},[xe]),e.createElement(d,{flexDirection:"column",m:"5px"},e.createElement(d,{mb:"5px"},b?e.createElement(Ue,c(c({width:t||"80%"},s),n)):e.createElement(d,{p:"10px",cursor:"pointer",onClick:ce,alignItems:"center",justifyContent:"center",width:t||"80%",borderBottom:"1px solid #C2C5E1"},e.createElement(u,{fontSize:"13px",color:"#9b9b9b"},r)),e.createElement(A,{ml:"10px",width:"30px",onClick:ce,type:"button"},b?"Cancel":"Edit")),m.touched&&m.error&&e.createElement(u,{color:"red"},m.error))}const Jt=()=>{const{id:a}=Be(),r=R(),t=f(),{product:n}=p(o=>o.products);return p(o=>o.ui),y.exports.useEffect(()=>{t(G(a))},[t,a]),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Rt,onSubmit:o=>{const i=new FormData;o.name!==""&&i.append("name",o.name),o.description!==""&&i.append("description",o.description),o.category!==""&&i.append("category",o.category),o.price!==""&&i.append("price",o.price),o.thumbnail&&i.append("thumbnail",o.thumbnail),t(Ie({id:a,formData:i}))}},({values:o,setFieldValue:i})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Edit Product"),e.createElement(u,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),n.map(s=>e.createElement(e.Fragment,null,e.createElement(Ae,{currentImage:s.thumbnail,label:"thumbnail",file:o.thumbnail,onCancel:()=>i("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:m=>i("thumbnail",m.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:s.name,id:"name",name:"name",type:"text",placeholder:"Name",width:"400px",onCancel:()=>i("name","")}),e.createElement(_t,{currentValue:s.description,id:"description",name:"description",type:"text",width:"400px",placeholder:"Description",onCancel:()=>i("description","")}),e.createElement(F,{currentValue:s.category,id:"category",name:"category",type:"text",placeholder:"category",width:"400px",onCancel:()=>i("category","")}),e.createElement(F,{currentValue:s.price,id:"price",name:"price",type:"number",placeholder:"Price",width:"400px",onCancel:()=>i("price","")}))),e.createElement(d,{alignItems:"center"},e.createElement(W,null,"Save"),e.createElement(A,{onClick:()=>r.go(-1)},"Go Back"))))))};function Yt(t){var n=t,{label:a}=n,r=L(n,["label"]);const[o,i]=de(r);return e.createElement(d,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ue,c(c({width:["60%","60%","30%"]},o),r)),i.touched&&i.error&&e.createElement(u,{mt:"3px",color:"red"},i.error))}var Vt="/assets/uploadphoto.e961d561.svg";const Wt=()=>{const a=R(),r=f();return p(t=>t.ui),e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(w,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(Z,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Mt,onSubmit:t=>{const n=new FormData;t.name!==""&&n.append("name",t.name),t.description!==""&&n.append("description",t.description),t.category!==""&&n.append("category",t.category),t.price!==""&&n.append("price",t.price),t.thumbnail&&n.append("thumbnail",t.thumbnail),console.log(t),r($e(n))}},({values:t,setFieldValue:n})=>e.createElement(ee,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Add a new product"),e.createElement(u,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(Ae,{currentImage:Vt,label:"thumbnail",file:t.thumbnail,onCancel:()=>n("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:o=>n("thumbnail",o.target.files[0]),style:{display:"none"}}),e.createElement($,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement(Yt,{id:"description",name:"description",type:"text",placeholder:"Description*"}),e.createElement($,{id:"category",name:"category",type:"text",placeholder:"Category*"}),e.createElement($,{id:"price",name:"price",type:"number",placeholder:"Price*"}),e.createElement(d,{alignItems:"center"},e.createElement(W,null,"Add Product"),e.createElement(A,{onClick:()=>a.go(-1)},"Go Back"))))))};function Ht({error:a,children:r}){return e.createElement(d,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"absolute",top:"5",left:"2",p:"20px",bg:a?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(u,{color:a?"#98210A":"#235234"},r))}function Kt(){const a=y.exports.useRef(null),r=f(),{userData:t,loggedIn:n}=p(s=>s.auth),{successMsg:o}=p(s=>s.ui),i=Ve();return y.exports.useEffect(()=>{r(we())},[r]),y.exports.useEffect(()=>{setTimeout(()=>{r(ke())},2e3)},[r,o]),e.createElement(e.Fragment,null,e.createElement(gt,null),e.createElement(ft,null),e.createElement(We,{ref:a,timeout:1e3*120,onIdle:()=>r(z()),crossTab:{emitOnAllTabs:!0}}),e.createElement(Ce,{exitBeforeEnter:!0},o&&e.createElement(Ht,null,o)),e.createElement(Ce,{exitBeforeEnter:!0},e.createElement(He,{location:i,key:i.pathname},e.createElement(T,{exact:!0,path:"/",component:Ct}),e.createElement(T,{path:"/product/:id",component:Pt}),e.createElement(T,{path:"/about",component:$t}),e.createElement(T,{path:"/contact",component:Dt}),e.createElement(Oe,{isAuth:n,path:"/login",component:Bt}),e.createElement(Oe,{isAuth:n,path:"/signup",component:qt}),e.createElement(H,{isAuth:n,path:"/profile",component:Lt}),e.createElement(H,{isAuth:n,path:"/cart",component:Ot}),e.createElement(H,{isAuth:n,path:"/purchases",component:Tt}),e.createElement(H,{exact:!0,isAuth:t.isAdmin,path:"/adminpanel",component:Gt}),e.createElement(H,{isAuth:t.isAdmin,path:"/adminpanel/add",component:Wt}),e.createElement(H,{isAuth:t.isAdmin,path:"/adminpanel/productedit/:id",component:Jt}),e.createElement(T,{path:"*",component:St}))))}const Qt={colors:{primary:"#0D0D0D",secondary:"#979797",text:"#151875",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function Xt({children:a}){return e.createElement(Ke,{theme:Qt},a)}const Zt=Qe({reducer:{auth:nt,products:st,cart:it,purchase:mt,ui:ht}});Xe.render(e.createElement(e.StrictMode,null,e.createElement(Ze,{store:Zt},e.createElement(Xt,null,e.createElement(et,null,e.createElement(Kt,null))))),document.getElementById("root"));
