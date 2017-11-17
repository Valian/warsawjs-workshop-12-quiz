<template>
  <div class="c-play-window" v-if="currentQuestion">
    <div class="c-play-window__question">
      <div class="c-play-window__question-title">Question for {{ currentQuestion.reward }}$</div>
      <div class="c-play-window__question-title">"{{ currentQuestion.text }}"</div>
    </div>
    <div class="c-play-window__answers columns is-multiline">
      <div
        class="c-play-window__answer column is-half"
        @click="$emit('submit', number)"
        v-for="(answer, number) in currentQuestion.answers">
        <div class="button is-fullwidth is-large is-primary">
          {{ answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      currentQuestion: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .c-play-window {
    min-height: 500px;
    display: flex;
    flex-direction: column;

    &__question {
      flex: 1 1;
    }

    &__answers {
      flex: 0 0 auto;
    }
  }
</style>
