import SettingsView from './pages/SettingsView.vue'
import NarrowLayout from '@/common/NarrowLayout.vue'

export default [
  {
    path: '/',
    component: NarrowLayout,
    children: [
      {
        path: '/settings',
        component: SettingsView,
        name: 'settings'
      }
    ]
  }
]
