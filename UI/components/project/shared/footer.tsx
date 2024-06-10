import { Icon } from '#components'
import { Logo } from '#projectUI'

export function DashboardFooter(): JSX.Element {
  return (
    <footer class="w-full flex flex-col items-start justify-between gap-4 z-10 py-3 border-t-2 border-border bg-secondary">
      <nav id="directory" class="flex items-center justify-between mx-auto max-w-screen-xl w-full">
        <div class="inline-flex gap-4 items-center px-4 text-sm text-secondary-foreground">
          {' '}
          <Logo
            class="w-4 h-4"
            options={{
              href: '/',
              title: 'Home page link',
            }}
          />
          © 2024
        </div>
      </nav>
      <div class="flex items-center justify-between w-full mx-auto max-w-screen-xl">
        <div class="inline-flex px-4 gap-2">
          <a href="/" title="">
            <Icon class="before:w-6 before:h-6" i="linkedin" />
          </a>
          <a href="/" title="">
            <Icon class="before:w-6 before:h-6" i="x" />
          </a>
        </div>
        <ul class="px-4 flex items-center text-sm font-medium gap-4">
          <li class="text-foreground px-4 py-2">
            <a href="/" title="">
              Home
            </a>
          </li>
          <li class="text-foreground/60 px-4 py-2">
            <a href="/" title="">
              Settings
            </a>
          </li>
          <li class="text-foreground/60 px-4 py-2">
            <a href="/" title="">
              Integrations
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
