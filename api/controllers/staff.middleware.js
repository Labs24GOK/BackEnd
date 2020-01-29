const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const Staff = require('../models/staff.model');

const validateCreateStaff = (req, res, next) => {
  const {
    username,
    password,
    email,
    name,
    short_name,
    cpr,
    mobile_number,
    accent,
    gender,
    birthdate,
    teaching_rate,
    admin,
    active
  } = req.body;
  if (
    admin === null ||
    admin === undefined ||
    !username ||
    !email ||
    !name ||
    !password ||
    !gender
  ) {
    next(new AppError('Wrong Body', 400));
  }
  req.user = {
    user_type: admin ? 'admin' : 'staff',
    username,
    email,
    name,
    password,
    short_name: short_name || null
  };

  req.staff = {
    teaching_rate,
    active: active || true,
    cpr: cpr || null,
    mobile_number: mobile_number || null,
    gender,
    accent: accent || null,
    birthdate: birthdate || null
  };

  next();
};

const validateEditStaff = (req, res, next) => {
  const {
    username,
    email,
    name,
    short_name,
    cpr,
    mobile_number,
    accent,
    gender,
    birthdate,
    teaching_rate,
    admin,
    active
  } = req.body;
  if (
    admin === null ||
    admin === undefined ||
    !username ||
    !email ||
    !name ||
    !gender
  ) {
    next(new AppError('Wrong Body', 400));
  }
  req.user = {
    user_type: admin ? 'admin' : 'staff',
    username,
    email,
    name,
    short_name: short_name || null
  };

  req.staff = {
    teaching_rate,
    cpr: cpr || null,
    mobile_number: mobile_number || null,
    gender,
    accent: accent || null,
    birthdate: birthdate || null,
    active
  };
  next();
};

const validateStaffID = (req, res, next) => {
  console.log(req.params.staffID);
  const staffID = +req.params.staffID;
  console.log(staffID);
  if (isNaN(staffID)) {
    next(new AppError('Please enter a valid ID', 401));
  }
  req.staffID = staffID;
  next();
};

const validateUniqueFieldsInStaff = catchAsync(async (req, res, next) => {
  const { cpr } = req.staff;
  const staff = await Staff.findByCPR(cpr);
  if (staff) {
    next(new AppError('Staff member with that CPR already exists'));
  }
});

module.exports = {
  validateCreateStaff,
  validateStaffID,
  validateEditStaff
};
