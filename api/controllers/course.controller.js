const Course = require('../models/course.model');
const Staff = require('../models/staff.model');
const bcrypt = require('bcrypt');

const findCourseById = async (req, res) => {
	try {
		const course = await Course.findByID(req.params.courseID);
		if (!course) {
			return res.status(406).json({ error: 'No course found with that ID' });
		}
		return res.status(200).json(course);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const findAllCourses = async (req, res) => {
	try {
		const courses = await Course.find();
		return res.status(200).json(courses);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const deleteACourse = async (req, res) => {
	try {
		const course = await Course.remove(req.params.courseID);
		return res
			.status(200)
			.json({ message: 'course successfully deleted', course });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const createACourse = async (req, res) => {
	try {
		const [id] = await Course.create(req.courseValidated);
		const course = await Course.findByID(id);
		return res.status(200).json(course);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const editACourse = async (req, res) => {
	try {
		const [id] = await Course.edit(req.courseValidated, req.courseID);
		const course = await Course.findByID(id);
		return res.status(200).json(course);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

const populateCourseDropdowns = async (req, res) => {
	// findAllTerms,
	// findAllCourseTypes,
	// findAllGroupTypes,
	// findAllSchoolGrades,
	// findAllLevels,
	// findAllCourseSchedules,
	// findAllRooms,
	try {
		const terms = await Course.findAllTerms();
		const course_types = await Course.findAllCourseTypes();
		const group_types = await Course.findAllGroupTypes();
		const school_grades = await Course.findAllSchoolGrades();
		const levels = await Course.findAllLevels();
		const course_schedules = await Course.findAllCourseSchedules();
		const rooms = await Course.findAllRooms();
		const staff = await Staff.find();
		return res.status(200).json({
			terms,
			course_types,
			group_types,
			school_grades,
			levels,
			course_schedules,
			rooms,
			staff
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Something wrong with the server' });
	}
};

module.exports = {
	findCourseById,
	findAllCourses,
	deleteACourse,
	createACourse,
	editACourse,
	populateCourseDropdowns
};
