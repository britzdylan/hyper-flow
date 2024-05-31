import type { HttpContext } from '@adonisjs/core/http'
import { patchProfile } from '#modules/Profile/app/validators/profile'
import { ProfileConfig } from '#modules/config'
import router from '@adonisjs/core/services/router'
import ModuleController from '#modules/index'
import { ProfilePage, ProfilePatchForm } from '#modules/Profile/templates/profile'
import { UserDashboardLayout } from '#layouts/dashboard'

export default class ProfileController extends ModuleController {
  public async renderProfilePage({ jsx, auth }: HttpContext) {
    const user = auth.user!
    const [profile] = await user.related('profile').query()

    this.emitEvent('renderProfilePage', 'event', null)
    // @ts-ignore
    return await jsx(ProfilePage, {
      layout: UserDashboardLayout,
      data: {
        formUrl: router.builder().make(`${ProfileConfig.routeIdPrefix}patchProfile`),
        formData: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          bio: profile.bio,
        },
        id: 'patchProfileForm',
        name: 'patchProfileForm',
      },
    })
  }

  public async patchProfile({
    request,
    response,
    session,
    auth,
  }: HttpContext): Promise<string | void> {
    const data = request.all()
    const user = auth.user!
    let profileData

    try {
      profileData = await patchProfile.validate(data)
    } catch (error) {
      this.emitEvent('patchProfile', 'error', null)

      return await (
        <ProfilePatchForm
          formUrl={router.builder().make(`${ProfileConfig.routeIdPrefix}patchProfile`)}
          formData={{
            firstName: profileData?.firstName ?? '',
            lastName: profileData?.lastName ?? '',
            bio: profileData?.bio ?? '',
          }}
          formErrors={{
            firstName: () =>
              error.messages.map((item: any) => (item.field === 'firstName' ? item.message : '')),
            lastName: () =>
              error.messages.map((item: any) => (item.field === 'lastName' ? item.message : '')),
            bio: () =>
              error.messages.map((item: any) => (item.field === 'bio' ? item.message : '')),
          }}
          id="patchProfileForm"
          name="patchProfileForm"
        />
      )
    }

    const userProfile = await user.related('profile').query().firstOrFail()!
    userProfile.merge({ ...profileData })
    await userProfile.save()

    this.emitEvent('patchProfile', 'event', 'null')

    this.showFlashMessage(session, 'patchProfile', 'success', 'ProfileUpdateSuccess')

    response.header('HX-Reswap', 'none')
    response.header('HX-Trigger', 'showToast')

    return
  }

  public async putProfileImage({}: HttpContext): Promise<string | void> {}

  public async deleteProfileImage({}: HttpContext) {}
}
