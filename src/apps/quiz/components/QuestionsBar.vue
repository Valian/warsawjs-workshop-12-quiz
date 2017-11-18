<template>
  <div class="c-question-list">
    <div class="columns is-multiline">
      <div class="column is-12" v-for="question in questions">
        <transition name="flip" mode="out-in">
          <div
            class="c-question-list__item button is-fullwidth"
            :key="question.isAnswered"
            :class="{'is-success': question.isAnswered}">
            <span v-if="!question.isAnswered">{{ question.reward | currency }}</span>
            <span v-else>Claimed!</span>
          </div>
        </transition>
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
      color: hsl(48,  100%, 67%);
    }
  }
</style>
