(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{471:function(t,e,o){var content=o(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("05b921e3",content,!0,{sourceMap:!1})},500:function(t,e,o){"use strict";o(471)},501:function(t,e,o){var r=o(13)(!1);r.push([t.i,".main__template[data-v-1a37bbbc]{overflow:hidden;height:100%}.main__template *[data-v-1a37bbbc]{touch-action:none}.scroll__box[data-v-1a37bbbc]{transition:1s cubic-bezier(.5,0,.5,1)}.scroll__box[data-v-1a37bbbc],.scroll__item[data-v-1a37bbbc]{position:relative;overflow:hidden}.scroll__item[data-v-1a37bbbc]{height:100vh}.scroll__item__textbox[data-v-1a37bbbc]{height:100vh;display:flex;flex-direction:column;text-align:center;justify-content:center}.scroll__item__title[data-v-1a37bbbc]{font-size:10rem;font-weight:lighter;color:#fff}.scroll__item__subtitle[data-v-1a37bbbc]{font-size:1.5rem;color:#fff}.bg1[data-v-1a37bbbc]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg);background-size:cover}.bg2[data-v-1a37bbbc]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg);background-size:cover}.bg3[data-v-1a37bbbc]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg);background-size:cover}.bg4[data-v-1a37bbbc]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg);background-size:cover}",""]),t.exports=r},570:function(t,e,o){"use strict";o.r(e);o(59);var r=o(482),n={data:function(){return{mainimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg",textimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg",videoimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg",voiceimg:"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg",sections:4,scdir:"",swdir:"",hold:!1,lookup:0,show:!0}},mounted:function(){var t=this.$refs.box;t.style.transform="translateY(0)",t.addEventListener("wheel",this.handleScroll),t.addEventListener("wheel",this.scrollY),this.swipe(t)},beforeDestroy:function(){var t=this.$refs.box;t.removeEventListener("wheel",this.scrollY),t.removeEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){t.deltaY<0&&(this.scdir="down"),t.deltaY>0&&(this.scdir="up"),t.preventDefault(),t.stopPropagation()},scrollY:function(){var t,e,o=this,r=this.$refs.box,n=window.innerHeight/100,l=Math.min(window.innerHeight,window.innerWidth)/100;e=(e=parseInt(r.offsetHeight/n))||parseInt(r.offsetHeight/l),t=parseInt(r.style.transform.replace("translateY(","")),"up"===this.scdir&&Math.abs(t)<e-e/this.sections?t-=100:"down"===this.scdir&&t<0?t+=100:"top"===this.scdir&&(t=0),!1===this.hold&&(this.hold=!0,"up"===this.scdir?this.lookup<this.sections-1&&this.lookup++:"down"===this.scdir&&this.lookup>0&&this.lookup--,r.style.transform="translateY("+t+"vh)",setTimeout((function(){o.hold=!1}),1e3))},swipe:function(){var t,e,o,r,n,l=this.$refs.box;l.addEventListener("touchstart",(function(o){var r=o.changedTouches[0];this.swdir="none",t=r.pageX,e=r.pageY,n=(new Date).getTime()}),!1),l.addEventListener("touchend",(function(c){var d=c.changedTouches[0];o=d.pageX-t,r=d.pageY-e,(new Date).getTime()-n<=500&&(Math.abs(o)>=100&&Math.abs(r)<=50?this.swdir=o<0?"left":"right":Math.abs(r)>=100&&Math.abs(o)<=50&&(this.swdir=r<0?"up":"down"),"box"===l.id&&(("up"===this.swdir||"down"===this.swdir&&"translateY(0)"!=l.style.transform)&&(this.scdir=this.swdir,scrollY(l)),c.preventDefault(),c.stopPropagation()))}),!1)},beforeEnter:function(t){t.style.position="relative",t.style.top="30vh",t.style.opacity=0},enter:function(t,e){r.a.to(t,{duration:2,opacity:1,top:0,ease:"power2.out",stagger:.2,onComplete:e})},subEnter:function(t,e){r.a.to(t,{delay:.6,duration:1.4,opacity:1,top:0,ease:"power2.out",stagger:.2,onComplete:e})},leave:function(t,e){r.a.to(t,{duration:.7,top:"30vh",ease:"elastic.inOut(2.5, 1)"}),r.a.to(t,{duration:.2,opacity:0,onComplete:e})}}},l=(o(500),o(23)),c=o(31),d=o.n(c),h=o(160),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"box",staticClass:"scroll__box"},[o("div",{staticClass:"scroll__item"},[o("v-img",{staticClass:"bg1",attrs:{height:"100vh"}},[o("transition",{on:{leave:t.leave}},[0===t.lookup?o("div",{staticClass:"scroll__item__textbox"},[o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[o("div",{staticClass:"scroll__item__title"},[t._v("페이지1")])]),t._v(" "),o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.subEnter}},[o("div",{staticClass:"scroll__item__subtitle"},[t._v("서브헤더")])])],1):t._e()])],1)],1),t._v(" "),o("div",{staticClass:"scroll__item"},[o("v-img",{staticClass:"bg2",attrs:{height:"100vh"}},[o("transition",{on:{leave:t.leave}},[1===t.lookup?o("div",{staticClass:"scroll__item__textbox"},[o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[o("h1",{staticClass:"scroll__item__title"},[t._v("페이지2")])]),t._v(" "),o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.subEnter}},[o("h4",{staticClass:"scroll__item__subtitle"},[t._v("서브헤더")])])],1):t._e()])],1)],1),t._v(" "),o("div",{staticClass:"scroll__item"},[o("v-img",{staticClass:"bg3",attrs:{height:"100vh"}},[o("transition",{on:{leave:t.leave}},[2===t.lookup?o("div",{staticClass:"scroll__item__textbox"},[o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[o("h1",{staticClass:"scroll__item__title"},[t._v("페이지3")])]),t._v(" "),o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.subEnter}},[o("h4",{staticClass:"scroll__item__subtitle"},[t._v("서브헤더")])])],1):t._e()])],1)],1),t._v(" "),o("div",{staticClass:"scroll__item"},[o("v-img",{staticClass:"bg4",attrs:{height:"100vh"}},[o("transition",{on:{leave:t.leave}},[3===t.lookup?o("div",{staticClass:"scroll__item__textbox"},[o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[o("h1",{staticClass:"scroll__item__title"},[t._v("페이지4")])]),t._v(" "),o("transition",{attrs:{appear:"",name:"slide-fade",css:!1},on:{"before-enter":t.beforeEnter,enter:t.subEnter}},[o("h4",{staticClass:"scroll__item__subtitle"},[t._v("서브헤더")])])],1):t._e()])],1)],1)])}),[],!1,null,"1a37bbbc",null);e.default=component.exports;d()(component,{VImg:h.a})}}]);