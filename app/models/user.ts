import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['id', 'email'],
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

  //   @hasOne(() => UserProfile)
  //   public profile: HasOne<typeof UserProfile>

  //   @hasMany(() => UserSession)
  //   public sessions: HasMany<typeof UserSession>

  /*
  / Hooks
  */

  //   @afterCreate()
  //   public static async createProfile(user: UserModule) {
  //     const profile = await user.related('profile').create({
  //       userId: user.id,
  //     })
  //     await profile.save()
  //   }
}
