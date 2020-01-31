const express = require('express');

const {
	findStaffById,
	findAllStaff,
	createAStaff,
	editAStaff,
	deleteAStaff,
	getAllCoursesByStaff
} = require('../controllers/staff.controller');

const {
	validateCreateStaff,
	validateEditStaff,
	validateStaffID
} = require('../controllers/staff.middleware');

const router = express.Router();

router.param('staffID', validateStaffID);

router.get('/staff', findAllStaff);
router.post('/staff', validateCreateStaff, createAStaff);
router.get('/staff/:staffID', findStaffById);
router.put('/staff/:staffID', validateEditStaff, editAStaff);
router.delete('/staff/:staffID', deleteAStaff);
router.get('/staff/:staffID/courses', getAllCoursesByStaff);

module.exports = router;
