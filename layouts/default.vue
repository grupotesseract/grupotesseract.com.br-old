<template>
  <v-app>
    <MainMenu />
    <v-content class="pa-0">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu
  }
}
</script>

<style lang="stylus" scoped></style>
