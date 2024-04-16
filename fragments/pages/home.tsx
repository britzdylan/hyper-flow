import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  Switch,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
  DrawerClose,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
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

          <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
              <div class="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button class="w-full" variant="outline">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
