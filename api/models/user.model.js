const db = require('../../database/db-config');

const findBy = (field, arg) => {
  return db('user')
    .where(field, '=', arg)
    .first();
};
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

module.exports = {
  findBy,
  create,
  remove
};
