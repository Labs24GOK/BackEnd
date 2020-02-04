// const server = require('../server');
// const request = require('supertest')(server);
// const db = require('../../database/db-config');

// describe('student.routes.js', () => {
//   it('should set the environment to testing', () => {
//     expect(process.env.DB_ENV).toBe('testing');
//   });
//   describe('POST /student', () => {
//     beforeEach(async () => {
//       await db.truncate('student');
//     });
//     // afterAll(async () => {
//     //   await db('student')
//     //     .del()
//     //     .where('first_name', '=', 'testing');
//     // });
//     //Valid Request Body
//     const requestBody_1 = {
//       cpr: 103,
//       first_name: 'testing',
//       additional_names: 'Prieto Martin',
//       gender: 'M',
//       birthdate: '1997-09-05T00:05:27.627Z',
//       school_grade_id: 2,
//       school_name: "I'm a dropout",
//       home_telephone: '5555555555',
//       mobile_telephone: '5555555555',
//       block_code: 439,
//       road: 'Hello123',
//       building: 'I dont know',
//       flat: 3,
//       email: 'myemail@gmail.com',
//       notes: 'Notes',
//       preferred_contact_type_id: 4,
//       location_id: 2,
//       family_id: 1
//     };
//     // Request Body with duplicate cpr
//     const requestBody_2 = {
//       cpr: 103, //duplicate CPR
//       first_name: 'testing',
//       additional_names: 'Martin Prieto',
//       gender: 'M',
//       birthdate: '1997-09-05T00:05:27.627Z',
//       school_grade_id: 2,
//       school_name: "I'm a scholar",
//       home_telephone: '5555555551',
//       mobile_telephone: '5555555551',
//       block_code: 439,
//       road: 'Hello123',
//       building: 'I dont know',
//       flat: 3,
//       email: 'myemail@gmail.com',
//       notes: 'Notes about me, hmm..',
//       preferred_contact_type_id: 4,
//       location_id: 2,
//       family_id: 1
//     };
//     // Malformed Request Body with missing fields
//     const requestBody_1_malformed = {
//       additional_names: 'Martin Prieto',
//       gender: 'M',
//       birthdate: '1997-09-05T00:05:27.627Z',
//       school_grade_id: 2,
//       school_name: "I'm a scholar",
//       home_telephone: '5555555551'
//     };
//     it('should return a json object', async () => {
//       const res = await request.post('/student').send(requestBody_1);
//       console.log('res.type', res.text);
//       expect(res.type).toBe('application/json');
//     });
//     // it('should return a 201 status code in response to a valid request', async () => {
//     //   const res = await request.post('/student').send(requestBody_1);
//     //   console.log('res.status', res.text);
//     //   expect(res.status).toBe(201);
//     // });
//     // it('should return a 400 status code in response to request with missing fields on the request body', async () => {
//     //   const res = await request
//     //     .post('/auth/register')
//     //     .send(requestBody_1_malformed); // with missing fields
//     //   expect(res.status).toBe(400);
//     // });
//     // it('should return a 500 status code in response to a request with a duplicate firebase_id field', async () => {
//     //   await request.post('/student').send(requestBody_1);
//     //   const res = await request.post('/auth/register').send(requestBody_2);
//     //   expect(res.status).toBe(500);
//     // });
//   });
// });