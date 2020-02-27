exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('group_type').del().then(function() {
    // Inserts seed entries
    return knex('group_type').insert([
      {
        short_description: 'KG',
        long_description: 'Kindergarten 1-3'
      },
      {
        short_description: 'Pri 1-3',
        long_description: 'Primary 1-3'
      },
      {
        short_description: 'Pri 1-6',
        long_description: 'Primary 1-6'
      },
      {
        short_description: 'Pri 4-6',
        long_description: 'Primary 4-6'
      },
      {
        short_description: 'Int',
        long_description: 'Intermediate'
      },
      {
        short_description: 'Sec',
        long_description: 'Secondary'
      },
      {
        short_description: 'Adult',
        long_description: 'Adult'
      }
    ]);
  });
};
