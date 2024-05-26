import router from '@adonisjs/core/services/router'
import RegisterController from '../app/controllers/register.js'
import { AuthConfig } from '../../config.js'

const { GET, POST } = AuthConfig.routes
const { routeIdPrefix } = AuthConfig

router
  .get(`${GET.viewRegisterPage}`, [RegisterController, 'viewRegisterPage'])
  .as(`${routeIdPrefix}viewRegisterPage`)

router
  .post(`${POST.registerUser}`, [RegisterController, 'registerUser'])
  .as(`${routeIdPrefix}registerUser`)
