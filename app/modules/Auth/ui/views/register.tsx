import { Button, Input } from '#components'
import { AuthConfig } from '#modules/config'
import { Form } from '#primitives/form'
import { FormProps } from '#ui/lib/types'
import router from '@adonisjs/core/services/router'

export function UserRegisterForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="registerForm" id="registerForm" hx-post={formUrl} hx-swap="outerHTML">
      <Input
        placeholder="name@example.com"
        name="email"
        required
        type="email"
        value={formData?.email}
      />
      <Input placeholder="8+ Character Password" required name="password" type="password" />
      <Input placeholder="Confirm Password" name="password_confirmed" type="password" />
      <Button class="w-full">Sign up with Email</Button>
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

export function RegisterPage({ formUrl, formData }: FormProps): JSX.Element {
  const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <a href={loginUrl} title="View login Page">
        <Button variant="ghost" class="absolute top-4 right-4">
          Login
        </Button>
      </a>
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Create Account</h1>
        <h2 class="text-sm font-medium text-foreground/60">
          Enter your email below to create your account
        </h2>
        <UserRegisterForm formData={formData} formUrl={formUrl} />
        <span>
          By clicking continue, you agree to our <a href="/"> of Service</a> and{' '}
          <a href="/">Privacy Policy.</a>
        </span>
      </div>
    </div>
  )
}

export function EmailVerificationFailed(): JSX.Element {
  const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)

  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <a href={loginUrl} title="View login Page">
        <Button variant="ghost" class="absolute top-4 right-4">
          Back to Login
        </Button>
      </a>
    </div>
  )
}

export function EmailRequestForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="emailRequestForm" id="emailRequestForm" hx-post={formUrl} hx-swap="outerHTML">
      <Input
        placeholder="name@example.com"
        name="email"
        required
        type="email"
        value={formData?.email}
      />
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

export function EmailVerificationPage({ formUrl, formData }: FormProps): JSX.Element {
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <Button variant="ghost" class="absolute top-4 right-4">
        Home
      </Button>
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Verify your account</h1>
        <h2 class="text-sm font-medium text-foreground/60">
          Enter your email below to verify your account
        </h2>
        <EmailRequestForm formData={formData} formUrl={formUrl} />
      </div>
    </div>
  )
}
