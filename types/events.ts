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
    'Auth:renderLoginPage': null
    'Auth:userLogin': User
    'Auth:userLogout': null
    'Auth:renderForgotPasswordPage': null
    'Auth:renderPasswordResetPage': null
    'Auth:userRequestPasswordReset': User
    'Auth:userUpdatePassword': User
    'Auth:userRequestPasswordReset:error': string
    'Auth:userUpdatePassword:error': string
    'Profile:renderProfilePage': null
    'Profile:patchProfile': string
    'Profile:putProfileImage': string
    'Profile:deleteProfileImage': string
    'Profile:patchProfile:error': string
  }
}
