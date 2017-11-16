import Game from './pages/Game.vue'
import Play from './pages/Play.vue'
import GameLayout from './pages/GameLayout.vue'

export default [
  {
    component: GameLayout,
    path: '/',
    children: [
      {
        name: 'game',
        component: Game,
        path: '/game'
      },
      {
        name: 'play',
        component: Play,
        path: '/play'
      }
    ]
  }
]
