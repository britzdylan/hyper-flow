import { PropsWithChildren } from 'adonisjsx'
import { Root } from '#layouts/default'
import { Logo } from '#components'
import { JsxElementProps } from '#UI/lib/types'

function DashboardTopNavigation({}: JsxElementProps): JSX.Element {
  return (
    <nav
      id="top-navigation"
      class="min-h-[45px] flex-grow flex items-center justify-between h-full"
    >
      <ul id="team-switch">
        <li>"Team Selection"</li>
      </ul>
      <div>
        <ul id="nav-menu">
          <li>
            <a></a>
          </li>
        </ul>
        <div id="avatar-dropdown">avatar with dropdown</div>
      </div>
    </nav>
  )
}

function UserDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center gap-4 w-full p-4">
        <Logo
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        <DashboardTopNavigation />
      </header>
      <main>
        <div id="sub-menu-navigation"></div>
        <div id="page-content-container">{children}</div>
      </main>
      <footer>
        <nav id="directory"></nav>
        <ul>
          <li>links</li>
        </ul>
      </footer>
    </Root>
  )
}

function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center gap-4 w-full p-4">
        <Logo
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        <DashboardTopNavigation />
      </header>
      <main>
        <div id="sub-menu-navigation"></div>
        <div id="page-content-container">{children}</div>
      </main>
      <footer>
        <nav id="directory"></nav>
        <ul>
          <li>links</li>
        </ul>
      </footer>
    </Root>
  )
}

export { UserDashboardLayout, AdminDashboardLayout }
