(function(){"use strict";var e={50866:function(e,t,n){n.a(e,(async function(e,t){try{var o=n(36102),i=n(49384),r=n(73233),a=n(44141),l=n(89512),s=n(24239),u=n(40338),c=n(30567),d=n(84937),f=n(66948);const e=(0,r.ri)(o.Z);e.use(d.ZP,{config:{id:"G-Q6423EHZHZ"}},i.Z),l.Z.add([a.f5K,a.n6n,a.zyo,a.E_y,a._53,a.crt,a.QYT,a.ABC]),e.config.productionTip=!1,e.config.globalProperties.$bodyElement=null,e.component("heading",u.Z),e.component("subheading",c.Z),e.use(i.Z).use(s.Z).use(l.Z).use((0,f.Bg)()),await i.Z.isReady(),e.mount("#app"),t()}catch(m){t(m)}}),1)},49384:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(70678),i=n(73396),r=n.p+"img/luff1.e09afa46.png";const a=e=>((0,i.dD)("data-v-852046e0"),e=e(),(0,i.Cn)(),e),l={class:"home"},s=a((()=>(0,i._)("div",{class:"md:flex md:mt-16 mb-8 items-center justify-between"},[(0,i._)("section",{class:"md:w-full mt-1"},[(0,i._)("a",{class:"content-center"},[(0,i._)("img",{src:r,title:"Luffy",class:"content-center mx-auto h-48 w-48 transparent-img transparent-img-light"})])])],-1))),u={class:"md:flex md:mt-8 mb-24 items-center justify-between"},c={class:"md:w-full mt-1"},d=(0,i.Uk)(" Hey, I am "),f=a((()=>(0,i._)("span",{class:"rainbow"},"sfyl",-1))),m={class:"mb-0"},h=(0,i.Uk)(" High frequency trader turned byte generalist."),g=a((()=>(0,i._)("br",null,null,-1))),p=(0,i.Uk)(" Curious? Try the "),b=(0,i.Uk)("About"),w=(0,i.Uk)(" page"),v=(0,i.Uk)(", or check my "),y=(0,i.Uk)("Blog"),_=(0,i.Uk)("."),k=a((()=>(0,i._)("br",null,null,-1))),x=(0,i.Uk)(" Building? Get my "),M=(0,i.Uk)("Contact"),C=(0,i.Uk)(" and reach out! ");function L(e,t,n,o,r,a){const L=(0,i.up)("heading"),S=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",l,[s,(0,i._)("div",u,[(0,i._)("section",c,[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[d,f])),_:1}),(0,i._)("body",m,[h,g,p,(0,i._)("span",{onClick:t[0]||(t[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e)),class:"no-wrap"},[(0,i.Wm)(S,{to:"/about"},{default:(0,i.w5)((()=>[b])),_:1}),w]),v,(0,i._)("span",{onClick:t[1]||(t[1]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},[(0,i.Wm)(S,{to:"/blog"},{default:(0,i.w5)((()=>[y])),_:1})]),_,k,x,(0,i._)("span",{onClick:t[2]||(t[2]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},[(0,i.Wm)(S,{to:"/Contact"},{default:(0,i.w5)((()=>[M])),_:1})]),C])])])])}var S={name:"Home",components:{},methods:{toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)}}},W=n(40089);const j=(0,W.Z)(S,[["render",L],["__scopeId","data-v-852046e0"]]);var T=j;const Z=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,3582))},{path:"/contact",name:"Contact",component:()=>n.e(631).then(n.bind(n,73662))},{path:"/blog/",name:"Blog",component:()=>Promise.all([n.e(897),n.e(239)]).then(n.bind(n,8943))},{path:"/blog/:post",name:"Blog Post",component:()=>Promise.all([n.e(897),n.e(2)]).then(n.bind(n,12491))}],U=(0,o.p7)({history:(0,o.PO)("/"),linkActiveClass:"active",routes:Z});var N=U},24239:function(e,t,n){var o=n(87139),i=n(42415);t.Z=(0,o.MT)({plugins:[(0,i.Z)({key:"state",storage:window.localStorage})],state:{dark:window.matchMedia("(prefers-color-scheme: dark)").matches,showMobileNav:!1},mutations:{switchTheme(e){if(e.dark=!e.dark,document.querySelector("meta[name=theme-color]").setAttribute("content",e.dark?"#2e3440":"#eceff4"),window.matchMedia("(prefers-reduced-motion: reduce)").matches)return document.body.classList.replace(e.dark?"light":"dark",e.dark?"dark":"light");let t=e.dark?"light-to-dark":"dark-to-light";document.body.classList.add(t),document.body.classList.remove(e.dark?"light":"dark"),setTimeout((()=>{document.body.classList.add(e.dark?"dark":"light"),document.body.classList.remove(t)}),600)},toggleMobileNav(e,t){e.showMobileNav=t}},actions:{},modules:{}})},36102:function(e,t,n){n.d(t,{Z:function(){return F}});var o=n(73396),i=n(27156),r=n(73233);const a=e=>((0,o.dD)("data-v-761377a8"),e=e(),(0,o.Cn)(),e),l=a((()=>(0,o._)("meta",{name:"twitter:site",content:"@SFYLL"},null,-1))),s={id:"app",class:"max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10"},u={key:0,class:"relative mb-8 rounded-b-lg",id:"nav"},c={class:"flex items-center flex-wrap justify-between"},d={class:"mr-6"},f={class:"text-2xl"},m={class:"flex items-center logo"},h={class:"rainbow"},g=(0,o.Uk)("sfyl"),p={id:"navButtons",class:"align-baseline flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent justify-center"},b=(0,o.Uk)("Home"),w=a((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),v=(0,o.Uk)("Blog"),y=(0,o.Uk)("Contact"),_={id:"icons",class:"md:text-right flex items-center md:justify-end"},k={href:"https://github.com/SFYLL/sfyll.github.io",title:"View this website's source on GitHub"},x={key:1,class:"flex items-center flex-wrap justify-between"},M={class:"flex-1 text-center flex justify-center"},C={class:"text-2xl"},L={class:"flex items-center justify-center logo"},S=(0,o.Uk)("sfyl"),W={href:"https://github.com/SFYLL/sfyll.github.io",title:"View this website's source on GitHub"},j={key:0,id:"mobilenav",class:"flex flex-col items-center h-full"},T={id:"mobilenavbuttons",class:"flex flex-col items-center w-full"},Z=(0,o.Uk)("Home"),U=a((()=>(0,o._)("span",{class:"no-wrap"},"About Me",-1))),N=(0,o.Uk)("Blog"),E=(0,o.Uk)("Contact");function A(e,t,n,a,A,B){const O=(0,o.up)("metainfo"),P=(0,o.up)("router-link"),$=(0,o.up)("ThemeSwitcher"),q=(0,o.up)("Unicon"),D=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o.Wm)(O,null,{title:(0,o.w5)((({content:e})=>[(0,o.Uk)((0,i.zw)(e),1)])),_:1}),l,(0,o._)("div",s,[A.isMobile?((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",null,[(0,o._)("button",{id:"menuIcon",class:"flex items-center px-3 py-3 text-gray-700 hover:text-gray-900",title:"Menu",onClick:t[0]||(t[0]=(...e)=>B.mobileMenu&&B.mobileMenu(...e))},[(0,o.Wm)(q,{width:"20",height:"20",name:"bars",fill:B.iconColor},null,8,["fill"])])]),(0,o._)("div",M,[(0,o._)("h3",C,[(0,o._)("a",L,[(0,o._)("span",{onClick:t[1]||(t[1]=(...e)=>B.toggleMenu&&B.toggleMenu(...e)),class:"rainbow"},[(0,o.Wm)(P,{to:"/"},{default:(0,o.w5)((()=>[S])),_:1})])])])]),(0,o._)("div",null,[(0,o.Wm)($),(0,o._)("a",W,[(0,o.Wm)(q,{width:"24",height:"24",name:"github",fill:B.iconColor},null,8,["fill"])])])])):((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("header",c,[(0,o._)("div",d,[(0,o._)("h3",f,[(0,o._)("a",m,[(0,o._)("span",h,[(0,o.Wm)(P,{to:"/"},{default:(0,o.w5)((()=>[g])),_:1})])])])]),(0,o._)("ul",p,[(0,o._)("li",null,[(0,o.Wm)(P,{to:"/"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{to:"/about"},{default:(0,o.w5)((()=>[w])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{to:"/blog"},{default:(0,o.w5)((()=>[v])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(P,{to:"/contact"},{default:(0,o.w5)((()=>[y])),_:1})])]),(0,o._)("div",_,[(0,o.Wm)($),(0,o._)("a",k,[(0,o.Wm)(q,{width:"24",height:"24",name:"github",fill:B.iconColor},null,8,["fill"])])])])])),(0,o.Wm)(r.uT,{name:"appear"},{default:(0,o.w5)((()=>[A.isMobile&&B.showMobileNav?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("ul",T,[(0,o._)("li",{onClick:t[2]||(t[2]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(P,{to:"/"},{default:(0,o.w5)((()=>[Z])),_:1})]),(0,o._)("li",{onClick:t[3]||(t[3]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(P,{to:"/about"},{default:(0,o.w5)((()=>[U])),_:1})]),(0,o._)("li",{onClick:t[4]||(t[4]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(P,{to:"/blog"},{default:(0,o.w5)((()=>[N])),_:1})]),(0,o._)("li",{onClick:t[5]||(t[5]=(...e)=>B.toggleMenu&&B.toggleMenu(...e))},[(0,o.Wm)(P,{to:"/contact"},{default:(0,o.w5)((()=>[E])),_:1})])])])):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(D)])])}function B(e,t,n,i,r,a){const l=(0,o.up)("unicon");return(0,o.wg)(),(0,o.iD)("span",{onClick:t[0]||(t[0]=(...e)=>a.switchTheme&&a.switchTheme(...e)),class:"switcher align-baseline",tabindex:"0"},[this.$store.state.dark?((0,o.wg)(),(0,o.j4)(l,{key:0,name:"sun",fill:"white","aria-label":"Switch to light mode"})):((0,o.wg)(),(0,o.j4)(l,{key:1,name:"moon",fill:"black","aria-label":"Switch to dark mode"}))])}var O={methods:{switchTheme(){this.$store.commit("switchTheme")}}},P=n(40089);const $=(0,P.Z)(O,[["render",B]]);var q=$,D=n(66948),H={components:{ThemeSwitcher:q},setup(){(0,D.jq)({htmlAttrs:{lang:"en",amp:!0},title:"The personal website of sfyl",description:"High frequency trader turned byte generalist",og:{title:"The personal website of sfyl",description:"High frequency trader turned byte generalist",image:"https://www.sfyl.xyz/favicon.ico"},twitter:{card:"summary"}})},data(){return{isMobile:window.innerWidth<=768}},computed:{iconColor:function(){return this.$store.state.dark?"white":"black"},showMobileNav:{get(){return this.$store.state.showMobileNav},set(e){this.$store.commit("toggleMobileNav",e)}}},methods:{mobileMenu:function(){this.$store.commit("toggleMobileNav",!this.$store.state.showMobileNav)},toggleMenu:function(){this.$store.commit("toggleMobileNav",!1)}},mounted(){const e=document.createElement("meta");e.name="theme-color",e.content=this.$store.state.dark?"#2e3440":"#eceff4",document.getElementsByTagName("head")[0].appendChild(e),document.body.classList.add(this.$store.state.dark?"dark":"light")},beforeDestroy(){window.removeEventListener("resize",this.updateWindowSize)}};const I=(0,P.Z)(H,[["render",A],["__scopeId","data-v-761377a8"]]);var F=I},40338:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(73396),i=n(27156);function r(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("h1",{class:(0,i.C_)(a.classList)},[(0,o.WI)(e.$slots,"default")],2)}var a={data(){return{classList:"heading "}},props:{small:{required:!1,type:Boolean}},mounted(){this.small?this.classList+="text-xl":this.classList+="text-3xl"}},l=n(40089);const s=(0,l.Z)(a,[["render",r]]);var u=s},30567:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(73396),i=n(27156);function r(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("h2",{class:(0,i.C_)(a.classList.join(" "))},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}n(57658);var a={data(){return{classList:["subheading"]}},props:{small:{required:!1,type:Boolean},bold:{required:!1,type:Boolean}},mounted(){this.small?this.classList.push("text-sm"):this.classList.push("text-xl"),this.bold||this.classList.push("font-normal")}},l=n(40089);const s=(0,l.Z)(a,[["render",r],["__scopeId","data-v-40aa4a4e"]]);var u=s}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",i=function(e){e&&e.d<1&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},r=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((function(e){a[t]=e,i(r)}),(function(e){a[o]=e,i(r)}));var a={};return a[e]=function(e){e(r)},a}}var l={};return l[e]=function(){},l[t]=n,l}))};n.a=function(n,a,l){var s;l&&((s=[]).d=-1);var u,c,d,f=new Set,m=n.exports,h=new Promise((function(e,t){d=t,c=e}));h[t]=m,h[e]=function(e){s&&e(s),f.forEach(e),h["catch"]((function(){}))},n.exports=h,a((function(n){var i;u=r(n);var a=function(){return u.map((function(e){if(e[o])throw e[o];return e[t]}))},l=new Promise((function(t){i=function(){t(a)},i.r=0;var n=function(e){e!==s&&!f.has(e)&&(f.add(e),e&&!e.d&&(i.r++,e.push(i)))};u.map((function(t){t[e](n)}))}));return i.r?l:a()}),(function(e){e?d(h[o]=e):c(m),i(s)})),s&&s.d<0&&(s.d=0)}}(),function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({2:"blogPost",239:"blog",443:"about",631:"contact"}[e]||e)+"."+{2:"c3213706",239:"dd737818",443:"e3cc4f15",631:"f012e4cf",897:"4a35e5cc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{239:"blog",631:"contact"}[e]+"."+{239:"1740ceaa",631:"1b97c717"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sfyl-site:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var l,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[i];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,r.parentNode&&r.parentNode.removeChild(r),i(s)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),l=n.p+a;if(t(a,l))return i();e(o,l,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={239:1,631:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,i[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],l=o[1],s=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var c=s(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunksfyl_site"]=self["webpackChunksfyl_site"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(50866)}));o=n.O(o)})();
//# sourceMappingURL=app.d06a4358.js.map