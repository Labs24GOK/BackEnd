const express = require('express');

const {
  enrollAStudentInCourse,
  unenrollAStudentInCourse,
  editEnrollment,
  getAllEnrollmentsOfCourses,
  getOneEnrollment,
  getCourseEnrollmentDropdowns
} = require('../controllers/course_enrollment.controller');

const {
  validateCourseEnrollmentBody,
  validateIfStudentIsEnrolled
} = require('../controllers/course_enrollment.middleware');

const {
  validateCourseID,
} = require('../controllers/course.middleware');

const {
  validateStudentID
} = require('../controllers/student.middleware');

const router = express.Router();

// router.use(validateCourseID);
// router.use(checkIfCourseExistsByID);
// router.use(validateStudentID);
// router.use(checkIfStudentExistsByID);
// router.use(validateIfStudentIsEnrolled);

const validation = [
  validateCourseID,
  validateStudentID,
  validateIfStudentIsEnrolled
];

router.get('/courseenrollments', getAllEnrollmentsOfCourses);

router.get(
  '/student/:studentID/course/:courseID',
  ...validation,
  getOneEnrollment
);

router.post(
  '/student/:studentID/course/:courseID',
  ...validation,
  validateCourseEnrollmentBody,
  enrollAStudentInCourse
);

router.delete(
  '/student/:studentID/course/:courseID',
  ...validation,
  unenrollAStudentInCourse
);

router.put(
  '/student/:studentID/course/:courseID',
  ...validation,
  validateCourseEnrollmentBody,
  editEnrollment
);

router.get('/resultTypes', getCourseEnrollmentDropdowns);

module.exports = router;
