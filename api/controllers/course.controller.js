const Course = require('../models/course.model');
const Staff = require('../models/staff.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const findCourseById = catchAsync(async (req, res) => {
  return res.status(200).json(req.course);
});

const findAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find(req.query);
  return res.status(200).json(courses);
});

const deleteACourse = catchAsync(async (req, res) => {
  const course = await Course.remove(req.params.courseID);
  return res
    .status(200)
    .json({ message: 'course successfully deleted', course });
});

const createACourse = catchAsync(async (req, res) => {
  const [id] = await Course.create(req.courseValidated);
  const course = await Course.findByID(id);
  return res.status(200).json(course);
});

const editACourse = catchAsync(async (req, res) => {
  const [id] = await Course.edit(req.courseValidated, req.courseID);
  const course = await Course.findByID(id);
  return res.status(200).json(course);
});

const populateCourseDropdowns = catchAsync(async (req, res) => {
  const terms = await Course.findAllTerms();
  const course_types = await Course.findAllCourseTypes();
  const group_types = await Course.findAllGroupTypes();
  const school_grades = await Course.findAllSchoolGrades();
  const levels = await Course.findAllLevels();
  const course_schedules = await Course.findAllCourseSchedules();
  const rooms = await Course.findAllRooms();
  const staff = await Staff.findAll();
  return res.status(200).json({
    terms,
    course_types,
    group_types,
    school_grades,
    levels,
    course_schedules,
    rooms,
    staff
  });
});

module.exports = {
  findCourseById,
  findAllCourses,
  deleteACourse,
  createACourse,
  editACourse,
  populateCourseDropdowns
};
