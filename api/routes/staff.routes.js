const express = require('express');

const {
  findStaffById,
  findAllStaff,
  createAStaff
} = require('../controllers/staff.controller');

const {
  validateCreateStaff,
  validateStaffID
} = require('../controllers/staff.middleware');

const router = express.Router();

router.get('/staff', findAllStaff);
router.post('/staff', validateCreateStaff, createAStaff);
router.use(validateStaffID);
router.get('/staff/:staffID', findStaffById);
router.put('/staff:staffID', validateCreateStaff, createAStaff);

module.exports = router;
