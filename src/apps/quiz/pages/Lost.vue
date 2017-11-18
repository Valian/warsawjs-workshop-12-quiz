<template>
  <div class="c-won-window has-text-centered box">
    <h1 class="title">Incorrect answer, you lost!</h1>
    <h2 class="subtitle" v-html="'Correct answer was: ' + correctAnswer"></h2>
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
