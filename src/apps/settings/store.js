import { DIFFICULTY_LEVELS } from '@/common/const'

const state = {
  difficulty: DIFFICULTY_LEVELS.EASY,
  numberOfQuestions: 10
}

const getters = {
  difficulty: state => state.difficulty,
  numberOfQuestions: state => state.numberOfQuestions
}

const mutations = {
  setDifficulty: (state, difficulty) => {
    state.difficulty = difficulty
  },
  setNumberOfQuestions: (state, numberOfQuestions) => {
    state.numberOfQuestions = numberOfQuestions
  }
}

export default {
  getters,
  mutations,
  state,
  namespaced: true
}
