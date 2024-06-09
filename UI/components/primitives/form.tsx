import { PropsWithChildren, csrfField } from 'adonisjsx'
import { cn } from '#ui/lib/utils'
import { JsxElementProps } from '#ui/lib/types'

interface FormProps extends JsxElementProps {
  id: string
  name: string
  autocomplete?: string
}

/**
 * @component Form
 * @requires children
 * @returns {JSX.Element} The rendered Form component.
 *
 * @description this creates an html form element with csrf field.
 * @example  <Form>...</Form>
 */
export function Form({ children, ...props }: PropsWithChildren<FormProps>): JSX.Element {
  const { class: className, ...rest } = props

  return (
    <form
      class={cn('flex flex-col gap-2 w-full items-start', className)}
      {...rest}
      hx-indicator=".indicator"
      hx-swap="outerHTML"
    >
      {csrfField()}
      {children}
    </form>
  )
}
