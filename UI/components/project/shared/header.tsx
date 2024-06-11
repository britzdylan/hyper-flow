import { Button, NavigationMenu, NavigationMenuLink } from '#components'
import { Logo } from '#ui/components/project/shared/logo'

import env from '#start/env'

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'
import { AccountNavDropdownWithAvatar } from './navigation.js'
import User from '#models/user'

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

function PublicAuthActions() {
  const loginRoute = router.builder().make('Auth_renderLoginPage')
  const registerRoute = router.builder().make('Auth_renderRegisterPage')

  return (
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
  )
}

interface PublicHeader {
  user?: User
}

export function PublicHeader({ user = undefined }: PublicHeader) {
  return (
    <header class="mx-auto max-w-screen-xl flex items-center gap-8 min-h-[45px] p-4 w-full">
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
      {user ? (
        <AccountNavDropdownWithAvatar
          class="ml-auto"
          avatarUrl=""
          email={user.email}
          fullName={user.profile.fullName}
        />
      ) : (
        <PublicAuthActions />
      )}
    </header>
  )
}

export function DashboardPageHeader({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  return (
    <header
      class="w-full border border-border text-foreground bg-secondary px-6 py-8 inline-flex items-center justify-center"
      {...props}
    >
      <div class="max-w-screen-xl mx-auto w-full">{children}</div>
    </header>
  )
}
