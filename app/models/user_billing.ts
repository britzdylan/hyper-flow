import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'

export default class UserBilling extends BaseModel {
  // static routeLookupKey = 'username'

  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare firstName: string | null

  @column()
  declare lastName: string | null

  @column()
  declare taxIdNumber: string | null

  @column()
  declare country: string | null

  @column()
  declare postalCode: string | null

  @computed()
  public get cardHolderName() {
    return `${this.firstName} ${this.lastName}`
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
