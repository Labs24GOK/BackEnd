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

const validateCourseBody = async (req, res, next) => {
	const {
		term_id,
		course_type_id,
		group_type_id,
		school_grade_id,
		level_id,
		section,
		subsection,
		hourly_rate,
		course_schedule_id,
		room_id,
		start_time,
		end_time,
		teacher_id,
		notes,
		status
	} = req.body;

	if (
		!term_id ||
		!course_type_id ||
		!group_type_id ||
		!school_grade_id ||
		!level_id ||
		!section ||
		!subsection ||
		!hourly_rate ||
		!course_schedule_id ||
		!room_id ||
		!start_time ||
		!end_time ||
		!teacher_id ||
		!notes ||
		!status
	) {
		return res.status(400).json({ error: 'Wrong body' });
	}

	req.courseValidated = {
		term_id,
		course_type_id,
		group_type_id,
		school_grade_id,
		level_id,
		section,
		subsection,
		hourly_rate,
		course_schedule_id,
		room_id,
		start_time,
		end_time,
		teacher_id,
		notes,
		status
	};
	next();
};

module.exports = {
	validateCourseID,
	checkIfCourseExistsByID,
	validateCourseBody
};
