<template>
  <v-layout class="welcome">
    <v-flex>
      <video
        width="100%"
        autoplay
        src="https://res.cloudinary.com/tesseract/video/upload/v1565186745/SiteTesseract/Video_Tesseract_HOME.mp4"
      ></video>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {}
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
