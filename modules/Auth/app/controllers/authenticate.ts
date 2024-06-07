import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { LoginPage } from '#modules/Auth/templates/authenticate'
import ModuleController from '#modules/index'

export default class AuthenticateController extends ModuleController {
  public async renderLoginPage({ jsx }: HttpContext) {
    this.emitEvent('Auth:renderLoginPage', 'event', null)

    // @ts-ignore
    return await jsx(LoginPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}userLogin`),
        formData: {
          email: '',
        },
      },
    })
  }

  public async userLogin({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)
    this.emitEvent('Auth:userLogin', 'event', user)
    this.showFlashMessage(session, 'userLogin', 'success', 'UserLoginSuccess')

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`)
    )
  }

  public async userLogout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    this.showFlashMessage(session, 'userLogout', 'success', 'UserLogoutSuccess')
    this.emitEvent('Auth:userLogout', 'event', null)

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
  }
}
