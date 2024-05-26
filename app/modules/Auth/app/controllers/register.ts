import type { HttpContext } from '@adonisjs/core/http'
import UserModule from '../models/user.js'
import registerPage from '../../ui/pages/register.js'
import EmailVerificationPage from '../../ui/pages/register.js'
import emitter from '@adonisjs/core/services/emitter'
import { emailAndPassword, emailVerification } from '../validators/auth.js'
import { AuthConfig } from '../../../config.js'

// const { RegisterSuccess, EmailVerified, EmailAlreadyVerified EmailVerificationResent } = FlashMessage

/**
 * Controller for registering and verifying users.
 */
export default class RegistersController {
  /**
   * Renders the registration view.
   */
  public async getRegisterPage({ jsx }: HttpContext) {
    return await jsx(registerPage, {
      data: {},
    })
  }

  /**
   * Validates user data and creates a new user.
   */
  public async postUserEmailPassword({
    request,
    response,
    session,
    auth,
  }: HttpContext): Promise<void> {
    // @ts-ignore
    const userData = await request.validateUsing(emailAndPassword)

    const user = await UserModule.create(userData)

    await user.save()
    if (AuthConfig.actions.postUserEmailPassword.event) {
      emitter.emit('user:registerEmailPassword', user) // ['sendUserEmailVerification']
    }
    if (AuthConfig.actions.postUserEmailPassword.flash) {
      session.flash('success', ['RegisterSuccess'])
    }
    if (AuthConfig.strict) {
      return response.redirect().toRoute(`${AuthConfig.routeIdPrefix}viewLoginPage`)
    }

    await auth.use().login(user)
    return response.redirect().toRoute(`${AuthConfig.routeIdPrefix}viewUserDashboard`)
  }

  /**
   * Verifies a user's email address.
   */
  public async getUserEmailWithToken({ request, response, session }: HttpContext): Promise<void> {
    const token = request.params().token
    const user = await UserModule.findByOrFail('emailVerificationToken', token) // new dependency for the user model fields

    const verified = user.verifyEmail(token)
    if (!verified) {
      return response.status(403).badRequest()
    }
    await user.save()
    if (AuthConfig.actions.getUserEmailWithToken.flash) {
      session.flash('success', ['UserEmailVerified'])
    }
    return response.redirect().toRoute(`${AuthConfig.routeIdPrefix}loginPage`)
  }
  /**
   * Render  email verification view.
   */
  public async getEmailVerificationPage({ jsx }: HttpContext) {
    return await jsx(EmailVerificationPage, {
      data: {},
    })
  }
  /**
   * Resend email verification.
   */
  public async postUserVerificationToken({
    request,
    response,
    session,
  }: HttpContext): Promise<void> {
    // @ts-ignore
    const email = await request.validateUsing(emailVerification)
    const user = await UserModule.findByOrFail('email', email)
    if (user.isVerified) {
      if (AuthConfig.actions.postUserVerificationToken.flash) {
        session.flash('success', ['EmailAlreadyVerified'])
      }
      return response.redirect().back()
    }
    user.generateVerificationToken()
    await user.save()
    // emitter.emit('mail:sendEmailVerification', user)
    session.flash('success', ['EmailVerificationResent'])
    return response.redirect().back()
  }
}
