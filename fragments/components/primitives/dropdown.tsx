import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { Icon } from '#components'

function DropdownMenu({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  return (
    <div
      x-data="{ open : false }"
      attrs={{
        'x-on:click.away': 'open=false',
        'x-on:keydown.escape': 'open=false',
      }}
      {...props}
    >
      {children}
    </div>
  )
}

function DropdownMenuTrigger({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span
      x-ref="dropDownTrigger"
      x-on:click="open=!open"
      class={cn('cursor-pointer', className)}
      {...rest}
    >
      {children}
    </span>
  )
}

function DropdownMenuContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const styles =
    'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md'
  return (
    <div
      x-show="open"
      x-transition
      attrs={{ 'x-anchor.offset.15': '$refs.dropDownTrigger' }}
      role="menu"
      tabindex={-1}
      class={cn(styles, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

function DropdownMenuGroup({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div role="group" class={cn(className)} {...rest}>
      {children}
    </div>
  )
}

function DropdownMenuLabel({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div class={cn('px-2 py-1.5 text-sm font-semibold', className)} {...rest} safe>
      {children}
    </div>
  )
}

function DropdownMenuSeparator({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      role="separator"
      aria-direction="horizontal"
      class={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...rest}
    ></div>
  )
}

interface DropdownMenuItemProps extends JsxElementProps {
  disabled?: boolean
}

function DropdownMenuItem({
  children,
  ...props
}: PropsWithChildren<DropdownMenuItemProps>): JSX.Element {
  const { class: className, disabled = false, ...rest } = props

  const defaultStyles =
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
  const disabledStyles = disabled ? 'pointer-events-none opacity-50' : ''
  const styles = `${defaultStyles} ${disabledStyles}`

  return (
    <div role="menuItem" tabindex={-1} class={cn(styles, className)} {...rest}>
      {children}
    </div>
  )
}

function DropdownMenuShortcut({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span class={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...rest} safe>
      {children}
    </span>
  )
}

function DropdownMenuSub({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  return (
    <div class="relative group" x-id="['sub-menu']" {...props}>
      {children}
    </div>
  )
}

function DropdownMenuSubTrigger({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  const defaultStyles =
    'flex cursor-default select-none  items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent hover:bg-accent hover:text-accent-foreground focus:text-accent-foreground transition-colors'
  return (
    <div
      aria-haspopup="menu"
      aria-expanded="false"
      tabindex={-1}
      aria-controls="subMenu"
      class={cn(defaultStyles, className)}
      x-bind:class={`'bg-accent' : subOpen`}
      x-on:click="subOpen=!subOpen"
      {...rest}
    >
      {children}
      <Icon i="nav-arrow-right" class="ml-auto h-4 w-4" />
    </div>
  )
}

function DropdownMenuSubContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  const styles =
    'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg absolute  top-0 right-[-60%] hidden group-hover:block'

  return (
    <div x-transition role="menu" tabindex={-1} class={cn(styles, className)} {...rest}>
      {children}
    </div>
  )
}

export {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
}
