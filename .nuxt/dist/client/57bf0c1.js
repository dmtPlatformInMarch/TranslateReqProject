(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{506:function(e,t,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("f81bac7a",content,!0,{sourceMap:!1})},507:function(e,t,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("8b63a4be",content,!0,{sourceMap:!1})},516:function(e,t,n){"use strict";n(506)},517:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-1d8c3e2e]{max-width:920px}.video__player[data-v-1d8c3e2e]{width:100%}",""]),e.exports=r},518:function(e,t,n){"use strict";n(507)},519:function(e,t,n){var r=n(9)(!1);r.push([e.i,"[data-v-399d6fd4] .v-overlay__content{width:100%!important}.progress__box[data-v-399d6fd4]{width:100%}",""]),e.exports=r},521:function(e,t,n){"use strict";var r=n(6),o=(n(44),{props:{url:{type:String,default:""}},data:function(){return{video:"",tracks:[],videoTrack:"",reload:!1}},created:function(){var e=this;this.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(this.$store.state.videoes.fileName),".vtt"),this.$nuxt.$on("newTracks",Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.videoTrack="/",setTimeout((function(){e.videoTrack="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/".concat(encodeURI(e.$store.state.videoes.fileName),".vtt")}),500);case 2:case"end":return t.stop()}}),t)}))))},mounted:function(){this.video=document.querySelector("video"),this.tracks=this.video.textTracks},methods:{}}),c=(n(516),n(18)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video__box"},[n("video",{staticClass:"video__player",attrs:{controls:"",preload:"auto",src:e.url,crossorigin:"use-credentials"}},[n("track",{attrs:{kind:"subtitles",src:e.videoTrack,srclang:"en",label:"자막"}})])])}),[],!1,null,"1d8c3e2e",null);t.a=component.exports},522:function(e,t,n){"use strict";var r=n(185),o=n(194),c={data:function(){return{loading:!1}},computed:{percentage:function(){return this.$store.state.manager.loading>=100&&(this.loading=!1,this.$store.commit("manager/setUploadLoading",0)),this.$store.state.manager.loading}},created:function(){var e=this;this.$store.subscribe((function(t,n){"manager/startLoading"===t.type&&(e.loading=!0),"manager/endLoading"===t.type&&(e.loading=!1)}))},methods:{start:function(){},finish:function(){}}},d=(n(518),n(18)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(r.a,{attrs:{value:e.loading,"z-index":"10000"}},[n("div",{staticClass:"progress__box"},[n(o.a,{attrs:{color:"cyan",height:"25"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.value;return[n("strong",[e._v(e._s(Math.ceil(r))+" %")])]}}]),model:{value:e.percentage,callback:function(t){e.percentage=t},expression:"percentage"}})],1)])}),[],!1,null,"399d6fd4",null);t.a=component.exports},539:function(e,t,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("733a954b",content,!0,{sourceMap:!1})},540:function(e,t,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("4e18f528",content,!0,{sourceMap:!1})},611:function(e,t,n){"use strict";n(539)},612:function(e,t,n){var r=n(9)(!1);r.push([e.i,".track__wrapper[data-v-dacdab9e]{display:flex;flex-direction:column;height:15%;border:1px solid grey;margin:5px;padding:0 10px;flex-basis:6rem;justify-content:center}.track__time[data-v-dacdab9e]{display:flex;align-items:center;justify-content:space-around;padding:5px}.input__time[data-v-dacdab9e]{flex:0 0 auto!important}.track__text[data-v-dacdab9e]{display:flex;flex-direction:column;justify-content:center;margin:5px;min-height:25px}",""]),e.exports=r},613:function(e,t,n){"use strict";n(540)},614:function(e,t,n){var r=n(9)(!1);r.push([e.i,".video__box[data-v-7c07f2eb]{overflow:scroll;height:calc(100% - 12px)}.video__box[data-v-7c07f2eb]::-webkit-scrollbar{display:block;width:10px;height:8px}.video__box[data-v-7c07f2eb]::-webkit-scrollbar-track{background-color:transparent}.video__box[data-v-7c07f2eb]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.video__player[data-v-7c07f2eb]{width:auto;height:50%;min-height:625px;border:1px solid red}.video__player__grid[data-v-7c07f2eb]{height:100%;min-height:625px}.video__player__box[data-v-7c07f2eb],.video__player__meta[data-v-7c07f2eb]{display:flex;align-items:center;justify-content:center;margin:25px 15px}.video__player__meta[data-v-7c07f2eb],.video__translator[data-v-7c07f2eb]{flex-direction:column}.video__translator[data-v-7c07f2eb]{display:flex;min-height:calc(50% - 128px);border:1px solid red}.video__translator__title[data-v-7c07f2eb]{display:flex;align-items:center;margin:15px;padding:0 15px}.video__translator__btngroup[data-v-7c07f2eb]{display:flex}.video__translator__btn[data-v-7c07f2eb]{margin:5px}.video__translator__content[data-v-7c07f2eb]{display:flex;flex-direction:column;margin:0 15px 15px;border:1px solid red}.video__uploadFile[data-v-7c07f2eb]{width:100%;padding:0 50px}.video[data-v-7c07f2eb]{padding:25px}",""]),e.exports=r},638:function(e,t,n){"use strict";n.r(t);var r=n(461),o=n(193),c=n(69),d=n(490),l=n(475),v=n(512),f=n(189),h=n(489),_=n(470),m=n(6),x=(n(44),n(49),n(28),n(59),n(23),n(30),n(22),n(8),n(38),n(37),n(32),n(521)),k=n(458),T=n(527),$=(n(17),n(60),{props:{idx:{type:Number,require:!0},start:{type:String,default:"00:00:00.000"},end:{type:String,default:"00:00:00.000"},text:{type:String,default:""}},data:function(){return{}},computed:{segmentStart:function(){return this.msToString(this.start)},segmentEnd:function(){return this.msToString(this.end)},segmentText:function(){return this.text.split("\\n")}},methods:{msToString:function(time){if(0===time)return"00:00:00.000";var e=time/36e5>=1?parseInt(time/36e5):0,t=time/6e4>=1?time/6e4>=60?parseInt(time/6e4)-60>=1?parseInt(time/6e4)-60:0:parseInt(time/6e4):0,n=time%6e4>=1?parseInt(time%6e4/1e3)>=1?parseInt(time%6e4/1e3):0:parseInt(time/1e3)>=1?parseInt(time/1e3):0,r=time%1e3,o=e/10>=1?e:"0".concat(e),c=t/10>=1?t:"0".concat(t),d=n/10>=1?n:"0".concat(n),l=r/100>=1?r:r/10>=1?"0".concat(r):"00".concat(r);return"".concat(o,":").concat(c,":").concat(d,".").concat(l)},changeStart:function(e){this.$nuxt.$emit("startChange",e,this.idx),console.log(e)},changeEnd:function(e){this.$nuxt.$emit("endChange",e,this.idx),console.log(e)},changeText:function(e){this.$nuxt.$emit("textChange",e,this.idx),console.log(e,this.idx)}}}),y=(n(611),n(18)),w=Object(y.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"track__wrapper"},[n("div",{staticClass:"track__time"},[n(k.a,{staticClass:"input__time",attrs:{value:e.start,outlined:"",dense:"","hide-details":""},on:{input:function(t){return e.changeStart(t)}}}),e._v(" \n        --\x3e \n        "),n(k.a,{staticClass:"input__time",attrs:{value:e.end,outlined:"",dense:"","hide-details":""},on:{input:function(t){return e.changeEnd(t)}}})],1),e._v(" "),n("div",{staticClass:"track__text"},[n(T.a,{attrs:{value:e.segmentText,outlined:"",dense:"","auto-grow":"",rows:"1","row-height":"20","hide-details":""},on:{input:function(t){return e.changeText(t)}}})],1)])}),[],!1,null,"dacdab9e",null).exports,C=n(52),R=n(522),S=n(120),V=n.n(S);function j(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var I={layout:"VideoLayout",components:{VideoComponent:x.a,TrackComponent:w,SnackBar:C.a,LoadingLinear:R.a},data:function(){return{isDev:"production".includes("dev"),readToVideo:!1,videoTrack:[],dialog:!1}},created:function(){var e=this;this.$nuxt.$on("onVideoEvent",(function(t){e.readToVideo=!0,e.videoTrack=[],e.$store.commit("videoes/setFileURL","https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/".concat(encodeURI(t)))})),this.$nuxt.$on("onScrollTop",(function(){e.$refs.videobox.scrollBy({top:-e.$refs.videobox.scrollTop,behavior:"smooth"})})),this.$nuxt.$on("startChange",(function(t,n){var r;null!=t&&null!==(r=e.videoTrack[n])&&void 0!==r&&r.start&&(e.videoTrack[n].start=t)})),this.$nuxt.$on("endChange",(function(t,n){var r;null!=t&&null!==(r=e.videoTrack[n])&&void 0!==r&&r.end&&(e.videoTrack[n].end=t)})),this.$nuxt.$on("textChange",(function(text,t){var n;null!=text&&null!==(n=e.videoTrack[t])&&void 0!==n&&n.text&&(e.videoTrack[t].text=text)}))},computed:{language:function(){return this.$store.state.manager.language},fileURL:function(){return this.$store.state.videoes.fileURL},fileName:function(){return this.$store.state.videoes.fileName}},methods:{extToContentType:function(e){switch(e){case"mp4":return"video/mp4";case"webm":return"video/webm";case"ogg":case"ogv":case"ogm":return"video/ogg";default:return"application/oct-stream"}},timeTransSRT:function(time){return time.replace(".",",")},onChange:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function n(){var r,o,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new FormData,null==e){n.next=29;break}return n.prev=2,o=e.name.substring(e.name.lastIndexOf(".")+1),c=e.name.substring(0,e.name.lastIndexOf(".")),t.$store.commit("videoes/setFileName",c),r.append("fileKey",e),t.$nuxt.$loading.start(),n.next=10,t.$store.dispatch("videoes/signedURL",r);case 10:return d=n.sent,t.$nuxt.$loading.finish(),n.next=14,V()({method:"put",url:d,data:e,headers:{"Content-Type":t.extToContentType(o)},onUploadProgress:function(e){var n=100*e.loaded/e.total,r=Math.round(n);t.$manage.startLoading(),t.$store.commit("manager/setUploadLoading",r)}});case 14:if(200!==n.sent.status){n.next=20;break}t.$store.dispatch("videoes/setURL").then((function(){t.readToVideo=!0,t.$store.dispatch("videoes/getFiles")})),console.log("Upload Success"),n.next=22;break;case 20:return console.log("Upload Error"),n.abrupt("return");case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(2),console.log(n.t0);case 27:n.next=30;break;case 29:console.log("e is null");case 30:case"end":return n.stop()}}),n,null,[[2,24]])})))()},getTrack:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.videoTrack!=[]&&(e.videoTrack=[]),e.dialog=!e.dialog,t.prev=2,e.$nuxt.$loading.start(),t.next=6,e.$store.dispatch("videoes/loadTrack");case 6:n=t.sent,e.$nuxt.$loading.finish(),e.videoTrack=n.segment,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),e.$nuxt.$loading.finish(),console.log("자막 가져오기 에러");case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()},createTrackVTT:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,r,o,track;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.videoTrack.length){t.next=4;break}e.$manage.showMessage({message:"해당 비디오의 자막이 없습니다.",color:"warning"}),t.next=21;break;case 4:n="WEBVTT\n\n",t.prev=5,r=j(e.videoTrack);try{for(r.s();!(o=r.n()).done;)track=o.value,n+="".concat(track.start," --\x3e ").concat(track.end,"\n").concat(track.text,"\n\n")}catch(e){r.e(e)}finally{r.f()}return e.$nuxt.$loading.start(),t.next=11,e.$store.dispatch("videoes/textToTrack",{track:n,ext:"vtt"});case 11:t.sent,e.$nuxt.$loading.finish(),e.$nuxt.$emit("newTracks"),e.$manage.showMessage({message:"자막 업데이트",color:"success"}),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),e.$nuxt.$loading.finish(),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[5,17]])})))()},createTrackSRT:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,track;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.videoTrack.length){t.next=4;break}e.$manage.showMessage({message:"해당 비디오의 자막이 없습니다.",color:"warning"}),t.next=21;break;case 4:n="",r=1,t.prev=6,o=j(e.videoTrack);try{for(o.s();!(c=o.n()).done;)track=c.value,n+="".concat(r,"\n").concat(e.timeTransSRT(track.start)," --\x3e ").concat(e.timeTransSRT(track.end),"\n").concat(track.text,"\n\n"),r++}catch(e){o.e(e)}finally{o.f()}return e.$nuxt.$loading.start(),t.next=12,e.$store.dispatch("videoes/textToTrack",{track:n,ext:"srt"});case 12:t.sent,e.$nuxt.$loading.finish(),e.$refs.download.$el.click(),e.$manage.showMessage({message:"자막 다운로드",color:"success"}),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[6,18]])})))()},goTrack:function(){this.$nuxt.$emit("trackRefresh")},onEmptyFile:function(){this.readToVideo=!this.readToVideo,this.videoTrack=[]},onClearFile:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("videoes/deleteFile");case 2:"삭제 성공"===t.sent?e.$manage.showMessage({message:"삭제 성공",color:"success"}):e.$manage.showMessage({message:"삭제 실패",color:"error"}),e.$store.commit("videoes/setFileURL",""),e.readToVideo=!1,e.videoTrack=[];case 7:case"end":return t.stop()}}),t)})))()}}},U=(n(613),Object(y.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"videobox",staticClass:"video__box"},[n("div",[n(v.a,{ref:"fileupload",attrs:{label:"업로드 영상"},on:{change:function(t){return e.onChange(t)}}})],1),e._v(" "),n("div",{staticClass:"video__player"},[n(h.a,{staticClass:"video__player__grid",attrs:{"no-gutters":""}},[n(d.a,{staticClass:"video__player__box",attrs:{cols:"8"}},[0!=this.readToVideo?n("div",{staticClass:"video"},[n("video-component",{attrs:{url:this.fileURL}})],1):n("div",[e._v("\n                    비어있음\n                ")])]),e._v(" "),n(d.a,{staticClass:"video__player__meta"},[n(r.a,{attrs:{color:"warning",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onEmptyFile}},[n(f.a,[e._v("\n                        mdi-trash-can\n                    ")]),e._v("\n                    영상 비우기\n                ")],1),e._v(" "),n(r.a,{attrs:{color:"error",elevation:"0",block:"",disabled:!this.readToVideo},on:{click:e.onClearFile}},[n(f.a,[e._v("\n                        mdi-close\n                    ")]),e._v("\n                    영상 삭제\n                ")],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"video__translator"},[n("div",{staticClass:"video__translator__title"},[n("h1",[e._v("자막")]),e._v(" "),n(_.a),e._v(" "),n("div",{staticClass:"video__translator__btngroup"},[n(r.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"download",attrs:{href:(e.isDev?"http://localhost:3085":"https://api.dmtlabs.kr")+"/video/download/"+this.fileName+".srt"}}),e._v(" "),n(r.a,{staticClass:"video__translator__btn",attrs:{color:"#2172FF",depressed:"",tile:"",dark:"",disabled:!this.readToVideo},on:{click:e.createTrackSRT}},[e._v("자막 다운로드 (.srt)")]),e._v(" "),n(r.a,{staticClass:"video__translator__btn",attrs:{color:"#2172FF",depressed:"",tile:"",dark:"",disabled:!this.readToVideo},on:{click:e.createTrackVTT}},[e._v("자막 내보내기 (.vtt)")]),e._v(" "),n(r.a,{staticClass:"video__translator__btn",attrs:{color:"#013183",depressed:"",tile:"",dark:"",disabled:!this.readToVideo},on:{click:function(t){e.dialog=!e.dialog}}},[e._v("자막 가져오기")])],1)],1),e._v(" "),e._l(e.videoTrack,(function(tr,e){return n("div",{key:e,staticClass:"video__translator__content"},[n("track-component",{attrs:{start:tr.start,end:tr.end,text:tr.text,idx:e}})],1)}))],2),e._v(" "),n(l.a,{attrs:{width:"250"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n(o.a,[n(c.d,[n("h5",[e._v("정말 가져오시겠습니까?")])]),e._v(" "),n(c.c,[n("span",{staticStyle:{"font-weight":"bold"}},[e._v("수정하는 중")]),e._v("에 가져오는 경우, "),n("br"),e._v("\n                수정한 내용이 "),n("span",{staticStyle:{color:"red"}},[e._v("모두 사라집니다.")])]),e._v(" "),n(c.a,[n(_.a),e._v(" "),n(r.a,{attrs:{text:""},on:{click:e.getTrack}},[e._v("예")]),e._v(" "),n(r.a,{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("아니오")])],1)],1)],1),e._v(" "),n("snack-bar"),e._v(" "),n("loading-linear")],1)}),[],!1,null,"7c07f2eb",null));t.default=U.exports}}]);