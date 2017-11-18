<template>
  <div class="c-slider has-text-centered">
    <input
      type="range"
      min="0"
      max="2"
      class="c-slider__input"
      :value="sliderValue"
      @input="$emit('change', valueToDifficulty($event.target.value))">
    {{ difficulty }}
  </div>
</template>

<script>
  import { DIFFICULTY_LEVELS } from '@/common/const'

  const LEVELS = [
    DIFFICULTY_LEVELS.EASY,
    DIFFICULTY_LEVELS.MEDIUM,
    DIFFICULTY_LEVELS.HARD
  ]

  export default {
    model: {
      prop: 'difficulty',
      event: 'change'
    },
    props: {
      difficulty: {
        type: String,
        required: true,
        validator: value => DIFFICULTY_LEVELS[value.toUpperCase()]
      }
    },
    methods: {
      valueToDifficulty (value) {
        return LEVELS[value]
      },
      difficultyToLevel (value) {
        return LEVELS.indexOf(value)
      }
    },
    computed: {
      sliderValue () {
        return this.difficultyToLevel(this.difficulty)
      }
    }
  }
</script>

<style lang="scss">
  .c-slider {

    &__input {
      width: 100%;
      height: 5px;
      background: linear-gradient(to right, green, yellow, red);;
      outline: none;
      opacity: 0.7;
      transition: opacity .2s;
      -webkit-transition: .2s;
      -webkit-appearance: none;

      &:hover {
        opacity: 1;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        border-radius: 15px;
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
      }
    }
  }
</style>
