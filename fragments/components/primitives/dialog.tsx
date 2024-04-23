import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { Icon } from '#components'

interface DialogProps extends JsxElementProps {
  children: [JSX.Element, JSX.Element]
}

/**
 * Renders an  dialog component.
 *
 * @param {DialogProps} props - The props for the Dialog component.
 * @returns {JSX.Element} The rendered Dialog component.
 * @throws {Error} If the Dialog component does not have exactly two children.
 */
function Dialog({ children: [trigger, content], ...props }: DialogProps): JSX.Element {
  const { class: className, ...rest } = props
  if (trigger && content) {
    return (
      <div x-data="{ open : false }">
        {trigger}
        <template x-teleport="body">
          <div
            x-show="open"
            x-trap="open"
            x-transition
            style="pointer-events: auto;"
            aria-hidden="true"
            x-on:click="open=false"
            attrs={{
              'x-on:keyup.escape': 'open=false',
            }}
            tabindex={1}
            class={cn('fixed inset-0 z-50 bg-black/80', className)}
            {...rest}
          >
            {content}
          </div>
        </template>
      </div>
    )
  } else {
    throw new Error('Dialog component must have exactly two children.')
  }
}

interface DialogContentProps extends JsxElementProps {}

/**
 * Renders the content of an  dialog.
 *
 * @component
 * @param {PropsWithChildren<DialogContentProps>} props - The props for the DialogContent component.
 * @returns {JSX.Element} The rendered DialogContent component.
 */
function DialogContent({ children, ...props }: PropsWithChildren<DialogContentProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      x-data="{ idDialogTitle: $id('dialog-title'), idDialogDescription: $id('dialog-content') }"
      x-bind:id="$id('dialog-content')"
      x-bind:aria-labelledby="idDialogTitle"
      x-bind:aria-describedby="idDialogDescription"
      x-on:click="event.stopPropagation()"
      tabindex={1}
      role="Dialog"
      class={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

interface DialogDescriptionProps extends JsxElementProps {}

/**
 * Renders the description for an  dialog.
 *
 * @component
 * @example
 * ```tsx
 * <DialogDescription>
 *   This is the description for the  dialog.
 * </DialogDescription>
 * ```
 *
 * @param {PropsWithChildren<DialogDescriptionProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function DialogDescription({
  children,
  ...props
}: PropsWithChildren<DialogDescriptionProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <p
      x-bind:id="idDialogDescription"
      class={cn('text-sm text-muted-foreground', className)}
      {...rest}
      safe
    >
      {children}
    </p>
  )
}

interface DialogFooterProps extends JsxElementProps {}

/**
 * Renders the footer of an  dialog.
 *
 * @param {PropsWithChildren<DialogFooterProps>} props - The props for the DialogFooter component.
 * @returns {JSX.Element} The rendered DialogFooter component.
 */
function DialogFooter({ children, ...props }: PropsWithChildren<DialogFooterProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

interface DialogHeaderProps extends JsxElementProps {}

/**
 * Renders the header of an  dialog.
 *
 * @param {PropsWithChildren<DialogHeaderProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function DialogHeader({ children, ...props }: PropsWithChildren<DialogHeaderProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <div
      class={cn('flex flex-col space-y-2 text-center sm:text-left relative', className)}
      {...rest}
    >
      <Icon class="absolute right-0 top-0 cursor-pointer" x-on:click="open=false" i="xmark" />

      {children}
    </div>
  )
}

interface DialogTitleProps extends JsxElementProps {}

/**
 * Renders the title of an  dialog.
 *
 * @component
 * @example
 * ```tsx
 * <DialogTitle>This is the title</DialogTitle>
 * ```
 */
function DialogTitle({ children, ...props }: PropsWithChildren<DialogTitleProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <h2 x-bind:id="idDialogTitle" class={cn('text-lg font-semibold', className)} {...rest} safe>
      {children}
    </h2>
  )
}

interface DialogTriggerProps extends JsxElementProps {}

/**
 * Renders a trigger element for the Dialog component.
 *
 * @param {PropsWithChildren<DialogTriggerProps>} props - The component props.
 * @returns {JSX.Element} The rendered trigger element.
 */
function DialogTrigger({ children, ...props }: PropsWithChildren<DialogTriggerProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span x-on:click="open=!open" class={cn('cursor-pointer', className)} {...rest}>
      {children}
    </span>
  )
}

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
