import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { Icon } from '#components'

function NavigationMenu({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <nav
      aria-label="Main"
      dir="ltr"
      x-ref="navigationMenu"
      class={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...rest}
    >
      <div style="position: relative;">{children}</div>
    </nav>
  )
}

function NavigationMenuTrigger({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  const style =
    'inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
  return (
    <button class={cn(style, className)} {...rest}>
      {children}
      <Icon
        i="chevron-down"
        class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
        aria-hidden="true"
      />
    </button>
  )
}

function NavigationMenuItem({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <li class={cn('group', className)} {...rest}>
      {children}
    </li>
  )
}

function NavigationMenuContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <div
      x-transition
      x-anchor="$refs.navigationMenu"
      class={cn(
        'w-full md:absolute md:w-auto opacity-0 pointer-events-none h-0 transform translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:h-max hover:opacity-100 transition-all duration-150 ease-in',
        className
      )}
      {...rest}
    >
      <div class="origin-top-center relative mt-1.5  w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
        {children}
      </div>
    </div>
  )
}

interface NavigationMenuLinkProps extends JsxElementProps {
  href: string
  title: string
}
function NavigationMenuLink({
  children,
  ...props
}: PropsWithChildren<NavigationMenuLinkProps>): JSX.Element {
  const { class: className, href, title, ...rest } = props

  return (
    <a
      href={href}
      title={title}
      class={cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

function NavigationMenuList({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <ul
      dir="ltr"
      class={cn('flex flex-1 list-none items-center justify-center space-x-1', className)}
      {...rest}
    >
      {children}
    </ul>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
}
