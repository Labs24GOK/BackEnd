const server = require('../server');
const request = require('supertest')(server);
const db = require('../../database/db-config');
const helpers = require('./helper');
const bcrypt = require('bcrypt');

const seedStudent = {
  cpr: '1',
  registration_date: new Date(),
  first_name: 'Mariam',
  additional_names: 'Saleh Isa',
  gender: 'F',
  birthdate: new Date(),
  school_grade_id: 1,
  school_name: 'Alduraz',
  grade_updated: new Date(),
  home_telephone: '12345678',
  mobile_telephone: '12345678',
  block_code: 363,
  road: '2550',
  building: '298',
  flat: '12',
  email: 'fakeemail@gmail.com',
  notes: 'This student is just alright',
  preferred_contact_type_id: 1,
  no_call: true,
  delinquent: false,
  expelled: true,
  location_id: 1,
  family_id: 1
};

const familySeed = {
  mother_name: 'Mother Name',
  father_name: 'Father Name',
  block_code: 363,
  road: '2550',
  building: '298',
  flat: '12',
  primary_telephone: '12345678',
  secondary_telephone: '12345678',
  user_id: 1
};

const password = bcrypt.hashSync('pass', 8);
const userSeed = {
  user_type: 'parent',
  username: 'parent',
  password,
  name: 'Victoria Labdon',
  short_name: 'Victoria',
  email: 'fakeemail1@gmail.com'
};

describe('student.routes.js', () => {
  it('should set the environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  describe('POST /student', () => {
    beforeAll(async () => {
      await helpers.cleanDB(db);
    });
    beforeEach(async () => {
      await helpers.cleanDB(db);
      await db('user').insert(userSeed);
      await db('family').insert(familySeed);
      await db('student').insert(seedStudent);
    });
    //Valid Request Body
    const requestBody_1 = {
      cpr: 103,
      first_name: 'testing',
      additional_names: 'Prieto Martin',
      gender: 'M',
      birthdate: '1997-09-05T00:05:27.627Z',
      school_grade_id: 2,
      school_name: "I'm a dropout",
      home_telephone: '5555555555',
      mobile_telephone: '5555555555',
      block_code: 439,
      road: 'Hello123',
      building: 'I dont know',
      flat: 3,
      email: 'myemail@gmail.com',
      notes: 'Notes',
      preferred_contact_type_id: 4,
      location_id: 2,
      family_id: 1
    };
    // Request Body with duplicate cpr
    const requestBody_2 = {
      cpr: 103, //duplicate CPR
      first_name: 'testing',
      additional_names: 'Martin Prieto',
      gender: 'M',
      birthdate: '1997-09-05T00:05:27.627Z',
      school_grade_id: 2,
      school_name: "I'm a scholar",
      home_telephone: '5555555551',
      mobile_telephone: '5555555551',
      block_code: 439,
      road: 'Hello123',
      building: 'I dont know',
      flat: 3,
      email: 'myemail@gmail.com',
      notes: 'Notes about me, hmm..',
      preferred_contact_type_id: 4,
      location_id: 2,
      family_id: 1
    };
    // Malformed Request Body with missing fields
    const requestBody_1_malformed = {
      additional_names: 'Martin Prieto',
      gender: 'M',
      birthdate: '1997-09-05T00:05:27.627Z',
      school_grade_id: 2,
      school_name: "I'm a scholar",
      home_telephone: '5555555551'
    };
    it('should return a json object', async () => {
      const res = await request.post('/student').send(requestBody_1);
      console.log('res.status1', res.text);
      expect(res.type).toBe('application/json');
    });
    it('should return a 201 status code in response to a valid request', async () => {
      const res = await request.post('/student').send(requestBody_1);
      console.log('res.status', res.text);
      expect(res.status).toBe(201);
    });
    // it('should return a 400 status code in response to request with missing fields on the request body', async () => {
    //   const res = await request
    //     .post('/auth/register')
    //     .send(requestBody_1_malformed); // with missing fields
    //   expect(res.status).toBe(400);
    // });
    // it('should return a 500 status code in response to a request with a duplicate firebase_id field', async () => {
    //   await request.post('/student').send(requestBody_1);
    //   const res = await request.post('/auth/register').send(requestBody_2);
    //   expect(res.status).toBe(500);
    // });
  });
});
