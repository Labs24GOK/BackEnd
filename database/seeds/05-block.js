
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('block').del()
    .then(function () {
      // Inserts seed entries
      return knex('block').insert([
        { block_code: 363, neighborhood: 'Bilad alqadeem' },
        { block_code: 431, neighborhood: 'Jabalt Hibshi' },
        { block_code: 433, neighborhood: 'Jabalt Hibshi' },
        { block_code: 435, neighborhood: 'Jabalt Hibshi' },
        { block_code: 439, neighborhood: 'North Sehla' },
        { block_code: 441, neighborhood: 'Al Hajar' }
      ]);
    });
};
