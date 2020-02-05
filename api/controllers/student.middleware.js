const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');
const Student = require('../models/student.model');
const knex = require('../../database/db-config');

const validateStudentID = (req, res, next) => {
  const studentID = +req.params.studentID;
  if (isNaN(studentID)) {
    next(new AppError('Please enter a valid ID', 400));
    return;
  }
  req.studentID = studentID;
  next();
};

const checkIfStudentExistsByID = catchAsync(async (req, res, next) => {
  const student = await Student.findByID(req.studentID);
  if (!student) {
    next(new AppError('Student with that ID does not exist', 400));
  }
  req.student = student;
  next();
});

const validateStudentBody = catchAsync(async (req, res, next) => {
  let {
    first_name,
    cpr,
    additional_names,
    gender,
    birthdate,
    school_grade_id,
    school_name,
    home_telephone,
    mobile_telephone,
    block_code,
    road,
    building,
    flat,
    email,
    notes,
    preferred_contact_type_id,
    location_id,
    family_id,
    no_call,
    delinquent,
    expelled,
    registration_date,
    grade_updated
  } = req.body;
  if (
    (!first_name ||
      !cpr ||
      !additional_names ||
      !gender ||
      !birthdate ||
      !school_name ||
      !home_telephone ||
      !mobile_telephone ||
      !block_code ||
      !road ||
      !building ||
      !flat ||
      !email ||
      !location_id,
    !preferred_contact_type_id,
    !family_id)
  ) {
    next(new AppError('Wrong body', 400));
    return;
  }

  const studentRes = await Student.findByCPR(cpr);
  if (req.method === 'PUT') {
    if (studentRes && studentRes.student_id !== req.student.student_id) {
      return next(new AppError('Student with that cpr already exists', 400));
    }
    if (school_grade_id !== req.student.school_grade_id) {
      grade_updated = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ).toISOString();
    }
  } else {
    if (studentRes) {
      return next(new AppError('Student with that cpr already exists', 400));
    }
  }
  req.student = {
    first_name,
    cpr,
    grade_updated,
    additional_names,
    gender,
    birthdate,
    school_grade_id,
    school_name,
    home_telephone,
    mobile_telephone,
    block_code,
    road,
    building,
    flat,
    email,
    notes,
    preferred_contact_type_id,
    location_id,
    family_id,
    no_call,
    delinquent, 
    expelled, 
    registration_date
  };
  next();
});

module.exports = {
  validateStudentID,
  checkIfStudentExistsByID,
  validateStudentBody
};
