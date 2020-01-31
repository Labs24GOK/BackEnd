const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const Staff = require('../models/staff.model');
const User = require('../models/user.model');

const validateCreateStaff = catchAsync(async (req, res, next) => {
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

  // CHECKS IF EMAIL USERNAME OR CPR IS IN USE
  const userByEmail = await User.findBy('email', email);
  const userByUsername = await User.findBy('username', username);

  if (userByEmail) {
    next(new AppError('User with that email already exists', 401));
  }
  if (userByUsername) {
    next(new AppError('User with that username already exists', 401));
  }

  if (cpr) {
    const staffByCPR = await Staff.findByCPR(cpr);
    if (staffByCPR) {
      next(new AppError('Staff member with that CPR already exists', 401));
    }
  }

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
});

const validateEditStaff = catchAsync(async (req, res, next) => {
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

  const userByEmail = await User.findBy('email', email);
  const userByUsername = await User.findBy('username', username);

  if (userByEmail.user_id !== req.staffUser.user_id) {
    next(new AppError('User with that email already exists', 401));
  }
  if (userByUsername.user_id !== req.staffUser.user_id) {
    next(new AppError('User with that username already exists', 401));
  }

  if (cpr) {
    const staffByCPR = await Staff.findByCPR(cpr);
    if (staffByCPR.staff_id !== req.staffUser.staff_id) {
      next(new AppError('Staff member with that CPR already exists', 401));
    }
  }
  next();
});

const validateStaffID = (req, res, next) => {
  const staffID = +req.params.staffID;
  if (isNaN(staffID)) {
    next(new AppError('Please enter a valid ID', 401));
  }
  req.staffID = staffID;
  next();
};

const checkIfStaffExistsByID = catchAsync(async (req, res, next) => {
  const staff = await Staff.findByID(req.staffID);
  if (!staff) {
    next(new AppError('Staff with that ID does not exist', 406));
    return;
  }
  req.staffUser = staff;
  console.log(req.staffUser);
  next();
});

module.exports = {
  validateCreateStaff,
  validateStaffID,
  validateEditStaff,
  checkIfStaffExistsByID
};
