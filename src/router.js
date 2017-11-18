import Vue from 'vue'
import Router from 'vue-router'
import Intro from './common/Intro.vue'
import quizRoutes from './apps/quiz/routes'
import adminRoutes from './apps/settings/routes'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'intro',
      component: Intro,
      path: '/'
    },
    ...quizRoutes,
    ...adminRoutes
  ]
})

router.beforeEach((to, from, next) => {
  const routeMeta = to.matched
    .filter(record => record.meta)
    .map(record => record.meta)
  for (const meta of routeMeta) {
    const requiredQuizStatus = meta.requiredQuizStatus
    if (requiredQuizStatus) {
      const currentStatus = store.getters['quiz/status']
      if (requiredQuizStatus !== currentStatus) {
        const redirectTarget = meta.redirect || {name: 'game'}
        redirectTarget.replace = true
        next(redirectTarget)
        return
      }
    }
  }

  next() // make sure to always call next()!
})

export default router
