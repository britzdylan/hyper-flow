import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { StatusPageRange, StatusPageRenderer } from '@adonisjs/http-server/types'
import NotFound from '#pages/NotFound'
import { errors } from '@adonisjs/auth'
export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * Status pages are used to display a custom HTML pages for certain error
   * codes. You might want to enable them in production only, but feel
   * free to enable them in development as well.
   */
  protected renderStatusPages = !app.inProduction

  protected ignoreCodes = ['E_VALIDATION_ERROR']

  protected statusPages: Record<StatusPageRange, StatusPageRenderer> = {
    '404': (_, { jsx }) => jsx(NotFound),
    // '500..599': (_, { view }) => view.render('errors/server-error')
  }

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    console.log(error)
    if (error instanceof errors.E_INVALID_CREDENTIALS) {
      const msg = {
        title: 'Access Denied',
        desc: 'Invalid credentials please try again',
      }
      ctx.response.header('HX-Reswap', 'none')
      ctx.response.header('HX-Trigger', `{"showError":${JSON.stringify(msg)}}`)

      return
    }
    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the a third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
