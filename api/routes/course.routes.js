const express = require('express');

const {
  findCourseById,
  findAllCourses,
  createACourse,
  editACourse,
  deleteACourse,
  populateCourseDropdowns,
  getAllStudentsInACourse
} = require('../controllers/course.controller');

const {
  validateCourseBody,
  validateCourseID,
  checkIfCourseExistsByID
} = require('../controllers/course.middleware');

const router = express.Router();

router.param('courseID', validateCourseID);

router.get('/course', findAllCourses);
router.post('/course', validateCourseBody, createACourse);
router.get('/course/dropdowns', populateCourseDropdowns);
router.get('/course/:courseID', checkIfCourseExistsByID, findCourseById);
router.get(
  '/course/:courseID/students',
  checkIfCourseExistsByID,
  getAllStudentsInACourse
);
router.put(
  '/course/:courseID',
  checkIfCourseExistsByID,
  validateCourseBody,
  editACourse
);
router.delete('/course/:courseID', checkIfCourseExistsByID, deleteACourse);

module.exports = router;
