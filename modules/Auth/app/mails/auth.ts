import { AuthConfig } from '#modules/config'
import env from '#start/env'
import { ResetPasswordRequestEmail } from '#ui/emails/transactional'
import router from '@adonisjs/core/services/router'
import { BaseMail } from '@adonisjs/mail'

interface IPasswordResetRequest {
  to: string
  token: string
}

export class PasswordResetRequest extends BaseMail {
  to = ''
  token = ''
  subject = 'Your password reset request'

  constructor({ to, token }: IPasswordResetRequest) {
    super()
    this.to = to
    this.token = token
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  async prepare() {
    const appUrl = env.get('APP_URL')
    const appName = env.get('APP_NAME')
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

// export class WelcomeVerifyEmail extends BaseMail {
//   to = ''
//   action = ''
//   subject = 'Welcome to Hyper Flow, please verify your email.'

//   constructor({ to, action }: IVerifyEmail) {
//     super()
//     this.to = to
//     this.action = action
//   }

//   /**
//    * The "prepare" method is called automatically when
//    * the email is sent or queued.
//    */
//   prepare() {
//     this.message.to(this.to)
//     this.message.htmlView('mail/notify_template', {
//       title: this.subject,
//       description:
//         'In order for us to finish setting up your account please verify your email, this is only to ensure not only yours but our privacy.',
//       action: this.action,
//     })
//   }
// }
