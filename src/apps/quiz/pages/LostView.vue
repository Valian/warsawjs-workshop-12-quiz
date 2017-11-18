<template>
  <div class="has-text-centered box">
    <h1 class="title">Incorrect answer, you lost!</h1>
    <h2 class="subtitle" v-if="correctAnswer">
      Correct answer: <span v-html="correctAnswer"></span>
    </h2>
    <hr>
    <div class="columns">
      <div class="column">
        <start-game-button class="is-fullwidth" label="Try again"></start-game-button>
      </div>
      <div class="column">
        <router-link
          :to="{name: 'game'}"
          class="button is-fullwidth">
          Main menu
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import StartGameButton from '../components/StartGameButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { StartGameButton },
    computed: {
      ...mapGetters({
        status: 'quiz/status',
        currentQuestion: 'quiz/currentQuestion'
      }),
      correctAnswer () {
        return this.status === 'lost' && this.currentQuestion.answers[this.currentQuestion.correctAnswer]
      }
    }
  }
</script>
