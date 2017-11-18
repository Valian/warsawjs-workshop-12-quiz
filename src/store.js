import Vue from 'vue'
import Vuex from 'vuex'

import settings from './apps/settings/store'
import quiz from './apps/quiz/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings,
    quiz
  }
})
