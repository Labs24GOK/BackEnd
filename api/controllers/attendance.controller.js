const { catchAsync } = require('../utils/catchAsync');
const Attendance = require('../models/attendance.model');

const takeAttendance = catchAsync(async (req, res) => {
  await Attendance.takeAttendance(req.body.meeting, req.body.students);
  res.status(201).json({ message: 'Attendance submitted' });
});

module.exports = {
  takeAttendance
};
