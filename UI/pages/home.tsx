import type User from '#models/user'
import { PublicFooter } from '#ui/components/project/shared/footer'
import { PublicHeader } from '#ui/components/project/shared/header'
import { ResetPasswordRequestEmail } from '#ui/emails/transactional'

interface Home {
  user?: User
}
export default function Home({ user }: Home) {
  return (
    <div class="relative w-full p-4 md:p-0 flex-grow flex flex-col">
      <PublicHeader user={user} />
      <main class="w-full  flex-grow flex flex-col">
        <ResetPasswordRequestEmail />
        <section class="flex-grow flex flex-col items-center justify-center">
          <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hyper Flow</h1>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Build scalable server driven web apps in AdonisJs
          </p>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
