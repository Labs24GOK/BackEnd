// const bcrypt = require('bcrypt');

// const { catchAsync } = require('../utils/catchAsync');

// const Auth = require('../models/auth.model');

// const registerStudent = catchAsync(async (req, res) => {
//   const hashedPassword = bcrypt.hashSync(
//     req.body.user.password,
//     10
//   );

//   req.body.user = {
//     ...req.body.user,
//     password: hashedPassword
//   };
//   req.body.student = {
//     ...req.body.student,
//     registration_date: new Date()
//   };

//   const newStudent = Auth.registerStudent(
//     req.body.user,
//     req.body.family,
//     req.body.student
//   );
//   return res.status(201).json(newStudent);
// });

// module.exports = {
//   registerStudent
// };
