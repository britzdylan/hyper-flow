import { test } from '@japa/runner'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthenticateController from 'App/Modules/Auth/Controllers/AuthenticateController'
import User from 'App/Models/User'
import { emitter } from '@adonisjs/core/services/emitter'
import { FlashMessages } from 'App/Modules/Auth/Enum/FlashMessages'
import { AuthConfig } from 'App/Modules/Config'
import router from '@adonisjs/core/services/router'

test.group('AuthenticateController', (group) => {
let ctx: Partial<HttpContextContract>
let authenticateController: AuthenticateController

group.beforeEach(() => {
ctx = {
request: {
all: () => ({ email: 'user@example.com', password: 'password' }),
},
auth: {
use: () => ({
login: async (user: User) => user,
logout: async () => {},
}),
},
response: {
header: (key: string, value: string) => {},
redirect: () => {},
},
session: {
flash: (key: string, value: any) => {},
},
jsx: (view: any, data: any) => data,
}
authenticateController = new AuthenticateController()
})

test('renderLoginPage - should emit event and return login page data', async ({ assert }) => {
const data = await authenticateController.renderLoginPage(ctx as HttpContextContract)

    assert.isOk(data)
    assert.property(data, 'data')
    assert.property(data.data, 'formUrl')
    assert.equal(data.data.formData.email, '')
    assert.isTrue(emitter.emit.calledWith('Auth:renderLoginPage'))

})

test('userLogin - should verify credentials, log in user, flash success message, and redirect', async ({
assert,
}) => {
// Mock User verification
User.verifyCredentials = async (email: string, password: string) => ({
id: 1,
email,
password,
})

    await authenticateController.userLogin(ctx as HttpContextContract)

    assert.isTrue(
      emitter.emit.calledWith('Auth:userLogin', {
        id: 1,
        email: 'user@example.com',
        password: 'password',
      })
    )
    assert.equal(ctx.session.flash('success'), [FlashMessages.UserLoginSuccess])
    assert.equal(
      ctx.response.header('HX-Redirect'),
      `${AuthConfig.routeIdPrefix}renderUserDashboard`
    )

})

test('userLogout - should log out user, flash success message, and redirect', async ({
assert,
}) => {
await authenticateController.userLogout(ctx as HttpContextContract)

    assert.isTrue(emitter.emit.calledWith('Auth:userLogout'))
    assert.equal(ctx.session.flash('success'), [FlashMessages.UserLogoutSuccess])
    assert.equal(ctx.response.header('HX-Redirect'), `${AuthConfig.routeIdPrefix}renderLoginPage`)

})
})
