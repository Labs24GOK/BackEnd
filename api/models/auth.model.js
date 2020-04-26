const db = require('../../database/db-config');

const registerStudent = async (
  userData,
  familyData,
  studentData
) => {
  return db.transaction(trx => {
    return db('user')
      .insert(userData)
      .returning(['id', 'username'])
      .then(res => {
        return db('family')
          .transacting(trx)
          .insert({
            ...familyData,
            user_id: res[0].user_id
          })
          .returning('id');
      })
      .then(res => {
        return db('student')
          .transacting(trx)
          .insert({
            ...studentData,
            family_id: res[0].user_id
          })
          .returning('first_name');
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });
};


module.exports = {
  registerStudent
};
