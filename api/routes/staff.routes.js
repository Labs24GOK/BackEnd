const express = require('express');

const {
  findStaffById,
  findAllStaff,
  createAStaff,
  editAStaff,
  deleteAStaff,
  getAllCoursesByStaff
} = require('../controllers/Staff/staff.controller');

const {
  validateCreateStaff,
  validateEditStaff,
  validateStaffID,
  checkIfStaffExistsByID
} = require('../controllers/Staff/staff.middleware');

const router = express.Router();

router.param('staffID', validateStaffID, checkIfStaffExistsByID);

router.get('/staff', findAllStaff);
router.post('/staff', validateCreateStaff, createAStaff);
router.get('/staff/:staffID', findStaffById);
router.put(
  '/staff/:staffID',
  checkIfStaffExistsByID,
  validateEditStaff,
  editAStaff
);
router.delete('/staff/:staffID', deleteAStaff);

module.exports = router;
