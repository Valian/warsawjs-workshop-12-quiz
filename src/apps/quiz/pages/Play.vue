<template>
  <PlayLayout>
    <template slot="title">
      <h1 class="title">Round {{ currentRound + 1 }} of {{ maxRounds }}</h1>
      <h2 class="subtitle">Currently won: {{ cash }}$</h2>
    </template>
    <template slot="main">
      <won-window
        v-if="status === STATUSES.WON"
        :reward="cash">
      </won-window>
      <play-window
        v-if="status === STATUSES.PLAYING"
        :currentQuestion="currentQuestion"
        @submit="submitAnswer">
      </play-window>
    </template>

    <questions-window
      slot="side"
      :questions="questions.slice().reverse()">
    </questions-window>
  </PlayLayout>
</template>

<script>
  import QuestionsWindow from '../components/QuestionsWindow.vue'
  import PlayWindow from '../components/PlayWindow.vue'
  import WonWindow from '../components/WonWindow.vue'
  import PlayLayout from './PlayLayout.vue'
  import { mapGetters } from 'vuex'
  import { STATUSES } from '../const'

  export default {
    components: { QuestionsWindow, PlayWindow, PlayLayout, WonWindow },
    data: () => ({
      STATUSES
    }),
    methods: {
      submitAnswer (number) {
        this.$store.commit('quiz/answerQuestion', number)
      }
    },
    computed: mapGetters({
      status: 'quiz/status',
      currentRound: 'quiz/currentRound',
      currentQuestion: 'quiz/currentQuestion',
      questions: 'quiz/questions',
      cash: 'quiz/cash',
      maxRounds: 'quiz/maxRounds'
    })
  }
</script>
