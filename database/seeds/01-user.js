const bcrypt = require('bcrypt');
exports.seed = function(knex) {
  const password = bcrypt.hashSync('pass', 8);
  return knex('user').insert([
    { user_type: 'parent', username: 'parent', password },
    { user_type: 'admin', username: 'admin', password },
    { user_type: 'staff', username: 'staff', password },
    { user_type: 'parent', username: 'parent2', password },
    { user_type: 'admin', username: 'admin2', password },
    { user_type: 'staff', username: 'staff2', password },
    { user_type: 'parent', username: 'parent3', password },
    { user_type: 'admin', username: 'admin3', password },
    { user_type: 'staff', username: 'staff3', password }
  ]);
};
