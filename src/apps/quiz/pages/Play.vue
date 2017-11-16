<template>
  <div class="tile is-vertical is-ancestor">
    <div class="tile is-parent">
      <div class="is-child tile box">
        <h1 class="title">Round {{ currentRound + 1 }} of {{ maxRounds }}</h1>
        <h2 class="subtitle">Currently won: {{ cash }}$</h2>
      </div>
    </div>
    <div class="tile">
      <div class="tile is-parent is-9">
        <article class="tile is-child box">
          <h2 class="subtitle">Question for {{ currentQuestion.reward }}$</h2>
          <h1>{{ currentQuestion.text }}</h1>
          <div>
            <ul>
              <li v-for="(answer, number) in currentQuestion.answers">
                <button @click="submitAnswer(number)">
                  {{ answer }}
                </button>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <!-- Put any content you want -->
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    methods: {
      submitAnswer (number) {
        this.$store.commit('quiz/answerQuestion', number)
      }
    },
    computed: mapGetters({
      currentRound: 'quiz/currentRound',
      currentQuestion: 'quiz/currentQuestion',
      questions: 'quiz/questions',
      cash: 'quiz/cash',
      maxRounds: 'quiz/maxRounds'
    })
  }
</script>
