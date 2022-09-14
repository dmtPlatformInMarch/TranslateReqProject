import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0bf7cb8 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5e4d8b3b = () => interopDefault(import('..\\pages\\apitest.vue' /* webpackChunkName: "pages/apitest" */))
const _4eb97613 = () => interopDefault(import('..\\pages\\PdfTest.vue' /* webpackChunkName: "pages/PdfTest" */))
const _d09a26da = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _d90d1094 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _96f4a432 = () => interopDefault(import('..\\pages\\admin\\mgRequest.vue' /* webpackChunkName: "pages/admin/mgRequest" */))
const _6d747eba = () => interopDefault(import('..\\pages\\admin\\mgUser.vue' /* webpackChunkName: "pages/admin/mgUser" */))
const _50ef2f48 = () => interopDefault(import('..\\pages\\text\\info.vue' /* webpackChunkName: "pages/text/info" */))
const _7aa43ce1 = () => interopDefault(import('..\\pages\\text\\reqstate.vue' /* webpackChunkName: "pages/text/reqstate" */))
const _d26f245e = () => interopDefault(import('..\\pages\\text\\request.vue' /* webpackChunkName: "pages/text/request" */))
const _3a414dd8 = () => interopDefault(import('..\\pages\\text\\textmain.vue' /* webpackChunkName: "pages/text/textmain" */))
const _d947a838 = () => interopDefault(import('..\\pages\\user\\signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _a4934016 = () => interopDefault(import('..\\pages\\video\\filetrack.vue' /* webpackChunkName: "pages/video/filetrack" */))
const _5870abf8 = () => interopDefault(import('..\\pages\\video\\info.vue' /* webpackChunkName: "pages/video/info" */))
const _05428213 = () => interopDefault(import('..\\pages\\video\\realtrack.vue' /* webpackChunkName: "pages/video/realtrack" */))
const _6be03fef = () => interopDefault(import('..\\pages\\voice\\info.vue' /* webpackChunkName: "pages/voice/info" */))
const _77806121 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _c0bf7cb8,
    name: "admin"
  }, {
    path: "/apitest",
    component: _5e4d8b3b,
    name: "apitest"
  }, {
    path: "/PdfTest",
    component: _4eb97613,
    name: "PdfTest"
  }, {
    path: "/test",
    component: _d09a26da,
    name: "test"
  }, {
    path: "/user",
    component: _d90d1094,
    name: "user"
  }, {
    path: "/admin/mgRequest",
    component: _96f4a432,
    name: "admin-mgRequest"
  }, {
    path: "/admin/mgUser",
    component: _6d747eba,
    name: "admin-mgUser"
  }, {
    path: "/text/info",
    component: _50ef2f48,
    name: "text-info"
  }, {
    path: "/text/reqstate",
    component: _7aa43ce1,
    name: "text-reqstate"
  }, {
    path: "/text/request",
    component: _d26f245e,
    name: "text-request"
  }, {
    path: "/text/textmain",
    component: _3a414dd8,
    name: "text-textmain"
  }, {
    path: "/user/signup",
    component: _d947a838,
    name: "user-signup"
  }, {
    path: "/video/filetrack",
    component: _a4934016,
    name: "video-filetrack"
  }, {
    path: "/video/info",
    component: _5870abf8,
    name: "video-info"
  }, {
    path: "/video/realtrack",
    component: _05428213,
    name: "video-realtrack"
  }, {
    path: "/voice/info",
    component: _6be03fef,
    name: "voice-info"
  }, {
    path: "/",
    component: _77806121,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
