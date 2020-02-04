const Course = require('../models/course.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const validateCourseID = (req, res, next) => {
  const courseID = +req.params.courseID;
  if (isNaN(courseID)) {
    return res.status(401).json({ error: 'Please enter a valid ID' });
  }
  req.courseID = courseID;
  next();
};

const checkIfCourseExistsByID = catchAsync(async (req, res, next) => {
  const course = await Course.findByID(req.courseID);
  console.log(course);
  if (!course) {
    next(new AppError('Staff with that ID does not exist', 406));
    return;
  }
  req.course = course;
  next();
});

const validateCourseBody = (req, res, next) => {
  const {
    term_id,
    course_type_id,
    group_type_id,
    school_grade_id,
    level_id,
    section,
    subsection,
    hourly_rate,
    course_schedule_id,
    room_id,
    start_time,
    end_time,
    teacher_id,
    notes,
    status
  } = req.body;

  if (
    !term_id ||
    !course_type_id ||
    !group_type_id ||
    !school_grade_id ||
    !level_id ||
    !section ||
    !subsection ||
    !hourly_rate ||
    !course_schedule_id ||
    !room_id ||
    !start_time ||
    !end_time ||
    !teacher_id ||
    !notes ||
    !status
  ) {
    next(new AppError('Wrong body', 400));
    return;
  }

  req.courseValidated = {
    term_id,
    course_type_id,
    group_type_id,
    school_grade_id,
    level_id,
    section,
    subsection,
    hourly_rate,
    course_schedule_id,
    room_id,
    start_time,
    end_time,
    teacher_id,
    notes,
    status
  };
  next();
};

module.exports = {
  validateCourseID,
  checkIfCourseExistsByID,
  validateCourseBody
};
