import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

interface LabelProps extends JsxElementProps {
  for: string
}

function Label({ children, ...props }: PropsWithChildren<LabelProps>): JSX.Element {
  const { for: htmlFor, class: className, ...rest } = props
  return (
    <label
      for={htmlFor}
      class={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...rest}
    >
      {children}
    </label>
  )
}

export { Label }
