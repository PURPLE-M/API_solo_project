/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('income').del()
  await knex('income').insert([
    {
      id: 1,
      income_family_id: 1,
      amount: 30000,
      income_day: "2023-03-10",
      income_from_place: "ドコモ",
      income_category_id: 22,
    },
    {
      id: 2,
      income_family_id: 2,
      amount: 10000,
      income_day: "2022-12-20",
      income_from_place: "母",
      income_category_id: 24,
    },
    {
      id: 3,
      income_family_id: 3,
      amount: 200000,
      income_day: "2023-01-22",
      income_from_place: "保険会社",
      income_category_id: 23,
    },
  ]);
};
