const Joi = require('@hapi/joi');

const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const Course = require('../models/course.model');

const validateCourseID = catchAsync(
  async (req, res, next) => {
    const courseID = +req.params.courseID;
    if (isNaN(courseID)) {
      return res
        .status(401)
        .json({ error: 'Please enter a valid ID' });
    }
    const course = await Course.findByID(courseID);
    if (!course) {
      next(
        new AppError(
          'Course with that ID does not exist',
          406
        )
      );
      return;
    }
    req.course = course;
    req.courseID = courseID;
    next();
  }
);

const validateCourseBody = catchAsync(
  async (req, res, next) => {
    if (!req.body.school_grade_id) {
      //// DEFAULTS TO N/A
      req.body.school_grade_id = 1;
    }
    const schema = Joi.object({
      // REQUIRED
      end_date: Joi.string().required(),
      start_date: Joi.string().required(),
      end_time: Joi.string().required(),
      start_time: Joi.string().required(),
      section: Joi.string().required(),

      term_id: Joi.number().integer().required(),
      course_type_id: Joi.number().integer().required(),
      group_type_id: Joi.number().integer().required(),
      school_grade_id: Joi.number().integer().required(),
      level_id: Joi.number().integer().required(),
      course_schedule_id: Joi.number().integer().required(),
      teacher_id: Joi.number().integer().required(),
      room_id: Joi.number().integer().required(),

      /// NOT REQUIRED
      hourly_rate: Joi.number(),
      notes: Joi.string().allow(''),
      status: Joi.string()
    });
    await schema.validateAsync(req.body);
    next();
  }
);

module.exports = {
  validateCourseID,
  validateCourseBody
};
