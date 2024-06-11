/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import '#modules/Auth/start/routes'
import '#modules/Profile/start/routes'
import '#modules/Billing/start/routes'
import '#modules/Security/start/routes'

import ErrorPage from '#pages/error'
import Home from '#pages/home'
import { DefaultDashboardLayout } from '#layouts/dashboard'
import { DefaultLayout } from '#layouts/default'
import { HttpContext } from '@adonisjs/core/http'
import { middleware } from './kernel.js'

router
  .get('/dashboard', async ({ jsx }) => {
    return jsx(<></>, {
      layout: DefaultDashboardLayout,
      data: {},
    })
  })
  .as('Auth_renderUserDashboard')

router
  .get('/500', ({ jsx, request }) => {
    let title = request.qs().title ?? 'Oops something went wrong'
    let desc = request.qs().desc ?? 'Please try again later'
    return jsx(ErrorPage, {
      data: {
        title,
        description: desc,
      },
    })
  })
  .as('500')

router
  .get('/', async (ctx: HttpContext) => {
    const { auth } = ctx
    let user = auth.user

    console.log(user)
    // @ts-ignore
    return ctx.jsx(Home, {
      layout: DefaultLayout,
      data: {
        user,
      },
    })
  })
  .use(middleware.silentAuth())
