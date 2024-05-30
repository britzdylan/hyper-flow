import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'

export function DashboardPageHeader({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  return (
    <header
      class="w-full border border-border text-foreground bg-secondary px-6 py-8 inline-flex items-center justify-center"
      {...props}
    >
      <div class="max-w-screen-xl mx-auto w-full">{children}</div>
    </header>
  )
}
