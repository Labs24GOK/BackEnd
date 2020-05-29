const bcrypt = require('bcrypt');
exports.seed = function (knex) {
  const password = bcrypt.hashSync('pass', 8);
  return knex('user').insert([
    {
      user_type: 'admin',
      // username: 'admin',
      password,
      name: 'Victoria Labdon',
      // short_name: 'Victoria',
      email: 'admin@email.com',
    },
    {
      user_type: 'staff',
      // username: 'staff',
      password,
      name: 'Layla Al Shehabi',
      // short_name: 'Layla',
      email: 'staff1@email.com',
    },
    {
      user_type: 'staff',
      // username: 'staff2',
      password,
      name: 'Sarah Ameer',
      // short_name: 'Sarah',
      email: 'staff2@email.com',
    },
    {
      user_type: 'staff',
      // username: 'staff3',
      password,
      name: 'Linda Munoz',
      // short_name: 'Linda',
      email: 'staff3@email.com',
    },
    {
      user_type: 'staff',
      // username: 'staff4',
      password,
      name: 'Austin Shea',
      // short_name: 'Austin',
      email: 'staff4@email.com',
    },
    {
      user_type: 'parent',
      // username: 'parent',
      password,
      name: 'Haroon Akram Rahmani',
      // short_name: 'Haroon',
      email: 'parent@email.com',
    },

    {
      user_type: 'parent',
      // username: 'parent2',
      password,
      name: 'Imaan Mohammad Hussein Khalili',
      // short_name: 'Imaan',
      email: 'parent2@email.com',
    },

    {
      user_type: 'parent',
      // username: 'parent3',
      password,
      name: 'Siraj Sharif Ozer Tariq',
      // short_name: 'Siraj',
      email: 'parent3@email.com',
    },

    {
      user_type: 'parent',
      // username: 'parent4',
      password,
      name: 'Hulwi Mohammad Hussein Harroun',
      // short_name: 'Hulwi',
      email: 'parent4@email.com',
    },

    {
      user_type: 'parent',
      // username: 'parent5',
      password,
      name: 'Hussien Nasma Abdou',
      // short_name: 'Hussien',
      email: 'parent5@email.com',
    },
    {
      user_type: 'parent',
      // username: 'parent6',
      password,
      name: 'Raja Abdou Ghani',
      // short_name: 'Raja',
      email: 'parent6@email.com',
    },
  ]);
};
