import { HttpContext } from '@adonisjs/core/http'
import type { JsxElementProps } from '#ui/lib/types'
import type { PropsWithChildren } from 'adonisjsx'
import { Root } from '#layouts/default'
import { Logo } from '#ui/components/project/shared/logo'

import {
  AccountNavDropdownWithAvatar,
  CtxMenu,
  Notifications,
  SupportMenu,
} from '#ui/components/project/shared/navigation'
import { DashboardFooter } from '#ui/components/project/shared/footer'

function DashboardTopNavigation({}: JsxElementProps): JSX.Element {
  const ctx = HttpContext.getOrFail()
  const { user } = ctx.auth
  return (
    <nav id="top-navigation" class="flex items-center ml-auto">
      <div class="flex items-center gap-4">
        <SupportMenu />
        <div class="mx-3 flex items-center gap-4" id="avatar-dropdown">
          <Notifications />
          <AccountNavDropdownWithAvatar fullName={user?.profile.fullName} email={user?.email} />
        </div>
      </div>
    </nav>
  )
}

function DefaultDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center w-full px-6 h-[64px] justify-between">
        <Logo
          class="h-6 w-6"
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        {/* <span class="h-6 bg-border transform rotate-12 w-0.5 ml-3 mr-1"></span> */}
        <DashboardTopNavigation />
      </header>
      <main class="flex-grow">
        <CtxMenu />
        <div id="page-content-container">{children}</div>
      </main>
      <DashboardFooter />
    </Root>
  )
}

function SubPageDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center w-full px-6 h-[64px] justify-between">
        <Logo
          class="h-6 w-6"
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        {/* <span class="h-6 bg-border transform rotate-12 w-0.5 ml-3 mr-1"></span> */}
        <DashboardTopNavigation />
      </header>
      <main class="flex-grow">
        <div id="page-content-container">{children}</div>
      </main>
      <DashboardFooter />
    </Root>
  )
}

export { DefaultDashboardLayout, SubPageDashboardLayout }
