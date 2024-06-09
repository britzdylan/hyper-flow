import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#primitives/card'
import { PropsWithChildren } from 'adonisjsx'

export interface InputCard {
  title: string
  description: string
  help: string
}

export function InputCard({ children, ...props }: PropsWithChildren<InputCard>) {
  const { title, description, help } = props
  return (
    <Card class="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter class="border-t border-border bg-secondary text-secondary-foreground font-medium p-6 py-4 justify-between">
        <small>{help}</small>
      </CardFooter>
    </Card>
  )
}
