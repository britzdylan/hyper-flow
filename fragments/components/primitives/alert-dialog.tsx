import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

interface AlertDialogProps extends JsxElementProps {
  children: [JSX.Element, JSX.Element]
}

/**
 * Renders an alert dialog component.
 *
 * @param {AlertDialogProps} props - The props for the AlertDialog component.
 * @returns {JSX.Element} The rendered AlertDialog component.
 * @throws {Error} If the AlertDialog component does not have exactly two children.
 */
function AlertDialog({ children: [trigger, content], ...props }: AlertDialogProps): JSX.Element {
  const { class: className, ...rest } = props
  if (trigger && content) {
    return (
      <div x-data="{ open : false }">
        {trigger}
        <template x-teleport="body">
          <div
            x-show="open"
            x-transition
            style="pointer-events: auto;"
            aria-hidden="true"
            class={cn('fixed inset-0 z-50 bg-black/80', className)}
            {...rest}
          >
            {content}
          </div>
        </template>
      </div>
    )
  } else {
    throw new Error('AlertDialog component must have exactly two children.')
  }
}

/**
 * Renders an action element for the AlertDialog component.
 *
 * @param {PropsWithChildren} props - The component props.
 * @returns {JSX.Element} The rendered action element.
 */
function AlertDialogAction({ children }: PropsWithChildren): JSX.Element {
  return <span x-on:click="open=!open">{children}</span>
}

/**
 * Renders a cancel button for the alert dialog.
 *
 * @param children - The content to be displayed inside the cancel button.
 * @returns The JSX element representing the cancel button.
 */
function AlertDialogCancel({ children }: PropsWithChildren): JSX.Element {
  return <span x-on:click="open=!open">{children}</span>
}

interface AlertDialogContentProps extends JsxElementProps {}

/**
 * Renders the content of an alert dialog.
 *
 * @component
 * @param {PropsWithChildren<AlertDialogContentProps>} props - The props for the AlertDialogContent component.
 * @returns {JSX.Element} The rendered AlertDialogContent component.
 */
function AlertDialogContent({
  children,
  ...props
}: PropsWithChildren<AlertDialogContentProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div
      x-data="{ idDialogTitle: $id('alert-dialog-title'), idDialogDescription: $id('alert-dialog-content') }"
      x-bind:id="$id('alert-dialog-content')"
      x-bind:aria-labelledby="idDialogTitle"
      x-bind:aria-describedby="idDialogDescription"
      tabindex={1}
      role="alertdialog"
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

interface AlertDialogDescriptionProps extends JsxElementProps {}

/**
 * Renders the description for an alert dialog.
 *
 * @component
 * @example
 * ```tsx
 * <AlertDialogDescription>
 *   This is the description for the alert dialog.
 * </AlertDialogDescription>
 * ```
 *
 * @param {PropsWithChildren<AlertDialogDescriptionProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function AlertDialogDescription({
  children,
  ...props
}: PropsWithChildren<AlertDialogDescriptionProps>): JSX.Element {
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

interface AlertDialogFooterProps extends JsxElementProps {}

/**
 * Renders the footer of an alert dialog.
 *
 * @param {PropsWithChildren<AlertDialogFooterProps>} props - The props for the AlertDialogFooter component.
 * @returns {JSX.Element} The rendered AlertDialogFooter component.
 */
function AlertDialogFooter({
  children,
  ...props
}: PropsWithChildren<AlertDialogFooterProps>): JSX.Element {
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

interface AlertDialogHeaderProps extends JsxElementProps {}

/**
 * Renders the header of an alert dialog.
 *
 * @param {PropsWithChildren<AlertDialogHeaderProps>} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
function AlertDialogHeader({
  children,
  ...props
}: PropsWithChildren<AlertDialogHeaderProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <div class={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...rest}>
      {children}
    </div>
  )
}

interface AlertDialogTitleProps extends JsxElementProps {}

/**
 * Renders the title of an alert dialog.
 *
 * @component
 * @example
 * ```tsx
 * <AlertDialogTitle>This is the title</AlertDialogTitle>
 * ```
 */
function AlertDialogTitle({
  children,
  ...props
}: PropsWithChildren<AlertDialogTitleProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <h2 x-bind:id="idDialogTitle" class={cn('text-lg font-semibold', className)} {...rest} safe>
      {children}
    </h2>
  )
}

interface AlertDialogTriggerProps extends JsxElementProps {}

/**
 * Renders a trigger element for the AlertDialog component.
 *
 * @param {PropsWithChildren<AlertDialogTriggerProps>} props - The component props.
 * @returns {JSX.Element} The rendered trigger element.
 */
function AlertDialogTrigger({
  children,
  ...props
}: PropsWithChildren<AlertDialogTriggerProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span x-on:click="open=!open" class={cn('cursor-pointer', className)} {...rest}>
      {children}
    </span>
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
}
