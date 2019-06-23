/* eslint-disable */

import Vue from 'vue'

const WindowInstanceMap = new Vue({
  data() {
    return {
      scrollY: 0,
      scrollX: 0,
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', e => {
      window.requestAnimationFrame(() => {
        this.scrollY = window.scrollY
        this.scrollX = window.scrollX
      })
    })
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
})

// Inject plugin as Vue.prototype.$window
export default ({ app }, inject) => {
  inject('window', WindowInstanceMap)
}
