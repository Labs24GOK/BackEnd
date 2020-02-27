exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('course')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('course').insert([
        {
          term_id: 1,
          course_type_id: 1,
          group_type_id: 1,
          school_grade_id: 1,
          level_id: 1,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 1,
          room_id: 1,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        },
        {
          term_id: 2,
          course_type_id: 2,
          group_type_id: 2,
          school_grade_id: 2,
          level_id: 2,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 2,
          room_id: 2,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        },
        {
          term_id: 3,
          course_type_id: 3,
          group_type_id: 3,
          school_grade_id: 3,
          level_id: 3,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 3,
          room_id: 3,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        },
        {
          term_id: 4,
          course_type_id: 4,
          group_type_id: 4,
          school_grade_id: 4,
          level_id: 4,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 4,
          room_id: 4,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        },
        {
          term_id: 5,
          course_type_id: 5,
          group_type_id: 5,
          school_grade_id: 5,
          level_id: 5,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 5,
          room_id: 5,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        },
        {
          term_id: 6,
          course_type_id: 6,
          group_type_id: 6,
          school_grade_id: 6,
          level_id: 6,
          section: 'A',
          hourly_rate: '7.000',
          course_schedule_id: 6,
          room_id: 6,
          start_time: '16:30',
          end_time: '18:30',
          start_date: knex.fn.now(6),
          end_date: new Date(2020, 5, 6),
          teacher_id: 3,
          notes: 'Some notes about this course',
          status: 'completed'
        }
      ]);
    });
};
