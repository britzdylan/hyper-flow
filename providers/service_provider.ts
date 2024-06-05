import type { ApplicationService } from '@adonisjs/core/types'
import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import LemonSDK from './src/lemon_squeezy_sdk.js'

export default class ServiceProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    // @ts-ignore
    HttpContext.getter('lemonSDK', () => {
      return new LemonSDK(env.get('LEMONSQUEEZY_API_KEY'))
    })
    await import('./src/rest_provider.js')
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
