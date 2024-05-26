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

router.get('/api', () => {
  return <Button variant="destructive">Incremented</Button> // only use when swapping content with HTMX
})
