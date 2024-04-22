import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import anchor from '@alpinejs/anchor'

import htmx from 'htmx.org'

window.htmx = htmx
window.Alpine = Alpine

Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(anchor)

const progress = (initValue = 0, endValue = 100, duration = 500) => ({
  init() {
    console.log(initValue, 'initValue')
    this.value = initValue

    this.timer = setTimeout(() => (this.value = endValue), duration)
  },
  timer: null,
  value: 0,
  get progressBar() {
    return `transform: translateX(-${100 - this.value}%);`
  },
  destroy() {
    clearTimeout(this.timer)
  },
})

const progressInterval = (initValue = 0, endValue = 100, delay = 500, step = 10) => ({
  init() {
    console.log(initValue, 'initValue')
    this.value = initValue

    this.timer = setInterval(() => {
      this.value += step
      if (this.value >= endValue) {
        clearInterval(this.timer)
      }
    }, delay)
  },
  timer: null,
  value: 0,
  get progressBar() {
    return `transform: translateX(-${100 - this.value}%);`
  },
  destroy() {
    clearInterval(this.timer)
  },
})

Alpine.data('progress', progress)
Alpine.data('progressInterval', progressInterval)

Alpine.start()

console.log('Log from JS entrypoint')
