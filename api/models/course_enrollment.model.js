const db = require('../../database/db-config');

const returning = [
	'course.id as course_id',
	'student.id as student_id',
	'result_type_code.long_description as result_type_code'
];

const findByID = id => {
  return db('course_enrollment')
    .where({ id })
    .returning('*')
    .first();
};

const find = (studentID, courseID) => {
  return db('course_enrollment')
    .where({
      student_id: studentID,
      course_id: courseID
    })
    .first()
    .returning('*');
};

const findAll = () => {
  return db('course_enrollment').returning('*');
};

const create = body => {
  return db('course_enrollment')
    .insert(body)
    .returning('id');
};

const remove = (studentID, courseID) => {
  return db('course_enrollment')
    .del()
    .where({
      student_id: studentID,
      course_id: courseID
    });
};

const edit = (studentID, courseID, body) => {
  return db('course_enrollment')
    .where({
      student_id: studentID,
      course_id: courseID
    })
    .update(body)
    .returning('id');
};

const findCoursesByStudentID = studentID => {
  return db('course_enrollment')
    .where('student_id', '=', studentID)
    .select(returning)
    .join('course', 'course.id', 'course_enrollment.course_id')
    .join('student', 'student.id', 'course_enrollment.student_id')
    .join(
      'result_type_code',
      'result_type_code.id',
      'course_enrollment.result_type_code_id'
    )
    .orderBy('course.id', 'desc');
};

module.exports = {
  create,
  find,
  findByID,
  findAll,
  edit,
  remove,
  findCoursesByStudentID
};
