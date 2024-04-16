import type { HttpContext } from '@adonisjs/core/http'
import Home from '#pages/home'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ jsx }: HttpContext) {
    return jsx(Home)
  }
}
