import { Icon, Logo } from '#components'
import { ProjectHeaderDefault } from '#ui/components/project/headers'

export default function Home() {
  return (
    <div class="relative h-full w-full p-4 md:p-0">
      <ProjectHeaderDefault />
      <main class="w-full h-full flex flex-col">
        <section class="flex-grow flex flex-col items-center justify-center">
          <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hyper Flow</h1>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Build scalable server driven web apps in AdonisJs
          </p>
        </section>
      </main>
      <footer class="w-full flex items-start justify-between gap-4 z-10 py-3 max-w-screen-xl mx-auto ">
        <nav id="directory" class="flex flex-col justify-between pr-4 gap-4 w-40 h-full">
          <div class="inline-flex  gap-4  px-4 text-sm text-secondary-foreground">
            <Logo
              class="w-4 h-4"
              options={{
                href: '/',
                title: 'Home page link',
              }}
            />
            © 2024
          </div>
          <div class="inline-flex px-4 gap-2">
            <a href="/" title="">
              <Icon class="before:w-6 before:h-6" i="linkedin" />
            </a>
            <a href="/" title="">
              <Icon class="before:w-6 before:h-6" i="x" />
            </a>
          </div>
        </nav>
        <div class="flex items-center justify-center w-full gap-16">
          <ul class="px-4 flex flex-col items-start text-sm font-medium gap-2">
            <li class="text-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
          <ul class="px-4 flex flex-col items-start text-sm font-medium gap-2">
            <li class="text-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
          <ul class="px-4 flex flex-col items-start text-sm font-medium gap-2">
            <li class="text-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
          <ul class="px-4 flex flex-col items-start text-sm font-medium gap-2">
            <li class="text-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
