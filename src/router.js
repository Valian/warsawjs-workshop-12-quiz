import Vue from 'vue'
import Router from 'vue-router'
import NarrowLayout from './common/NarrowLayout.vue'
import IntroView from './components/IntroView.vue'
import RulesView from './components/RulesView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: NarrowLayout,
      children: [
        {
          path: '/',
          component: IntroView,
          name: 'intro'
        },
        {
          path: '/rules',
          component: RulesView,
          name: 'rules'
        }
      ]
    }
  ]
})