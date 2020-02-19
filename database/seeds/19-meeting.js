exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meeting')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('meeting').insert([
        {
          course_id: 1,
          meeting_date: '2019-5-1',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        },
        {
          course_id: 1,
          meeting_date: '2019-5-2',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        },
        {
          course_id: 2,
          meeting_date: '2019-5-1',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        },
        {
          course_id: 2,
          meeting_date: '2019-5-2',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        },
        {
          course_id: 3,
          meeting_date: '2019-5-1',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        },
        {
          course_id: 3,
          meeting_date: '2019-5-2',
          teacher_id: 1,
          material_covered: 'This is what was covered today.',
          notes: 'Here are some notes about todays lesson.',
          unpaid: false
        }
      ]);
    });
};
