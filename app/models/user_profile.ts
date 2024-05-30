import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export default class UserProfile extends BaseModel {
  // static routeLookupKey = 'username'

  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare userId: number

  // @attachment({ folder: 'avatars', preComputeUrl: true })
  // declare avatar: AttachmentContract | null

  @column()
  declare firstName: string | null

  @column()
  declare lastName: string | null

  @column()
  declare bio: string | null

  @computed()
  public get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
