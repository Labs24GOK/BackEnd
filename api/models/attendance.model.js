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

// const getAttendanceRecordByStudent = (course_id, student_id) => {
// 	return db('attendance as a')
// 		.join('student as s', 's.id', 'a.student_id')
// 		.join('meeting as m', 'm.id', 'a.meeting_id')
// 		.where('m.meeting_date', '=', date)
// 		.select([
// 			'a.student_id',
// 			's.first_name',
// 			's.additional_names',
// 			'a.attendance'
// 		])
// 		.orderBy('a.student_id', 'asc');
// };

const getAttendanceRecordByStudent = course_enrollment_id => {
	return db('course_enrollment as ce')
		.where('ce.id', '=', course_enrollment_id)
		.join('meeting as m', 'm.course_id', 'ce.course_id')
		.join('attendance as a', function() {
			this.on('a.student_id', '=', 'ce.student_id').andOn(
				'a.meeting_id',
				'=',
				'm.id'
			);
		})
		.join('student as s', 's.id', 'ce.student_id')
		.select([
			'a.student_id',
			's.first_name',
			's.additional_names',
			'a.attendance',
			'm.meeting_date'
		])
		.orderBy('a.student_id', 'asc');
};

module.exports = {
	takeAttendance,
	getAttendanceRecordByStudent
};
