/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('payment').del()
  await knex('payment').insert([
    {
      id: 1,
      payment_family_id: 1,
      amount: 560,
      payment_day: "2023-03-20",
      payment_place: "マツモトキヨシ",
      payment_category_id: 2,
      goods_name: "{食器用洗剤, 化粧パック}"
    },
    {
      id: 2,
      payment_family_id: 3,
      amount: 3420,
      payment_day: "2023-02-10",
      payment_place: "クイーンズ",
      payment_category_id: 1,
      goods_name: "{牛肉, レタス, トマト, ヨーグルト}"
    },
    {
      id: 3,
      payment_family_id: 2,
      amount: 999,
      payment_day: "2023-03-24",
      payment_place: "ローソン",
      payment_category_id: 1,
      goods_name: "{お弁当, ビール}"
    },
    {
      id: 4,
      payment_family_id: 1,
      amount: 960,
      payment_day: "2023-03-28",
      payment_place: "ファミマ",
      payment_category_id: 2,
      goods_name: "{ファミチキ, 炭酸水}"
    },
  ]);
};
