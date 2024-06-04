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
import LemonSDK from '#providers/src/lemon_squeezy_sdk'
import env from '#start/env'

router.get('/api', () => {
  return <Button variant="destructive">Incremented</Button> // only use when swapping content with HTMX
})

router
  .get('/dashboard', async () => {
    return <h1>Hello dashboard</h1>
  })
  .as('Auth_renderUserDashboard')

router.get('/framer', async ({ response, lemonSDK }) => {
  // const ls = new LemonSDK(env.get('LEMONSQUEEZY_API_KEY'))
  let d = await lemonSDK()

  return response.json(await d.getAuthUser())
})
