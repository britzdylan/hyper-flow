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
      event: true,
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
      route: '/reset-password/:token',
      event: false,
      flash: false,
    },
    userUpdatePassword: {
      route: '/reset-password/:token',
      event: false,
      flash: false,
    },
  },
}

export const ProfileConfig = {
  routeIdPrefix: 'Profile_',
  actions: {
    renderProfilePage: {
      route: '/profile',
      event: true,
      flash: true,
    },
    patchProfile: {
      route: '/profile',
      event: true,
      flash: true,
    },
    putProfileImage: {
      route: '/profile/image',
      event: true,
      flash: true,
    },
    deleteProfileImage: {
      route: '/profile/image',
      event: true,
      flash: true,
    },
  },
}

export const BillingConfig = {
  routeIdPrefix: 'Billing_',
  actions: {},
  storeId: '52117',
  hasFreePlan: true,
  products: [
    {
      id: 408337,
      product_id: 286903,
      receipt_button_text: 'Return to Dashboard',
      redirect_url: '',
      receipt_link_url: '',
      receipt_thank_you_note: '',
      enabled_variants: ['408337'],
    },
    {
      id: '408346',
      product_id: 286903,
      receipt_button_text: 'Return to Dashboard',
      redirect_url: '',
      receipt_link_url: '',
      receipt_thank_you_note: '',
      enabled_variants: ['408346'],
    },
  ],
  // What infro to save
  // flow for create new billing plan
  // manage current billing plan
  // change billing plan
  // cancel billing plan
}
