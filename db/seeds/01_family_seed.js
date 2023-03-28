/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('family').del()
  await knex('family').insert([
    {
      id: 1,
      name: "Yukari",
      sex: 0,
      age: 31,
    },
    {
      id: 2,
      name: "Tomohiro",
      sex: 1,
      age: 34,
    },
    {
      id: 3,
      name: "Tatsuya",
      sex: 1,
      age: 33,
    },
    {
      id: 4,
      name: "Rie",
      sex: 0,
      age: 60,
    },
  ]);
};
