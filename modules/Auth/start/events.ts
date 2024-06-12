import emitter from '@adonisjs/core/services/emitter'
import mail from '@adonisjs/mail/services/main'
import { PasswordResetRequest } from '#modules/Auth/app/mails/auth'

emitter.on('Auth:userRequestPasswordReset:event', function ({ user, token }) {
  console.log('Auth:userRequestPasswordReset')
  mail.send(new PasswordResetRequest({ to: user.email, token }))
})
