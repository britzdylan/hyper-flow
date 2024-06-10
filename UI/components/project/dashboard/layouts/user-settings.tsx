import { Button } from '#primitives/button'
import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'
import { DashboardPageHeader } from '../page-header.js'
import { cn } from '#ui/lib/utils'
import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'

const userSettingOptions = [
  {
    title: 'General',
    route: '/settings',
  },
  {
    title: 'Security',
    route: '/settings/security',
  },
  {
    title: 'Billing',
    route: '/settings/billing',
  },
]

function isActive(route: string, ctx: HttpContext) {
  return route === ctx.request.url() ? '!text-background bg-foreground hover:!bg-foreground' : ''
}

export function UserSettingsBase({ children, ...props }: PropsWithChildren<JsxElementProps>) {
  const ctx = HttpContext.getOrFail()
  return (
    <>
      <DashboardPageHeader>
        <p class="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">Account Settings</p>
      </DashboardPageHeader>
      <section class="w-full max-w-screen-xl mx-auto py-12 px-6 md:px-0 flex gap-12" {...props}>
        <aside class="min-w-[250px]">
          <ul class="flex flex-col p-4 text-small font-medium text-foreground/50">
            {userSettingOptions.map((item) => {
              return (
                <li>
                  <a href={item.route} title={item.title}>
                    <Button
                      class={cn(
                        'w-full !justify-start !text-foreground',
                        isActive(item.route, ctx)
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
