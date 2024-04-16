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
import UsersController from '#controllers/users_controller'

router.get('/', [UsersController, 'index']) // Render full pages - required in order to load all the necessary scripts and styles

router.get('/api', () => {
  return <Button variant="destructive">Incremented</Button> // only use when swapping content with HTMX
})
