const db = require('../../database/db-config');

const registerStudent = async (
  userData,
  familyData,
  studentData
) => {
  return db.transaction(trx => {
    return db('user')
      .insert(userData)
      .returning(['user_id', 'username'])
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

// function addUser(userData) {
//   return db('user')
//     .insert(userData)
//     .returning(['user_id', 'username']);
// }

// function addFamily(familyData) {
//   return db('family').insert(familyData).returning('id');
// }

// function addStudent(studentData) {
//   return db('student')
//     .insert(studentData)
//     .returning('first_name');
// }

module.exports = {
  registerStudent
};
