const express = require('express');

const {
  findCourseById,
  findAllCourses,
  createACourse,
  editACourse,
  deleteACourse,
  populateCourseDropdowns
} = require('../controllers/Courses/course.controller');

const {
  validateCourseBody,
  validateCourseID,
  checkIfCourseExistsByID
} = require('../controllers/Courses/course.middleware');

const router = express.Router();

router.param('courseID', validateCourseID, checkIfCourseExistsByID);

router.get('/course', findAllCourses);
router.post('/course', validateCourseBody, createACourse);
router.get('/course/dropdowns', populateCourseDropdowns);
router.get('/course/:courseID', findCourseById);
router.put('/course/:courseID', validateCourseBody, editACourse);
router.delete('/course/:courseID', deleteACourse);

module.exports = router;
