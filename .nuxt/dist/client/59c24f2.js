(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{503:function(t,e,n){var content=n(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("39d649a8",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n(503)},559:function(t,e,n){var l=n(8)(!1);l.push([t.i,".button__layout[data-v-2dfc2cb4],.layout__container[data-v-2dfc2cb4]{display:flex;flex-direction:column}.button__group[data-v-2dfc2cb4]{display:flex;justify-content:center;width:30%;margin:0 3%}.button__object[data-v-2dfc2cb4]{overflow:hidden;justify-content:flex-start;width:50%}.button__object[data-v-2dfc2cb4] div{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;font-size:.75rem}.selector[data-v-2dfc2cb4]{width:100%}.translate__layout[data-v-2dfc2cb4]{display:flex;height:60%;margin-bottom:25px}.translate__container[data-v-2dfc2cb4]{width:40vw;height:100%}.translate__input[data-v-2dfc2cb4]{height:100%}.file__layout[data-v-2dfc2cb4]{display:flex;flex-direction:row;height:60%;align-items:center;justify-content:space-around;margin:0 25px}.file__container[data-v-2dfc2cb4]{padding:25px;width:40%;align-items:center;justify-content:center}.file__translate[data-v-2dfc2cb4]{width:50%}[data-v-2dfc2cb4] .v-input__control{height:100%;flex-direction:row}[data-v-2dfc2cb4] .v-input__slot{height:90%}[data-v-2dfc2cb4] .v-text-field__details{height:10%}.file_upload[data-v-2dfc2cb4] input{text-align:center}.translator__layout[data-v-2dfc2cb4]{height:47vh;margin:0 25px}.translator__sheet[data-v-2dfc2cb4]{height:100%}.translator__recruit[data-v-2dfc2cb4]{font-size:48px}@media screen and (max-width:1300px){.button__group[data-v-2dfc2cb4]{width:40%}}@media screen and (max-width:900px){.layout__container[data-v-2dfc2cb4]{display:block}.button__group[data-v-2dfc2cb4]{width:50%}.translator__layout[data-v-2dfc2cb4]{height:40vh;margin:0 10px}}@media screen and (max-width:700px){.button__group[data-v-2dfc2cb4]{width:auto}.translate__layout[data-v-2dfc2cb4]{flex-direction:column}.translate__container[data-v-2dfc2cb4]{width:100%}.file__layout[data-v-2dfc2cb4]{flex-direction:column}.file__container[data-v-2dfc2cb4]{width:100%;height:40%;padding:10px}.file__translate[data-v-2dfc2cb4]{width:100%;height:50%}.file__translate[data-v-2dfc2cb4] .v-textarea{height:90%}.translator__recruit[data-v-2dfc2cb4]{font-size:2rem}}@media screen and (max-width:400px){.layout__container[data-v-2dfc2cb4]{padding:0}.button__object[data-v-2dfc2cb4]{font-size:.1rem}.translate__layout[data-v-2dfc2cb4]{height:auto}.translator__layout[data-v-2dfc2cb4]{height:40vh}.translator__recruit[data-v-2dfc2cb4]{font-size:1rem}}",""]),t.exports=l},600:function(t,e,n){"use strict";n.r(e);var l=n(15),o=n(7),r=(n(49),n(10),n(23),n(117)),c=n.n(r),_={layout:"TextLayout",data:function(){return{colors:["indigo lighten-4","amber lighten-2","pink lighten-4","red lighten-3","deep-purple lighten-3"],slides:["김민수","이민지","김철수","홍길동","제임스"],fields:["경제","정보통신","언어","과학","자동차"],toggle:0,from_lang:"",from_code:"ko",to_lang:"",to_code:"zh-chs",from_text:"",acceptFiles:".txt,.pdf",test_file:"",from_file_lang:"",to_file_lang:"",from_file_code:"",to_file_code:"",file_text:""}},created:function(){this.from_lang="한국어"===this.language?"한국어":"Korean",this.to_lang="한국어"===this.language?"중국어(간체)":"Chinese(Simplified)",this.from_file_lang="한국어"===this.language?"한국어":"Korean",this.to_file_lang="한국어"===this.language?"중국어(간체)":"Chinese(Simplified)"},computed:{language:function(){return this.$store.state.manager.language},from_languages:function(){return this.$LANGUAGES_KO},e_from_languages:function(){return this.$LANGUAGES_EN},languages:function(){var t=this,e=this.$LANGUAGES_KO;return null!=e&&(e=e.filter((function(e){return e!=t.from_lang}))),e},e_languages:function(){var t=this,e=this.$LANGUAGES_EN;return null!=e&&(e=e.filter((function(e){return e!=t.from_lang}))),e},file_languages:function(){var t=this,e=this.$LANGUAGES_KO;return null!=e&&(e=e.filter((function(e){return e!=t.from_file_lang}))),e},e_file_languages:function(){var t=this,e=this.$LANGUAGES_EN;return null!=e&&(e=e.filter((function(e){return e!=t.from_file_lang}))),e},to_text:function(){return this.$store.state.manager.translateText}},watch:{language:function(t){this.from_lang="한국어"===t?"한국어":"Korean",this.to_lang="한국어"===t?"중국어(간체)":"Chinese(Simplified)",this.from_file_lang="한국어"===this.language?"한국어":"Korean",this.to_file_lang="한국어"===this.language?"중국어(간체)":"Chinese(Simplified)"},from_lang:c.a.debounce((function(t){this.from_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(t)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(t)],this.translate()}),500),to_lang:c.a.debounce((function(t){this.to_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(t)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(t)],this.translate()}),500),from_file_lang:c.a.debounce((function(t){this.from_file_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(t)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(t)],""==this.from_text&&null==this.from_text||this.uploadFile(this.test_file)}),500),to_file_lang:c.a.debounce((function(t){this.to_file_code="한국어"===this.language?this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(t)]:this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(t)],""==this.from_text&&null==this.from_text||this.uploadFile(this.test_file)}),500),from_text:c.a.debounce((function(text){this.translate()}),500)},methods:{translate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.from_lang.length&&0!=t.to_lang.length){e.next=4;break}t.$manage.showMessage({message:"언어를 선택해주세요.",color:"red"}),e.next=18;break;case 4:if(""!=t.from_text&&null!=t.from_text){e.next=8;break}t.$store.commit("manager/setTranslate",""),e.next=18;break;case 8:return e.prev=8,t.$nuxt.$loading.start(),e.next=12,t.$store.dispatch("manager/Test",{from:t.from_code,to:t.to_code,text:t.from_text,returnValue:!1});case 12:e.sent,t.$nuxt.$loading.finish(),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(8);case 18:case"end":return e.stop()}}),e,null,[[8,16]])})))()},uploadFile:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,_,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"object"!=Object(l.a)(t)){n.next=32;break}if(!(t.size/1e6>=5.5)){n.next=5;break}e.$manage.showMessage({message:"파일 크기가 너무 큽니다.",color:"red"}),n.next=30;break;case 5:e.test_file=t,o=""+e.test_file.name,r=o.substring(o.lastIndexOf(".")+1,o.length).toLowerCase(),n.t0=r,n.next="txt"===n.t0?11:"docx"===n.t0?21:"pdf"===n.t0?22:29;break;case 11:return e.$nuxt.$loading.start(),n.next=14,e.test_file.text();case 14:return c=n.sent,n.next=17,e.$store.dispatch("manager/Test",{from:e.from_file_code,to:e.to_file_code,text:c,returnValue:!0});case 17:return _=n.sent,e.$nuxt.$loading.finish(),e.file_text=_,n.abrupt("break",30);case 21:return n.abrupt("break",30);case 22:return e.$nuxt.$loading.start(),n.next=25,e.$store.dispatch("manager/textExtract",{from:e.from_file_code,to:e.to_file_code,file:e.test_file});case 25:return d=n.sent,e.$nuxt.$loading.finish(),e.file_text=d,n.abrupt("break",30);case 29:return n.abrupt("break",30);case 30:n.next=34;break;case 32:e.file_text="",e.test_file="";case 34:case"end":return n.stop()}}),n)})))()}}},d=(n(558),n(22)),f=n(30),h=n.n(f),v=n(447),x=n(588),m=n(607),y=n(608),k=n(473),$=n(526),w=n(186),C=n(589),A=n(605),G=n(46),E=n(527),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"layout__container"},[n("v-layout",{staticClass:"button__layout"},[n("v-btn-toggle",{staticClass:"button__group",attrs:{tile:"",mandatory:""},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[n("v-btn",{staticClass:"button__object"},[n("div",[n("v-icon",[t._v("mdi-earth")])],1),t._v(" "),"한국어"===t.language?n("div",[n("h4",[t._v("언어 번역")]),t._v(" "),n("div",[t._v("8개의 언어")])]):"영어"===t.language?n("div",[n("h4",[t._v("Translation")]),t._v(" "),n("div",[t._v("8 languages")])]):t._e()]),t._v(" "),n("v-btn",{staticClass:"button__object"},[n("div",[n("v-icon",[t._v("mdi-file")])],1),t._v(" "),"한국어"===t.language?n("div",[n("h4",[t._v("파일 번역")]),t._v(" "),n("div",[t._v(".txt .pdf만 가능")])]):"영어"===t.language?n("div",[n("h4",[t._v("File translation")]),t._v(" "),n("div",[t._v("Only .txt / .pdf")])]):t._e()])],1)],1),t._v(" "),0===t.toggle?n("v-layout",{staticClass:"translate__layout"},[n("v-container",{staticClass:"translate__container"},[n("client-only",[n("v-select",{staticClass:"selector",attrs:{dense:"",items:"한국어"===t.language?t.from_languages:t.e_from_languages,placeholder:"한국어"===t.language?"언어 선택":"Select","single-line":"","hide-details":""},model:{value:t.from_lang,callback:function(e){t.from_lang=e},expression:"from_lang"}})],1),t._v(" "),"한국어"===t.language?n("v-textarea",{staticClass:"translate__input",staticStyle:{"z-index":"0"},attrs:{"prepend-inner-icon":"mdi-book-sync",placeholder:"번역할 언어를 적어주세요.",clearable:"",counter:"",outlined:"","background-color":"grey lighten-2"},model:{value:t.from_text,callback:function(e){t.from_text=e},expression:"from_text"}}):"영어"===t.language?n("v-textarea",{staticClass:"translate__input",staticStyle:{"z-index":"0"},attrs:{"prepend-inner-icon":"mdi-book-sync",placeholder:"Enter what you want to translate.",clearable:"",counter:"",outlined:"","background-color":"grey lighten-2"},model:{value:t.from_text,callback:function(e){t.from_text=e},expression:"from_text"}}):t._e()],1),t._v(" "),n("v-container",{staticClass:"translate__container"},[n("client-only",[n("v-select",{staticClass:"selector",attrs:{dense:"",items:"한국어"===t.language?t.languages:t.e_languages,placeholder:"한국어"===t.language?"언어 선택":"Select","single-line":"","hide-details":""},model:{value:t.to_lang,callback:function(e){t.to_lang=e},expression:"to_lang"}})],1),t._v(" "),"한국어"===t.language?n("v-textarea",{staticClass:"translate__input",staticStyle:{"z-index":"0"},attrs:{"prepend-inner-icon":"mdi-book-check",placeholder:"번역한 결과입니다.",counter:"",outlined:"",readonly:"","background-color":"grey lighten-2"},model:{value:t.to_text,callback:function(e){t.to_text=e},expression:"to_text"}}):"영어"===t.language?n("v-textarea",{staticClass:"translate__input",staticStyle:{"z-index":"0"},attrs:{"prepend-inner-icon":"mdi-book-check",placeholder:"Result of the translation.",counter:"",outlined:"",readonly:"","background-color":"grey lighten-2"},model:{value:t.to_text,callback:function(e){t.to_text=e},expression:"to_text"}}):t._e()],1)],1):n("v-layout",{staticClass:"file__layout"},[n("div",{staticClass:"file__container text-center"},[n("v-select",{staticClass:"selector",attrs:{dense:"",items:"한국어"===t.language?t.from_languages:t.e_from_languages,placeholder:"한국어"===t.language?"언어 선택":"Select","single-line":"","hide-details":""},model:{value:t.from_file_lang,callback:function(e){t.from_file_lang=e},expression:"from_file_lang"}}),t._v(" "),n("v-icon",{staticClass:"text-h1"},[t._v("mdi-folder-upload")]),t._v(" "),n("div",[t._v("5MB 아래 파일만 가능 "),n("br"),t._v(" (Only Low than 5MB)")]),t._v(" "),"한국어"===t.language?n("v-file-input",{staticClass:"file_upload",attrs:{placeholder:"업로드",accept:t.acceptFiles,outlined:"",rounded:"","prepend-icon":""},on:{change:t.uploadFile}}):"영어"===t.language?n("v-file-input",{staticClass:"file_upload",attrs:{placeholder:"Upload",accept:t.acceptFiles,outlined:"",rounded:"","prepend-icon":""},on:{change:t.uploadFile}}):t._e()],1),t._v(" "),n("div",{staticClass:"file__translate"},[n("v-select",{staticClass:"selector",attrs:{dense:"",items:"한국어"===t.language?t.file_languages:t.e_file_languages,placeholder:"한국어"===t.language?"언어 선택":"Select","single-line":"","hide-details":""},model:{value:t.to_file_lang,callback:function(e){t.to_file_lang=e},expression:"to_file_lang"}}),t._v(" "),n("v-textarea",{staticStyle:{"z-index":"0"},attrs:{rows:"15",counter:"",outlined:"",readonly:"","background-color":"grey lighten-2"},model:{value:t.file_text,callback:function(e){t.file_text=e},expression:"file_text"}})],1)]),t._v(" "),n("v-layout",{staticClass:"translator__layout"},[n("v-carousel",{attrs:{interval:"3000","hide-delimiter-background":"","hide-delimiters":"","show-arrows":!1,height:"100%"}},t._l(t.slides,(function(e,i){return n("v-carousel-item",{key:i},[n("v-sheet",{staticClass:"translator__sheet",attrs:{color:t.colors[i]}},[n("v-layout",{staticClass:"translator__recruit fill-height text-center",attrs:{"align-center":"","justify-center":""}},[t._v("\n            "+t._s("한국어"===t.language?"번역자 모집":"Translator Recruit")),n("br"),t._v("\n            "+t._s("한국어"===t.language?"모집일은 추후 공지":"Recruitment date will be announced later")+"\n          ")])],1)],1)})),1)],1)],1)}),[],!1,null,"2dfc2cb4",null);e.default=component.exports;h()(component,{VBtn:v.a,VBtnToggle:x.a,VCarousel:m.a,VCarouselItem:y.a,VContainer:k.a,VFileInput:$.a,VIcon:w.a,VLayout:C.a,VSelect:A.a,VSheet:G.a,VTextarea:E.a})}}]);