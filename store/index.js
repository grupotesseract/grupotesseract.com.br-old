/* eslint-disable */

export const state = () => ({
  windowSize: {
    x: 0,
    y: 0
  }
})

export const mutations = {
  onResize(state) {
    state.windowSize = { x: window.innerWidth, y: window.innerHeight }
  }
}
