(this["webpackJsonpmain-app"]=this["webpackJsonpmain-app"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(75),a=n.n(r),i=n(23),l=n(10),j=n(14),o=n(15),d=n(17),h=n(16),b=n(28),u=n.n(b),O=(n(53),n(76)),x=n.n(O),m=n(0),p=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{class:"row",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{class:"col-md-8 col-sm-10 rest-display-section",children:Object(m.jsx)("div",{id:"content",children:Object(m.jsxs)("div",{class:"list_content",children:[Object(m.jsx)("div",{class:"images",children:Object(m.jsx)("img",{src:e.restaurant_thumb,alt:"image",class:"image_display"})}),Object(m.jsxs)("div",{class:"name_address",children:[Object(m.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:Object(m.jsx)("h2",{class:"rest_name",children:e.restaurant_name})}),Object(m.jsxs)("p",{class:"fort",children:["Rating : ",e.average_rating,"\u2605"]}),Object(m.jsx)("p",{class:"graytext",children:e.address})]}),Object(m.jsx)("hr",{style:{marginTop:60}}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{class:"menu_cuisines",children:[Object(m.jsx)("p",{children:"CUISINES \xa0 \xa0 \xa0 \xa0 \xa0 \xa0:"}),Object(m.jsx)("p",{children:"COST FOR TWO :"})]}),Object(m.jsxs)("div",{class:"rate",children:[Object(m.jsxs)("p",{children:[e.mealTypes[0].mealtype_name,"\xa0",e.mealTypes[1].mealtype_name," ",Object(m.jsx)("button",{className:"btn btn-primary",children:e.cuisines[0].cuisine_name}),"\xa0",Object(m.jsx)("button",{className:"btn btn-primary",children:e.cuisines[1].cuisine_name})]}),Object(m.jsxs)("p",{children:["RS ",e.cost]})]})]})})})})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsxs)("h2",{children:[Object(m.jsx)(x.a,{style:{height:100,width:100,color:"red",marginTop:-50}}),Object(m.jsx)("br",{}),"No data found for this filter"]})})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"/loading2.gif",style:{height:250,width:250}}),Object(m.jsx)("h1",{children:"loading....."})]})}(e)})})},f="https://apiforeveryone.herokuapp.com/filter",v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).filterCuisine=function(t){var n,c=sessionStorage.getItem("mealId"),s=t.target.value;n=""==s?"".concat(f,"/").concat(c):"".concat(f,"/").concat(c,"?cuisine=").concat(s),u.a.get(n).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{onChange:this.filterCuisine,children:Object(m.jsxs)("div",{class:"col-md-12 col-sm-6 col-xs-12",children:[Object(m.jsx)("h4",{children:"Cusine filter"}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),Object(m.jsx)("label",{children:"All"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),Object(m.jsx)("label",{children:"North Indian"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),Object(m.jsx)("label",{children:"south indian"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),Object(m.jsx)("label",{children:"chinese"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),Object(m.jsx)("label",{children:"fast food"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),Object(m.jsx)("label",{children:"street food"})]})]})})})}}]),n}(c.Component),g=v,y="https://apiforeveryone.herokuapp.com/filter",k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).filterCost=function(t){var n,c=sessionStorage.getItem("mealId"),s=t.target.value.split("-"),r=s[0],a=s[1];n=""==t.target.value?"".concat(y,"/").concat(c):"".concat(y,"/").concat(c,"?lcost=").concat(r,"&hcost=").concat(a),u.a.get(n).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"col-md-12 col-sm-6 col-xs-12",onChange:this.filterCost,children:[Object(m.jsx)("h4",{children:"Cost filter"}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),Object(m.jsx)("label",{children:"All"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"201-300"}),Object(m.jsx)("label",{children:"201-300"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),Object(m.jsx)("label",{children:"301-600"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),Object(m.jsx)("label",{children:"601-1000"})]}),Object(m.jsxs)("div",{id:"fl",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),Object(m.jsx)("label",{children:"1001-1500"})]})]})})})})}}]),n}(c.Component),C=k;n(114);var _=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("header",{id:"header",children:[Object(m.jsx)("div",{id:"logo_main",children:Object(m.jsx)(i.b,{to:"/",children:Object(m.jsxs)("p",{id:"heading",children:["Ed",Object(m.jsx)("sup",{className:"umato",children:"umato"})]})})}),Object(m.jsxs)("div",{id:"social",children:[Object(m.jsx)(i.b,{to:"/",id:"login",children:"Login"}),Object(m.jsx)("a",{href:"#",id:"createaccount",children:"Create an account"})]})]})})},S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this)).setDataAsPerFilter=function(e){c.setState({restaurantList:e})},c.state={restaurantList:""},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"filters-section",children:[Object(m.jsx)(g,{restPerCuisine:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)(C,{restPerCost:function(t){e.setDataAsPerFilter(t)}})]}),Object(m.jsx)(p,{listData:this.state.restaurantList})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://apiforeveryone.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),n}(c.Component);function w(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{class:"container",children:[Object(m.jsxs)("h1",{style:{margin:"50px 0px"},children:["Your restaurants is in your hands. ",Object(m.jsx)("span",{id:"order_now",children:"Order Now"})]}),Object(m.jsx)("h1",{style:{margin:"50px 0px"},children:"Quick Search"}),Object(m.jsx)("div",{class:"row",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(m.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(m.jsx)("div",{class:"col-sm-6 col-md-4",children:Object(m.jsxs)("div",{class:"thumbnail",children:[Object(m.jsx)("img",{src:e.meal_image,alt:"..."}),Object(m.jsx)("div",{class:"caption",children:Object(m.jsx)("h3",{children:e.mealtype})})]})},e.mealtype_id)})}))}(e)})]})})}n(74);var N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={QuickData:""},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(w,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://apiforeveryone.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),n}(c.Component),I={display:"inline-block",marginRight:"3px"},D={float:"right"},F={color:"#fff"},P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(m.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},c.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(m.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name,"| ",e.address]})}))},c.handleCity=function(e){var t=e.target.value;fetch("".concat("https://apiforeveryone.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){c.setState({restaurant:e})}))},c.handleRest=function(e){c.props.history.push("/details/".concat(e.target.value))},c.state={location:"",restaurant:""},c}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(m.jsxs)("div",{class:"background",children:[Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-save",style:F}),Object(m.jsx)("button",{class:"login",children:"Get App"}),Object(m.jsxs)("div",{style:D,children:[Object(m.jsx)("button",{class:"login",children:"Log In"}),Object(m.jsx)("button",{class:"signup",children:"Sign Up"})]})]}),Object(m.jsx)("div",{class:"homelogo text-center",children:Object(m.jsx)("strong",{children:"e!"})}),Object(m.jsx)("header",{children:"Discover the best food & drinks in Delhi NCR "}),Object(m.jsxs)("div",{class:"dropdown-block",children:[Object(m.jsx)("div",{style:I,children:Object(m.jsxs)("select",{class:"home-dropdown",onChange:this.handleCity,children:[Object(m.jsx)("option",{children:"select your city"}),this.renderCity(this.state.location)]})}),Object(m.jsxs)("div",{id:"restaurant_searchbox",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-search search"}),Object(m.jsx)("select",{class:"input-box",onChange:this.handleRest,children:this.renderRestaurants(this.state.restaurant)})]})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://apiforeveryone.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({location:t})}))}}]),n}(c.Component),R=Object(l.e)(P);var A=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(R,{}),Object(m.jsx)(N,{})]})},T=n(63),L=n.n(T),M=n(79),E=(n(116),n(32)),z=(n(117),n(58)),B=n.n(z),Q=[],J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).placeOrder=function(e){Q.push(e),c.props.finalOrder(Q),c.state.cartShow=c.state.cartShow+1},c.removeOrder=function(e){Q.splice(Q.indexOf(e.toString()),1),c.props.finalOrder(Q),c.state.cartShow>0?c.state.cartShow=c.state.cartShow-1:c.state.cartShow=Number(0)},c.renderMenu=function(e){var t=e.menudata;return t?t.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("img",{src:e.menu_image,style:{height:100,width:100,borderRadius:50}}),e.menu_name," -Rs ",e.menu_price," ----20%Off"]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){c.placeOrder(e.menu_id)},children:"Add"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){c.removeOrder(e.menu_id)},children:"Remove"})]})]},e.menu_id),Object(m.jsx)("hr",{})]})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)("img",{src:"../loading2.gif",style:{height:200,width:200}})})})},c.state={orders:[],cartShow:Number(0)},c}return Object(o.a)(n,[{key:"render",value:function(){return console.log("menu>>>>>",this.props),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)(B.a,{style:{height:40,width:40,color:"green"}}),this.state.cartShow]}),this.renderMenu(this.props)]})})}}]),n}(c.Component),q=Object(l.e)(J),G=n(145),U=n(146),W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).addToCart=function(t){e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:"",cart:"empty cart"},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;console.log("details>>>>>",this.state.details);var t=this.state.details;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsxs)("div",{className:"rest_details",children:[Object(m.jsx)("div",{id:"rest_image",children:Object(m.jsx)("img",{src:t.restaurant_thumb})}),Object(m.jsxs)("div",{id:"rest_content",children:[Object(m.jsx)("h2",{children:t.restaurant_name}),Object(m.jsx)("h4",{children:t.address}),Object(m.jsxs)("h4",{children:["Quality : ",t.rating_text]}),Object(m.jsx)(G.a,{label:"fast food"}),Object(m.jsx)(G.a,{label:"street food",variant:"outlined"}),Object(m.jsx)(G.a,{label:"Breakfast"}),Object(m.jsx)(G.a,{label:"Dinner",variant:"outlined"})]})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(E.d,{children:[Object(m.jsxs)(E.b,{children:[Object(m.jsx)(E.a,{children:"Menu"}),Object(m.jsx)(E.a,{children:"Contact"}),Object(m.jsx)(E.a,{children:"Details"})]}),Object(m.jsxs)(E.c,{children:[Object(m.jsx)("h2",{style:{color:"green",fontSize:20},children:"Menu "}),Object(m.jsx)(q,{menudata:this.state.menuList,restId:this.props.match.params.restId,finalOrder:function(t){e.addToCart(t)}})]}),Object(m.jsxs)(E.c,{children:[Object(m.jsx)("h2",{children:t.address}),Object(m.jsx)("h3",{children:"hello"})]}),Object(m.jsxs)(E.c,{children:[Object(m.jsx)("h2",{children:"Details heere"}),Object(m.jsx)("h2",{children:t.rating_text})]})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("center",{children:[Object(m.jsx)(U.a,{style:{marginRight:10},variant:"contained",size:"large",color:"primary",onClick:this.proceed,children:"Proceed"}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)(U.a,{variant:"contained",size:"large",color:"primary",children:"Back"})})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(M.a)(L.a.mark((function e(){var t,n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://apiforeveryone.herokuapp.com/details/").concat(t));case 3:return n=e.sent,e.next=6,u.a.get("".concat("https://apiforeveryone.herokuapp.com/menu/").concat(t));case 6:c=e.sent,console.log(n.data),console.log(c.data),this.setState({details:n.data[0],menuList:c.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(c.Component),Y=W,H=n(4),K=(n(118),n(80)),V=n.n(K),X=n(143),Z=n(150),$=n(149),ee=n(148),te=n(147),ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).handleChange=function(e){c.setState(Object(H.a)({},e.target.name,e.target.value))},c.handleSubmit=function(){fetch("https://apiforeveryone.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(c.state)}).then(c.props.history.push("/viewOrder"))},c.renderItems=function(e){return e?e.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"item_box",children:Object(m.jsxs)(X.a,{sx:{maxWidth:345},children:[Object(m.jsx)(ee.a,{component:"img",alt:"image_restaurant",height:"150",image:e.menu_image}),Object(m.jsxs)($.a,{style:{height:100,width:300},children:[Object(m.jsx)(te.a,{gutterBottom:!0,variant:"h3",component:"div",style:{color:"black"},children:e.menu_name}),Object(m.jsx)(te.a,{variant:"h5",color:"text.primary",children:e.menu_price})]}),Object(m.jsxs)(Z.a,{children:[Object(m.jsx)(U.a,{size:"large",children:"Delete"}),Object(m.jsx)(U.a,{size:"large",children:"Learn More"})]})]})})})})):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:"../loading2.gif",style:{height:150,width:150,marginLeft:500}}),Object(m.jsx)("h2",{style:{height:150,width:150,marginLeft:500},children:"please wait..."})]})},c.state={details:"",tPrice:"",hotel_name:c.props.match.params.restName,name:"",phone:"",email:"",address:"",status:"Pending"},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:["order from ",this.props.match.params.restName," is below"]}),Object(m.jsx)("div",{class:"row form-div",children:Object(m.jsxs)("div",{class:"col-md-12",children:[Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{class:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"E-mail"}),Object(m.jsx)("input",{class:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Phone no"}),Object(m.jsx)("input",{class:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]}),Object(m.jsxs)("div",{class:"form-group col-md-6",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{class:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]}),Object(m.jsx)("button",{onClick:this.handleSubmit,class:"btn btn-success",children:"Checkout"})]})})]}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("h4",{children:"Orders"}),this.renderItems(this.state.details),Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsxs)("h2",{children:["Total order cost is Rs: ",this.state.tPrice]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)(U.a,{size:"large",variant:"contained",color:"primary",children:"\xa0Back"})}),"\xa0",Object(m.jsxs)(U.a,{size:"large",variant:"contained",color:"secondary",children:[Object(m.jsx)(V.a,{}),"\xa0Order"]}),"\xa0"]})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),n=[];t.split(",").map((function(e){return n.push(parseInt(e)),"ok"})),fetch("https://apiforeveryone.herokuapp.com/menuItem",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){var n=0;t.map((function(e){return n+=parseInt(e.menu_price),"ok"})),e.setState({details:t,tPrice:n})}))}}]),n}(c.Component),ce=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Orders"})}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Rest Name"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Address"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsx)("th",{children:"Status"})]})}),Object(m.jsx)("tbody",{children:function(e){var t=e.orderData;return t?t.map((function(e){return Object(m.jsxs)("tr",{style:{color:"",backgroundColor:"#CAD5E2"},children:[Object(m.jsx)("td",{children:e.hotel_name}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.address}),Object(m.jsxs)("td",{children:["Rs:",e.tPrice]}),Object(m.jsx)("td",{children:e.status})]})})):Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)("img",{src:"./loading2.gif",style:{height:200,width:200}})})})}(e)})]}),Object(m.jsx)("h3",{children:"Refresh page to be data updated...."})]})},se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={orders:""},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"All orders list -"}),Object(m.jsx)(ce,{orderData:this.state.orders})]})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://apiforeveryone.herokuapp.com/viewOrder").then((function(t){e.setState({orders:t.data})}))}}]),n}(c.Component),re=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:A}),Object(m.jsx)(l.a,{path:"/list/:mealId",component:S}),Object(m.jsx)(l.a,{path:"/details/:restId",component:Y}),Object(m.jsx)(l.a,{path:"/placeOrder/:restName",component:ne}),Object(m.jsx)(l.a,{path:"/vieworder",component:se})]})};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(re,{})}),document.getElementById("root"))},53:function(e,t,n){},74:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.e60f2a12.chunk.js.map