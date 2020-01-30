const Course = require('../models/course.model');

const validateCourseID = (req, res, next) => {
	console.log(req.params.courseID);
	const courseID = +req.params.courseID;
	console.log(courseID);
	if (isNaN(courseID)) {
		return res.status(401).json({ error: 'Please enter a valid ID' });
	}
	req.courseID = courseID;
	next();
};

const checkIfCourseExistsByID = async (req, res, next) => {
	const course = await Course.findByID(req.courseID);
	if (!course) {
		return res.status(406).json({ error: 'Staff with that ID does not exist' });
	}
	req.course = course;
	next();
};

module.exports = {
	validateCourseID,
	checkIfCourseExistsByID
};
