(this["webpackJsonpresume-react"]=this["webpackJsonpresume-react"]||[]).push([[0],{29:function(e,t,a){e.exports={wrapper:"Button_wrapper__2tBgE",riffle:"Button_riffle__3cVEH"}},30:function(e,t,a){e.exports={page:"topbar_page__u3--E"}},31:function(e,t,a){e.exports={page:"resumeEditor_page__3wAYc"}},38:function(e,t,a){e.exports={page:"resumePreview_page__oybxc"}},39:function(e,t,a){e.exports={page:"app_page__19WVV"}},41:function(e,t,a){e.exports=a(90)},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),r=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(3),s=a(4),o=a(6),u=a(5),m=a(7),p=a(29),f=a.n(p),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).buttonClick=function(e){var t=e.clientX,n=e.clientY,c=a.myRef.current.getBoundingClientRect(),l=t-c.x-5,r=n-c.y-5;a.setState({show:!0,deltaX:l,deltaY:r})},a.hideRiffle=function(){a.setState({show:!1})},a.state={show:!1,deltaX:0,deltaY:0},a.myRef=c.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.show,t=this.props,a=t.content,n=void 0===a?"":a,l=t.left,r=void 0===l?0:l;return c.a.createElement("div",{className:f.a.wrapper,style:{marginLeft:r}},c.a.createElement("button",{onClick:this.buttonClick,ref:this.myRef,style:this.buttonStyle},n),e?c.a.createElement("span",{style:this.spanStyle,onAnimationEnd:this.hideRiffle}):null)}},{key:"buttonStyle",get:function(){var e=this.props,t=e.width,a=void 0===t?72:t,n=e.height,c=void 0===n?32:n,l=e.type;return{primary:{width:a,height:c,color:"#fff",backgroundColor:"#5f6caf"},default:{width:a,height:c}}[void 0===l?"default":l]}},{key:"spanStyle",get:function(){var e=this.state,t=e.deltaX,a=e.deltaY,n=this.props.type;return{primary:{left:t,top:a,backgroundColor:"rgba(98, 108, 175, 0.3)"},default:{left:t,top:a}}[void 0===n?"default":n]}}]),t}(n.Component),d=a(30),v=a.n(d),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:v.a.page},c.a.createElement("div",{className:"wrapper"},c.a.createElement("span",{className:"logo"},"Resume"),c.a.createElement("div",{className:"actions"},c.a.createElement(h,{content:"\u4fdd\u5b58",type:"primary"}),c.a.createElement(h,{content:"\u9884\u89c8",left:10}))))}}]),t}(n.Component),E=a(8),g=a(20),w=a(11),y=a(40),j=a(92),O=function(){return c.a.createElement("svg",{t:"1582967689228",className:"icon",viewBox:"0 0 1039 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1094",width:"202.9296875",height:"200"},c.a.createElement("defs",null,c.a.createElement("style",{type:"text/css"})),c.a.createElement("path",{d:"M941.738461 201.705931 698.612165 201.705931l0-76.764338c0-31.112602-26.957978-56.45171-60.023048-56.45171L385.40986 68.489884c-33.107025 0-60.065004 25.339108-60.065004 56.45171l0 76.764338L82.219583 201.705931c-44.695968 0-80.917938 34.394345-80.917938 76.804247l0 600.151689c0 42.410925 36.22197 76.847226 80.917938 76.847226l859.518878 0c44.7369 0 80.916914-34.435277 80.916914-76.847226L1022.655376 278.510178C1022.655376 236.100276 986.475362 201.705931 941.738461 201.705931L941.738461 201.705931 941.738461 201.705931zM367.54805 124.942617c0-9.262968 8.017604-16.781198 17.86181-16.781198l253.179256 0c9.803273 0 17.819854 7.518231 17.819854 16.781198l0 74.686003L367.54805 199.62862 367.54805 124.942617 367.54805 124.942617 367.54805 124.942617zM1004.046552 603.01183 637.34273 603.01183l0 15.369036c0 10.384511-8.930393 18.775622-19.980054 18.775622L410.582169 637.156488c-11.048637 0-19.980054-8.391111-19.980054-18.775622l0-15.369036L10.273994 603.01183l0-35.184337 380.328122 0 0-15.244192c0-10.426467 8.931416-18.817578 19.980054-18.817578l206.780507 0c11.048637 0 19.980054 8.391111 19.980054 18.817578l0 15.244192 366.703823 0L1004.046552 603.01183 1004.046552 603.01183 1004.046552 603.01183z","p-id":"1095",fill:"#ffb677"}))},x=function(){return c.a.createElement("svg",{t:"1582967829844",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1285",width:"200",height:"200"},c.a.createElement("defs",null,c.a.createElement("style",{type:"text/css"})),c.a.createElement("path",{d:"M1008.941176 226.575059a70.957176 70.957176 0 0 0-70.957176-70.957177H86.016A70.942118 70.942118 0 0 0 15.058824 226.575059v535.717647a70.957176 70.957176 0 0 0 70.957176 70.957176h851.952941a70.957176 70.957176 0 0 0 70.957177-70.957176V226.575059zM223.247059 428.754824a77.161412 77.161412 0 0 1-29.500235-60.641883c0-42.631529 34.695529-77.327059 77.327058-77.327059s77.327059 34.695529 77.327059 77.327059a77.161412 77.161412 0 0 1-29.500235 60.641883c49.498353 19.230118 84.736 67.267765 84.736 123.482352 0 8.222118-3.147294 23.220706-24.229647 31.307295-33.792 11.670588-84.058353 15.872-109.658353 15.872-23.506824 0-72.357647-3.207529-106.37553-15.224471-9.697882-4.502588-24.877176-11.610353-24.877176-31.954824 0.015059-56.214588 35.252706-104.237176 84.751059-123.482352z m633.886117 268.965647H147.516235c-7.800471 0-14.185412-7.258353-14.185411-15.058824s6.384941-15.058824 14.185411-15.058823h709.616941c7.800471 0 14.185412 7.258353 14.185412 15.058823 0 7.815529-6.384941 15.058824-14.185412 15.058824z m0-105.411765H459.745882c-7.800471 0-14.185412-7.258353-14.185411-15.058824s6.384941-15.058824 14.185411-15.058823h397.387294c7.800471 0 14.185412 7.258353 14.185412 15.058823 0 7.815529-6.384941 15.058824-14.185412 15.058824z m0-120.470588H459.745882c-7.800471 0-14.185412-7.258353-14.185411-15.058824s6.384941-15.058824 14.185411-15.058823h397.387294c7.800471 0 14.185412 7.258353 14.185412 15.058823s-6.384941 15.058824-14.185412 15.058824z m0-135.529412H459.745882c-7.800471 0-14.185412-7.258353-14.185411-15.058824s6.384941-15.058824 14.185411-15.058823h397.387294c7.800471 0 14.185412 7.258353 14.185412 15.058823s-6.384941 15.058824-14.185412 15.058824z","p-id":"1286",fill:"#ffb677"}))},k=function(){return c.a.createElement("svg",{t:"1582967851040",className:"icon",viewBox:"0 0 1120 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1444",width:"218.75",height:"200"},c.a.createElement("defs",null,c.a.createElement("style",{type:"text/css"})),c.a.createElement("path",{d:"M1103.74947 160.242872a36.583932 36.583932 0 0 1 0 51.655111 36.408889 36.408889 0 0 1-51.56759 0c-184.801368-185.160205-485.489778-185.160205-670.291145 0a36.408889 36.408889 0 0 1-51.558838 0 36.583932 36.583932 0 0 1 0-51.655111c213.228308-213.657162 560.180513-213.657162 773.417573 0z m-103.126427 103.318974a36.583932 36.583932 0 0 1 0 51.663863 36.408889 36.408889 0 0 1-51.558838 0c-127.938735-128.183795-336.11706-128.183795-464.055795 0a36.408889 36.408889 0 0 1-51.558837 0 36.583932 36.583932 0 0 1 0-51.663863c156.365675-156.663248 410.799043-156.663248 567.17347 0z m8.086974 174.552616c60.310974 0 109.375453 49.160752 109.384205 109.594256v292.233846c0 60.433504-49.064479 109.603009-109.375453 109.603009h-36.461401v36.531418a36.49641 36.49641 0 0 1-36.461402 36.531419 36.49641 36.49641 0 0 1-36.461402-36.531419v-36.531418H218.759658v36.531418a36.49641 36.49641 0 0 1-36.461402 36.531419 36.49641 36.49641 0 0 1-36.461401-36.531419v-36.531418h-36.461402C49.073231 949.545573 0 900.376068 0 839.942564V547.708718c0-60.433504 49.064479-109.594256 109.375453-109.594256h377.103316c41.038769-86.322325 128.953983-146.125675 230.557539-146.125676 101.612308 0 189.527521 59.80335 230.557538 146.125676h61.116171z m-291.673709 0c60.310974 0 109.375453 49.160752 109.375453 109.594256 0 60.424752-49.064479 109.585504-109.375453 109.585504S607.660855 608.13347 607.660855 547.708718c0-60.433504 49.064479-109.594256 109.375453-109.594256z m0 146.116923a36.540171 36.540171 0 0 0 0-73.062838 36.540171 36.540171 0 0 0 0 73.062838z m0-219.179761c-100.518291 0-182.298256 81.937504-182.298257 182.657094 0 100.710838 81.779966 182.648342 182.298257 182.648342 100.518291 0 182.298256-81.937504 182.298256-182.657094 0-100.710838-81.779966-182.657094-182.298256-182.657094z m328.135111 474.89094V547.708718a36.540171 36.540171 0 0 0-36.461402-36.531419h-39.069538c1.706667 11.929162 2.616889 24.120889 2.616889 36.531419 0 140.996923-114.495453 255.711179-255.22106 255.711179-140.734359 0-255.212308-114.714256-255.212308-255.711179 0-12.41053 0.90147-24.838564 2.608137-36.776479H109.375453c-20.103658 0-36.461402 16.62906-36.461402 36.776479v292.233846a36.540171 36.540171 0 0 0 36.461402 36.540171h899.334564a36.540171 36.540171 0 0 0 36.461402-36.531419z m-692.731624-255.711179a36.49641 36.49641 0 0 1 36.461402 36.531418 36.49641 36.49641 0 0 1-36.461402 36.531419H182.307009a36.49641 36.49641 0 0 1-36.461402-36.531419 36.49641 36.49641 0 0 1 36.461402-36.531418h170.141538z m0 146.125675a36.49641 36.49641 0 0 1 36.461402 36.531419 36.49641 36.49641 0 0 1-36.461402 36.531418H182.307009a36.49641 36.49641 0 0 1-36.461402-36.531418 36.49641 36.49641 0 0 1 36.461402-36.531419h170.141538z",fill:"#ffb677","p-id":"1445"}))},z=function(){return c.a.createElement("svg",{t:"1582967861605",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1603",width:"200",height:"200"},c.a.createElement("defs",null,c.a.createElement("style",{type:"text/css"})),c.a.createElement("path",{d:"M448.512 479.232a54.272 54.272 0 1 1 56.32-55.296 55.296 55.296 0 0 1-56.32 55.296z m343.04 91.136l-73.728-110.592V450.56a245.76 245.76 0 0 0-244.736-245.76 225.28 225.28 0 0 0-58.368 7.168A244.736 244.736 0 0 0 228.352 450.56a224.256 224.256 0 0 0 36.864 130.048c43.008 61.44 71.68 110.592 54.272 177.152a47.104 47.104 0 0 0 9.216 43.008 45.056 45.056 0 0 0 36.864 18.432h200.704a48.128 48.128 0 0 0 48.128-38.912 51.2 51.2 0 0 0 2.048-12.288 24.576 24.576 0 0 1 24.576-20.48H655.36a48.128 48.128 0 0 0 48.128-34.816 422.912 422.912 0 0 0 15.36-98.304h52.224a28.672 28.672 0 0 0 22.528-16.384 29.696 29.696 0 0 0-2.048-27.648z m-202.752-86.016l-10.24 16.384a22.528 22.528 0 0 1-18.432 9.216 24.576 24.576 0 0 1-7.168-1.024l-26.624-10.24a118.784 118.784 0 0 1-39.936 22.528l-5.12 29.696a20.48 20.48 0 0 1-20.48 16.384h-20.48a20.48 20.48 0 0 1-20.48-16.384l-4.096-29.696a102.4 102.4 0 0 1-37.888-20.48l-28.672 10.24a24.576 24.576 0 0 1-8.192 1.024 21.504 21.504 0 0 1-17.408-10.24l-10.24-16.384a19.456 19.456 0 0 1 5.12-25.6l23.552-19.456a103.424 103.424 0 0 1-3.072-21.504 96.256 96.256 0 0 1 3.072-20.48l-23.552-20.48a19.456 19.456 0 0 1-5.12-25.6l10.24-17.408a20.48 20.48 0 0 1 18.432-10.24 24.576 24.576 0 0 1 7.168 2.048l28.672 10.24a117.76 117.76 0 0 1 37.888-21.504L419.84 286.72a19.456 19.456 0 0 1 20.48-16.384h20.48a19.456 19.456 0 0 1 20.48 15.36l5.12 29.696a115.712 115.712 0 0 1 37.888 20.48l28.672-10.24a24.576 24.576 0 0 1 7.168-2.048 21.504 21.504 0 0 1 18.432 10.24l10.24 16.384a20.48 20.48 0 0 1-5.12 26.624l-23.552 19.456a98.304 98.304 0 0 1 2.048 21.504 96.256 96.256 0 0 1-2.048 20.48l23.552 19.456a20.48 20.48 0 0 1 5.12 26.624z","p-id":"1604",fill:"#ffb677"}))},C=function(){return c.a.createElement("svg",{t:"1582984831881",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2470",width:"200",height:"200"},c.a.createElement("defs",null,c.a.createElement("style",{type:"text/css"})),c.a.createElement("path",{d:"M459.52 658.88L224 527.36 195.52 736c0 157.44 308.16 205.44 496.64 144.32l28.8-305.6-149.76 83.84a128 128 0 0 1-111.68 0.32zM964.16 283.84L571.2 64a128 128 0 0 0-111.68 0L66.56 283.84c-32 17.28-32 45.44 0 64l392.96 220.48a128 128 0 0 0 111.68 0L832 420.8l-44.48 471.68a84.8 84.8 0 0 0 0 15.04 80.32 80.32 0 0 0 160-15.04L899.52 384l64-36.16c31.36-18.56 31.36-46.72 0.64-64z",fill:"#ffb677","p-id":"2471"}))},N=a(31),_=a.n(N),L=j.a.TextArea,B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTabContent=function(e){var t=a.state.resume;return t[e]instanceof Array?t[e].map((function(t,n){return c.a.createElement("div",{className:"subItem",key:n},a.iteratorObj(e,t,n),c.a.createElement("hr",null))})):a.iteratorObj(e,t[e])},a.iteratorObj=function(e,t,n){return Object.entries(t).map((function(t,l){var r=Object(y.a)(t,2),i=r[0],s=r[1];return c.a.createElement("div",{className:"resumeField",key:l},c.a.createElement("label",null,i),c.a.createElement(L,{value:s,autoSize:!0,onChange:function(t){return a.inputChange(t,e,n,i)}}))}))},a.inputChange=function(e,t,n,c){var l=e.target.value,r=a.state.resume;r[t]instanceof Array?a.setState({resume:Object(w.a)({},r,Object(E.a)({},t,[].concat(Object(g.a)(r[t].slice(0,n)),[Object(w.a)({},r[t][n],Object(E.a)({},c,l))],Object(g.a)(r[t].slice(n+1)))))}):a.setState({resume:Object(w.a)({},r,Object(E.a)({},t,Object(w.a)({},r[t],Object(E.a)({},c,l))))})},a.state={selected:"personalInfo",resume:{config:[{field:"personalInfo",title:"\u4e2a\u4eba\u4fe1\u606f",component:c.a.createElement(x,null)},{field:"projects",title:"\u6211\u7684\u9879\u76ee",component:c.a.createElement(k,null)},{field:"skills",title:"\u6211\u7684\u6280\u80fd",component:c.a.createElement(z,null)},{field:"experience",title:"\u5de5\u4f5c\u7ecf\u5386",component:c.a.createElement(O,null)},{field:"education",title:"\u6559\u80b2\u7ecf\u5386",component:c.a.createElement(C,null)}],personalInfo:{city:"",birth:"",job:"",degree:"",mobile:"",QQ:"","e-mail":"",Github:""},projects:[{project:"",link:"",description:""}],skills:[{skill:"",description:""}],experience:[{company:"",date:"",mainJob:""}],education:[{school:"",date:""}]}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.resume,n=t.selected,l=a.config,r=void 0===l?[]:l;return c.a.createElement("div",{className:_.a.page},c.a.createElement("nav",null,c.a.createElement("ul",null,r.map((function(t,a){return c.a.createElement("li",{key:a,title:t.title,className:t.field===n?"active":"",onClick:function(){return e.setState({selected:t.field})}},t.component)})))),c.a.createElement("ul",{className:"panel"},r.map((function(t,a){return c.a.createElement("li",{key:a,className:t.field===n?"active":""},e.getTabContent(t.field))}))))}}]),t}(n.Component),H=a(38),S=a.n(H),M=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:S.a.page},"i am resume preview")}}]),t}(n.Component),R=(a(88),a(89),a(39)),A=a.n(R),V=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:A.a.page},c.a.createElement("header",null,c.a.createElement(b,null)),c.a.createElement("main",null,c.a.createElement(B,null),c.a.createElement(M,null)))}}]),t}(n.Component);r.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.adf9d16c.chunk.js.map