const db = require('../../database/db-config');

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

module.exports = {
  create,
  find,
  findByID,
  findAll,
  edit,
  remove
};
