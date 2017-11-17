import Vue from 'vue'
import Router from 'vue-router'
import Intro from './common/Intro.vue'
import quizRoutes from './apps/quiz/routes'
import adminRoutes from './apps/admin/routes'

Vue.use(Router)

export default new Router({
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
