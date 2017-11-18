<template>
  <div class="c-question-list">
    <div class="columns is-multiline">
      <div class="column is-12" v-for="question in questions">
        <div class="c-question-list__item button is-fullwidth">
          <span v-if="!question.isAnswered">{{ question.reward | currency }}</span>
          <span v-else>Won!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      questions: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .c-question-list {
    &__item {
      &--active {

      }
    }
  }
</style>
