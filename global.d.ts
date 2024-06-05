import LemonSDK from './services/lemon_squeezy.ts'
import { RestClient } from '#providers/src/rest_provider'

declare global {
  namespace JSX {
    interface HtmlTag {}
  }
}

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    restClient: {
      [key: string]: RestClient
    }
  }
}
