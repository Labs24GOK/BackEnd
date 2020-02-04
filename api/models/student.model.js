// "id": 6,
// "cpr": "6",
// "registration_date": "2020-01-29T05:00:00.000Z",
// "first_name": "Hiba",
// "additional_names": "Saleh Isa",
// "gender": "F",
// "birthdate": "2020-01-29T05:00:00.000Z",
// "school_grade_id": 1,
// "school_name": "Alduraz",
// "grade_updated": "2020-01-29T05:00:00.000Z",
// "home_telephone": "12345678",
// "mobile_telephone": "12345678",
// "block_code": 363,
// "road": "2550",
// "building": "298",
// "flat": "12",
// "email": "fakeemail@gmail.com",
// "notes": "This student is just alright",
// "preferred_contact_type_id": 1,
// "no_call": true,
// "delinquent": false,
// "expelled": true,
// "location_id": 1,
// "family_id": 5,
// "created_at": "2020-01-30T00:05:27.602Z",
// "updated_at": "2020-01-30T00:05:27.602Z"
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
  'l.name',
  's.family_id',
  'u.name'
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
  return db('school_grade').select(["id",'name'])
}

const getAllBlocks = () => {
  return db('block').select(["block_code","neighborhood"])
}

const getAllPreferredContactType = () => {
  return db('preferred_contact_type').select(["id","method"])
}

const getAllLocations = () => {
  return db('location').select(["id","name"])
}

const getAllFamilies = () => {
  return db('family as f').join('user as u','u.user_id',"f.user_id").select(["f.id","u.name"])
}

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
