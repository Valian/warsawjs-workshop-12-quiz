<template>
  <div class="container is-widescreen c-main-container">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import '../assets/vendor';
  html, body {
    height: 100%;
    overflow: auto;
  }
  body {
    background-image: url('/static/money-light.jpeg');
  }
  .c-main-container {
    padding: 20px;
  }
</style>
