<template>
  <v-layout id="footer" class="footer">
    <v-flex xs12>
      <h3>
        <span>____</span>
        Tesseract
      </h3>
      <v-flex xs12 class="social-nav">
        <a target="blank" href="https://instagram.com/grupotesseract">
          <fa :icon="fab.faInstagram" class="fa-2x" />
        </a>
        <a target="blank" href="https://fb.com/grupotesseract">
          <fa :icon="fab.faFacebookSquare" class="fa-2x" />
        </a>
        <a target="blank" href="https://github.com/grupotesseract">
          <fa :icon="fab.faGithub" class="fa-2x" />
        </a>
        <a target="blank" href="https://medium.com/grupo-tesseract">
          <fa :icon="fab.faMedium" class="fa-2x" />
        </a>
        <a target="blank" href="https://linkedin.com/company/grupotesseract">
          <fa :icon="fab.faLinkedin" class="fa-2x" />
        </a>
        <a target="blank" href="https://wa.me/5514981225509">
          <fa :icon="fab.faWhatsapp" class="fa-2x" />
        </a>
        <a
          class="mailto_link"
          target="_blank"
          href="mailto:contato@grupotesseract.com.br"
        >
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
  padding: 1rem;
  text-align: center;
  height: 280px;

  @media (min-width: 960px) {
    text-align:left;
    padding: 4.5rem 3.5rem;
    height: 210px;
  }

  width: 100%;
  background-color: $gray-2;

  h3 {
    font-size: 2.7rem;
    @media (max-width: 960px) {
      margin-bottom:2rem;
    }
    span {
      letter-spacing:-7px;
      font-size: 1.8rem;
    }
  }

  p {
    color: $white-1;
  }

  .social-nav {
    padding: 1rem;
    @media (max-width: 960px) {
      padding: 0rem;
    }

    .mailto_link {
      width: 100%;

      @media (max-width: 960px) {
        margin-top:3rem;
        display:block;

      }
    }

    @media (min-width: 960px) {
      padding: 2.5rem;
      margin-top: none;
    }

    a {
      color: white;
      margin: 5px 12px;
      text-decoration: none;

      span {
        font-size:1.5rem;

        @media (max-width: 960px) {
          font-size:1.2rem;
        }
      }
    }
  }
}
</style>
