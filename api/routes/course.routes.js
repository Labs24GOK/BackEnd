const express = require('express');

const {
	findCourseById,
	findAllCourses,
	createACourse,
	editACourse,
	deleteACourse
} = require('../controllers/course.controller');

const {
	validateCreateCourse,
	validateEditCourse,
	validateCourseID
} = require('../controllers/course.middleware');

const router = express.Router();

router.param('courseID', validateCourseID);

router.get('/course', findAllCourses);
router.post('/course', validateCreateCourse, createACourse);
router.get('/course/:courseID', findCourseById);
router.put('/course/:courseID', validateEditCourse, editACourse);
router.delete('/course/:courseID', deleteACourse);

module.exports = router;
