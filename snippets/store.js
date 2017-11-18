import { REWARDS } from '@/common/const.js'

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
