import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import htmx from 'htmx.org'

window.htmx = htmx
window.Alpine = Alpine

Alpine.plugin(collapse)
Alpine.start()

console.log('Log from JS entrypoint')
