exports.ids = [4];
exports.modules = {

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2e0667b1", content, true, context)
};

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ba0333c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ba0333c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ba0333c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ba0333c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ba0333c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main__template[data-v-ba0333c6]{overflow:hidden;height:100%}.main__template *[data-v-ba0333c6]{touch-action:none}.scroll__box[data-v-ba0333c6]{transition:1s cubic-bezier(.5,0,.5,1)}.scroll__box[data-v-ba0333c6],.scroll__item[data-v-ba0333c6]{position:relative;overflow:hidden}.scroll__item[data-v-ba0333c6]{height:100vh;cursor:default}.scroll__item__textbox[data-v-ba0333c6]{height:100vh;display:flex;flex-direction:column;text-align:center;justify-content:center}.scroll__item__title[data-v-ba0333c6]{font-size:10rem;font-weight:lighter;color:#fff}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1.5rem;color:#fff}.bg1[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg);background-size:cover}.bg2[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg);background-size:cover}.bg3[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg);background-size:cover}.bg4[data-v-ba0333c6]{background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg);background-size:cover}@media screen and (max-width:900px){.scroll__item__title[data-v-ba0333c6]{font-size:7rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1.2rem;color:#fff;padding:0 10vw}}@media screen and (max-width:500px){.scroll__item__title[data-v-ba0333c6]{font-size:4rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:1rem;color:#fff;padding:0 10vw}}@media screen and (max-width:361px){.scroll__item__title[data-v-ba0333c6]{font-size:3rem;font-weight:lighter;color:#fff;padding:0 5vw}.scroll__item__subtitle[data-v-ba0333c6]{font-size:.8rem;color:#fff;padding:0 10vw}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=ba0333c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main__template"},[_vm._ssrNode("<div class=\"scroll__box\" data-v-ba0333c6>","</div>",[_vm._ssrNode("<div class=\"scroll__item\" data-v-ba0333c6>","</div>",[_c('v-img',{staticClass:"bg1",attrs:{"height":"100vh"}},[_c('transition',{on:{"leave":_vm.leave}},[(_vm.lookup === 0)?_c('div',{staticClass:"scroll__item__textbox"},[_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},[_c('div',{staticClass:"scroll__item__title"},[_vm._v("\n                DMTLABS\n              ")])]),_vm._v(" "),_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.subEnter}},[_c('div',{staticClass:"scroll__item__subtitle"},[_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  DMTLABS는 다국적 번역 서비스를 제공합니다.\n                ")]),_vm._v(" "),_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  DMTLABS provides multinational translation services.\n                ")])])])],1):_vm._e()])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-ba0333c6>","</div>",[_c('v-img',{staticClass:"bg2",attrs:{"height":"100vh"}},[_c('transition',{on:{"leave":_vm.leave}},[(_vm.lookup === 1)?_c('div',{staticClass:"scroll__item__textbox"},[_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},[_c('div',{staticClass:"scroll__item__title"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  텍스트 번역\n                ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Text Translation\n                ")])])]),_vm._v(" "),_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.subEnter}},[_c('div',{staticClass:"scroll__item__subtitle"},[_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를\n                  경험해보세요.\n                ")]),_vm._v(" "),_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Experience the text file multilingual translation service\n                  provided by DMTLABS.\n                ")])])])],1):_vm._e()])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-ba0333c6>","</div>",[_c('v-img',{staticClass:"bg3",attrs:{"height":"100vh"}},[_c('transition',{on:{"leave":_vm.leave}},[(_vm.lookup === 2)?_c('div',{staticClass:"scroll__item__textbox"},[_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},[_c('div',{staticClass:"scroll__item__title"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  영상 번역\n                ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Video Translation\n                ")])])]),_vm._v(" "),_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.subEnter}},[_c('div',{staticClass:"scroll__item__subtitle"},[_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를\n                    경험해보세요.\n                ")]),_vm._v(" "),_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Experience the video caption multilingual translation service\n                    provided by DMTLABS.\n                ")])])])],1):_vm._e()])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-ba0333c6>","</div>",[_c('v-img',{staticClass:"bg4",attrs:{"height":"100vh"}},[_c('transition',{on:{"leave":_vm.leave}},[(_vm.lookup === 3)?_c('div',{staticClass:"scroll__item__textbox"},[_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},[_c('div',{staticClass:"scroll__item__title"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  음성 번역\n                ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Speech Translation\n                ")])])]),_vm._v(" "),_c('transition',{attrs:{"appear":"","name":"slide-fade","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.subEnter}},[_c('div',{staticClass:"scroll__item__subtitle"},[_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '한국어'),expression:"language === '한국어'"}]},[_vm._v("\n                  DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.\n                ")]),_vm._v(" "),_c('h4',{directives:[{name:"show",rawName:"v-show",value:(_vm.language === '영어'),expression:"language === '영어'"}]},[_vm._v("\n                  Experience the multinational voice dubbing service provided by\n                  DMTLABS.\n                ")])])])],1):_vm._e()])],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=ba0333c6&scoped=true&

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(211);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: "Default",

  data() {
    return {
      sections: 4,
      scdir: '',
      swdir: '',
      hold: false,
      sX: 0,
      sY: 0,
      stT: 0,
      dX: 0,
      dY: 0,
      elT: 0,
      alT: 500,
      threshold: 100,
      slack: 50,
      lookup: 0
    };
  },

  mounted() {
    const box = this.$refs.box;
    box.style.transform = 'translateY(0)';
    box.addEventListener('wheel', this.handleScroll);
    box.addEventListener('wheel', this.scrollY);
    box.addEventListener('touchstart', this.swipeStart, false);
    box.addEventListener('touchend', this.swipeEnd, false);
  },

  beforeDestroy() {
    const box = this.$refs.box;
    box.removeEventListener('wheel', this.scrollY);
    box.removeEventListener('wheel', this.handleScroll);
    box.removeEventListener('touchstart', this.swipeStart);
    box.removeEventListener('touchend', this.swipeEnd);
  },

  computed: {
    language() {
      return this.$store.state.manager.language;
    }

  },
  methods: {
    handleScroll(e) {
      if (e.deltaY < 0) {
        this.scdir = 'down';
      }

      if (e.deltaY > 0) {
        this.scdir = 'up';
      }

      e.preventDefault();
      e.stopPropagation();
    },

    scrollY() {
      var slength;
      var plength;
      var pan = this.$refs.box;
      var step = 100;
      var vh = window.innerHeight / 100;
      var vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      plength = parseInt(pan.offsetHeight / vh);
      plength = plength || parseInt(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace('translateY(', ''));

      if (this.scdir === 'up' && Math.abs(slength) < plength - plength / this.sections) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }

      if (this.hold === false) {
        this.hold = true;

        if (this.scdir === 'up') {
          if (this.lookup < this.sections - 1) this.lookup++;
        } else if (this.scdir === 'down') {
          if (this.lookup > 0) this.lookup--;
        }

        pan.style.transform = 'translateY(' + slength + 'vh)';
        setTimeout(() => {
          this.hold = false;
        }, 1000);
      }
    },

    swipeStart(e) {
      var tchs = e.changedTouches[0];
      this.swdir = 'none';
      this.sX = tchs.pageX;
      this.sY = tchs.pageY;
      this.stT = new Date().getTime();
    },

    swipeEnd(e) {
      var pan = this.$refs.box;
      var tchs = e.changedTouches[0];
      this.dX = tchs.pageX - this.sX;
      this.dY = tchs.pageY - this.sY;
      this.elT = new Date().getTime() - this.stT;

      if (this.elT <= this.alT) {
        if (Math.abs(this.dX) >= this.threshold && Math.abs(this.dY) <= this.slack) {
          this.swdir = this.dX < 0 ? 'left' : 'right';
        } else if (Math.abs(this.dY) >= this.threshold && Math.abs(this.dX) <= this.slack) {
          this.swdir = this.dY < 0 ? 'up' : 'down';
        }

        if (this.swdir === 'up') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        } else if (this.swdir === 'down') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        }

        e.preventDefault();
        e.stopPropagation();
      }
    },

    beforeEnter(el) {
      el.style.position = 'relative';
      el.style.top = '30vh';
      el.style.opacity = 0;
    },

    enter(el, done) {
      external_gsap_default.a.to(el, {
        duration: 2,
        opacity: 1,
        top: 0,
        ease: 'power2.out',
        stagger: 0.2,
        onComplete: done
      });
    },

    subEnter(el, done) {
      external_gsap_default.a.to(el, {
        delay: 0.6,
        duration: 1.4,
        opacity: 1,
        top: 0,
        ease: 'power2.out',
        stagger: 0.2,
        onComplete: done
      });
    },

    leave(el, done) {
      external_gsap_default.a.to(el, {
        duration: 0.7,
        top: '30vh',
        ease: 'elastic.inOut(2.5, 1)'
      });
      external_gsap_default.a.to(el, {
        duration: 0.2,
        opacity: 0,
        onComplete: done
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(61);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(326)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ba0333c6",
  "0e30374c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map