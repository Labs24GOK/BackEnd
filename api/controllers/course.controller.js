const Course = require('../models/course.model');
const CourseEnrollment = require('../models/course_enrollment.model');
const Staff = require('../models/staff.model');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

const findCourseById = catchAsync(async (req, res) => {
  console.log(req.course);
  return res.status(200).json(req.course);
});

const findAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find(req.query);
  /// GET ALL ACTIVE AND NON ACTIVE STUDENTS --> NEEDS TO BE REFACTORED INTO A QUERY FOR BETTER PERFORMANCE
  const modifiedCourses = await courses.map(async course => {
    const students = await CourseEnrollment.findByCourseID(course.course_id);
    let activeStudents = 0;
    for (student of students) {
      if (
        student.student_result_type === 'confirm' ||
        student.student_result_type === 'pass'
      ) {
        activeStudents++;
      }
    }
    const modifiedCourse = {
      ...course,
      activeStudents,
      totalStudents: students.length
    };
    return modifiedCourse;
  });
  const returning = await Promise.all(modifiedCourses);
  return res.status(200).json(returning);
});

const deleteACourse = catchAsync(async (req, res) => {
  const course = await Course.remove(req.params.courseID);
  return res
    .status(200)
    .json({ message: 'course successfully deleted', course });
});

const createACourse = catchAsync(async (req, res) => {
  const [id] = await Course.create(req.courseValidated);
  console.log(id);
  const course = await Course.findByID(id);
  return res.status(200).json(course);
});

const editACourse = catchAsync(async (req, res) => {
  const [id] = await Course.edit(req.courseValidated, req.courseID);
  const course = await Course.findByID(id);
  return res.status(200).json(course);
});

const populateCourseDropdowns = catchAsync(async (req, res) => {
  const dropdowns = [
    Course.findAllTerms(),
    Course.findAllCourseTypes(),
    Course.findAllGroupTypes(),
    Course.findAllSchoolGrades(),
    Course.findAllLevels(),
    Course.findAllCourseSchedules(),
    Course.findAllRooms(),
    Staff.findAll()
  ];
  const [
    terms,
    course_types,
    group_types,
    school_grades,
    levels,
    course_schedules,
    rooms,
    staff
  ] = await Promise.all(dropdowns);
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
