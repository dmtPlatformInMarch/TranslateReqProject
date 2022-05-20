exports.ids = [5];
exports.modules = {

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("85d0203c", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_f84f1ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_f84f1ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_f84f1ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_f84f1ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_f84f1ffc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main__template[data-v-f84f1ffc]{overflow:hidden;height:100%}.main__template *[data-v-f84f1ffc]{touch-action:none}.scroll__box[data-v-f84f1ffc]{transition:1s cubic-bezier(.5,0,.5,1)}.scroll__box[data-v-f84f1ffc],.scroll__item[data-v-f84f1ffc]{position:relative;overflow:hidden}.scroll__item[data-v-f84f1ffc]{height:100vh;cursor:default}.scroll__item__textbox[data-v-f84f1ffc]{height:100vh;display:flex;flex-direction:column;text-align:center;justify-content:center}.scroll__item__title[data-v-f84f1ffc]{font-size:10rem;font-weight:lighter;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=f84f1ffc&scoped=true&class=main__template&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"box",staticClass:"scroll__box"},[_vm._ssrNode("<div class=\"scroll__item\" data-v-f84f1ffc>","</div>",[_c('v-img',{attrs:{"src":_vm.mainimg,"height":"100vh"}},[_c('div',{staticClass:"scroll__item__textbox"},[_c('div',{staticClass:"scroll__item__title"},[_vm._v("\n          1페이지\n        ")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-f84f1ffc>","</div>",[_c('v-img',{attrs:{"src":_vm.mainimg,"height":"100vh"}},[_c('div',{staticClass:"scroll__item__textbox"},[_c('div',{staticClass:"scroll__item__title"},[_vm._v("\n          2페이지\n        ")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-f84f1ffc>","</div>",[_c('v-img',{attrs:{"src":_vm.mainimg,"height":"100vh"}},[_c('div',{staticClass:"scroll__item__textbox"},[_c('div',{staticClass:"scroll__item__title"},[_vm._v("\n          3페이지\n        ")])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"scroll__item\" data-v-f84f1ffc>","</div>",[_c('v-img',{attrs:{"src":_vm.mainimg,"height":"100vh"}},[_c('div',{staticClass:"scroll__item__textbox"},[_c('div',{staticClass:"scroll__item__title"},[_vm._v("\n          4페이지\n        ")])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=f84f1ffc&scoped=true&class=main__template&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  data() {
    return {
      mainimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg',
      // || require("~/static/mainImg1.jpg"),
      sections: 4,
      scdir: '',
      swdir: '',
      hold: false
    };
  },

  mounted() {
    const box = this.$refs.box;
    box.style.transform = 'translateY(0)';
    box.addEventListener('wheel', this.handleScroll);
    box.addEventListener('wheel', this.scrollY);
    this.swipe(box);
  },

  beforeDestroy() {
    const box = this.$refs.box;
    box.removeEventListener('wheel', this.scrollY);
    box.removeEventListener('wheel', this.handleScroll);
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
      console.log(pan);

      if (this.scdir === 'up' && Math.abs(slength) < plength - plength / this.sections) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }

      if (this.hold === false) {
        this.hold = true;
        pan.style.transform = 'translateY(' + slength + 'vh)';
        console.log(pan.style.transform);
        setTimeout(() => {
          this.hold = false;
        }, 1000);
      }

      console.log(this.scdir + ":" + slength + ":" + plength + ":" + (plength - plength / this.sections));
    },

    swipe() {
      var sX;
      var sY;
      var dX;
      var dY;
      var threshold = 100;
      var slack = 50;
      var alT = 500;
      var elT;
      var stT;
      var pan = this.$refs.box;
      pan.addEventListener('touchstart', function (e) {
        var tchs = e.changedTouches[0];
        this.swdir = 'none';
        sX = tchs.pageX;
        sY = tchs.pageY;
        stT = new Date().getTime();
      }, false);
      pan.addEventListener('touchend', function (e) {
        var tchs = e.changedTouches[0];
        dX = tchs.pageX - sX;
        dY = tchs.pageY - sY;
        elT = new Date().getTime() - stT;

        if (elT <= alT) {
          if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
            this.swdir = dX < 0 ? 'left' : 'right';
          } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
            this.swdir = dY < 0 ? 'up' : 'down';
          }

          if (pan.id === 'box') {
            if (this.swdir === 'up') {
              this.scdir = this.swdir;
              scrollY(pan);
            } else if (this.swdir === 'down' && pan.style.transform != 'translateY(0)') {
              this.scdir = this.swdir;
              scrollY(pan);
            }

            e.preventDefault();
            e.stopPropagation();
          }
        }
      }, false);
    }

  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(61);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f84f1ffc",
  "b7bcc38c"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=test.js.map