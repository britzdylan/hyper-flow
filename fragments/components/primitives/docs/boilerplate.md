import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

function HoverCard({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
const { class: className, ...rest } = props
return (
<div class={cn('relative', className)} {...rest}>
{children}
</div>
)
}
