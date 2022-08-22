exports.ids = [10];
exports.modules = {

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11f73d61", content, true, context)
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_782849c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_782849c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_782849c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_782849c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_782849c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-782849c6],.wrapper[data-v-782849c6]{display:flex}.wrapper[data-v-782849c6]{width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.videobox[data-v-782849c6]{width:640px}.btn__group[data-v-782849c6]{width:640px;height:10%;display:flex;flex-direction:column}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(224);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=template&id=782849c6&scoped=true&class=main&


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"videobox\" data-v-782849c6><video video controls=\"controls\" preload=\"auto\""+(_vm._ssrAttr("src",_vm.url))+" crossorigin=\"use-credentials\" class=\"video__player\" data-v-782849c6>\n            Sorry, your browser doesn't support embedded videos.\n        </video></div> "),_vm._ssrNode("<div class=\"btn__group\" data-v-782849c6>","</div>",[_c(VBtn["a" /* default */],{attrs:{"block":""},on:{"click":_vm.viewTrack}},[_vm._v("\n            자막 보이기\n        ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{attrs:{"block":""},on:{"click":_vm.viewCreateTrack}},[_vm._v("\n            자막 만들고 보이기\n        ")]),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{attrs:{"block":""},on:{"click":_vm.isTrack}},[_vm._v("\n            자막 있는지 확인\n        ")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=template&id=782849c6&scoped=true&class=main&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=script&lang=js&
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
/* harmony default export */ var uitestvue_type_script_lang_js_ = ({
  layout: 'TestLayout',
  components: {},

  data() {
    return {
      url: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
      url_track: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/360p_2%EB%B6%8416%EC%B4%88.vtt",
      video: ""
    };
  },

  mounted() {
    this.video = document.querySelector('video');
  },

  methods: {
    viewTrack() {
      this.video.textTracks[0].mode = this.video.textTracks[0].mode === 'showing' ? 'disabled' : 'showing';
      console.log(this.video.textTracks);
    },

    viewCreateTrack() {
      let track = document.createElement("track");
      track.kind = "subtitles";
      track.srclang = "en";
      track.label = "새로 만든 자막";
      track.src = this.url_track;
      this.video.appendChild(track);
      this.video.textTracks[0].mode = this.video.textTracks[0].mode === 'showing' ? 'disabled' : 'showing';
      console.log(this.video.textTracks[0]);
    },

    isTrack() {
      if (this.video.textTracks.length === 0) {
        console.log("비어있음");
      } else {
        console.log("여기서 처리");
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uitestvue_type_script_lang_js_ = (uitestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/uitest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uitestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "782849c6",
  "4c594714"
  
)

/* harmony default export */ var uitest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=uitest.js.map