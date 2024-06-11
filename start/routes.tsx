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

router
  .get('/dashboard', async () => {
    return <h1>Hello dashboard</h1>
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

router.get('/', ({ jsx }) => {
  return jsx(Home, {
    data: {},
  })
})
