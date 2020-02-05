const { Staff, Student, User, Family } = require('./seedData');
const db = require('../../database/db-config');
const cleaner = require('knex-cleaner');
const StudentModel = require('../models/student.model');
const StaffModel = require('../models/staff.model');

const school_grade = require('../../database/seeds/02-school_grade').seed;
const preferred_contact_type = require('../../database/seeds/03-preferred_contact_type')
  .seed;
const location = require('../../database/seeds/04-location').seed;
const block = require('../../database/seeds/05-block').seed;
const term = require('../../database/seeds/08-term').seed;
const group_type = require('../../database/seeds/09-group_type').seed;
const course_type = require('../../database/seeds/10-course_type').seed;
const pacing_guide = require('../../database/seeds/11-pacing_guide').seed;
const level = require('../../database/seeds/12-level').seed;
const course_schedule = require('../../database/seeds/13-course_schedule').seed;
const room = require('../../database/seeds/14-room').seed;
const result_type = require('../../database/seeds/17-result_type').seed;

const cleanDB = async db => {
  return cleaner.clean(db, {
    mode: 'truncate',
    ignoreTables: [
      'knex_migrations',
      'knex_migrations_lock',
      'school_grade',
      'preferred_contact_type',
      'sessions',
      'location',
      'block',
      'term',
      'group_type',
      'course_type',
      'pacing_guide',
      'level',
      'course_schedule',
      'room',
      'result_type'
    ]
  });
};

// IF YOU ONLY NEED USER/STAFF SEED
const seedAStaff = async () => {
  const user = new User('staff');
  const [userid] = await db('user').insert(user);
  const staff = new Staff(userid);
  const [id] = await db('staff')
    .insert(staff)
    .returning('*');
  return StaffModel.findByID(id);
};

// IF YOU ONLY NEED USER/STAFF(ADMIN) SEED
const seedAnAdmin = async () => {
  const user = new User('admin');
  const [userid] = await db('user').insert(user);
  const admin = new Staff(userid);
  const [id] = await db('staff')
    .insert(admin)
    .returning('*');
  return StaffModel.findByID(id);
};

//IF YOU ONLY NEED USER/PARENT SEED
const seedAParent = async () => {
  const user = new User('parent');
  const [id] = await db('user')
    .insert(user)
    .returning('user_id');
  const family = new Family(id);
  return db('family')
    .insert(family)
    .returning('id');
};

// IF YOU ONLY NEED USER/PARENT/STUDENT SEED
const seedAStudent = async () => {
  const [parentID] = await seedAParent();
  const student = new Student(parentID);
  const [id] = await db('student')
    .insert(student)
    .returning('id');
  return StudentModel.findByID(id);
};

//// TEMPORARY - THIS QUERIES WILL BE MOVED TO THEIR OWN MODEL AT ONE POINT
const getSchoolGradeByID = id => {
  return db('school_grade')
    .where('id', '=', id)
    .first();
};
const getBlockByBlockCode = blockcode => {
  return db('block')
    .where('block_code', '=', blockcode)
    .first();
};
const getPreferredContactTypeByID = id => {
  return db('preferred_contact_type')
    .where('id', '=', id)
    .first();
};
const getLocationByID = id => {
  return db('location')
    .where('id', '=', id)
    .first();
};

const getParentByID = id => {
  return db('family as f')
    .where('f.id', '=', id)
    .join('user as u', 'u.user_id', 'f.user_id')
    .first();
};

module.exports = {
  cleanDB,
  seedAParent,
  seedAStudent,
  seedAStaff,
  seedAnAdmin,
  getSchoolGradeByID,
  getBlockByBlockCode,
  getPreferredContactTypeByID,
  getLocationByID,
  getParentByID
};
