import { Button, FormInput, Form } from '#components'
import { AuthConfig } from '../../../../modules/config.js'
import { FormProps } from '#ui/lib/types'
import router from '@adonisjs/core/services/router'

export function PasswordResetRequestPage({ formUrl, formData }: FormProps): JSX.Element {
  const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="typeH1">Forgot your password?</h1>
        <h2 class="typeP">
          Before we can help you update your account we will need to verify your identity
        </h2>
        <PasswordResetRequestForm formData={formData} formUrl={formUrl} />
        <a href={loginUrl} title="View Register Page">
          <Button variant="link">Back to login</Button>
        </a>
      </div>
    </div>
  )
}

export function PasswordResetPage({ formUrl, formData }: FormProps): JSX.Element {
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="typeH1">Reset Password</h1>
        <h2 class="typeP">Enter your new password below</h2>
        <PasswordResetForm formData={formData} formUrl={formUrl} />
      </div>
    </div>
  )
}

export function PasswordResetForm({ formUrl, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="passwordResetForm" id="passwordResetForm" hx-post={formUrl}>
      <FormInput
        label="New password"
        error={formErrors?.password()}
        placeholder="8+ Character Password"
        required
        name="password"
        type="password"
      />
      <FormInput
        label="Confirm new password"
        placeholder="Confirm Password"
        name="password_confirmation"
        required
        type="password"
      />
      <Button class="w-full indicator">
        Update Password
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white indicator"
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
      </Button>
    </Form>
  )
}

export function PasswordResetRequestForm({
  formUrl,
  formErrors,
  formData,
}: FormProps): JSX.Element {
  return (
    <Form name="passwordResetForm" id="passwordResetForm" hx-post={formUrl}>
      <FormInput
        placeholder="john@example.com"
        label="Enter your account email"
        required
        name="email"
        type="email"
        error={formErrors?.email()}
        value={formData?.email}
      />
      <Button class="w-full indicator mt-4">
        Verify Email
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white indicator"
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
      </Button>
    </Form>
  )
}
