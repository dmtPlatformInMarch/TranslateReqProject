exports.ids = [18];
exports.modules = {

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5c8fbe94", content, true)

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7bb8afcc", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VTextarea_VTextarea_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5e1554dc", content, true)

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrackComponent_vue_vue_type_style_index_0_id_6a4a06c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".track__style[data-v-6a4a06c1]{height:156px;display:flex;border:1px solid grey;margin:5px;padding:0 10px;justify-content:center;align-items:center;flex-direction:column}.add__btn[data-v-6a4a06c1]{display:flex;width:100%;height:20%;margin:5px 0}.add__btn__style[data-v-6a4a06c1]{display:flex;height:100%!important;background-color:#fff!important}.track__wrapper[data-v-6a4a06c1]{width:100%;height:80%;justify-content:center}.track__time[data-v-6a4a06c1],.track__wrapper[data-v-6a4a06c1]{display:flex;align-items:center}.track__time[data-v-6a4a06c1]{justify-content:space-around;padding:5px;width:25%}.input__time[data-v-6a4a06c1]{width:80%;flex:0 0 auto!important}.input__time[data-v-6a4a06c1] input{text-align:center}.edit__time[data-v-6a4a06c1]{width:10%;display:flex;align-items:center;justify-content:center}.track__text[data-v-6a4a06c1],.track__trans__text[data-v-6a4a06c1]{display:flex;align-items:center;justify-content:space-around;padding:5px;width:35%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("48751daa", content, true)

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:\"\";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(265);

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
  
  var style0 = __webpack_require__(286)
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
  "08fdc183"
  
)

/* harmony default export */ var TrackComponent = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VVirtualScroll_VVirtualScroll_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VExpansionPanel_VExpansionPanel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
// Styles
 // Components

 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseItemGroup */ "a"].extend({
  name: 'v-expansion-panels',

  provide() {
    return {
      expansionPanels: this
    };
  },

  props: {
    accordion: Boolean,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    focusable: Boolean,
    inset: Boolean,
    popout: Boolean,
    readonly: Boolean,
    tile: Boolean
  },
  computed: {
    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_1__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
        'v-expansion-panels': true,
        'v-expansion-panels--accordion': this.accordion,
        'v-expansion-panels--flat': this.flat,
        'v-expansion-panels--hover': this.hover,
        'v-expansion-panels--focusable': this.focusable,
        'v-expansion-panels--inset': this.inset,
        'v-expansion-panels--popout': this.popout,
        'v-expansion-panels--tile': this.tile
      };
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('expand')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* breaking */ "a"])('expand', 'multiple', this);
    }
    /* istanbul ignore next */


    if (Array.isArray(this.value) && this.value.length > 0 && typeof this.value[0] === 'boolean') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* breaking */ "a"])(':value="[true, false, true]"', ':value="[0, 2]"', this);
    }
  },

  methods: {
    updateItem(item, index) {
      const value = this.getValue(item, index);
      const nextValue = this.getValue(item, index + 1);
      item.isActive = this.toggleMethod(value);
      item.nextIsActive = this.toggleMethod(nextValue);
    }

  }
}));

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('expansionPanels', 'v-expansion-panel', 'v-expansion-panels'), Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_1__[/* provide */ "b"])('expansionPanel', true)
/* @vue/component */
).extend({
  name: 'v-expansion-panel',
  props: {
    disabled: Boolean,
    readonly: Boolean
  },

  data() {
    return {
      content: null,
      header: null,
      nextIsActive: false
    };
  },

  computed: {
    classes() {
      return {
        'v-expansion-panel--active': this.isActive,
        'v-expansion-panel--next-active': this.nextIsActive,
        'v-expansion-panel--disabled': this.isDisabled,
        ...this.groupClasses
      };
    },

    isDisabled() {
      return this.expansionPanels.disabled || this.disabled;
    },

    isReadonly() {
      return this.expansionPanels.readonly || this.readonly;
    }

  },
  methods: {
    registerContent(vm) {
      this.content = vm;
    },

    unregisterContent() {
      this.content = null;
    },

    registerHeader(vm) {
      this.header = vm;
      vm.$on('click', this.onClick);
    },

    unregisterHeader() {
      this.header = null;
    },

    onClick(e) {
      if (e.detail) this.header.$el.blur();
      this.$emit('click', e);
      this.isReadonly || this.isDisabled || this.toggle();
    },

    toggle() {
      this.$nextTick(() => this.$emit('change'));
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-expansion-panel',
      class: this.classes,
      attrs: {
        'aria-expanded': String(this.isActive)
      }
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getSlot */ "p"])(this));
  }

}));

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
// Components

 // Mixins


 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-header', 'v-expansion-panel'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-header',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    disableIconRotate: Boolean,
    expandIcon: {
      type: String,
      default: '$expand'
    },
    hideActions: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  data: () => ({
    hasMousedown: false
  }),
  computed: {
    classes() {
      return {
        'v-expansion-panel-header--active': this.isActive,
        'v-expansion-panel-header--mousedown': this.hasMousedown
      };
    },

    isActive() {
      return this.expansionPanel.isActive;
    },

    isDisabled() {
      return this.expansionPanel.isDisabled;
    },

    isReadonly() {
      return this.expansionPanel.isReadonly;
    }

  },

  created() {
    this.expansionPanel.registerHeader(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterHeader();
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    },

    genIcon() {
      const icon = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "p"])(this, 'actions') || [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.expandIcon)];
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VFadeTransition */ "c"], [this.$createElement('div', {
        staticClass: 'v-expansion-panel-header__icon',
        class: {
          'v-expansion-panel-header__icon--disable-rotate': this.disableIconRotate
        },
        directives: [{
          name: 'show',
          value: !this.isDisabled
        }]
      }, icon)]);
    }

  },

  render(h) {
    return h('button', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-header',
      class: this.classes,
      attrs: {
        tabindex: this.isDisabled ? -1 : null,
        type: 'button',
        'aria-expanded': this.isActive
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }],
      on: { ...this.$listeners,
        click: this.onClick,
        mousedown: () => this.hasMousedown = true,
        mouseup: () => this.hasMousedown = false
      }
    }), [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "p"])(this, 'default', {
      open: this.isActive
    }, true), this.hideActions || this.genIcon()]);
  }

}));

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
 // Mixins



 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-content', 'v-expansion-panel'));
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-content',
  data: () => ({
    isActive: false
  }),
  computed: {
    parentIsActive() {
      return this.expansionPanel.isActive;
    }

  },
  watch: {
    parentIsActive: {
      immediate: true,

      handler(val, oldVal) {
        if (val) this.isBooted = true;
        if (oldVal == null) this.isActive = val;else this.$nextTick(() => this.isActive = val);
      }

    }
  },

  created() {
    this.expansionPanel.registerContent(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterContent();
  },

  render(h) {
    return h(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VExpandTransition */ "a"], this.showLazyContent(() => [h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-content',
      directives: [{
        name: 'show',
        value: this.isActive
      }]
    }), [h('div', {
      class: 'v-expansion-panel-content__wrap'
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getSlot */ "p"])(this))])]));
  }

}));

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("14b312fc", content, true, context)
};

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_7766890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_7766890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_7766890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_7766890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_7766890e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".non-flex[data-v-7766890e]{flex:0 0 auto}.auto-flex[data-v-7766890e]{flex:1 1 auto}.readonly__btn[data-v-7766890e]{opacity:1!important}.wrapper[data-v-7766890e]{width:100%;height:100%}.video__box[data-v-7766890e]{position:absolute;left:0;width:25%;height:100%;border-right:1px solid #8c867a}.video__player[data-v-7766890e]{display:flex;align-items:center;justify-content:center;width:100%;height:35%;background:#000}.player[data-v-7766890e]{width:100%;height:100%}.video__action[data-v-7766890e]{display:flex;align-items:center;justify-content:space-around;width:100%;height:5%}.video__action__btn[data-v-7766890e]{width:45%}.video__list[data-v-7766890e]{width:100%;height:60%}.video__list[data-v-7766890e],.video__list__group[data-v-7766890e]{position:absolute;bottom:0}.video__list__content[data-v-7766890e]{height:50vh}.list__content__disabled[data-v-7766890e]{display:flex;width:100%;height:100%;align-items:center;justify-content:center;text-align:center}.content__list__title[data-v-7766890e]{display:flex;align-items:center;justify-content:flex-start}.content__list__btn[data-v-7766890e]{flex:1 1 0;justify-content:flex-start!important}.content__list__btn[data-v-7766890e] span{width:100%;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}.track__box[data-v-7766890e]{display:flex;position:absolute;left:25%;align-items:center;justify-content:center;width:75%;height:100%}.track__wrapper[data-v-7766890e]{width:100%;height:100%}.track__box__scroll[data-v-7766890e]{display:flex;flex-direction:column}.track__box__scroll[data-v-7766890e]::-webkit-scrollbar{display:block;width:10px;height:8px}.track__box__scroll[data-v-7766890e]::-webkit-scrollbar-track{background-color:transparent}.track__box__scroll[data-v-7766890e]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.track__box__wrapper[data-v-7766890e]{width:95%;align-items:center;justify-content:center}.track__box[data-v-7766890e] .v-virtual-scroll__item{display:flex;align-items:center;justify-content:center}.dialog__card[data-v-7766890e]{width:75vw}.dialog__box[data-v-7766890e]{flex-direction:column;text-align:center;height:50vh;padding:25px}.dialog__box[data-v-7766890e],.dialog__box__setting[data-v-7766890e]{display:flex;align-items:center;justify-content:center;width:100%}.dialog__box__setting[data-v-7766890e]{height:90%}.setting__select__box[data-v-7766890e]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:50%;height:100%}.img[data-v-7766890e]{flex:0 0 auto}.dialog__box__process[data-v-7766890e]{flex-direction:column;width:50%;height:100%}.dialog__box__loading[data-v-7766890e],.dialog__box__process[data-v-7766890e]{display:flex;align-items:center;justify-content:center}.dialog__box__loading[data-v-7766890e]{width:100%;height:10%}.download__card[data-v-7766890e]{flex-direction:column;height:50vh}.download__card[data-v-7766890e],.download__card__title[data-v-7766890e]{display:flex;align-items:center;justify-content:center}.download__card__title[data-v-7766890e]{width:100%;background:#013183;color:#fff}.download__card__content[data-v-7766890e]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%;height:90%;padding:25px}.card__content__btngroup[data-v-7766890e]{display:flex;align-items:center;justify-content:space-around;width:100%;height:60%}.card__content__btn[data-v-7766890e]{display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px dashed grey;border-radius:10%;width:45%;height:100%;opacity:.6;transition:.3s}.card__content__btn[data-v-7766890e]:hover{border:15px solid #2172ff!important;background-color:#2172ff!important;opacity:1!important;cursor:pointer}.card__content__text[data-v-7766890e]{display:flex;align-items:center;justify-content:space-around;width:100%;height:30%}.card__action[data-v-7766890e]{justify-content:center;width:100%;height:10%}.select__box[data-v-7766890e]{height:90%}.action__box[data-v-7766890e],.select__box[data-v-7766890e]{display:flex;justify-content:space-around;width:100%;padding:25px}.action__box[data-v-7766890e]{align-items:center;height:10%}.list__wrapper[data-v-7766890e]{width:100%;height:80%}.header__class[data-v-7766890e]{border-bottom:3px solid green}.list__select[data-v-7766890e]{border:solid #013183!important;color:#013183!important}.process__stepper[data-v-7766890e]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.stepper[data-v-7766890e]{width:50%;padding:5%}.stepper__btn[data-v-7766890e]{border:3px solid #013183}.arrow__wrapper[data-v-7766890e]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-7766890e]{color:#2172ff;-webkit-animation:arrowAnimation-data-v-7766890e 1.5s ease infinite;animation:arrowAnimation-data-v-7766890e 1.5s ease infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.arrow[data-v-7766890e]:first-child{-webkit-animation-delay:.75s;animation-delay:.75s}.arrow[data-v-7766890e]:nth-child(2){-webkit-animation-delay:1s;animation-delay:1s}.arrow[data-v-7766890e]:nth-child(3){-webkit-animation-delay:1.25s;animation-delay:1.25s}.hr-sect[data-v-7766890e]{display:flex;align-items:center;color:rgba(0,0,0,.35);font-size:12px;width:100%;height:5%}.hr-sect[data-v-7766890e]:after,.hr-sect[data-v-7766890e]:before{content:\"\";flex-grow:1;background:rgba(0,0,0,.35);height:1px;font-size:0;line-height:0;margin:0 16px}@-webkit-keyframes arrowAnimation-data-v-7766890e{0%{color:#fff}to{color:#2172ff}}@keyframes arrowAnimation-data-v-7766890e{0%{color:#fff}to{color:#2172ff}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 418:
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
var VDialog = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(329);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js
var VExpansionPanels = __webpack_require__(328);

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
var VSpacer = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.js
var VVirtualScroll = __webpack_require__(325);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=template&id=7766890e&scoped=true&






















var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"video__box\" data-v-7766890e>","</div>",[_vm._ssrNode("<input type=\"file\""+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-7766890e> "),(_vm.readToVideo === true)?_vm._ssrNode("<div class=\"video__player\" data-v-7766890e>","</div>",[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.videoURL))+" controls=\"controls\" preload=\"auto\" crossorigin=\"anonymous\" class=\"player\" data-v-7766890e></video>")],2):_vm._ssrNode("<div class=\"video__player\" data-v-7766890e>","</div>",[_c(VDialog["a" /* default */],{attrs:{"width":"60vw","persistent":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var attrs = ref.attrs;
return [_c(VBtn["a" /* default */],_vm._b({attrs:{"rounded":""},on:{"click":_vm.uploadVideo}},'v-btn',attrs,false),[_c(VIcon["a" /* default */],[_vm._v("\n                            mdi-plus\n                        ")]),_vm._v("\n                        새로 만들기\n                    ")],1)]}}]),model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_vm._v(" "),_c(VCard["a" /* default */],[_c('div',{staticClass:"dialog__box"},[_c('div',{staticClass:"dialog__box__setting"},[_c('div',{staticClass:"setting__select__box",on:{"click":function($event){_vm.dialog = !_vm.dialog}}},[_c(VImg["a" /* default */],{staticClass:"img",attrs:{"src":"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),_vm._v(" "),(_vm.beforeSelect)?_c('div',{staticClass:"setting__select__box"},[_c('div',{staticClass:"select__box"},[_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                영상의 원본 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.req),callback:function ($$v) {_vm.req=$$v},expression:"req"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1),_vm._v(" "),_c(VIcon["a" /* default */],[_vm._v("\n                                        mdi-arrow-right\n                                    ")]),_vm._v(" "),_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                                번역하고 싶은 언어\n                                            ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.grant),callback:function ($$v) {_vm.grant=$$v},expression:"grant"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                            "+_vm._s(item)+"\n                                                        ")])],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"action__box"},[_c(VBtn["a" /* default */],{attrs:{"block":"","rounded":"","color":"#013183","dark":""},on:{"click":_vm.onTaskStart}},[_vm._v("\n                                        번역하기\n                                    ")])],1)]):_c('div',{staticClass:"dialog__box__process"},[_c('div',{staticClass:"process__stepper"},[_c('div',{staticClass:"stepper"},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"primary","disabled":_vm.step != 1}},[_vm._v("\n                                            영상 업로드\n                                        ")])],1),_vm._v(" "),(_vm.step === 1)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"warning","disabled":_vm.step != 2}},[_vm._v("\n                                            영상 인식\n                                        ")])],1),_vm._v(" "),(_vm.step === 2)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"success","disabled":_vm.step != 3}},[_vm._v("\n                                            자막 번역\n                                        ")])],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"dialog__box__loading"},[_c(VProgressLinear["a" /* default */],{attrs:{"color":"#013183","height":"25px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var value = ref.value;
return [_c('strong',{staticStyle:{"color":"white"}},[_vm._v(_vm._s(Math.ceil(value))+"%")])]}}]),model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}})],1)])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"video__action\" data-v-7766890e>","</div>",[_c(VBtn["a" /* default */],{staticClass:"video__action__btn",attrs:{"rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();_vm.newVideoDialog = !_vm.newVideoDialog}}},[_c(VIcon["a" /* default */],[_vm._v("\n                    mdi-plus\n                ")]),_vm._v("\n                새 영상\n            ")],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"video__action__btn",attrs:{"rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();return _vm.downloadDialogOpen.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                    mdi-download\n                ")]),_vm._v("\n                다운로드\n            ")],1)],2),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"600","persistent":""},model:{value:(_vm.downloadDialog),callback:function ($$v) {_vm.downloadDialog=$$v},expression:"downloadDialog"}},[_c(VCard["a" /* default */],{staticClass:"download__card"},[_c(components_VCard["d" /* VCardTitle */],{staticClass:"download__card__title",attrs:{"tag":"div"}},[_vm._v("\n                    다운로드 양식 선택\n                ")]),_vm._v(" "),_c('div',{staticClass:"download__card__content"},[_c('div',{staticClass:"hr-sect"},[_vm._v("텍스트 정보")]),_vm._v(" "),_c('div',{staticClass:"card__content__text pa-2"},[_c('div',{ref:"textTab_1",staticClass:"card__content__btn pa-4",on:{"click":_vm.firstTextTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"50%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h4",attrs:{"dark":_vm.textTab === 1}},[_vm._v("\n                                    mdi-format-text-variant-outline\n                                ")])],1),_vm._v("\n                            원문\n                        ")]),_vm._v(" "),_c('div',{ref:"textTab_2",staticClass:"card__content__btn pa-4",on:{"click":_vm.secondTextTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"50%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h4",attrs:{"dark":_vm.textTab === 2}},[_vm._v("\n                                    mdi-translate-variant\n                                ")])],1),_vm._v("\n                            번역\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"hr-sect"},[_vm._v("파일 포맷")]),_vm._v(" "),_c('div',{staticClass:"card__content__btngroup"},[_c('div',{ref:"tab_1",staticClass:"card__content__btn pa-4",on:{"click":_vm.firstTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"80%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h1",attrs:{"dark":_vm.fileTab === 1}},[_vm._v("\n                                    mdi-file\n                                ")])],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{"width":"100%","height":"20%","font-size":"18px"},attrs:{"ripple":false,"depressed":"","rounded":"","block":""}},[_vm._v("\n                                .srt\n                            ")])],1),_vm._v(" "),_c('div',{ref:"tab_2",staticClass:"card__content__btn pa-4",on:{"click":_vm.secondTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"80%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h1",attrs:{"dark":_vm.fileTab === 2}},[_vm._v("\n                                    mdi-file\n                                ")])],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{"width":"100%","height":"20%","font-size":"18px"},attrs:{"ripple":false,"depressed":"","rounded":"","block":""}},[_vm._v("\n                                .vtt\n                            ")])],1)])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],{staticClass:"card__action"},[_c(VBtn["a" /* default */],{staticClass:"auto-flex",attrs:{"depressed":"","color":"success","disabled":_vm.fileTab === 0 || _vm.textTab === 0},on:{"click":function($event){$event.stopPropagation();return _vm.downloadFile.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                            mdi-download\n                        ")]),_vm._v("\n                        다운로드\n                    ")],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"auto-flex",attrs:{"depressed":"","color":"error"},on:{"click":function($event){$event.stopPropagation();_vm.downloadDialog = !_vm.downloadDialog}}},[_c(VIcon["a" /* default */],[_vm._v("\n                            mdi-close\n                        ")]),_vm._v("\n                        닫기\n                    ")],1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"video__list\" data-v-7766890e>","</div>",[_c(VExpansionPanels["a" /* default */],{staticClass:"video__list__group",attrs:{"tile":"","dark":""}},[_c(VExpansionPanel["a" /* default */],[_c(VExpansionPanelHeader["a" /* default */],{attrs:{"color":"#013183"}},[_vm._v("\n                        파일 목록\n                    ")]),_vm._v(" "),(_vm.loginState)?_c(VExpansionPanelContent["a" /* default */],{staticClass:"video__list__content"},[_c('div',{staticClass:"list__content__disabled"},[_vm._v("\n                            로그인 후"),_c('br'),_vm._v(" 이용가능 합니다.\n                        ")])]):_c(VExpansionPanelContent["a" /* default */],{staticClass:"video__list__content overflow-y-auto"},_vm._l((_vm.videoList),function(item,index){return _c(VList["a" /* default */],{key:index},[_c(VListItem["a" /* default */],[_c(components_VList["c" /* VListItemTitle */],{staticClass:"content__list__title"},[_c(VBtn["a" /* default */],{staticClass:"content__list__btn",attrs:{"x-large":"","depressed":""},on:{"click":function($event){_vm.onSelectFile(_vm.sliceName(item.Key))}}},[_c(VIcon["a" /* default */],[_vm._v("\n                                            mdi-file-video\n                                        ")]),_vm._v("\n                                        "+_vm._s(_vm.sliceName(item.Key))+"\n                                        "),_c(VBtn["a" /* default */],{attrs:{"icon":"","right":""}},[_c(VIcon["a" /* default */],[_vm._v("\n                                                mdi-close\n                                            ")])],1)],1)],1)],1)],1)}),1)],1)],1)],1)],2),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"250"},model:{value:(_vm.newVideoDialog),callback:function ($$v) {_vm.newVideoDialog=$$v},expression:"newVideoDialog"}},[_c(VCard["a" /* default */],[_c(components_VCard["d" /* VCardTitle */],[_c('h5',[_vm._v("정말 가져오시겠습니까?")])]),_vm._v(" "),_c(components_VCard["c" /* VCardText */],[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("수정하는 중")]),_vm._v("에 가져오는 경우, "),_c('br'),_vm._v("\n                수정한 내용이 "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("모두 사라집니다.")])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.uploadVideo}},[_vm._v("예")]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":function($event){_vm.newVideoDialog = false}}},[_vm._v("아니오")])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"track__box\" data-v-7766890e>","</div>",[(_vm.readyToTrack)?_c(VVirtualScroll["a" /* default */],{ref:"trackscroll",staticClass:"track__box__scroll",attrs:{"bench":"15","items":_vm.fullTrack,"height":_vm.virtualHeight,"item-height":"156"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var item = ref.item;
var index = ref.index;
return [_c('div',{staticClass:"track__box__wrapper"},[_c('track-component',{attrs:{"start":item.start,"end":item.end,"text":item.text,"trans":_vm.transTrack[index],"idx":index}})],1)]}}],null,false,3315004982)}):_c('div',[_vm._v("\n            영상을 추가하면 자막을 편집하실 수 있습니다. "),_c('br')])],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"download",attrs:{"href":(_vm.isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
            '/video/download/' +
            _vm.selectFilename + '.' + _vm.trackMode}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/video/service.vue?vue&type=template&id=7766890e&scoped=true&

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(226);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// EXTERNAL MODULE: ./components/TrackComponent.vue + 4 modules
var TrackComponent = __webpack_require__(295);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(44);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/service.vue?vue&type=script&lang=js&



/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  layout: 'ServiceLayout',
  components: {
    draggable: external_vuedraggable_default.a,
    TrackComponent: TrackComponent["a" /* default */]
  },

  created() {
    if (this.readyToTrack === true) {
      if (typeof window !== 'undefined') {
        window.addEventListener("resize", () => {
          this.virtualHeight = this.$refs.trackBox.offsetHeight;
        });
      }
    }

    this.$nuxt.$on("onScrollTop", () => {
      this.$refs.trackscroll.$el.scrollBy({
        top: -this.$refs.trackscroll.scrollTop,
        behavior: 'smooth'
      });
    });
    this.$nuxt.$on("addItem", index => {
      this.fullTrack.splice(index + 1, 0, {
        start: "00:00:000",
        end: "00:00:000",
        text: "새로운 자막"
      });
    });
    this.$nuxt.$on("deleteItem", index => {
      this.fullTrack.splice(index, 1);
    });
  },

  data() {
    return {
      isDev: "production".includes('dev'),
      video: {},
      videoTrack: [],
      selectFilename: "",
      // 컨트롤 변수
      loginState: false,
      virtualHeight: 0,
      readToVideo: false,
      readyToTrack: false,
      dialog: false,
      newVideoDialog: false,
      downloadDialog: false,
      loading: 0,
      preSignedUrlResponse: false,
      uploadResponse: false,
      trackCompleteResponse: false,
      selectVideo: false,
      fileTab: 0,
      textTab: 0,
      // 데이터 변수
      file: {},
      fullTrack: [],
      timeLine: [],
      originalTrack: [],
      transTrack: [],
      cueTrack: [],
      transCueTrack: [],
      track: "",
      trans: "",
      dialog: false,
      beforeSelect: true,
      req: 0,
      grant: 2,
      step: 1
    };
  },

  mounted() {
    this.$store.dispatch('videoes/getFiles');
    this.virtualHeight = this.$refs.trackBox.offsetHeight; // 이벤트 등록

    this.$nuxt.$on('timeChange', (time, index) => {
      if (time != undefined) {
        console.log("timechange");
        this.fullTrack[index].start = time.substring(0, time.indexOf(' ')).trim();
        this.fullTrack[index].end = time.substring(time.lastIndexOf(' ') + 1).trim();
      }
    });
    this.$nuxt.$on('textChange', (text, index) => {
      if (text != undefined) {
        this.fullTrack[index].text = text;
        this.cueTrack.cues[index].text = text;
        this.video.currentTime = this.cueTrack.cues[index].startTime;
        console.log(typeof this.cueTrack.cues[index].startTime, typeof this.cueTrack.cues[index].endTime);
      }
    });
    this.$nuxt.$on('transChange', (transText, index) => {
      if (transText != undefined) {
        this.transTrack[index] = transText;
      }
    });
    this.$nuxt.$on('timeSet', index => {
      console.log(this.cueTrack.cues[index]);
      this.video.currentTime = this.cueTrack.cues[index].startTime;
    });
  },

  computed: {
    videoList() {
      return this.$store.state.videoes.files;
    },

    videoURL() {
      return this.$store.state.videoes.fileURL;
    },

    languages() {
      return this.$LANGUAGES_KO;
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
    isEmpty(obj) {
      if (obj.constructor === Object && Object.keys(obj).length === 0) return true;else return false;
    },

    timeToSec(time) {
      let result = 0.0;

      if (/(((\d\d:\d\d)|(\d\d)):\d\d.\d\d\d)/gm.test(time)) {
        const arr = time.split(':').reverse();

        if (arr.length === 3) {
          result += parseFloat(parseFloat(arr[0]).toFixed(2));
          result += parseInt(arr[1]) * 60;
          result += parseInt(arr[2]) * 3600;
        } else if (arr.length === 2) {
          result += parseFloat(parseFloat(arr[0]).toFixed(2));
          result += parseInt(arr[1]) * 60;
        }

        return result;
      } else {
        return "time 형식 부정확";
      }
    },

    uploadVideo() {
      if (!this.selectVideo) {
        this.newVideoDialog = false;
        this.$refs.upload.click();
      } else {
        this.newVideo();
        const filename = this.selectFilename;
        this.$store.commit('videoes/setFileName', filename.substring(0, filename.lastIndexOf('.')));
        const ext = filename.substring(filename.lastIndexOf('.') + 1);
        this.$store.commit('videoes/setFileExt', ext);
        this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
        this.step = 2;
        this.newVideoDialog = false;
        this.dialog = true;
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

    sliceName(str) {
      return str.substring(str.lastIndexOf('/') + 1);
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

        this.trans = result;
      }
    },

    async onSelectFile(filename) {
      this.selectVideo = true;
      this.selectFilename = filename;

      if (!this.readToVideo) {
        this.$store.commit('videoes/setFileName', filename.substring(0, filename.lastIndexOf('.')));
        const ext = filename.substring(filename.lastIndexOf('.') + 1);
        this.$store.commit('videoes/setFileExt', ext);
        this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
        this.step = 2;
        this.dialog = true;
      } else {
        this.newVideoDialog = true;
      }
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
    },

    downloadDialogOpen() {
      this.fileTab = 0;
      this.textTab = 0;
      this.downloadDialog = !this.downloadDialog;
    },

    async downloadFile() {
      const downloadTrack = await this.trackFormating(this.trackMode, this.textTab === 1 ? this.originalTrack : this.transTrack);
      await this.$store.dispatch('videoes/textToTrack', {
        track: downloadTrack,
        ext: this.trackMode
      });
      this.$refs.download.$el.click();
      this.downloadDialogOpen();
    },

    firstTap() {
      this.fileTab = 1;
    },

    secondTap() {
      this.fileTab = 2;
    },

    firstTextTap() {
      this.textTab = 1;
    },

    secondTextTap() {
      this.textTab = 2;
    },

    deletefile(event) {
      console.log("deleteFile : ", event);
    }

  }
});
// CONCATENATED MODULE: ./pages/video/service.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/video/service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(394)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7766890e",
  "6b4d71ee"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service.js.map