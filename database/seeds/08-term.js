exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('term').del().then(function() {
    // Inserts seed entries
    return knex('term').insert([
      { name: 'Fall 2020' },
      { name: 'Summer 2020' },
      { name: 'Spring 2020' },
      { name: 'Winter 2020' },
      { name: 'Fall 2019' },
      { name: 'Summer 2019' },
      { name: 'Spring 2019' },
      { name: 'Winter 2019' },
      { name: 'Fall 2018' },
      { name: 'Summer 2018' },
      { name: 'Spring 2018' },
      { name: 'Winter 2018' },
      { name: 'Fall 2017' },
      { name: 'Summer 2017' }
    ]);
  });
};
