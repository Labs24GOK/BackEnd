const Student = require('../../models/student.model');
const AppError = require('../../utils/AppError');
const { catchAsync } = require('../../utils/catchAsync');

const findAllStudents = catchAsync(async (req, res, next) => {
  const students = await Student.findAll();
  return res.status(200).json(students);
});

const findStudentById = (req, res) => {
  return res.status(200).json(req.student);
};

const deleteAStudent = catchAsync(async (req, res) => {
  await Student.remove(req.studentID);
  return res.status(200).json({ message: 'Student Deleted' });
});

// const createAStudent = catchAsync(async (req, res) => {
//   const newStaffID = await Staff.create(req.user, req.staff);
//   const newStaff = await Staff.findByID(newStaffID[0]);
//   return res.status(201).json(newStaff);
// });


module.exports = {
  findAllStudents,
  findStudentById,
  deleteAStudent
};
