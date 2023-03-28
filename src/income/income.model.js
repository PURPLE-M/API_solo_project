const knex = require('../knex')

const INCOME_TABLE = 'income'

module.exports = {
  INCOME_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll(limit) {
    return knex
      .select({
        id: 'id',
        income_family_id: 'income_family_id',
        amount: 'amount',
        income_day: 'income_day',
        income_from_place: 'income_from_place',
        income_category_id: 'income_category_id'
      })
      .from(INCOME_TABLE)
      .limit(limit)
  },

  getId(id) {
    return knex
      .select({
        id: 'id',
        income_family_id: 'income_family_id',
        amount: 'amount',
        income_day: 'income_day',
        income_from_place: 'income_from_place',
        income_category_id: 'income_category_id'
      })
      .from(INCOME_TABLE)
      .where({id: id})
  },

  create(income) {
    return knex(INCOME_TABLE).insert(income)
  },

  update(id, income) {
    return knex(INCOME_TABLE)
      .where({id: id})
      .update(income, ['id'])
  },

  delete(id) {
    return knex(INCOME_TABLE)
      .where({ id: id })
      .del()
  }
}
