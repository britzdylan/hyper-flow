export const AuthConfig = {
  strict: false,
  routeIdPrefix: 'Auth_',
  actions: {
    // Register
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
    // Authenticate
    renderLoginPage: {
      route: '/login',
      event: false,
      flash: false,
    },
    userLogin: {
      route: '/login',
      event: false,
      flash: false,
    },
    userLogout: {
      route: '/logout',
      event: false,
      flash: false,
    },
    // Password
    renderForgotPasswordPage: {
      route: '/forgot-password',
      event: false,
      flash: false,
    },
    userRequestPasswordReset: {
      route: '/forgot-password',
      event: false,
      flash: false,
    },
    renderPasswordResetPage: {
      route: '/reset-password',
      event: false,
      flash: false,
    },
    userUpdatePassword: {
      route: '/reset-password',
      event: false,
      flash: false,
    },
  },
}
