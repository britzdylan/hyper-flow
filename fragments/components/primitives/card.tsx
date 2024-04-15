import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

function Card({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'rounded-lg border bg-card text-card-foreground shadow-sm'
  return <div class={cn(styles, className)}>{children}</div>
}

function CardHeader({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'flex flex-col space-y-1.5 p-6'

  return (
    <div class={cn(styles, className)} {...rest}>
      {children}
    </div>
  )
}

function CardTitle({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'text-2xl font-semibold leading-none tracking-tight'

  return (
    <h3 class={cn(styles, className)} {...rest}>
      {children}
    </h3>
  )
}

function CardDescription({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'text-sm text-muted-foreground'

  return (
    <p class={cn(styles, className)} {...rest}>
      {children}
    </p>
  )
}

function CardContent({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'p-6 pt-0'

  return (
    <div class={cn(styles, className)} {...rest}>
      {children}
    </div>
  )
}

function CardFooter({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'flex items-center p-6 pt-0'

  return (
    <div class={cn(styles, className)} {...rest}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
