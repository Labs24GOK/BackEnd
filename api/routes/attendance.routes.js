const express = require('express');

const {
	takeAttendance,
	getAttendanceRecord
} = require('../controllers/attendance.controller');

const {
	checkIfMeetingExists
} = require('../controllers/attendance.middleware');

const router = express.Router();

router.post('/attendance', checkIfMeetingExists, takeAttendance);
router.get('/attendance/:course_enrollment_id', getAttendanceRecord);

module.exports = router;
