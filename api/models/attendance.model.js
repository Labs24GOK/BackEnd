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
        return db('attendance')
          .transacting(trx)
          .insert(attendance)
          .returning('id');
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });
};

const getAttendanceRecord = date => {
  return db('attendance as a')
    .join('student as s', 's.id', 'a.student_id')
    .join('meeting as m', 'm.id', 'a.meeting_id')
    .where('m.meeting_date', '=', date)
    .select([
      'a.student_id',
      's.first_name',
      's.additional_names',
      'a.attendance'
    ])
    .orderBy('a.student_id', 'asc');
};

module.exports = {
  takeAttendance,
  getAttendanceRecord
};
