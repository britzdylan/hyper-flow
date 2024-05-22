## Documentation for badge component

This file contains a single component: `Badge`. The `Badge` component is used to render a badge with different variants.

**Badge**
This component is used to render a badge. It accepts children and variant as props.

**Props**

-`variant`: 'default' | 'secondary' | 'destructive' | 'outline' - The variant of the badge. It changes the appearance of the badge based on the variant. Default is 'default'.

- `...props`: JsxElementProps - Any additional props to be passed to the badge.

**Usage**

```tsx
<Badge variant="secondary" className="my-class">
  Badge content
</Badge>
```

Note: The `className` prop is used to add additional CSS classes to the component. The `cn` function is used to concatenate the default classes with the ones provided by the `className` prop. The variant prop is used to determine the appearance of the badge. The `badgeVariants` function is used to generate the appropriate classes based on the `variant` prop.
