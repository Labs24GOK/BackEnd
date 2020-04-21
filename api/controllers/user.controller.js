const { catchAsync } = require('../utils/catchAsync');

const Users = require('../models/user.model');


const findAllUsers = catchAsync(async (req, res, next) => {
  const users= await Users.findAll();
  return res.status(200).json(users);
});

module.exports = { findAllUsers };