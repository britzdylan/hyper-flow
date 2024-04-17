import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

function HoverCard({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div class={cn('relative', className)} x-data="{showHoverCard : false}" {...rest}>
      {children}
    </div>
  )
}

function HoverCardTrigger({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span
      x-ref="hoverCardTrigger"
      x-on:mouseover="showHoverCard=true"
      x-on:mouseleave="showHoverCard=false"
      class={cn(className)}
      {...rest}
    >
      {children}
    </span>
  )
}

function HoverCardContent({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props

  const styles =
    'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none'
  return (
    <div
      x-show="showHoverCard"
      x-anchor="$refs.hoverCardTrigger"
      x-on:mouseover="showHoverCard=true"
      x-on:mouseleave="showHoverCard=false"
      x-transition
      attrs={{
        'x-anchor.offset.5': '$refs.hoverCardTrigger',
        'x-transition.delay.500ms': true,
      }}
      class={cn(styles, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
