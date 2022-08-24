exports.ids = [10];
exports.modules = {

/***/ 305:
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
  add("744edaba", content, true, context)
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_fd388ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_fd388ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_fd388ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_fd388ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_fd388ff2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-fd388ff2]{display:flex}.img[data-v-fd388ff2]{flex:0 0 auto}.wrapper[data-v-fd388ff2]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.dialog__card[data-v-fd388ff2]{width:75vw}.dialog__box[data-v-fd388ff2]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;height:50vh;padding:25px}.dialog__box__setting[data-v-fd388ff2]{display:flex;width:100%;height:90%}.setting__select__box[data-v-fd388ff2]{justify-content:space-around}.dialog__box__process[data-v-fd388ff2],.setting__select__box[data-v-fd388ff2]{display:flex;flex-direction:column;align-items:center;width:50%;height:100%}.dialog__box__process[data-v-fd388ff2]{justify-content:center}.dialog__box__loading[data-v-fd388ff2]{display:flex;align-items:center;justify-content:center;width:100%;height:10%}.select__box[data-v-fd388ff2]{height:90%}.action__box[data-v-fd388ff2],.select__box[data-v-fd388ff2]{display:flex;justify-content:space-around;width:100%;padding:25px}.action__box[data-v-fd388ff2]{align-items:center;height:10%}.list__wrapper[data-v-fd388ff2]{width:100%;height:80%}.header__class[data-v-fd388ff2]{border-bottom:3px solid green}.list__select[data-v-fd388ff2]{border:solid #013183!important;color:#013183!important}.process__stepper[data-v-fd388ff2]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.stepper[data-v-fd388ff2]{width:50%;padding:5%}.stepper__btn[data-v-fd388ff2]{border:3px solid #013183}.arrow__wrapper[data-v-fd388ff2]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-fd388ff2]{color:#2172ff;-webkit-animation:arrowAnimation-data-v-fd388ff2 1.5s ease infinite;animation:arrowAnimation-data-v-fd388ff2 1.5s ease infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.arrow[data-v-fd388ff2]:first-child{-webkit-animation-delay:.75s;animation-delay:.75s}.arrow[data-v-fd388ff2]:nth-child(2){-webkit-animation-delay:1s;animation-delay:1s}.arrow[data-v-fd388ff2]:nth-child(3){-webkit-animation-delay:1.25s;animation-delay:1.25s}@-webkit-keyframes arrowAnimation-data-v-fd388ff2{0%{color:#fff}to{color:#2172ff}}@keyframes arrowAnimation-data-v-fd388ff2{0%{color:#fff}to{color:#2172ff}}", ""]);
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(60);

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=template&id=fd388ff2&scoped=true&class=main&













var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c(VDialog["a" /* default */],{attrs:{"width":"60vw"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c(VBtn["a" /* default */],_vm._g(_vm._b({attrs:{"rounded":""}},'v-btn',attrs,false),on),[_c(VIcon["a" /* default */],[_vm._v("\n                    mdi-plus\n                ")]),_vm._v("\n                새로 만들기\n            ")],1)]}}]),model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_vm._v(" "),_c(VCard["a" /* default */],[_c('div',{staticClass:"dialog__box"},[_c('div',{staticClass:"dialog__box__setting"},[_c('div',{staticClass:"setting__select__box"},[_c(VImg["a" /* default */],{staticClass:"img",attrs:{"src":"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),_vm._v(" "),(_vm.beforeSelect)?_c('div',{staticClass:"setting__select__box"},[_c('div',{staticClass:"select__box"},[_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                        영상의 원본 언어\n                                    ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.req),callback:function ($$v) {_vm.req=$$v},expression:"req"}},_vm._l((_vm.templist),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                    "+_vm._s(item)+"\n                                                ")])],1)}),1)],1)],1)],1),_vm._v(" "),_c(VIcon["a" /* default */],[_vm._v("\n                                mdi-arrow-right\n                            ")]),_vm._v(" "),_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                        번역하고 싶은 언어\n                                    ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.grant),callback:function ($$v) {_vm.grant=$$v},expression:"grant"}},_vm._l((_vm.templist),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                    "+_vm._s(item)+"\n                                                ")])],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"action__box"},[_c(VBtn["a" /* default */],{attrs:{"block":"","rounded":"","color":"#013183","dark":""},on:{"click":_vm.triggerStart}},[_vm._v("\n                                번역하기\n                            ")])],1)]):_c('div',{staticClass:"dialog__box__process"},[_c('div',{staticClass:"process__stepper"},[_c('div',{staticClass:"stepper"},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"primary","disabled":_vm.step != 1},on:{"click":function($event){_vm.step = 2}}},[_vm._v("\n                                    파일 전송\n                                ")])],1),_vm._v(" "),(_vm.step === 1)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"warning","disabled":_vm.step != 2},on:{"click":function($event){_vm.step = 3}}},[_vm._v("\n                                    영상 인식\n                                ")])],1),_vm._v(" "),(_vm.step === 2)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"success","disabled":_vm.step != 3},on:{"click":function($event){_vm.step = 1}}},[_vm._v("\n                                    자막 번역\n                                ")])],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"dialog__box__loading"},[_c(VProgressLinear["a" /* default */],{attrs:{"color":"#013183","height":"25px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var value = ref.value;
return [_c('strong',[_vm._v(_vm._s(Math.ceil(value))+"%")])]}}]),model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}})],1)])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=template&id=fd388ff2&scoped=true&class=main&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(226);

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

/* harmony default export */ var uitestvue_type_script_lang_js_ = ({
  layout: 'TestLayout',
  components: {},

  data() {
    return {
      loading: 0,
      dialog: false,
      beforeSelect: true,
      req: 0,
      grant: 2,
      step: 1
    };
  },

  computed: {
    templist() {
      return this.$LANGUAGES_KO;
    },

    req_lang() {
      return this.templist[this.req];
    },

    grant_lang() {
      return this.templist[this.grant];
    }

  },
  watch: {
    /*loading(value) {
        if (value >= 100) {
            this.beforeSelect = true;
        }
        if (value >= 30 && value < 60) {
            this.step = 2;
        }
        if (value >= 60 && value < 100) {
            this.step = 3;
        }
    }*/
  },
  methods: {
    loadingLogic(step) {
      switch (step) {
        case 1:
          // 영상 업로드
          this.timerOn();
          break;

        case 2:
          // 영상 인식
          this.timerOn();
          break;

        case 3:
          // 자막 번역
          this.timerOn();
          break;

        default:
          // 종료 트리거를 받는다면
          this.loading = this.step * 33;
          this.step++;
      }
    },

    timerOn() {
      this.beforeSelect = false;
      const interval = setInterval(() => {
        if (this.loading < this.step * 33 && this.dialog === true) {
          this.loading += 1;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },

    async triggerStart() {
      this.loadingLogic(this.step);
      setTimeout(() => {
        console.log("step 넘어감");
        this.loadingLogic("넘겨");
        this.loadingLogic(this.step);
      }, 1000);
      setTimeout(() => {
        console.log("step 넘어감");
        this.loadingLogic("넘겨");
        this.loadingLogic(this.step);
      }, 2000);
      setTimeout(() => {
        this.loading = 100;
      }, 3000);
    },

    close() {
      this.dialog = false;
      this.loading = 0;
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
  "fd388ff2",
  "5bbd6f00"
  
)

/* harmony default export */ var uitest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=uitest.js.map