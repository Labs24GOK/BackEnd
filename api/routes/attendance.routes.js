const express = require('express');

const { takeAttendance } = require('../controllers/attendance.controller');

const router = express.Router();

router.post('/attendance', takeAttendance);

module.exports = router;
