import router from '@adonisjs/core/services/router'
import ProfileController from '#modules/Profile/app/controllers/profile'
import { ProfileConfig } from '#modules/config'
import { middleware } from '#start/kernel'
const { renderProfilePage, patchProfile, putProfileImage, deleteProfileImage } =
  ProfileConfig.actions
const { routeIdPrefix } = ProfileConfig

router
  .group(() => {
    router
      .get(`${renderProfilePage.route}`, [ProfileController, 'renderProfilePage'])
      .as(`${routeIdPrefix}renderProfilePage`)

    router
      .patch(`${patchProfile.route}`, [ProfileController, 'patchProfile'])
      .as(`${routeIdPrefix}patchProfile`)

    // router
    //   .put(`${putProfileImage.route}`, [ProfileController, 'putProfileImage'])
    //   .as(`${routeIdPrefix}putProfileImage`)

    // router
    //   .delete(`${deleteProfileImage.route}`, [ProfileController, 'deleteProfileImage'])
    //   .as(`${routeIdPrefix}deleteProfileImage`)
  })
  .use(middleware.auth())
