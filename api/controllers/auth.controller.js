const bcrypt = require('bcrypt');
const Auth = requre('../models/auth.model.js');
const { catchAsync } = require('../utils/catchAsync');

const registerStudent = catchAsync(async (req, res) => {
  const hashedPassword = bcrypt.hashSync(
    user,
    password,
    10
  );
  req.body.user = {
    username: user.username,
    password: hashedPassword,
    name: user.name || null,
    email: user.email || null,
    user_type: user.user_type
  };
  req.body.family = {
    mother_name: family.mother_name,
    father_name: family.father_name,
    primary_telephone: family.primary_telephone,
    secondary_telephone: family.secondary_telephone
  };

  req.body.student = {
    first_name: student.first_name,
    additional_names: student.additional_names,
    cpr: student.cpr,
    email: student.email,
    birthdate: student.birthdate,
    registration_date: new Date(),
    location_id: student.location_id
  };

  const newStudent = Auth.registerStudent(
    req.body.user,
    req.body.family,
    req.body.student
  );
  return res.status(201).json(newStudent);
});

module.exports = {
  registerStudent
};
