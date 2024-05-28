import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { FlashMessages } from '#enum/FlashMessages'
import { PasswordResetRequestPage, PasswordResetPage } from '#modules/Auth/ui/views/password'
import { emailVerification, passwordOnlyStrict } from '#modules/Auth/app/validators/auth'
import PasswordReset from '#models/PasswordReset'
import { PasswordResetForm, PasswordResetRequestForm } from '#modules/Auth/ui/views/password'
import InvalidUrl from '#pages/invalidUrl'

const { actions } = AuthConfig
const { UserPasswordResetRequested, UserPasswordResetSuccess } = FlashMessages

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
    let token, passwordResetRequest
    token = request.param('token')
    passwordResetRequest = await PasswordReset.findByOrFail('token', token)

    if (passwordResetRequest.isExpired()) {
      return jsx(InvalidUrl)
    }

    if (!(await passwordResetRequest.verifyToken(token))) {
      return jsx(InvalidUrl)
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
    let email, user, newRequest
    try {
      email = await emailVerification.validate(request.input('email'))
    } catch (error) {
      if (AuthConfig.actions.userRequestPasswordReset.event) {
        emitter.emit('Auth:userRequestPasswordReset:error', 'Invalid Email')
      }
      return await (
        <PasswordResetRequestForm
          formUrl={router.builder().make(`${AuthConfig.routeIdPrefix}userRequestPasswordReset`)}
          formErrors={{
            email: () =>
              error.messages.map((item: any) => (item.field === 'email' ? item.message : '')),
          }}
        />
      )
    }

    user = await User.findBy('email', email)
    if (user) {
      await PasswordReset.query().where('user_id', user.id).delete()

      newRequest = new PasswordReset()
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
      session.flash('success', [UserPasswordResetRequested])
    }

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
    await auth.use('web').logout()
    return
  }

  public async userUpdatePassword({ request, auth, session, response }: HttpContext) {
    let token, password, passwordReset, user

    token = request.param('token')
    try {
      password = await passwordOnlyStrict.validate(request.input('password'))
    } catch (error) {
      if (AuthConfig.actions.userUpdatePassword.event) {
        emitter.emit('Auth:userUpdatePassword:error', 'Password Verification Failed')
      }
      return await (
        <PasswordResetForm
          formUrl={router.builder().make(`${AuthConfig.routeIdPrefix}userUpdatePassword`)}
          formErrors={{
            password: () =>
              error.messages.map((item: any) => (item.field === 'password' ? item.message : '')),
          }}
        />
      )
    }

    passwordReset = await PasswordReset.findByOrFail('token', token)
    user = await passwordReset.related('user').query().firstOrFail()
    await auth.use('web').logout()

    user.merge({ password: password })
    await user.save()

    if (AuthConfig.actions.userUpdatePassword.event) {
      emitter.emit('Auth:userUpdatePassword', user)
    }

    if (AuthConfig.actions.userUpdatePassword.flash) {
      session.flash('success', [UserPasswordResetSuccess])
    }
    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')
    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )

    return
  }
}
