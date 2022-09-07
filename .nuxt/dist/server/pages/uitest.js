exports.ids = [10];
exports.modules = {

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5c8fbe94", content, true)

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7bb8afcc", content, true, context)
};

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ..._VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }

  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _this$$refs$input;

        val ? this.calculateInputHeight() : (_this$$refs$input = this.$refs.input) == null ? void 0 : _this$$refs$input.style.removeProperty('height');
      });
    },

    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },

    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }

  },

  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },

  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },

    genInput() {
      const input = _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },

    onInput(e) {
      _VTextField_VTextField__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },

    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }

      this.$emit('keydown', e);
    }

  }
}));

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5e1554dc", content, true)

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".track__style[data-v-6a4a06c1]{height:156px;display:flex;border:1px solid grey;margin:5px;padding:0 10px;justify-content:center;align-items:center;flex-direction:column}.add__btn[data-v-6a4a06c1]{display:flex;width:100%;height:20%;margin:5px 0}.add__btn__style[data-v-6a4a06c1]{display:flex;height:100%!important;background-color:#fff!important}.track__wrapper[data-v-6a4a06c1]{width:100%;height:80%;justify-content:center}.track__time[data-v-6a4a06c1],.track__wrapper[data-v-6a4a06c1]{display:flex;align-items:center}.track__time[data-v-6a4a06c1]{justify-content:space-around;padding:5px;width:25%}.input__time[data-v-6a4a06c1]{width:80%;flex:0 0 auto!important}.input__time[data-v-6a4a06c1] input{text-align:center}.edit__time[data-v-6a4a06c1]{width:10%;display:flex;align-items:center;justify-content:center}.track__text[data-v-6a4a06c1],.track__trans__text[data-v-6a4a06c1]{display:flex;align-items:center;justify-content:space-around;padding:5px;width:35%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TrackComponent.vue?vue&type=template&id=6a4a06c1&scoped=true&





var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"track__style"},[_vm._ssrNode("<div class=\"track__wrapper\" data-v-6a4a06c1>","</div>",[_vm._ssrNode("<div class=\"track__time\" data-v-6a4a06c1>","</div>",[_c(VTextField["a" /* default */],{ref:"inputTime",staticClass:"input__time",attrs:{"value":_vm.start + ' --> ' + _vm.end,"outlined":"","dense":"","hide-details":"auto","readonly":_vm.editTime,"rules":_vm.timeRule},on:{"change":function($event){return _vm.changeTime($event)}}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"edit__time\" data-v-6a4a06c1>","</div>",[_c(VBtn["a" /* default */],{attrs:{"icon":""},on:{"click":_vm.timeEdit}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-timer-edit\n                    ")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"track__text\" data-v-6a4a06c1>","</div>",[_c(VTextarea["a" /* default */],{attrs:{"value":_vm.segmentText,"outlined":"","dense":"","rows":"3","row-height":"20","hide-details":""},on:{"input":function($event){return _vm.changeText($event)},"focusin":_vm.timeSet}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"track__trans__text\" data-v-6a4a06c1>","</div>",[_c(VTextarea["a" /* default */],{attrs:{"value":_vm.segmentTrans,"outlined":"","dense":"","rows":"3","row-height":"20","hide-details":""},on:{"input":function($event){return _vm.changeTrans($event)},"focusin":_vm.timeSet}})],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{attrs:{"icon":""},on:{"click":_vm.deleteItem}},[_c(VIcon["a" /* default */],[_vm._v("\n                mdi-close\n            ")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"add__btn\" data-v-6a4a06c1>","</div>",[_c(VBtn["a" /* default */],{staticClass:"add__btn__style",attrs:{"block":"","rounded":"","elevation":"0"},on:{"click":_vm.addItem}},[_c(VIcon["a" /* default */],[_vm._v("\n                mdi-plus\n            ")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TrackComponent.vue?vue&type=template&id=6a4a06c1&scoped=true&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TrackComponent.vue?vue&type=script&lang=js&
/*
*   [props]
*   idx     :   자막의 아이디, 순서, 인덱스
*   start   :   자막의 시작 시간
*   end     :   자막의 종료 시간
*   text    :   자막
*   trans   :   번역된 자막
*/
/* harmony default export */ var TrackComponentvue_type_script_lang_js_ = ({
  props: {
    idx: {
      type: Number,
      require: true
    },
    start: {
      type: String,
      default: "00:00:00.000"
    },
    end: {
      type: String,
      default: "00:00:00.000"
    },
    text: {
      type: String,
      default: ""
    },
    trans: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      editTime: true,
      timeRule: [value => /(((\d\d:\d\d)|(\d\d)):\d\d.\d\d\d) --> (((\d\d:\d\d)|(\d\d)):\d\d.\d\d\d)/.test(value) || '형식이 맞지 않습니다.']
    };
  },

  computed: {
    segmentText() {
      return this.text.split('\\n');
    },

    segmentTrans() {
      return this.trans.split('\\n');
    }

  },
  methods: {
    msToString(time) {
      if (time === 0) {
        return "00:00:00.000";
      } else {
        const hour = time / 3600000 >= 1 ? parseInt(time / 3600000) : 0;
        const min = time / 60000 >= 1 ? time / 60000 >= 60 ? parseInt(time / 60000) - 60 >= 1 ? parseInt(time / 60000) - 60 : 0 : parseInt(time / 60000) : 0;
        const sec = time % 60000 >= 1 ? parseInt(time % 60000 / 1000) >= 1 ? parseInt(time % 60000 / 1000) : 0 : parseInt(time / 1000) >= 1 ? parseInt(time / 1000) : 0;
        const mill = time % 1000;
        const ooHour = hour / 10 >= 1 ? hour : `0${hour}`;
        const ooMin = min / 10 >= 1 ? min : `0${min}`;
        const ooSec = sec / 10 >= 1 ? sec : `0${sec}`;
        const oooMill = mill / 100 >= 1 ? mill : mill / 10 >= 1 ? `0${mill}` : `00${mill}`;
        return `${ooHour}:${ooMin}:${ooSec}.${oooMill}`;
      }
    },

    changeTime(e) {
      this.$nuxt.$emit('timeChange', e, this.idx);
    },

    changeText(e) {
      this.$nuxt.$emit('textChange', e, this.idx);
    },

    changeTrans(e) {
      this.$nuxt.$emit('transChange', e, this.idx);
    },

    timeEdit() {
      this.editTime = !this.editTime;
      if (!this.editTime) this.$refs.inputTime.focus();
    },

    timeSet() {
      this.$nuxt.$emit('timeSet', this.idx);
    },

    addItem() {
      this.$nuxt.$emit('addItem', this.idx);
    },

    deleteItem() {
      this.$nuxt.$emit('deleteItem', this.idx);
    }

  }
});
// CONCATENATED MODULE: ./components/TrackComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TrackComponentvue_type_script_lang_js_ = (TrackComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/TrackComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TrackComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a4a06c1",
  "726ced74"
  
)

/* harmony default export */ var TrackComponent = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VVirtualScroll_VVirtualScroll_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _src_components_VVirtualScroll_VVirtualScroll_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VVirtualScroll_VVirtualScroll_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _directives_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
// Styles
 // Mixins

 // Directives

 // Utilities


/* harmony default export */ __webpack_exports__["a"] = (_mixins_measurable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-virtual-scroll',
  directives: {
    Scroll: _directives_scroll__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]
  },
  props: {
    bench: {
      type: [Number, String],
      default: 0
    },
    itemHeight: {
      type: [Number, String],
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    first: 0,
    last: 0,
    scrollTop: 0
  }),
  computed: {
    __bench() {
      return parseInt(this.bench, 10);
    },

    __itemHeight() {
      return parseInt(this.itemHeight, 10);
    },

    firstToRender() {
      return Math.max(0, this.first - this.__bench);
    },

    lastToRender() {
      return Math.min(this.items.length, this.last + this.__bench);
    }

  },
  watch: {
    height: 'onScroll',
    itemHeight: 'onScroll'
  },

  mounted() {
    this.last = this.getLast(0);
  },

  methods: {
    getChildren() {
      return this.items.slice(this.firstToRender, this.lastToRender).map(this.genChild);
    },

    genChild(item, index) {
      index += this.firstToRender;
      const top = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(index * this.__itemHeight);
      return this.$createElement('div', {
        staticClass: 'v-virtual-scroll__item',
        style: {
          top
        },
        key: index
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "p"])(this, 'default', {
        index,
        item
      }));
    },

    getFirst() {
      return Math.floor(this.scrollTop / this.__itemHeight);
    },

    getLast(first) {
      const height = parseInt(this.height || 0, 10) || this.$el.clientHeight;
      return first + Math.ceil(height / this.__itemHeight);
    },

    onScroll() {
      this.scrollTop = this.$el.scrollTop;
      this.first = this.getFirst();
      this.last = this.getLast(this.first);
    }

  },

  render(h) {
    const content = h('div', {
      staticClass: 'v-virtual-scroll__container',
      style: {
        height: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(this.items.length * this.__itemHeight)
      }
    }, this.getChildren());
    return h('div', {
      staticClass: 'v-virtual-scroll',
      style: this.measurableStyles,
      directives: [{
        name: 'scroll',
        modifiers: {
          self: true
        },
        value: this.onScroll
      }],
      on: this.$listeners
    }, [content]);
  }

}));

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("36196b8f", content, true, context)
};

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_c3ff5534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_c3ff5534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_c3ff5534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_c3ff5534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uitest_vue_vue_type_style_index_0_id_c3ff5534_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-c3ff5534]{display:flex}.wrapper[data-v-c3ff5534]{display:flex;flex-direction:column;align-items:center;justify-content:center}.track__wrapper[data-v-c3ff5534],.wrapper[data-v-c3ff5534]{width:100%;height:100%}.list-group-item[data-v-c3ff5534]{cursor:move}.list-group-item i[data-v-c3ff5534]{cursor:pointer}.ghost[data-v-c3ff5534]{opacity:.5;background:#c8ebfb}.flip-list-move[data-v-c3ff5534]{transition:transform .5s}.no-move[data-v-c3ff5534]{transition:transform 0s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.js
var VVirtualScroll = __webpack_require__(307);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uitest.vue?vue&type=template&id=c3ff5534&scoped=true&class=main&


var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c(VVirtualScroll["a" /* default */],{staticClass:"track__wrapper",attrs:{"bench":"15","items":_vm.mergeTrack,"height":"1080","item-height":"156"}},[_c('draggable',{staticClass:"track__wrapper",attrs:{"component-data":_vm.settingProps()}},[_c('div',[_vm._v("\n                머임 왜 안나옴 "),_c('br')])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=template&id=c3ff5534&scoped=true&class=main&

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(226);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// EXTERNAL MODULE: ./components/TrackComponent.vue + 4 modules
var TrackComponent = __webpack_require__(284);

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


/* harmony default export */ var uitestvue_type_script_lang_js_ = ({
  layout: 'TestLayout',
  components: {
    draggable: external_vuedraggable_default.a,
    TrackComponent: TrackComponent["a" /* default */]
  },

  created() {
    this.$nuxt.$on("addItem", index => {
      this.mergeTrack.splice(index + 1, 0, {
        start: "00:00:000",
        end: "00:00:000",
        text: "새로운 자막"
      });
    });
    this.$nuxt.$on("deleteItem", index => {
      this.mergeTrack.splice(index, 1);
    });
  },

  data() {
    return {
      track: ["yet still going strong", "and if i remember these furry folks have", "taken advantage of the good weather to", "make sure their state-of-the-art", "security system is ready", "what are they all looking at", "ah", "now i see", "looks like a new family's moved in down", "the block and they're kind of a little", "well", "different", "which isn't a bad thing of course", "but the citizens of dogtown still seem", "to be feeling a little um", "doubtful about their new neighbors these", "are burrowing owls", "and this is what burrowing owls do", "they move into burrows other animals", "have abandoned and since the average", "prairie dog weighs nearly eight times", "what one of those little owl guys does", "the owls don't pose any danger", "but badgers yeah", "definitely danger", "prairie dog is one of a badger's", "favorite snacks", "and even though they'll defend their", "town to the death", "prairie dogs are no match for him", "[Music]", "but wait what's this", "look at that little owl go", "give it to him", "well", "seems like the little owls have really", "earned their place in dog town", "how many towns do you know with their", "own owl air force", "definitely time to crank the party up a", "notch", "[Music]", "You"],
      startTime: [4.08, 7.60, 10.55, 12.63, 14.16, 19.35, 23.60, 24.80, 26.64, 28.64, 31.28, 32.48, 34.40, 36.72, 38.88, 41.20, 44.40, 46.08, 48.48, 50.96, 53.36, 55.60, 58.40, 63.12, 67.84, 72.80, 74.96, 78.08, 79.76, 81.44, 84.46, 95.60, 99.20, 102.72, 107.76, 108.88, 110.88, 113.60, 115.04, 119.28, 121.44, 123.59, 136.64],
      endTime: [7.60, 10.55, 12.63, 14.16, 17.92, 22.64, 24.80, 26.64, 28.64, 31.28, 32.48, 34.40, 36.72, 38.88, 41.20, 44.40, 46.08, 48.48, 50.96, 53.36, 55.60, 58.40, 62.40, 66.72, 71.80, 74.96, 78.00, 79.76, 81.44, 84.46, 95.60, 98.64, 102.56, 105.36, 108.88, 110.88, 113.60, 115.04, 118.40, 121.44, 123.59, 135.05, 138.72],
      mergeTrack: []
    };
  },

  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }

  },

  mounted() {
    let merge = [];

    for (let i = 0; i < this.track.length; i++) {
      merge[i] = {
        start: this.secToTime(this.startTime[i]),
        end: this.secToTime(this.endTime[i]),
        text: this.track[i]
      };
    }

    this.mergeTrack = merge;
  },

  methods: {
    secToTime(value) {
      let hour = '';
      let min = '';
      let sec = '';
      let ms = '';
      let time = value.toString().split('.');
      hour = Math.floor(time[0] / 3600) >= 10 ? Math.floor(time[0] / 3600) : `0${Math.floor(time[0] / 3600)}`;
      min = Math.floor(time[0] % 3600 / 60) >= 10 ? Math.floor(time[0] % 3600 / 60) : `0${Math.floor(time[0] % 3600 / 60)}`;
      sec = Math.floor(time[0] % 3600 % 60) >= 10 ? Math.floor(time[0] % 3600 % 60) : `0${Math.floor(time[0] % 3600 % 60)}`;
      if (time.length === 1) ms = '000';else ms = parseInt(time[1]) >= 10 ? `${parseInt(time[1])}0` : `${parseInt(time[1])}00`;
      return `${hour}:${min}:${sec}.${ms}`;
    },

    settingProps() {
      return {
        props: {}
      };
    }

  }
});
// CONCATENATED MODULE: ./pages/uitest.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_uitestvue_type_script_lang_js_ = (uitestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/uitest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(339)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_uitestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c3ff5534",
  "5bbd6f00"
  
)

/* harmony default export */ var uitest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=uitest.js.map