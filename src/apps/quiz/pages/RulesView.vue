<template>
  <div class="box has-text-centered">
    <h1 class="title">Rules</h1>
    <section>
      Answer questions until you win! There will be <strong>{{ questions }}</strong> questions.
      Currently selected difficulty is <strong>{{ difficulty }}</strong>.
    </section>
    <hr>
    <div class="columns">
      <div class="column">
        <start-game-button class="is-fullwidth"></start-game-button>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{name: 'settings'}">Settings</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import StartGameButton from '../components/StartGameButton.vue'
  export default {
    components: { StartGameButton },
    computed: mapGetters({
      difficulty: 'settings/difficulty',
      questions: 'settings/numberOfQuestions'
    })
  }
</script>
