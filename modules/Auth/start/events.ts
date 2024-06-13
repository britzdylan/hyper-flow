import emitter from '@adonisjs/core/services/emitter'
import mail from '@adonisjs/mail/services/main'
import {
  PasswordResetRequest,
  ReVerifyEmail,
  WelcomeVerifyEmail,
} from '#modules/Auth/app/mails/auth'
import { AuthConfig } from '#modules/config'

emitter.on('Auth:userRequestPasswordReset:event', function ({ user, token }) {
  mail.send(new PasswordResetRequest({ to: user.email, token }))
})

emitter.on('Auth:requestEmailVerification:event', function ({ user, token }) {
  mail.send(new ReVerifyEmail({ to: user.email, token }))
})

emitter.on('Auth:createUser:event', function ({ user, token }) {
  if (AuthConfig.strict) {
    mail.send(new WelcomeVerifyEmail({ to: user.email, token }))
  }
})
