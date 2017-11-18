<template>
  <div class="c-won-window o-vertical-fill has-text-centered box">
    <h1 class="title o-vertical-fill__item">Congratulations, you won!</h1>
    <h1 class="title o-vertical-fill__item">Your reward: {{ reward }}$</h1>
    <hr>
    <div class="columns">
      <div class="column">
        <start-game-button class="is-fullwidth" label="Restart"></start-game-button>
      </div>
      <div class="column">
        <router-link
          :to="{name: 'game'}"
          class="button is-fullwidth">
          Main menu
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import StartGameButton from '../components/StartGameButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { StartGameButton },
    computed: mapGetters({
      reward: 'quiz/cash'
    })
  }
</script>

<style lang="scss">
  .c-won-window {
  }
</style>
