<template>
  <v-layout class="welcome">
    <v-flex>
      <!-- <div v-if="!is_data_fetched"></div> -->
      <video
        ref="media"
        width="100%"
        src="https://res.cloudinary.com/tesseract/video/upload/v1565186745/SiteTesseract/Video_Tesseract_HOME.mp4"
      ></video>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$refs.media.play()
  }
}
</script>

<style lang="stylus" scoped>
.welcome {
  width: 100%;

  p {
    color: $white-1;
  }
}
</style>
