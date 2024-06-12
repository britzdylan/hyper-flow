import emitter from '@adonisjs/core/services/emitter'
import mail from '@adonisjs/mail/services/main'
import { PasswordResetRequest } from '#modules/Auth/app/mails/auth'

emitter.on('Auth:userRequestPasswordReset:event', function ({ user, token }) {
  mail.send(new PasswordResetRequest({ to: user.email, token }))
})

emitter.on('mail:sent', (event) => {
  console.log(event.response)

  console.log(event.mailerName)
  console.log(event.message)
  console.log(event.views)
})

emitter.on('queued:mail:error', (event) => {
  console.log(event.error)
  console.log(event.mailerName)
})
