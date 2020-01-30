const Course = require('../models/course.model');
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

module.exports = {
	findCourseById
};
