<template>
  <div class="projects">
    <v-layout row wrap justify-end>
      <v-flex xs12 md10 xl9>
        <div class="titles">
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
            RECENTES
          </h2>
        </div>
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
    <v-layout row wrap class="project">
      <v-flex ref="firstImageRef" xs12 md7>
        <div v-if="!is_data_fetched" class="imageProject"></div>
        <v-parallax
          v-if="is_data_fetched"
          alt="Site do Coletivo Boitatá"
          :height="firstImage.y"
          :src="firstImageAddress"
        ></v-parallax>
      </v-flex>
      <v-flex xs12 md5 class="projectInfo">
        <v-layout align-start justify-space-between column fill-height>
          <div>
            <div class="titles">
              <h3
                v-waypoint="{
                  active: true,
                  callback: titleProject,
                  options: intersectionOptions
                }"
                class="topTitleProject"
              >
                COLETIVO
              </h3>
            </div>
            <div class="titles">
              <h3
                v-waypoint="{
                  active: true,
                  callback: titleProject,
                  options: intersectionOptions
                }"
                class="bottomTitleProject"
              >
                BOITATÁ
              </h3>
            </div>
          </div>

          <div class="technology">
            <p>Website</p>
            <p>Laravel</p>
            <p>Sass</p>
            <p>RESTful API</p>
          </div>

          <p>
            <a href="https://coletivoboitata.com.br/" target="_blank">
              Ver projeto ➜
            </a>
          </p>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowSize: {
        x: 0
      },
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      },
      bottomTitleSize: 0,
      firstImageAddress: null,
      firstImage: {
        h: null,
        w: null
      },
      is_data_fetched: false
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

    this.firstImage.y = this.$refs.firstImageRef.clientHeight
    this.firstImage.x = this.$refs.firstImageRef.clientWidth

    this.firstImageAddress =
      'https://res.cloudinary.com/tesseract/image/upload/c_fill,g_north,h_' +
      (this.firstImage.y + 100) +
      ',w_' +
      this.firstImage.x +
      '/v1563949586/grupo-tesseract/coletivoboitata.png'

    this.bottomTitleSize =
      // this.windowSize.x - this.$refs.bottomTitleRef.getBoundingClientRect().left
      (this.$refs.bottomTitleRef.getBoundingClientRect().right -
        this.$refs.bottomTitleRef.getBoundingClientRect().left) /
        2 +
      this.windowSize.x -
      this.$refs.bottomTitleRef.getBoundingClientRect().right

    this.is_data_fetched = true
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
    },
    titleProject({ el, going, direction }) {
      el.classList.toggle(
        'titleProjectActive',
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

  .titles {
    position: relative;
    height: 6rem;

    @media (max-width: 599px) {
      height: 4rem;
    }

    .topTitle {
      position: absolute;
      margin-top: 1rem;
      margin-bottom: 1rem;
      right: 1rem;
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
      position: absolute;
      margin-top: 1rem;
      margin-bottom: 1rem;
      right: 1rem;
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
  }

  .bottomTitleLine {
    height: 3px;
    margin-top: 0.5rem;
    background-color: $blue-2;
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform-origin: right;
    transform: scaleX(0.01);
  }

  .project {
    margin-top: 4rem;

    @media (min-width: 960px) {
      margin-top: 6rem;
    }

    .projectInfo {
      @media (min-width: 960px) {
        padding-left: 2rem;
      }
    }

    .titles {
      position: relative;
      height: 4rem;

      @media (max-width: 959px) {
        height: 5rem;
      }

      .topTitleProject {
        position: absolute;
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: $white-1;
        opacity: 0;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;

        @media (max-width: 959px) {
          margin-top: 2rem;
        }

        @media (min-width: 960px) {
          margin-top: 1rem;
        }
      }

      .bottomTitleProject {
        position: absolute;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-bottom: 0rem;
        color: $white-1;
        opacity: 0;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
      }
    }

    .imageProject {
      height: 300px;

      @media (min-width: 600px) and (max-width: 1263px) {
        height: 400px;
      }

      @media (min-width: 1264px) and (max-width: 1903px) {
        height: 500px;
      }

      @media (min-width: 1904px) {
        height: 600px;
      }
    }

    .technology {
      @media (max-width: 959px) {
        margin: 2rem 0rem;
      }

      p {
        margin-bottom: 0.5rem;
        &:last-child {
          margin-bottom: 0rem;
        }
      }
    }
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

.titleProjectActive {
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
