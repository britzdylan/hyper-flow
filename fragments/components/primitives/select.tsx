import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'
import { Icon } from '#components'

const selectData = () => ({
  init() {},
  value: '',
  open: false,
  setSelected(value: string) {
    this.value = value
    this.open = false
  },
  toggleOpen() {
    this.open = !this.open
  },
})

function Select({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <div x-data={`${selectData}`} class={cn('relative w-full', className)} {...rest}>
      {children}
    </div>
  )
}

function SelectTrigger({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <button
      x-on:click="toggleOpen"
      x-ref="selectTrigger"
      type="button"
      class={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        className
      )}
      {...rest}
    >
      <span x-text="value || 'Choose an option'" class="line-clamp-1" />
      <Icon i="nav-arrow-down" class="h-4 w-4 opacity-50" />
    </button>
  )
}

function SelectContent({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <ul
      x-show="open"
      x-anchor="$refs.selectTrigger"
      class={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md w-full',
        className
      )}
      {...rest}
    >
      {children}
    </ul>
  )
}

function SelectGroup({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <span class={cn(className)} {...rest}>
      {children}
    </span>
  )
}

function SelectLabel({ children, ...props }: PropsWithChildren<JsxElementProps>): JSX.Element {
  const { class: className, ...rest } = props
  return (
    <p class={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...rest}>
      {children}
    </p>
  )
}

interface SelectItemProps extends JsxElementProps {
  value: string
  disabled?: boolean
}

function SelectItem({ children, ...props }: PropsWithChildren<SelectItemProps>): JSX.Element {
  const { class: className, disabled = false, value, ...rest } = props
  return (
    <li
      attrs={{
        'data-disabled': disabled,
      }}
      x-on:click={`setSelected('${value}')`}
      class={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...rest}
    >
      <Icon x-show={`value === '${value}'`} i="check" class="absolute left-0 w-4 h-4 ml-2" />
      {children}
    </li>
  )
}

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger>Choose an option</SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="disabled" disabled>
            Option 2
          </SelectItem>
          <SelectItem value="2">Option 3</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value="3">Option 1</SelectItem>
          <SelectItem value="4">Option 2</SelectItem>
          <SelectItem value="5">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function SelectSeparator() {
  return <div class="-mx-1 my-1 h-px bg-muted" />
}

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectDemo,
  selectData,
  SelectSeparator,
}
