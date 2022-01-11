import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ec80d88 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages/history" */))
const _e34cb3fa = () => interopDefault(import('..\\pages\\request.vue' /* webpackChunkName: "pages/request" */))
const _36747bd4 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _4e25e3f6 = () => interopDefault(import('..\\pages\\state.vue' /* webpackChunkName: "pages/state" */))
const _251f69c6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/history",
    component: _5ec80d88,
    name: "history"
  }, {
    path: "/request",
    component: _e34cb3fa,
    name: "request"
  }, {
    path: "/signup",
    component: _36747bd4,
    name: "signup"
  }, {
    path: "/state",
    component: _4e25e3f6,
    name: "state"
  }, {
    path: "/",
    component: _251f69c6,
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
