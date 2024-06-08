import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_billings'

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
      table.string('email').nullable().defaultTo(null)
      table.string('first_name').nullable().defaultTo(null)
      table.string('last_name').nullable().defaultTo(null)
      table.string('tax_id_number').nullable().defaultTo(null)
      table.string('country').nullable().defaultTo(null)
      table.string('zip').nullable().defaultTo(null)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
