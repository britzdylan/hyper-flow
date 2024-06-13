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
  // alert(evt.detail.value)
  let toast = document.getElementById('toast')
  let title = document.getElementById('toastTitle')
  let desc = document.getElementById('toastDescription')
  title.innerText = evt.detail.title
  desc.innerText = evt.detail.desc
  toast.classList.remove('hideToast')

  // Set a timeout to add the class back after 5 seconds
  setTimeout(() => {
    toast.classList.add('hideToast')
  }, 5000) // 5000 milliseconds = 5 seconds
})

document.addEventListener('showError', (evt) => {
  // alert(evt.detail.value)
  let toast = document.getElementById('error')
  let title = document.getElementById('errorTitle')
  let desc = document.getElementById('errorDescription')
  title.innerText = evt.detail.title
  desc.innerText = evt.detail.desc
  toast.classList.remove('hideToast')

  // Set a timeout to add the class back after 5 seconds
  setTimeout(() => {
    toast.classList.add('hideToast')
  }, 5000) // 5000 milliseconds = 5 seconds
})

console.log('Log from JS entrypoint')
