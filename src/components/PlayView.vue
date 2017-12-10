<template>
  <div class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <div class="has-text-centered">
          <h1 class="title">Currently won: <strong>{{ cash }} $</strong></h1>
          <h2 class="subtitle">Round {{ currentRound + 1 }} of {{ maxRounds }}</h2>
        </div>
      </div>
    </div>
    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile">
          <game
            class="box"
            :question="currentQuestion"
            @answer="answerQuestion"></game>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <questions-bar :questions="questions.slice().reverse()"></questions-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuestionsBar from './QuestionsBar.vue'
  import Game from './Game.vue'
  import { REWARDS } from '../common/const.js'

  export default {
    components: {QuestionsBar, Game},
    data: () => ({
      cash: 0,
      currentRound: 0,
      rawQuestions: [
        {
          "text": "Which Apollo mission was the first one to land on the Moon?",
          "category": "Science & Nature",
          "correctAnswer": 3,
          "difficulty": "easy",
          "answers": [
            "Apollo 9",
            "Apollo 13",
            "Apollo 10",
            "Apollo 11"
          ]
        },
        {
          "text": "Which German field marshal was known as the `Desert Fox`?",
          "category": "History",
          "correctAnswer": 3,
          "difficulty": "easy",
          "answers": [
            "Wolfram Freiherr von Richthofen",
            "Ernst Busch",
            "Wilhelm List",
            "Erwin Rommel"
          ]
        },
        {
          "text": "What is the standard SI unit for temperature?",
          "category": "Science & Nature",
          "correctAnswer": 0,
          "difficulty": "easy",
          "answers": [
            "Kelvin",
            "Fahrenheit",
            "Celsius",
            "Rankine"
          ]
        }
      ]
    }),
    computed: {
      currentQuestion () {
        return this.questions[this.currentRound]
      },
      maxRounds () {
        return this.rawQuestions.length
      },
      questions () {
        return this.rawQuestions.map((q, i) => ({
          ...q,
          reward: REWARDS[i],
          isAnswered: i < this.currentRound
        }))
      }
    },
    methods: {
      answerQuestion (answerNumber) {
        if (this.currentQuestion.correctAnswer === answerNumber) {
          this.cash += this.currentQuestion.reward
          this.currentRound += 1
        }
      }
    }
  }
</script>


<style lang="scss">

  // styles for animations

  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s linear;
  }
  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
