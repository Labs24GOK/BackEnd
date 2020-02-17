const express = require('express');

const {
  findAllStudents,
  findStudentById,
  deleteAStudent,
  createAStudent,
  editAStudent,
  getDropdowns,
  getAllCoursesOfStudent
} = require('../controllers/student.controller');

const {
  validateStudentID,
  checkIfStudentExistsByID,
  validateStudentBody
} = require('../controllers/student.middleware');

const router = express.Router();

router.param('studentID', validateStudentID);

router.get('/student/dropdowns', getDropdowns);
router.get('/students', findAllStudents);
router.post('/student', validateStudentBody, createAStudent);
router.get('/student/:studentID', checkIfStudentExistsByID, findStudentById);
router.get(
  '/student/:studentID/courses',
  checkIfStudentExistsByID,
  getAllCoursesOfStudent
);
router.put(
  '/student/:studentID',
  checkIfStudentExistsByID,
  validateStudentBody,
  editAStudent
);
router.delete('/student/:studentID', checkIfStudentExistsByID, deleteAStudent);

module.exports = router;
