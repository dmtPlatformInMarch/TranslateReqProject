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
  add("42ebfa5d", content, true, context)
};

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_1b6e115f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_1b6e115f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_1b6e115f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_1b6e115f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_1b6e115f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-1b6e115f]{width:100%;height:100%}.video__box[data-v-1b6e115f]{position:absolute;background:#000;width:50%;height:100%}.video__wrapper[data-v-1b6e115f]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.video__player[data-v-1b6e115f]{width:100%}.setting__box[data-v-1b6e115f]{position:absolute;background:#8c867a;left:50%;width:50%;height:100%}.track__box[data-v-1b6e115f]{overflow-y:auto;position:absolute;background:#fff;border-radius:25px;margin:15px;padding:25px;width:calc(100% - 30px);height:calc(75% - 30px);font-family:\"MinSans-Medium\",sans-serif!important}.track__box[data-v-1b6e115f]::-webkit-scrollbar{display:block;width:10px;height:8px}.track__box[data-v-1b6e115f]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.track__box[data-v-1b6e115f]::-webkit-scrollbar-track{background-color:transparent;margin:15px 0}.setting__box__bottom[data-v-1b6e115f]{position:absolute;top:75%;width:100%;height:25%}.control__box[data-v-1b6e115f]{width:25%}.control__box[data-v-1b6e115f],.filelist__box[data-v-1b6e115f]{position:absolute;height:100%}.filelist__box[data-v-1b6e115f]{left:25%;width:75%}", ""]);
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=template&id=1b6e115f&scoped=true&













var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"video__box\" data-v-1b6e115f>","</div>",[_vm._ssrNode("<input type=\"file\" accept=\".mp4\""+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-1b6e115f> "),(_vm.readToVideo === true)?_vm._ssrNode("<div class=\"video__wrapper\" data-v-1b6e115f>","</div>",[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.videoURL))+" controls=\"controls\" preload=\"auto\" crossorigin=\"anonymous\" class=\"video__player\" data-v-1b6e115f></video>")],2):_vm._ssrNode("<div class=\"video__wrapper\" data-v-1b6e115f>","</div>",[_c(VDialog["a" /* default */],{attrs:{"width":"60vw","persistent":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var attrs = ref.attrs;
return [_c(VBtn["a" /* default */],_vm._b({attrs:{"rounded":""},on:{"click":_vm.uploadVideo}},'v-btn',attrs,false),[_c(VIcon["a" /* default */],[_vm._v("\n                            mdi-plus\n                        ")]),_vm._v("\n                        새로 만들기\n                    ")],1)]}}]),model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_vm._v(" "),_c(VCard["a" /* default */],[_c('div',{staticClass:"dialog__box"},[_c('div',{staticClass:"dialog__box__setting"},[_c('div',{staticClass:"setting__select__box",on:{"click":function($event){_vm.dialog = !_vm.dialog}}},[_c(VImg["a" /* default */],{staticClass:"img",attrs:{"src":"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),_vm._v(" "),(_vm.beforeSelect)?_c('div',{staticClass:"setting__select__box"},[_c('div',{staticClass:"select__box"},[_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                영상의 원본 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.req),callback:function ($$v) {_vm.req=$$v},expression:"req"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1),_vm._v(" "),_c(VIcon["a" /* default */],[_vm._v("\n                                        mdi-arrow-right\n                                    ")]),_vm._v(" "),_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                번역하고 싶은 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.grant),callback:function ($$v) {_vm.grant=$$v},expression:"grant"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"action__box"},[_c(VBtn["a" /* default */],{attrs:{"block":"","rounded":"","color":"#013183","dark":""},on:{"click":_vm.onTaskStart}},[_vm._v("\n                                        번역하기\n                                    ")])],1)]):_c('div',{staticClass:"dialog__box__process"},[_c('div',{staticClass:"process__stepper"},[_c('div',{staticClass:"stepper"},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"primary","disabled":_vm.step != 1}},[_vm._v("\n                                            영상 업로드\n                                        ")])],1),_vm._v(" "),(_vm.step === 1)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"warning","disabled":_vm.step != 2}},[_vm._v("\n                                            영상 인식\n                                        ")])],1),_vm._v(" "),(_vm.step === 2)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"success","disabled":_vm.step != 3}},[_vm._v("\n                                            자막 번역\n                                        ")])],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"dialog__box__loading"},[_c(VProgressLinear["a" /* default */],{attrs:{"color":"#013183","height":"25px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var value = ref.value;
return [_c('strong',{staticStyle:{"color":"white"}},[_vm._v(_vm._s(Math.ceil(value))+"%")])]}}]),model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}})],1)])])],1)],1)],2),_vm._ssrNode(" <div class=\"setting__box\" data-v-1b6e115f><div class=\"track__box\" data-v-1b6e115f>"+(_vm._s(_vm.track))+"</div> <div class=\"setting__box__bottom\" data-v-1b6e115f><div class=\"control__box\" data-v-1b6e115f></div> <div class=\"filelist__box\" data-v-1b6e115f></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/video/service.vue?vue&type=template&id=1b6e115f&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=script&lang=js&
/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  layout: 'ServiceLayout',

  data() {
    return {
      dialog: false,
      readToVideo: false,
      loading: 0,
      step: 1,
      selectVideo: false,
      beforeSelect: true,
      videoURL: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
      track: "예시 텍스트<br />이것이 예시 테스트다",
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
  methods: {
    // 메소드 작성 미완
    onChange() {},

    uploadVideo() {},

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

          const upload = await axios.put(preSignedUrl, this.file, {
            headers: {
              'Content-Type': this.extToContentType(ext)
            },
            onUploadProgress: progressEvent => {
              let percentage = progressEvent.loaded * 100 / progressEvent.total;
              let percentageCompleted = Math.round(percentage); //console.log(progressEvent.loaded + " / " + progressEvent.total, percentage);
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
            this.trackFormating('vtt', this.transTrack); //console.timeEnd("Translate Time");
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
  "1b6e115f",
  "8974972c"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service.js.map