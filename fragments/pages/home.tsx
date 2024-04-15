import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
  Switch,
  CheckBox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Icon,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <div class="flex flex-col items-center py-24 z-10 relative">
        <h2 class="text-lg font-semibold leading-8  ">AlpineJs Example</h2>
        <div class="py-4 inline-flex gap-2 items-center mx-auto" x-data="{ count: 0 }">
          <Button variant="outline" x-on:click="count++">
            <svg class="h-4 w-4 mr-2">
              <use xlink:href="tabler-sprite.svg#tabler-chevron-right" />
            </svg>
            With Icon
          </Button>
          <p>
            Count: <span x-text="count"></span>
          </p>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button>Open Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
                <AlertDialogDescription>
                  This is a description for the alert dialog.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  <Button variant="outline">Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Button>Ok</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
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

          <Collapsible class="w-[350px] space-y-2">
            <div class="flex items-center justify-between space-x-4 px-4">
              <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <CollapsibleTrigger>
                <Button variant="ghost" size="sm" class="w-9 p-0">
                  <Icon i="selector" class="h-4 w-4" />
                  <span class="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
            <CollapsibleContent class="space-y-2">
              <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
              <div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}
