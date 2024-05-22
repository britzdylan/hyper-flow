## Button Component API Documentation

### Button

A flexible button component with multiple variants and sizes.

**Props**

- `variant`: A string that determines the style of the button. Can be one of the following: 'default', 'destructive', 'outline', 'secondary', 'ghost', 'link'.
- `size`: A string that determines the size of the button. Can be one of the following: 'default', 'sm', 'lg', 'icon'.
- `class`: A string for CSS classes to apply to the button. You can use Tailwind CSS classes for styling.
- `type`: A string that sets the button's type attribute. Can be one of the following: 'button', 'submit', 'reset'.
- `children`: The content to be rendered inside the button.
- `...rest`: Any other props will be passed directly to the button element.

**Usage**

```jsx
import { Button } from './button.tsx';
<Button variant="default" size="lg" class="my-button" type="submit">
  Click me
</Button>
```

In this example, a large 'default' variant button is rendered with the text "Click me". The button has an additional CSS class "my-button" and its type is set to "submit".
