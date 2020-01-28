const db = require('../../database/db-config');

const findByID = id => {
  return db('staff as s')
    .where({ id: 's.id' })
    .join('user as u', 'u.id', 's.user_id');
};

module.exports = {
  findByID
};
