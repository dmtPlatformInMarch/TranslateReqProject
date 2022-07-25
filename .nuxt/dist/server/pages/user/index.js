exports.ids = [13];
exports.modules = {

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=template&id=7929260a&scoped=true&









var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(VContainer["a" /* default */],[(_vm.language === '한국어')?_c(VContainer["a" /* default */],[_c(VToolbar["a" /* default */],{attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"text-h4 font-weight-bold"},[_vm._v(" 유저 정보 ")])],1),_vm._v(" "),(_vm.loginState)?_c(VCard["a" /* default */],[_c(VContainer["a" /* default */],[_c(VForm["a" /* default */],[_c(VTextField["a" /* default */],{attrs:{"rounded":"","readonly":"","outlined":"","label":"이름","value":_vm.loginState.nickname}}),_vm._v(" "),_c(VTextField["a" /* default */],{attrs:{"rounded":"","readonly":"","outlined":"","label":"E-mail","value":_vm.loginState.email}}),_vm._v(" "),_c(VTextField["a" /* default */],{attrs:{"rounded":"","readonly":"","outlined":"","label":"소속","value":"소속 없음"}})],1)],1)],1):_c(VCard["a" /* default */],[_c(components_VCard["c" /* VCardText */],[_vm._v("로그인이 필요합니다.")])],1)],1):(_vm.language === '영어')?_c(VContainer["a" /* default */],[_c(VToolbar["a" /* default */],{attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"text-h4 font-weight-bold"},[_vm._v(" User Info ")])],1)],1):_c(VContainer["a" /* default */],[_c(VToolbar["a" /* default */],{attrs:{"elevation":"0"}},[(_vm.language === '한국어')?_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"text-h4 font-weight-bold"},[_vm._v(" 언어 설정 오류 ")]):(_vm.language === '영어')?_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"text-h4 font-weight-bold"},[_vm._v(" Language setting error ")]):_vm._e()],1),_vm._v(" "),_c(VCard["a" /* default */],[(_vm.language === '한국어')?_c(components_VCard["d" /* VCardTitle */],[_vm._v("\n        The page could not be loaded because an error occurred during the language setting process!\n      ")]):(_vm.language === '영어')?_c(components_VCard["d" /* VCardTitle */]):_vm._e()],1)],1),_vm._v(" "),_c('snack-bar')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=template&id=7929260a&scoped=true&

// EXTERNAL MODULE: ./components/SnackBar.vue + 5 modules
var SnackBar = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var uservue_type_script_lang_js_ = ({
  layout: "TextLayout",
  components: {
    SnackBar: SnackBar["a" /* default */]
  },

  data() {
    return {};
  },

  computed: {
    language() {
      return this.$store.state.manager.language;
    },

    loginState() {
      return this.$store.state.users.loginState;
    }

  }
});
// CONCATENATED MODULE: ./pages/user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/user/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7929260a",
  "d9b2ce4a"
  
)

/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map