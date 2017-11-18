<template>
  <div class="c-won-window o-vertical-fill has-text-centered box">
    <h1 class="title o-vertical-fill__item">Incorrect answer, you lost!</h1>
    <h2 class="subtitle">Correct answer was: {{ correctAnswer }}</h2>
    <start-game-button label="Try again"></start-game-button>
  </div>
</template>

<script>
  import StartGameButton from '../components/StartGameButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { StartGameButton },
    computed: {
      ...mapGetters({
        reward: 'quiz/cash',
        currentQuestion: 'quiz/currentQuestion'
      }),
      correctAnswer () {
        return this.currentQuestion.answers[this.currentQuestion.correctAnswer]
      }
    }
  }
</script>

<style lang="scss">
  .c-won-window {
  }
</style>
