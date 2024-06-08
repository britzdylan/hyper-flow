import { FlashMessages } from '#enum/FlashMessages'
import { Session } from '@adonisjs/session'
import emitter from '@adonisjs/core/services/emitter'
import ErrorPage from '#pages/error'
export default class ModuleController {
  static error_page = ErrorPage

  moduleConfig: any = {
    actions: [],
  }

  emitEvent(
    actionName: keyof typeof this.moduleConfig.actions,
    eventType: 'event' | 'error',
    data: any
  ) {
    const actionConfig = this.moduleConfig.actions[actionName]

    if (actionConfig && actionConfig.event) {
      const emitString = `${String(actionName)}:${eventType}`
      // @ts-ignore
      emitter.emit(emitString, data)
    }
  }

  showFlashMessage(
    session: Session,
    actionName: keyof typeof this.moduleConfig.actions,
    type: 'success' | 'error',
    msg: keyof typeof FlashMessages
  ) {
    const actionConfig = this.moduleConfig.actions[actionName]
    const message = FlashMessages[msg]
    if (actionConfig && actionConfig.flash) {
      session.flash(type, [message])
    }
  }
}
