
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        { name: 'Location 1' },
        { name: 'Location 2' }
      ]);
    });
};
