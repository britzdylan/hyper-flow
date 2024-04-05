import { PropsWithChildren } from 'adonisjsx'
import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

interface AccordionContentProps extends JsxElementProps {
  self?: boolean
}

/**
 * Renders the content of an accordion component.
 *
 * @param {PropsWithChildren<AccordionContentProps>} props - The props for the AccordionContent component.
 * @returns {JSX.Element} The rendered AccordionContent component.
 */
function AccordionContent({
  children,
  ...props
}: PropsWithChildren<AccordionContentProps>): JSX.Element {
  const { self = false, class: className } = props

  const classes = cn('overflow-hidden text-sm transition-all', className)

  const sharedProps = {
    'class': classes,
    'role': 'region',
    'x-bind:id': "$id('accordion')",
    'x-collapse': true,
    'x-cloak': true,
    'x-bind:aria-labelledby': "'accordion-header-' + $id('accordion')",
  }

  if (!self) {
    return (
      <div
        {...sharedProps}
        x-show="activeAccordion==$id('accordion')"
        x-bind:aria-hidden="activeAccordion==$id('accordion')"
      >
        {children}
      </div>
    )
  }

  return (
    <div {...sharedProps} x-show="isOpen" x-bind:aria-hidden="isOpen">
      {children}
    </div>
  )
}

interface AccordionTriggerProps extends JsxElementProps {
  icon?: string
  self?: boolean
}

/**
 * Renders an accordion trigger button.
 *
 * @param {PropsWithChildren<AccordionTriggerProps>} props - The props for the AccordionTrigger component.
 * @returns {JSX.Element} The rendered AccordionTrigger component.
 */
function AccordionTrigger({
  children,
  ...props
}: PropsWithChildren<AccordionTriggerProps>): JSX.Element {
  const { self = false, icon = 'chevron-down', class: className } = props

  const classes = cn(
    'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full',
    className
  )

  const finalIcon = 'tabler-sprite.svg#tabler-' + icon

  const sharedButtonProps = {
    'class': classes,
    'type': 'button',
    'x-bind:id': "'accordion-header-' + $id('accordion')",
  }

  const sharedIconProps = {
    'class': 'h-4 w-4 shrink-0 transition-transform duration-200',
    'aria-hidden': true,
  }

  if (!self) {
    return (
      <button
        {...sharedButtonProps}
        x-bind:aria-expanded="activeAccordion==$id('accordion')"
        x-on:click="setActiveAccordion($id('accordion'))"
        x-bind:aria-controls="$id('accordion')"
      >
        {children}

        <span
          {...sharedIconProps}
          x-bind:class="{ 'rotate-180': activeAccordion === $id('accordion') }"
        >
          <svg class="h-4 w-4">
            <use xlink:href={finalIcon} />
          </svg>
        </span>
      </button>
    )
  }

  return (
    <button
      {...sharedButtonProps}
      x-bind:aria-expanded="isOpen"
      x-on:click="toggleAccordion()"
      x-bind:aria-controls="$id('accordion')"
    >
      {children}

      <span {...sharedIconProps} x-bind:class="{ 'rotate-180': isOpen }">
        <svg class="h-4 w-4">
          <use xlink:href={finalIcon} />
        </svg>
      </span>
    </button>
  )
}

interface AccordionItemProps extends JsxElementProps {
  self?: boolean
  active?: boolean
}

/**
 * Renders an accordion item component.
 *
 * @param {PropsWithChildren<AccordionItemProps>} props - The component props.
 * @returns {JSX.Element} The rendered accordion item.
 * @throws {Error} If the prop "self" is not of type "boolean".
 */

function AccordionItem({ children, ...props }: PropsWithChildren<AccordionItemProps>): JSX.Element {
  const { self = false, active = false, class: className } = props

  const clientFunc = `{
    isOpen: ${active},
    toggleAccordion() {
      this.isOpen = !this.isOpen
    }
  }`

  const classes = cn('border-b', className)

  const sharedProps = {
    'class': classes,
    'x-id': "['accordion']",
  }

  switch (self) {
    case false:
      return <div {...sharedProps}>{children}</div>
    case true:
      return (
        <div {...sharedProps} x-data={clientFunc}>
          {children}
        </div>
      )
    default:
      throw new Error('Prop: "self" must be of type "boolean"')
  }
}

interface AccordionRootProps extends JsxElementProps {
  type: 'single' | 'multiple'
  activeAccordion?: string
}

/**
 * Renders the root component for an accordion.
 *
 * @param {PropsWithChildren<AccordionRootProps>} props - The props for the AccordionRoot component.
 * @returns {JSX.Element} The rendered AccordionRoot component.
 * @throws {Error} If the prop "type" is neither "single" nor "multiple".
 */

function AccordionRoot({ children, ...props }: PropsWithChildren<AccordionRootProps>): JSX.Element {
  const { type, activeAccordion, class: className } = props

  const clientFunc = `{
    activeAccordion: '${activeAccordion}',
    setActiveAccordion(id) {
      this.activeAccordion = this.activeAccordion == id ? '' : id
    },
  }`
  const classes = cn('w-full', className)

  const sharedProps = {
    class: classes,
  }

  switch (type) {
    case 'single':
      return (
        <div x-data={clientFunc} {...sharedProps}>
          {children}
        </div>
      )
    case 'multiple':
      return <div {...sharedProps}>{children}</div>
    default:
      throw new Error('Prop: "type" must be either "single" or "multiple"')
  }
}

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent }
