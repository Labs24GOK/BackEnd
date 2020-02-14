const db = require('../../database/db-config');

const returning = [
	'course.id as course_id',
	'term.name as term',
	'course.section',
	'course.subsection',
	'course.hourly_rate',
	'course.start_time',
	'course.end_time',
	'course.notes',
	'course.status',
	'course_type.description as course_type',
	'group_type.long_description as group_type',
	'school_grade.name as school_grade',
	'level.description as level',
	'course_schedule.long_description as course_schedule',
	'room.chairs as room',
	'user.name as teacher'
];

const find = query => {
	// const limit = 5;
	// let offset = 0;
	// if (query.page) {
	// 	if (offset === 0) {
	// 		offset++;
	// 	}
	// 	offset = +query.page * limit - limit;
	// }

	return db('course')
		.select(returning)
		.join('term', 'term.id', 'course.term_id')
		.join('course_type', 'course_type.id', 'course.course_type_id')
		.join('group_type', 'group_type.id', 'course.group_type_id')
		.join('school_grade', 'school_grade.id', 'course.school_grade_id')
		.join('level', 'level.id', 'course.level_id')
		.join('course_schedule', 'course_schedule.id', 'course.course_schedule_id')
		.join('room', 'room.id', 'course.room_id')
		.join('staff', 'staff.id', 'course.teacher_id')
		.join('user', 'user.user_id', 'staff.user_id')
		.orderBy('course.id', 'desc');
	// .limit(limit)
	// .offset(offset)
};

const findByID = id => {
	return db('course')
		.select(returning)
		.where('course.id', '=', id)
		.first()
		.join('term', 'term.id', 'course.term_id')
		.join('course_type', 'course_type.id', 'course.course_type_id')
		.join('group_type', 'group_type.id', 'course.group_type_id')
		.join('school_grade', 'school_grade.id', 'course.school_grade_id')
		.join('level', 'level.id', 'course.level_id')
		.join('course_schedule', 'course_schedule.id', 'course.course_schedule_id')
		.join('room', 'room.id', 'course.room_id')
		.join('staff', 'staff.id', 'course.teacher_id')
		.join('user', 'user.user_id', 'staff.user_id');
};

const create = body => {
	console.log(body);
	return db('course')
		.insert(body)
		.returning('id');
};

const edit = (body, id) => {
	return db('course')
		.update(body)
		.where({ id })
		.returning('id');
};

const findCoursesByTeacherID = teacherID => {
	return db('course')
		.where('teacher_id', '=', teacherID)
		.select(returning)
		.join('term', 'term.id', 'course.term_id')
		.join('course_type', 'course_type.id', 'course.course_type_id')
		.join('group_type', 'group_type.id', 'course.group_type_id')
		.join('school_grade', 'school_grade.id', 'course.school_grade_id')
		.join('level', 'level.id', 'course.level_id')
		.join('course_schedule', 'course_schedule.id', 'course.course_schedule_id')
		.join('room', 'room.id', 'course.room_id')
		.join('staff', 'staff.id', 'course.teacher_id')
		.join('user', 'user.user_id', 'staff.user_id')
		.orderBy('course.id', 'desc');
};

const remove = id => {
	return db('course')
		.where({ id })
		.del();
};

/// THIS IS FOR POPULATING DROPDOWNS IN THE CLIENT
const findAllTerms = () => {
	return db('term').select('id', 'name');
};
const findAllCourseTypes = () => {
	return db('course_type').select('id', 'description');
};

const findAllGroupTypes = () => {
	return db('group_type').select('id', 'short_description');
};
const findAllSchoolGrades = () => {
	return db('school_grade').select('id', 'name');
};
const findAllLevels = () => {
	return db('level').select('id', 'description');
};
const findAllCourseSchedules = () => {
	return db('course_schedule').select('id', 'short_description');
};
const findAllRooms = () => {
	return db('room').select('id', 'chairs');
};

module.exports = {
	findByID,
	findAllTerms,
	findAllCourseTypes,
	findAllGroupTypes,
	findAllSchoolGrades,
	findAllLevels,
	findAllCourseSchedules,
	findAllRooms,
	create,
	find,
	edit,
	remove,
	findCoursesByTeacherID,
	findCoursesByStudentID
};
