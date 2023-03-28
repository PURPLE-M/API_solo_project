const knex = require('../knex')

const FAMILY_TABLE = 'family'

module.exports = {
  FAMILY_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll(limit) {
    return knex
      .select({
        id: 'id',
        name: 'name',
        sex: 'sex',
        age: 'age'
      })
      .from(FAMILY_TABLE)
      .limit(limit)
  },

  getId(id) {
    return knex
      .select({
        id: 'id',
        name: 'name',
        sex: 'sex',
        age: 'age'
      })
      .from(FAMILY_TABLE)
      .where({id: id})
  },

  create(family) {
    return knex(FAMILY_TABLE).insert(family)
  },

  update(id, family) {
    return knex(FAMILY_TABLE)
      .where({id: id})
      .update(family, ['id'])
  },

  delete(id) {
    return knex(FAMILY_TABLE)
      .where({ id: id })
      .del()
  }
}
