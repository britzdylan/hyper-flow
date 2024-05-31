import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import AuthenticateController from '../app/controllers/authenticate.js'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'
import { AuthConfig } from '../../config.js'
import { FlashMessages } from '#enum/FlashMessages'

test.group('Authenticate', (group) => {
  let ctx: any
  let authenticateController: AuthenticateController
  group.each.setup(() => testUtils.db().withGlobalTransaction())
  group.each.setup(() => {
    ctx = {
      header: {},
      request: {
        all: () => ({ email: 'example@gamil.com', password: 'secret' }),
      },
      auth: {
        use: () => ({
          login: async (user: User) => user,
          logout: async () => {},
        }),
      },
      response: {
        data: {},
        header: (key: string, value: string) => {
          ctx.header[key] = value
          return ctx?.header[key]
        },
        redirect: () => {},
      },
      session: {
        flash: (key: string, value: any) => {},
      },
      jsx: (view: any, data: any) => data,
    }
    authenticateController = new AuthenticateController()
  })

  test('renderLoginPage - should emit event and return login page data', async ({
    assert,
    cleanup,
  }) => {
    const events = emitter.fake()

    const { data }: any = await authenticateController.renderLoginPage(ctx)

    assert.isOk(data)
    assert.equal(data.formUrl, AuthConfig.actions.userLogin.route)

    if (AuthConfig.actions.renderLoginPage.event) {
      events.assertEmitted('Auth:renderLoginPage')
    }

    cleanup(() => {
      emitter.restore()
    })
  })

  test('userLogin - should verify credentials, log in user, flash success message, and redirect', async ({
    assert,
  }) => {
    const events = emitter.fake()
    // Mock User verification

    await authenticateController.userLogin(ctx)
    if (AuthConfig.actions.userLogin.event) {
      events.assertEmitted('Auth:userLogin')
    }
    if (AuthConfig.actions.userLogin.flash) {
      assert.equal(ctx.session.flash('success'), [FlashMessages.UserLoginSuccess])
    }
    assert.equal(ctx.header['HX-Redirect'], '/dashboard')
  })

  test('userLogout - should verify credentials, log in user, flash success message, and redirect', async ({
    assert,
  }) => {
    const events = emitter.fake()
    // Mock User verification

    await authenticateController.userLogout(ctx)
    if (AuthConfig.actions.userLogout.event) {
      events.assertEmitted('Auth:userLogin')
    }
    if (AuthConfig.actions.userLogout.flash) {
      assert.equal(ctx.session.flash('success'), [FlashMessages.UserLogoutSuccess])
    }
    assert.equal(ctx.header['HX-Redirect'], '/login')
  })
})
