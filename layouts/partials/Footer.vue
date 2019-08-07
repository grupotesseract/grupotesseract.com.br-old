<template>
  <v-layout id="footer" class="footer">
    <v-flex xs12>
      <h3>
        <span>____</span>
        Tesseract
      </h3>
      <v-flex xs12 class="social-nav">
        <a href="https://instagram.com/grupotesseract">
          <fa :icon="fab.faInstagram" class="fa-3x" />
        </a>
        <a href="https://fb.com/grupotesseract">
          <fa :icon="fab.faFacebookSquare" class="fa-3x" />
        </a>
        <a href="https://github.com/grupotesseract">
          <fa :icon="fab.faGithub" class="fa-3x" />
        </a>
        <a href="https://medium.com/grupo-tesseract">
          <fa :icon="fab.faMedium" class="fa-3x" />
        </a>
        <a href="https://www.linkedin.com/company/grupotesseract/">
          <fa :icon="fab.faLinkedin" class="fa-3x" />
        </a>
        <a href="https://wa.me/5514981225509">
          <fa :icon="fab.faWhatsapp" class="fa-3x" />
        </a>
        <a href="mailto:contato@grupotesseract.com.br">
          <span>contato@grupotesseract.com.br</span>
        </a>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  data() {
    return {}
  },
  computed: {
    fab() {
      return fab
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer {
  padding: 5rem 4.2rem ;
  width: 100%;
  height: 280px;
  background-color: $gray-2;

  h3 {
    font-size: 2.7rem;
    span {
      letter-spacing:-7px;
      font-size: 1.8rem;
    }
  }

  p {
    color: $white-1;
  }

  .social-nav {
    padding: 2.5rem;

    a {
      color: white;
      margin: 5px 12px;
      text-decoration: none;

      span {
        font-size:1.5rem;
      }
    }
  }
}
</style>
