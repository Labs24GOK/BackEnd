const app = require('../server.js');
const db = require('../../database/db-config.js');
const supertest = require('supertest');
const request = supertest(app);

describe('server', function() {
  it('should set environment to testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
  });
});

describe('staff routes', () => {
  
  beforeEach(async () => {
    await db('staff').del();
  });

  describe('GET /staff', () => {
    it('Should return a 200 status and array.', () => {
      return request
        .get('/staff')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  //valid request body
  const requestBody_1 = {
    username: 'staff_test_300',
    password: 'staff_test_300',
    email: 'staff300@gmail.com',
    name: 'Merry Teacher',
    short_name: 'Teacher',
    cpr: 86763583101,
    mobile_number: 4906578658,
    accent: 'Jamaican',
    gender: 'M',
    teaching_rate: 7.8,
    admin: false,
    active: true,
  }

  describe('POST /staff', () => {
    it('Should create a user staff id.', async () => {
      const res = await request.post('/staff').send(requestBody_1);
      expect(res.body.id);
    });

    it('Should contain expected body data.', async () => {
      const res = await request.post('/staff').send(requestBody_1);
      expect(res.body.accent).toBe('Jamaican');
    });

    it('Should return a 201 created status.', async () => {
      const res = await request.post('/staff').send(requestBody_1);
      expect(res.status).toEqual(201);
    });
  });

  describe('GET /staff/:staffID', () => {
    // it('Should return a 200 status and array.', () => {
    //   return request(server)
    //     .get('/staff')
    //     .then(res => {
    //       expect(res.status).toEqual(200);
    //       expect(Array.isArray(res.body)).toBe(true);
    //       expect(res.type).toMatch(/json/i);
    //     });
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
