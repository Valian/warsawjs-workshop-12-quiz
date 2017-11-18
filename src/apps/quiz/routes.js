import RulesView from './pages/RulesView.vue'
import Play from './pages/PlayView.vue'
import WonView from './pages/WonView.vue'
import LostView from './pages/LostView.vue'
import NarrowLayout from '@/common/NarrowLayout.vue'
import { STATUSES } from '@/common/const'

export default [
  {
    name: 'play',
    component: Play,
    path: '/play',
    meta: { requiredQuizStatus: STATUSES.PLAYING }
  },
  {
    path: '/',
    component: NarrowLayout,
    children: [
      {
        name: 'won',
        component: WonView,
        path: '/won',
        meta: { requiredQuizStatus: STATUSES.WON }
      },
      {
        name: 'lost',
        component: LostView,
        path: '/lost',
        meta: { requiredQuizStatus: STATUSES.LOST }
      },
      {
        name: 'game',
        component: RulesView,
        path: '/game'
      }
    ]
  }
]
