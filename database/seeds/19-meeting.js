exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meeting').del().then(function() {
    // Inserts seed entries
    return knex('meeting').insert([
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 3),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 7),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 10),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 14),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 17),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 21),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 24),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 3, 28),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 1),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 5),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 8),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 12),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 15),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 19),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 22),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 26),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 4, 29),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 2),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 5),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 9),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 12),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 16),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 19),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 23),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 1,
        meeting_date: new Date(2018, 5, 26),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 7),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 10),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 14),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 17),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 21),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 24),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 28),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 9, 31),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 4),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 7),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 11),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 14),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 18),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 21),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 25),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 10, 28),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 2),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 5),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 9),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 12),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 16),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 19),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 23),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 2,
        meeting_date: new Date(2018, 11, 26),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 7),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 8),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 14),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 15),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 21),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 22),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 28),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 0, 29),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 4),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 5),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 11),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 12),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 18),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 19),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 25),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 1, 26),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 4),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 5),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 11),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 12),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 18),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 19),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 25),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 3,
        meeting_date: new Date(2019, 2, 26),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 6),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 10),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 13),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 17),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 20),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 24),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 3, 27),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 1),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 4),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 8),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 11),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 15),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 18),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 22),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 25),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 4, 29),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 1),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 5),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 8),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 12),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 15),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 19),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 22),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 4,
        meeting_date: new Date(2019, 5, 26),
        teacher_id: 4,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 1),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 6),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 8),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 13),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 15),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 20),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 22),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 27),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 3, 29),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 4, 4),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 5,
        meeting_date: new Date(2020, 4, 6),
        teacher_id: 1,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 8),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 10),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 11),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 15),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 17),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 18),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 22),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 24),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 25),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 8, 29),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 1),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 2),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 6),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 8),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 9),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 13),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 15),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 16),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 20),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 22),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 23),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 27),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 29),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 9, 30),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 3),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 5),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 6),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 10),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 12),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 13),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 17),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 19),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 20),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 24),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 26),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 10, 27),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 1),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 3),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 4),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 8),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 10),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 11),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 15),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 17),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 18),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 22),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 24),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 6,
        meeting_date: new Date(2019, 11, 25),
        teacher_id: 2,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 4),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 7),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 11),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 14),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 18),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 21),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 25),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 0, 28),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 1),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 4),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 8),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 11),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 15),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 18),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 22),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 25),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 1, 29),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 3),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 7),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 10),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 14),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 17),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 21),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 24),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      },
      {
        course_id: 7,
        meeting_date: new Date(2020, 2, 28),
        teacher_id: 3,
        material_covered:
          'Description of material covered.',
        notes: 'Notes describing meeting',
        unpaid: false
      }
      /********************************************************
      *    SEEDS BELOW ARE FOR MEETINGS PAST 2/28/2020        *
      ********************************************************/
      //,
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 5),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 8),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 12),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 15),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 19),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 22),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 26),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 3, 29),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 3),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 6),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 10),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 13),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 17),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 20),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 24),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 27),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 4, 31),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 3),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 7),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 10),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 14),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 17),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 21),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // },
      // {
      //   course_id: 8,
      //   meeting_date: new Date(2020, 5, 24),
      //   teacher_id: 4,
      //   material_covered:
      //     'Description of material covered.',
      //   notes: 'Notes describing meeting',
      //   unpaid: false
      // }
    ]);
  });
};
