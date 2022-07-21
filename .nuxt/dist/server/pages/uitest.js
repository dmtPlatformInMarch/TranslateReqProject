exports.ids = [11];
exports.modules = {

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("110a9531", content, true, context)
};

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(316);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(317);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div{box-sizing:border-box}p{font-size:large}.main-background{height:40%;background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-repeat:no-repeat;background-position:50%}.main-title{font-size:4rem;padding-top:3rem}.main-content,.main-title{text-align:center;color:#fff}.main-content{font-size:2rem;padding:3 rem 4rem}.container{display:flex;width:45%;margin-top:2%;flex-direction:column;flex-grow:1}.item1{border-bottom:10px solid #23bbb1}.item1,.item2{margin-top:2rem}.item2{border-bottom:10px solid #512fdb}.item3{border-bottom:10px solid #013183}.item3,.item4{margin-top:2rem}.item4{border-bottom:10px solid #2172ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back_img.2881aad.jpg";

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=template&id=48ddda50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-background\"><h4 class=\"main-title\">DMT LABS TEST PAGE</h4> <p class=\"main-content\"> DMT Labs is new-type IT-based language service supplier as well as a language translation service provider located in Seoul, South Korea.\n            </p></div> <div class=\"container\"><div class=\"item1\"><h1>Technology</h1> <br> <p>영상에서 음성을 추출한 후 번역을 진행하고 있습니다. <br>하나의 영상에 대해 2개 국어 이상으로 번역 시, 언어별 일관성, 씽크 등 번역 품질에 집중하고 있습니다.</p></div> <div class=\"item2\"><h1>Direction</h1> <br> <p>코로나 출현과 OTT의 급부상으로 인해 기존 텍스트 번역 산업에 버금가는 거대 산업으로 발전하고 있습니다.<br>온라인 강의 ,OTT의 자막 번역 및 더빙은 자사의 주요 서비스 분야입니다.</p> <div class=\"line2\"></div></div> <div class=\"item3\"><h1>Performance</h1> <br> <p>자사의 강점인 영상 내부 이미지 번역과 더불어, 기술적 단계의 도약을 위한 학습데이터 확보,<br>적용 가능한 도메인 영역 확장으로 다음 단계를 준비하고 있습니다.</p> <div class=\"line3\"></div></div> <div class=\"item4\"><h1>Service</h1> <br> <p>방송, OTT 및 대학교 등 영상 매체를 활용하는 모든 채널이 주 고객층입니다.<br>영상 번역은 요청에 따라 영상 편집을 통해 전달하기도 합니다.<br>이 경우 자막화 작업, 영상 내부 특정 프레임 번역 서비스도 가능합니다.</p> <div class=\"line4\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=template&id=48ddda50&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=script&lang=js&
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

  data() {
    return {};
  },

  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uitestvue_type_script_lang_js_ = (uitestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/uitest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(314)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uitestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "50e5faba"
  
)

/* harmony default export */ var uitest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=uitest.js.map