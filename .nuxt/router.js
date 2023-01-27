import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d23a8f4e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _286ef766 = () => interopDefault(import('..\\pages\\apitest.vue' /* webpackChunkName: "pages/apitest" */))
const _1c6704f4 = () => interopDefault(import('..\\pages\\designtest.vue' /* webpackChunkName: "pages/designtest" */))
const _58ed8f53 = () => interopDefault(import('..\\pages\\dev\\index.vue' /* webpackChunkName: "pages/dev/index" */))
const _5962d661 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _3766a402 = () => interopDefault(import('..\\pages\\admin\\main.vue' /* webpackChunkName: "pages/admin/main" */))
const _a233eab2 = () => interopDefault(import('..\\pages\\admin\\mgAPI.vue' /* webpackChunkName: "pages/admin/mgAPI" */))
const _78d87bc8 = () => interopDefault(import('..\\pages\\admin\\mgRequest.vue' /* webpackChunkName: "pages/admin/mgRequest" */))
const _f2774474 = () => interopDefault(import('..\\pages\\admin\\mgToken.vue' /* webpackChunkName: "pages/admin/mgToken" */))
const _8b5bbee4 = () => interopDefault(import('..\\pages\\admin\\mgUser.vue' /* webpackChunkName: "pages/admin/mgUser" */))
const _099124e0 = () => interopDefault(import('..\\pages\\text\\doctran.vue' /* webpackChunkName: "pages/text/doctran" */))
const _0219ef5e = () => interopDefault(import('..\\pages\\text\\info.vue' /* webpackChunkName: "pages/text/info" */))
const _a9b84b54 = () => interopDefault(import('..\\pages\\text\\reqstate.vue' /* webpackChunkName: "pages/text/reqstate" */))
const _f0566488 = () => interopDefault(import('..\\pages\\text\\request.vue' /* webpackChunkName: "pages/text/request" */))
const _135ef689 = () => interopDefault(import('..\\pages\\text\\textmain.vue' /* webpackChunkName: "pages/text/textmain" */))
const _eac2bace = () => interopDefault(import('..\\pages\\user\\signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _867717ac = () => interopDefault(import('..\\pages\\video\\filetrack.vue' /* webpackChunkName: "pages/video/filetrack" */))
const _1e5a0aa3 = () => interopDefault(import('..\\pages\\video\\info.vue' /* webpackChunkName: "pages/video/info" */))
const _14509648 = () => interopDefault(import('..\\pages\\video\\realtrack.vue' /* webpackChunkName: "pages/video/realtrack" */))
const _31c99e9a = () => interopDefault(import('..\\pages\\voice\\info.vue' /* webpackChunkName: "pages/voice/info" */))
const _735778a7 = () => interopDefault(import('..\\pages\\dev\\api\\translate-text.vue' /* webpackChunkName: "pages/dev/api/translate-text" */))
const _3cf7cce6 = () => interopDefault(import('..\\pages\\dev\\enterprise\\about.vue' /* webpackChunkName: "pages/dev/enterprise/about" */))
const _24844405 = () => interopDefault(import('..\\pages\\dev\\enterprise\\token-issue.vue' /* webpackChunkName: "pages/dev/enterprise/token-issue" */))
const _d65fbb48 = () => interopDefault(import('..\\pages\\dev\\enterprise\\usage-check.vue' /* webpackChunkName: "pages/dev/enterprise/usage-check" */))
const _f50da90a = () => interopDefault(import('..\\pages\\dev\\platform\\about.vue' /* webpackChunkName: "pages/dev/platform/about" */))
const _0642aa93 = () => interopDefault(import('..\\pages\\dev\\platform\\text-translation.vue' /* webpackChunkName: "pages/dev/platform/text-translation" */))
const _44d4dc0c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d23a8f4e,
    name: "admin"
  }, {
    path: "/apitest",
    component: _286ef766,
    name: "apitest"
  }, {
    path: "/designtest",
    component: _1c6704f4,
    name: "designtest"
  }, {
    path: "/dev",
    component: _58ed8f53,
    name: "dev"
  }, {
    path: "/user",
    component: _5962d661,
    name: "user"
  }, {
    path: "/admin/main",
    component: _3766a402,
    name: "admin-main"
  }, {
    path: "/admin/mgAPI",
    component: _a233eab2,
    name: "admin-mgAPI"
  }, {
    path: "/admin/mgRequest",
    component: _78d87bc8,
    name: "admin-mgRequest"
  }, {
    path: "/admin/mgToken",
    component: _f2774474,
    name: "admin-mgToken"
  }, {
    path: "/admin/mgUser",
    component: _8b5bbee4,
    name: "admin-mgUser"
  }, {
    path: "/text/doctran",
    component: _099124e0,
    name: "text-doctran"
  }, {
    path: "/text/info",
    component: _0219ef5e,
    name: "text-info"
  }, {
    path: "/text/reqstate",
    component: _a9b84b54,
    name: "text-reqstate"
  }, {
    path: "/text/request",
    component: _f0566488,
    name: "text-request"
  }, {
    path: "/text/textmain",
    component: _135ef689,
    name: "text-textmain"
  }, {
    path: "/user/signup",
    component: _eac2bace,
    name: "user-signup"
  }, {
    path: "/video/filetrack",
    component: _867717ac,
    name: "video-filetrack"
  }, {
    path: "/video/info",
    component: _1e5a0aa3,
    name: "video-info"
  }, {
    path: "/video/realtrack",
    component: _14509648,
    name: "video-realtrack"
  }, {
    path: "/voice/info",
    component: _31c99e9a,
    name: "voice-info"
  }, {
    path: "/dev/api/translate-text",
    component: _735778a7,
    name: "dev-api-translate-text"
  }, {
    path: "/dev/enterprise/about",
    component: _3cf7cce6,
    name: "dev-enterprise-about"
  }, {
    path: "/dev/enterprise/token-issue",
    component: _24844405,
    name: "dev-enterprise-token-issue"
  }, {
    path: "/dev/enterprise/usage-check",
    component: _d65fbb48,
    name: "dev-enterprise-usage-check"
  }, {
    path: "/dev/platform/about",
    component: _f50da90a,
    name: "dev-platform-about"
  }, {
    path: "/dev/platform/text-translation",
    component: _0642aa93,
    name: "dev-platform-text-translation"
  }, {
    path: "/",
    component: _44d4dc0c,
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
