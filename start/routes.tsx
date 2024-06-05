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
  let d = lemonSDK
  let a = await d.createWebhook({
    type: 'webhooks',
    attributes: {
      url: 'https://mysite.com/webhooks/',
      events: [
        'order_created',
        'subscription_created',
        'subscription_updated',
        'subscription_expired',
      ],
      secret: 'SIGNING_SECRET',
    },
    relationships: {
      store: {
        data: {
          type: 'stores',
          id: '52117',
        },
      },
    },
  })
  console.log(a)
  return response.json(await d.getAllStores())
})
