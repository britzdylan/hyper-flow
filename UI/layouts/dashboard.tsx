import { PropsWithChildren } from 'adonisjsx'
import { Root } from '#layouts/default'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icon,
  Logo,
} from '#components'
import { JsxElementProps } from '#ui/lib/types'

function DashboardTopNavigation({}: JsxElementProps): JSX.Element {
  return (
    <nav id="top-navigation" class="flex-grow flex items-center justify-between">
      <ul id="team-switch">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <li class="px-3 py-2 rounded-md hover:bg-muted text-foreground flex items-center gap-2 min-h-[35px] cursor-pointer text-sm">
              <Avatar class="w-5 h-5">
                <AvatarImage alt="dylan britz" src="/me.webp" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span class="font-medium">Dylan Britz's Team</span>
              <Badge variant="secondary">Hobby</Badge>
              <Icon i="arrow-separate-vertical" />
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            attrs={{
              'x-anchor.bottom-end': '$refs.dropDownTrigger',
            }}
          >
            <ul class="flex flex-col gap-0 w-full">
              <li class="p-2 rounded-md hover:bg-muted text-foreground flex items-center gap-4 cursor-pointer text-sm">
                <Avatar class="w-6 h-6">
                  <AvatarImage alt="dylan britz" src="/me.webp" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>Dylan Britz's Team</span>
              </li>
              <li class="p-2 rounded-md hover:bg-muted flex items-center gap-4 cursor-pointer text-sm text-primary">
                <Icon i="plus-circle" />
                <span>Add new team</span>
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
      <div class="flex items-center gap-4">
        <ul id="nav-menu" class="flex items-center gap-4">
          <li>
            <a
              href="/"
              title="title"
              class="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors ease-in duration-150"
            >
              Changelog
            </a>
          </li>
          <li>
            <a
              href="/"
              title="title"
              class="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors ease-in duration-150"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="/"
              title="title"
              class="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors ease-in duration-150"
            >
              Support
            </a>
          </li>
        </ul>
        <div class="mx-3 flex items-center gap-4" id="avatar-dropdown">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Icon i="bell-notification" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              attrs={{
                'x-anchor.bottom-end': '$refs.dropDownTrigger',
              }}
              class="min-w-[350px] p-0"
            >
              <header class="p-4 min-h-[35px] border-b border-border text-sm relative">
                <span>Notifications</span>
                <Icon i="xmark-circle" class="absolute top-4 right-4 cursor-pointer" />
              </header>
              <ul class="w-full p-0 flex flex-col items-start">
                <li class="flex p-4 border-b border-border gap-4 w-full">
                  <div class="rounded-full h-max w-max inline-flex p-2 bg-green-100 text-green-500">
                    <Icon i="warning-circle" />
                  </div>
                  <div class="text-sm">
                    <p>dylanbritz.dev is now configured</p>
                    <span>100d ago</span>
                  </div>
                </li>
                <li class="flex p-4 border-b border-border gap-4 w-full">
                  <div class="rounded-full h-max w-max inline-flex p-2 bg-green-100 text-green-500">
                    <Icon i="warning-circle" />
                  </div>
                  <div class="text-sm">
                    <p>dylanbritz.dev is now configured</p>
                    <span>100d ago</span>
                  </div>
                </li>
                <li class="flex p-4 border-b border-border gap-4 w-full">
                  <div class="rounded-full h-max w-max inline-flex p-2 bg-green-100 text-green-500">
                    <Icon i="warning-circle" />
                  </div>
                  <div class="text-sm">
                    <p>dylanbritz.dev is now configured</p>
                    <span>100d ago</span>
                  </div>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage alt="dylan britz" src="/me.webp" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              attrs={{
                'x-anchor.bottom-end': '$refs.dropDownTrigger',
              }}
              class="min-w-[300px]"
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel>Dylan Britz</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="justify-between gap-4 cursor-pointer">
                  Account Settings <Icon i="settings" />
                </DropdownMenuItem>
                <DropdownMenuItem class="justify-between gap-4 cursor-pointer">
                  Create team <Icon i="settings" />
                </DropdownMenuItem>
                <DropdownMenuItem class="justify-between gap-4 cursor-pointer">
                  Home page <Icon i="settings" />
                </DropdownMenuItem>
                <DropdownMenuItem class="justify-between gap-4 cursor-pointer">
                  Log out <Icon i="settings" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

function Footer(): JSX.Element {
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

function UserDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center w-full px-6 h-[64px]">
        <Logo
          class="h-6 w-6"
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        <span class="h-6 bg-border transform rotate-12 w-0.5 ml-3 mr-1"></span>
        <DashboardTopNavigation />
      </header>
      <main class="flex-grow">
        <div id="sub-menu-navigation" class="max-h-[46px] sticky top-0 z-10 bg-background">
          <ul class="px-4 flex items-center text-sm font-medium">
            <li class="text-foreground px-4 py-3 border-b-2 border-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60 px-4 py-3 border-b-0 border-foreground">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60 px-4 py-3 border-b-0 border-foreground">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div id="page-content-container">{children}</div>
      </main>
      <Footer />
    </Root>
  )
}

function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Root>
      <header class="flex items-center w-full px-6 h-[64px]">
        <Logo
          class="h-6 w-6"
          options={{
            href: '/',
            title: 'Home page link',
          }}
        />
        <span class="h-6 bg-border transform rotate-12 w-0.5 ml-3 mr-1"></span>
        <DashboardTopNavigation />
      </header>
      <main>
        <div id="sub-menu-navigation" class="max-h-[46px] sticky top-0 z-10 bg-background">
          <ul class="px-4 flex items-center text-sm font-medium">
            <li class="text-foreground px-4 py-3 border-b-2 border-foreground">
              <a href="/" title="">
                Home
              </a>
            </li>
            <li class="text-foreground/60 px-4 py-3 border-b-0 border-foreground">
              <a href="/" title="">
                Settings
              </a>
            </li>
            <li class="text-foreground/60 px-4 py-3 border-b-0 border-foreground">
              <a href="/" title="">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div id="page-content-container">{children}</div>
      </main>
      <Footer />
    </Root>
  )
}

export { UserDashboardLayout, AdminDashboardLayout }
