import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

interface CollapsibleProps extends JsxElementProps {
  defaultOpen?: boolean
}

function Collapsible({ children, ...props }: PropsWithChildren<CollapsibleProps>): JSX.Element {
  const { class: className, defaultOpen = true, ...rest } = props

  return (
    <div x-data={`{open: ${defaultOpen}}`} class={cn(className)} x-id="['collapsible']" {...rest}>
      {children}
    </div>
  )
}

function CollapsibleTrigger({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span
      x-bind:aria-expanded="open"
      x-bind:aria-controls="$id('collapsible')"
      x-on:click="open = !open"
      {...rest}
    >
      {children}
    </span>
  )
}

function CollapsibleContent({
  children,
  ...props
}: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div x-bind:id="$id('collapsible')" x-show="open" x-cloak class={cn(className)} {...rest}>
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
