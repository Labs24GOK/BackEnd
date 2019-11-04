
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('family').del()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 363, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 },
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 431, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 },
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 439, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 },
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 363, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 },
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 431, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 },
        { mother_name: 'Mother Name', father_name: 'Father Name', block_code: 439, road: '2550', building: '298', flat: '12', telephone: '12345678', user_id: 17 }
      ]);
    });
};
