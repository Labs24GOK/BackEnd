
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('course_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('course_type').insert([
        { description: 'general' },
        { description: 'government' },
        { description: 'makeup' },
        { description: 'reading' },
        { description: 'speaking' },
        { description: 'private' }
      ]);
    });
};
