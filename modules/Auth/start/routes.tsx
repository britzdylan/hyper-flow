import router from '@adonisjs/core/services/router'
import RegisterController from '#modules/Auth/app/controllers/register'
import PasswordController from '#modules/Auth/app/controllers/password'
import AuthenticateController from '#modules/Auth/app/controllers/authenticate'
import { AuthConfig } from '#modules/config'

const {
  createUser,
  renderEmailVerificationPage,
  renderRegisterPage,
  verifyUserEmail,
  requestEmailVerification,
  renderForgotPasswordPage,
  renderPasswordResetPage,
  renderLoginPage,
  userRequestPasswordReset,
  userLogin,
  userLogout,
  userUpdatePassword,
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
  .post(`${requestEmailVerification.route}`, [RegisterController, 'requestEmailVerification'])
  .as(`${routeIdPrefix}requestEmailVerification`)

router
  .get(`${verifyUserEmail.route}`, [RegisterController, 'verifyUserEmail'])
  .as(`${routeIdPrefix}verifyUserEmail`)

router
  .get(`${renderForgotPasswordPage.route}`, [PasswordController, 'renderForgotPasswordPage'])
  .as(`${routeIdPrefix}renderForgotPasswordPage`)

router
  .get(`${renderPasswordResetPage.route}`, [PasswordController, 'renderPasswordResetPage'])
  .as(`${routeIdPrefix}renderPasswordResetPage`)

router
  .get(`${renderLoginPage.route}`, [AuthenticateController, 'renderLoginPage'])
  .as(`${routeIdPrefix}renderLoginPage`)

router
  .post(`${userRequestPasswordReset.route}`, [PasswordController, 'userRequestPasswordReset'])
  .as(`${routeIdPrefix}userRequestPasswordReset`)

router
  .post(`${userLogin.route}`, [AuthenticateController, 'userLogin'])
  .as(`${routeIdPrefix}userLogin`)

router
  .post(`${userLogout.route}`, [AuthenticateController, 'userLogout'])
  .as(`${routeIdPrefix}userLogout`)

router
  .post(`${userUpdatePassword.route}`, [PasswordController, 'userUpdatePassword'])
  .as(`${routeIdPrefix}userUpdatePassword`)