/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('payment', function (table) {
    table.increments('id').primary() // Set this column as the primary key
    table.integer('payment_family_id')
      .notNullable()
      .references('id')
      .inTable('family')
    table.integer('amount', 32).notNullable()
    table.date('payment_day')
    table.string('payment_place')
    table.integer('payment_category_id')
      .references('id')
      .inTable('category')
    table.string('goods_name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('payment')
}
