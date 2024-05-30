import { FlashMessages } from '#enum/FlashMessages'
import { Session } from '@adonisjs/session'
import emitter from '@adonisjs/core/services/emitter'

export default class ModuleController {
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
      const emitString = `Auth:${String(actionName)}:${eventType}`
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
