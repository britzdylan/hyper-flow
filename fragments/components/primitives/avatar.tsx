import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import type { JsxElementProps } from '#fragments/lib/types'

/**
 * Renders a fallback avatar component.
 *
 * @param {PropsWithChildren<JsxElementProps>} props - The component props.
 * @returns {JSX.Element} The rendered fallback avatar component.
 */
function AvatarFallback({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  const { class: className } = props
  return (
    <div
      class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
    >
      {children}
    </div>
  )
}

interface AvatarImageProps extends JsxElementProps {
  src: string
  alt: string
}

/**
 * Renders an avatar image.
 *
 * @param {PropsWithChildren<AvatarImageProps>} props - The props for the AvatarImage component.
 * @returns {JSX.Element} The rendered AvatarImage component.
 */
function AvatarImage({ children, ...props }: PropsWithChildren<AvatarImageProps>) {
  const { class: className, src, alt, ...rest } = props
  return <img src={src} alt={alt} class={cn('aspect-square h-full w-full', className)} {...rest} />
}

/**
 * Renders an avatar component.
 *
 * @param {PropsWithChildren<JsxElementProps>} props - The props for the Avatar component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
function Avatar({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  const { class: className } = props
  return (
    <span class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}>
      {children}
    </span>
  )
}

export { AvatarFallback, AvatarImage, Avatar }
