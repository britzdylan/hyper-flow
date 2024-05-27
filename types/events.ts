import type User from '#models/user'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'Auth:renderRegisterPage': null
    'Auth:createUser:error': any
    'Auth:createUser': User
    'Auth:verifyUserEmail:error': any
    'Auth:verifyUserEmail': User
    'Auth:renderEmailVerificationPage': null
    'Auth:requestEmailVerification:verified': string
    'Auth:requestEmailVerification': User
  }
}
