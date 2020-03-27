const server = require('../server.js');
const request = require('supertest')(server);
const db = require('../../database/db-config.js');
const helpers = require('./helperfunctionsstudent');

describe('student.routes.js', () => {
	it('should set the environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
	let seededStudent;
	let seededParent;
	beforeEach(async () => {
		await helpers.cleanDB(db);
		// THIS CREATES A STUDENT A PARENT AND THE USER PROFILE OF THE PARENT
		student = await helpers.seedAStudent(
			{
				username: 'imUniQue2',
				email: 'meToo@unique2.com'
			},
			{
				cpr: '3793245'
			}
		);
		seededStudent = student;
		// THIS CREATES A PARENT WITH NO STUDENT LINKED TO HIM
		[parent] = await helpers.seedAParent({
			username: 'imUniQue',
			email: 'meToo@unique.com'
		});
		seededParent = parent;
	});
	afterAll(async () => {
		await helpers.cleanDB(db);
	});
	const requestBody = {
		cpr: '103',
		first_name: 'testing',
		additional_names: 'Prieto Martin',
		gender: 'M',
		birthdate: '1997-09-05T04:00:00.000Z',
		school_grade_id: 2,
		school_name: "I'm a dropout",
		home_telephone: '5555555555',
		mobile_telephone: '5555555555',
		block_code: 439,
		road: 'Hello123',
		building: 'I dont know',
		flat: '3',
		email: 'myemail@gmail.com',
		notes: 'Notes',
		preferred_contact_type_id: 2,
		location_id: 2,
		family_id: 2,
		primary_emergency_contact_name: "Luis",
    primary_emergency_relationship: "Father",
    primary_emergency_phone: "7855887522",
    emergency_contact_name: "Lissette",
    emergency_relationship: "Mother",
    emergency_phone:"231864102"
	};
	/// WHATS EXPECTED BACK FROM THE SERVER
	const toMatchObj = {
		student_id: expect.any(Number),
		cpr: expect.any(String),
		first_name: expect.any(String),
		additional_names: expect.any(String),
		registration_date: expect.any(String),
		gender: expect.any(String),
		birthdate: expect.any(String),
		school_grade_id: expect.any(Number),
		school_grade: expect.any(String),
		school_name: expect.any(String),
		grade_updated: expect.any(String),
		home_telephone: expect.any(String),
		mobile_telephone: expect.any(String),
		block_code: expect.any(Number),
		block_code_neighborhood: expect.any(String),
		road: expect.any(String),
		building: expect.any(String),
		flat: expect.any(String),
		email: expect.any(String),
		notes: expect.any(String),
		preferred_contact_type_id: expect.any(Number),
		preferred_contact_type: expect.any(String),
		no_call: expect.any(Boolean),
		expelled: expect.any(Boolean),
		delinquent: expect.any(Boolean),
		location_id: expect.any(Number),
		family_id: expect.any(Number),
		parent_name: expect.any(String),
		location: expect.any(String),
		primary_emergency_contact_name: expect.any(String),
    primary_emergency_relationship: expect.any(String),
    primary_emergency_phone: expect.any(String),
    emergency_contact_name: expect.any(String),
    emergency_relationship: expect.any(String),
    emergency_phone: expect.any(String)
	};
	describe('POST /student', () => {
		//Valid Request Body
		it('should return a json object with 201 status', async () => {
			const res = await request.post('/student').send(requestBody);
			//// CHECK IF JOINS ARE WORKING PROPERLY
			const school_grade = await helpers.getSchoolGradeByID(
				requestBody.school_grade_id
			);
			const preferred_contact_type = await helpers.getPreferredContactTypeByID(
				requestBody.preferred_contact_type_id
			);
			const location = await helpers.getLocationByID(requestBody.location_id);
			const parent = await helpers.getParentByID(requestBody.family_id);
			const block = await helpers.getBlockByBlockCode(requestBody.block_code);
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(201);
			expect(res.body).toMatchObject(toMatchObj);
			expect(res.body.parent_name).toBe(parent.name);
			expect(res.body.location).toBe(location.name);
			expect(res.body.preferred_contact_type).toBe(
				preferred_contact_type.method
			);
			expect(res.body.block_code_neighborhood).toBe(block.neighborhood);
			expect(res.body.school_grade).toBe(school_grade.name);
		});
		////////// CHECK IF FOREIGN RELATIONS EXISTS
		////////// CHECK AUTHENTICATION
	});
	describe('GET /students', () => {
		it('should return a non-empty array with 200 status code', async () => {
			const res = await request.get('/students');
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(200);
			expect(Array.isArray(res.body)).toBe(true);
			expect(res.body.length).toBeGreaterThanOrEqual(1);
			expect(res.body[0]).toMatchObject(toMatchObj);
		});
		// ADD PAGINATION LATER
		// CHECK AUTHENTICATION
	});
	describe('GET /student/id', () => {
		it('should return a json object with 200 status', async () => {
			const res = await request.get(`/student/${seededStudent.student_id}`);
			//// CHECK IF JOINS ARE WORKING PROPERLY
			const school_grade = await helpers.getSchoolGradeByID(
				seededStudent.school_grade_id
			);
			const preferred_contact_type = await helpers.getPreferredContactTypeByID(
				seededStudent.preferred_contact_type_id
			);
			const location = await helpers.getLocationByID(seededStudent.location_id);
			const parent = await helpers.getParentByID(seededStudent.family_id);
			const block = await helpers.getBlockByBlockCode(seededStudent.block_code);
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(200);
			expect(res.body).toHaveProperty('student_id', seededStudent.student_id);
			expect(res.body).toMatchObject(toMatchObj);
			expect(res.body.parent_name).toBe(parent.name);
			expect(res.body.location).toBe(location.name);
			expect(res.body.preferred_contact_type).toBe(
				preferred_contact_type.method
			);
			expect(res.body.block_code_neighborhood).toBe(block.neighborhood);
			expect(res.body.school_grade).toBe(school_grade.name);
		});
		it('should return a 400 status code in response to invalid ID', async () => {
			const res = await request.get(`/student/iAmDefNotAnID`);
			expect(res.status).toBe(400);
			expect(res.body.message).toBe('Please enter a valid ID');
		});
		it('should return a 400 status code in response to student doesnt exists', async () => {
			const res = await request.get(`/student/99999`);
			expect(res.status).toBe(400);
			expect(res.body).toHaveProperty(
				'message',
				'Student with that ID does not exist'
			);
		});
		////////// CHECK AUTHENTICATION
	});
	describe('DELETE /student/id', () => {
		it('should return a json object with 200 status', async () => {
			const res = await request.delete(`/student/${seededStudent.student_id}`);
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(200);
			expect(res.body).toHaveProperty('message', 'Student Deleted');
		});
		it('should return a 400 status code in response to invalid ID', async () => {
			const res = await request.delete(`/student/iAmDefNotAnID`);
			expect(res.status).toBe(400);
			expect(res.body).toHaveProperty('message', 'Please enter a valid ID');
		});
		it('should return a 400 status code in response to student doesnt exists', async () => {
			const res = await request.delete(`/student/99999`);
			expect(res.status).toBe(400);
			expect(res.body).toHaveProperty(
				'message',
				'Student with that ID does not exist'
			);
		});
		////////// CHECK AUTHENTICATION
	});
	describe('PUT /student/id', () => {
		it('should return a json object with 200 status', async () => {
			const res = await request
				.put(`/student/${seededStudent.student_id}`)
				.send({
					...requestBody,
					no_call: true,
					delinquent: true,
					expelled: true,
					family_id: seededParent,
					school_grade_id: 3
				});
			//// CHECK IF JOINS ARE WORKING PROPERLY
			const school_grade = await helpers.getSchoolGradeByID(
				res.body.school_grade_id
			);
			const preferred_contact_type = await helpers.getPreferredContactTypeByID(
				res.body.preferred_contact_type_id
			);
			const location = await helpers.getLocationByID(res.body.location_id);
			const parent = await helpers.getParentByID(res.body.family_id);
			const block = await helpers.getBlockByBlockCode(res.body.block_code);
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(200);
			expect(res.body).toMatchObject(toMatchObj);
			expect(res.body).toHaveProperty('student_id', seededStudent.student_id);
			expect(res.body.family_id).not.toBe(seededStudent.family_id);
			expect(res.body.parent_name).toBe(parent.name);
			expect(res.body.location).toBe(location.name);
			expect(res.body.preferred_contact_type).toBe(
				preferred_contact_type.method
			);
			expect(res.body.block_code_neighborhood).toBe(block.neighborhood);
			expect(res.body.school_grade).toBe(school_grade.name);
			expect(res.body.delinquent).toBe(true);
		});
		it('should return a 400 status code in response to invalid ID', async () => {
			const res = await request.put(`/student/iAmDefNotAnID`).send(requestBody);
			expect(res.status).toBe(400);
			expect(res.body).toHaveProperty('message', 'Please enter a valid ID');
		});
		it('should return a 400 status code in response to bo student with that id', async () => {
			const res = await request.put(`/student/99999`).send(requestBody);
			expect(res.status).toBe(400);
			expect(res.body).toHaveProperty(
				'message',
				'Student with that ID does not exist'
			);
		});
		////////// CHECK AUTHENTICATION
		////////// CHECK IF FOREIGN RELATIONS EXISTS
	});
	describe('GET /student/dropdowns', () => {
		it('should return a json object with 200 status', async () => {
			const res = await request.get(`/student/dropdowns`);
			expect(res.type).toBe('application/json');
			expect(res.status).toBe(200);
			expect(res.body).toStrictEqual(
				expect.objectContaining({
					school_grades: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String)
						})
					]),
					blocks: expect.arrayContaining([
						expect.objectContaining({
							block_code: expect.any(Number),
							neighborhood: expect.any(String)
						})
					]),
					contact_types: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							method: expect.any(String)
						})
					]),
					locations: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String)
						})
					]),
					families: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(String)
						})
					])
				})
			);
		});
		////////// CHECK AUTHENTICATION
	});
});
