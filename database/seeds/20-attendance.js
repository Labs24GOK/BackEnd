exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendance').del().then(function() {
    // Inserts seed entries
    return knex('attendance').insert([
      {
        meeting_id: 1,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 2,
        attendance: 'present'
      }
    ]);
  });
};
