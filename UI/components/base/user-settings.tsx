import { Button } from '#primitives/button'
import { JsxElementProps } from '#ui/lib/types'
import { PropsWithChildren } from 'adonisjsx'
import { DashboardPageHeader } from '../project/dashboard/pageHeader.js'

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

export function UserSettingsBase({ children, ...props }: PropsWithChildren<JsxElementProps>) {
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
                    <Button class="w-full !justify-start !text-foreground" variant="ghost">
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
