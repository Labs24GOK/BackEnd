exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('staff').insert([
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3
    },
    {
      teaching_rate: '0.00',
      active: false,
      user_id: 3
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3
    }
  ]);
};
