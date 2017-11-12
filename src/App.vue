<template>
  <v-app id="app">
    <v-toolbar color="primary">
      <v-toolbar-title>Taboo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>New game</v-btn>
        <v-btn flat>Random card</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @require '~vuetify/src/stylus/settings/_colors'

  $theme := {
    primary: $red.darken-3
    accent: $red.accent-2
    secondary: $yellow.lighten-1
    info: $blue.lighten-1
    warning: $amber.darken-2
    error: $red.accent-4
    success: $green.lighten-2
  }

  @import '~vuetify/src/stylus/main.styl';
</style>
