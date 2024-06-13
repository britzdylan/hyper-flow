import { HttpContext } from '@adonisjs/core/http'
import { AuthConfig } from '#modules/config'
import {
  PasswordResetForm,
  PasswordResetRequestForm,
  PasswordResetRequestPage,
  PasswordResetPage,
} from '#ui/components/project/auth/password'
import { emailVerification, passwordOnlyStrict } from '#modules/Auth/app/validators/auth'
import User from '#models/user'
import router from '@adonisjs/core/services/router'
import PasswordReset from '#models/passwordReset'
import InvalidUrl from '#pages/invalidUrl'
import ModuleController from '#modules/index'
import { LoginForm, LoginPage } from '#ui/components/project/auth/authenticate'

export default class PasswordController extends ModuleController {
  public async renderForgotPasswordPage({ jsx }: HttpContext) {
    this.emitEvent('Auth', 'renderForgotPasswordPage', 'event', null)

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
    let passwordResetRequest = await PasswordReset.findByOrFail('token', token)

    if (passwordResetRequest.isExpired() || !(await passwordResetRequest.verifyToken(token))) {
      return jsx(InvalidUrl)
    }
    this.emitEvent('Auth', 'renderPasswordResetPage', 'event', null)

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

  public async userRequestPasswordReset({ request, auth, response }: HttpContext) {
    let formData, user
    try {
      formData = await emailVerification.validate(request.all())
    } catch (error) {
      this.emitEvent('Auth', 'userRequestPasswordReset', 'error', 'Invalid Email')

      return this.renderPasswordResetRequestForm(error)
    }

    user = await User.findBy('email', formData.email)
    if (user) {
      await PasswordReset.query().where('user_id', user.id).delete()

      const newRequest = new PasswordReset()
      newRequest.userId = user.id
      await newRequest.generateToken()
      await newRequest.save()
      this.emitEvent('Auth', 'userRequestPasswordReset', 'event', { user, token: newRequest.token })
    } else {
      this.emitEvent('Auth', 'userRequestPasswordReset', 'error', 'User not found')
    }
    const msg = {
      title: 'Password reset requested',
      desc: 'We have sent you an email with further instructions.',
    }
    response.header('HX-Trigger', `{"showToast":${JSON.stringify(msg)}}`)
    response.header('HX-Reswap', 'none')

    await auth.use('web').logout()
    return
  }

  public async userUpdatePassword({ request, auth, session, response, params }: HttpContext) {
    const { token } = params
    let formData, passwordReset, user

    try {
      formData = await passwordOnlyStrict.validate(request.all())
    } catch (error) {
      this.emitEvent('Auth', 'userUpdatePassword', 'error', 'Password Verification Failed')
      return this.renderPasswordResetForm(error, token)
    }

    passwordReset = await PasswordReset.findByOrFail('token', token)
    user = await passwordReset.related('user').query().firstOrFail()
    await auth.use('web').logout()

    user.merge({ password: formData.password })
    await user.save()
    this.emitEvent('Auth', 'userUpdatePassword', 'event', user)
    this.showFlashMessage(session, 'userUpdatePassword', 'success', 'UserPasswordResetSuccess')

    const msg = {
      title: 'Password changed',
      desc: 'You have successfully update your password.',
    }
    response.header('HX-Trigger', `{"showToast":${JSON.stringify(msg)}}`)
    response.header('HX-Retarget', '#page-body')

    response.header(
      'HX-Replace-Url',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
    return (
      <LoginPage
        formUrl={router.builder().make(`${AuthConfig.routeIdPrefix}userLogin`)}
        formData={{
          email: user.email,
        }}
      />
    )
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
