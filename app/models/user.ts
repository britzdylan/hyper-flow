import { DateTime } from 'luxon'
import { BaseModel, afterCreate, column, computed, hasOne } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { beforeCreate } from '@adonisjs/lucid/orm'
import Hash from '@adonisjs/core/services/hash'
import encryption from '@adonisjs/core/services/encryption'
import string from '@adonisjs/core/helpers/string'
import { AuthConfig } from '../../modules/config.js'
import UserProfile from '#models/user_profile'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  static table = 'users'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare rememberMeToken: string | null

  @column({ serializeAs: null })
  declare emailVerificationToken: string | null

  @column({ serializeAs: null })
  declare emailResetRequest: string | null

  @column.dateTime()
  declare emailVerifiedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @computed()
  public get isVerified() {
    if (!!this.emailVerifiedAt) {
      return true
    }
    return false
  }

  /*
  / Relationships
  */

  @hasOne(() => UserProfile)
  declare profile: HasOne<typeof UserProfile>

  //   @hasMany(() => UserSession)
  //   public sessions: HasMany<typeof UserSession>

  /*
  / Hooks
  */

  @afterCreate()
  public static async createProfile(user: User) {
    const profile = await user.related('profile').create({
      userId: user.id,
    })
    await profile.save()
  }

  @beforeCreate()
  public static generateVerificationToken(user: User) {
    if (AuthConfig.strict) {
      user.generateVerificationToken()
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
