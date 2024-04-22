import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { buttonVariants } from '#components'
import { Icon } from '#components'

function Pagination({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      class={cn('mx-auto flex w-full justify-center', className)}
      {...rest}
    >
      {children}
    </nav>
  )
}

function PaginationContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <ul class={cn('flex flex-row items-center gap-1', className)} {...rest}>
      {children}
    </ul>
  )
}

function PaginationItem({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <li class={cn('cursor-pointer', className)} {...rest}>
      {children}
    </li>
  )
}

interface PaginationLinkProps extends JsxElementProps {
  href: string
  active?: boolean
  size?: 'icon' | 'default' | 'sm' | 'lg' | null | undefined
}

function PaginationLink({
  children,
  ...props
}: PropsWithChildren<PaginationLinkProps>): JSX.Element {
  const { class: className, active = false, size = 'icon', href, ...rest } = props
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      class={cn(
        buttonVariants({
          variant: active ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

interface PaginationPreviousNextProps extends JsxElementProps {
  href: string
}

function PaginationPrevious({
  children,
  ...props
}: PropsWithChildren<PaginationPreviousNextProps>): JSX.Element {
  const { class: className, href, ...rest } = props
  return (
    <PaginationLink
      href={href}
      aria-label="Go to previous page"
      size="default"
      class={cn('gap-1 pl-2.5', className)}
      {...rest}
    >
      <Icon i="chevron-left" class="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  children,
  ...props
}: PropsWithChildren<PaginationPreviousNextProps>): JSX.Element {
  const { class: className, href, ...rest } = props
  return (
    <PaginationLink
      href={href}
      aria-label="Go to next page"
      size="default"
      class={cn('gap-1 pr-2.5', className)}
      {...rest}
    >
      <span>Next</span>
      <Icon i="chevron-right" class="h-4 w-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ ...props }: JsxElementProps): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <span aria-hidden class={cn('flex h-9 w-9 items-center justify-center', className)} {...rest}>
      <Icon i="dots" class="h-4 w-4" />
      <span class="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
