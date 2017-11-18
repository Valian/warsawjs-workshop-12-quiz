import { STATUSES, REWARDS, DIFFICULTY_LEVELS } from './const'
import { getQuestions } from './api'
import Promise from 'bluebird'

const initialState = {
  cash: 0,
  currentRound: null,
  status: STATUSES.NOT_STARTED,
  questions: []
}

const getters = {
  cash: state => state.cash,
  status: state => state.status,
  currentRound: state => state.currentRound,
  maxRounds: state => Math.min(REWARDS.length, state.questions.length),
  questions: state => state.questions
    .slice(0, getters.maxRounds(state))
    .map((q, number) => ({
      ...q,
      reward: REWARDS[number],
      isAnswered: number < getters.currentRound(state)
    })),
  currentQuestion: state => {
    const questions = getters.questions(state)
    const currentRound = getters.currentRound(state)
    return questions[currentRound]
  }
}

const actions = {
  initGame: ({commit}, amountOfQuestions = 10) => {
    return getQuestions(amountOfQuestions, DIFFICULTY_LEVELS.EASY)
      .then(questions => commit('resetGame', questions))
  },
  answerQuestion ({commit}, answerNumber) {
    console.log('Answer dispatch')
    return Promise
      .delay(Math.random() * 2000 + 1000)
      .then(() => commit('answerQuestion', answerNumber))
  }
}

const mutations = {
  resetGame: (state, questions) => {
    state.cash = 0
    state.currentRound = 0
    state.questions = questions
    state.status = STATUSES.PLAYING
  },
  answerQuestion: (state, answerNumber) => {
    console.log('Answer commit')
    const q = getters.currentQuestion(state)
    const currentRound = getters.currentRound(state)
    const maxRounds = getters.maxRounds(state)
    if (q.correctAnswer === answerNumber) {
      state.cash = q.reward
      if (currentRound < maxRounds) {
        state.currentRound += 1
      }
      if (currentRound + 1 === maxRounds) {
        state.status = STATUSES.WON
      }
    } else {
      state.status = STATUSES.LOST
    }
  }
}

export default {
  actions,
  getters,
  mutations,
  state: initialState,
  namespaced: true
}
