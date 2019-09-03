<template>
  <v-container fluid>
    <Welcome />
    <About />
    <ProjectGallery />
    <Contact />
    <Footer />
  </v-container>
</template>

<script>
import Welcome from '~/layouts/partials/Welcome.vue'
import About from '~/layouts/partials/About.vue'
import ProjectGallery from '~/layouts/partials/ProjectGallery.vue'
import Contact from '~/layouts/partials/Contact.vue'
import Footer from '~/layouts/partials/Footer.vue'

export default {
  components: {
    Welcome,
    About,
    ProjectGallery,
    Contact,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.container {
  padding: 0px;
  background-color: $black-1;
}
</style>
