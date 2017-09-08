/**
 * Created by admin on 2017/9/8.
 */

import router from './router'

router.beforeEach((to, from, next) => {
  next('/login')
})
