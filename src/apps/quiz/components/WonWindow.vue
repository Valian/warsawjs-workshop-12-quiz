<template>
  <div class="has-text-centered">
    <h1 class="title">Congratulations, you won!</h1>
    <h1 class="title">Your reward: {{ reward }}$</h1>
    <button @click="$emit('restart')">
      Try again
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      reward: {
        type: Number,
        required: true
      }
    }
  }
</script>
