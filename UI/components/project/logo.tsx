import type { JsxElementProps } from '#UI/lib/types'

interface LogoProps extends JsxElementProps {
  options: {
    href: string
    title: string
  }
}

function Logo({ options }: LogoProps): JSX.Element {
  return (
    <a href={options.href} title="Home">
      <span></span>
    </a>
  )
}

export { Logo }
