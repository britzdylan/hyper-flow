import router from '@adonisjs/core/services/router'
import RegisterController from '../app/controllers/register.js'
import { AuthConfig } from '../../config.js'

const {
  postUserEmailPassword,
  getRegisterPage,
  //   verifyUserEmailWithToken,
  //   viewEmailVerificationPage,
} = AuthConfig.actions
const { routeIdPrefix } = AuthConfig

router
  .get(`${getRegisterPage.route}`, [RegisterController, 'getRegisterPage'])
  .as(`${routeIdPrefix}getRegisterPage`)

router
  .post(`${postUserEmailPassword.route}`, [RegisterController, 'postUserEmailPassword'])
  .as(`${routeIdPrefix}postUserEmailPassword`)
