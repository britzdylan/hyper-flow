import { Button, Input } from '#components'
import { AuthConfig } from '../../config.js'
import { Form } from '#primitives/form'
import { FormProps } from '#ui/lib/types'
import router from '@adonisjs/core/services/router'

export function LoginForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="loginForm" id="loginForm" hx-post={formUrl} hx-swap="outerHTML">
      <Input
        placeholder="Email Address"
        name="email"
        required
        type="email"
        value={formData?.email}
      />
      <Input placeholder="Password" required name="password" type="password" />
      <Button class="w-full">Login</Button>
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
      <span>
        {formErrors?.email()},{formErrors?.password()}
      </span>
    </Form>
  )
}

export function LoginPage({ formUrl, formData }: FormProps): JSX.Element {
  const registerUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderRegisterPage`)
  const forgotPasswordUrl = router
    .builder()
    .make(`${AuthConfig.routeIdPrefix}renderForgotPasswordPage`)

  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <a href={registerUrl} title="View Register Page">
        <Button variant="ghost" class="absolute top-4 right-4">
          Register
        </Button>
      </a>
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Account Login</h1>
        <h2 class="text-sm font-medium text-foreground/60">
          Enter your email below to login to your account
        </h2>
        <LoginForm formData={formData} formUrl={formUrl} />
        <span>
          <a href={forgotPasswordUrl}>Forgot Password</a>
        </span>
      </div>
    </div>
  )
}
