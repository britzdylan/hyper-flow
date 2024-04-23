import { cn } from '#fragments/lib/utils'
import type { IconNames, JsxElementProps } from '#fragments/lib/types'

interface IconProps extends JsxElementProps {
  i: IconNames
}

/**
 * @component Icon
 * @description Renders a component for Iconoir icons.
 * @description To target the icon target the :before pseudo-element.
 * @example <Icon i="home" class="before:text-red-500" />
 * @param {IconNames} props.i - The name of the icon.
 * @returns {JSX.Element} The rendered icon component.
 * @link https://iconoir.com/
 */
function Icon({ i, ...props }: IconProps): JSX.Element {
  const { class: className, ...rest } = props

  return <i class={[cn('before:w-4 before:h-4'), className, `iconoir-${i} `]} {...rest}></i>
}

export { Icon }
