import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, computed } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import string from '@adonisjs/core/helpers/string'
import User from '#models/user'
import encryption from '@adonisjs/core/services/encryption'

export default class PasswordReset extends BaseModel {
  static table = 'password_resets'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare token: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare expiresAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @computed()
  public isExpired(): boolean {
    return this.expiresAt.toMillis() < DateTime.local().toMillis()
  }

  public async generateToken(): Promise<void> {
    this.token = encryption.encrypt(string.generateRandom(40))
    this.expiresAt = DateTime.local().plus({ hours: 2 })
  }

  public async useToken(): Promise<void> {
    this.expiresAt = DateTime.local().minus({ hours: 1 })
  }

  public async verifyToken(token: string): Promise<boolean> {
    return encryption.decrypt(token) === encryption.decrypt(this.token)
  }
}
