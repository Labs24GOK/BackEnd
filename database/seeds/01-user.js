const bcrypt = require('bcrypt');
exports.seed = function(knex) {
  const password = bcrypt.hashSync('pass', 8);
  return knex('user').insert([
    {
      user_type: 'parent',
      username: 'parent',
      password,
      email: 'email1',
      name: 'name'
    },
    {
      user_type: 'admin',
      username: 'admin',
      password,
      email: 'email2',
      name: 'name'
    },
    {
      user_type: 'staff',
      username: 'staff',
      password,
      email: 'email3',
      name: 'name'
    },
    {
      user_type: 'parent',
      username: 'parent2',
      password,
      email: 'email4',
      name: 'name'
    },
    {
      user_type: 'admin',
      username: 'admin2',
      password,
      email: 'email5',
      name: 'name'
    },
    {
      user_type: 'staff',
      username: 'staff2',
      password,
      email: 'email6',
      name: 'name'
    },
    {
      user_type: 'parent',
      username: 'parent3',
      password,
      email: 'email7',
      name: 'name'
    },
    {
      user_type: 'admin',
      username: 'admin3',
      password,
      email: 'email8',
      name: 'name'
    },
    {
      user_type: 'staff',
      username: 'staff3',
      password,
      email: 'email9',
      name: 'name'
    }
  ]);
};
