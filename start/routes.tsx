/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { Button } from '#components'
import '#modules/Auth/start/routes'
import '#modules/Profile/start/routes'
import ErrorPage from '#pages/error'

router.get('/api', () => {
  return <Button variant="destructive">Incremented</Button> // only use when swapping content with HTMX
})

router
  .get('/dashboard', async () => {
    return <h1>Hello dashboard</h1>
  })
  .as('Auth_renderUserDashboard')

router
  .get('/505', ({ jsx, request }) => {
    let title = request.qs().title ?? 'Oops something went wrong'
    let desc = request.qs().desc ?? 'Please try again later'
    return jsx(ErrorPage, {
      data: {
        title,
        description: desc,
      },
    })
  })
  .as('505')
