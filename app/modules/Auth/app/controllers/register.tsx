import type { HttpContext } from '@adonisjs/core/http'
import UserModule from '../models/user.js'
import { EmailVerificationPage, RegisterPage, UserRegisterForm } from '../../ui/views/register.js'
import emitter from '@adonisjs/core/services/emitter'
import { emailAndPassword, emailVerification } from '../validators/auth.js'
import { AuthConfig } from '../../../config.js'
import router from '@adonisjs/core/services/router'
import InvalidUrl from '#pages/invalidUrl'

// TODO [flashMessages,testing,events]

// const { RegisterSuccess, EmailVerified, EmailAlreadyVerified EmailVerificationResent } = FlashMessage

/**
 * Controller for registering and verifying users.
 */
export default class RegistersController {
  /**
   * Renders the registration view.
   */
  public async renderRegisterPage({ jsx }: HttpContext) {
    if (AuthConfig.actions.renderRegisterPage.event) {
      emitter.emit('Auth:renderRegisterPage', null)
    }
    // @ts-ignore
    return await jsx(RegisterPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}createUser`),
        formData: {
          email: '',
        },
      },
    })
  }

  /**
   * Validates user data and creates a new user.
   */
  public async createUser({
    request,
    response,
    session,
    auth,
  }: HttpContext): Promise<string | void> {
    const data = request.all()
    let userData

    try {
      userData = await emailAndPassword.validate(data)
    } catch (error) {
      if (AuthConfig.actions.createUser.event) {
        emitter.emit('Auth:createUser:error', error)
      }
      return await (
        <UserRegisterForm
          formUrl={router.builder().make(`${AuthConfig.routeIdPrefix}createUser`)}
          formData={{ email: userData?.email ?? '' }}
          formErrors={{
            email: () =>
              error.messages.map((item: any) => (item.field === 'email' ? item.message : '')),
            password: () =>
              error.messages.maSp((item: any) => (item.field === 'password' ? item.message : '')),
          }}
        />
      )
    }

    const user = await UserModule.create(userData)

    if (AuthConfig.actions.createUser.event) {
      emitter.emit('Auth:createUser', user)
    }
    if (AuthConfig.actions.createUser.flash) {
      session.flash('success', ['RegisterSuccess'])
    }
    if (AuthConfig.strict) {
      response.header(
        'HX-Redirect',
        router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
      )
    } else {
      await auth.use().login(user)

      response.header(
        'HX-Redirect',
        router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`)
      )
    }

    return
  }

  /**
   * Verifies a user's email address.
   */
  public async verifyUserEmail({
    request,
    response,
    session,
    jsx,
  }: HttpContext): Promise<string | void> {
    const token = request.params().token

    const user = await UserModule.findByOrFail('emailVerificationToken', token)

    const verified = user.verifyEmail(token)

    if (!verified) {
      if (AuthConfig.actions.verifyUserEmail.event) {
        emitter.emit('Auth:verifyUserEmail:error', user)
      }
      return await jsx(InvalidUrl, {
        //move to local view
        data: {},
      })
    }
    await user.save()
    if (AuthConfig.actions.verifyUserEmail.event) {
      emitter.emit('Auth:verifyUserEmail', user)
    }
    if (AuthConfig.actions.verifyUserEmail.flash) {
      session.flash('success', ['UserEmailVerified'])
    }

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
    return
  }
  /**
   * Render  email verification view.
   */
  public async renderEmailVerificationPage({ jsx }: HttpContext) {
    if (AuthConfig.actions.renderEmailVerificationPage.event) {
      emitter.emit('Auth:renderEmailVerificationPage', null)
    }
    // @ts-ignore
    return await jsx(EmailVerificationPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}requestEmailVerification`),
        formData: {
          email: '',
        },
      },
    })
  }
  /**
   * Resend email verification.
   */
  public async requestEmailVerification({ request, session }: HttpContext): Promise<void> {
    // @ts-ignore
    const email = await request.validateUsing(emailVerification)
    let user = await UserModule.findByOrFail('email', email)
    if (user.isVerified) {
      if (AuthConfig.actions.requestEmailVerification.event) {
        emitter.emit('Auth:requestEmailVerification:verified', 'User is already verified')
      }
      if (AuthConfig.actions.requestEmailVerification.flash) {
        session.flash('success', ['EmailAlreadyVerified'])
      }

      return
    }
    user.generateVerificationToken()
    user = await user.save()
    if (AuthConfig.actions.requestEmailVerification.event) {
      emitter.emit('Auth:requestEmailVerification', user)
    }
    if (AuthConfig.actions.requestEmailVerification.flash) {
      session.flash('success', ['EmailVerificationResent'])
    }

    return
  }
}
