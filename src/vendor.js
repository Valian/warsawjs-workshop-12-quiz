import Vue from 'vue'
import Loading from './common/Loading.vue'
import { loadingMixin } from './utils'

Vue.component('o-loading', Loading)

Vue.mixin(loadingMixin)

Vue.filter('currency', value => '$ ' + value.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
)
