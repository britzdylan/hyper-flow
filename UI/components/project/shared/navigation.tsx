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
  Icon,
  DropdownMenuTrigger,
} from '#components'

import { AccountNavDropdownLinks, SupportMenuLink } from '#ui/lib/constants'

interface AccountNavDropdownWithAvatar {
  avatarUrl?: string
  fullName?: string
  email?: string
}

export function AccountNavDropdownWithAvatar({
  fullName = 'Dylan Britz',
  avatarUrl,
  email = 'Missing Email',
}: AccountNavDropdownWithAvatar) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {avatarUrl ? (
            <AvatarImage alt={fullName} src={avatarUrl} />
          ) : (
            <AvatarFallback>{fullName.split(' ')[0][0] + fullName.split(' ')[1][0]}</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        attrs={{
          'x-anchor.bottom-end': '$refs.dropDownTrigger',
        }}
        class="min-w-[300px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {AccountNavDropdownLinks.map((item) => {
            return (
              <a href={item.route}>
                <DropdownMenuItem class="justify-between gap-4 cursor-pointer">
                  {item.title}
                  <Icon i={item.icon as 'settings'} />
                </DropdownMenuItem>
              </a>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function SupportMenu() {
  return (
    <ul id="nav-menu" class="flex items-center gap-4">
      {SupportMenuLink.map((item) => {
        return (
          <li>
            <a
              href={item.route}
              title={item.title}
              target={item.target}
              class="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors ease-in duration-150 cursor-pointer"
            >
              {item.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function TeamSwitch() {
  return (
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
  )
}

export function CtxMenu(): JSX.Element {
  return (
    <div id="ctx-menu-navigation" class="max-h-[46px] sticky top-0 z-10 bg-background">
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
  )
}

export function Notifications(): JSX.Element {
  return (
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
  )
}
