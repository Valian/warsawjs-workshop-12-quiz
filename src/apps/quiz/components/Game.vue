<template>
  <div class="c-game o-vertical-fill has-text-centered" v-if="currentQuestion">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed">
      <div class="c-game__question-title">
        Question for {{ currentQuestion.reward | currency }}
      </div>
      <div class="c-game__question-difficulty" >
        Difficulty: {{ currentQuestion.difficulty }}
      </div>
      <div class="c-game__question-category"
           v-html="'Category: ' + currentQuestion.category">
      </div>
    </div>
    <div class="o-vertical-fill__item c-game__question-text-container">
      <div class="c-game__question-text" v-html="currentQuestion.text"></div>
    </div>
    <div class="c-game__answers o-vertical-fill__item o-vertical-fill__item--fixed">
      <div class="columns is-multiline">
        <div
          class="column is-half"
          @click="$emit('submit', number)"
          v-for="(answer, number) in currentQuestion.answers">
          <div
            class="c-game__answer button is-large is-primary is-fullwidth"
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

<style lang="scss">
  .c-game {
    &__question-title {
      font-size: 1.3em;
    }

    &__question-text {
      width: 100%;
      font-size: 1.8em;
      color: hsl(48,  100%, 67%);
    }

    &__question-text-container {
      display: flex;
      align-items: center;
      min-height: 300px;
    }
  }
</style>
