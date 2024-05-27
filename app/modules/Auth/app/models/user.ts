import { DateTime } from 'luxon'
import { beforeSave, beforeCreate } from '@adonisjs/lucid/orm'
import Hash from '@adonisjs/core/services/hash'
import encryption from '@adonisjs/core/services/encryption'
import string from '@adonisjs/core/helpers/string'
import User from '#models/user'
import { AuthConfig } from '#modules/config'
// import UserProfile from '#models/UserProfile'
// import UserSession from '#models/UserSession'

interface IUser {
  id: number
  email: string
  password: string
  rememberMeToken: string | null
  emailVerificationToken: string | null
  emailResetRequest: string | null
  emailVerifiedAt: DateTime | null
  createdAt: DateTime
  updatedAt: DateTime
  isVerified: boolean
}

export default class UserModule extends User implements IUser {
  static table = 'users'

  /*
  / Hooks
  */
  @beforeCreate()
  public static generateVerificationToken(user: UserModule) {
    if (AuthConfig.strict) {
      user.generateVerificationToken()
    }
  }

  @beforeSave()
  public static async hashPassword(user: UserModule) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  /*
  / Methods
  */

  public verifyEmail(token: string): boolean {
    if (encryption.decrypt(token) === encryption.decrypt(this.emailVerificationToken ?? '')) {
      this.emailVerifiedAt = DateTime.now()
      this.emailVerificationToken = null
      return true
    }
    return false
  }

  public generateVerificationToken() {
    this.emailVerificationToken = encryption.encrypt(string.random(40))
  }

  public async newEmailResetRequest(email: string) {
    return (this.emailResetRequest = encryption.encrypt(email, '2 hours'))
  }

  public async updateEmail(token: string) {
    const newEmail = encryption.decrypt<string>(token ?? '')
    if (!newEmail) {
      return false
    }
    this.email = newEmail!
    this.emailResetRequest = null
    this.emailVerifiedAt = DateTime.now()
    return true
  }

  public async verifyPassword(password: string): Promise<boolean> {
    return Hash.verify(this.password, password)
  }
}
