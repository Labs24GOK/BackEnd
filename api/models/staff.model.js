const db = require('../../database/db-config');
const User = require('./user.model');

const returning = [
  's.id as staff_id',
  'u.name',
  'u.short_name',
  'u.cpr',
  'u.mobile_number',
  'u.email',
  'u.accent',
  'u.gender',
  'u.birthdate',
  's.teaching_rate',
  'u.user_type',
  's.active',
  's.created_at as staff_created_at',
  's.updated_at as staff_updated_at',
  'u.created_at as user_created_at',
  'u.updated_at as user_updated_at'
];
const find = () => {
  return db('staff as s')
    .select(returning)
    .join('user as u', 's.user_id', 'u.user_id');
};

const findByID = id => {
  return db('staff as s')
    .select(returning)
    .where('s.id', '=', id)
    .join('user as u', 's.user_id', 'u.user_id')
    .first();
};

const create = async (userBody, staffBody) => {
  return db.transaction(trx => {
    return db('user')
      .transacting(trx)
      .insert(userBody)
      .returning('user_id')
      .then(res => {
        return db('staff')
          .transacting(trx)
          .insert({ ...staffBody, user_id: res[0] })
          .returning('id');
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });
};

const edit = async (staffID, userBody, staffBody) => {
  return db.transaction(trx => {
    return db('staff')
      .transacting(trx)
      .update(staffBody)
      .where({ id: staffID })
      .returning('user_id', 'id')
      .then(res => {
        return db('user')
          .transacting(trx)
          .update(userBody)
          .where({ id: res[0].user_id })
          .returning('id')
          .then(res => {
            return db(staff).where({ user_id: res.id[0] });
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });
};

module.exports = {
  findByID,
  create,
  find,
  edit
};
