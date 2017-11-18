<template>
  <div class="columns">
    <transition name="fade" mode="out-in">
      <router-view class="column is-4 is-offset-4"></router-view>
    </transition>
  </div>
</template>
