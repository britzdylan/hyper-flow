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
  Menubar,
  MenubarContent,
  MenubarTrigger,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarShortcut,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <NavigationMenu class="w-full mx-auto z-50">
        <NavigationMenuList>
          <NavigationMenuItem id="home">
            <NavigationMenuTrigger>
              <a href="#">Home</a>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li class="row-span-3">
                  {/* <NavigationMenuLink asChild> */}
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and paste into your apps.
                      Accessible. Customizable. Open Source.
                    </p>
                  </a>
                  {/* </NavigationMenuLink> */}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem id="away">
            <NavigationMenuTrigger>
              <a href="#">Away</a>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li class="row-span-3">
                  {/* <NavigationMenuLink asChild> */}
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div class="mb-2 mt-4 text-lg font-medium">awau/ui</div>
                  </a>
                  {/* </NavigationMenuLink> */}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem id="about">
            <NavigationMenuLink href="#" title="link">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem id="services">
            <NavigationMenuLink href="#" title="link">
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem id="contact">
            <NavigationMenuLink href="#" title="link">
              {' '}
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="benoit">
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
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
