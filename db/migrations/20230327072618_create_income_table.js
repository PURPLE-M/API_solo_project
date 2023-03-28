/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('income', function (table) {
    table.increments('id').primary() // Set this column as the primary key
    table.integer('income_family_id')
      .notNullable()
      .references('id')
      .inTable('family')
    table.integer('amount', 32).notNullable()
    table.date('income_day')
    table.string('income_from_place')
    table.integer('income_category_id')
      .references('id')
      .inTable('category')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('income')
}
