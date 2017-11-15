import Vue from 'vue'
import Vuex from 'vuex'

import admin from './apps/admin/store'
import quiz from './apps/quiz/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin,
    quiz
  }
})
