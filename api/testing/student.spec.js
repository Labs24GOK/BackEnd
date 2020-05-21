const server = require('../server.js');

const db = require('../../database/db-config.js');

const request = require('supertest');

const Students = require('../models/student.model.js');

describe('server', function() {
    it('should set environment to testing', function() {
        expect(process.env.DB_ENV).toBe('testing');
    });
});

describe('admin - student routes', () => {
    beforeAll((done) => {
        request(server)
            .post('/login')
            .send({ username: 'admin', password: 'pass' })
            .then(res => {
                token = res.body.token;
                done();
            })
    });
    beforeEach(async() => {
        await db('student').truncate();
    });
    afterAll((done) => {
        // remove token to sign out
    });

    // valid request body
    const requestBody1 = {
        cpr: '1234567890',
        first_name: 'Student1',
        additional_names: 'Abe Lincoln',
        gender: 'M',
        // home_telephone: '11-225566',
        // mobile_telephone: '11-334455',
        // ADD IN WHATEVER 'phone' IS GOING TO BE
        email: 'student1@email.com',
        // preferred_contact_type_id: 1,
        birthdate: new Date(2015, 3, 15),
        school_name: 'Abba',
        school_grade_id: 1,
        // location_id: 1,
        address: '1234 address st block 2345',
        primary_emergency_contact_name: 'Genghis Kahn',
        primary_emergency_relationship: 'guardian',
        primary_emergency_phone: '11-334455',
        emergency_contact_name: 'Mary Kahn',
        emergency_relationship: 'guardian',
        emergency_phone: '11-556677',
        notes: '',
        no_call: false,
        delinquent: false,
        expelled: false,
        user_id: 20
    };

    // malformed request body
    const malformedRequestBody1 = {
        cpr: '',
        first_name: '',
        additional_names: 'Abe Lincoln',
        gender: 'M',
        // home_telephone: '11-225566',
        // mobile_telephone: '11-334455',
        // ADD IN WHATEVER 'phone' IS GOING TO BE
        email: 'student1@email.com',
        // preferred_contact_type_id: 1,
        birthdate: new Date(2015, 3, 15),
        school_name: 'Abba',
        school_grade_id: 1,
        // location_id: 1,
        address: '1234 address st block 2345',
        primary_emergency_contact_name: 'Genghis Kahn',
        primary_emergency_relationship: 'guardian',
        primary_emergency_phone: '11-334455',
        emergency_contact_name: 'Mary Kahn',
        emergency_relationship: 'guardian',
        emergency_phone: '11-556677',
        notes: '',
        no_call: false,
        delinquent: false,
        expelled: false,
        user_id: 20
    };

    // edited request body
    const requestBody2 = {
        cpr: '1234567890',
        first_name: 'Student1',
        additional_names: 'George Washington',
        gender: 'M',
        // home_telephone: '11-225566',
        // mobile_telephone: '11-334455',
        // ADD IN WHATEVER 'phone' IS GOING TO BE
        email: 'student1@email.com',
        // preferred_contact_type_id: 1,
        birthdate: new Date(2015, 3, 15),
        school_name: 'Abba',
        school_grade_id: 1,
        // location_id: 1,
        address: '1234 address st block 2345',
        primary_emergency_contact_name: 'Genghis Kahn',
        primary_emergency_relationship: 'guardian',
        primary_emergency_phone: '11-334455',
        emergency_contact_name: 'Mary Kahn',
        emergency_relationship: 'guardian',
        emergency_phone: '11-556677',
        notes: 'Previous Name: Abe Lincoln',
        no_call: false,
        delinquent: false,
        expelled: false,
        user_id: 20
    };

    describe('GET /students', () => {
        it('Should return a 200 status and an array.', () => {
            return request(server)
                .get('/students')
                .set('Authorization', token)
                .then(res => {
                    expect(res.status).toEqual(200);
                    expect(Array.isArray(res.body)).toBe(true);
                    expect(res.type).toMatch(/json/i);
                });
        });
    });

    describe('POST /student', () => {
        it('Should return a json object.', () => {
            return request(server)
                .post('/student')
                .set('Authorization', token)
                .send(requestBody1)
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
    });

    describe('GET /student/:studentID', () => {
        it('Should return a ')
    })
});