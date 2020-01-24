exports.seed = function(knex) {
  return knex('user').insert([
    { role: 'parent' },
    { role: 'admin' },
    { role: 'staff' },
    { role: 'parent' },
    { role: 'admin' },
    { role: 'staff' },
    { role: 'parent' },
    { role: 'admin' },
    { role: 'staff' }
  ]);
};
