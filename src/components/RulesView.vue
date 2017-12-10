<template>
  <div class="box has-text-centered">
    <h1 class="title">Rules</h1>
    <section>
      Answer questions until you win! There will be <strong>~~questions~~</strong> questions.
      Currently selected difficulty is <strong>~~difficulty~~</strong>.
    </section>
    <hr>
    <div class="columns">
      <div class="column">
        <router-link :to="{name: 'play'}" class="button is-fullwidth">
          Start game
        </router-link>
      </div>
      <div class="column">
        <button class="button is-fullwidth">
          Settings
        </button>
      </div>
    </div>
  </div>
</template>
