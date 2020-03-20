
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('course_schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('course_schedule').insert([
        { short_description: 'Sat / Tue', 
        long_description: 'Saturday / Tuesday', 
        sql: '(1, 1)' },
        { short_description: 'Sun / Wed', 
        long_description: 'Sunday / Wednesday', 
        sql: '(1, 2)' },
        { short_description: 'Mon / Thu', 
        long_description: 'Monday / Thursday', 
        sql: '(1, 3)' },
        { short_description: 'Sat / Wed', 
        long_description: 'Saturday / Wednesday', 
        sql: '(1, 4)' },
        { short_description: 'Mon / Wed', 
        long_description: 'Monday / Wednesday', 
        sql: '(1, 5)' },
        { short_description: 'Sun / Tue / Wed', 
        long_description: 'Sunday / Tuesday / Wednesday', 
        sql: '(1, 6)' }
      ]);
    });
};
