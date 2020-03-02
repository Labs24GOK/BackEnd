exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('term').del().then(function() {
    // Inserts seed entries
    return knex('term').insert([
      { name: 'Fall 2020' }, // 1
      { name: 'Summer 2020' }, // 2
      { name: 'Spring 2020' }, // 3
      { name: 'Winter 2020' }, // 4
      { name: 'Fall 2019' }, // 5
      { name: 'Summer 2019' }, // 6
      { name: 'Spring 2019' }, // 7
      { name: 'Winter 2019' }, // 8
      { name: 'Fall 2018' }, // 9
      { name: 'Summer 2018' }, // 10
      { name: 'Spring 2018' } // 11
    ]);
  });
};
