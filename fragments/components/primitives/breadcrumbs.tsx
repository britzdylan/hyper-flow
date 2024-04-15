import { PropsWithChildren } from 'adonisjsx'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

function Breadcrumb({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <nav class={cn(className)} aria-label="breadcrumb" {...rest}>
      {children}
    </nav>
  )
}

function BreadcrumbList({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles =
    'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5'
  return (
    <ol class={cn(styles, className)} {...rest}>
      {children}
    </ol>
  )
}

function BreadcrumbItem({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'inline-flex items-center gap-1.5'
  return (
    <li class={cn(styles, className)} {...rest}>
      {children}
    </li>
  )
}

interface BreadcrumbLinkProps extends JsxElementProps {
  href?: string
  asChild?: boolean
}

function BreadcrumbLink({
  children,
  ...props
}: PropsWithChildren<BreadcrumbLinkProps>): JSX.Element {
  const { href, class: className, asChild = false, ...rest } = props
  const styles = 'transition-colors hover:text-foreground'

  if (asChild) {
    return (
      <span class={cn(styles, className)} {...rest}>
        {children}
      </span>
    )
  }

  return (
    <a href={href} class={cn(styles, className)} {...rest} safe>
      {children}
    </a>
  )
}

function BreadcrumbPage({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'font-normal text-foreground'
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      class={cn(styles, className)}
      {...rest}
      safe
    >
      {children}
    </span>
  )
}

function BreadcrumbEllipsis({ ...props }: JsxElementProps): JSX.Element {
  const { class: className, ...rest } = props
  const styles = 'flex h-9 w-9 items-center justify-center'
  return (
    <span role="presentation" aria-hidden="true" class={cn(styles, className)} {...rest}>
      <svg class="h-4 w-4">
        <use xlink:href="tabler-sprite.svg#tabler-dots" />
      </svg>
      <span class="sr-only">More</span>
    </span>
  )
}

function BreadcrumbSeparator({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <li role="presentation" aria-hidden="true" class={cn('[&>svg]:size-3.5', className)} {...rest}>
      {children ?? (
        <svg class="h-4 w-4">
          <use xlink:href="tabler-sprite.svg#tabler-chevron-right" />
        </svg>
      )}
    </li>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbEllipsis,
  BreadcrumbSeparator,
}
