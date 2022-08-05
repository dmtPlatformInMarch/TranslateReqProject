import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39772c30 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _ff0b6f12 = () => interopDefault(import('..\\pages\\apitest.vue' /* webpackChunkName: "pages/apitest" */))
const _8a5847aa = () => interopDefault(import('..\\pages\\uitest.vue' /* webpackChunkName: "pages/uitest" */))
const _c0815ad2 = () => interopDefault(import('..\\pages\\uitest2.vue' /* webpackChunkName: "pages/uitest2" */))
const _2a4d36f2 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _84d7d7aa = () => interopDefault(import('..\\pages\\admin\\mgRequest.vue' /* webpackChunkName: "pages/admin/mgRequest" */))
const _0bb2be42 = () => interopDefault(import('..\\pages\\admin\\mgUser.vue' /* webpackChunkName: "pages/admin/mgUser" */))
const _683c5cc0 = () => interopDefault(import('..\\pages\\text\\info.vue' /* webpackChunkName: "pages/text/info" */))
const _65df6425 = () => interopDefault(import('..\\pages\\text\\reqstate.vue' /* webpackChunkName: "pages/text/reqstate" */))
const _70ad63e6 = () => interopDefault(import('..\\pages\\text\\request.vue' /* webpackChunkName: "pages/text/request" */))
const _63caff50 = () => interopDefault(import('..\\pages\\text\\textmain.vue' /* webpackChunkName: "pages/text/textmain" */))
const _51ff57b0 = () => interopDefault(import('..\\pages\\user\\signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _9276738e = () => interopDefault(import('..\\pages\\video\\filetrack.vue' /* webpackChunkName: "pages/video/filetrack" */))
const _21772998 = () => interopDefault(import('..\\pages\\video\\info.vue' /* webpackChunkName: "pages/video/info" */))
const _0e50e857 = () => interopDefault(import('..\\pages\\video\\realtrack.vue' /* webpackChunkName: "pages/video/realtrack" */))
const _02b3ff2b = () => interopDefault(import('..\\pages\\voice\\info.vue' /* webpackChunkName: "pages/voice/info" */))
const _aa198546 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _39772c30,
    name: "admin"
  }, {
    path: "/apitest",
    component: _ff0b6f12,
    name: "apitest"
  }, {
    path: "/uitest",
    component: _8a5847aa,
    name: "uitest"
  }, {
    path: "/uitest2",
    component: _c0815ad2,
    name: "uitest2"
  }, {
    path: "/user",
    component: _2a4d36f2,
    name: "user"
  }, {
    path: "/admin/mgRequest",
    component: _84d7d7aa,
    name: "admin-mgRequest"
  }, {
    path: "/admin/mgUser",
    component: _0bb2be42,
    name: "admin-mgUser"
  }, {
    path: "/text/info",
    component: _683c5cc0,
    name: "text-info"
  }, {
    path: "/text/reqstate",
    component: _65df6425,
    name: "text-reqstate"
  }, {
    path: "/text/request",
    component: _70ad63e6,
    name: "text-request"
  }, {
    path: "/text/textmain",
    component: _63caff50,
    name: "text-textmain"
  }, {
    path: "/user/signup",
    component: _51ff57b0,
    name: "user-signup"
  }, {
    path: "/video/filetrack",
    component: _9276738e,
    name: "video-filetrack"
  }, {
    path: "/video/info",
    component: _21772998,
    name: "video-info"
  }, {
    path: "/video/realtrack",
    component: _0e50e857,
    name: "video-realtrack"
  }, {
    path: "/voice/info",
    component: _02b3ff2b,
    name: "voice-info"
  }, {
    path: "/",
    component: _aa198546,
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
