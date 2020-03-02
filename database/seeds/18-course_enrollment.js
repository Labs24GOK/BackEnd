exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('course_enrollment').del().then(function() {
    // Inserts seed entries
    return knex('course_enrollment').insert([
      {
        course_id: 1,
        student_id: 1,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 1,
        student_id: 2,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 1,
        student_id: 3,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 1,
        student_id: 4,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 1,
        student_id: 5,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 1,
        student_id: 6,
        first_day: new Date(2018, 3, 3),
        last_day: new Date(2018, 5, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 1,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 2,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 3,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 4,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 5,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 2,
        student_id: 6,
        first_day: new Date(2018, 9, 7),
        last_day: new Date(2020, 11, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 1,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 2,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 3,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 4,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 5,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 3,
        student_id: 6,
        first_day: new Date(2019, 0, 7),
        last_day: new Date(2019, 2, 28),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 1,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 2,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 3,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 4,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 5,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 4,
        student_id: 6,
        first_day: new Date(2019, 3, 6),
        last_day: new Date(2019, 5, 26),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 1,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 2,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 3,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 4,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 5,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 5,
        student_id: 6,
        first_day: new Date(2020, 3, 1),
        last_day: new Date(2020, 4, 6),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 1,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 2,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 3,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 4,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 5,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 6,
        student_id: 6,
        first_day: new Date(2019, 9, 5),
        last_day: new Date(2021, 11, 25),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 1,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 2,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 3,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 4,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 5,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 7,
        student_id: 6,
        first_day: new Date(2020, 0, 4),
        last_day: new Date(2020, 2, 30),
        result_type_code: 5,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 1,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: -3,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 2,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: -3,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 3,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: -3,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 4,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: 6,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 5,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: -3,
        notes: ''
      },
      {
        course_id: 8,
        student_id: 6,
        first_day: new Date(2020, 3, 4),
        last_day: new Date(2020, 5, 24),
        result_type_code: 6,
        notes: ''
      }
    ]);
  });
};
