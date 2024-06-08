import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserSubscription extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare subscriptionId: string

  @column()
  declare userId: number

  @column()
  declare customerId: string

  @column()
  declare orderId: string

  @column()
  declare orderItemId: string

  @column()
  declare productId: string

  @column()
  declare variantId: string

  @column()
  declare status: string

  @column()
  declare trailEndsAt: string

  @column()
  declare renewsAt: string

  @column()
  declare endsAt: string

  @column()
  declare cardBrand: string

  @column()
  declare cardLastFour: string

  @column()
  declare updatePaymentMethod: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
