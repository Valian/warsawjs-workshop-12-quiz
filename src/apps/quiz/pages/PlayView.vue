<template>
  <PlayLayout>
    <div slot="title" class="has-text-centered">
      <h1 class="title">Currently won: <strong>{{ cash | currency }}</strong></h1>
      <h2 class="subtitle">Round {{ currentRound + 1 }} of {{ maxRounds }}</h2>
    </div>
    <transition slot="main" name="flip" mode="out-in">
      <play-window
        class="box"
        :currentQuestion="currentQuestion"
        :loading="submitAnswerLoading"
        :key="currentRound"
        @submit="submitAnswer">
      </play-window>
    </transition>
    <questions-window
      slot="side"
      :questions="questions.slice().reverse()">
    </questions-window>
  </PlayLayout>
</template>

<script>
  import QuestionsWindow from '../components/QuestionsBar.vue'
  import PlayWindow from '../components/Game.vue'
  import PlayLayout from './PlayLayout.vue'
  import { mapGetters } from 'vuex'
  import { STATUSES } from '@/common/const'

  export default {
    components: { QuestionsWindow, PlayWindow, PlayLayout },
    loading: ['submitAnswer'],
    methods: {
      submitAnswer (number) {
        return this.$store.dispatch('quiz/answerQuestion', number)
          .then(() => {
            if (this.status === STATUSES.WON) {
              this.$router.push({name: 'won'})
            }
            if (this.status === STATUSES.LOST) {
              this.$router.push({name: 'lost'})
            }
          })
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

<style>
  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s linear;
  }
  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
