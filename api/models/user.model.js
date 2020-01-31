const db = require('../../database/db-config');

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
  create,
  remove
};
