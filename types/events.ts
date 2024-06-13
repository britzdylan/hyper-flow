import type User from '#models/user'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'Auth:userRequestPasswordReset:event': { user: User; token: string }
    'Auth:requestEmailVerification:event': { user: User; token: string }
    'Auth:createUser:event': { user: User; token: string }
  }
}
