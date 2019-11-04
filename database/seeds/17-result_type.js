
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('result_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('result_type').insert([
        { result_type_code: -3, short_description: 'unconfirmed', long_description: 'Long description' },
        { result_type_code: -2, short_description: 'no show', long_description: 'Long description' },
        { result_type_code: -1, short_description: 'cancelled enrollment', long_description: 'Long description' },
        { result_type_code: 0, short_description: 'drop', long_description: 'Long description' },
        { result_type_code: 1, short_description: 'transfer out', long_description: 'Long description' },
        { result_type_code: 2, short_description: 'fail', long_description: 'Long description' },
        { result_type_code: 3, short_description: 'incomplete', long_description: 'Long description' },
        { result_type_code: 4, short_description: 'no exam', long_description: 'Long description' },
        { result_type_code: 5, short_description: 'pass', long_description: 'Long description' },
        { result_type_code: 6, short_description: 'confirm', long_description: 'Long description' }
      ]);
    });
};
