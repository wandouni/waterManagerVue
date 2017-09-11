/**
 * Created by admin on 2017/9/8.
 */

import router from './router'

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (getToken()) {
      if (to.path === '/login') {
        next('/')
      }
    }
  } else {
    next()
  }
})
