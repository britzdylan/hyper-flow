import { Button, Input, TextArea } from '#components'
import { Form } from '#primitives/form'
import { UserSettingsBase } from '#ui/components/base/user-settings'
import { InputCard } from '#ui/components/project/forms/inputs'
import { FormPropsCard } from '#ui/lib/types'

export function BillingSettingsForm({
  formUrl,
  formData,
  formErrors,
  id,
  name,
}: FormPropsCard): JSX.Element {
  return (
    <Form name={name} id={id} hx-patch={formUrl} hx-swap="outerHTML" class="w-full gap-8">
      <InputCard title="Hobby plan" description="" help=""></InputCard>

      <Button size="sm" class="ml-auto" type="submit">
        Save Changes
      </Button>
    </Form>
  )
}

export function BillingSettingsPage(props: FormPropsCard): JSX.Element {
  return (
    <UserSettingsBase>
      <BillingSettingsForm {...props} />
    </UserSettingsBase>
  )
}
