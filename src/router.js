import Vue from 'vue'
import Router from 'vue-router'
import IntroView from './components/IntroView.vue'
import RulesView from './components/RulesView.vue'
import WonView from './components/WonView.vue'
import LostView from './components/LostView.vue'
import PlayView from './components/PlayView.vue'
import NarrowLayout from './components/NarrowLayout.vue'

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
          path: '/lost',
          name: 'lost',
          component: LostView
        },
        {
          path: '/won',
          name: 'won',
          component: WonView
        },
        {
          path: '/rules',
          component: RulesView,
          name: 'rules'
        }
      ]
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView
    }
  ]
})
