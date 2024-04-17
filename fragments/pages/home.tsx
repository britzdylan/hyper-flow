import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  Switch,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  Label,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* <User class="mr-2 h-4 w-4" /> */}
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <CreditCard class="mr-2 h-4 w-4" /> */}
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <Settings class="mr-2 h-4 w-4" /> */}
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <Keyboard class="mr-2 h-4 w-4" /> */}
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* <Users class="mr-2 h-4 w-4" /> */}
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {/* <UserPlus class="mr-2 h-4 w-4" /> */}
                <span>Invite users</span>
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  {/* <Mail class="mr-2 h-4 w-4" /> */}
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <MessageSquare class="mr-2 h-4 w-4" /> */}
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* <PlusCircle class="mr-2 h-4 w-4" /> */}
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>
              {/* <Plus class="mr-2 h-4 w-4" /> */}
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {/* <Github class="mr-2 h-4 w-4" /> */}
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <LifeBuoy class="mr-2 h-4 w-4" /> */}
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            {/* <Cloud class="mr-2 h-4 w-4" /> */}
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {/* <LogOut class="mr-2 h-4 w-4" /> */}
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div class="flex flex-col items-center py-24 z-10 relative">
        <h2 class="text-lg font-semibold leading-8  ">AlpineJs Example with HMR</h2>
        <div class="py-4 inline-flex gap-2 items-center mx-auto" x-data="{ count: 0 }">
          <p>
            Count: <span x-text="count"></span>
          </p>
        </div>
        <div></div>
        <div>
          <Card class="w-[380px]">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4">
              <div class=" flex items-center space-x-4 rounded-md border p-4">
                <div class="flex-1 space-y-1">
                  <p class="text-sm font-medium leading-none">Push Notifications</p>
                  <p class="text-sm text-muted-foreground">Send notifications to device.</p>
                </div>
                <Switch
                  input={{
                    id: 'id',
                    name: 'name',
                    checked: true,
                  }}
                />
              </div>
              <div>
                <div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div class="space-y-1">
                    <p class="text-sm font-medium leading-none">Title</p>
                    <p class="text-sm text-muted-foreground">description</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button class="w-full">Mark all as read</Button>
            </CardFooter>
          </Card>

          <HoverCard>
            <HoverCardTrigger>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent class="w-80">
              <div class="flex justify-between space-x-4">
                <div class="space-y-1">
                  <h4 class="text-sm font-semibold">@nextjs</h4>
                  <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
                  <div class="flex items-center pt-2">
                    <span class="text-xs text-muted-foreground">Joined December 2021</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Label for="terms">Accept terms and conditions</Label>
          <Input placeholder="Email" type="email" />
        </div>
      </div>
    </div>
  )
}
