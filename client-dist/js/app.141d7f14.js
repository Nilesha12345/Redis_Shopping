(function(t){function e(e){for(var n,s,o=e[0],i=e[1],u=e[2],d=0,l=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},c=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"140b":function(t,e,r){t.exports=r.p+"img/e182115a-63d2-42ce-8fe0-5f696ecdfba6.b024b41e.jpg"},"1a74":function(t,e,r){t.exports=r.p+"img/97a19842-db31-4537-9241-5053d7c96239.3356499c.jpg"},2204:function(t,e,r){var n={"./1f1321bb-0542-45d0-9601-2a3d007d5842.jpg":"eb8f","./42860491-9f15-43d4-adeb-0db2cc99174a.jpg":"ec1e","./63a3c635-4505-4588-8457-ed04fbb76511.jpg":"79bb","./6d6ca89d-fbc2-4fc2-93d0-6ee46ae97345.jpg":"f005","./97a19842-db31-4537-9241-5053d7c96239.jpg":"1a74","./e182115a-63d2-42ce-8fe0-5f696ecdfba6.jpg":"140b","./efe0c7a3-9835-4dfb-87e1-575b7d06701a.jpg":"2981","./f5384efc-eadb-4d7b-a131-36516269c218.jpg":"7862","./f9a6d214-1c38-47ab-a61c-c99a59438b12.jpg":"6fde","./x341115a-63d2-42ce-8fe0-5f696ecdfca6.jpg":"74a0"};function a(t){var e=c(t);return r(e)}function c(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=c,t.exports=a,a.id="2204"},2981:function(t,e,r){t.exports=r.p+"img/efe0c7a3-9835-4dfb-87e1-575b7d06701a.e2ac5748.jpg"},"3c61":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62"),c=(r("b0c0"),r("96cf"),r("1da1")),s=r("bc3a"),o=r.n(s),i=r("f121"),u=o.a.create({baseURL:i["apiUrl"],withCredentials:!0}),p=u,d={products:[]},l=function(){return d},m={getProducts:function(t){return t.products}},f={setProducts:function(t,e){t.products=e}},v={fetch:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,p.get("/api/products");case 3:return n=e.sent,a=n.data,c=a.sort((function(t,e){return t.name.localeCompare(e.name)>0?1:t.name.localeCompare(e.name)<0?-1:0})),r("setProducts",c),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))()},reset:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,p.post("/api/products/reset");case 3:return e.next=5,r("fetch");case 5:return e.next=7,r("cart/fetch",null,{root:!0});case 7:case"end":return e.stop()}}),e)})))()}},b={state:l,getters:m,mutations:f,actions:v,namespaced:!0},h={items:[]},g=function(){return h},x={getItems:function(t){return t.items}},j={setItems:function(t,e){t.items=e}},w={fetch:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,p.get("/api/cart");case 3:return n=e.sent,a=n.data,r("setItems",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()},save:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,c,s,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.dispatch,a=e.id,c=e.quantity,s=e.incrementBy,r.next=4,p.put("/api/cart/".concat(a),{quantity:c,incrementBy:s});case 4:return o=r.sent,i=o.data,r.next=8,n("fetch");case 8:return r.next=10,n("products/fetch",null,{root:!0});case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})))()},delete:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.dispatch,r.next=3,p.delete("/api/cart/".concat(e));case 3:return r.next=5,n("fetch");case 5:return r.next=7,n("products/fetch",null,{root:!0});case 7:case"end":return r.stop()}}),r)})))()},empty:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,p.delete("/api/cart");case 3:return e.next=5,r("fetch");case 5:return e.next=7,r("products/fetch",null,{root:!0});case 7:case"end":return e.stop()}}),e)})))()}},y={state:g,getters:x,mutations:j,actions:w,namespaced:!0};n["a"].use(a["a"]);var C=new a["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{products:b,cart:y}}),O=r("f309");n["a"].use(O["a"]);var _=new O["a"]({}),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",{attrs:{id:"main-container"}},[r("v-row",{staticClass:"text-center mb-16"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("h1",{staticClass:"my-10 mx-auto",attrs:{id:"title"}},[t._v("Shopping cart demo")]),r("v-btn",{staticClass:"mx-auto",on:{click:t.resetData}},[t._v("Reset data")])],1)],1),r("v-row",[r("v-col",{staticClass:"pa-0",attrs:{cols:"12",sm:"6",md:"7",xl:"8"}},[r("product-list",{attrs:{products:t.products}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"5",xl:"4"}},[r("h2",{staticClass:"mb-4"},[t._v("Shopping cart")]),r("cart")],1)],1)],1)],1)},R=[],I=r("5530"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-3"},[r("v-row",{attrs:{id:"shopping-cart"}},[t.items.length?r("v-col",[r("h3",{staticClass:"mb-4"},[t._v("Cart contents")]),r("cart-list",{attrs:{items:t.items}}),r("p",{staticClass:"text-right"},[t._v(" Total: "),r("b",[t._v("£"+t._s(t.total))])])],1):r("v-col",[r("p",[t._v(" Cart is empty. Add items to cart ")])])],1),t.items.length?r("v-row",[r("v-btn",{attrs:{color:"red lighten-2"},on:{click:t.emptyCart}},[t._v("Empty cart")]),r("v-spacer"),r("v-btn",[t._v("Checkout")])],1):t._e()],1)},P=[],q=(r("d81d"),r("13d5"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",t._l(t.items,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12"}},[r("cart-item",{attrs:{item:e},on:{save:t.save,delete:t.remove}})],1)})),1)}),S=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",sm:"4"}},[n("v-img",{attrs:{src:r("2204")("./"+t.item.id+".jpg")}})],1),n("v-col",{staticClass:"pa-0 pl-3",attrs:{cols:"12",sm:"8"}},[n("small",{staticClass:"font-weight-bold"},[t._v(t._s(t.item.name))]),n("div",{staticClass:"d-flex flex-wrap"},[n("div",{staticClass:"d-flex"},[n("v-btn",{staticClass:"increment-button",attrs:{disabled:1===t.itemQuantity},on:{click:function(e){return t.incrementItem(-1)}}},[t._v("-")]),n("v-text-field",{staticClass:"quantity-input",attrs:{outlined:"",dense:""},on:{input:t.onItemQuantityChange},model:{value:t.itemQuantity,callback:function(e){t.itemQuantity=e},expression:"itemQuantity"}}),n("v-btn",{staticClass:"increment-button",attrs:{disabled:!t.item.stock},on:{click:function(e){return t.incrementItem(1)}}},[t._v("+")])],1),n("v-btn",{staticClass:"increment-button ml-2",attrs:{color:"red lighten-2"},on:{click:function(e){return t.deleteItem(t.item.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-spacer"),n("p",{staticClass:"ml-auto"},[t._v("£"+t._s(t.item.priceSum))])],1)])],1)],1)},E=[],Q={name:"CartItem",props:{item:{type:Object,required:!0}},data:function(){return{itemQuantity:0}},watch:{item:{immediate:!0,handler:function(t){this.itemQuantity=parseInt(t.quantity)}}},methods:{onItemQuantityChange:function(){this.$emit("save",{id:this.item.id,quantity:this.itemQuantity})},deleteItem:function(t){this.$emit("delete",t)},incrementItem:function(t){this.$emit("save",{id:this.item.id,incrementBy:t})}}},B=Q,T=r("2877"),A=r("6544"),L=r.n(A),M=r("8336"),U=r("62ad"),D=r("a523"),N=r("132d"),F=r("adda"),J=r("0fd9"),z=r("2fa4"),G=r("8654"),H=Object(T["a"])(B,$,E,!1,null,null,null),K=H.exports;L()(H,{VBtn:M["a"],VCol:U["a"],VContainer:D["a"],VIcon:N["a"],VImg:F["a"],VRow:J["a"],VSpacer:z["a"],VTextField:G["a"]});var W={name:"CartList",components:{CartItem:K},props:{items:{type:Array,required:!1,defaultValue:function(){return[]}}},methods:Object(I["a"])(Object(I["a"])({},Object(a["b"])({saveItems:"cart/save",deleteItem:"cart/delete"})),{},{save:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.saveItems(t);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},remove:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.deleteItem(t);case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}})},X=W,Y=Object(T["a"])(X,q,S,!1,null,null,null),Z=Y.exports;L()(Y,{VCol:U["a"],VRow:J["a"]});var tt={name:"Cart",components:{CartList:Z},computed:Object(I["a"])(Object(I["a"])({},Object(a["c"])({cartItems:"cart/getItems"})),{},{items:function(){return this.cartItems?this.cartItems.map((function(t){var e=t.quantity,r=t.product;return Object(I["a"])(Object(I["a"])({},r),{},{quantity:e,priceSum:e*r.price})})):[]},total:function(){return this.cartItems?this.cartItems.reduce((function(t,e){var r=e.quantity,n=e.product.price;return t+r*n}),0):0}}),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCart();case 2:case"end":return e.stop()}}),e)})))()},methods:Object(I["a"])({},Object(a["b"])({fetchCart:"cart/fetch",emptyCart:"cart/empty"}))},et=tt,rt=Object(T["a"])(et,V,P,!1,null,null,null),nt=rt.exports;L()(rt,{VBtn:M["a"],VCol:U["a"],VContainer:D["a"],VRow:J["a"],VSpacer:z["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.products.length?r("v-row",t._l(t.products,(function(e){return r("product",{key:e.id,attrs:{product:e},on:{add:t.addToCart}})})),1):r("v-row",[r("p",[t._v(" No products in store ")])])],1)},ct=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"product text-center",attrs:{cols:"12",sm:"6",md:"4"}},[n("div",{staticClass:"product-img"},[n("v-img",{attrs:{src:r("2204")("./"+t.product.id+".jpg")}}),n("div",{class:t.product.stock?"product-stock":"product-empty"},[t._v(t._s(t.product.stock))])],1),n("p",{staticClass:"font-weight-bold"},[t._v(t._s(t.product.name))]),t.product.stock?n("div",{staticClass:"body-2"},[n("p",[t._v("£"+t._s(t.product.price))]),n("v-btn",{staticClass:"body-2",on:{click:function(e){return t.$emit("add",t.product.id)}}},[t._v("Add to cart")])],1):t._e()])},ot=[],it={name:"Product",props:{product:{type:Object,required:!0}}},ut=it,pt=Object(T["a"])(ut,st,ot,!1,null,null,null),dt=pt.exports;L()(pt,{VBtn:M["a"],VCol:U["a"],VImg:F["a"]});var lt={name:"ProductList",props:{products:{type:Array,required:!1,defaultValue:function(){return[]}}},components:{Product:dt},methods:Object(I["a"])(Object(I["a"])({},Object(a["b"])({saveItem:"cart/save"})),{},{addToCart:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.saveItem({id:t,incrementBy:1});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}})},mt=lt,ft=Object(T["a"])(mt,at,ct,!1,null,null,null),vt=ft.exports;L()(ft,{VContainer:D["a"],VRow:J["a"]});var bt={name:"App",components:{ProductList:vt,Cart:nt},computed:Object(I["a"])({},Object(a["c"])({products:"products/getProducts"})),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchProducts();case 2:case"end":return e.stop()}}),e)})))()},methods:Object(I["a"])(Object(I["a"])({},Object(a["b"])({fetchProducts:"products/fetch",reset:"products/reset"})),{},{resetData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.reset();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}})},ht=bt,gt=r("7496"),xt=Object(T["a"])(ht,k,R,!1,null,null,null),jt=xt.exports;L()(xt,{VApp:gt["a"],VBtn:M["a"],VCol:U["a"],VContainer:D["a"],VRow:J["a"]});r("3c61");n["a"].config.productionTip=!1,new n["a"]({vuetify:_,store:C,render:function(t){return t(jt)}}).$mount("#app")},"6fde":function(t,e,r){t.exports=r.p+"img/f9a6d214-1c38-47ab-a61c-c99a59438b12.fb6ae991.jpg"},"74a0":function(t,e,r){t.exports=r.p+"img/x341115a-63d2-42ce-8fe0-5f696ecdfca6.7a2c0ad5.jpg"},7862:function(t,e,r){t.exports=r.p+"img/f5384efc-eadb-4d7b-a131-36516269c218.96b7670b.jpg"},"79bb":function(t,e,r){t.exports=r.p+"img/63a3c635-4505-4588-8457-ed04fbb76511.ca867c58.jpg"},eb8f:function(t,e,r){t.exports=r.p+"img/1f1321bb-0542-45d0-9601-2a3d007d5842.64837cbc.jpg"},ec1e:function(t,e,r){t.exports=r.p+"img/42860491-9f15-43d4-adeb-0db2cc99174a.a4479191.jpg"},f005:function(t,e,r){t.exports=r.p+"img/6d6ca89d-fbc2-4fc2-93d0-6ee46ae97345.6bd92ba0.jpg"},f121:function(t,e,r){t.exports={apiUrl:""}}});
//# sourceMappingURL=app.141d7f14.js.map