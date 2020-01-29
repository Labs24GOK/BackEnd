const bcrypt = require('bcrypt');
exports.seed = function(knex) {
  const password = bcrypt.hashSync('pass', 8);
  return knex('user').insert([
    {
      user_type: 'parent',
      username: 'parent',
      password,
      name: 'Victoria Labdon',
      short_name: 'Victoria',
      email: 'fakeemail1@gmail.com',
    },
    {
      user_type: 'admin',
      username: 'admin',
      password,
      name: 'Benny Labdon',
      short_name: 'Benny',
      email: 'fakeemail2@gmail.com'
    },
    {
      user_type: 'staff',
      username: 'staff',
      password,
      name: 'Layla Al Shehabi',
      short_name: 'Layla',
      email: 'fakeemail3@gmail.com'
    },
    {
      user_type: 'admin',
      username: 'admin2',
      password,
      name: 'Sarah Ameer',
      short_name: 'Sarah',
      email: 'fakeemail5@gmail.com',
    },
    {
      user_type: 'staff',
      username: 'staff2',
      password,
      name: 'Linda Munoz',
      short_name: 'Linda',
      email: 'fakeemail6@gmail.com'
    }
  ]);
};
