const server = require('../server.js');

const db = require('../../database/db-config.js');

const request = require('supertest');

describe('server', function() {
  it('should set environment to testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
  });
});

describe('staff routes', () => {
  beforeEach(async () => {
    await db('staff').del();
    await db('user').del();
  });

  //valid request body
  const requestBody1 = {
    username: 'staff_test_3001',
    password: 'staff_test_3001',
    email: 'staff3001@gmail.com',
    name: 'Merry Teacher1',
    short_name: 'Teacher',
    cpr: 86763583101,
    mobile_number: 4906578658,
    accent: 'Jamaican',
    gender: 'M',
    teaching_rate: 7.8,
    admin: false,
    active: true,
  };

  //duplicate username
  const requestBody2 = {
    username: 'staff_test_3001', //duplicate username
    password: 'staff_test_3002',
    email: 'staff3002@gmail.com',
    name: 'Merry Teacher2',
    short_name: 'Teacher',
    cpr: 86763583102,
    mobile_number: 4906578658,
    accent: 'Canadian',
    gender: 'F',
    teaching_rate: 7.8,
    admin: false,
    active: true,
  };

  //malformed request body
  const malformedRequestBody = {
    username: 'staff_test_3003',
    password: 'staff_test_3003',
    email: 'staff3003@gmail.com',
    name: '',
    short_name: 'Teacher',
    cpr: 86763583103,
    mobile_number: 4906578658,
    accent: 'Canadian',
    gender: 'F',
    teaching_rate: 7.8,
    admin: false,
    active: true,
  };

  describe('GET /staff', () => {
    it('Should return a 200 status and array.', () => {
      return request(server)
        .get('/staff')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe('POST /staff', () => {
    it('Should create a user staff id, expected body, and a 201 created status.', async () => {
      return request(server)
        .post('/staff')
        .send(requestBody1)
        .then(res => {
          expect(res.body.id);
          expect(res.status).toEqual(201);
          expect(res.body.accent).toBe('Jamaican');
        });
    });

    it('Should return a 400 error.', async () => {
      return request(server)
        .post('/staff')
        .send(malformedRequestBody)
        .then(res => {
          expect(res.status).toEqual(400);
        });
    });

    it('Should return 401 status.', async () => {
      return request(server)
        .post('/staff')
        .send(requestBody1)
        .then(res => {
          return request(server)
            .post('/staff')
            .send(requestBody2)
            .then(resp => {
              expect(resp.status).toEqual(401);
            });
        });
    });
  });

  describe('GET /staff/:staffID', () => {

    it('Should return a 200 status and array.', () => {
      return request(server)
        .post('/staff')
        .send(requestBody1)
        .then(res => {
          console.log("RES", res)
          return request(server)
          .get(`/staff/${res.body.staff_id}`)
              .then(res => {
                expect(res.status).toEqual(200);
                expect(res.type).toMatch(/json/i);
            });
        });
    });
  });

  describe('PUT /staff/:staffID', () => {
    // it('Should return a 200 status and array.', () => {
    //   return request(server)
    //     .get('/staff')
    //     .then(res => {
    //       expect(res.status).toEqual(200);
    //       expect(Array.isArray(res.body)).toBe(true);
    //       expect(res.type).toMatch(/json/i);
    //     });
  });

  describe('DELETE /staff/:staffID', () => {
    // it('Should return a 200 status and array.', () => {
    //   return request(server)
    //     .get('/staff')
    //     .then(res => {
    //       expect(res.status).toEqual(200);
    //       expect(Array.isArray(res.body)).toBe(true);
    //       expect(res.type).toMatch(/json/i);
    //     });
  });

  describe('GET /staff/:staffID/courses', () => {
    // it('Should return a 200 status and array.', () => {
    //   return request(server)
    //     .get('/staff')
    //     .then(res => {
    //       expect(res.status).toEqual(200);
    //       expect(Array.isArray(res.body)).toBe(true);
    //       expect(res.type).toMatch(/json/i);
    //     });
  });
});
