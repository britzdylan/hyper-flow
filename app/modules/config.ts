export const AuthConfig = {
  strict: false,
  routeIdPrefix: 'Auth_',
  actions: {
    viewRegisterPage: {
      route: '/register',
      event: false,
    },
    registerUserEmailPassword: {
      route: '/register',
      event: true,
      resolve: (strict: boolean) => {
        if (strict) {
          return 'viewLoginPage'
        }
        return 'viewDashbosaard'
      },
    },
  },
}
