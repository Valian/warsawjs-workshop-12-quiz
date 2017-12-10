import shuffle from 'lodash/shuffle'
import axios from 'axios'
import mockResponse from './mockResponse.json'
import { DIFFICULTY_LEVELS } from './const'

const QUESTION_API_ENDPOINT = 'https://opentdb.com/api.php'
const MOCK = true

const mapApiQuestionToAppQuestion = q => {
  const answers = shuffle([
    q.correct_answer,
    ...q.incorrect_answers
  ])
  return {
    text: q.question,
    category: q.category,
    correctAnswer: answers.indexOf(q.correct_answer),
    difficulty: q.difficulty,
    answers
  }
}

const getQuestionsMock = (amount, difficulty = DIFFICULTY_LEVELS.MEDIUM) =>
  Promise.resolve(mockResponse)
    .then(data => data.results.map(mapApiQuestionToAppQuestion))

const getQuestionsFromApi = (amount, difficulty = DIFFICULTY_LEVELS.MEDIUM) =>
  axios.get(QUESTION_API_ENDPOINT, {params: { amount, difficulty }})
    .then(response => response.data.results
      .map(mapApiQuestionToAppQuestion))

export const getQuestions = MOCK ? getQuestionsMock : getQuestionsFromApi
