import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_subscriptions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unique()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      table.string('subscription_id')
      table.string('customer_id')
      table.string('order_id')
      table.string('order_item_id')
      table.string('product_id')
      table.string('variant_id')
      table.string('status')

      table.string('trail_ends_at')

      table.string('renews_at')
      table.string('ends_at')
      table.string('card_brand')
      table.string('card_last_four')
      table.string('update_payment_method')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
