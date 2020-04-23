exports.seed = function(knex) {
  return knex('family').insert([
    {
      mother_name: 'Fatwa Akram Rahmani',
      father_name: 'Haroon Akram Rahmani',
      block_code: 363,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 1
    },
    {
      mother_name: 'Imaan Mohammad Hussein Khalili',
      father_name: 'Jimell Mohammad Hussein Khalili',
      block_code: 431,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 2
    },
    {
      mother_name: 'Wasifi Sharif Ozer Tariq',
      father_name: 'Siraj Sharif Ozer Tariq',
      block_code: 439,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 3
    },
    {
      mother_name: 'Hulwi Mohammad Hussein Harroun',
      father_name: 'Hakeem Mohammad Hussein Harroun',
      block_code: 363,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 4
    },
    {
      mother_name: 'Jaza Nasma Abdou',
      father_name: 'Hussien Nasma Abdou',
      block_code: 431,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 5
    },
    {
      mother_name: 'Raja Abdou Ghani',
      father_name: 'Hussien Abdou Ghani',
      block_code: 439,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '384-555-65',
      secondary_telephone: '384-555-65',
      user_id: 6
    }
  ]);
};
