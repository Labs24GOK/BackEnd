
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('student_contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('student_contact').insert([
        { student_id: 1, contact_id: 1 },
        { student_id: 2, contact_id: 2 },
        { student_id: 3, contact_id: 3 },
        { student_id: 4, contact_id: 4 },
        { student_id: 5, contact_id: 5 },
        { student_id: 6, contact_id: 6 }
      ]);
    });
};
