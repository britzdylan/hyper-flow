## Documentation for breadcrumbs.tsx

This file contains several components used to create a breadcrumb navigation in your application.

**Breadcrumb**

This is the main container for the breadcrumb navigation.

**Props**

- `children`: ReactNode - The content to be displayed inside the breadcrumb.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb.

**Usage**

```tsx
<Breadcrumb className="my-class">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/home">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

**BreadcrumbList**

This component is used to wrap the list of breadcrumb items.

**Props**

- `children`: ReactNode - The breadcrumb items to be displayed.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb list.

**Usage**

```tsx
<BreadcrumbList className="my-class">
  <BreadcrumbItem>
    <BreadcrumbLink href="/home">Home</BreadcrumbLink>
  </BreadcrumbItem>
</BreadcrumbList>
```

**BreadcrumbItem**

This component is used to wrap each breadcrumb link or page.

**Props**

- `children`: ReactNode - The content to be displayed inside the breadcrumb item.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb item.

**Usage**

```tsx
<BreadcrumbItem className="my-class">
  <BreadcrumbLink href="/home">Home</BreadcrumbLink>
</BreadcrumbItem>
```

**BreadcrumbLink**

This component is used to create a link inside a breadcrumb item.

**Props**

- `href`: string - The URL of the breadcrumb link.
- `children`: ReactNode - The text to be displayed for the breadcrumb link.
- `asChild`: boolean - If true, the link will be rendered as a span instead of an anchor tag.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb link.

**Usage**

```tsx
<BreadcrumbLink href="/home" className="my-class">
  Home
</BreadcrumbLink>
```

**BreadcrumbPage**

This component is used to render the current page in the breadcrumb navigation.

**Props**

- `children`: ReactNode - The text to be displayed for the current page.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb page.

**Usage**

```tsx
<BreadcrumbPage className="my-class">Current Page</BreadcrumbPage>
```

**BreadcrumbEllipsis**
This component is used to render an ellipsis in the breadcrumb navigation.

**Props**

- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb ellipsis.

**Usage**

```tsx
<BreadcrumbEllipsis className="my-class" />
```

**BreadcrumbSeparator**
This component is used to render a separator between breadcrumb items.

**Props**

- `children`: ReactNode - The separator to be displayed. If not provided, a default separator will be used.
- `...props`: JsxElementProps - Any additional props to be passed to the breadcrumb separator.

**Usage**

```tsx
<BreadcrumbSeparator className="my-class" />
```
