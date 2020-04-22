const db = require('../../database/db-config');

const returning = [
  'u.user_id',
  'u.name',
  'u.user_type',
  'u.email'
];

const findBy = (field, arg) => {
  return db('user')
    .where(field, '=', arg)
    .first();
};

// const findBy = user_id => {
//   return db('user')
//     .where('user.user_id', '=', user_id)
//     .first();
// } 
const create = body => {
  return db('user')
    .insert(body)
    .returning('id');
};

const remove = id => {
  return db('user')
    .del()
    .where({ user_id: id });
};

const findAll = () => {
  return db('user')
    .select(['user_id', 'user.name', 'user_type', 'email'])
   
};

module.exports = {
  findBy,
  create,
  remove,
  findAll
};
