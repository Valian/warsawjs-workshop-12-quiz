import SettingsWindow from './pages/SettingsWindow.vue'
import NarrowLayout from '@/common/NarrowLayout.vue'

export default [
  {
    path: '/',
    component: NarrowLayout,
    children: [
      {
        path: '/settings',
        component: SettingsWindow,
        name: 'settings'
      }
    ]
  }
]
