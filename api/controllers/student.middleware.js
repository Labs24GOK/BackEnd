const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const Student = require('../models/student.model');

const validateStudentID = (req, res, next) => {
  const studentID = +req.params.studentID;
  if (isNaN(studentID)) {
    next(new AppError('Please enter a valid ID', 401));
    return;
  }
  req.studentID = studentID;
  next();
};

const checkIfStudentExistsByID = catchAsync(async (req, res, next) => {
  const student = await Student.findByID(req.studentID);
  if (!student) {
    next(new AppError('Student with that ID does not exist', 406));
  }
  req.student = student;
  next();
});

module.exports = {
  validateStudentID,
  checkIfStudentExistsByID
};
