const db = require('../../database/db-config');

const takeAttendance = (meeting, students) => {
  return db.transaction(trx => {
    return db('meeting')
      .transacting(trx)
      .insert(meeting)
      .returning('id')
      .then(res => {
        const [id] = res;
        const attendance = students.map(student => {
          student.meeting_id = id;
        });
        return db('attendace')
          .transacting(trx)
          .insert(attendance)
          .returning('id');
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });
};

module.exports = {
  takeAttendance
};
