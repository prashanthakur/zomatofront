(this["webpackJsonpmain-app"]=this["webpackJsonpmain-app"]||[]).push([[0],{133:function(e,t,c){},135:function(e,t,c){},168:function(e,t,c){},187:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(88),i=c.n(r),a=c(25),l=c(11),o=c(14),j=c(15),d=c(17),h=c(16),b=c(30),u=c.n(b),O=(c(61),c(89)),p=c.n(O),m=c(0),x=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{class:"row",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{class:"col-md-8 col-sm-10 rest-display-section",children:Object(m.jsx)("div",{id:"content",children:Object(m.jsxs)("div",{class:"list_content",children:[Object(m.jsx)("div",{class:"images",children:Object(m.jsx)("img",{src:e.restaurant_thumb,alt:"image",class:"image_display"})}),Object(m.jsxs)("div",{class:"name_address",children:[Object(m.jsx)(a.b,{to:"/details/".concat(e.restaurant_id),children:Object(m.jsx)("h2",{class:"rest_name",children:e.restaurant_name})}),Object(m.jsxs)("p",{class:"fort",children:["Rating : ",e.average_rating,"\u2605"]}),Object(m.jsx)("p",{class:"graytext",children:e.address})]}),Object(m.jsx)("hr",{style:{marginTop:60}}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{class:"menu_cuisines",children:Object(m.jsx)("p",{children:"COST \xa0 \xa0 \xa0 \xa0 \xa0 \xa0:"})}),Object(m.jsxs)("div",{class:"rate",children:[Object(m.jsxs)("p",{children:[e.mealTypes[0].mealtype_name,"\xa0",e.mealTypes[1].mealtype_name,Object(m.jsx)("br",{})," ",Object(m.jsx)("span",{className:"cusine_span",children:e.cuisines[0].cuisine_name}),"\xa0",Object(m.jsx)("span",{className:"cusine_span",children:e.cuisines[1].cuisine_name})]}),Object(m.jsxs)("p",{children:["RS ",e.cost]})]})]})})})})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsxs)("h2",{children:[Object(m.jsx)(p.a,{style:{height:80,width:80,color:"red",marginTop:-50}}),Object(m.jsx)("br",{}),"No data found for this filter"]})})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"/loading2.gif",style:{height:250,width:250}}),Object(m.jsx)("h1",{children:"loading....."})]})}(e)})})},f="https://apiforeveryone.herokuapp.com/filter",v=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).filterCuisine=function(t){var c,n=sessionStorage.getItem("mealId"),s=t.target.value;c=""==s?"".concat(f,"/").concat(n):"".concat(f,"/").concat(n,"?cuisine=").concat(s),u.a.get(c).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{onChange:this.filterCuisine,children:Object(m.jsxs)("div",{class:"col-md-12 col-sm-6 col-xs-12 col-div-for-m",children:[Object(m.jsx)("h4",{children:"Cusine filter"}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),Object(m.jsx)("label",{children:"All"})]}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),Object(m.jsx)("label",{children:"North Indian"})]}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),Object(m.jsx)("label",{children:"south indian"})]}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),Object(m.jsx)("label",{children:"chinese"})]}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),Object(m.jsx)("label",{children:"fast food"})]}),Object(m.jsxs)("div",{className:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),Object(m.jsx)("label",{children:"street food"})]})]})})})}}]),c}(n.Component),g=v,y="https://apiforeveryone.herokuapp.com/filter",k=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).filterCost=function(t){var c,n=sessionStorage.getItem("mealId"),s=t.target.value.split("-"),r=s[0],i=s[1];c=""==t.target.value?"".concat(y,"/").concat(n):"".concat(y,"/").concat(n,"?lcost=").concat(r,"&hcost=").concat(i),u.a.get(c).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"cost-div-mrgin",children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 col-sm-6 col-xs-12 cost-fl-m",style:{marginLeft:-32},onChange:this.filterCost,children:[Object(m.jsx)("h4",{children:"Cost filter"}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),Object(m.jsx)("label",{children:"All"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"201-300"}),Object(m.jsx)("label",{children:"201-300"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),Object(m.jsx)("label",{children:"301-600"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),Object(m.jsx)("label",{children:"601-1000"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),Object(m.jsx)("label",{children:"1001-1500"})]})]})})})})}}]),c}(n.Component),C=k;c(133);var w=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("header",{id:"header",children:[Object(m.jsx)("div",{id:"logo_main",children:Object(m.jsx)(a.b,{to:"/",children:Object(m.jsxs)("p",{id:"heading",children:["Ed",Object(m.jsx)("sup",{className:"umato",children:"umato"})]})})}),Object(m.jsxs)("div",{id:"social",children:[Object(m.jsx)(a.b,{to:"/",id:"login",children:"Login"}),Object(m.jsx)("a",{href:"#",id:"createaccount",children:"Create an account"})]})]})})},_=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this)).setDataAsPerFilter=function(e){n.setState({restaurantList:e})},n.state={restaurantList:""},n}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"filters-section",children:[Object(m.jsx)(g,{restPerCuisine:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)(C,{restPerCost:function(t){e.setDataAsPerFilter(t)}})]}),Object(m.jsx)(x,{listData:this.state.restaurantList})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://apiforeveryone.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),c}(n.Component);function S(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{class:"container",children:[Object(m.jsxs)("h1",{style:{margin:"50px 0px"},children:["Your restaurants is in your hands. ",Object(m.jsx)("span",{id:"order_now",children:"Order Now"})]}),Object(m.jsx)("h1",{style:{margin:"50px 0px"},children:"Quick Search"}),Object(m.jsx)("div",{class:"row",children:function(e){var t=e.quickData;return t?t.map((function(e){return Object(m.jsx)(a.b,{to:"/list/".concat(e.mealtype_id),children:Object(m.jsx)("div",{class:"col-sm-6 col-md-4",children:Object(m.jsxs)("div",{class:"thumbnail",children:[Object(m.jsx)("img",{src:e.meal_image,alt:"..."}),Object(m.jsx)("div",{class:"caption",children:Object(m.jsx)("h3",{children:e.mealtype})})]})},e.mealtype_id)})})):Object(m.jsxs)("center",{children:[Object(m.jsx)("h5",{children:"Loading...please wait for a while"}),Object(m.jsx)("img",{src:"/loading2.gif",style:{height:100,width:100}})]})}(e)})]}),Object(m.jsx)("center",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{style:{color:"crimson",fontFamily:"cursive"},children:"Safe and Touchless delivery at your place. "}),Object(m.jsx)("img",{style:{borderRadius:"50px",height:450,width:"60%"},src:"https://i.ibb.co/f0CpLBc/delivery-removebg-preview.png"})]})})]})}c(81);var N=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={QuickData:""},n}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(S,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://apiforeveryone.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),c}(n.Component),D={display:"inline-block",marginRight:"3px"},I={float:"right"},P={color:"#fff"},R=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(m.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},n.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(m.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name,"| ",e.address]})}))},n.handleCity=function(e){var t=e.target.value;fetch("".concat("https://apiforeveryone.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurant:e})}))},n.handleRest=function(e){n.props.history.push("/details/".concat(e.target.value))},n.state={location:"",restaurant:""},n}return Object(j.a)(c,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{class:"background",children:[Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-save",style:P}),Object(m.jsx)("button",{class:"login",children:"Get App"}),Object(m.jsxs)("div",{style:I,children:[Object(m.jsx)("button",{class:"login",children:"Log In"}),Object(m.jsx)("button",{class:"signup",children:"Sign Up"})]})]}),Object(m.jsx)("div",{class:"homelogo text-center",children:Object(m.jsx)("strong",{children:"e!"})}),Object(m.jsx)("header",{children:"Discover the best food & drinks in Delhi NCR "}),Object(m.jsxs)("div",{class:"dropdown-block",children:[Object(m.jsx)("div",{style:D,children:Object(m.jsxs)("select",{class:"home-dropdown",onChange:this.handleCity,children:[Object(m.jsx)("option",{children:"Select your City"}),this.renderCity(this.state.location)]})}),Object(m.jsxs)("div",{id:"restaurant_searchbox",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-search search"}),Object(m.jsxs)("select",{class:"input-box",onChange:this.handleRest,children:[Object(m.jsx)("option",{children:"Select any Restaurant"}),this.renderRestaurants(this.state.restaurant)]})]})]})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://apiforeveryone.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({location:t})}))}}]),c}(n.Component),F=Object(l.e)(R);var L=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(N,{})]})},T=c(69),A=c.n(T),M=c(92),z=(c(135),c(34)),B=(c(136),c(93)),Q=c.n(B),E=[],J=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).placeOrder=function(e){E.push(e),n.props.finalOrder(E),n.state.cartShow=n.state.cartShow+1},n.removeOrder=function(e){E.splice(E.indexOf(e.toString()),1),n.props.finalOrder(E),n.state.cartShow>0?n.state.cartShow=n.state.cartShow-1:n.state.cartShow=Number(0)},n.renderMenu=function(e){var t=e.menudata;return t?t.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("img",{src:e.menu_image,style:{height:100,width:100,borderRadius:50}}),e.menu_name," -Rs ",e.menu_price," ----20%Off"]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){n.placeOrder(e.menu_id)},children:"Add"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){n.removeOrder(e.menu_id)},children:"Remove"})]})]},e.menu_id),Object(m.jsx)("hr",{})]})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)("img",{src:"../loading2.gif",style:{height:200,width:200}})})})},n.state={orders:[],cartShow:Number(0)},n}return Object(j.a)(c,[{key:"render",value:function(){return console.log("menu>>>>>",this.props),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)(Q.a,{style:{height:40,width:40,color:"green"}}),this.state.cartShow]}),this.renderMenu(this.props)]})})}}]),c}(n.Component),q=Object(l.e)(J),G=c(211),V=c(212),H=c(94),Y=c.n(H),K=(c(149),[{id:1,url:"https://i.ibb.co/D1LyGP2/lunch.jpg"},{id:2,url:"https://i.ibb.co/591Bsp5/bf.jpg"},{id:3,url:"https://i.ibb.co/JnN3cq9/Nice-looking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-cheery-positive-girls-and-guys-h.jpg"},{id:4,url:"https://i.ibb.co/QcfjzzX/drinks2.jpg"},{id:5,url:"https://i.ibb.co/fdqYvPR/snacks-Meal.jpg"},{id:6,url:"https://i.ibb.co/R6KHXzH/dinner.jpg"},{id:7,url:"https://i.ibb.co/f0CpLBc/delivery-removebg-preview.png"},{id:8,url:"https://i.ibb.co/z7mQp0G/Party-food-assortment-of-salty-snacks-in-bowls-shot-on-white-background-High-angle-view-Predominant.jpg"}]),U=[{id:1,url:"https://i.ibb.co/ZJR0VLD/image-search-1639242742867.png"},{id:2,url:"https://i.ibb.co/FgntDBL/image-search-1639242746269.png"},{id:3,url:"https://i.ibb.co/ZJR0VLD/image-search-1639242742867.png"}],X={desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:1}};var Z=function(){return Object(m.jsx)(Y.a,{responsive:X,infinite:!0,draggable:!1,swipeable:!1,centerMode:!0,autoPlay:!0,autoPlaySpeed:1e3,showDots:!0,removeArrowOnDeviceType:["tablet","mobile"],children:K.map((function(e){return Object(m.jsx)("img",{style:{borderRadius:"1px",height:100,width:150,margin:20},src:e.url},e.id)}))})},W=c(96),$=c.n(W),ee=c(97),te=c.n(ee),ce=c(95),ne=c.n(ce),se=c(98),re=c.n(se),ie=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).addToCart=function(t){e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:"",cart:"empty cart"},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;console.log("details>>>>>",this.state.details);var t=this.state.details;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsxs)("div",{className:"rest_details",children:[Object(m.jsx)("div",{id:"rest_image",children:Object(m.jsx)("img",{src:t.restaurant_thumb})}),Object(m.jsxs)("div",{id:"rest_content",children:[Object(m.jsx)("h2",{children:t.restaurant_name}),Object(m.jsx)("h4",{children:t.address}),Object(m.jsxs)("h4",{children:["Quality : ",t.rating_text]}),Object(m.jsx)(G.a,{label:"fast food"}),Object(m.jsx)(G.a,{label:"street food",variant:"outlined"}),Object(m.jsx)(G.a,{label:"Breakfast"}),Object(m.jsx)(G.a,{label:"Dinner",variant:"outlined"})]})]}),Object(m.jsxs)("div",{className:"container menu_container",children:[Object(m.jsx)("h3",{children:"Variety of Cuisines & mealtypes"}),Object(m.jsx)(Z,{}),Object(m.jsxs)(z.d,{children:[Object(m.jsxs)(z.b,{children:[Object(m.jsx)(z.a,{children:"Menu"}),Object(m.jsx)(z.a,{children:"Contact"}),Object(m.jsx)(z.a,{children:"Details"})]}),Object(m.jsxs)(z.c,{children:[Object(m.jsx)("h2",{style:{color:"green",fontSize:20},children:"Menu "}),Object(m.jsx)(q,{menudata:this.state.menuList,restId:this.props.match.params.restId,finalOrder:function(t){e.addToCart(t)}})]}),Object(m.jsxs)(z.c,{children:[Object(m.jsxs)("h3",{style:{color:"red"},children:[Object(m.jsx)($.a,{style:{height:40,width:40}})," +911400362122"]}),Object(m.jsxs)("h3",{children:[Object(m.jsx)(te.a,{style:{height:40,width:40,margintop:10}}),t.address]})]}),Object(m.jsxs)(z.c,{children:[Object(m.jsxs)("h4",{children:["Average Rating : ",t.rating_text]}),Object(m.jsx)(re.a,{})," ",Object(m.jsx)("span",{children:"featured video"}),Object(m.jsx)(ne.a,{url:"https://youtu.be/_U8DcQK8eVI",controls:!0,width:"100%"})]})]})]}),Object(m.jsx)("div",{style:{marginTop:"30px"},children:Object(m.jsxs)("center",{children:[Object(m.jsx)(V.a,{style:{marginRight:10},variant:"contained",size:"large",color:"primary",onClick:this.proceed,children:"Proceed"}),Object(m.jsx)(a.b,{to:"/",children:Object(m.jsx)(V.a,{variant:"contained",size:"large",color:"primary",children:"Back"})})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(M.a)(A.a.mark((function e(){var t,c,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://apiforeveryone.herokuapp.com/details/").concat(t));case 3:return c=e.sent,e.next=6,u.a.get("".concat("https://apiforeveryone.herokuapp.com/menu/").concat(t));case 6:n=e.sent,console.log(c.data),console.log(n.data),this.setState({details:c.data[0],menuList:n.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),c}(n.Component),ae=ie,le=c(4),oe=(c(168),c(100)),je=c.n(oe),de=c(209),he=c(216),be=c(215),ue=c(214),Oe=c(213),pe=c(70),me=c(99),xe=c.n(me);c(184),c(185);function fe(){return Object(m.jsx)("center",{children:Object(m.jsx)(xe.a,Object(pe.a)(Object(pe.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{style:{width:"300px"},children:U.map((function(e){return Object(m.jsx)("img",{src:e.url})}))}))})}var ve=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(le.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){fetch("https://apiforeveryone.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/viewOrder"))},n.renderItems=function(e){return e?e.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"item_box",children:Object(m.jsxs)(de.a,{sx:{maxWidth:345},children:[Object(m.jsx)(ue.a,{component:"img",alt:"image_restaurant",height:"150",image:e.menu_image}),Object(m.jsxs)(be.a,{style:{height:100,width:300},children:[Object(m.jsx)(Oe.a,{gutterBottom:!0,variant:"h3",component:"div",style:{color:"black"},children:e.menu_name}),Object(m.jsx)(Oe.a,{variant:"h5",color:"text.primary",children:e.menu_price})]}),Object(m.jsxs)(he.a,{children:[Object(m.jsx)(V.a,{size:"large",children:"Delete"}),Object(m.jsx)(V.a,{size:"large",children:"Learn More"})]})]})})})})):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("center",{children:[Object(m.jsx)("h5",{children:"please wait.."}),Object(m.jsx)("img",{src:"../loading2.gif",style:{height:150,width:150}})]})})},n.state={details:"",tPrice:"",hotel_name:n.props.match.params.restName,name:"",phone:"",email:"",address:"",status:"Pending"},n}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsxs)("h3",{children:["Order from ",Object(m.jsx)("span",{style:{color:"crimson",borderBottom:"3px solid rgb(16, 16, 66)"},children:this.props.match.params.restName})," is below"]})}),Object(m.jsx)("div",{class:"row form-div",children:Object(m.jsxs)("div",{class:"col-md-12",children:[Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{class:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"E-mail"}),Object(m.jsx)("input",{class:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Phone no"}),Object(m.jsx)("input",{class:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{class:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]}),Object(m.jsx)("button",{onClick:this.handleSubmit,class:"btn btn-success",children:"Checkout"})]})})]}),Object(m.jsx)("h4",{className:"text-center",children:"Super fast, safe & free delivery all over India"}),Object(m.jsx)(fe,{}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("h4",{children:"Your selected items to order"}),this.renderItems(this.state.details),Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h2",{children:["Total order cost is Rs: ",this.state.tPrice]}),Object(m.jsx)(a.b,{to:"/",children:Object(m.jsx)(V.a,{size:"large",variant:"contained",color:"primary",children:"\xa0Back"})}),"\xa0",Object(m.jsxs)(V.a,{size:"large",variant:"contained",color:"secondary",children:[Object(m.jsx)(je.a,{}),"\xa0Pay"]}),"\xa0"]})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),c=[];t.split(",").map((function(e){return c.push(parseInt(e)),"ok"})),fetch("https://apiforeveryone.herokuapp.com/menuItem",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){var c=0;t.map((function(e){return c+=parseInt(e.menu_price),"ok"})),e.setState({details:t,tPrice:c})}))}}]),c}(n.Component),ge=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Orders"})}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Rest Name"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Address"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsx)("th",{children:"Status"})]})}),Object(m.jsx)("tbody",{children:function(e){var t=e.orderData;return t?t.map((function(e){return Object(m.jsxs)("tr",{style:{color:"",backgroundColor:"#CAD5E2"},children:[Object(m.jsx)("td",{children:e.hotel_name}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.address}),Object(m.jsxs)("td",{children:["Rs:",e.tPrice]}),Object(m.jsx)("td",{children:e.status})]})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)("img",{src:"./loading2.gif",style:{height:200,width:200}})})})}(e)})]}),Object(m.jsx)("h3",{children:"Refresh page to be data updated...."})]})},ye=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(o.a)(this,c),(e=t.call(this)).state={orders:""},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"All orders list -"}),Object(m.jsx)(ge,{orderData:this.state.orders})]})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://apiforeveryone.herokuapp.com/viewOrder").then((function(t){e.setState({orders:t.data})}))}}]),c}(n.Component),ke=function(){return Object(m.jsxs)(a.a,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:L}),Object(m.jsx)(l.a,{path:"/list/:mealId",component:_}),Object(m.jsx)(l.a,{path:"/details/:restId",component:ae}),Object(m.jsx)(l.a,{path:"/placeOrder/:restName",component:ve}),Object(m.jsx)(l.a,{path:"/vieworder",component:ye})]})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ke,{})}),document.getElementById("root"))},61:function(e,t,c){},81:function(e,t,c){}},[[187,1,2]]]);
//# sourceMappingURL=main.42362d9e.chunk.js.map