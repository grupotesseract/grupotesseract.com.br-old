<template>
  <v-layout class="about" row wrap justify-center>
    <v-flex xs12>
      <div class="topTitleLine" :style="{ width: bottomTitleSize + 'px' }">
        <div v-waypoint="{ active: true, callback: topTitleLine }"></div>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md4 lg3 xl2>
      <h1 v-waypoint="{ active: true, callback: topTitle }" class="topTitle">
        QUEM
      </h1>
      <h2
        ref="bottomTitleRef"
        v-waypoint="{ active: true, callback: bottomTitle }"
        class="bottomTitle"
      >
        SOMOS
      </h2>
    </v-flex>
    <v-flex xs12 sm12 md6 lg5 xl4>
      <p>
        Grupo de prossionais da área de TI que acredita na IMPORTÂNCIA DA
        TRANSPARÊNCIA E DA CULTURA COLABORATIVA em seus processos. Oferecemos
        serviços dos mais variados tipos, como: desenvolvimento de sites,
        aplicativos e soluções de infraestrutura.
      </p>
      <p>Width: {{ window.width }}</p>
      <p>Height: {{ window.height }}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      bottomTitleSize: 0,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    this.handleResize()
  },
  destroyed() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  mounted() {
    if (this.window.width <= 599) {
      this.bottomTitleSize =
        this.$refs.bottomTitleRef.getBoundingClientRect().left + 264
    } else if (this.window.width >= 600 && this.window.width <= 959) {
      this.bottomTitleSize =
        this.$refs.bottomTitleRef.getBoundingClientRect().left + 280
    } else {
      this.bottomTitleSize =
        this.$refs.bottomTitleRef.getBoundingClientRect().left + 248
    }
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    topTitleLine({ el, going, direction }) {
      el.classList.toggle(
        'topTitleLineActive',
        this.$waypointMap.GOING_IN === going
      )
    },
    topTitle({ el, going, direction }) {
      el.classList.toggle(
        'topTitleActive',
        this.$waypointMap.GOING_IN === going
      )
    },
    bottomTitle({ el, going, direction }) {
      el.classList.toggle(
        'bottomTitleActive',
        this.$waypointMap.GOING_IN === going
      )
    },
    handleResize() {
      if (process.client) {
        this.window.width = window.innerWidth
        this.window.height = window.innerHeight
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.about {
  padding-bottom: 8rem;

  .topTitleLine {
    height: 3px;
    margin-bottom: 2rem;

    div {
      width: 0%;
      height: 3px;
      background-color: $blue-1;
    }
  }

  .topTitle {
    opacity: 0;
  }

  .bottomTitle {
    opacity: 0;
  }

  h1, h2, p {
    @media screen and (max-width: 599px) {
      padding: 0 1rem;
    }

    @media (max-width: 959px) and (min-width: 600px) {
      padding: 0 2rem;
    }
  }

  h1, h2 {
    line-height: 1;
    font-weight: 100;
  }

  h1 {
    font-size: 6rem;
    margin-left: 3rem;
    color: $black-1;
    -webkit-text-fill-color: $black-1;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $white-1;
  }

  h2 {
    color: $white-1;
    margin-top: 0rem;
    font-size: 5rem;
  }

  p {
    color: $white-1;
    margin-top: 4rem;

    @media (max-width: 959px) {
      margin-top: 2rem;
    }

    @media (max-width: 959px) and (min-width: 600px) {
      padding-right: 6rem;
    }

    font-size: 1.3rem;
    font-weight: 100;
    line-height: 1.3;
  }
}

.topTitleLineActive {
  animation-name: growLine;
  animation-duration: 2.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes growLine {
    from { width: 0%; }
    to { width: 100%; }
  }
}

.topTitleActive {
  animation-name: slideRight;
  animation-duration: 2.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes slideRight {
    from {
      transform: translate(-80px);
      opacity: 0;
    }
    to {
      transform: translate(none);
      opacity: 1;
    }
  }
}

.bottomTitleActive {
  animation-name: slideLeft;
  animation-duration: 2.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes slideLeft {
    from {
      transform: translate(80px);
      opacity: 0;
    }
    to {
      transform: translate(none);
      opacity: 1;
    }
  }
}
</style>
