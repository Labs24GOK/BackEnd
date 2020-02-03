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

const db = require('../../database/db-config');

const create = body => {
  return db('student')
    .insert(body)
    .returning('*');
};

const findAll = () => {
  return db('student')
    .select('*')
    .orderBy('id', 'desc');
};

const findByID = id => {
  return db('student')
    .select('*')
    .where({
      id
    })
    .first();
};

const remove = id => {
  return db('student')
    .del()
    .where({ id });
};

module.exports = {
  findAll,
  findByID,
  remove,
  create
};
