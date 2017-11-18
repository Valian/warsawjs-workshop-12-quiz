<template>
  <o-loading :loading="tryAgainLoading">
    <button @click="tryAgain">
      {{ label }}
    </button>
  </o-loading>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Start game'
      }
    },
    loading: ['tryAgain'],
    methods: {
      tryAgain () {
        return this.$store.dispatch('quiz/initGame')
          .then(() => this.$router.push({name: 'play'}))
      }
    }
  }
</script>
