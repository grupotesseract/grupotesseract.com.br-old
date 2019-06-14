<template>
  <v-app>
    <MainMenu></MainMenu>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu,
  },
}
</script>

<style stylus scoped>
.container {
  padding: 0px;
}
</style>
