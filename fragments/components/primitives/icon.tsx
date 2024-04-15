import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

interface IconProps extends JsxElementProps {
  i: string
}

function Icon({ i, ...props }: IconProps): JSX.Element {
  const { class: className, ...rest } = props
  const finalIcon = 'tabler-sprite.svg#tabler-' + i
  return (
    <svg class={[cn('w-4 h-4'), className]} {...rest}>
      <use xlink:href={finalIcon} />
    </svg>
  )
}

export { Icon }
