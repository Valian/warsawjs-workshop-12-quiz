<template>
  <div class="c-main-container container is-widescreen o-vertical-fill">
    <router-view class="o-vertical-fill__item o-vertical-fill__item--flex">

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
  @import '../assets/common';

  html, body {
    height: 100%;
    overflow: auto;
  }
  body {
    background-image: url('/static/money-light.jpeg');
  }
  .c-main-container {
    padding: 20px;
    min-height: 700px;

    display: flex;
    flex-direction: column;
  }
</style>
