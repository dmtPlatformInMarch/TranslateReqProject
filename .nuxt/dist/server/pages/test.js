exports.ids = [6];
exports.modules = {

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7fa2a7e5", content, true, context)
};

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bcbe048c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bcbe048c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bcbe048c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bcbe048c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_bcbe048c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-bcbe048c],.wrapper[data-v-bcbe048c]{display:flex}.wrapper[data-v-bcbe048c]{position:absolute;top:64px;overflow:auto;width:100%;height:calc(100% - 64px);flex-direction:column;align-items:center;justify-content:center}.action__box[data-v-bcbe048c]{width:100%;height:50%;border:1px solid grey}.section[data-v-bcbe048c]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;height:calc(100% - 48px)}.result__box[data-v-bcbe048c]{width:100%;height:50%;border:1px solid grey}.google__ex[data-v-bcbe048c]{display:flex;align-items:center;justify-content:center;width:50%;padding:25px}.google__ex__btn[data-v-bcbe048c]{margin:0 15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=bcbe048c&scoped=true&class=main&



var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"action__box\" data-v-bcbe048c>","</div>",[_vm._ssrNode("<h1 data-v-bcbe048c>Action Section</h1> "),_c(VDivider["a" /* default */]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"section\" data-v-bcbe048c>","</div>",[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.videoURL))+" controls=\"controls\" preload=\"auto\" crossorigin=\"anonymous\" data-v-bcbe048c></video> "),_vm._ssrNode("<div class=\"google__ex\" data-v-bcbe048c>","</div>",[_c(VBtn["a" /* default */],{staticClass:"google__ex__btn",attrs:{"color":"primary"},on:{"click":_vm.googleTest}},[_vm._v("\n                    구글 API 테스트\n                ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"google__ex__btn",attrs:{"color":"success"},on:{"click":_vm.blobToServer}},[_vm._v("\n                    Blob을 백엔드로 보내기 테스트\n                ")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"result__box\" data-v-bcbe048c>","</div>",[_vm._ssrNode("<h1 data-v-bcbe048c>Result Section</h1> "),_c(VDivider["a" /* default */]),_vm._ssrNode(" <div class=\"section\" data-v-bcbe048c><audio controls=\"controls\" data-v-bcbe048c></audio> <div class=\"google__ex\" data-v-bcbe048c>"+_vm._ssrEscape("\n                "+_vm._s(_vm.testResult)+"\n            ")+"</div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=bcbe048c&scoped=true&class=main&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // MediaStream 기술을 통한 실시간 자막 번역 시스템 가능????
// 첫째로, 음성 인식을 단위별로 처리하거나, 스트림으로 처리가 가능해야 함.
// 둘째로, 만약 처리한다고 하더라도 이를 자막으로 입히기 위해선 시간 정보가 필요함.

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  layout: "TestLayout",

  created() {},

  data() {
    return {
      testResult: "테스트 전",
      fps: 0,
      stream: null,
      recordedChunks: [],
      mediaRecorder: {},
      recognition: {},
      recoging: false,
      videoURL: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4"
    };
  },

  async mounted() {
    this.$refs.originalplayer.addEventListener('play', event => {
      this.recordStart();
    });
    this.$refs.originalplayer.addEventListener('pause', () => {
      this.recordStop();
    });
  },

  methods: {
    async recordStart() {
      this.stream = await this.$refs.originalplayer.captureStream(this.fps);
      const audioTracks = this.stream.getAudioTracks();
      this.mediaRecorder = new MediaRecorder(new MediaStream(audioTracks), {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: "48000"
      });

      this.mediaRecorder.ondataavailable = async event => {
        if ((event === null || event === void 0 ? void 0 : event.data.size) > 0) {
          await this.recordedChunks.push(event.data);
          const blob = new Blob(this.recordedChunks, {
            type: "audio/webm"
          });
          const responseText = await this.$store.dispatch('test/blobSending', blob);
          console.log("인식결과 : ", responseText);
        } else {
          console.log("본 객체 : ", event);
          console.log("객체 데이터 : ", event.data);
        }
      };

      this.mediaRecorder.onstop = event => {
        window.URL.revokeObjectURL(blobURL);
        const blob = new Blob(this.recordedChunks, {
          type: "audio/webm"
        }); // console.log("결과 Blob : ", blob);

        const blobURL = window.URL.createObjectURL(blob);
        this.$refs.resultplayer.src = blobURL;
        this.$refs.resultplayer.load();
        this.$refs.resultplayer.play();
      };

      console.log("Record Start");
      this.mediaRecorder.start(500); // ms 단위로 blob 객체 생성
    },

    recordStop() {
      console.log("Record Stop");
      this.mediaRecorder.stop();
    },

    // Blob으로 뽑기 성공.
    async googleTest() {
      try {
        const response = await this.$store.dispatch('test/googleTest');
        if (response != null) this.testResult = "테스트 성공";else this.testResult = "테스트 실패";
      } catch (err) {
        console.log(err);
      }
    },

    async blobToServer() {
      try {
        const blob = new Blob(this.recordedChunks, {
          type: "audio/webm"
        });
        const responseText = await this.$store.dispatch('test/blobSending', blob);
        console.log("인식결과 : ", responseText);
      } catch (err) {
        console.log(err);
      }
    }

  },
  computed: {}
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(312)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bcbe048c",
  "12ffdcec"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map