const { catchAsync } = require('../utils/catchAsync');
const Attendance = require('../models/attendance.model');
const Staff = require('../models/staff.model');

const takeAttendance = catchAsync(async (req, res) => {
	if (req.meetingId) {
		await Attendance.editAttendance(
			req.meetingId,
			req.body.meeting,
			req.body.students
		);
		res.status(200).json({ message: 'Attendance edited' });
		return;
	}
	await Attendance.takeAttendance(req.body.meeting, req.body.students);
	res.status(201).json({ message: 'Attendance submitted' });
});

// const getAttendanceRecord = catchAsync(async (req, res) => {
// 	// get list of all teachers from staff model
// 	const teachers = await Staff.findAll();
// 	const attendanceList = await Attendance.getAttendanceRecord(req.params.date);
// 	res.status(200).json({
// 		teachers,
// 		attendanceList
// 	});
// });

const getAttendanceRecord = catchAsync(async (req, res) => {
	// get list of all teachers from staff model
	const { course_enrollment_id } = req.params;
	const attendanceList = await Attendance.getAttendanceRecordByStudent(
		+course_enrollment_id
	);
	res.status(200).json({
		attendanceList
	});
});

module.exports = {
	takeAttendance,
	getAttendanceRecord
};
