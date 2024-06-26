import { Button } from '#components'
import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'
import { DashboardPageHeader } from '#ui/components/project/shared/header'

import { cn, isActive } from '#ui/lib/utils'
import { HttpContext } from '@adonisjs/core/http'
import { userSettingOptions } from '#ui/lib/constants'

export function UserSettingsBase({ children }: PropsWithChildren<JsxElementProps>) {
  const ctx = HttpContext.getOrFail()
  return (
    <>
      <DashboardPageHeader>
        <p class="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">Account Settings</p>
      </DashboardPageHeader>
      <section class="w-full max-w-screen-xl mx-auto py-12 px-6 md:px-0 flex gap-12">
        <aside class="min-w-[250px]">
          <ul class="flex flex-col p-4 text-small font-medium text-foreground/50">
            {userSettingOptions.map((item) => {
              return (
                <li>
                  <a href={item.route} title={item.title}>
                    <Button
                      class={cn(
                        'w-full !justify-start !text-foreground',
                        isActive(
                          item.route,
                          ctx,
                          '!text-background bg-foreground hover:!bg-foreground'
                        )
                      )}
                      variant="ghost"
                    >
                      {item.title}
                    </Button>
                  </a>
                </li>
              )
            })}
          </ul>
        </aside>
        <div class="flex-grow w-full">{children}</div>
      </section>
    </>
  )
}
