const db = require('../../database/db-config');

const returning = [
	'course.id as course_id',
	'student.id as student_id',
	'result_type_code.long_description as result_type_code'
];

const findCoursesByStudentID = studentID => {
	return db('course_enrollment')
		.where('student_id', '=', studentID)
		.select(returning)
		.join('course', 'course.id', 'course_enrollment.course_id')
		.join('student', 'student.id', 'course_enrollment.student_id')
		.join(
			'result_type_code',
			'result_type_code.id',
			'course_enrollment.result_type_code_id'
		)
		.orderBy('course.id', 'desc');
};

module.exports = {
	findCoursesByStudentID
};
