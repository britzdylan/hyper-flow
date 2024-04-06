import { cva, type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface AlertTitleProps extends JsxElementProps {}

/**
 * Renders the title of an alert.
 *
 * @param {PropsWithChildren<AlertTitleProps>} props - The props for the AlertTitle component.
 * @returns {JSX.Element} The rendered AlertTitle component.
 */
function AlertTitle({ children, ...props }: PropsWithChildren<AlertTitleProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <h5 class={cn('mb-1 font-medium leading-none tracking-tight', className)} {...rest} safe>
      {children}
    </h5>
  )
}

interface AlertDescriptionProps extends JsxElementProps {}

/**
 * Renders the description for an alert.
 *
 * @component
 * @example
 * ```tsx
 * <AlertDescription>
 *   This is the description for the alert.
 * </AlertDescription>
 * ```
 *
 * @param {PropsWithChildren<AlertDescriptionProps>} props - The props for the `AlertDescription` component.
 * @returns {JSX.Element} The rendered `AlertDescription` component.
 */
function AlertDescription({
  children,
  ...props
}: PropsWithChildren<AlertDescriptionProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <div {...rest} class={cn('text-sm [&_p]:leading-relaxed', className)}>
      {children}
    </div>
  )
}

interface AlertProps extends VariantProps<typeof alertVariants>, JsxElementProps {}

/**
 * Renders an alert component.
 *
 * @param {PropsWithChildren<AlertProps>} props - The props for the alert component.
 * @returns {JSX.Element} The rendered alert component.
 */
function Alert({ children, ...props }: PropsWithChildren<AlertProps>): JSX.Element {
  const { variant, class: className, ...rest } = props
  return (
    <div role="alert" class={cn(alertVariants({ variant }), className)} {...rest}>
      {children}
    </div>
  )
}

export { AlertTitle, AlertDescription, Alert }
