<template>
  <v-layout class="welcome">
    <!-- <v-flex> -->
    <lottie :options="defaultOptions" @animCreated="handleAnimation" />
    <!-- </v-flex> -->
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
  width: 100%;
  min-height: 350px;

  @media (min-width: 600px) and (max-width: 959px) {
    min-height: 550px;
  }

  @media (min-width: 960px) and (max-width: 1263px) {
    min-height: 720px;
  }

  @media (min-width: 1264px) and (max-width: 1903px) {
    min-height: 1100px;
  }

  @media (min-width: 1904px) {
    min-height: 1250px;
  }
}
</style>
