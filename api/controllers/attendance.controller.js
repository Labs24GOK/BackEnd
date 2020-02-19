const { catchAsync } = require('../utils/catchAsync');
const Attendance = require('../models/attendance.model');

const takeAttendance = catchAsync(async (req, res) => {
	await Attendance.takeAttendance(req.body.meeting, req.body.students);
	res.status(201).json({ message: 'Attendance submitted' });
});

const getAttendanceRecord = catchAsync(async (req, res) => {
	//get list of all teachers from staff model
	const attendanceList = await Attendance.getAttendanceRecord(req.param.date);
	res.status(200).json({ attendanceList });
});

module.exports = {
	takeAttendance,
	getAttendanceRecord
};
