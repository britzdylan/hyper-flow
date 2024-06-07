import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import {
  EmailVerificationPage,
  RegisterPage,
  UserRegisterForm,
} from '#modules/Auth/templates/register'
import { emailAndPassword, emailVerification } from '#modules/Auth/app/validators/auth'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import InvalidUrl from '#pages/invalidUrl'
import ModuleController from '#modules/index'

// TODO [testing]

/**
 * Controller for registering and verifying users.
 */
export default class RegistersController extends ModuleController {
  private renderRegisterForm(userData: any, error: any) {
    return (
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
  /**
   * Renders the registration view.
   */
  public async renderRegisterPage({ jsx }: HttpContext) {
    this.emitEvent('Auth:renderRegisterPage', 'event', null)

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
      this.emitEvent('Auth:createUser', 'error', error)

      return await this.renderRegisterForm(userData, error)
    }

    const user = await User.create(userData)
    this.emitEvent('Auth:createUser', 'event', user)
    this.showFlashMessage(session, 'createUser', 'success', 'UserRegisterSuccess')

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

    const user = await User.findByOrFail('emailVerificationToken', token)

    const verified = user.verifyEmail(token)

    if (!verified) {
      this.emitEvent('Auth:verifyUserEmail', 'error', user)

      return await jsx(InvalidUrl, {
        //move to local view
        data: {},
      })
    }
    await user.save()
    this.emitEvent('Auth:verifyUserEmail', 'event', user)

    this.showFlashMessage(session, 'verifyUserEmail', 'success', 'UserEmailVerified')

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
    this.emitEvent('Auth:renderEmailVerificationPage', 'event', null)

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
    let user = await User.findByOrFail('email', email)
    if (user.isVerified) {
      this.emitEvent('Auth:requestEmailVerification', 'event', 'User is already verified')
      this.showFlashMessage(
        session,
        'requestEmailVerification',
        'success',
        'UserEmailAlreadyVerified'
      )

      return
    }
    user.generateVerificationToken()
    user = await user.save()
    this.emitEvent('Auth:requestEmailVerification', 'event', user)

    this.showFlashMessage(
      session,
      'requestEmailVerification',
      'success',
      'UserEmailVerificationResent'
    )

    return
  }
}
