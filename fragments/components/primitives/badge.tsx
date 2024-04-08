import { PropsWithChildren } from 'adonisjsx'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants>, JsxElementProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

/**
 * Renders a badge component.
 *
 * @param {PropsWithChildren<BadgeProps>} props - The props for the badge component.
 * @returns {JSX.Element} The rendered badge component.
 */
function Badge({ children, ...props }: PropsWithChildren<BadgeProps>): JSX.Element {
  const { variant, class: className } = props
  return (
    <div class={cn(badgeVariants({ variant }), className)} {...props} safe>
      {children}
    </div>
  )
}

export { Badge }
