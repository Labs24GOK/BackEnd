const express = require('express');

const {
	takeAttendance,
	getAttendanceRecord
} = require('../controllers/attendance.controller');

const router = express.Router();

router.post('/attendance', takeAttendance);
router.get('/attendance/:course_enrollment_id', getAttendanceRecord);

module.exports = router;
