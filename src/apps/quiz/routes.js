import StartGame from './pages/StartGame.vue'
import Play from './pages/Play.vue'
import GameLayout from './pages/GameLayout.vue'
import store from '@/store'
import { STATUSES } from './const'

export default [
  {
    component: GameLayout,
    path: '/',
    children: [
      {
        name: 'game',
        component: StartGame,
        path: '/game'
      },
      {
        name: 'play',
        component: Play,
        path: '/play',
        beforeEnter: (to, from, next) => {
          const status = store.getters['quiz/status']
          if (status === STATUSES.NOT_STARTED) {
            next({replace: true, name: 'game'})
          } else {
            next()
          }
        }
      }
    ]
  }
]
