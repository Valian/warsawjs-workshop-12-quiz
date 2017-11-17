<template>
  <o-loading v-if="tryAgainLoading"></o-loading>
  <button v-else @click="tryAgain">
    {{ label }}
  </button>
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
