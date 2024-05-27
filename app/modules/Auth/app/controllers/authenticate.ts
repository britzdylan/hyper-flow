import type { HttpContext } from '@adonisjs/core/http'
import UserModule from '#modules/Auth/app/models/user'
import emitter from '@adonisjs/core/services/emitter'
import { AuthConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import { FlashMessages } from '#enum/FlashMessages'
import { LoginPage } from '#modules/Auth/ui/views/authenticate'

const { actions } = AuthConfig

export default class AuthenticateController {
  public async renderLoginPage({ jsx }: HttpContext) {
    if (actions.renderLoginPage.event) {
      emitter.emit('Auth:renderLoginPage', null)
    }
    return jsx(LoginPage, {
      data: {},
    })
  }

  public async userLogin({}: HttpContext) {}

  public async userLogout({}: HttpContext) {}
}
