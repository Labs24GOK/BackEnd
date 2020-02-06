const Student = require('../models/student.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

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

const createAStudent = catchAsync(async (req, res) => {
  const [newStudent] = await Student.create(req.student);
  const student = await Student.findByID(newStudent.id);
  res.status(201).json(student);
});

const editAStudent = catchAsync(async (req, res) => {
  const [editedStudent] = await Student.update(req.studentID, req.student);
  const student = await Student.findByID(editedStudent.id);
  res.status(200).json(student);
});

const getDropdowns = catchAsync(async (req, res) => {
  const dropdowns = [
    Student.getAllSchoolGrades(),
    Student.getAllBlocks(),
    Student.getAllPreferredContactType(),
    Student.getAllLocations(),
    Student.getAllFamilies()
  ];
  const [
    school_grades,
    blocks,
    contact_types,
    locations,
    families
  ] = await Promise.all(dropdowns);
  return res.status(200).json({
    school_grades,
    blocks,
    contact_types,
    locations,
    families
  });
});

module.exports = {
  findAllStudents,
  findStudentById,
  deleteAStudent,
  createAStudent,
  editAStudent,
  getDropdowns
};
