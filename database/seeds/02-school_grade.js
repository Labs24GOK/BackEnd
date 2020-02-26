exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('school_grade').insert([
    { name: 'N/A' },
    { name: 'Nursery' },
    { name: 'KG 1' },
    { name: 'KG 2' },
    { name: 'KG 3' },
    { name: 'Pri 1' },
    { name: 'Pri 2' }
  ]);
};
