## Accordion Component API Documentation

### AccordionRoot

The root component for an accordion.

**Props**

`type`: A string that can be either 'single' or 'multiple'. This determines whether only one item can be open at a time ('single') or multiple items can be open at the same time ('multiple').

`activeAccordion`: A string that represents the currently active accordion. This corresponds to the AlpineJS [x-id](https://alpinejs.dev/magics/id) property and can be used by passing `accordion-${id}` as a prop.

`class`: A string for CSS classes to apply to the component. You can use Tailwind CSS classes for styling.

Usage

```jsx
<AccordionRoot type="single" activeAccordion="accordion-1" class="my-accordion">
  {/* Accordion items go here */}
</AccordionRoot>
```

### AccordionItem

Renders an accordion item component.

**Props**
`self`: If present, the accordion item controls its own state.

`active`: If present, the accordion item is initially open.

`class`: A string for CSS classes to apply to the component. You can use Tailwind CSS classes for styling.

Usage

```jsx
<AccordionItem self active class="my-accordion-item">
  {/* Accordion trigger and content go here */}
</AccordionItem>
```

### AccordionTrigger

The trigger that controls the opening and closing of an accordion item.

**Props**
`self`: If present, the accordion trigger controls its own state.

`icon`: A string that represents the icon to display. The icons are from the Tabler Icons library.

`class`: A string for CSS classes to apply to the component. You can use Tailwind CSS classes for styling.

Usage

```jsx
<AccordionTrigger self icon="chevron-down" class="my-accordion-trigger">
  {/* Trigger content goes here */}
</AccordionTrigger>
```

### AccordionContent

The content that is shown or hidden when an accordion item is opened or closed.

**Props**
`self`: If present, the accordion content controls its own state.

`class`: A string for CSS classes to apply to the component. You can use Tailwind CSS classes for styling.

`Usage`

```jsx
<AccordionContent self class="my-accordion-content">
  {/* Content goes here */}
</AccordionContent>
```

Full Example

```jsx
<AccordionRoot type="single" activeAccordion="accordion1" class="my-accordion">
  <AccordionItem self active class="my-accordion-item">
    <AccordionTrigger self icon="chevron-down" class="my-accordion-trigger">
      Click me to open or close
    </AccordionTrigger>
    <AccordionContent self class="my-accordion-content">
      This is the content of the accordion item.
    </AccordionContent>
  </AccordionItem>
</AccordionRoot>
```

> Note: If you're using the type of 'multiple', then the child components must have their self props or else it won't work.
