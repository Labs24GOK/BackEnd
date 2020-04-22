const bcrypt = require('bcrypt');

const { catchAsync } = require('../utils/catchAsync');

const Auth = require('../models/auth.model');

const registerUser = catchAsync(async (req, res) => {
  const hashedPassword = bcrypt.hashSync(
    req.body.user.password,
    10
  );

  req.body.user = {
    ...req.body.user,
    password: hashedPassword
  };
 

  const newUser= Auth.registerUser(
    req.body.user,
  );
  return res.status(201).json(newUser);
});

module.exports = {
  registerUser
};
