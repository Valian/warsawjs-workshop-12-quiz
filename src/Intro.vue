<template>
  <div>
    <h1 class="title">Who Wants To Be a Milionaire?</h1>
    <div class="columns">
      <div class="column">
        <router-link :to="{name: 'game'}">PLAY</router-link>
      </div>
      <div class="column">
        <router-link :to="{name: 'admin'}">ADMIN</router-link>
      </div>
    </div>
  </div>
</template>
