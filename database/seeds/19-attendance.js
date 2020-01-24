
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('attendance').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendance').insert([
        { meeting_id: 1, student_id: 1, attendance: true },
        { meeting_id: 1, student_id: 2, attendance: false },
        { meeting_id: 1, student_id: 6, attendance: true },
        { meeting_id: 2, student_id: 1, attendance: true },
        { meeting_id: 2, student_id: 2, attendance: true },
        { meeting_id: 2, student_id: 6, attendance: false },
        { meeting_id: 3, student_id: 3, attendance: false },
        { meeting_id: 3, student_id: 5, attendance: true },
        { meeting_id: 4, student_id: 3, attendance: true },
        { meeting_id: 4, student_id: 5, attendance: true },
        { meeting_id: 5, student_id: 4, attendance: true },
        { meeting_id: 6, student_id: 4, attendance: false }

      ]);
    });
};
