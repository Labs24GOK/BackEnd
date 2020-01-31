const bcrypt = require('bcrypt');
const Course = require('../models/course.model');

const Staff = require('../models/staff.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const findStaffById = catchAsync(async (req, res, next) => {
  console.log(req.staffUser);
  return res.status(200).json({ ...req.staffUser, name: 'Hello' });
});

const findAllStaff = catchAsync(async (req, res) => {
  const allStaff = await Staff.find(req.query);
  return res.status(200).json(allStaff);
});

const createAStaff = catchAsync(async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.user.password, 10);
  req.user = { ...req.user, password: hashedPassword };
  const newStaffID = await Staff.create(req.user, req.staff);
  const newStaff = await Staff.findByID(newStaffID[0]);
  return res.status(201).json(newStaff);
});

const editAStaff = catchAsync(async (req, res) => {
  const editedStaff = await Staff.edit(req.staffID, req.user, req.staff);
  return res.status(201).json(editedStaff);
});

const deleteAStaff = catchAsync(async (req, res) => {
  await Staff.remove(req.staffID);
  return res.status(200).json({ message: 'Staff Deleted' });
});

const getAllCoursesByStaff = catchAsync(async (req, res) => {
  const courses = await Course.findCoursesByTeacherID(req.staffID);
  res.status(200).json(courses);
});

module.exports = {
  findStaffById,
  findAllStaff,
  createAStaff,
  editAStaff,
  deleteAStaff,
  getAllCoursesByStaff
};
