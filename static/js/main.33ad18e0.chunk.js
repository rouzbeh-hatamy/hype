(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{36:function(e,a,t){e.exports=t(79)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo-can.b4613356.png"},61:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/logo-footer.d2f4aeda.png"},68:function(e,a,t){},69:function(e,a,t){e.exports=t.p+"static/media/hype.228e900b.mp4"},70:function(e,a,t){e.exports=t.p+"static/media/type3.8f9286e2.png"},71:function(e,a,t){e.exports=t.p+"static/media/type2.702e0027.png"},72:function(e,a,t){e.exports=t.p+"static/media/type4.4fcaf553.png"},73:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){e.exports=t.p+"static/media/pic.c28c4f5f.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/hemi.648605b9.ttf"},79:function(e,a,t){"use strict";t.r(a);t(37);var n=t(0),c=t.n(n),l=t(32),r=t.n(l),s=(t(42),t(11)),o=t(3);t(43);var m=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:t(44),alt:"can",className:"can"}),c.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 565.88 136.87"},c.a.createElement("defs",null),c.a.createElement("path",{className:"cls-1",d:"M632.49,422h39.18l-6.1,47.77,36,0L707.68,422h39.19L729.55,557.51H690.37l6.86-53.71-36,0-6.87,53.75H615.17L632.49,422Z"}),c.a.createElement("path",{className:"cls-2",d:"M887.75,510.66l11.35-90H856.4L851.65,470l-26.48,0c-4.88-.27-7.62-4-7.11-9.88l3.31-39.45H781.21l-4.74,47.72c-.63,17.42,8.25,30.2,25.73,34.93l46.25-.13-.05.52c-2.16,14.53-6.13,20-15.58,20H777.41l-3.62,33.79h69.43c21.14.3,41-15.28,44.53-46.85Z"}),c.a.createElement("g",{className:"cl-3"},c.a.createElement("path",{className:"cls-31",d:"M988.31,420.64h19.13c22.52,0,38,18.15,34.44,40.33l-3,18.84c-3.58,22.18-24.92,40.33-47.44,40.33H972.28a38.12,38.12,0,0,1-12.9-2.18l-3.86,39.55H912.26l11.51-90c3.56-31.58,23.69-47.15,45.11-46.85Z"}),c.a.createElement("path",{className:"cls-32",d:"M976.35,482.69h14.52c5.43,0,10.45-3.73,11.16-8.29l1.9-12.19c.71-4.56-3.16-8.29-8.58-8.29H980.83c-5.43,0-10.45,3.73-11.16,8.29l-1.9,12.19v.1l-1.27,8.19Z"})),c.a.createElement("path",{className:"cls-4",d:"M1163.77,557.51l4.79-37.82h-60.73a1.33,1.33,0,0,1-1.36-1.37l1-12.67a1.41,1.41,0,0,1,1.37-1.36h55.6l3.17-30.13h-55V465.7a5.6,5.6,0,0,1,5.58-5.58h57.94l5-39.25h-59c-24.89,0-47.68,19.29-50.67,42.87L1065,514.63c-3,23.59,14.93,42.88,39.81,42.88h59Z"})))},i=t(83),u=t(13),E=t(33),d=t.n(E),h=t(80),p=(t(61),t(34)),v=t.n(p);var f=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){return l(e.data)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{xs:1,md:2,xl:3},c.a.createElement("div",{class:"container-posts container"},t.map((function(e){return c.a.createElement(v.a,{pageStart:0,hasMore:!0,loader:c.a.createElement("div",{className:"loader",key:0},"Loading ...")},c.a.createElement("div",{class:"post"},c.a.createElement("div",{class:"header_post"},c.a.createElement("img",{src:"https://picsum.photos/id/".concat(e.id,"/200/300"),alt:""})),c.a.createElement("div",{class:"body_post"},c.a.createElement("div",{class:"post_content"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.body),c.a.createElement("div",{class:"container_infos"},c.a.createElement("div",{class:"postedBy"},c.a.createElement("span",null,"author"),"rouzbeh"),c.a.createElement("div",{class:"container_tags"},c.a.createElement("span",null,"tags"),c.a.createElement("div",{class:"tags"},c.a.createElement("ul",null,c.a.createElement("li",null,"design"),c.a.createElement("li",null,"front end")))))))))})))))},N=t(81),g=t(82);var b=function(e){var a=Object(n.useState)("1"),t=Object(u.a)(a,2),l=t[0],r=t[1],o=function(e){l!==e&&r(e)};return c.a.createElement(N.a,{fill:!0,tabs:!0,className:"navbaar"},c.a.createElement(g.a,null,c.a.createElement(s.b,{to:"/",className:"nav-link ".concat("1"===l?"active":""),onClick:function(){o("1")}},"Home")),c.a.createElement(g.a,null,c.a.createElement(s.b,{to:"/posts",className:"nav-link ".concat("2"===l?"active":""),onClick:function(){o("2")}},"Blog")),c.a.createElement(g.a,null,c.a.createElement(s.b,{to:"/about",className:"nav-link ".concat("3"===l?"active":""),onClick:function(){o("3")}},"About US")),c.a.createElement(g.a,null,c.a.createElement(s.b,{to:"/contact",className:"nav-link ".concat("4"===l?"active":""),onClick:function(){o("4")}},"Contact US")))};var w=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("img",{className:"footer-logo",src:t(67),alt:""}))};t(68);var y=function(){return c.a.createElement("div",{className:"Home-div"},c.a.createElement("video",{autoPlay:!0,className:"video",loop:!0},c.a.createElement("source",{src:t(69),type:"video/mp4"}),c.a.createElement("source",{src:"movie.ogg",type:"video/ogg"})),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"carde"},c.a.createElement("img",{src:t(70),alt:""}),c.a.createElement("div",{className:"descriptions"},c.a.createElement("h3",null,"Extra Low Calorie"),c.a.createElement("p",null,"With only 9 calories and 20% of the sugar, Hype Energy Enlite gives you lighter way to get the same maximum energy boost. GREAT TASTING CARBONATED ENERGY DRINK WITH SUGAR AND SWEETENERS, CAFFEINE, TAURINE AND VITAMINS."),c.a.createElement("button",null,"Shop Now"))),c.a.createElement("div",{className:"carde"},c.a.createElement("img",{src:t(71),alt:""}),c.a.createElement("div",{className:"descriptions"},c.a.createElement("h1",null,"Sugar Free"),c.a.createElement("p",null,"No sugar. No calories. No compromises. MFP Sugar Free is the same great MFP taste with no sugar added. The sleek white carbon fiber design will keep you energized without weighing you down. Sometimes, less really is more.                "),c.a.createElement("button",null,"Shop Now"))),c.a.createElement("div",{className:"carde"},c.a.createElement("img",{src:t(72),alt:""}),c.a.createElement("div",{className:"descriptions"},c.a.createElement("h3",null,"Cherry Punch"),c.a.createElement("p",null,"A unique blend of natural juice and caffeine to give you a delicious tasting Cherry Twist! Caffeine, taurine and B vitamins help provide an energetic Cherry Twist!"),c.a.createElement("button",null,"Shop Now")))))},k=(t(73),t(14)),x=t(15);var S=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"containerr"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement(k.a,{icon:x.b,size:"10x",inverse:!0,className:"faicon"})))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,c.a.createElement("a",{href:"https://github.com/rouzbeh-hatamy"},"rouzbeh-hatamy")),c.a.createElement("p",null,"This is where I share code and work on projects.")))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement(k.a,{icon:x.a,size:"10x",inverse:!0,className:"faicon"})))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,c.a.createElement("a",{href:"https://www.facebook.com/roozbeh.hatamy/"},"rouzbeh.hatamy")),c.a.createElement("p",null,"This is where I read news and network with different social groups.")))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement(k.a,{icon:x.c,size:"10x",inverse:!0,className:"faicon"})))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"content"},c.a.createElement("h3",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/rouzbeh-hatamy-zargaran-531b54171/"},"rouzbeh-hatamy-zargaran")),c.a.createElement("p",null,"This is where I network and build my professional protfolio."))))))};t(76);var z=function(){return c.a.createElement("div",{className:"main-about"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:t(77),alt:""})),c.a.createElement("div",{className:"info"},c.a.createElement("h3",null,"Rouzbeh Hatamy"),c.a.createElement("h5",null,"Front-End Developer"),c.a.createElement("a",{href:"#"},"Full Resume"),c.a.createElement("a",{href:"https://wa.me/+989336067265"}," \u2714 Hire me \u2714")))};var H=function(){return c.a.createElement(s.a,null,c.a.createElement(m,null),c.a.createElement(i.a,null,c.a.createElement(b,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/about"},c.a.createElement(z,null)),c.a.createElement(o.a,{path:"/posts"},c.a.createElement(f,null)),c.a.createElement(o.a,{path:"/contact"},c.a.createElement(S,null)),c.a.createElement(o.a,{path:"/"},c.a.createElement(y,null)))),c.a.createElement(w,null))};var T=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(78);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.33ad18e0.chunk.js.map