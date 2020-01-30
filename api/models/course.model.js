const db = require('../../database/db-config');

const returning = [
	'id as course_id',
	'section',
	'subsection',
	'hourly_rate',
	'start_time',
	'end_time',
	'notes',
	'status',
	'term',
	'course_type',
	'group_type',
	'school_grade',
	'level',
	'course_schedule',
	'room',
	'teacher'
];

const find = () => {
	return db('course').select('*');
};

const findByID = id => {
	return db('course')
		.select('*')
		.where('id', '=', id)
		.first();
};

const findByTermID = termId => {
	return db('term')
		.select('*')
		.where('id', '=', termId)
		.first();
};
const findByCourseTypeID = courseTypeId => {
	return db('course_type')
		.select('*')
		.where('id', '=', courseTypeId)
		.first();
};
const findByGroupTypeID = groupTypeId => {
	return db('group_type')
		.select('*')
		.where('id', '=', groupTypeId)
		.first();
};
const findBySchoolGradeID = schoolGradeId => {
	return db('school_grade')
		.select('*')
		.where('id', '=', schoolGradeId)
		.first();
};
const findByLevelID = levelId => {
	return db('level')
		.select('*')
		.where('id', '=', levelId)
		.first();
};
const findByCourseScheduleID = courseScheduleId => {
	return db('course_schedule')
		.select('*')
		.where('id', '=', courseScheduleId)
		.first();
};
const findByRoomID = roomId => {
	return db('room')
		.select('*')
		.where('id', '=', roomId)
		.first();
};
const findByTeacherID = teacherId => {
	return db('teacher')
		.select('*')
		.where('id', '=', teacherId)
		.first();
};

const create = async () => {};

const edit = async () => {};

const remove = id => {
	return db('course')
		.where({ id })
		.del();
};

module.exports = {
	findByID,
	findByTermID,
	findByCourseTypeID,
	findByGroupTypeID,
	findBySchoolGradeID,
	findByLevelID,
	findByCourseScheduleID,
	findByRoomID,
	findByTeacherID,
	create,
	find,
	edit,
	remove
};
