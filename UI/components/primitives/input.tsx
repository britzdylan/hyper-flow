import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#ui/lib/utils'
import { JsxElementProps } from '#ui/lib/types'

type TInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'file'

interface InputProps extends JsxElementProps {
  placeholder: string
  name: string
  value?: string
  required?: boolean
  type?: TInputType
}

/**
 * @component Input (Required)
 * @param {placeholder} props.placeholder - The placeholder text for the input.
 * @param {type} props.type - The type of input. Default is 'text'.
 * @returns {JSX.Element} The rendered Input component.
 *
 * @description The Input component is used to create an input element.
 * @example  <Input placeholder="Enter your name" />
 */
function Input({ children, ...props }: PropsWithChildren<InputProps>): JSX.Element {
  const { class: className, type = 'text', placeholder, ...rest } = props
  return (
    <input
      type={type}
      placeholder={placeholder}
      class={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...rest}
    >
      {children}
    </input>
  )
}
interface FormInputProps extends InputProps {
  error?: string
  label?: string
  help?: string
}
function FormInput({ children, ...props }: PropsWithChildren<FormInputProps>): JSX.Element {
  const { class: className, type = 'text', placeholder, error, label, help, ...rest } = props
  const stateStyling = error ? 'ring-2 ring-red-500 ring-offset-1' : 'ring-0'
  return (
    <div class="w-full">
      {help || label ? (
        <div class="inline-flex justify-between w-full py-1">
          <label class="text-sm font-medium leading-none">{label}</label>
          <span class="text-sm text-muted-foreground">{help}</span>
        </div>
      ) : null}
      <Input
        class={cn(className, ' ', stateStyling)}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error ? (
        <div class="inline-flex justify-between w-full py-1">
          <span class="text-sm text-muted-foreground">{error}</span>
        </div>
      ) : null}
    </div>
  )
}

export { Input, FormInput }
