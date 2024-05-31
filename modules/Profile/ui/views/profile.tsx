import { FormProps } from '#ui/lib/types'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  TextArea,
} from '#components'

import { Form } from '#primitives/form'
import { DashboardSettingsBase } from '#ui/components/base/dashboard'

import { PropsWithChildren } from 'adonisjsx'

export function ProfilePage(props: FormPropsCard): JSX.Element {
  return (
    <DashboardSettingsBase>
      <ProfilePatchForm {...props} />
    </DashboardSettingsBase>
  )
}

interface FormPropsCard extends FormProps {
  id: string
  name: string
}

export function ProfilePatchForm({
  formUrl,
  formData,
  formErrors,
  id,
  name,
}: FormPropsCard): JSX.Element {
  return (
    <Form name={name} id={id} hx-patch={formUrl} hx-swap="outerHTML" class="w-full gap-8">
      <InputCard
        title="First Name"
        description="Please enter your first name, or a display name you are comfortable with."
        help="Please use 32 characters at maximum."
      >
        <Input
          class="max-w-80"
          placeholder="First Name"
          name="firstName"
          value={formData?.firstName}
        />
        <span class="text-destructive">{formErrors?.firstName()}</span>
      </InputCard>
      <InputCard
        title="Last Name"
        description="Please enter your last name, or a display name you are comfortable with."
        help="Please use 32 characters at maximum."
      >
        <Input
          class="max-w-80"
          placeholder="Last Name"
          name="lastName"
          value={formData?.lastName}
        />
        <span class="text-destructive">{formErrors?.lastName()}</span>
      </InputCard>
      <InputCard
        title="Bio"
        description="Please entera summary of yourself, or anything you wish to share."
        help="Please use 300 characters at maximum."
      >
        <TextArea
          class="max-w-80"
          attrs={{
            placeholder: 'Bio',
            value: formData?.bio,
          }}
          name="bio"
        />
        <span class="text-destructive">{formErrors?.bio()}</span>
      </InputCard>
      <Button size="sm" class="ml-auto" type="submit">
        Save Changes
      </Button>
    </Form>
  )
}

interface InputCard {
  title: string
  description: string
  help: string
}

export function InputCard({ children, ...props }: PropsWithChildren<InputCard>) {
  const { title, description, help } = props
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter class="border-t border-border bg-secondary text-secondary-foreground font-medium p-6 py-4 justify-between">
        <small>{help}</small>
      </CardFooter>
    </Card>
  )
}
