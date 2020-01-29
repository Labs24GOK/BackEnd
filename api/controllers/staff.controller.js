const bcrypt = require('bcrypt');

const Staff = require('../models/staff.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const findStaffById = catchAsync(async (req, res, next) => {
  const staff = await Staff.findByID(req.staffID);
  if (!staff) {
    next(new AppError('No staff member found with that ID', 406));
  }
  return res.status(200).json(staff);
});

const findAllStaff = catchAsync(async (req, res) => {
  const allStaff = await Staff.find();
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

module.exports = {
  findStaffById,
  findAllStaff,
  createAStaff,
  editAStaff,
  deleteAStaff
};
