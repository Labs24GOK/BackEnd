const db = require('../../database/db-config');
const cleaner = require('knex-cleaner');
const StudentModel = require('../models/student.model');
const StaffModel = require('../models/staff.model');
const bcrypt = require('bcrypt');
const faker = require('faker');
const password = bcrypt.hashSync('pass', 8);

class Family {
  constructor(user_id) {
    this.mother_name = 'Mother Name';
    this.father_name = 'Father Name';
    this.block_code = 363;
    this.road = '2550';
    this.building = '298';
    this.flat = '12';
    this.primary_telephone = '12345678';
    this.secondary_telephone = '12345678';
    this.user_id = user_id;
  }
}
class User {
  constructor(role) {
    this.user_type = role;
    this.username = faker.internet.userName();
    this.password = password;
    this.name = 'Really long name';
    this.short_name = 'OneWordName';
    this.email = faker.internet.email();
  }
}
class Student {
  constructor(family_id) {
    this.cpr = faker.helpers.replaceSymbolWithNumber('########');
    this.first_name = 'Onename';
    this.additional_names = 'A lot of names';
    this.gender = 'F';
    this.birthdate = new Date(2003, 4, 23);
    this.school_grade_id = 1;
    this.school_name = 'Alduraz';
    this.home_telephone = '12345678';
    this.mobile_telephone = '12345678';
    this.block_code = 363;
    this.road = '2550';
    this.building = '298';
    this.flat = '12';
    this.email = faker.internet.email();
    this.notes = 'This student is just alright';
    this.preferred_contact_type_id = 1;
    this.no_call = true;
    this.delinquent = false;
    this.expelled = true;
    this.location_id = 1;
    this.family_id = family_id;
  }
}

class Staff {
  constructor(user_id) {
    this.teaching_rate = '0.00';
    this.active = true;
    this.user_id = user_id;
    this.cpr = faker.helpers.replaceSymbolWithNumber('########');
    this.mobile_number = '12345678';
    this.accent = 'British';
    this.gender = 'F';
    this.birthdate = new Date();
  }
}

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
