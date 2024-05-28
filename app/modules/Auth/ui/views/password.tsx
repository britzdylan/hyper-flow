import { Button, Input } from '#components'
import { AuthConfig } from '#modules/config'
import { Form } from '#primitives/form'
import { FormProps } from '#ui/lib/types'
import router from '@adonisjs/core/services/router'

export function PasswordResetRequestPage({ formUrl, formData }: FormProps): JSX.Element {
  const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <a href={loginUrl} title="View Register Page">
        <Button variant="ghost" class="absolute top-4 right-4">
          Back to login
        </Button>
      </a>
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Forgot Password</h1>
        <h2 class="text-sm font-medium text-foreground/60">
          Enter your email to reset your account password
        </h2>
        <PasswordResetRequestForm formData={formData} formUrl={formUrl} />
      </div>
    </div>
  )
}

export function PasswordResetPage({ formUrl, formData }: FormProps): JSX.Element {
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Reset Password</h1>
        <h2 class="text-sm font-medium text-foreground/60">Enter your new password below</h2>
        <PasswordResetForm formData={formData} formUrl={formUrl} />
      </div>
    </div>
  )
}

export function PasswordResetForm({ formUrl, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="passwordResetForm" id="passwordResetForm" hx-post={formUrl} hx-swap="outerHTML">
      <Input placeholder="8+ Character Password" required name="password" type="password" />
      <Input placeholder="Confirm Password" name="password_confirmation" required type="password" />
      <Button class="w-full">Update Password</Button>
      <Button type="submit" disabled={true} class="w-full htmx-indicator">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>{' '}
        Please wait...
      </Button>
      <span>{formErrors?.password()}</span>
    </Form>
  )
}

export function PasswordResetRequestForm({ formUrl, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="passwordResetForm" id="passwordResetForm" hx-post={formUrl} hx-swap="outerHTML">
      <Input placeholder="Email" required name="email" type="email" />
      <Button class="w-full">Verify Email</Button>
      <Button type="submit" disabled={true} class="w-full htmx-indicator">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>{' '}
        Please wait...
      </Button>
      <span>{formErrors?.email()}</span>
    </Form>
  )
}
