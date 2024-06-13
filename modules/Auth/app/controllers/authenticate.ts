import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { LoginPage } from '#ui/components/project/auth/authenticate'
import ModuleController from '#modules/index'
import encryption from '@adonisjs/core/services/encryption'

export default class AuthenticateController extends ModuleController {
  public async renderLoginPage({ jsx, request, auth, response }: HttpContext) {
    let user: User | null

    this.emitEvent('Auth', 'renderLoginPage', 'event', null)
    const { uid } = request.qs()
    console.log(uid)
    if (uid) {
      let email = encryption.decrypt(uid)
      user = await User.findBy('email', email)
      console.log(user)

      if (!user) {
        this.emitEvent('Auth', 'userLogin', 'error', user)
      } else {
        await auth.use('web').login(user)
        this.emitEvent('Auth', 'userLogin', 'event', user)
        response.redirect(router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`))
        // response.header(
        //   'HX-Redirect',
        //   router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`)
        // )
        return
      }
    }

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

  public async userLogin({ request, auth, response }: HttpContext) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)
    this.emitEvent('Auth', 'userLogin', 'event', user)

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`)
    )
  }

  public async userLogout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    this.emitEvent('Auth', 'userLogout', 'event', null)

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
  }
}
