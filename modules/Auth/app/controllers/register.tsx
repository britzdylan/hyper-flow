import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import {
  EmailVerificationPage,
  RegisterPage,
  UserRegisterForm,
} from '#ui/components/project/auth/register'
import {
  emailAndPassword,
  emailAndPasswordStrict,
  emailVerification,
} from '#modules/Auth/app/validators/auth'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import InvalidUrl from '#pages/invalidUrl'
import ModuleController from '#modules/index'
import SubscriptionController from '#modules/Billing/app/controllers/Subscription'

// TODO [testing]

interface createUserQueryParams {
  pid?: string
}

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
            error.messages.map((item: any) => (item.field === 'email' ? item.message : undefined)),
          password: () =>
            error.messages.map((item: any) =>
              item.field === 'password' ? item.message : undefined
            ),
          passwordConfirmed: () =>
            error.messages.map((item: any) =>
              item.field === 'password_confirmation' ? item.message : undefined
            ),
        }}
      />
    )
  }

  private async withNewSubscription({ response, request }: HttpContext, user: User) {
    try {
      let checkout = await new SubscriptionController().generateCheckoutUrl({
        user,
        pid: request.qs().pid,
      })
      this.emitEvent('Auth', 'withNewSubscription', 'event', checkout)

      let url = checkout.data.attributes.url

      return response.header('HX-Redirect', url)
    } catch (error) {
      this.emitEvent('Auth', 'withNewSubscription', 'error', error)

      let title = 'Sorry something went wrong during checkout',
        desc = 'This matter has been reported and we will contact you within 48 hours.'
      return response.header('HX-Redirect', `/505?title=${title}&desc=${desc}`)
    }
  }
  /**
   * Renders the registration view.
   */
  public async renderRegisterPage({ jsx, request }: HttpContext) {
    this.emitEvent('Auth', 'renderRegisterPage', 'event', null)
    const qs = request.qs()
    // @ts-ignore
    return await jsx(RegisterPage, {
      data: {
        formUrl: router
          .builder()
          .qs({
            ...qs,
          })
          .make(`${AuthConfig.routeIdPrefix}createUser`),
        formData: {
          email: '',
        },
      },
    })
  }

  /**
   * Validates user data and creates a new user.
   */

  public async createUser(ctx: HttpContext): Promise<string | void> {
    const { request, response, session, auth } = ctx
    const data = request.all()
    const { pid } = request.qs() as createUserQueryParams
    let userData

    try {
      userData = AuthConfig.strict
        ? await emailAndPasswordStrict.validate(data)
        : await emailAndPassword.validate(data)
    } catch (error) {
      console.log(error.messages)
      this.emitEvent('Auth', 'createUser', 'error', error)

      return await this.renderRegisterForm(data, error)
    }
    let user
    try {
      user = await User.create(userData)
    } catch (error) {
      let toastMsg = this.getErrorToastMessage(error)
      console.log(error)
      response.header('HX-Reswap', 'none')
      const msg = {
        title: 'Oops something went wrong',
        desc: toastMsg,
      }
      response.header('HX-Trigger', `{"showToast":${JSON.stringify(msg)}}`)

      return
    }
    this.emitEvent('Auth', 'createUser', 'event', { user, token: user.emailVerificationToken })

    if (pid) {
      await this.withNewSubscription(ctx, user)
      return
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

    const user = await User.findByOrFail('emailVerificationToken', token)

    const verified = user.verifyEmail(token)

    if (!verified) {
      this.emitEvent('Auth', 'verifyUserEmail', 'error', user)

      return await jsx(InvalidUrl, {
        //move to local view
        data: {},
      })
    }
    await user.save()
    this.emitEvent('Auth', 'verifyUserEmail', 'event', user)

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
    this.emitEvent('Auth', 'renderEmailVerificationPage', 'event', null)

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
      this.emitEvent('Auth', 'requestEmailVerification', 'error', 'User is already verified')
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
    this.emitEvent('Auth', 'requestEmailVerification', 'event', {
      user,
      token: user.emailVerificationToken,
    })
    this.showFlashMessage(
      session,
      'requestEmailVerification',
      'success',
      'UserEmailVerificationResent'
    )

    return
  }
}
