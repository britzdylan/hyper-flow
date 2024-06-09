import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import anchor from '@alpinejs/anchor'
import '../css/app.css'

import htmx from 'htmx.org'

window.htmx = htmx
window.Alpine = Alpine

Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(anchor)

Alpine.start()

document.addEventListener('showToast', (evt) => {
  alert(evt.detail.value)
})

console.log('Log from JS entrypoint')
