(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_",Input:"ContactData_Input__2fK5-"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__PrDi6"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},,function(e,t,n){e.exports=n(81)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),i=(n(59),n(12)),l=n(2),s=n(3),d=n(5),u=n(4),m=n(6),p=n(39),h=n.n(p),g=n(20),f=n.n(g),_=n(40),v=n.n(_),b=n(41),E=n.n(b),k=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:v.a,alt:"MyBurger"}))},C=n(42),y=n.n(C),w=n(13),O=n(22),N=n.n(O),S=function(e){return r.a.createElement("li",{className:N.a.NavigationItem},r.a.createElement(w.b,{to:e.link,exact:e.exact,activeClassName:N.a.active},e.children))},j=function(e){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(S,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(S,{link:"/orders"},"Orders"))},B=n(45),D=n.n(B),I=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(I,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(j,null)))},T=n(16),L=n.n(T),H=n(46),M=n.n(H),P=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},A=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",null,r.a.createElement(j,null))))},F=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(A,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(a.Component),R=n(15),U=n(53),Y=n(47),K=n.n(Y),q=n(11),W=n.n(q),J=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:W.a.BreadTop},r.a.createElement("div",{className:W.a.Seeds1}),r.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:W.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:W.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:W.a.Salad});break;default:e=null}return e}}]),t}(a.Component),X=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(U.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(J,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:K.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},z=n(19),Z=n.n(z),G=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"))},Q=n(25),V=n.n(Q),$=[{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Salad",type:"salad"}],ee=function(e){return r.a.createElement("div",{className:V.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map(function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabledInfo[t.type]})}),r.a.createElement("button",{className:V.a.OrderButton,disabled:e.orderNowDisabled,onClick:e.orderNowClicked},"ORDER NOW"))},te=n(48),ne=n.n(te),ae=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).shouldComponentUpdate=function(e,t){return e.show!==n.props.show||e.children!==n.props.children},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{show:this.props.show,clicked:this.props.backdropClicked}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),re=n(26),oe=n.n(re),ce=function(e){return r.a.createElement("button",{className:[oe.a.Button,oe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.ingredients[t])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(ce,{btnType:"Danger",clicked:e.cancel},"CANCEL"),r.a.createElement(ce,{btnType:"Success",clicked:e.continue},"CONTINUE"))},le=n(49),se=n.n(le).a.create({baseURL:"https://react-burger-builder-ac7a6.firebaseio.com/"}),de=n(50),ue=n.n(de),me=function(e){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},pe=function(e,t){return function(n){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){return t.setState({error:null})},t}return Object(m.a)(a,n),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){return e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{show:this.state.error,backdropClicked:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},he={salad:.5,bacon:.7,cheese:.4,meat:1.3},ge=pe(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,orderNowDisabled:!0,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=Object(R.a)({},n.state.ingredients);t[e]=n.state.ingredients[e]+1;var a=n.state.totalPrice+he[e];n.setState({ingredients:t,totalPrice:a,orderNowDisabled:!1})},n.removeIngredientHandler=function(e){var t=Object(R.a)({},n.state.ingredients);if(!(n.state.ingredients[e]<=0)){t[e]=n.state.ingredients[e]-1;var a=n.state.totalPrice-he[e],r=Object.keys(t).map(function(e){return t[e]}).reduce(function(e,t){return e+t},0)<=0;n.setState({ingredients:t,totalPrice:a,orderNowDisabled:r})}},n.orderNowClickedHandler=function(){n.setState({purchasing:!0})},n.orderCanceledHandler=function(){n.setState({purchasing:!1})},n.orderContinueHandler=function(){var e=[];for(var t in n.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(n.state.ingredients[t]));e.push("price="+n.state.totalPrice);var a=e.join("&");n.props.history.push({pathname:"/checkout",search:"?"+a})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;se.get("ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"render",value:function(){var e=Object(R.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Burger Ingredients Cannot be loadded"):r.a.createElement(me,null);return this.state.ingredients&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{ingredients:this.state.ingredients}),r.a.createElement(ee,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabledInfo:e,price:this.state.totalPrice,orderNowDisabled:this.state.orderNowDisabled,orderNowClicked:this.orderNowClickedHandler})),n=n=r.a.createElement(ie,{ingredients:this.state.ingredients,price:this.state.totalPrice,cancel:this.orderCanceledHandler,continue:this.orderContinueHandler})),this.state.loading&&(n=r.a.createElement(me,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{show:this.state.purchasing,backdropClicked:this.orderCanceledHandler},n),a)}}]),t}(a.Component),se),fe=n(51),_e=n.n(fe),ve=function(e){return r.a.createElement("div",{className:_e.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(X,{ingredients:e.ingredients})),r.a.createElement(ce,{btnType:"Danger",clicked:e.checkoutCanceled},"CANCEL"),r.a.createElement(ce,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},be=n(17),Ee=n.n(be),ke=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},n.orderHandler=function(){event.preventDefault(),n.setState({loading:!0});var e={ingredients:n.props.ingredients,price:n.props.price,customer:{name:"Roger",address:{street:"124325 st",zipCode:"11222",country:"US"},email:"test@fdasf.com"},deliveryMethod:"fastest"};se.post("/orders.json",e).then(function(e){n.setState({loading:!1}),n.props.history.push("/")}).catch(function(e){return n.setState({loading:!1})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement("input",{className:Ee.a.Input,type:"text",name:"name",placeholder:"Your Name"}),r.a.createElement("input",{className:Ee.a.Input,type:"email",name:"email",placeholder:"Your Email"}),r.a.createElement("input",{className:Ee.a.Input,type:"text",name:"street",placeholder:"Street"}),r.a.createElement("input",{className:Ee.a.Input,type:"text",name:"postalCode",placeholder:"Postal Code"}),r.a.createElement(ce,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return this.state.loading&&(e=r.a.createElement(me,null)),r.a.createElement("div",{className:Ee.a.ContactData},r.a.createElement("h4",null,"Enter your contact data"),e)}}]),t}(a.Component),Ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:0},n.checkoutCanceledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},n=0,a=!0,r=!1,o=void 0;try{for(var c,i=e.entries()[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var l=c.value;"price"===l[0]?n=+l[1]:t[l[0]]=+l[1]}}catch(s){r=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}this.setState({ingredients:t,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ve,{ingredients:this.state.ingredients,checkoutCanceled:this.checkoutCanceledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(i.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(ke,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(a.Component),ye=n(52),we=n.n(ye),Oe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,qty:e.ingredients[n]});var a=t.map(function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.qty,")")});return r.a.createElement("div",{className:we.a.Order,key:e.id},r.a.createElement("p",null,"Ingredients: ",a," "),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},Ne=pe(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;se.get("/orders.json").then(function(t){var n=[];for(var a in t.data)n.push(Object(R.a)({id:a},t.data[a]));e.setState({loading:!1,orders:n})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map(function(e){return r.a.createElement(Oe,{key:e.id,ingredients:e.ingredients,id:e.id,price:e.price})}))}}]),t}(a.Component),se);var Se=function(){return r.a.createElement("div",null,r.a.createElement(F,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/checkout",component:Ce}),r.a.createElement(i.a,{path:"/orders",component:Ne}),r.a.createElement(i.a,{path:"/",exact:!0,component:ge}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=r.a.createElement(w.a,null,r.a.createElement(Se,null));c.a.render(je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[54,1,2]]]);
//# sourceMappingURL=main.b1837931.chunk.js.map