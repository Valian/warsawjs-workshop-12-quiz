<template functional>
  <div class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <div class="has-text-centered">
          <h1 class="title">Currently won: <strong>~~amount~~</strong></h1>
          <h2 class="subtitle">Round ~~current~~ of ~~max~~</h2>
        </div>
      </div>
    </div>
    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile">
          <div class="box">~~Play window~~</div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <div>~~questions window~~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  // styles for animations

  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s linear;
  }
  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
