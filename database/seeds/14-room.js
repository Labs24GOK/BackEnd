
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('room').del()
    .then(function () {
      // Inserts seed entries
      return knex('room').insert([
        { chairs: 19, availability: 'all days' },
        { chairs: 17, availability: 'all days' },
        { chairs: 14, availability: 'all days' },
        { chairs: 13, availability: 'all days' },
        { chairs: 13, availability: 'all days' },
        { chairs: 25, availability: 'all days' },
        { chairs: 36, availability: 'all days' },
        { chairs: 38, availability: 'all days' },
        { chairs: 35, availability: 'all days' }
      ]);
    });
};
