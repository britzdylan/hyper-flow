import { HttpContext } from '@adonisjs/core/http'
import { Html, PropsWithChildren } from 'adonisjsx'
import { viteAssets, viteReactRefresh } from 'adonisjsx'

function Head() {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {viteReactRefresh()}
      {viteAssets(['resources/js/app.js'])}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
      />

      <title>AdonisJS</title>
    </head>
  )
}

interface errorObject {
  [key: string]: string
}

function Body({ children }: PropsWithChildren) {
  // const ctx = HttpContext.get()
  // let errors: errorObject = ctx?.session.flashMessages.get('notifyErrors')
  // let alerts: errorObject = ctx?.session.flashMessages.get('notifyAlerts')

  return (
    <body id="page-body" class="bg-background flex flex-col min-h-screen font-sans text-foreground">
      {children}
    </body>
  )
}

function Root({ children }: PropsWithChildren) {
  return (
    <html id="page" lang="en">
      <Head />
      <Body>{children}</Body>
    </html>
  )
}

function DefaultLayout({ children }: PropsWithChildren) {
  return <Root>{children}</Root>
}

export { DefaultLayout, Head, Root, Body }
