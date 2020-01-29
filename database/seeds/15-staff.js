exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('staff').insert([
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 2,
      cpr: '2',
      mobile_number: '12345678',
      accent: 'British',
      gender: 'F',
      birthdate: new Date()
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 3,
      cpr: '3',
      mobile_number: '12345678',
      accent: 'British',
      gender: 'M',
      birthdate: new Date()
    },
    {
      teaching_rate: '0.00',
      active: true,
      user_id: 5,
      cpr: '5',
      mobile_number: '12345678',
      accent: 'North American',
      gender: 'F',
      birthdate: new Date()
    },
    {
      teaching_rate: '0.00',
      active: false,
      user_id: 6,
      cpr: '6',
      mobile_number: '12345678',
      accent: 'North American',
      gender: 'F',
      birthdate: new Date()
    }
  ]);
};
