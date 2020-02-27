exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('school_grade').insert([
    { name: 'N/A' },
    { name: 'KG 1' },
    { name: 'KG 2' },
    { name: 'KG 3' },
    { name: 'Pri 1' },
    { name: 'Pri 2' },
    { name: 'Pri 3' },
    { name: 'Pri 4' },
    { name: 'Pri 5' },
    { name: 'Pri 6' },
    { name: 'Sec 1' },
    { name: 'Sec 2' },
    { name: 'Sec 3' },
    { name: 'Sec 4' },
    { name: 'Sec 5' },
    { name: 'Sec 6' }
  ]);
};
