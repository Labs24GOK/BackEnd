
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('course_enrollment').del()
    .then(function () {
      // Inserts seed entries
      return knex('course_enrollment').insert([
        { course_id: 1, student_id: 1, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' },
        { course_id: 1, student_id: 2, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' },
        { course_id: 2, student_id: 3, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' },
        { course_id: 3, student_id: 4, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' },
        { course_id: 2, student_id: 5, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' },
        { course_id: 1, student_id: 6, first_day: new Date(), last_day: new Date(), result_type_code: 5, notes: 'Some random note text' }
      ]);
    });
};
