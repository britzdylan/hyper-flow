import emitter from '@adonisjs/core/services/emitter'

emitter.on('user:registered', function (user) {
  console.log(user.email, 'user:registered')
})

emitter.on('user:register', function (user) {
  console.log(user.email, 'user:register')
})
