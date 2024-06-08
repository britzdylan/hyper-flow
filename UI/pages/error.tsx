import { Alert, AlertDescription, AlertTitle } from '#components'

type PageError = {
  title: string
  description: string
}

export default function ErrorPage({ title, description }: PageError): JSX.Element {
  return (
    <div class="relative h-full w-full bg-muted text-2xl inline-flex justify-center items-center">
      <Alert>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  )
}
