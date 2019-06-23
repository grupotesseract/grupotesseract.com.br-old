<template>
  <v-app v-resize="onResize">
    <MainMenu />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.$store.commit('onResize')
    }
  }
}
</script>

<style lang="stylus" scoped></style>
