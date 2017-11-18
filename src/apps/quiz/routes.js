import NarrowLayout from '@/common/NarrowLayout.vue'
import StartGame from './pages/StartGame.vue'
import Play from './pages/Play.vue'
import WonWindow from './pages/Won.vue'
import LostWindow from './pages/Lost.vue'
import { STATUSES } from './const'

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
        component: WonWindow,
        path: '/won',
        meta: { requiredQuizStatus: STATUSES.WON }
      },
      {
        name: 'lost',
        component: LostWindow,
        path: '/lost',
        meta: { requiredQuizStatus: STATUSES.LOST }
      },
      {
        name: 'game',
        component: StartGame,
        path: '/game'
      }
    ]
  }
]
