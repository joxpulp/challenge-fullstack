var Oe=Object.defineProperty,Te=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var je=(t,r,a)=>r in t?Oe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,c=(t,r)=>{for(var a in r||(r={}))Ae.call(r,a)&&je(t,a,r[a]);if(se)for(var a of se(r))Me.call(r,a)&&je(t,a,r[a]);return t},l=(t,r)=>Te(t,ze(r));var T=(t,r)=>{var a={};for(var o in t)Ae.call(t,o)&&r.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&se)for(var o of se(t))r.indexOf(o)<0&&Me.call(t,o)&&(a[o]=t[o]);return a};import{a as Ge,c as b,b as Q,W as _e,s as D,m as I,d as S,e as M,t as j,l as P,f as v,g as Y,h as L,p as A,i as V,j as be,u as E,k as p,R as e,L as B,r as y,G as Je,n as z,o as R,q as Re,v as X,A as Ce,w as Z,x,y as de,z as ue,F as ee,B as te,C as G,D as Ye,E as Ve,S as We,H as He,I as Ke,J as Qe,P as Xe,K as Ze}from"./vendor.ffb80fa1.js";const et=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};et();const h=Ge.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),W=b("auth/login",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.post("/api/auth/login",t);return a}catch({response:{data:a}}){return r(a)}}),_=b("auth/logout",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/auth/logout");return a}catch({response:{data:a}}){return r(a)}}),me=b("auth/signup",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.post("/api/auth/signup",t);return a}catch({response:{data:a}}){return r(a)}}),we=b("auth/isLogged",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/auth/islogged");return a}catch({response:{data:a}}){return r(a)}}),ae=b("auth/editUser",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.patch("/api/auth/edituser",t);return a}catch({response:{data:a}}){return r(a)}}),tt={userData:JSON.parse(localStorage.getItem("userData"))||{},logged:!1},at=Q({name:"auth",initialState:tt,reducers:{},extraReducers:t=>{t.addCase(W.rejected,(r,a)=>c({},r)).addCase(W.fulfilled,(r,a)=>l(c({},r),{userData:a.payload.userData,logged:a.payload.logged})).addCase(_.fulfilled,(r,a)=>l(c({},r),{userData:{},logged:a.payload.logged})).addCase(_.rejected,(r,a)=>l(c({},r),{userData:{},logged:!1})).addCase(we.fulfilled,(r,a)=>l(c({},r),{logged:a.payload.logged})).addCase(we.rejected,(r,a)=>l(c({},r),{userData:{},logged:a.payload.logged})).addCase(ae.fulfilled,(r,a)=>l(c({},r),{userData:a.payload.userUpdated}))}});var rt=at.reducer;const N=b("cart/getCart",async(t,{rejectWithValue:r})=>{try{const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),re=b("cart/addProductToCart",async(t,{rejectWithValue:r})=>{try{await h.post(`/api/cart/add/${t}`);const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),pe=b("cart/removeProductFromCart",async(t,{rejectWithValue:r})=>{try{await h.delete(`/api/cart/delete/${t}`);const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),nt={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null},ot=Q({name:"cart",initialState:nt,reducers:{},extraReducers:t=>{t.addCase(N.fulfilled,(r,a)=>l(c({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(N.rejected,(r,a)=>({cartData:[],total:null})).addCase(re.fulfilled,(r,a)=>l(c({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(pe.fulfilled,(r,a)=>l(c({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(pe.rejected,(r,a)=>l(c({},r),{cartData:[],total:null})).addCase(_.fulfilled,(r,a)=>({cartData:[],total:null}))}});var ct=ot.reducer;const he=b("products/getAllProducts",async()=>{const{data:{products:t}}=await h.get("/api/products/list");return t}),J=b("products/getProductById",async(t,{rejectWithValue:r})=>{try{const{data:{product:a}}=await h.get(`/api/products/list/${t}`);return a}catch({response:{data:a}}){return r(a.error)}}),$e=b("products/addProduct",async(t,{rejectWithValue:r})=>{try{await h.post("/api/products/add",t);const{data:{products:a}}=await h.get("/api/products/list");return a}catch({response:{data:a}}){return r(a.error)}}),ke=b("products/editProduct",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.put(`/api/products/update/${t.id}`,t.formData);return a}catch({response:{data:a}}){return r(a.error)}}),De=b("products/deleteProduct",async(t,{rejectWithValue:r})=>{try{await h.delete(`/api/products/delete/${t}`);const{data:{products:a}}=await h.get("/api/products/list");return a}catch({response:{data:a}}){return r(a.error)}}),it={products:[],product:[]},Be=Q({name:"products",initialState:it,reducers:{clearProduct(t,r){return l(c({},t),{product:[]})}},extraReducers:t=>{t.addCase(he.fulfilled,(r,a)=>l(c({},r),{products:a.payload})).addCase(he.rejected,(r,a)=>l(c({},r),{products:[]})).addCase(J.fulfilled,(r,a)=>l(c({},r),{product:a.payload})).addCase(J.rejected,(r,a)=>l(c({},r),{product:[]})).addCase($e.fulfilled,(r,a)=>l(c({},r),{products:a.payload})).addCase($e.rejected,(r,a)=>l(c({},r),{products:[]})).addCase(ke.fulfilled,(r,a)=>l(c({},r),{product:a.payload.updatedProduct})).addCase(ke.rejected,(r,a)=>l(c({},r),{products:[]})).addCase(De.fulfilled,(r,a)=>l(c({},r),{products:a.payload})).addCase(De.rejected,(r,a)=>l(c({},r),{products:[]}))}}),{clearProduct:qe}=Be.actions;var lt=Be.reducer;const H=b("order/getPurchases",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return r(a)}}),ne=b("order/purchase",async(t,{rejectWithValue:r})=>{try{await h.post("/api/orders/purchase");const{data:a}=await h.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return r(a)}}),st={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},dt=Q({name:"purchase",initialState:st,reducers:{},extraReducers:t=>{t.addCase(H.fulfilled,(r,a)=>l(c({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(H.rejected,(r,a)=>({purchases:[],total:null})).addCase(ne.fulfilled,(r,a)=>l(c({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(_.fulfilled,(r,a)=>({purchases:[],totalPaid:null}))}});var ut=dt.reducer;const mt={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},Fe=Q({name:"ui",initialState:mt,reducers:{clearErrorMsg(t,r){return l(c({},t),{errorMsg:null})},clearSuccessMsg(t,r){return l(c({},t),{successMsg:null})},setUserMenu(t,r){return l(c({},t),{userMenu:r.payload})}},extraReducers:t=>{t.addCase(J.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(J.fulfilled,(r,a)=>l(c({},r),{loading:!1})).addCase(J.rejected,(r,a)=>l(c({},r),{loading:!1,errorMsg:a.payload})).addCase(W.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(W.fulfilled,(r,a)=>l(c({},r),{loading:!1})).addCase(W.rejected,(r,a)=>l(c({},r),{loading:!1,errorMsg:a.payload.error})).addCase(_.fulfilled,(r,a)=>l(c({},r),{userMenu:!1})).addCase(ae.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(ae.fulfilled,(r,a)=>l(c({},r),{loading:!1})).addCase(ae.rejected,(r,a)=>l(c({},r),{loading:!1})).addCase(me.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(me.fulfilled,(r,a)=>l(c({},r),{loading:!1,successMsg:a.payload.msg})).addCase(me.rejected,(r,a)=>l(c({},r),{loading:!1,errorMsg:a.payload.error})).addCase(N.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(N.fulfilled,(r,a)=>l(c({},r),{loading:!1})).addCase(N.rejected,(r,a)=>l(c({},r),{loading:!1})).addCase(re.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(re.fulfilled,(r,a)=>l(c({},r),{loading:!1,successMsg:"Product added to cart"})).addCase(re.rejected,(r,a)=>l(c({},r),{loading:!1,errorMsg:a.payload.error})).addCase(pe.rejected,(r,a)=>l(c({},r),{loading:!1})).addCase(H.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(H.fulfilled,(r,a)=>l(c({},r),{loading:!1})).addCase(H.rejected,(r,a)=>l(c({},r),{loading:!1})).addCase(ne.pending,(r,a)=>l(c({},r),{loading:!0})).addCase(ne.fulfilled,(r,a)=>l(c({},r),{loading:!1,successMsg:"Purchase Completed"})).addCase(ne.rejected,(r,a)=>l(c({},r),{loading:!1,errorMsg:a.payload.error}))}}),{clearErrorMsg:ge,clearSuccessMsg:xe,setUserMenu:fe}=Fe.actions;var pt=Fe.reducer;const ht=_e`

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
`,u=D(I.div)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`,g=D(I.h1)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	font-family: ${t=>t.theme.fonts.chakra};
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,Ie=D(I.ul)`
	${S}
	${P}
	${v}
	${A}
	display:${t=>t.display?t.display:"flex"};
`,q=D(I.li)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	cursor: pointer;
`,m=D(I.p)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,w=D(I.img)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${A}
	${L}
    height: ${t=>t.height?t.height:"auto"};
	cursor: ${t=>t.cursor&&"pointer"};
	opacity: ${t=>t.opacity};
	background-size: cover;
	background-position: center;
`;var gt="/assets/cart.7e54eda4.svg";const xt=()=>{const t=E(),{userData:r}=p(n=>n.auth),a=()=>{t(_()),t(fe(!1)),t(xe())},o=()=>{t(fe(!1))};return e.createElement(u,{position:"absolute",width:"120px",alignItems:"center",right:["10px","10px","110px"],top:"5",justifyContent:"center",bg:"#1d1d1dfd",color:"#e4e4e4",height:"160px",zIndex:100},e.createElement(Ie,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(B,{to:"/profile",onClick:o},e.createElement(q,{mb:"20px"},"Edit User")),e.createElement(B,{to:"/purchases",onClick:o},e.createElement(q,{mb:"20px"},"Purchases")),r.isAdmin&&e.createElement(B,{to:"/adminpanel",onClick:o},e.createElement(q,{mb:"20px"},"Admin Panel")),e.createElement(q,{onClick:a},"Logout")))};function ft(){const{colors:{primary:t}}=y.exports.useContext(Je),r=E(),{userData:a,logged:o}=p(s=>s.auth),{cartData:n}=p(s=>s.cart),{userMenu:i}=p(s=>s.ui);y.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(a))},[a]),y.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(n))},[n]);const d=()=>{r(fe(!1))};return e.createElement(u,{position:"relative",as:"header",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:t,color:"white",borderBottom:"1px solid white"},e.createElement(B,{to:"/",onClick:d},e.createElement(g,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement(u,{as:"nav",flex:1},e.createElement(Ie,{flex:1,justifyContent:"space-evenly"},e.createElement(B,{to:"/",onClick:d},e.createElement(q,null,"Shop")),e.createElement(B,{to:"/about",onClick:d},e.createElement(q,null,"About")),e.createElement(B,{to:"/contact",onClick:d},e.createElement(q,null,"Contact"))),e.createElement(Ie,{justifyContent:"space-evenly"},e.createElement(B,{to:"/cart"},e.createElement(u,{alignItems:"center",mr:"20px",onClick:d},e.createElement(w,{mr:"5px",src:gt}),e.createElement(m,null,o&&n.length!==0&&n.length))),e.createElement(u,{height:"100%",alignItems:"center"},o?e.createElement(u,{onClick:()=>r(fe(!i))},e.createElement(w,{borderRadius:"100%",width:"20px",mr:"10px",src:a.avatar}),e.createElement(q,null,a.name)):e.createElement(B,{to:"/login"},e.createElement(q,null,"Login")))),i&&e.createElement(xt,null)))}const U=D(I.main)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function oe({children:t}){const{loading:r}=p(a=>a.ui);return e.createElement(U,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column"},r?e.createElement(u,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(z.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,t))}const $=D(I.section)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${Y}
	${L}
	${A}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function ce({children:t}){return e.createElement($,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(u,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},t))}function Se({children:t}){return e.createElement($,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},t)}function yt({name:t,price:r,thumbnail:a,id:o}){const n=R(),i=E(),d=()=>{n.push(`/product/${o}`),i(qe()),i(ge())};return e.createElement(u,{onClick:d,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(w,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(g,{my:"15px"},t),e.createElement(m,null,"USD ",r))}var Et="/assets/emptycart.178cfab5.svg";function Pe({children:t}){return e.createElement(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(w,{mb:"20px",width:["70%","70%","30%"],src:Et}),e.createElement(m,null,t))}function bt(){const t=E(),{products:r}=p(a=>a.products);return y.exports.useEffect(()=>{t(he()),t(N())},[t]),r.length===0?e.createElement(Pe,null,"No products in db"):e.createElement(oe,null,e.createElement(ce,null,e.createElement(g,null,"Shop Tech"),e.createElement(m,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Se,null,r.map(a=>e.createElement(yt,{key:a._id,name:a.name,price:a.price,thumbnail:a.thumbnail,id:a._id}))))}var Ct="/assets/about.74ce83db.svg";function wt(){return e.createElement(oe,null,e.createElement(ce,null,e.createElement(g,null,"About Us"),e.createElement(m,null,"Wanna know more about us?.. this is the page")),e.createElement($,{flexDirection:"column",py:"54px",px:["20px","20px","145px"],alignItems:"center"},e.createElement(w,{width:["50%","50%","30%"],src:Ct,alt:"about",mb:"40px"}),e.createElement(m,{fontSize:"20px"},"As a company, our goal is to improve people's lives, to contribute to the development of our communities and the preservation of the environment. Nowadays, all businesses are generating torrents of data every day about their internal and external customers, and with the right tools and technologies, Edrans can help you get the most out of that information: from insights on consumer behavior, KPIs and environment metrics you can get a deeper level of understanding of your customers\u2019 sentiment and emotional drivers when engaging with your business, and forecasts based on historical data and modelled projections. We humanize data by understanding human behavior, focusing on the functional and emotional aspects of data to create experiences through technology that empower your business and create lasting value.")))}var $t="/assets/contact.7e96ee01.svg";function kt(){return e.createElement(oe,null,e.createElement(ce,null,e.createElement(g,null,"Contact Us"),e.createElement(m,null,"We are here to help!")),e.createElement($,{flexDirection:["column","column","row"],py:"54px",px:["20px","20px","145px"],alignItems:"center",justifyContent:"center"},e.createElement(w,{width:["70%","70%","40%"],src:$t,alt:"about",mb:"40px"}),e.createElement(u,{flexDirection:"column"},e.createElement(g,{mb:"20px"},"Get In Touch"),e.createElement(m,null,"Whatsapp: +5491128576884"),e.createElement(m,null,"Email: joxpulp@gmail.com"))))}const f=D(I.button)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${A}
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
`;var Dt="/assets/404.20cf8557.svg";function It(){const t=R();return e.createElement($,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(w,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:Dt,alt:"404"}),e.createElement(m,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(f,{bg:"black",color:"white",width:"125px",onClick:()=>t.push("/")},"Back to Shop"))}function St(){const{id:t}=Re(),r=R(),a=E(),{product:o}=p(s=>s.products),{loading:n,errorMsg:i}=p(s=>s.ui),d=()=>{a(re(t))};return y.exports.useEffect(()=>{a(J(t))},[a,t]),i?e.createElement(u,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement(X,{to:"/login"}),";"):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(Ce,{exitBeforeEnter:!0},n?e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(z.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):o.map(s=>e.createElement($,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:s._id},e.createElement(w,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:s.thumbnail}),e.createElement(u,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(g,{my:"10px"},s.name),e.createElement(m,{mb:"20px"},"Price: USD ",s.price),e.createElement(m,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(m,{fontSize:"12px"},s.description),e.createElement(u,{mt:"20px"},e.createElement(f,{onClick:d,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(f,{onClick:()=>r.push("/")},"Go Back")))))))}const Pt=Z({email:x().email("The email address is invalid, try again").required("Required"),password:x().min(8,"Password must be 8 mininum characters").required("Required")}),vt=Z({email:x().email("The email address is invalid, try again").required("Email is required"),password:x().min(8,"Password must be 8 mininum characters").required("Password is required"),name:x().min(3,"Minium 3 letters").required("Name is Required"),lastname:x().min(3,"Minium 3 letters").required("Lastname is Required"),age:de().min(16,"You must have 16 or more to register").required("Age is required"),cardId:x().matches(/^\d{8}$/,"Card Id must be 8 characters").required("Card Id (DNI) is required"),address:x().min(10,"Address must have 10 characters or more").required("Address is required")}),At=Z({password:x().min(8,"Password must be 8 mininum characters"),name:x().min(3,"Minium 3 letters"),lastname:x().min(3,"Minium 3 letters"),age:de().min(16,"You must have 16 or more to register"),cardId:x().min(8,"Card Id must be 8 characters"),address:x().min(10,"Address must have 10 characters or more")}),Mt=Z({name:x().min(3,"Minium 3 characters").required("Product name is required"),description:x().min(50,"Description must have 50 characters or more").required("Product description is required"),category:x().min(3,"Min 3 characters").required("Product category is required"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required")}),jt=Z({name:x().min(3,"Minium 3 characters"),description:x().min(50,"Description must have 50 characters or more"),category:x().min(3,"Min 3 characters"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000")}),Le=D(I.input)`
	${S}
	${M}
	${j}
	${P}
	${v}
	${A}
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
`;function k(a){var o=a,{label:t}=o,r=T(o,["label"]);const[n,i]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Le,c(c({width:["60%","60%","30%"]},n),r)),i.touched&&i.error&&e.createElement(m,{mt:"3px",color:"red"},i.error))}function Rt(){const t=R(),r=E(),{loading:a,errorMsg:o}=p(i=>i.ui),n=()=>{t.push("/signup"),r(ge()),r(xe())};return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement($,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{email:"",password:""},validationSchema:Pt,onSubmit:({email:i,password:d})=>{r(ge()),r(W({email:i,password:d}))}},e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Welcome Back"),e.createElement(m,{color:"#A9ABBD"},"Login with your email:"),o&&e.createElement(m,{m:"20px",color:"#b62929"},o),e.createElement(k,{disabled:a,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement(k,{disabled:a,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(u,{width:"100%",justifyContent:"center",mt:"20px"},e.createElement(f,{bg:"black",color:"white",type:"submit",mr:"10px",disabled:a},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Login"),e.createElement(f,{onClick:n,type:"button",disabled:a},"Signup"))))))}function Bt(){const t=R(),r=E(),{errorMsg:a,successMsg:o}=p(n=>n.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement($,{bg:"white",overflow:"hidden",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(ee,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:vt,onSubmit:n=>{r(xe()),r(ge()),r(me(n))}},e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Signup"),e.createElement(m,{color:"#A9ABBD"},"Fill your info"),a&&e.createElement(m,{m:"20px",color:"#b62929"},a),o&&e.createElement(m,{m:"20px",color:"#29b669"},o),e.createElement(k,{id:"email",name:"email",type:"email",placeholder:"Email*"}),e.createElement(k,{id:"password",name:"password",type:"password",placeholder:"Password*"}),e.createElement(k,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement(k,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*"}),e.createElement(k,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement(k,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*"}),e.createElement(k,{id:"address",name:"address",type:"text",placeholder:"Address*"}),e.createElement(u,{alignItems:"center"},e.createElement(f,{bg:"black",color:"white",mr:"10px",type:"submit"},"Signup"),e.createElement(f,{onClick:()=>t.push("/login"),type:"button"},"Go Back"))))))}const Ne=o=>{var n=o,{isAuth:t,component:r}=n,a=T(n,["isAuth","component"]);return e.createElement(G,c({},a),t?e.createElement(X,{to:"/"}):e.createElement(r,null))},K=o=>{var n=o,{isAuth:t,component:r}=n,a=T(n,["isAuth","component"]);return e.createElement(G,c({},a),t?e.createElement(r,null):e.createElement(X,{to:"/login"}))};function F(n){var i=n,{onCancel:t,currentValue:r,width:a}=i,o=T(i,["onCancel","currentValue","width"]);const[d,s]=ue(o),[C,O]=y.exports.useState(!1),{userData:ye}=p(Ee=>Ee.auth),{product:ie}=p(Ee=>Ee.products),le=()=>{O(!C),t()};return y.exports.useEffect(()=>{O(!1)},[ye,ie]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},C?e.createElement(Le,c(c({width:a||"80%"},d),o)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:le,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(g,{color:"#9b9b9b"},r)),e.createElement(f,{ml:"10px",width:"30px",onClick:le,type:"button"},C?"Cancel":"Edit")),s.touched&&s.error&&e.createElement(m,{color:"red"},s.error))}var qt="/assets/cancel.a4530b38.svg";function ve({currentImage:t,file:r,label:a,onCancel:o}){const[n,i]=y.exports.useState(null),d=new FileReader;r&&d.readAsDataURL(r),d.onload=()=>{r&&i(d.result)};const s=()=>{i(null),o()};return e.createElement(u,{position:"relative"},r&&e.createElement(w,{position:"absolute",cursor:"pointer",m:"10px",right:"0",width:"30px",src:qt,onClick:s,zIndex:"2"}),e.createElement("label",{htmlFor:a},e.createElement(w,{cursor:"pointer",width:"150px",m:"10px",src:n||t})))}function Ft(){const t=E(),{userData:r}=p(o=>o.auth),{loading:a}=p(o=>o.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement($,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:At,onSubmit:o=>{const n=new FormData;o.name!==""&&n.append("name",o.name),o.lastname!==""&&n.append("lastname",o.lastname),o.age!==""&&n.append("age",o.age),o.address!==""&&n.append("address",o.address),o.password!==""&&n.append("password",o.password),o.avatar&&n.append("avatar",o.avatar),t(ae(n))}},({values:o,setFieldValue:n})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Your Profile"),e.createElement(m,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(ve,{currentImage:r.avatar,label:"avatar",file:o.avatar,onCancel:()=>n("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:i=>n("avatar",i.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:r.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>n("name","")}),e.createElement(F,{currentValue:r.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>n("lastname","")}),e.createElement(F,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>n("password","")}),e.createElement(F,{currentValue:r.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>n("age","")}),e.createElement(F,{currentValue:r.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>n("cardId","")}),e.createElement(F,{currentValue:r.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>n("address","")}),e.createElement(f,{disabled:a,bg:"black",color:"white",my:"20px",type:"submit"},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Save profile")))))}const Lt=({name:t,price:r,thumbnail:a,productId:o,quantity:n})=>{const i=E();return e.createElement(u,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(w,{borderRadius:"5px",width:["30%","30%","25%"],src:a,alt:"productImg"}),e.createElement(u,{mx:"30px",flexDirection:"column"},e.createElement(g,null,t),e.createElement(m,{my:"15px"},"USD ",r),e.createElement(m,null,"Quantity: ",n)),e.createElement(u,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(m,{onClick:()=>i(pe(o)),cursor:"pointer"},"Remove")))};function Nt(){const{cartData:t,total:r}=p(s=>s.cart),{purchases:a}=p(s=>s.purchase),{loading:o}=p(s=>s.ui),n=E(),i=R(),d=()=>{n(ne())};return y.exports.useEffect(()=>{n(N())},[n,a]),t.length===0?e.createElement(Pe,null,"Your cart is empty :("):e.createElement(U,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement($,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(g,null,"Your Cart"),e.createElement(m,{my:"20px",cursor:"pointer",onClick:()=>i.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(u,{flexDirection:["column","column","row"]},e.createElement(u,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},t.map(s=>e.createElement(Lt,{key:s._id,name:s.name,price:s.price,thumbnail:s.thumbnail,productId:s._id,quantity:s.quantity}))),e.createElement(u,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(g,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(g,{my:"20px"},"Total: $",r),e.createElement(f,{disabled:o,onClick:d,bg:"black",color:"white"},o?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Purchase")))))}function Ut({name:t,price:r,thumbnail:a}){return e.createElement(u,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(w,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(g,{my:"15px"},t),e.createElement(m,null,"USD ",r))}function Ot(){const t=E(),{purchases:r}=p(a=>a.purchase);return y.exports.useEffect(()=>{t(H()),t(N())},[t]),r.length===0?e.createElement(Pe,null,"You dont have any purchases"):e.createElement(oe,null,e.createElement(ce,null,e.createElement(g,null,"Your Purchases"),e.createElement(m,null,"Your history of purchases in one place")),e.createElement(Se,null,r.map((a,o)=>e.createElement(Ut,{key:o,name:a.name,price:a.price,thumbnail:a.thumbnail}))))}function Tt({thumbnail:t,id:r}){const a=R(),o=E(),n=()=>{a.push(`adminpanel/productedit/${r}`),o(qe())};return e.createElement(u,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(w,{width:"100%",src:t,alt:"productImg"}),e.createElement(u,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(f,{width:"30%",onClick:n,mr:"10px"},"Edit"),e.createElement(f,{width:"30%",onClick:()=>o(De(r))},"Delete")))}function zt(){const t=R(),{products:r}=p(o=>o.products),a=E();return y.exports.useEffect(()=>{a(he())},[a]),e.createElement(oe,null,e.createElement(ce,null,e.createElement(g,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(f,{onClick:()=>t.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Se,null,r.map((o,n)=>e.createElement(Tt,{key:n,id:o._id,name:o.name,price:o.price,thumbnail:o.thumbnail}))))}const Ue=D(I.textarea)`
	${S}
	${M}
	${L}
	${j}
	${P}
	${v}
	${A}
	font-size: 20px;
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
`;function Gt(n){var i=n,{onCancel:t,currentValue:r,width:a}=i,o=T(i,["onCancel","currentValue","width"]);const[d,s]=ue(o),[C,O]=y.exports.useState(!1),{userData:ye}=p(le=>le.auth),ie=()=>{O(!C),t()};return y.exports.useEffect(()=>{O(!1)},[ye]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},C?e.createElement(Ue,c(c({width:a||"80%"},d),o)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:ie,alignItems:"center",justifyContent:"center",width:a||"80%",borderBottom:"1px solid #C2C5E1"},e.createElement(m,{fontSize:"13px",color:"#9b9b9b"},r)),e.createElement(f,{ml:"10px",width:"30px",onClick:ie,type:"button"},C?"Cancel":"Edit")),s.touched&&s.error&&e.createElement(m,{color:"red"},s.error))}const _t=()=>{const{id:t}=Re(),r=R(),a=E(),{product:o}=p(d=>d.products),{loading:n,errorMsg:i}=p(d=>d.ui);return y.exports.useEffect(()=>{a(J(t))},[a,t]),i?e.createElement(X,{to:"/login"}):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement($,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:jt,onSubmit:d=>{const s=new FormData;d.name!==""&&s.append("name",d.name),d.description!==""&&s.append("description",d.description),d.category!==""&&s.append("category",d.category),d.price!==""&&s.append("price",d.price),d.thumbnail&&s.append("thumbnail",d.thumbnail),a(ke({id:t,formData:s}))}},({values:d,setFieldValue:s})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Edit Product"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),o.map(C=>e.createElement(e.Fragment,null,e.createElement(ve,{currentImage:C.thumbnail,label:"thumbnail",file:d.thumbnail,onCancel:()=>s("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:O=>s("thumbnail",O.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:C.name,id:"name",name:"name",type:"text",placeholder:"Name",width:"400px",onCancel:()=>s("name","")}),e.createElement(Gt,{currentValue:C.description,id:"description",name:"description",type:"text",width:"400px",placeholder:"Description",onCancel:()=>s("description","")}),e.createElement(F,{currentValue:C.category,id:"category",name:"category",type:"text",placeholder:"category",width:"400px",onCancel:()=>s("category","")}),e.createElement(F,{currentValue:C.price,id:"price",name:"price",type:"number",placeholder:"Price",width:"400px",onCancel:()=>s("price","")}))),e.createElement(u,{alignItems:"center"},e.createElement(f,{disabled:n,bg:"black",color:"white",mr:"10px",type:"submit"},n?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Save"),e.createElement(f,{onClick:()=>r.go(-1)},"Go Back"))))))};function Jt(a){var o=a,{label:t}=o,r=T(o,["label"]);const[n,i]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ue,c(c({width:["60%","60%","30%"]},n),r)),i.touched&&i.error&&e.createElement(m,{mt:"3px",color:"red"},i.error))}var Yt="/assets/uploadphoto.e961d561.svg";const Vt=()=>{const t=R(),r=E(),{loading:a,errorMsg:o}=p(n=>n.ui);return o?e.createElement(X,{to:"/login"}):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement($,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Mt,onSubmit:n=>{const i=new FormData;n.name!==""&&i.append("name",n.name),n.description!==""&&i.append("description",n.description),n.category!==""&&i.append("category",n.category),n.price!==""&&i.append("price",n.price),n.thumbnail&&i.append("thumbnail",n.thumbnail),console.log(n),r($e(i))}},({values:n,setFieldValue:i})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(g,{my:"10px"},"Add a new product"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(ve,{currentImage:Yt,label:"thumbnail",file:n.thumbnail,onCancel:()=>i("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:d=>i("thumbnail",d.target.files[0]),style:{display:"none"}}),e.createElement(k,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement(Jt,{id:"description",name:"description",type:"text",placeholder:"Description*"}),e.createElement(k,{id:"category",name:"category",type:"text",placeholder:"Category*"}),e.createElement(k,{id:"price",name:"price",type:"number",placeholder:"Price*"}),e.createElement(u,{alignItems:"center"},e.createElement(f,{disabled:a,bg:"black",color:"white",mr:"10px",type:"submit"},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Add Product"),e.createElement(f,{onClick:()=>t.go(-1)},"Go Back"))))))};function Wt({error:t,children:r}){return e.createElement(u,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"absolute",top:"5",left:"2",p:"20px",bg:t?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(m,{color:t?"#98210A":"#235234"},r))}function Ht(){const t=y.exports.useRef(null),r=E(),{userData:a,logged:o}=p(d=>d.auth),{successMsg:n}=p(d=>d.ui),i=Ye();return y.exports.useEffect(()=>{r(we())},[r]),y.exports.useEffect(()=>{setTimeout(()=>{r(xe())},2e3)},[r,n]),e.createElement(e.Fragment,null,e.createElement(ht,null),e.createElement(ft,null),e.createElement(Ve,{ref:t,timeout:1e3*120,onIdle:()=>r(_()),crossTab:{emitOnAllTabs:!0}}),e.createElement(Ce,{exitBeforeEnter:!0},n&&e.createElement(Wt,null,n)),e.createElement(Ce,{exitBeforeEnter:!0},e.createElement(We,{location:i,key:i.pathname},e.createElement(G,{exact:!0,path:"/",component:bt}),e.createElement(G,{path:"/product/:id",component:St}),e.createElement(G,{path:"/about",component:wt}),e.createElement(G,{path:"/contact",component:kt}),e.createElement(Ne,{isAuth:o,path:"/login",component:Rt}),e.createElement(Ne,{isAuth:o,path:"/signup",component:Bt}),e.createElement(K,{isAuth:o,path:"/profile",component:Ft}),e.createElement(K,{isAuth:o,path:"/cart",component:Nt}),e.createElement(K,{isAuth:o,path:"/purchases",component:Ot}),e.createElement(K,{exact:!0,isAuth:a.isAdmin,path:"/adminpanel",component:zt}),e.createElement(K,{isAuth:a.isAdmin,path:"/adminpanel/add",component:Vt}),e.createElement(K,{isAuth:a.isAdmin,path:"/adminpanel/productedit/:id",component:_t}),e.createElement(G,{path:"*",component:It}))))}const Kt={colors:{primary:"#0D0D0D",secondary:"#979797",text:"#151875",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function Qt({children:t}){return e.createElement(He,{theme:Kt},t)}const Xt=Ke({reducer:{auth:rt,products:lt,cart:ct,purchase:ut,ui:pt}});Qe.render(e.createElement(e.StrictMode,null,e.createElement(Xe,{store:Xt},e.createElement(Qt,null,e.createElement(Ze,null,e.createElement(Ht,null))))),document.getElementById("root"));
