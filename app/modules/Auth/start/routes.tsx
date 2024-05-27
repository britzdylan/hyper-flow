import router from '@adonisjs/core/services/router'
import RegisterController from '../app/controllers/register.js'
import { AuthConfig } from '../../config.js'

const {
  createUser,
  renderEmailVerificationPage,
  renderRegisterPage,
  verifyUserEmail,
  requestEmailVerification,
} = AuthConfig.actions
const { routeIdPrefix } = AuthConfig

router
  .get(`${renderRegisterPage.route}`, [RegisterController, 'renderRegisterPage'])
  .as(`${routeIdPrefix}renderRegisterPage`)

router
  .post(`${createUser.route}`, [RegisterController, 'createUser'])
  .as(`${routeIdPrefix}createUser`)

router
  .get(`${renderEmailVerificationPage.route}`, [RegisterController, 'renderEmailVerificationPage'])
  .as(`${routeIdPrefix}renderEmailVerificationPage`)

router
  .get(`${verifyUserEmail.route}`, [RegisterController, 'verifyUserEmail'])
  .as(`${routeIdPrefix}verifyUserEmail`)

router
  .post(`${requestEmailVerification.route}`, [RegisterController, 'requestEmailVerification'])
  .as(`${routeIdPrefix}requestEmailVerification`)
