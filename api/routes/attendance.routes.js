const express = require('express');

const {
	takeAttendance,
	getAttendanceRecord
} = require('../controllers/attendance.controller');

const router = express.Router();

router.post('/attendance', takeAttendance);
router.get('/attendance/:date', getAttendanceRecord);

module.exports = router;
