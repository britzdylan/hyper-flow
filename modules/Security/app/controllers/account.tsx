import type { HttpContext } from '@adonisjs/core/http'
import ModuleController from '#modules/index'
import { SubPageDashboardLayout } from '#layouts/dashboard'
import { SecuritySettingsPage } from '#ui/components/project/user/security'
import { AuthConfig, SecurityConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'

export default class AccountController extends ModuleController {
  public async renderSecuritySettingsPage({ jsx }: HttpContext) {
    this.emitEvent('renderSecuritySettingsPage', 'event', null)
    // @ts-ignore
    return await jsx(SecuritySettingsPage, {
      layout: SubPageDashboardLayout,
      data: {
        url: router.builder().make(`${SecurityConfig.routeIdPrefix}deleteUserAccount`),
      },
    })
  }

  public async deleteUserAccount({ auth, response }: HttpContext) {
    const user = auth.user!

    await user.delete()
    await auth.use('web').logout()

    response.header(
      'HX-Redirect',
      router.builder().make(`${AuthConfig.routeIdPrefix}renderRegisterPage`)
    )
  }
}
