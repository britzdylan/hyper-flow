import router from '@adonisjs/core/services/router'
import { SecurityConfig } from '#modules/config'
import { middleware } from '#start/kernel'
import AccountController from '../app/controllers/account.js'
const { renderSecuritySettingsPage, deleteUserAccount } = SecurityConfig.actions
const { routeIdPrefix } = SecurityConfig

router
  .group(() => {
    router
      .get(`${renderSecuritySettingsPage.route}`, [AccountController, 'renderSecuritySettingsPage'])
      .as(`${routeIdPrefix}renderSecuritySettingsPage`)
      .prefix('settings')

    router
      .delete(`${deleteUserAccount.route}`, [AccountController, 'deleteUserAccount'])
      .as(`${routeIdPrefix}deleteUserAccount`)
  })
  .use(middleware.auth())
