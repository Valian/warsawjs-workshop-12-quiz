<template>
  <div class="c-play-window o-vertical-fill" v-if="currentQuestion">
    <div class="c-play-window__question o-vertical-fill__item o-vertical-fill__item">
      <div class="c-play-window__question-title">Question for {{ currentQuestion.reward }}$</div>
      <div class="c-play-window__question-title" v-html="currentQuestion.text"></div>
    </div>
    <div class="c-play-window__answers o-vertical-fill__item o-vertical-fill__item--fixed">
      <div class="columns is-multiline">
        <div
          class="c-play-window__answer column is-half"
          @click="$emit('submit', number)"
          v-for="(answer, number) in currentQuestion.answers">
          <div
            class="button is-fullwidth is-large is-primary"
            :disabled="loading"
            v-html="answer">
          </div>
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
      },
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
