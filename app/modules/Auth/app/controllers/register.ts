import type { HttpContext } from '@adonisjs/core/http'
import UserModule from '../models/user.js'
import registerPage from '../../ui/pages/register.js'
import EmailVerificationPage from '../../ui/pages/register.js'
import emitter from '@adonisjs/core/services/emitter'
import { emailAndPassword, emailVerification } from '../validators/auth.js'
import { AuthConfig } from '../../../config.js'

// import RegisterValidator from 'App/Validators/Auth/RegisterValidator'
// import flowConfig from 'Config/flow'
// import FlashMessage from 'App/Enums/FlashMessage'
// import Route from '@ioc:Adonis/Core/Route'
// import EmailVerificationValidator from 'App/Validators/Auth/EmailVerificationValidator'

// const { register, verification } = flowConfig.views
// const { RegisterSuccess, EmailVerified, EmailAlreadyVerified EmailVerificationResent } = FlashMessage

/**
 * Controller for registering and verifying users.
 */
export default class RegistersController {
  /**
   * Renders the registration view.
   */
  public async viewRegisterPage({ jsx }: HttpContext) {
    return await jsx(registerPage, {
      data: {},
    })
  }

  /**
   * Validates user data and creates a new user.
   */
  public async registerUserWithEmailPassword({
    request,
    response,
    session,
    auth,
  }: HttpContext): Promise<void> {
    // @ts-ignore
    const userData = await request.validateUsing(emailAndPassword)

    const user = await UserModule.create(userData)

    await user.save()
    emitter.emit('user:registerEmailPassword', user) // ['sendUserEmailVerification']
    session.flash('success', ['RegisterSuccess'])

    if (AuthConfig.strict) {
      return response.redirect().toRoute('Auth_loginPage') // atc
    }

    await auth.use().login(user)
    return response.redirect().toRoute('Auth_userDashboard') // atc
  }

  /**
   * Verifies a user's email address.
   */
  public async verifyUserEmailWithToken({
    request,
    response,
    session,
  }: HttpContext): Promise<void> {
    const token = request.params().token
    const user = await UserModule.findByOrFail('emailVerificationToken', token) // new dependency for the user model fields

    const verified = user.verifyEmail(token)
    if (!verified) {
      return response.status(403).badRequest()
    }
    await user.save()
    session.flash('success', ['UserEmailVerified'])
    return response.redirect().toRoute('Auth_loginPage')
  }
  /**
   * Render  email verification view.
   */
  public async viewEmailVerificationPage({ jsx }: HttpContext) {
    return await jsx(EmailVerificationPage, {
      data: {},
    })
  }
  /**
   * Resend email verification.
   */
  public async sendUserVerificationToken({
    request,
    response,
    session,
  }: HttpContext): Promise<void> {
    // @ts-ignore
    const email = await request.validateUsing(emailVerification)
    const user = await UserModule.findByOrFail('email', email)
    if (user.isVerified) {
      session.flash('success', ['EmailAlreadyVerified'])
      return response.redirect().back()
    }
    user.generateVerificationToken()
    await user.save()
    // emitter.emit('mail:sendEmailVerification', user)
    session.flash('success', ['EmailVerificationResent'])
    return response.redirect().back()
  }
}
