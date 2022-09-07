import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d889866 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _00752100 = () => interopDefault(import('../pages/apitest.vue' /* webpackChunkName: "pages/apitest" */))
const _1e3de850 = () => interopDefault(import('../pages/PdfTest.vue' /* webpackChunkName: "pages/PdfTest" */))
const _09474e82 = () => interopDefault(import('../pages/uitest.vue' /* webpackChunkName: "pages/uitest" */))
const _1fba2b20 = () => interopDefault(import('../pages/uitest2.vue' /* webpackChunkName: "pages/uitest2" */))
const _9e2ff62c = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _2500d3a9 = () => interopDefault(import('../pages/admin/mgRequest.vue' /* webpackChunkName: "pages/admin/mgRequest" */))
const _af2f7bbe = () => interopDefault(import('../pages/admin/mgUser.vue' /* webpackChunkName: "pages/admin/mgUser" */))
const _c6ca1ab8 = () => interopDefault(import('../pages/text/info.vue' /* webpackChunkName: "pages/text/info" */))
const _03586329 = () => interopDefault(import('../pages/text/reqstate.vue' /* webpackChunkName: "pages/text/reqstate" */))
const _1f525e89 = () => interopDefault(import('../pages/text/request.vue' /* webpackChunkName: "pages/text/request" */))
const _6b937f5c = () => interopDefault(import('../pages/text/textmain.vue' /* webpackChunkName: "pages/text/textmain" */))
const _23bf4530 = () => interopDefault(import('../pages/user/signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _173c288f = () => interopDefault(import('../pages/video/filetrack.vue' /* webpackChunkName: "pages/video/filetrack" */))
const _30026b1e = () => interopDefault(import('../pages/video/info.vue' /* webpackChunkName: "pages/video/info" */))
const _6ec84aad = () => interopDefault(import('../pages/video/realtrack.vue' /* webpackChunkName: "pages/video/realtrack" */))
const _045ca616 = () => interopDefault(import('../pages/video/service.vue' /* webpackChunkName: "pages/video/service" */))
const _38e4fc47 = () => interopDefault(import('../pages/voice/info.vue' /* webpackChunkName: "pages/voice/info" */))
const _73aca426 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7d889866,
    name: "admin"
  }, {
    path: "/apitest",
    component: _00752100,
    name: "apitest"
  }, {
    path: "/PdfTest",
    component: _1e3de850,
    name: "PdfTest"
  }, {
    path: "/uitest",
    component: _09474e82,
    name: "uitest"
  }, {
    path: "/uitest2",
    component: _1fba2b20,
    name: "uitest2"
  }, {
    path: "/user",
    component: _9e2ff62c,
    name: "user"
  }, {
    path: "/admin/mgRequest",
    component: _2500d3a9,
    name: "admin-mgRequest"
  }, {
    path: "/admin/mgUser",
    component: _af2f7bbe,
    name: "admin-mgUser"
  }, {
    path: "/text/info",
    component: _c6ca1ab8,
    name: "text-info"
  }, {
    path: "/text/reqstate",
    component: _03586329,
    name: "text-reqstate"
  }, {
    path: "/text/request",
    component: _1f525e89,
    name: "text-request"
  }, {
    path: "/text/textmain",
    component: _6b937f5c,
    name: "text-textmain"
  }, {
    path: "/user/signup",
    component: _23bf4530,
    name: "user-signup"
  }, {
    path: "/video/filetrack",
    component: _173c288f,
    name: "video-filetrack"
  }, {
    path: "/video/info",
    component: _30026b1e,
    name: "video-info"
  }, {
    path: "/video/realtrack",
    component: _6ec84aad,
    name: "video-realtrack"
  }, {
    path: "/video/service",
    component: _045ca616,
    name: "video-service"
  }, {
    path: "/voice/info",
    component: _38e4fc47,
    name: "voice-info"
  }, {
    path: "/",
    component: _73aca426,
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
