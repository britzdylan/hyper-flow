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
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <div class="flex flex-col items-center py-24 z-10 relative">
        <h2 class="text-lg font-semibold leading-8  ">AlpineJs Example</h2>
        <div class="py-4 inline-flex gap-2 items-center mx-auto" x-data="{ count: 0 }">
          <Button variant="link" x-on:click="count++" asChild>
            <a href="login">Login</a>
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
          <Alert variant="destructive">
            <svg class="h-4 w-4">
              <use xlink:href="tabler-sprite.svg#tabler-alert-circle" />
            </svg>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Avatar>
            <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </div>
  )
}
