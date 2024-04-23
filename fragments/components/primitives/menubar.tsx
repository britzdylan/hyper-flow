import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { Icon } from '#components'

function Menubar({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      role="menubar"
      class={cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

function MenubarMenu({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      x-data="{ open: false }"
      x-id="['MenuBarMenu','MenuBarTrigger']"
      x-bind:id="$id('MenuBarMenu')"
      class={cn(className)}
      {...rest}
    >
      {children}
    </div>
  )
}

function MenubarTrigger({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <button
      type="button"
      role="menuitem"
      aria-haspopup="menu"
      x-ref="$id('MenuBarTrigger')"
      tabindex={-1}
      x-bind:id="$id('MenuBarTrigger')"
      x-bind:class="{ 'bg-accent': open, 'text-accent-foreground': open }"
      x-on:click="open = !open"
      attrs={{
        'x-on:click.away': 'open = false',
        'x-on:keydown.escape': 'open = false',
        'x-on:keydown.tab': 'open = false',
        'x-on:mouseout': 'open = false',
      }}
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent hover:bg-accent hover:text-accent-foreground focus:text-accent-foreground',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

function MenubarContent({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      x-show="open"
      role="menu"
      x-cloak
      aria-labelledby="$id('MenuBarTrigger')"
      x-transition
      x-anchor="$id('MenuBarTrigger')"
      tabindex={-1}
      attrs={{
        'x-on:mouseover': 'open = true',
      }}
      class={cn(
        'z-50 min-w-[12rem]  rounded-md absolute border bg-popover p-1 text-popover-foreground shadow-md',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

interface MenubarItemProps extends JsxElementProps {
  disabled?: boolean
}

function MenubarItem({ children, ...props }: PropsWithChildren<MenubarItemProps>): JSX.Element {
  const { class: className, disabled = false, ...rest } = props
  return (
    <div
      role="menuitem"
      x-bind:class={`{ 'opacity-50 pointer-events-none': ${disabled} }`}
      tabindex={-1}
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground ',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

function MenubarSeparator({ ...props }: JsxElementProps): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      role="separator"
      aria-direction="horizontal"
      class={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...rest}
      safe
    ></div>
  )
}

function MenubarShortcut({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...rest}>
      {children}
    </span>
  )
}

function MenubarLabel({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div class={cn('px-2 py-1.5 text-sm font-semibold', className)} {...rest} safe>
      {children}
    </div>
  )
}

interface MenubarCheckboxItemProps extends JsxElementProps {
  disabled?: boolean
  checked?: boolean
}

function MenubarCheckboxItem({
  children,
  ...props
}: PropsWithChildren<MenubarCheckboxItemProps>): JSX.Element {
  const { class: className, disabled = false, checked = false, ...rest } = props
  return (
    <div
      role="menuitemcheckbox"
      tabindex={-1}
      aria-checked={checked}
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground',
        className,
        disabled ? 'opacity-50 pointer-events-none' : ''
      )}
      {...rest}
    >
      {checked ? (
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Icon i="check" class="h-4 w-4" />
        </span>
      ) : null}
      {children}
    </div>
  )
}

interface MenubarRadioGroupProps extends JsxElementProps {
  value?: string
}

function MenubarRadioGroup({
  children,
  ...props
}: PropsWithChildren<MenubarRadioGroupProps>): JSX.Element {
  const { class: className, value = null, ...rest } = props
  return (
    <div x-data={`{ selected: '${value}' }`} role="group" class={cn(className)} {...rest}>
      {children}
    </div>
  )
}

interface MenubarRadioItemProps extends JsxElementProps {
  disabled?: boolean
  value?: string
}

function MenubarRadioItem({
  children,
  ...props
}: PropsWithChildren<MenubarRadioItemProps>): JSX.Element {
  const { class: className, disabled = false, value, ...rest } = props
  return (
    <div
      x-on:click={`selected = '${value}'`}
      role="menuitemcheckbox"
      tabindex={-1}
      class={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground',
        className,
        disabled ? 'opacity-50 pointer-events-none' : ''
      )}
      {...rest}
    >
      <span
        x-show={`selected === '${value}'`}
        class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
      >
        <div class="h-4 w-4 bg-black rounded-full" />
      </span>

      {children}
    </div>
  )
}

function MenubarSub({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div x-id="['MenubarSubTrigger']" class={cn('group relative', className)} {...rest}>
      {children}
    </div>
  )
}

function MenubarSubTrigger({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      role="menuitem"
      aria-haspopup="menu"
      x-ref="$id('MenubarSubTrigger')"
      tabindex={-1}
      x-bind:id="$id('MenubarSubTrigger')"
      class={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent group-hover:bg-accent focus:text-accent-foreground group-hover:text-accent-foreground',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

function MenubarSubContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      role="menu"
      x-cloak
      aria-labelledby="$id('MenubarSubTrigger')"
      x-transition
      x-anchor="$id('MenubarSubTrigger')"
      tabindex={-1}
      class={cn(
        'z-50 min-w-[12rem] right-[-100%] top-0 overflow-hidden rounded-md absolute border bg-popover p-1 text-popover-foreground shadow-md hidden group-hover:block',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarRadioGroup,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
