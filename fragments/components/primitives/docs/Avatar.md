## Documentation for avatar.tsx

This file contains two components: `AvatarFallback` and `AvatarImage`. Both components are used to render avatar images in the application.

**AvatarFallback**

This is a fallback component that is used when an avatar image is not available. It accepts any children to be rendered inside a div with specific styling.

**Props**

- `children`: ReactNode - The content to be displayed inside the fallback avatar.
- `...props`: JsxElementProps - Any additional props to be passed to the div.

**Usage**

```tsx
<Avatar>
  <AvatarFallback className="my-class">CN</AvatarFallback>
</Avatar>
```

**AvatarImage**

This component is used to render an avatar image. It accepts an image source and alt text as props.

**Props**

- `src`: string - The source URL of the avatar image.
- `alt`: string - The alt text for the avatar image.
- `...props`: JsxElementProps - Any additional props to be passed to the image.
  Usage

**Usage**

```tsx
<Avatar>
  <AvatarImage src="avatar.jpg" alt="Avatar" />
</Avatar>
```

Note: The className prop in both components is used to add additional CSS classes to the component. The cn function is used to concatenate the default classes with the ones provided by the className prop.
