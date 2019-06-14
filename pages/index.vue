<template>
  <v-layout>
    <v-flex>
      <Welcome></Welcome>
      <AboutUs></AboutUs>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </v-flex>
  </v-layout>
</template>

<script>
import Welcome from '~/layouts/partials/Welcome.vue'
import AboutUs from '~/layouts/partials/AboutUs.vue'
import Projects from '~/layouts/partials/Projects.vue'
import Contact from '~/layouts/partials/Contact.vue'
import Footer from '~/layouts/partials/Footer.vue'

export default {
  components: {
    Welcome,
    AboutUs,
    Projects,
    Contact,
    Footer,
  },
}
</script>

<style stylus></style>
