exports.ids = [18];
exports.modules = {

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5e1554dc", content, true)

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-virtual-scroll{display:block;flex:1 1 auto;height:100%;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-virtual-scroll__item{left:0;position:absolute;right:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2cadbe68", content, true, context)
};

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VVirtualScroll_VVirtualScroll_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
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
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "o"])(this, 'default', {
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

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_realtrack_vue_vue_type_style_index_0_id_74ee9ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);
/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_realtrack_vue_vue_type_style_index_0_id_74ee9ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_realtrack_vue_vue_type_style_index_0_id_74ee9ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_realtrack_vue_vue_type_style_index_0_id_74ee9ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_realtrack_vue_vue_type_style_index_0_id_74ee9ec6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-74ee9ec6]{width:100%;height:100%}.video__box[data-v-74ee9ec6]{position:absolute;background:#000;width:50%;height:100%}.video__wrapper[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-top:50px dashed grey;border-bottom:50px dashed grey}.video__player[data-v-74ee9ec6]{width:100%;max-height:100%}.setting__box[data-v-74ee9ec6]{position:absolute;background:#8c867a;left:50%;width:50%;height:100%}.track__box[data-v-74ee9ec6]{overflow-y:auto;position:absolute;background:#fff;border-radius:25px;margin:15px;padding:25px;width:calc(100% - 30px);height:calc(75% - 30px);font-family:\"MinSans-Medium\",sans-serif!important;white-space:pre-wrap}.track__box[data-v-74ee9ec6]::-webkit-scrollbar{display:block;width:10px;height:8px}.track__box[data-v-74ee9ec6]::-webkit-scrollbar-thumb{border-radius:5px;background:#2172ff}.track__box[data-v-74ee9ec6]::-webkit-scrollbar-track{background-color:transparent;margin:15px 0}.setting__box__bottom[data-v-74ee9ec6]{position:absolute;top:75%;width:100%;height:25%}.control__box[data-v-74ee9ec6]{position:absolute;display:flex;flex-direction:column;justify-content:space-between;background:#fff;border-radius:15px;margin:0 0 15px 15px;padding:25px;width:calc(30% - 30px);height:calc(100% - 15px)}.control__btn[data-v-74ee9ec6]{flex:unset!important}.filelist__box[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:flex-start;position:absolute;background:#fff;border-radius:15px;margin:0 15px 15px 0;padding:25px;width:calc(70% - 15px);height:calc(100% - 15px);left:30%}.dialog__box[data-v-74ee9ec6]{flex-direction:column;text-align:center;height:50vh;padding:25px}.dialog__box[data-v-74ee9ec6],.dialog__box__setting[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;width:100%}.dialog__box__setting[data-v-74ee9ec6]{height:90%}.setting__select__box[data-v-74ee9ec6]{flex-direction:column;align-items:center;width:50%;height:100%}.select__box[data-v-74ee9ec6],.setting__select__box[data-v-74ee9ec6]{display:flex;justify-content:space-around}.select__box[data-v-74ee9ec6]{width:100%;height:90%;padding:25px}.img[data-v-74ee9ec6]{flex:0 0 auto}.dialog__box__process[data-v-74ee9ec6]{flex-direction:column;width:50%;height:100%}.dialog__box__loading[data-v-74ee9ec6],.dialog__box__process[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center}.dialog__box__loading[data-v-74ee9ec6]{width:100%;height:10%}.header__class[data-v-74ee9ec6]{border-bottom:3px solid green}.list__wrapper[data-v-74ee9ec6]{width:100%;height:80%}.list__select[data-v-74ee9ec6]{border:solid #013183!important;color:#013183!important}.action__box[data-v-74ee9ec6]{justify-content:space-around;height:10%;padding:25px}.action__box[data-v-74ee9ec6],.process__stepper[data-v-74ee9ec6]{display:flex;align-items:center;width:100%}.process__stepper[data-v-74ee9ec6]{flex-direction:column;justify-content:center;height:100%}.stepper[data-v-74ee9ec6]{width:50%;padding:5%}.stepper__btn[data-v-74ee9ec6]{border:3px solid #013183}.arrow__wrapper[data-v-74ee9ec6]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.arrow[data-v-74ee9ec6]{color:#2172ff;-webkit-animation:arrowAnimation-data-v-74ee9ec6 1.5s ease infinite;animation:arrowAnimation-data-v-74ee9ec6 1.5s ease infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.arrow[data-v-74ee9ec6]:first-child{-webkit-animation-delay:.75s;animation-delay:.75s}.arrow[data-v-74ee9ec6]:nth-child(2){-webkit-animation-delay:1s;animation-delay:1s}.arrow[data-v-74ee9ec6]:nth-child(3){-webkit-animation-delay:1.25s;animation-delay:1.25s}.hr-sect[data-v-74ee9ec6]{display:flex;align-items:center;color:rgba(0,0,0,.35);font-size:12px;width:100%;height:5%}.hr-sect[data-v-74ee9ec6]:after,.hr-sect[data-v-74ee9ec6]:before{content:\"\";flex-grow:1;background:rgba(0,0,0,.35);height:1px;font-size:0;line-height:0;margin:0 16px}@-webkit-keyframes arrowAnimation-data-v-74ee9ec6{0%{color:#fff}to{color:#2172ff}}@keyframes arrowAnimation-data-v-74ee9ec6{0%{color:#fff}to{color:#2172ff}}.download__card[data-v-74ee9ec6]{flex-direction:column;height:50vh}.download__card[data-v-74ee9ec6],.download__card__title[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center}.download__card__title[data-v-74ee9ec6]{width:100%;background:#013183;color:#fff}.download__card__content[data-v-74ee9ec6]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%;height:90%;padding:25px}.card__content__btngroup[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:space-around;width:100%;height:60%}.card__content__btn[data-v-74ee9ec6]{display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px dashed grey;border-radius:10%;width:45%;height:100%;opacity:.6;transition:.3s}.card__content__btn[data-v-74ee9ec6]:hover{border:15px solid #2172ff!important;background-color:#2172ff!important;opacity:1!important;cursor:pointer}.card__content__text[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:space-around;width:100%;height:45%}.card__action[data-v-74ee9ec6]{justify-content:center;width:100%;height:10%}.content__list__title[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:flex-start}.card__title__center[data-v-74ee9ec6]{display:flex;align-items:center;justify-content:center;background:#013183;color:#fff;text-align:center;padding:16px}.content__list__btn[data-v-74ee9ec6]{flex:1 1 0;justify-content:flex-start!important}.content__list__btn[data-v-74ee9ec6] span{width:100%}.list__btn__label[data-v-74ee9ec6]{max-width:80%;overflow:hidden;text-overflow:ellipsis}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(234);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.js
var VVirtualScroll = __webpack_require__(364);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/realtrack.vue?vue&type=template&id=74ee9ec6&scoped=true&


















var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_vm._ssrNode("<div class=\"video__box\" data-v-74ee9ec6>","</div>",[_vm._ssrNode("<input type=\"file\" accept=\".mp4\""+(_vm._ssrStyle(null,null, { display: (false) ? undefined : 'none' }))+" data-v-74ee9ec6> "),(_vm.readToVideo === true)?_vm._ssrNode("<div class=\"video__wrapper\" data-v-74ee9ec6>","</div>",[_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.videoURL))+" controls=\"controls\" preload=\"auto\" crossorigin=\"anonymous\" class=\"video__player\" data-v-74ee9ec6></video>")],2):_vm._ssrNode("<div class=\"video__wrapper\" data-v-74ee9ec6>","</div>",[_c(VBtn["a" /* default */],{attrs:{"rounded":""},on:{"click":_vm.uploadVideo}},[_c(VIcon["a" /* default */],[_vm._v("\n                    mdi-plus\n                ")]),_vm._v("\n                새로 만들기\n            ")],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"setting__box\" data-v-74ee9ec6>","</div>",[_vm._ssrNode("<div class=\"track__box\" data-v-74ee9ec6>"+(_vm._s(_vm.showTrack))+"</div> "),_vm._ssrNode("<div class=\"setting__box__bottom\" data-v-74ee9ec6>","</div>",[_vm._ssrNode("<div class=\"control__box\" data-v-74ee9ec6>","</div>",[_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();_vm.newVideoDialog = !_vm.newVideoDialog}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-plus\n                    ")]),_vm._v("\n                    새 영상\n                ")],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();return _vm.showTrackSwitching.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-swap-horizontal-bold\n                    ")]),_vm._v("\n                    자막 전환\n                ")],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();return _vm.downloadDialogOpen.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-download\n                    ")]),_vm._v("\n                    자막 다운로드\n                ")],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{staticClass:"control__btn",attrs:{"block":"","rounded":"","color":"#013183","dark":_vm.readToVideo,"disabled":!_vm.readToVideo},on:{"click":function($event){$event.stopPropagation();return _vm.changeDialogOpen.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-translate-variant\n                    ")]),_vm._v("\n                    다른 언어로 번역하기\n                ")],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"filelist__box\" data-v-74ee9ec6>","</div>",[_c(VVirtualScroll["a" /* default */],{attrs:{"bench":"5","items":_vm.videoList,"height":_vm.virtualHeight,"item-height":"64"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var item = ref.item;
return [_c(VListItem["a" /* default */],[_c(components_VList["c" /* VListItemTitle */],{staticClass:"content__list__title"},[_c(VBtn["a" /* default */],{staticClass:"content__list__btn",attrs:{"rounded":"","x-large":"","depressed":"","dark":"","color":"#013183"},on:{"click":function($event){$event.stopPropagation();_vm.onSelectFile(_vm.sliceName(item.Key, '/'))}}},[_c(VIcon["a" /* default */],[_vm._v("\n                                        mdi-file-video\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"list__btn__label"},[_vm._v("\n                                        "+_vm._s(_vm.sliceName(item.Key, '/'))+"\n                                    ")]),_vm._v(" "),_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"icon":"","right":""},on:{"click":function($event){$event.stopPropagation();return _vm.deleteFile(item)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                                            mdi-close\n                                        ")])],1)],1)],1)],1)]}}])})],1)],2)],2),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"60vw","persistent":""},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c(VCard["a" /* default */],[_c('div',{staticClass:"dialog__box"},[_c('div',{staticClass:"dialog__box__setting"},[_c('div',{staticClass:"setting__select__box",on:{"click":function($event){_vm.dialog = !_vm.dialog}}},[_c(VImg["a" /* default */],{staticClass:"img",attrs:{"src":"https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png"}})],1),_vm._v(" "),(_vm.beforeSelect)?_c('div',{staticClass:"setting__select__box"},[_c('div',{staticClass:"select__box"},[_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                        영상의 원본 언어\n                                    ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.req),callback:function ($$v) {_vm.req=$$v},expression:"req"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                    "+_vm._s(item)+"\n                                                ")])],1)}),1)],1)],1)],1),_vm._v(" "),_c(VIcon["a" /* default */],[_vm._v("\n                                mdi-arrow-right\n                            ")]),_vm._v(" "),_c('div',[_c(VToolbar["a" /* default */],{staticClass:"header__class",attrs:{"elevation":"0"}},[_c(components_VToolbar["b" /* VToolbarTitle */],{staticClass:"font-weight-bold"},[_vm._v("\n                                        번역하고 싶은 언어\n                                    ")])],1),_vm._v(" "),_c('div',{staticClass:"overflow-y-auto list__wrapper"},[_c(VList["a" /* default */],[_c(VListItemGroup["a" /* default */],{attrs:{"mandatory":""},model:{value:(_vm.grant),callback:function ($$v) {_vm.grant=$$v},expression:"grant"}},_vm._l((_vm.languages),function(item,index){return _c(VListItem["a" /* default */],{key:index,attrs:{"active-class":"list__select"}},[_c(components_VList["c" /* VListItemTitle */],[_vm._v("\n                                                    "+_vm._s(item)+"\n                                                ")])],1)}),1)],1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"action__box"},[_c(VBtn["a" /* default */],{attrs:{"block":"","rounded":"","color":"#013183","dark":""},on:{"click":_vm.onTaskStart}},[_vm._v("\n                                번역하기\n                            ")])],1)]):_c('div',{staticClass:"dialog__box__process"},[_c('div',{staticClass:"process__stepper"},[_c('div',{staticClass:"stepper"},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"primary","disabled":_vm.step != 1}},[_vm._v("\n                                    영상 업로드\n                                ")])],1),_vm._v(" "),(_vm.step === 1)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"warning","disabled":_vm.step != 2}},[_vm._v("\n                                    영상 인식\n                                ")])],1),_vm._v(" "),(_vm.step === 2)?_c('transition',[_c('div',{staticClass:"arrow__wrapper"},[_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")]),_vm._v(" "),_c('div',{staticClass:"arrow"},[_vm._v("▼")])])]):_c('div',{staticClass:"arrow__wrapper"},[_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")]),_vm._v(" "),_c('div',[_vm._v("▼")])]),_vm._v(" "),_c('div',{staticClass:"stepper",attrs:{"div":""}},[_c(VBtn["a" /* default */],{staticClass:"stepper__btn",attrs:{"block":"","rounded":"","color":"success","disabled":_vm.step != 3}},[_vm._v("\n                                    자막 번역\n                                ")])],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"dialog__box__loading"},[_c(VProgressLinear["a" /* default */],{attrs:{"color":"#013183","height":"25px"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var value = ref.value;
return [_c('strong',{staticStyle:{"color":"white"}},[_vm._v(_vm._s(Math.ceil(value))+"%")])]}}]),model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}})],1)])])],1),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"600","persistent":""},model:{value:(_vm.downloadDialog),callback:function ($$v) {_vm.downloadDialog=$$v},expression:"downloadDialog"}},[_c(VCard["a" /* default */],{staticClass:"download__card"},[_c(components_VCard["d" /* VCardTitle */],{staticClass:"download__card__title",attrs:{"tag":"div"}},[_vm._v("\n                다운로드 양식 선택\n            ")]),_vm._v(" "),_c('div',{staticClass:"download__card__content"},[_c('div',{staticClass:"hr-sect"},[_vm._v("텍스트 정보")]),_vm._v(" "),_c('div',{staticClass:"card__content__text pa-2"},[_c('div',{ref:"textTab_1",staticClass:"card__content__btn pa-4",on:{"click":_vm.firstTextTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"50%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h4",attrs:{"dark":_vm.textTab === 1}},[_vm._v("\n                                mdi-format-text-variant-outline\n                            ")])],1),_vm._v("\n                        원문\n                    ")]),_vm._v(" "),_c('div',{ref:"textTab_2",staticClass:"card__content__btn pa-4",on:{"click":_vm.secondTextTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"50%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h4",attrs:{"dark":_vm.textTab === 2}},[_vm._v("\n                                mdi-translate-variant\n                            ")])],1),_vm._v("\n                        번역\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"hr-sect"},[_vm._v("파일 포맷")]),_vm._v(" "),_c('div',{staticClass:"card__content__btngroup"},[_c('div',{ref:"tab_1",staticClass:"card__content__btn pa-4",on:{"click":_vm.firstTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"80%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h1",attrs:{"dark":_vm.fileTab === 1}},[_vm._v("\n                                mdi-file\n                            ")])],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{"width":"100%","height":"20%","font-size":"18px"},attrs:{"ripple":false,"depressed":"","rounded":"","block":""}},[_vm._v("\n                            .srt\n                        ")])],1),_vm._v(" "),_c('div',{ref:"tab_2",staticClass:"card__content__btn pa-4",on:{"click":_vm.secondTap}},[_c('div',{staticClass:"d-flex align-center justify-center",staticStyle:{"width":"100%","height":"80%"}},[_c(VIcon["a" /* default */],{staticClass:"text-h1",attrs:{"dark":_vm.fileTab === 2}},[_vm._v("\n                                mdi-file\n                            ")])],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"non-flex readonly__btn font-weight-bold",staticStyle:{"width":"100%","height":"20%","font-size":"18px"},attrs:{"ripple":false,"depressed":"","rounded":"","block":""}},[_vm._v("\n                            .vtt\n                        ")])],1)])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],{staticClass:"card__action"},[_c(VBtn["a" /* default */],{staticClass:"auto-flex",attrs:{"depressed":"","color":"success","disabled":_vm.fileTab === 0 || _vm.textTab === 0},on:{"click":function($event){$event.stopPropagation();return _vm.downloadFile.apply(null, arguments)}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-download\n                    ")]),_vm._v("\n                    다운로드\n                ")],1),_vm._v(" "),_c(VBtn["a" /* default */],{staticClass:"auto-flex",attrs:{"depressed":"","color":"error"},on:{"click":function($event){$event.stopPropagation();_vm.downloadDialog = !_vm.downloadDialog}}},[_c(VIcon["a" /* default */],[_vm._v("\n                        mdi-close\n                    ")]),_vm._v("\n                    닫기\n                ")],1)],1)],1)],1),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"250"},model:{value:(_vm.newVideoDialog),callback:function ($$v) {_vm.newVideoDialog=$$v},expression:"newVideoDialog"}},[_c(VCard["a" /* default */],[_c(components_VCard["d" /* VCardTitle */],[_c('h5',[_vm._v("정말 가져오시겠습니까?")])]),_vm._v(" "),_c(components_VCard["c" /* VCardText */],[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("수정하는 중")]),_vm._v("에 가져오는 경우, "),_c('br'),_vm._v("\n                수정한 내용이 "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("모두 사라집니다.")])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.uploadVideo}},[_vm._v("예")]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":function($event){_vm.newVideoDialog = false}}},[_vm._v("아니오")])],1)],1)],1),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"250"},model:{value:(_vm.changeDialog),callback:function ($$v) {_vm.changeDialog=$$v},expression:"changeDialog"}},[_c(VCard["a" /* default */],[_c(components_VCard["d" /* VCardTitle */],[_c('h5',[_vm._v("정말 다시 번역하시겠습니까?")])]),_vm._v(" "),_c(components_VCard["c" /* VCardText */],[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("재번역")]),_vm._v(" 시 기존에 번역된 내용에, "),_c('br'),_vm._v(" "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("덮어 씌워")]),_vm._v("집니다.\n            ")]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.changeRecognition}},[_vm._v("예")]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":function($event){_vm.changeDialog = false}}},[_vm._v("아니오")])],1)],1)],1),_vm._ssrNode(" "),_c(VDialog["a" /* default */],{attrs:{"width":"250"},model:{value:(_vm.deleteFileDialog),callback:function ($$v) {_vm.deleteFileDialog=$$v},expression:"deleteFileDialog"}},[_c(VCard["a" /* default */],[_c(components_VCard["d" /* VCardTitle */],[_c('h5',[_vm._v("정말 "),_c('span',{staticStyle:{"font-weight":"bold","color":"red"}},[_vm._v("삭제")]),_vm._v("하시겠습니까?")])]),_vm._v(" "),_c(components_VCard["c" /* VCardText */],[_vm._v("\n                파일을 "),_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("삭제")]),_vm._v("하는 경우, "),_c('br'),_vm._v("\n                삭제한 파일을 복구할 수 "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("없습니다.")])]),_vm._v(" "),_c(components_VCard["a" /* VCardActions */],[_c(VSpacer["a" /* default */]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.deleteFileOK}},[_vm._v("예")]),_vm._v(" "),_c(VBtn["a" /* default */],{attrs:{"text":""},on:{"click":_vm.deleteFileNO}},[_vm._v("아니오")])],1)],1)],1),_vm._ssrNode(" "),_c(VBtn["a" /* default */],{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"download",attrs:{"href":(_vm.isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
            '/video/download/' +
            _vm.sliceFrontName(_vm.selectFilename, '.') + '.' + _vm.trackMode}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/video/realtrack.vue?vue&type=template&id=74ee9ec6&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(45);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/video/realtrack.vue?vue&type=script&lang=js&

/* harmony default export */ var realtrackvue_type_script_lang_js_ = ({
  layout: 'ServiceLayout',

  data() {
    return {
      virtualHeight: 0,
      // 다이얼로그 제어 변수
      dialog: false,
      newVideoDialog: false,
      downloadDialog: false,
      deleteFileDialog: false,
      changeDialog: false,
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
      req: 0,
      grant: 2,
      showTrack: ""
    };
  },

  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", () => {
        this.virtualHeight = this.$refs.fileListBox.offsetHeight - 50;
      });
    }
    /*this.$nuxt.$on("onScrollTop", () => {
        console.log("scrolling");
        this.$refs.trackscroll.$el?.scrollBy({
            top: -(this.$refs.trackscroll.scrollTop),
            behavior: 'smooth'
        });
    });*/

  },

  mounted() {
    this.virtualHeight = this.$refs.fileListBox.offsetHeight - 50;
    this.$store.dispatch('videoes/getFiles');
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

    sliceName(str, sep) {
      return str.substring(str.lastIndexOf(sep) + 1) == "" ? str : str.substring(str.lastIndexOf(sep) + 1);
    },

    sliceFrontName(str, sep) {
      return str.substring(0, str.lastIndexOf(sep)) == "" ? str : str.substring(0, str.lastIndexOf(sep));
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

      for (let i = 0; i < this.fullTrack.length; i++) this.cueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.originalTrack[i]));

      for (let i = 0; i < this.fullTrack.length; i++) this.transCueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.transTrack[i])); // console.log(this.cueTrack.cues);

    },

    async onSelectFile(filename) {
      this.selectVideo = true;
      this.selectFilename = filename;

      if (!this.readToVideo) {
        await this.$store.commit('videoes/setFileName', filename.substring(0, filename.lastIndexOf('.')));
        const ext = filename.substring(filename.lastIndexOf('.') + 1);
        await this.$store.commit('videoes/setFileExt', ext);
        await this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
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

    async onTaskStart() {
      this.beforeSelect = false; // 파일 전처리
      // 파일 업로드인 경우

      if (this.fullTrack.length === 0 && !this.selectVideo) {
        this.originalTrack = [];
        this.transTrack = [];
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

            const trackResponse = await this.$store.dispatch('videoes/postVideo', {
              req_code: this.req_code,
              mode: 'vtt'
            });
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
      } else if (this.selectVideo) {
        // 파일 선택의 경우
        this.originalTrack = [];
        this.transTrack = [];

        try {
          // 영상 인식 : loading = 33
          this.loading = 33;
          this.loadingLogic(3);
          this.uploadResponse = true;
          await this.$store.dispatch('videoes/setURL');
          const trackResponse = await this.$store.dispatch('videoes/postVideo', {
            req_code: this.req_code,
            mode: 'vtt'
          });
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
      } else {
        // 재 번역
        try {
          // 자막 번역 : loading = 33
          this.transTrack = [];
          this.loading = 66;
          this.loadingLogic(4);
          this.transTrack = await this.$store.dispatch('videoes/transTrack', {
            "from": this.req_code,
            "to": this.grant_code,
            "track": this.fullTrack
          });
          this.trackOn(this.req_lang);
          this.readToVideo = true;
          this.dialog = false;
        } catch (err) {
          console.log(err);
        }
      }

      this.showTrack = await this.$store.dispatch('videoes/realTrackMerge', {
        time: this.timeLine,
        track: this.originalTrack,
        trans: this.transTrack
      });
    },

    newVideo() {
      this.newVideoDialog = false;
      this.readToVideo = false;
      this.readyToTrack = false;
      this.showTrack = "";
      this.video = {}, this.file = {};
      this.fullTrack = [];
      this.timeLine = [];
      this.originalTrack = [];
      this.transTrack = [];
      this.track = "";
      this.trans = "";
      this.cueTrack = {};
      this.transCueTrack = {};
      this.loading = 0;
      this.dialog = false;
      this.beforeSelect = true;
      this.step = 1;
      this.preSignedUrlResponse = false;
      this.uploadResponse = false;
      this.trackCompleteResponse = false;
    },

    showTrackSwitching() {
      if (this.transCueTrack.mode === "showing") {
        this.transCueTrack.mode = "hidden";
        this.cueTrack.mode = "showing";
      } else {
        this.cueTrack.mode = "hidden";
        this.transCueTrack.mode = "showing";
      }
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

    changeDialogOpen() {
      this.changeDialog = !this.changeDialog;
    },

    async changeRecognition() {
      this.changeDialog = false;
      this.beforeSelect = true;
      this.readToVideo = false;
      this.preSignedUrlResponse = false;
      this.uploadResponse = false;
      this.trackCompleteResponse = false;
      this.step = 3;
      this.loading = 0;
      this.dialog = true;
    },

    deleteFile(item) {
      const name = this.sliceName(item.Key, '/'); //console.log('Name : ', name.substring(0, name.lastIndexOf('.')));
      //console.log('EXT  : ', name.substring(name.lastIndexOf('.') + 1));

      this.$store.commit('videoes/setFileName', name.substring(0, name.lastIndexOf('.')));
      this.$store.commit('videoes/setFileExt', name.substring(name.lastIndexOf('.') + 1));
      this.deleteFileDialog = true;
    },

    async deleteFileOK() {
      try {
        this.$nuxt.$loading.start();
        await this.$store.dispatch('videoes/deleteFile');
        this.$nuxt.$loading.finish();
        this.$store.commit('videoes/setFileName', '');
        this.$store.commit('videoes/setFileExt', '');
        this.deleteFileDialog = false;
      } catch (err) {
        this.$nuxt.$loading.finish();
        this.deleteFileDialog = false;
        console.log(err);
      }
    },

    deleteFileNO() {
      this.$store.commit('videoes/setFileName', '');
      this.$store.commit('videoes/setFileExt', '');
      this.deleteFileDialog = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/video/realtrack.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_realtrackvue_type_script_lang_js_ = (realtrackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/video/realtrack.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(371)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_realtrackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74ee9ec6",
  "c14f6e3c"
  
)

/* harmony default export */ var realtrack = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=realtrack.js.map