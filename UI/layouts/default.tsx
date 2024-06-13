import { Alert, AlertDescription, AlertTitle } from '#components'
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

function Body({ children }: PropsWithChildren) {
  return (
    <body class="bg-background relative flex flex-col min-h-screen font-sans text-foreground w-full">
      <div
        class="bg-background relative flex flex-col min-h-screen font-sans text-foreground w-full"
        id="page-body"
      >
        {children}
      </div>
    </body>
  )
}

function Root({ children }: PropsWithChildren) {
  return (
    <html id="page" lang="en" hx-boost="true">
      <Head />
      <Body>{children}</Body>
      <div
        id="toast"
        class="absolute bottom-10 right-10 max-w-96 w-full transition-all ease-in-out duration-150 z-50 hideToast"
      >
        <Alert variant="info">
          <AlertTitle id="toastTitle">This is a message for the user</AlertTitle>
          <AlertDescription id="toastDescription">
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
      <div
        id="error"
        class="absolute bottom-10 right-10 max-w-96 w-full transition-all ease-in-out duration-150 z-50 hideToast"
      >
        <Alert variant="destructive">
          <AlertTitle id="errorTitle">This is a message for the user</AlertTitle>
          <AlertDescription id="errorDescription">
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </html>
  )
}

function DefaultLayout({ children }: PropsWithChildren) {
  return <Root>{children}</Root>
}

export { DefaultLayout, Head, Root, Body }
