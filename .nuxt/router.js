import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0bf7cb8 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5e4d8b3b = () => interopDefault(import('..\\pages\\apitest.vue' /* webpackChunkName: "pages/apitest" */))
const _3182ef5e = () => interopDefault(import('..\\pages\\dev\\index.vue' /* webpackChunkName: "pages/dev/index" */))
const _d90d1094 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _717d4557 = () => interopDefault(import('..\\pages\\admin\\main.vue' /* webpackChunkName: "pages/admin/main" */))
const _90b8d81c = () => interopDefault(import('..\\pages\\admin\\mgAPI.vue' /* webpackChunkName: "pages/admin/mgAPI" */))
const _96f4a432 = () => interopDefault(import('..\\pages\\admin\\mgRequest.vue' /* webpackChunkName: "pages/admin/mgRequest" */))
const _5644c051 = () => interopDefault(import('..\\pages\\admin\\mgToken.vue' /* webpackChunkName: "pages/admin/mgToken" */))
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
const _47726972 = () => interopDefault(import('..\\pages\\dev\\api\\translate-text.vue' /* webpackChunkName: "pages/dev/api/translate-text" */))
const _36aa7dd0 = () => interopDefault(import('..\\pages\\dev\\enterprise\\about.vue' /* webpackChunkName: "pages/dev/enterprise/about" */))
const _c6585160 = () => interopDefault(import('..\\pages\\dev\\enterprise\\token-issue.vue' /* webpackChunkName: "pages/dev/enterprise/token-issue" */))
const _0d1fb5a7 = () => interopDefault(import('..\\pages\\dev\\enterprise\\usage-check.vue' /* webpackChunkName: "pages/dev/enterprise/usage-check" */))
const _deab8c74 = () => interopDefault(import('..\\pages\\dev\\platform\\about.vue' /* webpackChunkName: "pages/dev/platform/about" */))
const _8aef6130 = () => interopDefault(import('..\\pages\\dev\\platform\\text-translation.vue' /* webpackChunkName: "pages/dev/platform/text-translation" */))
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
    path: "/dev",
    component: _3182ef5e,
    name: "dev"
  }, {
    path: "/user",
    component: _d90d1094,
    name: "user"
  }, {
    path: "/admin/main",
    component: _717d4557,
    name: "admin-main"
  }, {
    path: "/admin/mgAPI",
    component: _90b8d81c,
    name: "admin-mgAPI"
  }, {
    path: "/admin/mgRequest",
    component: _96f4a432,
    name: "admin-mgRequest"
  }, {
    path: "/admin/mgToken",
    component: _5644c051,
    name: "admin-mgToken"
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
    path: "/dev/api/translate-text",
    component: _47726972,
    name: "dev-api-translate-text"
  }, {
    path: "/dev/enterprise/about",
    component: _36aa7dd0,
    name: "dev-enterprise-about"
  }, {
    path: "/dev/enterprise/token-issue",
    component: _c6585160,
    name: "dev-enterprise-token-issue"
  }, {
    path: "/dev/enterprise/usage-check",
    component: _0d1fb5a7,
    name: "dev-enterprise-usage-check"
  }, {
    path: "/dev/platform/about",
    component: _deab8c74,
    name: "dev-platform-about"
  }, {
    path: "/dev/platform/text-translation",
    component: _8aef6130,
    name: "dev-platform-text-translation"
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
