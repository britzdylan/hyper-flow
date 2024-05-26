export const AuthConfig = {
  strict: false,
  routeIdPrefix: 'Auth_',
  actions: {
    getRegisterPage: {
      route: '/register',
      event: false,
      flash: false,
    },
    postUserEmailPassword: {
      route: '/register',
      event: false,
      flash: false,
    },
    getUserEmailWithToken: {
      route: '/verify/email',
      event: false,
      flash: false,
    },
    getEmailVerificationPage: {
      route: '/request/verification/email',
      event: false,
      flash: false,
    },
    postUserVerificationToken: {
      route: '/request/verification/email',
      event: false,
      flash: false,
    },
  },
}
