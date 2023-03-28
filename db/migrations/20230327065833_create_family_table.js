/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('family', function (table) {
    table.increments('id').primary() // Set this column as the primary key
    table.string('name', 32).notNullable()
    table.integer('sex')
    table.integer('age')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('family')
}
