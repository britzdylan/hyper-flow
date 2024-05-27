export const AuthConfig = {
  strict: false,
  routeIdPrefix: 'Auth_',
  actions: {
    renderRegisterPage: {
      route: '/register',
      event: false,
      flash: false,
    },
    createUser: {
      route: '/register',
      event: false,
      flash: true,
    },
    verifyUserEmail: {
      route: '/verify/email/:token',
      event: false,
      flash: false,
    },
    renderEmailVerificationPage: {
      route: '/verification/email',
      event: false,
      flash: false,
    },
    requestEmailVerification: {
      route: '/request/verification/email',
      event: false,
      flash: false,
    },
  },
}
