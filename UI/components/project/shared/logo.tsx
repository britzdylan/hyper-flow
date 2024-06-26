import type { JsxElementProps } from '#ui/lib/types'

interface LogoProps extends JsxElementProps {
  options: {
    href: string
    title: string
  }
}

function Logo({ options, ...props }: LogoProps): JSX.Element {
  const { href = '/' } = options
  return (
    <a hx-boost="false" class="w-6 h-6 inline-flex" href={href} {...props}>
      <img class="w-full h-full" src="https://img.logoipsum.com/282.svg" alt="logo" />
    </a>
  )
}

export { Logo }
