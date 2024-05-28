import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { FlashMessages } from '#enum/FlashMessages'
import { PasswordResetRequestPage, PasswordResetPage } from '#modules/Auth/ui/views/password'
import { emailVerification } from '#modules/Auth/app/validators/auth'

const { actions } = AuthConfig
const { UserPasswordResetRequested } = FlashMessages

export default class PasswordController {
  public async renderForgotPasswordPage({ jsx }: HttpContext) {
    if (actions.renderForgotPasswordPage.event) {
      emitter.emit('Auth:renderForgotPasswordPage', null)
    }
    return jsx(PasswordResetRequestPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}userRequestPasswordReset`),
        formData: {
          email: '',
        },
      },
    })
  }

  public async renderPasswordResetPage({ jsx, request }: HttpContext) {
    const token = request.param('token')
    const passwordResetRequest = await PasswordReset.findByOrFail('token', token)

    if (passwordResetRequest.isExpired()) {
      //
    }

    if (!(await passwordResetRequest.verifyToken(token))) {
      //
    }

    if (actions.renderPasswordResetPage.event) {
      emitter.emit('Auth:renderPasswordResetPage', null)
    }

    return jsx(PasswordResetPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}userUpdatePassword`),
      },
    })
  }

  public async userRequestPasswordReset({ request, auth, session, response }: HttpContext) {
    const { email } = await emailVerification.validate(request.input('email'))

    const user = await User.findBy('email', email)
    if (user) {
      await PasswordReset.query().where('user_id', user.id).delete() //TODO create new model with relationships

      const newRequest = new PasswordReset()
      newRequest.userId = user.id
      await newRequest.generateToken()
      await newRequest.save()
      if (actions.userRequestPasswordReset.event) {
        emitter.emit('Auth:userRequestPasswordReset', user)
      }
    } else {
      if (actions.userRequestPasswordReset.event) {
        emitter.emit('Auth:userRequestPasswordReset:error', 'User not found')
      }
    }
    if (actions.userRequestPasswordReset.flash) {
      session.flash({
        success: [UserPasswordResetRequested],
      })
    }

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
    await auth.use('web').logout()
    return
  }

  public async userUpdatePassword({}: HttpContext) {
    const token = request.param('token')
    const { password } = await request.validate(PasswordValidator)
    const passwordReset = await PasswordReset.findByOrFail('token', token)
    const user = await passwordReset.related('user').query().firstOrFail()
    await auth.logout()

    user.merge({ password: password })
    await user.save()

    Event.emit('user:resetPassword', { user, passwordReset })

    session.flash({
      success: [PasswordResetSuccess],
    })

    return response.redirect().toRoute('login.create')
  }
}
