import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { FlashMessages } from '#enum/FlashMessages'
import { LoginPage } from '#modules/Auth/ui/views/authenticate'

const { actions } = AuthConfig
const { UserLoginSuccess, UserLogoutSuccess } = FlashMessages

export default class AuthenticateController {
  public async renderLoginPage({ jsx }: HttpContext) {
    if (actions.renderLoginPage.event) {
      emitter.emit('Auth:renderLoginPage', null)
    }
    // @ts-ignore
    return jsx(LoginPage, {
      data: {
        formUrl: router.builder().make(`${AuthConfig.routeIdPrefix}userLogin`),
        formData: {
          email: '',
        },
      },
    })
  }

  public async userLogin({ request, auth, response, session }: HttpContext) {
    const { email, password } = {
      email: request.input('email'),
      password: request.input('password'),
    }
    const user = await User.verifyCredentials(email, password) // TODO: handle error
    await auth.use('web').login(user)

    if (actions.userLogin.event) {
      emitter.emit('Auth:userLogin', user)
    }
    if (actions.userLogin.flash) {
      session.flash('success', [UserLoginSuccess])
    }
    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderUserDashboard`)
    )
    return
  }

  public async userLogout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    if (actions.userLogout.flash) {
      session.flash('success', [UserLogoutSuccess])
    }
    if (actions.userLogout.event) {
      emitter.emit('Auth:userLogout', null)
    }
    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
    )
    return
  }
}
