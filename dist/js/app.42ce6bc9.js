(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("1356"),a=i.n(n);a.a},1356:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("bb71");i("da64");n["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-content",[i("v-menu",{attrs:{nudgeRight:t.menuX,nudgeBottom:t.menuY,attach:"#map",absolute:"","offset-y":"",left:t.menuLeft,right:t.menuRight,top:t.menuTop,bottom:t.menuBottom},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-list",{attrs:{dense:""}},[i("v-list-tile",{on:{click:t.setTripOrigin}},[i("v-list-tile-avatar",[i("v-icon",[t._v("trip_origin")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("From")])],1)],1),i("v-list-tile",{on:{click:t.setTripWaypoint}},[i("v-list-tile-avatar",[i("v-icon",[t._v("add_circle")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Via")])],1)],1),i("v-list-tile",{on:{click:t.setTripDestination}},[i("v-list-tile-avatar",[i("v-icon",[t._v("place")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("To")])],1)],1)],1)],1),i("div",{attrs:{id:"panel"}},[i("v-list",{attrs:{dense:""}},[i("v-list-tile",[i("v-list-tile-avatar",[i("v-icon",[t._v("trip_origin")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Origin")]),i("v-list-tile-sub-title",[t._v(t._s(t.origin))])],1)],1),t._l(t.waypoints,function(e,n){return t.waypoints.length?i("v-list-tile",[i("v-list-tile-avatar",[i("v-icon",[t._v("add_circle")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Waypoint "+t._s(n+1))]),i("v-list-tile-sub-title",[t._v(t._s(e))])],1)],1):t._e()}),i("v-list-tile",[i("v-list-tile-avatar",[i("v-icon",[t._v("place")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Destination")]),i("v-list-tile-sub-title",[t._v(t._s(t.destination))])],1)],1)],2),i("v-layout",{attrs:{row:"",wrap:"","ma-4":""}},[i("v-flex",{attrs:{xs12:""}},[i("h4",[t._v("Display")])]),i("v-flex",{attrs:{xs12:""}},[i("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[i("v-btn",{attrs:{flat:"",value:"none"}},[t._v("\n                    None\n                ")]),i("v-btn",{attrs:{flat:"",value:"speed"}},[t._v("\n                    Speed\n                ")]),i("v-btn",{attrs:{flat:"",value:"congestion"}},[t._v("\n                    Congestion\n                ")])],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:"","ma-4":""}},[i("v-flex",{attrs:{xs12:""}},[i("h4",[t._v("Profile")])]),i("v-flex",{attrs:{xs12:""}},[i("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{flat:"",value:"driving-traffic"}},n),[i("v-badge",{attrs:{color:"black",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("v-icon",{attrs:{color:"white",small:""}},[t._v("watch_later")])]},proxy:!0}],null,!0)},[i("v-icon",[t._v("directions_car")])],1)],1)]}}])},[i("span",[t._v("Driving with Traffic")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{flat:"",value:"driving"}},n),[i("v-icon",[t._v("directions_car")])],1)]}}])},[i("span",[t._v("Driving")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{flat:"",value:"cycling"}},n),[i("v-icon",[t._v("directions_bike")])],1)]}}])},[i("span",[t._v("Cycling")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{flat:"",value:"walking"}},n),[i("v-icon",[t._v("directions_walk")])],1)]}}])},[i("span",[t._v("Walking")])])],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:"","ma-4":""}},[i("v-flex",{attrs:{xs12:"","mb-2":""}},[i("v-checkbox",{attrs:{label:"Show Alternatives"},model:{value:t.alternatives,callback:function(e){t.alternatives=e},expression:"alternatives"}})],1),i("v-flex",{attrs:{xs12:"","mb-2":""}},[i("v-checkbox",{attrs:{disabled:0===t.waypoints.length,label:"Continue Straight"},model:{value:t.continueStraight,callback:function(e){t.continueStraight=e},expression:"continueStraight"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-checkbox",{attrs:{disabled:"walking"===t.mode||"cycling"===t.mode,label:"Avoid Tolls"},model:{value:t.avoidToll,callback:function(e){t.avoidToll=e},expression:"avoidToll"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-checkbox",{attrs:{disabled:"walking"===t.mode||"cycling"===t.mode,label:"Avoid Motorways"},model:{value:t.avoidMotorway,callback:function(e){t.avoidMotorway=e},expression:"avoidMotorway"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-checkbox",{attrs:{disabled:"walking"===t.mode,label:"Avoid Ferries"},model:{value:t.avoidFerry,callback:function(e){t.avoidFerry=e},expression:"avoidFerry"}})],1)],1),i("v-alert",{attrs:{value:t.error,type:"error"}},[t._v("\n            The Mapbox Directions API responded with an error.\n        ")]),t.routes?i("v-expansion-panel",{model:{value:t.selectedRoute,callback:function(e){t.selectedRoute=e},expression:"selectedRoute"}},t._l(t.routes.features,function(e,n){return i("v-expansion-panel-content",{key:n,scopedSlots:t._u([{key:"header",fn:function(){return[i("div",[i("v-avatar",{staticClass:"mr-2",attrs:{color:"#4264fb",size:"28"}},[i("span",{staticClass:"white--text headline"},[t._v(t._s(n+1))])]),i("div",[t._v(t._s(e.properties.legs[0].summary))]),i("div",[t._v("\n                        "+t._s(t.formatDistance(e.properties.legs[0].distance))+"\n                        "+t._s(t.formatDuration(e.properties.legs[0].duration))+"\n                        ")])],1)]},proxy:!0}],null,!0)},[i("v-card",[i("v-card-text",[t._v("\n                        "+t._s(t.formatDistance(e.properties.legs[0].distance))+"\n                        "+t._s(t.formatDuration(e.properties.legs[0].duration))+"\n                    ")])],1)],1)}),1):t._e(),i("v-textarea",{staticClass:"ma-4",attrs:{box:"",label:"Mapbox API URL",value:t.mapboxUrl,readonly:""}}),i("v-layout",{attrs:{"ma-4":""}},[i("a",{attrs:{rel:"noopener",target:"_blank",href:t.googleMapsUrl}},[i("v-icon",[t._v("open_in_new")]),t._v("\n                Google Maps\n            ")],1)])],1),i("div",{attrs:{id:"map"}})],1)],1)},r=[],s=(i("28a5"),i("7f7f"),i("75fc")),l=(i("6b54"),i("20d6"),i("c5f6"),i("386d"),i("e192")),u=i.n(l),c=(i("ac6d"),i("409f")),d=i.n(c),p=new URLSearchParams(window.location.search);u.a.accessToken=p.get("access_token")||localStorage.getItem("MapboxAccessToken");var v=i("2a42"),m=v({accessToken:u.a.accessToken}),f=new Intl.NumberFormat("en-AU",{maximumFractionDigits:1}),h={name:"App",mounted:function(){var t=this;this.map=new u.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[0,0],zoom:0,hash:!0}),this.map.on("load",this.mapLoaded);var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttributeNS(null,"display","block"),e.setAttributeNS(null,"width","20px"),e.setAttributeNS(null,"height","20px"),e.setAttributeNS(null,"viewBox","0 0 20 20");var i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttributeNS(null,"r","7.25"),i.setAttributeNS(null,"cy","8"),i.setAttributeNS(null,"cx","8"),i.setAttributeNS(null,"color","#000000"),i.setAttributeNS(null,"stroke","#ffffff"),i.setAttributeNS(null,"stroke-width","1.5"),e.appendChild(i),this.originMarker=new u.a.Marker({element:e,draggable:!0}),this.destinationMarker=new u.a.Marker({color:"#4264fb",draggable:!0}),this.originMarker.on("dragend",function(){t.origin=t.originMarker.getLngLat().toArray().map(function(t){return Number(t.toFixed(5))})}),this.destinationMarker.on("dragend",function(){t.destination=t.destinationMarker.getLngLat().toArray().map(function(t){return Number(t.toFixed(5))})})},watch:{selectedRoute:function(t,e){var i=this.routes.features.length,n=this.routes.features.findIndex(function(e){return e.id===t+1});this.routes.features.splice(i,0,this.routes.features.splice(n,1)[0]),this.map.getSource("route").setData(this.routes),null!==e&&this.map.removeFeatureState({source:"route",id:e+1},"active"),null!==t&&this.map.setFeatureState({source:"route",id:t+1},{active:!0})},origin:function(t){this.originMarker.setLngLat(t).addTo(this.map),this.updateDirections(),p.set("origin",t.join(",")),this.updateUrl()},destination:function(t){this.destinationMarker.setLngLat(t).addTo(this.map),this.updateDirections(),p.set("destination",t.join(",")),this.updateUrl()},waypoints:function(t){this.updateDirections(),p.set("waypoints",t.map(function(t){return t.join(",")}).join(";")),this.updateUrl()},avoidToll:function(t){this.updateDirections(),p.set("avoidtoll",t),this.updateUrl()},avoidMotorway:function(t){this.updateDirections(),p.set("avoidmotorway",t),this.updateUrl()},avoidFerry:function(t){this.updateDirections(),p.set("avoidferry",t),this.updateUrl()},routes:function(t){t&&(this.map.fitBounds(d()(t),{padding:100}),console.log(t),t.features=t.features.map(function(t){return t.geometry.coordinates,t})),this.map.getSource("route").setData(t||{type:"FeatureCollection",features:[]})},alternatives:function(t){this.updateDirections(),p.set("alternatives",t),this.updateUrl()},mode:function(t){this.updateDirections(),p.set("mode",this.mode),this.updateUrl()}},components:{},computed:{googleMapsUrl:function(){var t={driving:"!4m2!4m1!3e0","driving-traffic":"!4m2!4m1!3e0",cycling:"!4m2!4m1!3e1",walking:"!4m2!4m1!3e2"};return this.origin&&this.destination?"https://www.google.com.au/maps/dir/".concat(this.origin.slice().reverse(),"/").concat(this.destination.slice().reverse(),"/data=").concat(t[this.mode]):""},mapboxUrl:function(){return'curl -d "" "https://api.mapbox.com/directions/v5/mapbox/'.concat(this.mode,"?access_token=").concat(u.a.accessToken,'"')},excludes:function(){var t=[];return this.avoidToll&&t.push("toll"),this.avoidMotorway&&t.push("motorway"),this.avoidFerry&&t.push("ferry"),t.join(",")}},methods:{updateUrl:function(){history.pushState(null,"",window.location.pathname+"?"+p.toString())},formatDistance:function(t){return t>=1e3?f.format(t/1e3)+"km":f.format(t)+"m"},formatDuration:function(t){var e=t/60,i=Math.floor(e/60),n=Math.round(e-60*Math.floor(e/60));return[i?"".concat(i,"hr"):"",n?"".concat(n,"min"):""].join(" ")},updateDirections:function(){var t=this;this.origin&&this.destination&&m.getDirections({profile:this.mode,waypoints:[this.origin].concat(Object(s["a"])(this.waypoints),[this.destination]).map(function(t){return{coordinates:t}}),alternatives:this.alternatives,exclude:this.excludes,annotations:["duration","distance","speed","congestion"],bannerInstructions:!0,geometries:"geojson",overview:"full",steps:!0}).send().then(function(e){t.error=null;var i=e.body;t.routes={type:"FeatureCollection",features:i.routes.map(function(t,e){return{type:"Feature",id:e+1,properties:{distance:t.distance,duration:t.duration,weight:t.weight,weight_name:t.weight_name,legs:t.legs},geometry:t.geometry}})},t.map.getSource("waypoints").setData({type:"FeatureCollection",features:i.waypoints.map(function(t){return{type:"Feature",properties:{name:t.name},geometry:{type:"Point",coordinates:t.location}}})}),t.selectedRoute=0,console.log(i)},function(e){t.error=e,t.routes=null})},mapLoaded:function(){this.map.addSource("origin",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),this.map.addLayer({id:"origin",type:"circle",source:"origin"}),this.map.addSource("waypoints",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),this.map.addLayer({id:"waypoints",type:"circle",source:"waypoints"}),this.map.addSource("route",{type:"geojson",buffer:16,lineMetrics:!0,data:{type:"FeatureCollection",features:[]}}),this.map.addLayer({id:"route-wireframe",type:"circle",source:"route",paint:{"circle-radius":2}}),this.map.addLayer({id:"route",type:"line",source:"route",paint:{"line-width":8,"line-color":["case",["boolean",["feature-state","active"],!1],"#4264fb","#aaa"],"line-opacity":["case",["boolean",["feature-state","active"],!1],1,1]}},"building-number-label"),this.map.addLayer({id:"route-outer",type:"line",source:"route",paint:{"line-width":2,"line-gap-width":8,"line-color":["case",["boolean",["feature-state","active"],!1],"#fff","#eee"]}},"route"),this.map.addLayer({id:"route-label",type:"symbol",source:"route",paint:{"text-halo-color":"rgba(255, 255, 255, 255)","text-halo-width":2,"text-opacity":["case",["boolean",["feature-state","active"],!1],1,.5]},layout:{"text-field":["id"],"symbol-placement":"line-center"}}),this.map.on("click",this.mapClick),p.has("origin")&&(this.origin=p.get("origin").split(",").map(Number)),p.has("destination")&&(this.destination=p.get("destination").split(",").map(Number)),p.has("mode")&&(this.mode=p.get("mode"))},mapClick:function(t){this.menuX=t.point.x,this.menuY=t.point.y,this.menuLL=t.lngLat.toArray().map(function(t){return Number(t.toFixed(5))}),this.menu=!0;var e=document.getElementById("map");t.point.x>e.clientWidth/2?(this.menuRight=!1,this.menuLeft=!0):(this.menuRight=!0,this.menuLeft=!1),t.point.y>e.clientHeight/2?(this.menuTop=!0,this.menuBottom=!1):(this.menuTop=!1,this.menuBottom=!0)},setTripOrigin:function(){this.origin=this.menuLL},setTripWaypoint:function(){this.waypoints.push(this.menuLL)},setTripDestination:function(){this.destination=this.menuLL}},data:function(){return{origin:null,destination:null,waypoints:[],mode:0,avoidToll:!1,avoidMotorway:!1,avoidFerry:!1,alternatives:!0,continueStraight:!1,routes:null,error:null,selectedRoute:null,menu:!1,menuX:0,menuY:0,menuLL:null,menuLeft:!1,menuRight:!1,menuTop:!1,menuBottom:!1}}},g=h,y=(i("034f"),i("2877")),b=i("6544"),w=i.n(b),_=i("0798"),x=i("7496"),k=i("8212"),S=i("4ca6"),T=i("8336"),L=i("a609"),M=i("b0af"),D=i("99d9"),A=i("ac7c"),V=i("549c"),F=i("cd55"),j=i("49e2"),C=i("0e8f"),N=i("132d"),O=i("a722"),U=i("8860"),P=i("ba95"),R=i("c954"),B=i("5d23"),I=i("e449"),E=i("a844"),W=i("3a2f"),X=Object(y["a"])(g,o,r,!1,null,null,null),Y=X.exports;w()(X,{VAlert:_["a"],VApp:x["a"],VAvatar:k["a"],VBadge:S["a"],VBtn:T["a"],VBtnToggle:L["a"],VCard:M["a"],VCardText:D["a"],VCheckbox:A["a"],VContent:V["a"],VExpansionPanel:F["a"],VExpansionPanelContent:j["a"],VFlex:C["a"],VIcon:N["a"],VLayout:O["a"],VList:U["a"],VListTile:P["a"],VListTileAvatar:R["a"],VListTileContent:B["a"],VListTileSubTitle:B["b"],VListTileTitle:B["c"],VMenu:I["a"],VTextarea:E["a"],VTooltip:W["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.42ce6bc9.js.map