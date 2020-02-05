const server = require('../server');

const request = require('supertest')(server);

describe('server.js', function() {
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.NODE_ENV).toBe('testing');
		});
	});

	describe('FIND /course', function() {
		it('should return a 200 OK', function() {
			return request(server)
				.find('/course')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', function() {
			return request(server)
				.find('/course')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
	describe('CREATE /course', function() {
		it('should return a 200', function() {
			return request(server)
				.create('/course')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it('should return a JSON', function() {
			return request(server)
				.create('/course')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});
