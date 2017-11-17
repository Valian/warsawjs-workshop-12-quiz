<template functional>
  <div class="tile is-vertical is-ancestor">
    <div class="tile is-parent">
      <div class="is-child tile box">
        <slot name="title" class=""></slot>
      </div>
    </div>
    <div class="tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile box">
          <slot name="main"></slot>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <slot name="side"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
