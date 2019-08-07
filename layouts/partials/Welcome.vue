<template>
  <v-layout class="welcome">
    <v-flex>
      <lottie :options="defaultOptions" @animCreated="handleAnimation" />
    </v-flex>
  </v-layout>
</template>

<script>
import Lottie from '~/components/Lottie.vue'
import animationData from '~/assets/animacao.json'

export default {
  components: {
    lottie: Lottie
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
        loop: false
      }
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    }
  }
}
</script>

<style lang="stylus" scoped>
.welcome {
  min-height: 90vh;

  @media (max-width: 960px) {
    min-height: 40vh;
  }
}
</style>
