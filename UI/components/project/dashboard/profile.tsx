import { FormPropsCard } from '#ui/lib/types'
import { FormInput } from '#components'

import { Form } from '#primitives/form'
import { UserSettingsBase } from '#ui/components/project/dashboard/layouts/user-settings'

import { FormCard } from '#ui/components/project/forms/card'

export function ProfilePage(props: FormPropsCard): JSX.Element {
  return (
    <UserSettingsBase>
      <ProfilePatchForm {...props} />
    </UserSettingsBase>
  )
}

export function ProfilePatchForm({
  formUrl,
  formData,
  formErrors,
  id,
  name,
}: FormPropsCard): JSX.Element {
  return (
    <Form name={name} id={id} hx-patch={formUrl} hx-swap="outerHTML" class="w-full">
      <FormCard title="Profile" description="Update your personal details">
        <FormInput
          label="First Name"
          placeholder="First Name"
          name="firstName"
          value={formData?.firstName}
          error={formErrors?.firstName()}
        />
        <FormInput
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
          value={formData?.lastName}
          error={formErrors?.lastName()}
        />
      </FormCard>
    </Form>
  )
}
