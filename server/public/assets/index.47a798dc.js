var Oe=Object.defineProperty,Te=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var je=(t,r,a)=>r in t?Oe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(t,r)=>{for(var a in r||(r={}))Me.call(r,a)&&je(t,a,r[a]);if(se)for(var a of se(r))ve.call(r,a)&&je(t,a,r[a]);return t},l=(t,r)=>Te(t,ze(r));var T=(t,r)=>{var a={};for(var c in t)Me.call(t,c)&&r.indexOf(c)<0&&(a[c]=t[c]);if(t!=null&&se)for(var c of se(t))r.indexOf(c)<0&&ve.call(t,c)&&(a[c]=t[c]);return a};import{a as Ge,c as b,b as X,W as _e,s as $,m as k,d as D,e as M,t as v,l as I,f as S,g as Y,h as L,p as P,i as V,j as be,u as E,k as p,R as e,n as W,L as B,r as y,G as Je,o as z,q as j,v as Re,A as Ce,w as Z,x as g,y as de,z as ue,F as ee,B as te,C as G,D as Ye,E as Ve,S as We,H as He,I as Ke,J as Qe,P as Xe,K as Ze}from"./vendor.73a69450.js";const et=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};et();const h=Ge.create({baseURL:"https://hekitech.herokuapp.com",withCredentials:!0}),H=b("auth/login",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.post("/api/auth/login",t);return a}catch({response:{data:a}}){return r(a)}}),_=b("auth/logout",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/auth/logout");return a}catch({response:{data:a}}){return r(a)}}),me=b("auth/signup",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.post("/api/auth/signup",t);return a}catch({response:{data:a}}){return r(a)}}),we=b("auth/isLogged",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/auth/islogged");return a}catch({response:{data:a}}){return r(a)}}),ae=b("auth/editUser",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.put("/api/auth/edituser",t);return a}catch({response:{data:a}}){return r(a)}}),tt={userData:JSON.parse(localStorage.getItem("userData"))||{},logged:!1},at=X({name:"auth",initialState:tt,reducers:{},extraReducers:t=>{t.addCase(H.rejected,(r,a)=>i({},r)).addCase(H.fulfilled,(r,a)=>l(i({},r),{userData:a.payload.userData,logged:a.payload.logged})).addCase(_.fulfilled,(r,a)=>l(i({},r),{userData:{},logged:a.payload.logged})).addCase(_.rejected,(r,a)=>l(i({},r),{userData:{},logged:!1})).addCase(we.fulfilled,(r,a)=>l(i({},r),{logged:a.payload.logged})).addCase(we.rejected,(r,a)=>l(i({},r),{userData:{},logged:a.payload.logged})).addCase(ae.fulfilled,(r,a)=>l(i({},r),{userData:a.payload.userUpdated}))}});var rt=at.reducer;const N=b("cart/getCart",async(t,{rejectWithValue:r})=>{try{const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),re=b("cart/addProductToCart",async(t,{rejectWithValue:r})=>{try{await h.post(`/api/cart/add/${t}`);const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),pe=b("cart/removeProductFromCart",async(t,{rejectWithValue:r})=>{try{await h.delete(`/api/cart/delete/${t}`);const{data:[a]}=await h.get("/api/cart/list");return a}catch({response:{data:a}}){return r(a)}}),nt={cartData:JSON.parse(localStorage.getItem("cartData"))||[],total:JSON.parse(localStorage.getItem("total"))||null},ct=X({name:"cart",initialState:nt,reducers:{},extraReducers:t=>{t.addCase(N.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(N.rejected,(r,a)=>({cartData:[],total:null})).addCase(re.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(pe.fulfilled,(r,a)=>l(i({},r),{cartData:a.payload.cartProducts,total:a.payload.total})).addCase(pe.rejected,(r,a)=>l(i({},r),{cartData:[],total:null})).addCase(_.fulfilled,(r,a)=>({cartData:[],total:null}))}});var ot=ct.reducer;const he=b("products/getAllProducts",async()=>{const{data:{products:t}}=await h.get("/api/products/list");return t}),J=b("products/getProductById",async(t,{rejectWithValue:r})=>{try{const{data:{product:a}}=await h.get(`/api/products/list/${t}`);return a}catch({response:{data:a}}){return r(a.error)}}),$e=b("products/addProduct",async(t,{rejectWithValue:r})=>{try{await h.post("/api/products/add",t);const{data:{products:a}}=await h.get("/api/products/list");return a}catch({response:{data:a}}){return r(a.error)}}),ke=b("products/editProduct",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.put(`/api/products/update/${t.id}`,t.formData);return a}catch({response:{data:a}}){return r(a.error)}}),De=b("products/deleteProduct",async(t,{rejectWithValue:r})=>{try{await h.delete(`/api/products/delete/${t}`);const{data:{products:a}}=await h.get("/api/products/list");return a}catch({response:{data:a}}){return r(a.error)}}),it={products:[],product:[]},Be=X({name:"products",initialState:it,reducers:{clearProduct(t,r){return l(i({},t),{product:[]})}},extraReducers:t=>{t.addCase(he.fulfilled,(r,a)=>l(i({},r),{products:a.payload})).addCase(he.rejected,(r,a)=>l(i({},r),{products:[]})).addCase(J.fulfilled,(r,a)=>l(i({},r),{product:a.payload})).addCase(J.rejected,(r,a)=>l(i({},r),{product:[]})).addCase($e.fulfilled,(r,a)=>l(i({},r),{products:a.payload})).addCase($e.rejected,(r,a)=>l(i({},r),{products:[]})).addCase(ke.fulfilled,(r,a)=>l(i({},r),{product:a.payload.updatedProduct})).addCase(ke.rejected,(r,a)=>l(i({},r),{products:[]})).addCase(De.fulfilled,(r,a)=>l(i({},r),{products:a.payload})).addCase(De.rejected,(r,a)=>l(i({},r),{products:[]}))}}),{clearProduct:qe}=Be.actions;var lt=Be.reducer;const K=b("order/getPurchases",async(t,{rejectWithValue:r})=>{try{const{data:a}=await h.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return r(a)}}),ne=b("order/purchase",async(t,{rejectWithValue:r})=>{try{await h.post("/api/orders/purchase");const{data:a}=await h.get("/api/orders/getpurchases");return a}catch({response:{data:a}}){return r(a)}}),st={purchases:JSON.parse(localStorage.getItem("purchases"))||[],totalPaid:JSON.parse(localStorage.getItem("totalPaid"))||null},dt=X({name:"purchase",initialState:st,reducers:{},extraReducers:t=>{t.addCase(K.fulfilled,(r,a)=>l(i({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(K.rejected,(r,a)=>({purchases:[],total:null})).addCase(ne.fulfilled,(r,a)=>l(i({},r),{purchases:a.payload.purchases,totalPaid:a.payload.total})).addCase(_.fulfilled,(r,a)=>({purchases:[],totalPaid:null}))}});var ut=dt.reducer;const mt={loading:!1,errorMsg:null,successMsg:null,userMenu:!1},Fe=X({name:"ui",initialState:mt,reducers:{clearErrorMsg(t,r){return l(i({},t),{errorMsg:null})},clearSuccessMsg(t,r){return l(i({},t),{successMsg:null})},setUserMenu(t,r){return l(i({},t),{userMenu:r.payload})}},extraReducers:t=>{t.addCase(J.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(J.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(J.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload})).addCase(H.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(H.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(H.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(_.fulfilled,(r,a)=>l(i({},r),{userMenu:!1})).addCase(ae.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(ae.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(ae.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(me.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(me.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:a.payload.msg})).addCase(me.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(N.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(N.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(N.rejected,(r,a)=>l(i({},r),{loading:!1})).addCase(re.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(re.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:"Product added to cart"})).addCase(re.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(pe.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(K.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(K.fulfilled,(r,a)=>l(i({},r),{loading:!1})).addCase(K.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error})).addCase(ne.pending,(r,a)=>l(i({},r),{loading:!0})).addCase(ne.fulfilled,(r,a)=>l(i({},r),{loading:!1,successMsg:"Purchase Completed"})).addCase(ne.rejected,(r,a)=>l(i({},r),{loading:!1,errorMsg:a.payload.error}))}}),{clearErrorMsg:ge,clearSuccessMsg:xe,setUserMenu:fe}=Fe.actions;var pt=Fe.reducer;const ht=_e`

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
`,u=$(k.div)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`,x=$(k.h1)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	font-family: ${t=>t.theme.fonts.chakra};
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,Ie=$(k.ul)`
	${D}
	${I}
	${S}
	${P}
	display:${t=>t.display?t.display:"flex"};
`,q=$(k.li)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	cursor: pointer;
`,m=$(k.p)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	transition: ${t=>t.transition};
	cursor: ${t=>t.cursor};
`,A=$(k.img)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${P}
	${L}
    height: ${t=>t.height?t.height:"auto"};
	cursor: ${t=>t.cursor&&"pointer"};
	opacity: ${t=>t.opacity};
	background-size: cover;
	background-position: center;
`;var gt="/assets/cart.7e54eda4.svg";const xt=()=>{const t=E(),{userData:r}=p(o=>o.auth),{errorMsg:a}=p(o=>o.ui),c=()=>{t(_()),t(fe(!1)),t(xe())},n=()=>{t(fe(!1))};return a?e.createElement(W,{to:"/login"}):e.createElement(u,{position:"absolute",width:"120px",alignItems:"center",right:["10px","10px","110px"],top:"5",justifyContent:"center",bg:"#1d1d1dfd",color:"#e4e4e4",height:"160px",zIndex:100},e.createElement(Ie,{display:"flex",flexDirection:"column",alignItems:"center"},e.createElement(B,{to:"/profile",onClick:n},e.createElement(q,{mb:"20px"},"Edit User")),e.createElement(B,{to:"/purchases",onClick:n},e.createElement(q,{mb:"20px"},"Purchases")),r.isAdmin&&e.createElement(B,{to:"/adminpanel",onClick:n},e.createElement(q,{mb:"20px"},"Admin Panel")),e.createElement(q,{onClick:c},"Logout")))};function ft(){const{colors:{primary:t}}=y.exports.useContext(Je),r=E(),{userData:a,logged:c}=p(s=>s.auth),{cartData:n}=p(s=>s.cart),{userMenu:o}=p(s=>s.ui);y.exports.useEffect(()=>{localStorage.setItem("userData",JSON.stringify(a))},[a]),y.exports.useEffect(()=>{localStorage.setItem("cartData",JSON.stringify(n))},[n]);const d=()=>{r(fe(!1))};return e.createElement(u,{position:"relative",as:"header",height:"60px",alignItems:"center",px:["20px","20px","145px"],bg:t,color:"white",borderBottom:"1px solid white"},e.createElement(B,{to:"/",onClick:d},e.createElement(x,{mr:"20px",cursor:"pointer"},"Heki")),e.createElement(u,{as:"nav",flex:1},e.createElement(Ie,{flex:1,justifyContent:"space-evenly"},e.createElement(B,{to:"/",onClick:d},e.createElement(q,null,"Shop")),e.createElement(B,{to:"/about",onClick:d},e.createElement(q,null,"About")),e.createElement(B,{to:"/contact",onClick:d},e.createElement(q,null,"Contact"))),e.createElement(Ie,{justifyContent:"space-evenly"},e.createElement(B,{to:"/cart"},e.createElement(u,{alignItems:"center",mr:"20px",onClick:d},e.createElement(A,{mr:"5px",src:gt}),e.createElement(m,null,c&&n.length!==0&&n.length))),e.createElement(u,{height:"100%",alignItems:"center"},c?e.createElement(u,{onClick:()=>r(fe(!o))},e.createElement(A,{borderRadius:"100%",width:"20px",mr:"10px",src:a.avatar}),e.createElement(q,null,a.name)):e.createElement(B,{to:"/login"},e.createElement(q,null,"Login")))),o&&e.createElement(xt,null)))}const U=$(k.main)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function ce({children:t}){const{loading:r}=p(a=>a.ui);return e.createElement(U,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column"},r?e.createElement(u,{height:"80vh",alignItems:"center",justifyContent:"center"},e.createElement(z.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):e.createElement(e.Fragment,null,t))}const R=$(k.section)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${Y}
	${L}
	${P}
	${V}
	${be}
	display: ${t=>t.display?t.display:"flex"};
	cursor: ${t=>t.cursor};
	backdrop-filter: ${t=>t.glass&&"blur(10px )"};
	-webkit-backdrop-filter: ${t=>t.glass&&"blur(10px)"};
`;function oe({children:t}){return e.createElement(R,{bg:"black",color:"white",height:"216px",width:"100%"},e.createElement(u,{flexDirection:"column",justifyContent:"center",mx:["20px","20px","145px"]},t))}function Se({children:t}){return e.createElement(R,{flexDirection:"column",display:"grid",gridTemplateColumns:["repeat(1, minmax(100px, 1fr))","repeat(2, minmax(100px, 1fr))","repeat(4, minmax(100px, 1fr))"],gridGap:"30px",py:"54px",px:["20px","20px","145px"]},t)}function yt({name:t,price:r,thumbnail:a,id:c}){const n=j(),o=E(),d=()=>{n.push(`/product/${c}`),o(qe()),o(ge())};return e.createElement(u,{onClick:d,overflow:"hidden",flexDirection:"column",width:"100%",cursor:"pointer",initial:{opacity:0},animate:{opacity:1}},e.createElement(A,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(x,{my:"15px"},t),e.createElement(m,null,"USD ",r))}var Et="/assets/emptycart.178cfab5.svg";function Pe({children:t}){return e.createElement(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"},e.createElement(A,{mb:"20px",width:["70%","70%","30%"],src:Et}),e.createElement(m,null,t))}function bt(){const t=E(),{products:r}=p(a=>a.products);return y.exports.useEffect(()=>{t(he()),t(N())},[t]),r.length===0?e.createElement(Pe,null,"No products in db"):e.createElement(ce,null,e.createElement(oe,null,e.createElement(x,null,"Shop Tech"),e.createElement(m,null,"Everything you want, everything fresh and new be always updated with latest releases")),e.createElement(Se,null,r.map(a=>e.createElement(yt,{key:a._id,name:a.name,price:a.price,thumbnail:a.thumbnail,id:a._id}))))}function Ct(){return e.createElement(ce,null,e.createElement(oe,null,e.createElement(x,null,"About Us"),e.createElement(m,null,"Wanna know more about us?.. this is the page")))}function wt(){return e.createElement(ce,null,e.createElement(oe,null,e.createElement(x,null,"Contact Us"),e.createElement(m,null,"We are here to help!")))}const f=$(k.button)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${P}
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
`;var $t="/assets/404.20cf8557.svg";function kt(){const t=j();return e.createElement(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},flexDirection:"column",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},e.createElement(A,{animate:{y:20},transition:{y:{duration:.5,yoyo:1/0}},src:$t,alt:"404"}),e.createElement(m,{mb:"20px"},"Oops! Seems that this page does not exist"),e.createElement(f,{bg:"black",color:"white",width:"125px",onClick:()=>t.push("/")},"Back to Shop"))}function Dt(){const{id:t}=Re(),r=j(),a=E(),{product:c}=p(s=>s.products),{loading:n,errorMsg:o}=p(s=>s.ui),d=()=>{a(re(t))};return y.exports.useEffect(()=>{a(J(t))},[a,t]),o?e.createElement(u,{animate:{opacity:0,x:0},exit:{opacity:0,x:100}},e.createElement(W,{to:"/login"}),";"):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:["20px","20px","50px"],initial:{opacty:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:300}},e.createElement(Ce,{exitBeforeEnter:!0},n?e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:200},height:"50vh",alignItems:"center"},e.createElement(z.CubeSpinner,{size:100,frontColor:"#aaaaaa"})):c.map(s=>e.createElement(R,{bg:"white",color:"black",width:["90%","90%","80%"],flexDirection:["column","column","row"],boxShadow:"0px 0px 25px 10px #F6F4FD",p:"5px",key:s._id},e.createElement(A,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},width:["100%","100%","50%"],src:s.thumbnail}),e.createElement(u,{width:"100%",p:["5px","5px","10px","20px"],flexDirection:"column",justifyContent:"center",initial:{opacity:0,y:-100},animate:{opacity:1,y:0}},e.createElement(x,{my:"10px"},s.name),e.createElement(m,{mb:"20px"},"Price: USD ",s.price),e.createElement(m,{mb:"10px",fontSize:"12px"},"Description:"),e.createElement(m,{fontSize:"12px"},s.description),e.createElement(u,{mt:"20px"},e.createElement(f,{onClick:d,mr:"10px",bg:"black",color:"white"},"Add to cart"),e.createElement(f,{onClick:()=>r.push("/")},"Go Back")))))))}const It=Z({email:g().email("The email address is invalid, try again").required("Required"),password:g().min(8,"Password must be 8 mininum characters").required("Required")}),St=Z({email:g().email("The email address is invalid, try again").required("Email is required"),password:g().min(8,"Password must be 8 mininum characters").required("Password is required"),name:g().min(3,"Minium 3 letters").required("Name is Required"),lastname:g().min(3,"Minium 3 letters").required("Lastname is Required"),age:de().min(16,"You must have 16 or more to register").required("Age is required"),cardId:g().matches(/^\d{8}$/,"Card Id must be 8 characters").required("Card Id (DNI) is required"),address:g().min(10,"Address must have 10 characters or more").required("Address is required")}),Pt=Z({password:g().min(8,"Password must be 8 mininum characters"),name:g().min(3,"Minium 3 letters"),lastname:g().min(3,"Minium 3 letters"),age:de().min(16,"You must have 16 or more to register"),cardId:g().min(8,"Card Id must be 8 characters"),address:g().min(10,"Address must have 10 characters or more")}),At=Z({name:g().min(3,"Minium 3 characters").required("Product name is required"),description:g().min(50,"Description must have 50 characters or more").required("Product description is required"),category:g().min(3,"Min 3 characters").required("Product category is required"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000").required("Product price is required")}),Mt=Z({name:g().min(3,"Minium 3 characters"),description:g().min(50,"Description must have 50 characters or more"),category:g().min(3,"Min 3 characters"),price:de().min(10,"Min price is 10").max(3e4,"Max price is 30000")}),Le=$(k.input)`
	${D}
	${M}
	${v}
	${I}
	${S}
	${P}
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
`;function w(a){var c=a,{label:t}=c,r=T(c,["label"]);const[n,o]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Le,i(i({width:["60%","60%","30%"]},n),r)),o.touched&&o.error&&e.createElement(m,{mt:"3px",color:"red"},o.error))}function vt(){const t=j(),r=E(),{loading:a,errorMsg:c}=p(o=>o.ui),n=()=>{t.push("/signup"),r(ge()),r(xe())};return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(R,{bg:"white",width:["90%","90%","50%"],height:"500px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{email:"",password:""},validationSchema:It,onSubmit:({email:o,password:d})=>{r(ge()),r(H({email:o,password:d}))}},e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(x,{my:"10px"},"Welcome Back"),e.createElement(m,{color:"#A9ABBD"},"Login with your email:"),c&&e.createElement(m,{m:"20px",color:"#b62929"},c),e.createElement(w,{disabled:a,id:"email",name:"email",type:"email",placeholder:"Email"}),e.createElement(w,{disabled:a,id:"password",name:"password",type:"password",placeholder:"Password"}),e.createElement(u,{width:"100%",justifyContent:"center",mt:"20px"},e.createElement(f,{bg:"black",color:"white",type:"submit",mr:"10px",disabled:a},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Login"),e.createElement(f,{onClick:n,type:"button",disabled:a},"Signup"))))))}function jt(){const t=j(),r=E(),{errorMsg:a,successMsg:c}=p(n=>n.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(R,{bg:"white",overflow:"hidden",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"80%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"80%"}},e.createElement(ee,{initialValues:{email:"",password:"",name:"",lastname:"",age:"",cardId:"",address:""},validationSchema:St,onSubmit:n=>{r(xe()),r(ge()),r(me(n))}},e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(x,{my:"10px"},"Signup"),e.createElement(m,{color:"#A9ABBD"},"Fill your info"),a&&e.createElement(m,{m:"20px",color:"#b62929"},a),c&&e.createElement(m,{m:"20px",color:"#29b669"},c),e.createElement(w,{id:"email",name:"email",type:"email",placeholder:"Email*"}),e.createElement(w,{id:"password",name:"password",type:"password",placeholder:"Password*"}),e.createElement(w,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement(w,{id:"lastname",name:"lastname",type:"text",placeholder:"Lastname*"}),e.createElement(w,{id:"age",name:"age",type:"number",placeholder:"Age*"}),e.createElement(w,{id:"cardId",name:"cardId",type:"number",placeholder:"Card Id (DNI)*"}),e.createElement(w,{id:"address",name:"address",type:"text",placeholder:"Address*"}),e.createElement(u,{alignItems:"center"},e.createElement(f,{bg:"black",color:"white",mr:"10px",type:"submit"},"Signup"),e.createElement(f,{onClick:()=>t.push("/login"),type:"button"},"Go Back"))))))}const Ne=c=>{var n=c,{isAuth:t,component:r}=n,a=T(n,["isAuth","component"]);return e.createElement(G,i({},a),t?e.createElement(W,{to:"/"}):e.createElement(r,null))},Q=c=>{var n=c,{isAuth:t,component:r}=n,a=T(n,["isAuth","component"]);return e.createElement(G,i({},a),t?e.createElement(r,null):e.createElement(W,{to:"/login"}))};function F(n){var o=n,{onCancel:t,currentValue:r,width:a}=o,c=T(o,["onCancel","currentValue","width"]);const[d,s]=ue(c),[C,O]=y.exports.useState(!1),{userData:ye}=p(Ee=>Ee.auth),{product:ie}=p(Ee=>Ee.products),le=()=>{O(!C),t()};return y.exports.useEffect(()=>{O(!1)},[ye,ie]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},C?e.createElement(Le,i(i({width:a||"80%"},d),c)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:le,alignItems:"center",justifyContent:"center",width:a||"230px",borderBottom:"1px solid #C2C5E1"},e.createElement(x,{color:"#9b9b9b"},r)),e.createElement(f,{ml:"10px",width:"30px",onClick:le,type:"button"},C?"Cancel":"Edit")),s.touched&&s.error&&e.createElement(m,{color:"red"},s.error))}var Rt="/assets/cancel.a4530b38.svg";function Ae({currentImage:t,file:r,label:a,onCancel:c}){const[n,o]=y.exports.useState(null),d=new FileReader;r&&d.readAsDataURL(r),d.onload=()=>{r&&o(d.result)};const s=()=>{o(null),c()};return e.createElement(u,{position:"relative"},r&&e.createElement(A,{position:"absolute",cursor:"pointer",m:"10px",right:"0",width:"30px",src:Rt,onClick:s,zIndex:"2"}),e.createElement("label",{htmlFor:a},e.createElement(A,{cursor:"pointer",width:"150px",m:"10px",src:n||t})))}function Bt(){const t=E(),{userData:r}=p(c=>c.auth),{loading:a}=p(c=>c.ui);return e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(R,{bg:"white",width:["90%","90%","50%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"10px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",lastname:"",age:"",cardId:"",password:"",address:"",avatar:null},validationSchema:Pt,onSubmit:c=>{const n=new FormData;c.name!==""&&n.append("name",c.name),c.lastname!==""&&n.append("lastname",c.lastname),c.age!==""&&n.append("age",c.age),c.address!==""&&n.append("address",c.address),c.password!==""&&n.append("password",c.password),c.avatar&&n.append("avatar",c.avatar),t(ae(n))}},({values:c,setFieldValue:n})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(x,{my:"10px"},"Your Profile"),e.createElement(m,{mb:"10px",color:"#A9ABBD"},"Change everything you want, just click on edit field"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new avatar"),e.createElement(Ae,{currentImage:r.avatar,label:"avatar",file:c.avatar,onCancel:()=>n("avatar",null)}),e.createElement("input",{id:"avatar",type:"file",onChange:o=>n("avatar",o.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:r.name,id:"name",name:"name",type:"text",placeholder:"Name",onCancel:()=>n("name","")}),e.createElement(F,{currentValue:r.lastname,id:"lastname",name:"lastname",type:"text",placeholder:"Lastname",onCancel:()=>n("lastname","")}),e.createElement(F,{currentValue:"********",id:"password",name:"password",type:"password",placeholder:"Password",onCancel:()=>n("password","")}),e.createElement(F,{currentValue:r.age,id:"age",name:"age",type:"number",placeholder:"Age",onCancel:()=>n("age","")}),e.createElement(F,{currentValue:r.cardId,id:"cardId",name:"cardId",type:"text",placeholder:"Card Id (DNI)",onCancel:()=>n("cardId","")}),e.createElement(F,{currentValue:r.address,id:"address",name:"address",type:"text",placeholder:"Address",onCancel:()=>n("address","")}),e.createElement(f,{disabled:a,bg:"black",color:"white",my:"20px",type:"submit"},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Save profile")))))}const qt=({name:t,price:r,thumbnail:a,productId:c,quantity:n})=>{const o=E();return e.createElement(u,{py:"30px",overflow:"hidden",width:["100%","100%","80%"],borderBottom:"1px solid black"},e.createElement(A,{borderRadius:"5px",width:["30%","30%","25%"],src:a,alt:"productImg"}),e.createElement(u,{mx:"30px",flexDirection:"column"},e.createElement(x,null,t),e.createElement(m,{my:"15px"},"USD ",r),e.createElement(m,null,"Quantity: ",n)),e.createElement(u,{flex:1,justifyContent:"end",alignItems:"end"},e.createElement(m,{onClick:()=>o(pe(c)),cursor:"pointer"},"Remove")))};function Ft(){const{cartData:t,total:r}=p(s=>s.cart),{purchases:a}=p(s=>s.purchase),{loading:c}=p(s=>s.ui),n=E(),o=j(),d=()=>{n(ne())};return y.exports.useEffect(()=>{n(N())},[n,a]),t.length===0?e.createElement(Pe,null,"Your cart is empty :("):e.createElement(U,{alignItems:"center",width:"100%",my:["20px","20px","50px"],initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},e.createElement(R,{mx:["20px","20px","145px"],flexDirection:"column"},e.createElement(u,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},flexDirection:"column",mb:"45px"},e.createElement(x,null,"Your Cart"),e.createElement(m,{my:"20px",cursor:"pointer",onClick:()=>o.push("/")},"Not ready to checkout? Continue shopping")),e.createElement(u,{flexDirection:["column","column","row"]},e.createElement(u,{initial:{opacity:0,x:-200},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},flexDirection:"column"},t.map(s=>e.createElement(qt,{key:s._id,name:s.name,price:s.price,thumbnail:s.thumbnail,productId:s._id,quantity:s.quantity}))),e.createElement(u,{initial:{opacity:0,x:200},animate:{opacity:1,x:0},exit:{opacity:0,x:100},flexDirection:"column",py:"30px"},e.createElement(x,{py:"20px",borderBottom:"1px solid black"},"Order Summary"),e.createElement(x,{my:"20px"},"Total: $",r),e.createElement(f,{disabled:c,onClick:d,bg:"black",color:"white"},c?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Purchase")))))}function Lt({name:t,price:r,thumbnail:a}){return e.createElement(u,{overflow:"hidden",flexDirection:"column",width:"100%"},e.createElement(A,{borderRadius:"5px",width:"100%",src:a,alt:"productImg"}),e.createElement(x,{my:"15px"},t),e.createElement(m,null,"USD ",r))}function Nt(){const t=E(),{purchases:r}=p(a=>a.purchase);return y.exports.useEffect(()=>{t(K()),t(N())},[t]),r.length===0?e.createElement(Pe,null,"You dont have any purchases"):e.createElement(ce,null,e.createElement(oe,null,e.createElement(x,null,"Your Purchases"),e.createElement(m,null,"Your history of purchases in one place")),e.createElement(Se,null,r.map((a,c)=>e.createElement(Lt,{key:c,name:a.name,price:a.price,thumbnail:a.thumbnail}))))}function Ut({thumbnail:t,id:r}){const a=j(),c=E(),n=()=>{a.push(`adminpanel/productedit/${r}`),c(qe())};return e.createElement(u,{border:"1px solid #e7e7e7",borderRadius:"5px",overflow:"hidden",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(A,{width:"100%",src:t,alt:"productImg"}),e.createElement(u,{width:"100%",alignItems:"center",justifyContent:"center",my:"15px"},e.createElement(f,{width:"30%",onClick:n,mr:"10px"},"Edit"),e.createElement(f,{width:"30%",onClick:()=>c(De(r))},"Delete")))}function Ot(){const t=j(),{products:r}=p(c=>c.products),a=E();return y.exports.useEffect(()=>{a(he())},[a]),e.createElement(ce,null,e.createElement(oe,null,e.createElement(x,{mb:"20px"},"Admin Panel (Add, Edit and Delete Products)"),e.createElement(f,{onClick:()=>t.push("/adminpanel/add"),width:"150px"},"Add Product")),e.createElement(Se,null,r.map((c,n)=>e.createElement(Ut,{key:n,id:c._id,name:c.name,price:c.price,thumbnail:c.thumbnail}))))}const Ue=$(k.textarea)`
	${D}
	${M}
	${L}
	${v}
	${I}
	${S}
	${P}
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
`;function Tt(n){var o=n,{onCancel:t,currentValue:r,width:a}=o,c=T(o,["onCancel","currentValue","width"]);const[d,s]=ue(c),[C,O]=y.exports.useState(!1),{userData:ye}=p(le=>le.auth),ie=()=>{O(!C),t()};return y.exports.useEffect(()=>{O(!1)},[ye]),e.createElement(u,{flexDirection:"column",m:"5px"},e.createElement(u,{mb:"5px"},C?e.createElement(Ue,i(i({width:a||"80%"},d),c)):e.createElement(u,{p:"10px",cursor:"pointer",onClick:ie,alignItems:"center",justifyContent:"center",width:a||"80%",borderBottom:"1px solid #C2C5E1"},e.createElement(m,{fontSize:"13px",color:"#9b9b9b"},r)),e.createElement(f,{ml:"10px",width:"30px",onClick:ie,type:"button"},C?"Cancel":"Edit")),s.touched&&s.error&&e.createElement(m,{color:"red"},s.error))}const zt=()=>{const{id:t}=Re(),r=j(),a=E(),{product:c}=p(d=>d.products),{loading:n,errorMsg:o}=p(d=>d.ui);return y.exports.useEffect(()=>{a(J(t))},[a,t]),o?e.createElement(W,{to:"/login"}):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(R,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:Mt,onSubmit:d=>{const s=new FormData;d.name!==""&&s.append("name",d.name),d.description!==""&&s.append("description",d.description),d.category!==""&&s.append("category",d.category),d.price!==""&&s.append("price",d.price),d.thumbnail&&s.append("thumbnail",d.thumbnail),a(ke({id:t,formData:s}))}},({values:d,setFieldValue:s})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(x,{my:"10px"},"Edit Product"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),c.map(C=>e.createElement(e.Fragment,null,e.createElement(Ae,{currentImage:C.thumbnail,label:"thumbnail",file:d.thumbnail,onCancel:()=>s("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:O=>s("thumbnail",O.target.files[0]),style:{display:"none"}}),e.createElement(F,{currentValue:C.name,id:"name",name:"name",type:"text",placeholder:"Name",width:"400px",onCancel:()=>s("name","")}),e.createElement(Tt,{currentValue:C.description,id:"description",name:"description",type:"text",width:"400px",placeholder:"Description",onCancel:()=>s("description","")}),e.createElement(F,{currentValue:C.category,id:"category",name:"category",type:"text",placeholder:"category",width:"400px",onCancel:()=>s("category","")}),e.createElement(F,{currentValue:C.price,id:"price",name:"price",type:"number",placeholder:"Price",width:"400px",onCancel:()=>s("price","")}))),e.createElement(u,{alignItems:"center"},e.createElement(f,{disabled:n,bg:"black",color:"white",mr:"10px",type:"submit"},n?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Save"),e.createElement(f,{onClick:()=>r.go(-1)},"Go Back"))))))};function Gt(a){var c=a,{label:t}=c,r=T(c,["label"]);const[n,o]=ue(r);return e.createElement(u,{m:"20px",flexDirection:"column",width:"100%",alignItems:"center"},e.createElement(Ue,i(i({width:["60%","60%","30%"]},n),r)),o.touched&&o.error&&e.createElement(m,{mt:"3px",color:"red"},o.error))}var _t="/assets/uploadphoto.e961d561.svg";const Jt=()=>{const t=j(),r=E(),{loading:a,errorMsg:c}=p(n=>n.ui);return c?e.createElement(W,{to:"/login"}):e.createElement(U,{alignItems:"center",justifyContent:"center",width:"100%",my:"50px"},e.createElement(R,{bg:"white",width:["90%","90%","70%"],height:"850px",alignItems:"center",boxShadow:"0px 0px 25px 10px #F6F4FD",p:"20px",initial:{opacity:0,x:"-90%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"-90%"}},e.createElement(ee,{initialValues:{name:"",description:"",category:"",price:"",thumbnail:null},validationSchema:At,onSubmit:n=>{const o=new FormData;n.name!==""&&o.append("name",n.name),n.description!==""&&o.append("description",n.description),n.category!==""&&o.append("category",n.category),n.price!==""&&o.append("price",n.price),n.thumbnail&&o.append("thumbnail",n.thumbnail),console.log(n),r($e(o))}},({values:n,setFieldValue:o})=>e.createElement(te,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(x,{my:"10px"},"Add a new product"),e.createElement(m,{color:"#A9ABBD"},"Click on the image to upload a new thumbnail"),e.createElement(Ae,{currentImage:_t,label:"thumbnail",file:n.thumbnail,onCancel:()=>o("thumbnail",null)}),e.createElement("input",{id:"thumbnail",type:"file",onChange:d=>o("thumbnail",d.target.files[0]),style:{display:"none"}}),e.createElement(w,{id:"name",name:"name",type:"text",placeholder:"Name*"}),e.createElement(Gt,{id:"description",name:"description",type:"text",placeholder:"Description*"}),e.createElement(w,{id:"category",name:"category",type:"text",placeholder:"Category*"}),e.createElement(w,{id:"price",name:"price",type:"number",placeholder:"Price*"}),e.createElement(u,{alignItems:"center"},e.createElement(f,{disabled:a,bg:"black",color:"white",mr:"10px",type:"submit"},a?e.createElement(z.ImpulseSpinner,{frontColor:"#ffff",backColor:"#666666"}):"Add Product"),e.createElement(f,{onClick:()=>t.go(-1)},"Go Back"))))))};function Yt({error:t,children:r}){return e.createElement(u,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},position:"absolute",top:"5",left:"2",p:"20px",bg:t?"#FFC7C6":"#C2FFCE",zIndex:100},e.createElement(m,{color:t?"#98210A":"#235234"},r))}function Vt(){const t=y.exports.useRef(null),r=E(),{userData:a,logged:c}=p(d=>d.auth),{successMsg:n}=p(d=>d.ui),o=Ye();return y.exports.useEffect(()=>{r(we())},[r]),y.exports.useEffect(()=>{setTimeout(()=>{r(xe())},2e3)},[r,n]),e.createElement(e.Fragment,null,e.createElement(ht,null),e.createElement(ft,null),e.createElement(Ve,{ref:t,timeout:1e3*120,onIdle:()=>r(_()),crossTab:{emitOnAllTabs:!0}}),e.createElement(Ce,{exitBeforeEnter:!0},n&&e.createElement(Yt,null,n)),e.createElement(Ce,{exitBeforeEnter:!0},e.createElement(We,{location:o,key:o.pathname},e.createElement(G,{exact:!0,path:"/",component:bt}),e.createElement(G,{path:"/product/:id",component:Dt}),e.createElement(G,{path:"/about",component:Ct}),e.createElement(G,{path:"/contact",component:wt}),e.createElement(Ne,{isAuth:c,path:"/login",component:vt}),e.createElement(Ne,{isAuth:c,path:"/signup",component:jt}),e.createElement(Q,{isAuth:c,path:"/profile",component:Bt}),e.createElement(Q,{isAuth:c,path:"/cart",component:Ft}),e.createElement(Q,{isAuth:c,path:"/purchases",component:Nt}),e.createElement(Q,{exact:!0,isAuth:a.isAdmin,path:"/adminpanel",component:Ot}),e.createElement(Q,{isAuth:a.isAdmin,path:"/adminpanel/add",component:Jt}),e.createElement(Q,{isAuth:a.isAdmin,path:"/adminpanel/productedit/:id",component:zt}),e.createElement(G,{path:"*",component:kt}))))}const Wt={colors:{primary:"#0D0D0D",secondary:"#979797",text:"#151875",subtext:"#b8b8b8"},fonts:{chakra:"'Chakra Petch', sans-serif",lato:"'Lato', sans-serif"}};function Ht({children:t}){return e.createElement(He,{theme:Wt},t)}const Kt=Ke({reducer:{auth:rt,products:lt,cart:ot,purchase:ut,ui:pt}});Qe.render(e.createElement(e.StrictMode,null,e.createElement(Xe,{store:Kt},e.createElement(Ht,null,e.createElement(Ze,null,e.createElement(Vt,null))))),document.getElementById("root"));
