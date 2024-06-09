import { Button } from '#primitives/button'
import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'

export function UserSettingsBase({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  return (
    <section class="w-full max-w-screen-xl mx-auto py-12 px-6 md:px-0 flex gap-12" {...props}>
      <aside class="min-w-[250px]">
        <ul class="flex flex-col p-4 text-small font-medium text-foreground/50">
          <li>
            <a href="/settings/general" title="Settings">
              <Button class="w-full !justify-start !text-foreground" variant="ghost">
                General
              </Button>
            </a>
          </li>
        </ul>
      </aside>
      <div class="flex-grow w-full">{children}</div>
    </section>
  )
}
