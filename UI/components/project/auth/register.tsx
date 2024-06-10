import router from '@adonisjs/core/services/router'
import { AuthConfig } from '../../../../modules/config.js'
import type { FormProps } from '#ui/lib/types'
import { Button, FormInput, Form } from '#components'
import { Logo } from '#projectUI'

export function UserRegisterForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  const emailError = formErrors?.email()[0]
  const passwordError = formErrors?.password()[0]
  const confirmedError = formErrors?.passwordConfirmed()[0]

  return (
    <Form name="registerForm" id="registerForm" hx-post={formUrl}>
      <FormInput
        label="Email Address"
        placeholder="name@example.com"
        name="email"
        required
        type="email"
        value={formData?.email}
        error={emailError}
      />

      <FormInput
        label="Password"
        placeholder="8+ Character Password"
        error={passwordError}
        required
        name="password"
        type="password"
      />
      {AuthConfig.strict ? (
        <FormInput
          label="Confirm Password"
          placeholder="Confirm Password"
          error={confirmedError}
          name="password_confirmation"
          type="password"
        />
      ) : null}
      <Button class="w-full mt-4 indicator">
        Sign Up{' '}
        <svg
          class="animate-spin ml-1 mr-3 h-5 w-5 text-white indicator"
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

export function RegisterPage({ formUrl, formData }: FormProps): JSX.Element {
  const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class="h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <Logo
          options={{
            href: '/',
            title: 'Home Page',
          }}
        />
        <h1 class="typeH1">Create Account</h1>
        <h2 class="typeP">Enter your email and password below to create your account</h2>
        <UserRegisterForm formData={formData} formUrl={formUrl} />
        <a class="-mt-4 mb-4" href={loginUrl} title="View login Page">
          <Button variant="link">Already have an account? Login instead</Button>
        </a>
        <span class="text-sm text-muted-foreground text-center">
          By clicking continue, you agree to our{' '}
          <a class="underline hover:text-foreground" href="/">
            terms of Service
          </a>{' '}
          and{' '}
          <a class="underline hover:text-foreground" href="/">
            Privacy Policy.
          </a>
        </span>
      </div>
    </div>
  )
}

// export function EmailVerificationFailed(): JSX.Element {
//   const loginUrl = router.builder().make(`${AuthConfig.routeIdPrefix}renderLoginPage`)

//   return (
//     <div class="relative h-full w-full flex items-center justify-center p-4">
//       <a href={loginUrl} title="View login Page">
//         <Button variant="ghost" class="absolute top-4 right-4">
//           Back to Login
//         </Button>
//       </a>
//     </div>
//   )
// }

export function EmailRequestForm({ formUrl, formData, formErrors }: FormProps): JSX.Element {
  return (
    <Form
      name="emailRequestForm"
      id="emailRequestForm"
      hx-post={formUrl}
      hx-swap="outerHTML"
      hx-indicator=".indicator"
    >
      <FormInput
        placeholder="name@example.com"
        name="email"
        required
        type="email"
        value={formData?.email}
        error={formErrors?.email()}
      />
      <Button class="w-full mt-4 indicator">
        Verify Email{' '}
        <svg
          class="animate-spin ml-1 mr-3 h-5 w-5 text-white indicator"
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

export function EmailVerificationPage({ formUrl, formData }: FormProps): JSX.Element {
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-sm mx-auto">
        <Logo
          options={{
            href: '/',
            title: 'Home Page',
          }}
        />
        <h1 class="scroll-m-20 text-2xl font-semibold tracking-tight">Verify your account</h1>
        <h2 class="leading-7 text-center">Enter your email below to verify your account</h2>
        <EmailRequestForm formData={formData} formUrl={formUrl} />
        <a class="-mt-4 mb-4" href="/" title="Home">
          <Button variant="link">Home</Button>
        </a>
      </div>
    </div>
  )
}
