<template>
  <div class="c-game o-vertical-fill has-text-centered">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed">
      <div class="c-game__question-title">
        Question for {{ question.reward }}
      </div>
      <div class="c-game__question-difficulty" >
        Difficulty: {{ question.difficulty }}
      </div>
      <div class="c-game__question-category">
        Category: ~~category~~
      </div>
    </div>
    <div class="o-vertical-fill__item c-game__question-text-container">
      <div class="c-game__question-text">
        ~~question~~
      </div>
    </div>
    <div class="c-game__answers o-vertical-fill__item o-vertical-fill__item--fixed">
      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="c-game__answer button is-large is-primary is-fullwidth">
            ~~answer~~
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question']
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
