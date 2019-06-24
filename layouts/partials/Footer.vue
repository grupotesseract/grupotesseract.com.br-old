<template>
  <v-layout id="footer" class="footer">
    <v-flex>
      <p>_ Tesseract</p>
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
.footer {
  width: 100%;
  height: 200px;
  background-color: $gray-2;

  p {
    color: $white-1;
  }
}
</style>
