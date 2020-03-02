exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('course_type').del().then(function() {
    // Inserts seed entries
    return knex('course_type').insert([
      { description: 'General' },
      { description: 'Government' },
      { description: 'Makeup' },
      { description: 'Reading' },
      { description: 'Speaking' },
      { description: 'Private' }
    ]);
  });
};
