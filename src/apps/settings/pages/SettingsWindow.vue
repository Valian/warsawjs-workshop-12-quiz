<template>
  <div class="box">
    <div class="c-settings">
      <h1 class="title has-text-centered">Settings</h1>
      <div class="field">
        <label class="label">Difficulty</label>
        <div class="control">
          <difficulty-slider v-model="newDifficulty"></difficulty-slider>
        </div>
      </div>
      <div class="field">
        <label class="label">Number of questions</label>
        <div class="control">
          <input v-model="newNumberOfQuestions" class="input" type="number">
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button
            class="button is-primary"
            @click="save">
            Save
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
  import DifficultySlider from '../components/DifficultySlider.vue'

  export default {
    components: { DifficultySlider },
    data () {
      return {
        newDifficulty: this.$store.getters['settings/difficulty'],
        newNumberOfQuestions: this.$store.getters['settings/numberOfQuestions']
      }
    },
    methods: {
      save () {
        this.$store.commit('settings/setDifficulty', this.newDifficulty)
        this.$store.commit('settings/setNumberOfQuestions', this.newNumberOfQuestions)
        this.$router.push({name: 'intro'})
      }
    }
  }
</script>

<style lang="scss">
  .c-settings {

  }
</style>
