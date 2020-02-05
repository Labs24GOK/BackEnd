const server = require('../server.js');
// const db = require('../../database/db-config.js');
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

describe('server.js', () => {
	describe('environment', () => {
		it('should set environment to testing', () => {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	describe('FIND /course', () => {
		it('should return a 200 OK', () => {
			return request(server)
				.get('/course')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', () => {
			return request(server)
				.get('/course')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	describe('CREATE /course', () => {
		it('should return a 200', () => {
			return request(server)
				.post('/course', createObj)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', () => {
			return request(server)
				.post('/course')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	describe('EDIT /course/:id', () => {
		it('should return a 200', () => {
			return request(server)
				.put('/course/:id', editObj)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', () => {
			return request(server)
				.put('/course/:id')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	describe('DELETE /course/:id', () => {
		it('should return a 200', () => {
			return request(server)
				.delete('/course/:id')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', () => {
			return request(server)
				.delete('/course/:id')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});
