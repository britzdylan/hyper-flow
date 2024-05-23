import type { HttpContext } from '@adonisjs/core/http'
import Home from '#pages/home'
import { UserDashboardLayout } from '#layouts/dashboard'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ jsx }: HttpContext) {
    const start = performance.now()

    const returnValue = await jsx(Home, {
      data: {},
      layout: UserDashboardLayout,
    })
    const end = performance.now()
    const used = process.memoryUsage().heapUsed / 1024 / 1024

    console.log(
      `Code executed in ${((end - start) / 1000).toFixed(5)} seconds. & Memory used: ${(used / 1024).toFixed(2)} KB.`
    )
    return returnValue
  }
}
