<template>
  <div class="projects">
    <v-layout row wrap justify-end>
      <v-flex xs12 md10 xl9>
        <h1
          v-waypoint="{
            active: true,
            callback: topTitle,
            options: intersectionOptions
          }"
          class="topTitle"
        >
          PROJETOS
        </h1>
        <h2
          ref="bottomTitleRef"
          v-waypoint="{
            active: true,
            callback: bottomTitle,
            options: intersectionOptions
          }"
          class="bottomTitle"
        >
          RECENTES
        </h2>
      </v-flex>
      <v-flex md2 xl3></v-flex>
    </v-layout>
    <v-layout justify-end>
      <div
        v-waypoint="{
          active: true,
          callback: bottomTitleLine,
          options: intersectionOptions
        }"
        class="bottomTitleLine"
        :style="{ width: bottomTitleSize + 'px' }"
      ></div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      },
      bottomTitleSize: 0,
      windowSize: {
        x: 0
      }
    }
  },
  computed: {
    about() {
      return this.$store.state.about
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.windowSize.x = window.innerWidth
    }
    this.bottomTitleSize =
      this.$refs.bottomTitleRef.getBoundingClientRect().left + 248
  },
  methods: {
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
    bottomTitleLine({ el, going, direction }) {
      el.classList.toggle(
        'bottomTitleLineActive',
        this.$waypointMap.GOING_IN === going
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.projects {
  padding-bottom: 8rem;

  @media (max-width: 959px) {
    padding-bottom: 4rem;
  }

  .topTitle {
    margin-top: 2rem;
    color: $black-1;
    text-align: right;
    -webkit-text-fill-color: $black-1;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $white-1;
    opacity: 0;
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

    @media (max-width: 599px) {
      font-size: 4rem;
    }
  }

  .bottomTitle {
    margin-top: 0rem;
    color: $white-1;
    text-align: right;
    opacity: 0;
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

    @media (max-width: 599px) {
      font-size: 3rem;
    }
  }

  .bottomTitleLine {
    height: 3px;
    background-color: $blue-2;
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform-origin: right;
    transform: scaleX(0.01);
  }
}

.bottomTitleLineActive {
  animation-name: growLeft;

  @keyframes growLeft {
    from {
      transform: scaleX(0.01);
    }
    to {
      transform: scaleX(1);
    }
  }
}

.topTitleActive {
  animation-name: slideRight;

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
