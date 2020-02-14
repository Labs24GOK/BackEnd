const returning = [
  's.id as student_id',
  's.cpr',
  's.first_name',
  's.additional_names',
  's.registration_date',
  's.gender',
  's.birthdate',
  's.school_grade_id',
  'sg.name as school_grade',
  's.school_name',
  's.grade_updated',
  's.home_telephone',
  's.mobile_telephone',
  's.block_code',
  'b.neighborhood as block_code_neighborhood',
  's.road',
  's.building',
  's.flat',
  's.email',
  's.notes',
  's.preferred_contact_type_id',
  'pct.method as preferred_contact_type',
  's.no_call',
  's.delinquent',
  's.expelled',
  's.location_id',
  'l.name as location',
  's.family_id',
  'u.name as parent_name',
  's.primary_emergency_contact_name',
  's.primary_emergency_relationship',
  's.primary_emergency_phone',
  's.emergency_contact_name',
  's.emergency_relationship',
  's.emergency_phone'
];

const db = require('../../database/db-config');

const create = body => {
  return db('student')
    .insert(body)
    .returning('*');
};

const findAll = () => {
  return db('student as s')
    .join('school_grade as sg', 'sg.id', 's.school_grade_id')
    .join('block as b', 'b.block_code', 's.block_code')
    .join(
      'preferred_contact_type as pct',
      'pct.id',
      's.preferred_contact_type_id'
    )
    .join('location as l', 'l.id', 's.location_id')
    .join('family as f', 'f.id', 's.family_id')
    .join('user as u', 'u.user_id', 'f.user_id')
    .select(returning)
    .orderBy('s.id', 'desc');
};

const findByID = id => {
  return db('student as s')
    .where('s.id', '=', id)
    .join('school_grade as sg', 'sg.id', 's.school_grade_id')
    .join('block as b', 'b.block_code', 's.block_code')
    .join(
      'preferred_contact_type as pct',
      'pct.id',
      's.preferred_contact_type_id'
    )
    .join('location as l', 'l.id', 's.location_id')
    .join('family as f', 'f.id', 's.family_id')
    .join('user as u', 'u.user_id', 'f.user_id')
    .select(returning)
    .first();
};

const findByCPR = cpr => {
  return db('student as s')
    .where('s.cpr', '=', cpr)
    .join('school_grade as sg', 'sg.id', 's.school_grade_id')
    .join('block as b', 'b.block_code', 's.block_code')
    .join(
      'preferred_contact_type as pct',
      'pct.id',
      's.preferred_contact_type_id'
    )
    .join('location as l', 'l.id', 's.location_id')
    .join('family as f', 'f.id', 's.family_id')
    .join('user as u', 'u.user_id', 'f.user_id')
    .select(returning)
    .first();
};

const remove = id => {
  return db('student')
    .del()
    .where({ id });
};

const update = (id, body) => {
  return db('student')
    .update(body)
    .where({ id })
    .returning('*');
};

const getAllSchoolGrades = () => {
  return db('school_grade').select(['id', 'name']);
};

const getAllBlocks = () => {
  return db('block').select(['block_code', 'neighborhood']);
};

const getAllPreferredContactType = () => {
  return db('preferred_contact_type').select(['id', 'method']);
};

const getAllLocations = () => {
  return db('location').select(['id', 'name']);
};

const getAllFamilies = () => {
  return db('family as f')
    .join('user as u', 'u.user_id', 'f.user_id')
    .select(['f.id', 'u.name']);
};

module.exports = {
  findAll,
  findByID,
  findByCPR,
  remove,
  create,
  update,
  getAllSchoolGrades,
  getAllBlocks,
  getAllPreferredContactType,
  getAllLocations,
  getAllFamilies
};
