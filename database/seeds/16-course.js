exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('course').del().then(function() {
    // Inserts seed entries
    return knex('course').insert([
      {
        // 1
        term_id: 11, // Spring 2018
        course_type_id: 1, // General
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 1, // Super Safari 1
        section: 'A',
        hourly_rate: '10.00',
        course_schedule_id: 1, // Sat / Tue
        room_id: 6,
        start_time: '09:00',
        end_time: '10:30',
        start_date: new Date(2018, 3, 3),
        end_date: new Date(2018, 5, 28),
        teacher_id: 1,
        notes: '',
        status: 'completed'
      },
      {
        // 2
        term_id: 9, // Fall 2018
        course_type_id: 1,
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 1, // Super Safari 1
        section: 'B',
        hourly_rate: '10.00',
        course_schedule_id: 2, // Sun / Wed
        room_id: 6,
        start_time: '11:00',
        end_time: '12:30',
        start_date: new Date(2018, 9, 7),
        end_date: new Date(2018, 11, 26),
        teacher_id: 2,
        notes: '',
        status: 'completed'
      },
      {
        // 3
        term_id: 8, // Winter 2019
        course_type_id: 1,
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 1, // Super Safari 1
        section: 'C',
        hourly_rate: '10.00',
        course_schedule_id: 3, // Mon / Thu
        room_id: 5,
        start_time: '16:30',
        end_time: '18:00',
        start_date: new Date(2019, 0, 7),
        end_date: new Date(2019, 2, 28),
        teacher_id: 3,
        notes: '',
        status: 'completed'
      },
      {
        // 4
        term_id: 7, // Spring 2019
        course_type_id: 1,
        group_type_id: 2, // Pri 1-3
        school_grade_id: 1, // N/A
        level_id: 7, // Kids Box 1
        section: 'A',
        hourly_rate: '10.000',
        course_schedule_id: 4, // Sat / Wed
        room_id: 4,
        start_time: '10:30',
        end_time: '09:00',
        start_date: new Date(2019, 2, 6),
        end_date: new Date(2019, 4, 26),
        teacher_id: 4,
        notes: '',
        status: 'completed'
      },
      {
        // 5
        term_id: 7, // Spring 2019
        course_type_id: 1,
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 2, // Super Safari 2
        section: 'A',
        hourly_rate: '10.00',
        course_schedule_id: 5, // Mon / Wed
        room_id: 4,
        start_time: '16:30',
        end_time: '18:30',
        start_date: new Date(2020, 3, 1),
        end_date: new Date(2020, 4, 6),
        teacher_id: 1,
        notes: '',
        status: 'completed'
      },
      {
        // 6
        term_id: 5, // Fall 2019
        course_type_id: 2, // Government
        group_type_id: 1, // KG 1-3
        school_grade_id: 2, // KG 2
        level_id: 2, // Super Safari 2
        section: 'B',
        hourly_rate: '10.00',
        course_schedule_id: 6, // Sun / Tue / Wed
        room_id: 3,
        start_time: '11:00',
        end_time: '12:30',
        start_date: new Date(2019, 9, 5),
        end_date: new Date(2019, 11, 25),
        teacher_id: 2,
        notes: 'Some notes about this course',
        status: 'completed'
      },
      {
        // 7
        term_id: 4, // Winter 2020
        course_type_id: 1, // General
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 2, // Super Safari 2
        section: 'C',
        hourly_rate: '10.00',
        course_schedule_id: 1, // Sat / Tue
        room_id: 2,
        start_time: '09:00',
        end_time: '10:30',
        start_date: new Date(2020, 0, 4),
        end_date: new Date(2020, 2, 30),
        teacher_id: 3,
        notes: '',
        status: 'completed'
      },
      {
        // 8
        term_id: 3, // Spring 2020
        course_type_id: 1, // General
        group_type_id: 1, // KG 1-3
        school_grade_id: 1, // N/A
        level_id: 3, // Super Safari 3
        section: 'A',
        hourly_rate: '10.00',
        course_schedule_id: 2, // Sun / Wed
        room_id: 1,
        start_time: '16:30',
        end_time: '18:30',
        start_date: new Date(2020, 3, 4),
        end_date: new Date(2020, 5, 24),
        teacher_id: 4,
        notes: '',
        status: 'waitlist'
      }
    ]);
  });
};
