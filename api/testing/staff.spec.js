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

  // return cleaner.clean(knex, {
  //   mode: 'truncate',
  //   ignoreTables: [
  //     'knex_migrations',
  //     'knex_migrations_lock',
  //     'level_level',
  //     'placementexam',
  //     'sessions'
  //   ]
  // });

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
        .send({
          username: 'staff_test_3003',
          password: 'staff_test_3003',
          email: 'staff3003@gmail.com',
          name: 'Merry Teacher4',
          short_name: 'Teacher',
          cpr: 86763583104,
          mobile_number: 4906578658,
          accent: 'Jamaican',
          gender: 'M',
          teaching_rate: 7.8,
          admin: false,
          active: true,
        })
        .then(res => {
          expect(res.body.id);
          expect(res.status).toEqual(201);
          expect(res.body.accent).toBe('Jamaican');
        });
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
