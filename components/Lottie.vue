<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },

  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: false,
      animationData: this.options.animationData,
      rendererSettings: {
        progressiveLoad: true
      }
    })
    this.anim.addEventListener('DOMLoaded', function(e) {
      lottie.setQuality('low')
      lottie.play()
    })
    this.$emit('animCreated', this.anim)
  }
}
</script>
