const db = require('../../database/db-config');

const findsBy = (field, arg) => {
  return db('user')
    .where(field, '=', arg)
    .first();
};

const findBy = id => {
  return db('user')
    .where({id})
}

const findById = user_id => {
  return db('student')
  .where({user_id})
}


const create = body => {
  return db('user')
    .insert(body)
    .returning('id');
};

const remove = id => {
  return db('user')
    .del()
    .where({ id: id });
};

const findAll = () => {
  return db('user')
    .select(['id', 'user.name', 'user_type', 'email'])
};

module.exports = {
  findBy,
  findById,
  create,
  remove,
  findAll,
  findsBy
};
