import { STATUSES, REWARDS } from './const'

const question = {
  text: 'Lorem ipsum',
  correctAnswer: 1,
  answers: [
    'first',
    'second',
    'third',
    'fourth'
  ]
}

const initialState = {
  cash: 0,
  currentRound: null,
  status: STATUSES.WAITING,
  questions: [question]
}

const getters = {
  cash: state => state.cash,
  currentRound: state => state.currentRound,
  maxRounds: state => Math.min(REWARDS.length, state.questions.length),
  questions: state => state.questions
    .slice(0, getters.maxRounds(state))
    .map((q, number) => ({...q, reward: REWARDS[number]})),
  currentQuestion: state => {
    const questions = getters.questions(state)
    const currentRound = getters.currentRound(state)
    return questions[currentRound]
  }
}

const mutations = {
  initGame: (state, questions) => {
    state.cash = 0
    state.currentRound = 0
    state.questions = questions
    state.status = STATUSES.WAITING
  },
  startGame: (state, questions) => {
    state.status = STATUSES.PLAYING
  },
  answerQuestion: (state, answerNumber) => {
    const q = getters.currentQuestion(state)
    const currentRound = getters.currentRound(state)
    const maxRounds = getters.maxRounds(state)
    if (q.correctAnswer === answerNumber) {
      state.cash = q.reward
      if (currentRound < maxRounds) {
        state.currentRound += 1
      } else {
        state.status = STATUSES.WON
      }
    } else {
      state.status = STATUSES.LOST
    }
  }
}

export default {
  getters,
  mutations,
  state: initialState,
  namespaced: true
}
