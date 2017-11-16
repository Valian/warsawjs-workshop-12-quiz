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
  @import './assets/vendor.scss';
  html, body {
    height: 100%;
  }
  body {
    background-image: url('/static/money-light.jpeg');
  }
</style>
