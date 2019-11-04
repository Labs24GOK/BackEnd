
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        { name: 'Emma Hatfield' },
        { name: 'Lucinda Briggs' },
        { name: 'Lisa Porter' },
        { name: 'Elisabeth Thompson' },
        { name: 'Celeste White' },
        { name: 'Sarah Faisal' }
      ]);
    });
};
