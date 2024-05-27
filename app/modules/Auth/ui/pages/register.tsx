import { Button, Input } from '#components'

export default function RegisterPage() {
  return (
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <Button variant="ghost" class="absolute top-4 right-4">
        Login
      </Button>
      <div class=" h-full w-full flex flex-col gap-4 items-center justify-center max-w-lg mx-auto">
        <h1 class="text-2xl font-semibold text-foreground">Create Account</h1>
        <h2 class="text-sm font-medium text-foreground/60">
          Enter your email below to create your account
        </h2>
        <div class="flex flex-col gap-2 w-full items-start">
          <Input placeholder="name@example.com" name="email" type="email" />
          <Input placeholder="8+ Character Password" name="password" type="password" />
          <Input placeholder="" name="password_confirmed" type="password" class="hidden" />
          <Button class="w-full">Sign up with Email</Button>
        </div>
        <span>
          By clicking continue, you agree to our <a href="/"> of Service</a> and{' '}
          <a href="/">Privacy Policy.</a>
        </span>
      </div>
    </div>
  )
}
