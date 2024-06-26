import { AuthConfig } from '#modules/config'
import env from '#start/env'
import { ResetPasswordRequestEmail } from '#ui/emails/transactional'
import router from '@adonisjs/core/services/router'
import { BaseMail } from '@adonisjs/mail'

const appUrl = env.get('APP_URL')
const appName = env.get('APP_NAME')

interface IEmailClassParams {
  to: string
  token: string
}

// TODO: PasswordBeenUpdated
// TODO: login fail attempts
// TODO: new location login
// TODO: magic links
// TODO: welcome email

export class PasswordResetRequest extends BaseMail {
  to = ''
  token = ''
  subject = 'Your password reset request'

  constructor({ to, token }: IEmailClassParams) {
    super()
    this.to = to
    this.token = token
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    const path = router
      .builder()
      .params({ token: this.token })
      .make(`${AuthConfig.routeIdPrefix}renderPasswordResetPage`)
    const finalUrl = appUrl + path

    this.message.to(this.to, appName)
    this.message.html(
      await ResetPasswordRequestEmail({
        title: this.subject,
        description: 'To reset your password please click on the link below.',
        action: finalUrl,
        actionName: 'Reset Password',
        appName,
        appUrl,
      })
    )
  }
}

export class WelcomeVerifyEmail extends BaseMail {
  to = ''
  token = ''
  subject = 'Welcome to Hyper Flow, please verify your email.'

  constructor({ to, token }: IEmailClassParams) {
    super()
    this.to = to
    this.token = token
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    const path = router
      .builder()
      .params({ token: this.token })
      .make(`${AuthConfig.routeIdPrefix}verifyUserEmail`)
    const finalUrl = appUrl + path
    this.message.to(this.to)
    this.message.html(
      await ResetPasswordRequestEmail({
        title: this.subject,
        description: 'For protected privacy please verify your new account.',
        action: finalUrl,
        actionName: 'Verify my account',
        appName,
        appUrl,
      })
    )
  }
}

export class ReVerifyEmail extends BaseMail {
  to = ''
  token = ''
  subject = 'New email verification request'

  constructor({ to, token }: IEmailClassParams) {
    super()
    this.to = to
    this.token = token
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    const path = router
      .builder()
      .params({ token: this.token })
      .make(`${AuthConfig.routeIdPrefix}verifyUserEmail`)
    const finalUrl = appUrl + path
    this.message.to(this.to)
    this.message.html(
      await ResetPasswordRequestEmail({
        title: this.subject,
        description: 'For protected privacy please verify your account.',
        action: finalUrl,
        actionName: 'Verify my account',
        appName,
        appUrl,
      })
    )
  }
}
