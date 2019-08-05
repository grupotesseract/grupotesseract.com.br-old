<template>
  <v-layout wrap :class="templateClass.project" class="project">
    <v-flex ref="image" xs12 :class="templateClass.image" class="image">
      <div v-if="!is_data_fetched" class="imagePlaceHolder"></div>
      <v-parallax
        v-if="is_data_fetched"
        :alt="project.imageAlt"
        :height="image.y"
        :src="imageUrl"
      ></v-parallax>
    </v-flex>
    <v-flex xs12 :class="templateClass.information" class="information">
      <v-layout
        :class="templateClass.informationLayout"
        class="informationLayout justify-space-between column fill-height"
      >
        <div class="informationTitle" :class="templateClass.informationTitle">
          <div>
            <h3
              v-if="templateClass.informationTitleMove"
              v-waypoint="{
                active: true,
                callback: titleLeft,
                options: intersectionOptions
              }"
            >
              {{ project.topTitle }}
            </h3>
            <h3
              v-if="!templateClass.informationTitleMove"
              v-waypoint="{
                active: true,
                callback: titleRight,
                options: intersectionOptions
              }"
            >
              {{ project.topTitle }}
            </h3>
          </div>
          <div>
            <h3
              v-if="templateClass.informationTitleMove"
              v-waypoint="{
                active: true,
                callback: titleLeft,
                options: intersectionOptions
              }"
            >
              {{ project.bottomTitle }}
            </h3>
            <h3
              v-if="!templateClass.informationTitleMove"
              v-waypoint="{
                active: true,
                callback: titleRight,
                options: intersectionOptions
              }"
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
          <a :href="project.url" target="_blank">
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
    },
    templateClass() {
      switch (this.project.templateType) {
        case 1:
          return {
            project: ['templateClass' + this.project.templateType],
            image: ['md7'],
            information: ['md5'],
            informationLayout: ['align-start'],
            informationTitleMove: true
          }
        case 2:
          return {
            project: ['templateClass' + this.project.templateType],
            image: ['md6', 'order-md2'],
            information: ['md6'],
            informationLayout: ['align-end'],
            informationTitleMove: false
          }
        default:
          return {
            project: ['templateClass1'],
            image: ['md7'],
            information: ['md5'],
            informationLayout: ['align-start'],
            informationTitleMove: true
          }
      }
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
    titleLeft({ el, going, direction }) {
      el.classList.toggle(
        'titleLeftActive',
        this.$waypointMap.GOING_IN === going
      )
    },
    titleRight({ el, going, direction }) {
      el.classList.toggle(
        'titleRightActive',
        this.$waypointMap.GOING_IN === going
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.projectTitle {
  position: absolute;
  margin: 1rem 0rem;
  color: $white-1;
  opacity: 0;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.project {
  margin-top: 4rem;

  @media (min-width: 960px) {
    margin-top: 6rem;
  }

  .image {
    .imagePlaceHolder {
      height: 300px;

      @media (min-width: 600px) and (max-width: 959px) {
        height: 400px;
      }

      @media (min-width: 960px) and (max-width: 1263px) {
        height: 400px;
      }

      @media (min-width: 1264px) and (max-width: 1903px) {
        height: 500px;
      }

      @media (min-width: 1904px) {
        height: 600px;
      }
    }
  }

  .information {
    .informationTitle {
      width: 100%;

      div {
        position: relative;
        height: 4rem;
        width: 100%;

        @media (max-width: 959px) {
          height: 5rem;
        }

        h3 {
          @extends .projectTitle;
        }

        &:first-child {
          h3 {
            @media (max-width: 959px) {
              margin-top: 2rem;
            }

            @media (min-width: 960px) {
              margin-top: 1rem;
            }
          }
        }

        &:last-child {
          h3 {
            animation-delay: 0.3s;
          }
        }
      }
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

.templateClass1 {
  .information {
    @media (min-width: 960px) {
      padding-left: 2rem;
    }

    .informationTitle {
      div {
        h3 {
          @extends .projectTitle;

          left: 2rem;

          @media (min-width: 960px) {
            left: 0rem;
          }
        }
      }
    }
  }
}

.templateClass2 {
  .information {
    @media (min-width: 960px) {
      padding-right: 2rem;
    }

    .informationTitle {
      div {
        h3 {
          @extends .projectTitle;

          right: 2rem;

          @media (min-width: 960px) {
            right: 0rem;
          }
        }
      }
    }
  }
}

.templateClass3 {
  .image {
    .imagePlaceHolder {
      height: 300px;

      @media (min-width: 600px) and (max-width: 959px) {
        height: 400px;
      }

      @media (min-width: 960px) and (max-width: 1263px) {
        height: 400px;
      }

      @media (min-width: 1264px) and (max-width: 1903px) {
        height: 500px;
      }

      @media (min-width: 1904px) {
        height: 600px;
      }
    }
  }

  .information {
    @media (min-width: 960px) {
      padding-left: 2rem;
    }

    .informationTitle {
      div {
        h3 {
          @extends .projectTitle;

          left: 2rem;

          @media (min-width: 960px) {
            left: 0rem;
          }
        }
      }
    }
  }
}

.titleLeftActive {
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

.titleRightActive {
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
</style>
