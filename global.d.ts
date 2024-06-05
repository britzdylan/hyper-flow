import LemonSDK from '#providers/src/lemon_squeezy_sdk'

declare global {
  namespace JSX {
    interface HtmlTag {}
  }
}

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    lemonSDK: () => LemonSDK
  }
}
