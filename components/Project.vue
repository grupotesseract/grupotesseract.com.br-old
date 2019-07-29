<template>
  <v-layout row wrap class="project">
    <v-flex ref="image" xs12 md7>
      <div v-if="!is_data_fetched" class="image"></div>
      <v-parallax
        v-if="is_data_fetched"
        :alt="project.imageAlt"
        :height="image.y"
        :src="imageUrl"
      ></v-parallax>
    </v-flex>
    <v-flex xs12 md5 class="projectInfo">
      <v-layout align-start justify-space-between column fill-height>
        <div style="width: 100%;">
          <div class="title">
            <h3
              v-waypoint="{
                active: true,
                callback: title,
                options: intersectionOptions
              }"
              class="topTitle"
            >
              {{ project.topTitle }}
            </h3>
          </div>
          <div class="title">
            <h3
              v-waypoint="{
                active: true,
                callback: title,
                options: intersectionOptions
              }"
              class="bottomTitle"
            >
              {{ project.bottomTitle }}
            </h3>
          </div>
        </div>

        <div class="technology">
          <p
            v-for="(technology, technologyIndex) in project.technologys"
            :key="technologyIndex"
          >
            {{ technology }}
          </p>
        </div>

        <p>
          <a :href="project.urlInfo" target="_blank">
            {{ project.urlInfo }}
          </a>
        </p>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      windowSize: {
        x: null
      },
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      },
      imageUrl: null,
      image: {
        h: null,
        w: null
      },
      is_data_fetched: false
    }
  },
  computed: {
    project() {
      return this.$store.state.projectGallery.projects[this.index]
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.windowSize.x = window.innerWidth
    }

    this.image.y = this.$refs.image.clientHeight
    this.image.x = this.$refs.image.clientWidth

    this.imageUrl =
      'https://res.cloudinary.com/tesseract/image/upload/c_fill,g_north,h_' +
      (this.image.y + 130) +
      ',w_' +
      this.image.x +
      this.project.imageUrl

    this.is_data_fetched = true
  },
  methods: {
    title({ el, going, direction }) {
      el.classList.toggle('titleActive', this.$waypointMap.GOING_IN === going)
    }
  }
}
</script>

<style lang="stylus" scoped>
.projectTitle {
  position: absolute;
  margin: 1rem 0rem;
  color: $white-1;
  left: 2rem;
  opacity: 0;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @media (min-width: 960px) {
    left: 0rem;
  }
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

  .title {
    position: relative;
    height: 4rem;
    width: 100%;

    @media (max-width: 959px) {
      height: 5rem;
    }

    .topTitle {
      @extends .projectTitle;

      @media (max-width: 959px) {
        margin-top: 2rem;
      }

      @media (min-width: 960px) {
        margin-top: 1rem;
      }
    }

    .bottomTitle {
      @extends .projectTitle;

      animation-delay: 0.3s;
    }
  }

  .image {
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

.titleActive {
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
