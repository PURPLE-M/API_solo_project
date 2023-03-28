/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {
      id: 1,
      category_name: "食費",
    },
    {
      id: 2,
      category_name: "日用雑貨",
    },
    {
      id: 3,
      category_name: "交通費",
    },
    {
      id: 4,
      category_name: "交際費",
    },
    {
      id: 5,
      category_name: "通信費",
    },
    {
      id: 6,
      category_name: "医療費",
    },
    {
      id: 7,
      category_name: "住まい",
    },
    {
      id: 8,
      category_name: "その他支出",
    },
    {
      id: 21,
      category_name: "給与",
    },
    {
      id: 22,
      category_name: "賞与",
    },
    {
      id: 23,
      category_name: "臨時収入",
    },
    {
      id: 24,
      category_name: "その他収入",
    },
  ]);
};
