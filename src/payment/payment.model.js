const knex = require('../knex')

const PAYMENT_TABLE = 'payment'

module.exports = {
  PAYMENT_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll(limit) {
    return knex
      .select({
        id: 'id',
        payment_family_id: 'payment_family_id',
        amount: 'amount',
        payment_day: 'payment_day',
        payment_place: 'payment_place',
        payment_category_id: 'payment_category_id',
        goods_name: 'goods_name'
      })
      .from(PAYMENT_TABLE)
      .limit(limit)
  },

  getfamilyId(familyid) {
    return knex
      .select({
        id: 'id',
        payment_family_id: 'payment_family_id',
        amount: 'amount',
        payment_day: 'payment_day',
        payment_place: 'payment_place',
        payment_category_id: 'payment_category_id',
        goods_name: 'goods_name'
      })
      .from(PAYMENT_TABLE)
      .where({payment_family_id: familyid})
  },

  getId(id) {
    return knex
      .select({
        id: 'id',
        payment_family_id: 'payment_family_id',
        amount: 'amount',
        payment_day: 'payment_day',
        payment_place: 'payment_place',
        payment_category_id: 'payment_category_id',
        goods_name: 'goods_name'
      })
      .from(PAYMENT_TABLE)
      .where({id: id})
  },

  create(payment) {
    return knex(PAYMENT_TABLE).insert(payment)
  },

  update(id, payment) {
    return knex(PAYMENT_TABLE)
      .where({id: id})
      .update(payment, ['id'])
  },

  delete(id) {
    return knex(PAYMENT_TABLE)
      .where({ id: id })
      .del()
  }
}
