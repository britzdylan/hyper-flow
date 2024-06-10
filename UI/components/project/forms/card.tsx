import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#components'
import { PropsWithChildren } from 'adonisjsx'

export interface FormCard {
  title: string
  description: string
  help?: string
}

export function FormCard({ children, ...props }: PropsWithChildren<FormCard>) {
  const { title, description, help } = props
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent class="flex flex-col gap-4">{children}</CardContent>

      <CardFooter class="border-t border-border bg-secondary text-secondary-foreground font-medium p-6 py-4 justify-between">
        <small>{help}</small>
        <Button size="sm" class="ml-auto" type="submit">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  )
}
