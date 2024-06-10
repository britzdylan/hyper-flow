import { Button, FormInput, Form } from '#components'
import { AuthConfig } from '../../../../modules/config.js'
import { FormProps } from '#ui/lib/types'
import router from '@adonisjs/core/services/router'
import { Logo } from '#projectUI'

export function LoginForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  return (
    <Form name="loginForm" id="loginForm" hx-post={formUrl}>
      <FormInput
        label="Email Address"
        placeholder="john@example.com"
        name="email"
        required
        type="email"
        value={formData?.email}
        error={formErrors?.email()}
      />
      <FormInput
        label="Password"
        error={formErrors?.password()}
        placeholder="********"
        required
        name="password"
        type="password"
      />
      <Button class="w-full mt-4 indicator">
        Login{' '}
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
        </svg>
      </Button>
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
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <Logo
          options={{
            href: '/',
            title: 'Home Page',
          }}
        />
        <h1 class="typeH1">Account Login</h1>
        <h2 class="typeP">Enter your email below to login to your account</h2>
        <LoginForm formData={formData} formUrl={formUrl} />
        <span class="flex flex-col items-center gap-0">
          <a class="" href={registerUrl} title="View login Page">
            <Button variant="link">Don't have an account? Register instead</Button>
          </a>
          <a href={forgotPasswordUrl}>
            <Button variant="link">Forgot Password</Button>
          </a>
        </span>
      </div>
    </div>
  )
}
