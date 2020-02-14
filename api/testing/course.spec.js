const server = require('../server.js');
const db = require('../../database/db-config.js');
const helpers = require('./helperfunctionsstudent');

const request = require('supertest');

const createObj = {
  term_id: 1,
  course_type_id: 1,
  group_type_id: 1,
  school_grade_id: 1,
  level_id: 1,
  section: 'A',
  subsection: 1,
  hourly_rate: 7.0,
  course_schedule_id: 1,
  room_id: 1,
  start_time: '16:30:00',
  end_time: '18:30:00',
  teacher_id: 1,
  notes: 'Notes',
  status: 'active'
};

const editObj = {
  term_id: 1,
  course_type_id: 1,
  group_type_id: 1,
  school_grade_id: 1,
  level_id: 1,
  section: 'A',
  subsection: 1,
  hourly_rate: 7.0,
  course_schedule_id: 1,
  room_id: 1,
  start_time: '16:30:00',
  end_time: '18:30:00',
  teacher_id: 1,
  notes: 'Notes',
  status: 'active'
};

let seededTeacher;
describe('server.js', () => {
  describe('environment', () => {
    it('should set environment to testing', async () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
  beforeAll(async () => {
    await helpers.cleanDB(db);
    //do not delete
    const res = await helpers.seedAStaff({
      username: 'veryuniqueusername',
      email: 'veryuniqueemail@gmail.com',
      cpr: '8257235'
    });
    seededTeacher = res;
  });
  afterAll(async () => {
    await helpers.cleanDB(db);
  });

  describe('FIND /course', () => {
    it('should return a 200 OK', async () => {
      const res = await request(server).get('/course');
      expect(res.status).toBe(200);
    });
    it('should return a JSON', async () => {
      const res = await request(server).get('/course');
      expect(res.type).toMatch(/json/i);
    });
  });
  // describe('FIND BY ID /course/:id', () => {
  //   it('should return a 200', async () => {
  //     const course = await request(server)
  //       .post('/course')
  //       .send(createObj);
  //     console.log(course.text);
  //     const res = await request(server).get(`/course/${res.course_id}`);
  //     console.log('Find by ID', res.text);
  //     console.log('Find by ID - ID', seededTeacher.staff_id);
  //     expect(res.status).toBe(200);
  //   });
  //   it('should return a JSON', async () => {
  //     const res = await request(server).get('/course/:id');
  //     expect(res.type).toMatch(/json/i);
  //   });
  // });
  describe('CREATE /course', () => {
    it('should return a 200', async () => {
      const res = await request(server)
        .post('/course')
        .send(createObj);
      expect(res.status).toBe(200);
    });
    it('should return a JSON', async () => {
      const res = await request(server).post('/course');
      expect(res.type).toMatch(/json/i);
    });
  });
  describe('EDIT /course/:id', () => {
    it('should return a 200', async () => {
      const res = await request(server)
        .put(`/course/${seededTeacher.staff_id}`)
        .send(editObj);
      expect(res.status).toBe(200);
    });
    it('should return a JSON', async () => {
      const res = await request(server).put('/course/:id');

      expect(res.type).toMatch(/json/i);
    });
  });
  describe('DELETE /course/:id', () => {
    it('should return a 200', async () => {
      const res = await request(server).delete(
        `/course/${seededTeacher.staff_id}`
      );
      expect(res.status).toBe(200);
    });
    it('should return a JSON', async () => {
      const res = await request(server).delete('/course/:id');
      expect(res.type).toMatch(/json/i);
    });
  });
});
