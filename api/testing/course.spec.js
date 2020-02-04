const request = require('supertest');

const Course = require('../controllers/course.controller');

describe('course.controller.js', function() {
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.NODE_ENV).toBe('testing');
		});
	});

	describe('GET /', function() {
		it('should return a 200 OK', function() {
			return request(Course)
				.find('/course')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
	});
});
