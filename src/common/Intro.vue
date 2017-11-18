<template>
  <div class="o-vertical-fill box has-text-centered">
    <h1 class="title o-vertical-fill__item o-vertical-fill__item--fixed">Who Wants To Be a Milionaire?</h1>
    <div class="columns o-vertical-fill__item">
      <div class="column">
        <router-link :to="{name: 'game'}">PLAY</router-link>
      </div>
      <div class="column">
        <router-link :to="{name: 'settings'}">Settings</router-link>
      </div>
    </div>
  </div>
</template>
