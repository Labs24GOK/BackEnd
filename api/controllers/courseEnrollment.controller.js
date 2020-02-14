const Course = require('../models/course.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const getAllCoursesByStudent = catchAsync(async (req, res) => {
	const courses = await Course.findCoursesByStudentID(req.studentID);
	res.status(200).json(courses);
});

module.exports = {
	getAllCoursesByStudent
};
