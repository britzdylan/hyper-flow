## AlertDialog Component API Documentation

### AlertDialog

A component that renders an alert dialog.

**Usage**

```jsx
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
} from '#components'

<AlertDialog>
  <AlertDialogTrigger>
    <Button>Open Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Alert Dialog</AlertDialogTitle>
      <AlertDialogDescription>This is a description for the alert dialog.</AlertDialogDescription>
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
```
