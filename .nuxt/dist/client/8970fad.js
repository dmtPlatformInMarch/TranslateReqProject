(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{496:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("73138a92",content,!0,{sourceMap:!1})},524:function(t,e,n){"use strict";n(496)},525:function(t,e,n){var r=n(8)(!1);r.push([t.i,".main__template[data-v-9e591238],.test__box[data-v-9e591238]{width:100%;height:100%}.test__box[data-v-9e591238]{display:flex;flex-direction:column}.test__up[data-v-9e591238]{margin:0 50px}.test__down[data-v-9e591238]{margin:15px 50px}.output[data-v-9e591238],.test__down[data-v-9e591238]{display:flex;align-items:center;justify-content:center}.output[data-v-9e591238]{height:70%;border:1px solid #000;margin:0 50px;padding:25px}",""]),t.exports=r},593:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(23),n(49),{layout:"TestLayout",data:function(){return{readToExtract:!1}},computed:{watchFileText:function(){return this.$store.state.test.fileText}},watch:{readToExtract:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=5;break}return n.next=4,e.$store.dispatch("test/extract");case 4:e.readToExtract=!1;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},watchFileText:function(t){}},methods:{onChange:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=new FormData,null==t){n.next=24;break}return n.prev=2,r.append("fileKey",t),n.next=6,e.$store.dispatch("test/signedURL",r);case 6:return o=n.sent,n.next=9,fetch(new Request(o,{method:"PUT",headers:{"Content-Type":"application/octest-stream","Content-Disposition":"attachment; filename=".concat(encodeURI(t.name))},body:t}));case 9:if(200!==n.sent.status){n.next=14;break}e.readToExtract=!0,n.next=17;break;case 14:return console.log("Upload Error"),e.readToExtract=!1,n.abrupt("return");case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),console.log(n.t0);case 22:n.next=25;break;case 24:console.log("e is null");case 25:case"end":return n.stop()}}),n,null,[[2,19]])})))()},onClearFile:function(){this.$store.dispatch("test/deleteFile"),this.readToExtract=!1}}}),c=(n(524),n(22)),l=n(30),d=n.n(l),h=n(447),x=n(526),f=n(186),v=n(527),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test__box"},[n("h1",[t._v("이곳은 테크니컬 테스트 페이지입니다.")]),t._v(" "),n("div",{staticClass:"test__up"},[n("v-file-input",{attrs:{label:"파일 업로드 테스트"},on:{change:function(e){return t.onChange(e)},"click:clear":t.onClearFile}})],1),t._v(" "),n("div",{staticClass:"test__down"},[n("v-btn",{attrs:{block:"",href:null!=this.$store.state.test.file?"http://localhost:3085/test/file/download/"+this.$store.state.test.file.name:"",disabled:null==this.$store.state.test.file}},[t._v("\n      다운로드\n      "),n("v-icon",{attrs:{right:""}},[t._v("mdi-file")])],1)],1),t._v(" "),n("div",{staticClass:"output"},[n("v-textarea",{attrs:{"background-color":"grey lighten-2",color:"black",rows:"25","row-height":"25",outlined:"",readonly:""},model:{value:t.watchFileText,callback:function(e){t.watchFileText=e},expression:"watchFileText"}})],1)])}),[],!1,null,"9e591238",null);e.default=component.exports;d()(component,{VBtn:h.a,VFileInput:x.a,VIcon:f.a,VTextarea:v.a})}}]);