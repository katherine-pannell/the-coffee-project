(function(e){function t(t){for(var n,o,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/the-coffee-project/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0083":function(e,t,r){"use strict";r("8069")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{title:"The Coffee Project"}}),n("Topnav"),n("Sidebar"),n("Rightnav"),n("div",{staticClass:"main"},[n("img",{attrs:{alt:"Vue logo",src:r("9a85")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)],1)},s=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Manual Brews")]),r("p",[e._v(" Just some info on different manual brewing methods. ")]),r("h2",{attrs:{id:"aeropress"}},[e._v("Aeropress")]),r("p",[e._v("Some Aerporess info.")]),r("h3",{attrs:{id:"brew-time"}},[e._v("Brew time")]),r("p",[e._v("Info on brew time and all that goodness.")]),r("h3",{attrs:{id:"grind-size"}},[e._v("Grind size")]),r("p",[e._v("Grind size can make or break your cup.")]),r("h3",{attrs:{id:"water-temp"}},[e._v("Water temperature")]),r("p",[e._v("Info on how much you should heat your water.")]),r("h3",{attrs:{id:"method"}},[e._v("Method")]),r("p",[e._v("To mix or not to mix is the question and even then, swirl or stir?")]),r("h2",{attrs:{id:"v60"}},[e._v("V60")]),r("p",[e._v("Some V60 info.")]),r("h2",{attrs:{id:"espresso"}},[e._v("Espresso")]),r("p",[e._v("Some espresso info.")]),r("h2",{attrs:{id:"chemex"}},[e._v("Aeropress")]),r("p",[e._v("Some Chemex info.")])])}],l={name:"HelloWorld",props:{msg:String}},u=l,c=(r("0083"),r("2877")),f=Object(c["a"])(u,o,i,!1,null,"68fe0c54",null),p=f.exports,d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v(e._s(e.title))])])},v=[],h={name:"Header",props:{title:String}},m=h,_=Object(c["a"])(m,d,v,!1,null,null,null),b=_.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidenav"},[r("a",{attrs:{href:"#aeropress"}},[e._v("Aeropress")]),r("br"),r("a",{attrs:{href:"#v60"}},[e._v("V60")]),r("br"),r("a",{attrs:{href:"#espresso"}},[e._v("Espresso")]),r("br"),r("a",{attrs:{href:"#chemex"}},[e._v("Chemex")])])}],w={name:"Sidebar"},x=w,j=Object(c["a"])(x,y,g,!1,null,null,null),O=j.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topnav"},[r("a",{attrs:{href:"#"}},[e._v("Table of Contents")]),r("a",{attrs:{href:"#"}},[e._v("Manual Brews")]),r("a",{attrs:{href:"#"}},[e._v("Machines")]),r("a",{attrs:{href:"#"}},[e._v("Beans")])])}],T={name:"Topnav"},$=T,k=Object(c["a"])($,S,E,!1,null,null,null),C=k.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rightnav"},[r("a",{attrs:{href:"#brew-time"}},[e._v("Brew time")]),r("br"),r("a",{attrs:{href:"#grind-size"}},[e._v("Grind size")]),r("br"),r("a",{attrs:{href:"#water-temp"}},[e._v("Water temperature")]),r("br"),r("a",{attrs:{href:"#method"}},[e._v("Method")])])}],A={name:"Rightnav"},H=A,W=Object(c["a"])(H,M,P,!1,null,null,null),z=W.exports,B={name:"App",components:{HelloWorld:p,Header:b,Sidebar:O,Topnav:C,Rightnav:z},data:function(){return{tasks:[]}},created:function(){this.tasks=[{id:1,text:"Task 1",day:"all day errday",reminder:!0},{id:2,text:"Task 2",day:"all day errday",reminder:!0},{id:3,text:"Task 3",day:"all day errday",reminder:!1}]}},V=B,G=(r("034f"),Object(c["a"])(V,a,s,!1,null,null,null)),J=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(J)}}).$mount("#app")},8069:function(e,t,r){},"85ec":function(e,t,r){},"9a85":function(e,t,r){e.exports=r.p+"img/coffee.1873e76b.jpg"}});
//# sourceMappingURL=app.fdc83fa9.js.map