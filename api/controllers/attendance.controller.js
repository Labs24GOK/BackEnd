const { catchAsync } = require('../utils/catchAsync');
const Attendance = require('../models/attendance.model');
const Staff = require('../models/staff.model');

const takeAttendance = catchAsync(async (req, res) => {
  await Attendance.takeAttendance(
    req.body.meeting,
    req.body.students
  );
  res.status(201).json({ message: 'Attendance submitted' });
});

const getAttendanceRecord = catchAsync(async (req, res) => {
  // get list of all teachers from staff model
  const teachers = await Staff.findAll();
  const attendanceList = await Attendance.getAttendanceRecord(
    req.params.date
  );
  res.status(200).json({
    teachers,
    attendanceList
  });
});

module.exports = {
  takeAttendance,
  getAttendanceRecord
};
