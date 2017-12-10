<template functional>
  <div class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <slot name="title">
        </slot>
      </div>
    </div>
    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile box">
          <slot name="content">
          </slot>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <slot name="sidebar"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
