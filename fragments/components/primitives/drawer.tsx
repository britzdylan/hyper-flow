import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

interface DrawerProps extends JsxElementProps {
  children: [JSX.Element, JSX.Element]
}

/**
 * Renders an  dialog component.
 *
 * @param {DrawerProps} props - The props for the Drawer component.
 * @returns {JSX.Element} The rendered Drawer component.
 * @throws {Error} If the Drawer component does not have exactly two children.
 */
function Drawer({ children: [trigger, content], ...props }: DrawerProps): JSX.Element {
  const { class: className, ...rest } = props
  if (trigger && content) {
    return (
      <div x-data="{ open : false }">
        {trigger}
        <template x-teleport="body">
          <div
            x-bind:class="{ 'opacity-0 !-z-10 delay-300': !open, 'opacity-100 delay-0': open }"
            x-cloak
            x-trap="open"
            style="pointer-events: auto;"
            aria-hidden="true"
            x-on:click="open=false"
            attrs={{
              'x-on:keyup.escape': 'open=false',
            }}
            tabindex={1}
            class={cn(
              'fixed inset-0 z-50 bg-black/80 transition-all ease-out duration-100 transform origin-center',
              className
            )}
            {...rest}
          >
            {content}
          </div>
        </template>
      </div>
    )
  } else {
    throw new Error('Drawer component must have exactly two children.')
  }
}

interface DrawerContentProps extends JsxElementProps {}

/**
 * Renders the content of an  dialog.
 *
 * @component
 * @param {PropsWithChildren<DrawerContentProps>} props - The props for the DrawerContent component.
 * @returns {JSX.Element} The rendered DrawerContent component.
 */
function DrawerContent({ children, ...props }: PropsWithChildren<DrawerContentProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      x-data="{ idDrawerTitle: $id('dialog-title'), idDrawerDescription: $id('dialog-content') }"
      x-bind:id="$id('dialog-content')"
      x-bind:aria-labelledby="idDrawerTitle"
      x-bind:aria-describedby="idDrawerDescription"
      x-on:click="event.stopPropagation()"
      x-bind:class="{ '!bottom-[-100%]': !open, '!bottom-0': open }"
      tabindex={1}
      role="Drawer"
      class={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background transition-all ease-out duration-300 delay-50',
        className
      )}
      {...rest}
    >
      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </div>
  )
}

interface DrawerDescriptionProps extends JsxElementProps {}

/**
 * Renders the description for an  dialog.
 *
 * @component
 * @example
 * ```tsx
 * <DrawerDescription>
 *   This is the description for the  dialog.
 * </DrawerDescription>
 * ```
 *
 * @param {PropsWithChildren<DrawerDescriptionProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function DrawerDescription({
  children,
  ...props
}: PropsWithChildren<DrawerDescriptionProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <p
      x-bind:id="idDrawerDescription"
      class={cn('text-sm text-muted-foreground', className)}
      {...rest}
      safe
    >
      {children}
    </p>
  )
}

interface DrawerFooterProps extends JsxElementProps {}

/**
 * Renders the footer of an  dialog.
 *
 * @param {PropsWithChildren<DrawerFooterProps>} props - The props for the DrawerFooter component.
 * @returns {JSX.Element} The rendered DrawerFooter component.
 */
function DrawerFooter({ children, ...props }: PropsWithChildren<DrawerFooterProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div class={cn('mt-auto flex flex-col gap-2 p-4', className)} {...rest}>
      {children}
    </div>
  )
}

interface DrawerHeaderProps extends JsxElementProps {}

/**
 * Renders the header of an  dialog.
 *
 * @param {PropsWithChildren<DrawerHeaderProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function DrawerHeader({ children, ...props }: PropsWithChildren<DrawerHeaderProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <div class={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...rest}>
      {children}
    </div>
  )
}

interface DrawerTitleProps extends JsxElementProps {}

/**
 * Renders the title of an  dialog.
 *
 * @component
 * @example
 * ```tsx
 * <DrawerTitle>This is the title</DrawerTitle>
 * ```
 */
function DrawerTitle({ children, ...props }: PropsWithChildren<DrawerTitleProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <h2
      x-bind:id="idDrawerTitle"
      class={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...rest}
      safe
    >
      {children}
    </h2>
  )
}

interface DrawerTriggerProps extends JsxElementProps {}

/**
 * Renders a trigger element for the Drawer component.
 *
 * @param {PropsWithChildren<DrawerTriggerProps>} props - The component props.
 * @returns {JSX.Element} The rendered trigger element.
 */
function DrawerTrigger({ children, ...props }: PropsWithChildren<DrawerTriggerProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span x-on:click="open=!open" class={cn('cursor-pointer', className)} {...rest}>
      {children}
    </span>
  )
}

function DrawerClose({ children }: PropsWithChildren): JSX.Element {
  return <span x-on:click="open=!open">{children}</span>
}
export {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
}
