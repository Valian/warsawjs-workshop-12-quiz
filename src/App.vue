<template>
  <div class="c-main-container container is-widescreen">
    <div class="columns">
      <div class="column is-offset-4 is-4 box has-text-centered">
        <h1 class="title">Who Wants To Be a Milionaire?</h1>
        <div>
          <img src="/static/logo.png">
        </div>
        <button class="button is-fullwidth">PLAY</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import 'assets/vendor';
  @import 'assets/common';

  html, body {
    height: 100%;
    overflow: auto;
  }
  body {
    background-image: url('/static/money-dark-optimized.png');
    background-size: cover;
  }
  .c-main-container {
    padding: 20px;
  }

  // for transitions

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
