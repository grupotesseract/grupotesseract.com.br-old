<template>
  <div class="about">
    <div
      v-waypoint="{
        active: true,
        callback: topTitleLine,
        options: intersectionOptions
      }"
      :style="{ width: bottomTitleSize + 'px' }"
      class="topTitleLine"
    ></div>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md4 lg3 xl2>
        <div class="titles">
          <h1
            v-waypoint="{
              active: true,
              callback: topTitle,
              options: intersectionOptions
            }"
            class="topTitle"
          >
            <p class="text">{{ about.topTitle }}</p>
          </h1>
        </div>
        <div class="titles">
          <h2
            ref="bottomTitleRef"
            v-waypoint="{
              active: true,
              callback: bottomTitle,
              options: intersectionOptions
            }"
            class="bottomTitle"
          >
            <p class="text">{{ about.bottomTitle }}</p>
          </h2>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg5 xl4>
        <p class="text">{{ about.text }}</p>
      </v-flex>
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
    this.bottomTitleSize = this.$refs.bottomTitleRef.getBoundingClientRect().right
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
    topTitleLine({ el, going, direction }) {
      el.classList.toggle(
        'topTitleLineActive',
        this.$waypointMap.GOING_IN === going
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.about {
  padding-bottom: 8rem;

  @media (max-width: 959px) {
    padding-bottom: 4rem;
  }

  .topTitleLine {
    height: 3px;
    background-color: $blue-2;
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform-origin: left;
    transform: scaleX(0.01);
  }

  .titles {
    position: relative;
    height: 5rem;

    @media (min-width: 600px) {
      height: 6rem;
    }

    .topTitle {
      position: absolute;
      margin-top: 1rem;
      margin-bottom: 1rem;
      right: 2rem;
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
        font-size: 5rem;
      }

      @media (max-width: 959px) {
        right: auto;
        left: 3rem;
        text-align: left;
      }
    }

    .bottomTitle {
      position: absolute;
      margin-top: 1rem;
      margin-bottom: 1rem;
      right: 5rem;
      color: $white-1;
      text-align: right;
      opacity: 0;
      animation-duration: 2.5s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;

      @media (max-width: 599px) {
        font-size: 4rem;
      }

      @media (max-width: 959px) {
        right: auto;
        text-align: left;
      }
    }
  }

  .text {
    margin-top: 6rem;

    @media (max-width: 959px) {
      margin-top: 2rem;
    }

    @media (max-width: 959px) and (min-width: 600px) {
      padding-right: 6rem;
    }
  }
}

.topTitleLineActive {
  animation-name: growRight;

  @keyframes growRight {
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
