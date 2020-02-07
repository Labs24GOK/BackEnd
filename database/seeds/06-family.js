exports.seed = function(knex) {
  return knex('family').insert([
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 363,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    },
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 431,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    },
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 439,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    },
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 363,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    },
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 431,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    },
    {
      mother_name: 'Mother Name',
      father_name: 'Father Name',
      block_code: 439,
      road: '2550',
      building: '298',
      flat: '12',
      primary_telephone: '12345678',
      secondary_telephone: '12345678',
      user_id: 1
    }
  ]);
};
