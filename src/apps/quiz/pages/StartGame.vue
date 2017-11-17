<template>
  <div class="o-vertical-fill box has-text-centered">
    <h1 class="o-vertical-fill__item title">Rules</h1>
    <div class="o-vertical-fill__item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci corporis,
      dolorem maxime non perferendis provident quasi reiciendis reprehenderit voluptatem?
      Delectus, eaque est et exercitationem iusto mollitia non possimus vel?
    </div>
    <start-game-button class="o-vertical-fill__item"></start-game-button>
  </div>
</template>

<script>
  import StartGameButton from '../components/StartGameButton.vue'
  export default {
    components: { StartGameButton }
  }
</script>
