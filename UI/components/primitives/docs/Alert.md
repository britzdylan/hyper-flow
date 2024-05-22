## Alert Component API Documentation

### Alert

A component that renders an alert message.

**Props**

- `variant:` A string that determines the style of the alert. Can be one of the following: 'default', 'destructive'.
- `class`: A string for CSS classes to apply to the alert. You can use Tailwind CSS classes for styling.
- `children`: The content of the alert.
- `...rest`: Any other props you want to pass to the alert.

**Usage**

```jsx
import { Alert } from './alert.tsx'
<Alert variant="default" class="my-alert">
  This is an alert message.
</Alert>
```

In this example, a 'default' variant alert is rendered with the text "This is an alert message". The alert has an additional CSS class "my-alert".

**AlertTitle**
A component that renders the title of an alert.

**Props**
- `class`: A string for CSS classes to apply to the alert title. You can use Tailwind CSS classes for styling.
- `children`: The content to be rendered inside the alert title.
- `...rest`: Any other props will be passed directly to the alert title element.

**Usage**

```jsx
import { AlertTitle } from './alert.tsx';

<AlertTitle class="my-alert-title">
  This is an alert title.
</AlertTitle>
```
In this example, an alert title is rendered with the text "This is an alert title". The alert title has an additional CSS class "my-alert-title".

**AlertDescription**

A component that renders the description of an alert.

**Props**

- `class`: A string for CSS classes to apply to the alert description. You can use Tailwind CSS classes for styling.
- `children`: The content to be rendered inside the alert description.
- `...rest`: Any other props will be passed directly to the alert description element.

**Usage**

```jsx
import { AlertDescription } from './alert.tsx'
<AlertDescription class="my-alert-description">This is an alert description.</AlertDescription>
```

In this example, an alert description is rendered with the text "This is an alert description". The alert description has an additional CSS class "my-alert-description".

**Full Example**

```jsx
import { Alert, AlertTitle, AlertDescription } from './alert.tsx'
<Alert variant="default" class="my-alert">
  <AlertTitle class="my-alert-title">This is an alert title.</AlertTitle>
  <AlertDescription class="my-alert-description">This is an alert description.</AlertDescription>
</Alert>
```

In this example, an alert with a title and a description is rendered. The alert, title, and description each have their own CSS classes.
