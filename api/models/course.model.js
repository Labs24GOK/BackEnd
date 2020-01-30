const db = require('../../database/db-config');

const returning = [
	'c.id as course_id',
	'c.section',
	'c.subsection',
	'c.hourly_rate',
	'c.start_time',
	'c.end_time',
	'c.notes',
	'c.status',
	'c.term',
	'c.course_type',
	'c.group_type',
	'c.school_grade',
	'c.level',
	'c.course_schedule',
	'c.room',
	'c.teacher'
];

const find = () => {
	return db('course as c').select(returning);
};

const findByID = id => {};

const create = async () => {};

const edit = async () => {};

const remove = id => {
	return db('course')
		.where({ id })
		.del();
};

module.exports = {
	findByID,
	create,
	find,
	edit,
	remove
};
