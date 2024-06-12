import LemonSDK from './services/lemon_squeezy.ts'
import { RestClient } from '#providers/src/rest_provider'
import type { ServerConfig } from './types/server.js'

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

type UserDefinedServerConfig = Partial<
  Omit<ServerConfig, 'trustProxy'> & {
    name: string
    trustProxy: ((address: string, distance: number) => boolean) | boolean | string
  }
>
