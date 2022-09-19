exports.ids = [17];
exports.modules = {

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(383);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5526adb1", content, true, context)
};

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_0102d3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_0102d3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_0102d3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_0102d3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_0102d3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-0102d3e8]{width:100%;height:100%}.video__box[data-v-0102d3e8]{position:absolute;background:#000;width:50%;height:100%}.video__wrapper[data-v-0102d3e8]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-top:50px dashed grey;border-bottom:50px dashed grey}.video__player[data-v-0102d3e8]{width:100%}.setting__box[data-v-0102d3e8]{position:absolute;background:#8c867a;left:50%;width:50%;height:100%}.track__box[data-v-0102d3e8]{overflow-y:auto;position:absolute;background:#fff;border-radius:25px;margin:15px;padding:25px;width:calc(100% - 30px);height:calc(75% - 30px);font-family:\"MinSans-Medium\",sans-serif!important;white-space:pre-wrap}.track__box[data-v-0102d3e8]::-webkit-scrollbar{display:block;width:10px;height:8px}.track__box[data-v-0102d3e8]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.track__box[data-v-0102d3e8]::-webkit-scrollbar-track{background-color:transparent;margin:15px 0}.setting__box__bottom[data-v-0102d3e8]{position:absolute;top:75%;width:100%;height:25%}.control__box[data-v-0102d3e8]{position:absolute;display:flex;flex-direction:column;justify-content:space-between;background:#fff;border-radius:15px;margin:0 0 15px 15px;padding:25px;width:calc(30% - 30px);height:calc(100% - 15px)}.control__btn[data-v-0102d3e8]{flex:unset!important}.filelist__box[data-v-0102d3e8]{position:absolute;background:#fff;border-radius:15px;margin:0 15px 15px 0;padding:25px;width:calc(70% - 15px);height:calc(100% - 15px);left:30%}.dialog__box[data-v-0102d3e8]{flex-direction:column;text-align:center;height:50vh;padding:25px}.dialog__box[data-v-0102d3e8],.dialog__box__setting[data-v-0102d3e8]{display:flex;align-items:center;justify-content:center;width:100%}.dialog__box__setting[data-v-0102d3e8]{height:90%}.setting__select__box[data-v-0102d3e8]{flex-direction:column;align-items:center;width:50%;height:100%}.select__box[data-v-0102d3e8],.setting__select__box[data-v-0102d3e8]{display:flex;justify-content:space-around}.select__box[data-v-0102d3e8]{width:100%;height:90%;padding:25px}.img[data-v-0102d3e8]{flex:0 0 auto}.dialog__box__process[data-v-0102d3e8]{flex-direction:column;width:50%;height:100%}.dialog__box__loading[data-v-0102d3e8],.dialog__box__process[data-v-0102d3e8]{display:flex;align-items:center;justify-content:center}.dialog__box__loading[data-v-0102d3e8]{width:100%;height:10%}.header__class[data-v-0102d3e8]{border-bottom:3px solid green}.list__wrapper[data-v-0102d3e8]{width:100%;height:80%}.list__select[data-v-0102d3e8]{border:solid #013183!important;color:#013183!important}.action__box[data-v-0102d3e8]{justify-content:space-around;height:10%;padding:25px}.action__box[data-v-0102d3e8],.process__stepper[data-v-0102d3e8]{display:flex;align-items:center;width:100%}.process__stepper[data-v-0102d3e8]{flex-direction:column;justify-content:center;height:100%}.stepper[data-v-0102d3e8]{width:50%;padding:5%}.stepper__btn[data-v-0102d3e8]{border:3px solid #013183}.arrow__wrapper[data-v-0102d3e8]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-0102d3e8]{color:#2172ff;-webkit-animation:arrowAnimation-data-v-0102d3e8 1.5s ease infinite;animation:arrowAnimation-data-v-0102d3e8 1.5s ease infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.arrow[data-v-0102d3e8]:first-child{-webkit-animation-delay:.75s;animation-delay:.75s}.arrow[data-v-0102d3e8]:nth-child(2){-webkit-animation-delay:1s;animation-delay:1s}.arrow[data-v-0102d3e8]:nth-child(3){-webkit-animation-delay:1.25s;animation-delay:1.25s}.hr-sect[data-v-0102d3e8]{display:flex;align-items:center;color:rgba(0,0,0,.35);font-size:12px;width:100%;height:5%}.hr-sect[data-v-0102d3e8]:after,.hr-sect[data-v-0102d3e8]:before{content:\"\";flex-grow:1;background:rgba(0,0,0,.35);height:1px;font-size:0;line-height:0;margin:0 16px}@-webkit-keyframes arrowAnimation-data-v-0102d3e8{0%{color:#fff}to{color:#2172ff}}@keyframes arrowAnimation-data-v-0102d3e8{0%{color:#fff}to{color:#2172ff}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=template&id=0102d3e8&scoped=true&

















var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"video__box\" data-v-0102d3e8>","</div>",[_vm._ssrNode("<input type=\"file\" accept=\".mp4\""+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-0102d3e8> "),(_vm.readToVideo === true)?_vm._ssrNode("<div class=\"video__wrapper\" data-v-0102d3e8>","</div>",[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.videoURL))+" controls=\"controls\" preload=\"auto\" crossorigin=\"anonymous\" class=\"video__player\" data-v-0102d3e8></video>")],2):_vm._ssrNode("<div class=\"video__wrapper\" data-v-0102d3e8>","</div>",[_c(VDialog["a" /* default */],{attrs:{"width":"60vw","persistent":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var attrs = ref.attrs;
return [_c(VBtn["a" /* default */],_vm._b({attrs:{"rounded":""},on:{"click":_vm.uploadVideo}},'v-btn',attrs,false),[_c(VIcon["a" /* default */],[_vm._v("\n                            mdi-plus\n                        ")]),_vm._v("\n                        새로 만들기\n                    ")],1)]}}]),model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_vm._v(" "),_c(VCard["a" /* default */],[_c('div',{staticClass:"dialog__box"},[_c('div',{staticClass:"dialog__box__setting"},[_c('div',{staticClass:"setting__select__box",on:{"click":function($event){_vm.dialog = !_vm.dialog}}},[_c(VImg["a" /* default */],{staticClass:"img",attrs:{"src":"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),_vm._v(" "),(_vm.beforeSelect)?_c('div',{staticClass:"setting__select__box"},[_c('div',{staticClass:"select__box"},[_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                영상의 원본 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.req),callback:function ($$v) {_vm.req=$$v},expression:"req"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1),_vm._v(" "),_c(VIcon["a" /* default */],[_vm._v("\n                                        mdi-arrow-right\n                                    ")]),_vm._v(" "),_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                번역하고 싶은 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.grant),callback:function ($$v) {_vm.grant=$$v},expression:"grant"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"action__box"},[_c(VBtn["a" /* default */],{attrs:{"block":"","rounded":"","color":"#013183","dark":""},on:{"click":_vm.onTaskStart}},[_vm._v("\n                                        번역하기\n                                    ")])],1)]):_c('div',{staticClass:"dialog__box__process"},[_c('div',{staticClass:"process__stepper"},[_c('div',{staticClass:"stepper"},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"primary","disabled":_vm.step != 1}},[_vm._v("\n                                            영상 업로드\n                                        ")])],1),_vm._v(" "),(_vm.step === 1)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"warning","disabled":_vm.step != 2}},[_vm._v("\n                                            영상 인식\n                                        ")])],1),_vm._v(" "),(_vm.step === 2)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"success","disabled":_vm.step != 3}},[_vm._v("\n                                            자막 번역\n                                        ")])],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"dialog__box__loading"},[_c(VProgressLinear["a" /* default */],{attrs:{"color":"#013183","height":"25px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var value = ref.value;
return [_c('strong',{staticStyle:{"color":"white"}},[_vm._v(_vm._s(Math.ceil(value))+"%")])]}}]),model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}})],1)])])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"setting__box\" data-v-0102d3e8>","</div>",[_vm._ssrNode("<div class=\"track__box\" data-v-0102d3e8>"+(_vm._s(_vm.track))+"</div> "),_vm._ssrNode("<div class=\"setting__box__bottom\" data-v-0102d3e8>","</div>",[_vm._ssrNode("<div class=\"control__box\" data-v-0102d3e8>","</div>",[_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":""}},[_vm._v("\n                    원본 자막 보기\n                ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":""}},[_vm._v("\n                    번역 자막 보기\n                ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":""}},[_vm._v("\n                    자막 다운로드\n                ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":""}},[_vm._v("\n                    영상 다운로드\n                ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":""}},[_vm._v("\n                    다른 언어로 번역하기\n                ")])],2),_vm._ssrNode(" <div class=\"filelist__box\" data-v-0102d3e8></div>")],2)],2),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"250"},model:{value:(_vm.newVideoDialog),callback:function ($$v) {_vm.newVideoDialog=$$v},expression:"newVideoDialog"}},[_c(VCard["a" /* default */],[_c(components_VCard["d" /* VCardTitle */],[_c('h5',[_vm._v("정말 가져오시겠습니까?")])]),_vm._v(" "),_c(components_VCard["c" /* VCardText */],[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("수정하는 중")]),_vm._v("에 가져오는 경우, "),_c('br'),_vm._v("\n                수정한 내용이 "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("모두 사라집니다.")])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.uploadVideo}},[_vm._v("예")]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":function($event){_vm.newVideoDialog = false}}},[_vm._v("아니오")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/video/service.vue?vue&type=template&id=0102d3e8&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(43);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=script&lang=js&

/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  layout: 'ServiceLayout',

  data() {
    return {
      // 다이얼로그 제어 변수
      dialog: false,
      newVideoDialog: false,
      downloadDialog: false,
      deleteFileDialog: false,
      fileTab: 0,
      textTab: 0,
      // 컨트롤 변수
      readToVideo: false,
      readyToTrack: false,
      loading: 0,
      preSignedUrlResponse: false,
      uploadResponse: false,
      trackCompleteResponse: false,
      step: 1,
      selectVideo: false,
      beforeSelect: true,
      // 데이터 변수
      isDev: "production".includes('dev'),
      video: {},
      videoTrack: [],
      selectFilename: "",
      file: {},
      deleteItem: "",
      fullTrack: [],
      timeLine: [],
      originalTrack: [],
      transTrack: [],
      cueTrack: [],
      transCueTrack: [],
      track: "",
      trans: "",
      track: "",
      req: 0,
      grant: 2
    };
  },

  computed: {
    language() {
      return this.$store.state.manager.language;
    },

    languages() {
      return this.$LANGUAGES_KO;
    },

    videoList() {
      return this.$store.state.videoes.files;
    },

    videoURL() {
      return this.$store.state.videoes.fileURL;
    },

    req_lang() {
      return this.languages[this.req];
    },

    grant_lang() {
      return this.languages[this.grant];
    },

    req_code() {
      return this.$LANG_CODE[this.req];
    },

    grant_code() {
      return this.$LANG_CODE[this.grant];
    },

    trackMode() {
      switch (this.fileTab) {
        case 1:
          return "srt";
          break;

        case 2:
          return "vtt";
          break;

        case 0:
        default:
          return "NotFoundMode";
      }
    }

  },
  watch: {
    fileTab(value) {
      if (value === 1) {
        this.$refs.tab_1.style.border = "0";
        this.$refs.tab_1.style.backgroundColor = "#2172FF";
        this.$refs.tab_1.style.opacity = "1";
        this.$refs.tab_2.style.border = "3px dashed grey";
        this.$refs.tab_2.style.backgroundColor = "#FFFFFF";
        this.$refs.tab_2.style.opacity = "0.6";
      } else if (value === 2) {
        this.$refs.tab_1.style.border = "3px dashed grey";
        this.$refs.tab_1.style.backgroundColor = "#FFFFFF";
        this.$refs.tab_1.style.opacity = "0.6";
        this.$refs.tab_2.style.border = "0";
        this.$refs.tab_2.style.backgroundColor = "#2172FF";
        this.$refs.tab_2.style.opacity = "1";
      } else {
        this.$refs.tab_1.style.border = "3px dashed grey";
        this.$refs.tab_1.style.backgroundColor = "#FFFFFF";
        this.$refs.tab_1.style.opacity = "0.6";
        this.$refs.tab_2.style.border = "3px dashed grey";
        this.$refs.tab_2.style.backgroundColor = "#FFFFFF";
        this.$refs.tab_2.style.opacity = "0.6";
      }
    },

    textTab(value) {
      if (value === 1) {
        this.$refs.textTab_1.style.border = "0";
        this.$refs.textTab_1.style.backgroundColor = "#2172FF";
        this.$refs.textTab_1.style.opacity = "1";
        this.$refs.textTab_2.style.border = "3px dashed grey";
        this.$refs.textTab_2.style.backgroundColor = "#FFFFFF";
        this.$refs.textTab_2.style.opacity = "0.6";
      } else if (value === 2) {
        this.$refs.textTab_1.style.border = "3px dashed grey";
        this.$refs.textTab_1.style.backgroundColor = "#FFFFFF";
        this.$refs.textTab_1.style.opacity = "0.6";
        this.$refs.textTab_2.style.border = "0";
        this.$refs.textTab_2.style.backgroundColor = "#2172FF";
        this.$refs.textTab_2.style.opacity = "1";
      } else {
        this.$refs.textTab_1.style.border = "3px dashed grey";
        this.$refs.textTab_1.style.backgroundColor = "#FFFFFF";
        this.$refs.textTab_1.style.opacity = "0.6";
        this.$refs.textTab_2.style.border = "3px dashed grey";
        this.$refs.textTab_2.style.backgroundColor = "#FFFFFF";
        this.$refs.textTab_2.style.opacity = "0.6";
      }
    }

  },
  methods: {
    loadingLogic(step) {
      switch (step) {
        case 1:
          // 영상 Presigned URL 발급
          let firstStep = setInterval(() => {
            if (!this.preSignedUrlResponse) {
              if (this.loading < 15) this.loading++;
            } else {
              if (this.loading < 16) this.loading = 16;
              clearInterval(firstStep);
            }
          }, 1500);
          break;

        case 2:
          // 영상 업로드
          let secondStep = setInterval(() => {
            if (!this.uploadResponse) {
              if (this.loading < 32) this.loading++;
            } else {
              if (this.loading < 33) this.loading = 33;
              this.step = 2;
              clearInterval(secondStep);
            }
          }, 1500);
          break;

        case 3:
          // 영상 인식
          let thirdStep = setInterval(() => {
            if (!this.trackCompleteResponse) {
              if (this.loading < 65) this.loading++;
            } else {
              if (this.loading < 66) this.loading = 66;
              this.step = 3;
              clearInterval(thirdStep);
            }
          }, 2500);
          break;

        case 4:
          // 자막 번역
          let fourthStep = setInterval(() => {
            if (this.transTrack.length === 0) {
              if (this.loading < 99) this.loading++;
            } else {
              if (this.loading < 100) this.loading = 100;
              this.dialog = false;
              clearInterval(fourthStep);
              this.loading = 0;
            }
          }, 2000);
          break;

        default:
          // 종료 트리거를 받는다면
          console.log("step 종료");
      }
    },

    extToContentType(ext) {
      switch (ext) {
        case 'mp4':
          return 'video/mp4';

        case 'webm':
          return 'video/webm';

        case 'ogg':
        case 'ogv':
        case 'ogm':
          return 'video/ogg';

        default:
          return 'application/oct-stream';
      }
    },

    trackMerge() {
      let result = [];

      for (let i = 0; i < Math.max(this.timeLine.length, this.originalTrack.length); i++) {
        result[i] = { ...this.timeLine[i],
          ...{
            text: this.originalTrack[i]
          }
        };
      }

      this.fullTrack = result;
    },

    trackFormating(mode, track) {
      if (mode === 'srt') {
        let result = "";

        for (let i = 0; i < Math.min(this.timeLine.length, track.length); i++) {
          result += `${i + 1}\n${this.timeLine[i].start.replace(".", ",")} --> ${this.timeLine[i].end.replace(".", ",")}\n${track[i]}\n\n`;
        }

        return result;
      } else {
        let result = "WEBVTT\n\n";

        for (let i = 0; i < Math.min(this.timeLine.length, track.length); i++) {
          result += `${this.timeLine[i].start} --> ${this.timeLine[i].end}\n${track[i]}\n\n`;
        }

        return result;
      }
    },

    async trackOn(lang) {
      await this.$nextTick();
      this.video = this.$refs.videoplayer;
      this.cueTrack = this.video.addTextTrack("subtitles", this.req_lang, this.req_code);
      this.transCueTrack = this.video.addTextTrack("subtitles", this.grant_lang, this.grant_code);
      this.cueTrack.mode = "showing";
      this.transCueTrack.mode = "showing";

      for (let i = 0; i < this.fullTrack.length; i++) this.cueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.originalTrack[i]));

      for (let i = 0; i < this.fullTrack.length; i++) this.transCueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.transTrack[i])); // console.log(this.cueTrack.cues);

    },

    async onChange(event) {
      try {
        if (event != null && event.target.files.length != 0) {
          this.newVideo();
          this.file = event.target.files[0];
          this.dialog = true;
        } else {
          console.log("e is null");
        }
      } catch (err) {
        console.log(err);
      }
    },

    uploadVideo() {
      if (!this.selectVideo) {
        this.newVideoDialog = false;
        this.$refs.upload.click();
      } else {
        this.$refs.upload.click();
      }
    },

    async onTaskStart() {
      this.beforeSelect = false;
      this.originalTrack = "";
      this.transTrack = ""; // 파일 전처리
      // 파일 업로드인 경우

      if (!this.selectVideo) {
        const filename = this.file.name;
        const fileFormData = new FormData();
        const name = filename.substring(0, filename.lastIndexOf('.'));
        const ext = filename.substring(filename.lastIndexOf('.') + 1);
        this.$store.commit('videoes/setFileName', name);
        this.$store.commit('videoes/setFileExt', ext);
        fileFormData.append('fileKey', this.file);

        try {
          // Signed URL 발급 : loading = 16
          this.loadingLogic(1); //console.time('SignedURL Time');

          const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
          this.preSignedUrlResponse = true; //console.timeEnd('SignedURL Time');
          // Signed URL을 통한 업로드 : loading = 16

          this.loadingLogic(2); //console.time('Upload Time');

          const upload = await external_axios_default.a.put(preSignedUrl, this.file, {
            headers: {
              'Content-Type': this.extToContentType(ext)
            }
          }); //console.timeEnd('Upload Time');
          // 영상 인식 : loading = 33

          if (upload.status === 200) {
            this.loadingLogic(3);
            this.uploadResponse = true;
            await this.$store.commit('videoes/setFile', undefined);
            await this.$store.dispatch('videoes/setURL'); //console.time("Recognition Time");

            const trackResponse = await this.$store.dispatch('videoes/postVideo');
            this.trackCompleteResponse = true; //console.timeEnd("Recognition Time");

            this.track = trackResponse.track;
            this.originalTrack = trackResponse.segment;
            this.timeLine = trackResponse.timeline; //console.log("Merge");

            this.trackMerge();
            this.$store.dispatch('videoes/getFiles'); // 자막 번역 : loading = 33

            this.loadingLogic(4); //console.time("Translate Time");

            this.transTrack = await this.$store.dispatch('videoes/transTrack', {
              "from": this.req_code,
              "to": this.grant_code,
              "track": this.fullTrack
            });
            this.trans = this.trackFormating('vtt', this.transTrack); //console.timeEnd("Translate Time");
            // this.$nuxt.$emit('transTracks', this.grant_lang);
            // this.$manage.showMessage({ message: "자막 업데이트", color: "success" });

            this.readToVideo = true;
            this.readyToTrack = true; // 여기엔 영상에 자막을 ON 시키는 메소드

            this.trackOn(this.req_lang);
            this.selectFilename = this.$store.state.videoes.fileName;
            this.dialog = false;
          } else {
            this.$menage.showMessage({
              message: "영상 업로드에 실패했습니다.\n관리자에게 문의하세요.",
              color: "error"
            });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        // 파일 선택의 경우
        try {
          // 영상 인식 : loading = 33
          this.loading = 33;
          this.loadingLogic(3);
          this.uploadResponse = true;
          await this.$store.dispatch('videoes/setURL');
          const trackResponse = await this.$store.dispatch('videoes/postVideo');
          this.trackCompleteResponse = true;
          this.track = trackResponse.track;
          this.originalTrack = trackResponse.segment;
          this.timeLine = trackResponse.timeline;
          this.trackMerge(); // 자막 번역 : loading = 33

          this.loadingLogic(4);
          this.transTrack = await this.$store.dispatch('videoes/transTrack', {
            "from": this.req_code,
            "to": this.grant_code,
            "track": this.fullTrack
          });
          this.readToVideo = true;
          this.readyToTrack = true;
          this.trackOn(this.req_lang);
          this.dialog = false;
          this.selectVideo = false;
        } catch (err) {
          console.log(err);
        }
      }
    },

    newVideo() {
      this.newVideoDialog = false;
      this.readToVideo = false;
      this.readyToTrack = false;
      this.file = {};
      this.fullTrack = [];
      this.timeLine = [];
      this.originalTrack = [];
      this.transTrack = [];
      this.track = "";
      this.trans = "";
      this.loading = 0;
      this.dialog = false;
      this.beforeSelect = true;
      this.step = 1;
      this.preSignedUrlResponse = false;
      this.uploadResponse = false;
      this.trackCompleteResponse = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/video/service.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/video/service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(382)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0102d3e8",
  "8974972c"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service.js.map