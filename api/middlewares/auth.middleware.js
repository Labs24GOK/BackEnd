// const AppError = require('../utils/AppError');
// const { catchAsync } = require('../utils/catchAsync');
// const Auth = require('../models/auth.model');
// const User = require('../models/user.model');
// const Student = require('../models/student.model');

// const validateRegisterStudent = catchAsync(
//   async (req, res, next) => {
//     const {
//       username,
//       password,
//       email,
//       user_type
//     } = req.body.user;

//     const {
//       father_name,
//       mother_name,
//       primary_telephone,
//       secondary_telephone
//     } = req.body.family;

//     const {
//       first_name,
//       additional_names,
//       cpr,
//       email_student,
//       birthdate,
//       location_id
//     } = req.body.student;

//     if (
//       (
//         !username ||
//           !password ||
//           !email ||
//           !user_type ||
//           !father_name ||
//           !mother_name ||
//           !primary_telephone ||
//           !secondary_telephone ||
//           !first_name ||
//           !additional_names ||
//           !cpr ||
//           !email_student,
//         !email || !birthdate || !location_id
//       )
//     ) {
//       next(new AppError('Wrong Body', 400));
//       return;
//     }
//     req.user = {
//       username,
//       email,
//       password,
//       user_type
//     };

//     req.family = {
//       father_name,
//       mother_name,
//       primary_telephone,
//       secondary_telephone
//     };

//     req.student = {
//       first_name,
//       additional_names,
//       cpr,
//       email: email_student,
//       birthdate,
//       location_id
//     };

//     // CHECKS IF EMAIL USERNAME OR CPR IS IN USE
//     const userByEmail = await User.findBy('email', email);
//     const userByUsername = await User.findBy(
//       'username',
//       username
//     );

//     if (userByEmail) {
//       return next(
//         new AppError(
//           'User with that email already exists',
//           401
//         )
//       );
//     }
//     if (userByUsername) {
//       return next(
//         new AppError(
//           'User with that username already exists',
//           401
//         )
//       );
//     }

//     if (cpr) {
//       console.log('cpr', cpr);
//       const studentByCPR = await Student.findByCPR(cpr);
//       console.log('studentByCPR', studentByCPR);
//       if (studentByCPR) {
//         return next(
//           new AppError(
//             'Student with that CPR already exists',
//             401
//           )
//         );
//       }
//     }
//     next();
//   }
// );

// module.exports = {
//   validateRegisterStudent
// };
