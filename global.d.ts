import LemonSDK from '#providers/src/lemon_squeezy_sdk'
import { RestClient } from '#providers/src/rest_provider'

declare global {
  namespace JSX {
    interface HtmlTag {}
  }
}

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    lemonSDK: LemonSDK
    restClient: {
      [key: string]: RestClient
    }
  }
}
