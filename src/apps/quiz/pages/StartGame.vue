<template>
  <div>
    <h1 class="title">Rules</h1>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci corporis,
      dolorem maxime non perferendis provident quasi reiciendis reprehenderit voluptatem?
      Delectus, eaque est et exercitationem iusto mollitia non possimus vel?
    </div>
    <div class="has-text-centered">
      <button @click="start" v-if="!startLoading">Start game</button>
      <o-loading v-else></o-loading>
    </div>
  </div>
</template>

<script>
  export default {
    loading: ['start'],
    methods: {
      start () {
        return this.$store.dispatch('quiz/initGame')
          .then(() => this.$router.push({name: 'play'}))
      }
    }
  }
</script>
