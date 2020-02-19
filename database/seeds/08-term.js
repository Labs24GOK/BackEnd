exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('term')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('term').insert([
        { name: 'Fall 2014' },
        { name: 'Spring 2015' },
        { name: 'Fall 2015' },
        { name: 'Spring 2016' },
        { name: 'Fall 2016' },
        { name: 'Winter 2016' },
        { name: 'Spring 2017' },
        { name: 'Summer 2017' },
        { name: 'Fall 2017' },
        { name: 'Spring 2018' },
        { name: 'Summer 2018' },
        { name: 'Fall 2018' },
        { name: 'Winter 2018' },
        { name: 'Spring 2019' }
      ]);
    });
};
