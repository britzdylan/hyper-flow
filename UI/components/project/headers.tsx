import { Button, Logo, NavigationMenu, NavigationMenuLink } from '#components'
import env from '#start/env'

import router from '@adonisjs/core/services/router'

let HeaderMenu = [
  {
    route: '/',
    title: 'Product',
  },
  {
    route: '/',
    title: 'Solutions',
  },
  {
    route: '/',
    title: 'Resources',
  },
  {
    route: '/',
    title: 'Docs',
  },
]

export function ProjectHeaderDefault() {
  const loginRoute = router.builder().make('Auth_renderLoginPage')
  const registerRoute = router.builder().make('Auth_renderRegisterPage')
  return (
    <header class="mx-auto max-w-screen-xl flex items-center gap-8 min-h-[45px] p-4">
      <Logo options={{ href: '/', title: env.get('APP_NAME') }} />
      <NavigationMenu>
        {HeaderMenu.map((item) => {
          return (
            <NavigationMenuLink href={item.route} title={item.title}>
              {item.title}
            </NavigationMenuLink>
          )
        })}
      </NavigationMenu>
      <div class="inline-flex gap-2 items-center ml-auto">
        <a href={loginRoute}>
          <Button size="sm" variant="ghost">
            Login
          </Button>
        </a>
        <a href={registerRoute}>
          <Button size="sm">Sign Up</Button>
        </a>
      </div>
    </header>
  )
}
