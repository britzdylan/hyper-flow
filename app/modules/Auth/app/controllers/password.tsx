import { HttpContext } from '@adonisjs/core/http'
import { AuthConfig } from '#modules/config'
import { FlashMessages } from '#enum/FlashMessages'
import { PasswordResetRequestPage, PasswordResetPage } from '#modules/Auth/ui/views/password'
import { emailVerification, passwordOnlyStrict } from '#modules/Auth/app/validators/auth'
import { PasswordResetForm, PasswordResetRequestForm } from '#modules/Auth/ui/views/password'
import { Session } from '@adonisjs/session'
import emitter from '@adonisjs/core/services/emitter'
import User from '#models/user'
import router from '@adonisjs/core/services/router'
import PasswordReset from '#models/passwordReset'
import InvalidUrl from '#pages/invalidUrl'

export default class PasswordController {
  public async renderForgotPasswordPage({ jsx }: HttpContext) {
    this.emitAuthEvent('renderForgotPasswordPage', 'event', null)

    // @ts-ignore
    return jsx(PasswordResetRequestPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}userRequestPasswordReset`),
        formData: {
          email: '',
        },
      },
    })
  }

  public async renderPasswordResetPage({ jsx, params }: HttpContext) {
    const { token } = params
    console.log(token)
    let passwordResetRequest = await PasswordReset.findByOrFail('token', token)

    if (passwordResetRequest.isExpired() || !(await passwordResetRequest.verifyToken(token))) {
      return jsx(InvalidUrl)
    }
    this.emitAuthEvent('renderPasswordResetPage', 'event', null)

    // @ts-ignore
    return jsx(PasswordResetPage, {
      data: {
        formUrl: router
          .builder()
          .params([token])
          .make(`${AuthConfig.routeIdPrefix}userUpdatePassword`),
      },
    })
  }

  public async userRequestPasswordReset({ request, auth, session, response }: HttpContext) {
    let formData, user
    try {
      formData = await emailVerification.validate(request.all())
    } catch (error) {
      this.emitAuthEvent('userRequestPasswordReset', 'error', 'Invalid Email')

      return this.renderPasswordResetRequestForm(error)
    }

    user = await User.findBy('email', formData.email)
    if (user) {
      await PasswordReset.query().where('user_id', user.id).delete()

      const newRequest = new PasswordReset()
      newRequest.userId = user.id
      await newRequest.generateToken()
      await newRequest.save()
      this.emitAuthEvent('userRequestPasswordReset', 'event', user)
    } else {
      this.emitAuthEvent('userRequestPasswordReset', 'error', 'User not found')
    }
    this.showFlashMessage(
      session,
      'userRequestPasswordReset',
      'success',
      'UserPasswordResetRequested'
    )

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
    await auth.use('web').logout()
    return
  }

  public async userUpdatePassword({ request, auth, session, response, params }: HttpContext) {
    const { token } = params
    let formData, passwordReset, user

    try {
      formData = await passwordOnlyStrict.validate(request.all())
    } catch (error) {
      this.emitAuthEvent('userUpdatePassword', 'error', 'Password Verification Failed')
      return this.renderPasswordResetForm(error, token)
    }

    passwordReset = await PasswordReset.findByOrFail('token', token)
    user = await passwordReset.related('user').query().firstOrFail()
    await auth.use('web').logout()

    user.merge({ password: formData.password })
    await user.save()
    this.emitAuthEvent('userUpdatePassword', 'event', user)
    this.showFlashMessage(session, 'userUpdatePassword', 'success', 'UserPasswordResetSuccess')

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
  }

  private emitAuthEvent(
    actionName: keyof typeof AuthConfig.actions,
    eventType: 'event' | 'error',
    data: any
  ) {
    const actionConfig = AuthConfig.actions[actionName]

    if (actionConfig && actionConfig.event) {
      const emitString = `Auth:${actionName}:${eventType}`
      // @ts-ignore
      emitter.emit(emitString, data)
    }
  }

  private showFlashMessage(
    session: Session,
    actionName: keyof typeof AuthConfig.actions,
    type: 'success' | 'error',
    msg: keyof typeof FlashMessages
  ) {
    const actionConfig = AuthConfig.actions[actionName]
    const message = FlashMessages[msg]
    if (actionConfig && actionConfig.flash) {
      session.flash(type, [message])
    }
  }

  private renderPasswordResetRequestForm(error: any) {
    return (
      <PasswordResetRequestForm
        formUrl={router.builder().make(`${AuthConfig.routeIdPrefix}userRequestPasswordReset`)}
        formErrors={{
          email: () =>
            error.messages.map((item: any) => (item.field === 'email' ? item.message : '')),
        }}
      />
    )
  }

  private renderPasswordResetForm(error: any, token: string) {
    return (
      <PasswordResetForm
        formUrl={router
          .builder()
          .params([token])
          .make(`${AuthConfig.routeIdPrefix}userUpdatePassword`)}
        formErrors={{
          password: () =>
            error.messages.map((item: any) => (item.field === 'password' ? item.message : '')),
        }}
      />
    )
  }
}
