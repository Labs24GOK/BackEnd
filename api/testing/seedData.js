const bcrypt = require('bcrypt');
const faker = require('faker');
const password = bcrypt.hashSync('pass', 8);
const db = require('../../database/db-config');

class Family {
  constructor(user_id) {
    this.mother_name = 'Mother Name';
    this.father_name = 'Father Name';
    this.block_code = 363;
    this.road = '2550';
    this.building = '298';
    this.flat = '12';
    this.primary_telephone = '12345678';
    this.secondary_telephone = '12345678';
    this.user_id = user_id;
  }
}
class User {
  constructor(role) {
    this.user_type = role;
    this.username = faker.internet.userName();
    this.password = password;
    this.name = 'Really long name';
    this.short_name = 'OneWordName';
    this.email = faker.internet.email();
  }
}
class Student {
  constructor(family_id) {
    this.cpr = faker.helpers.replaceSymbolWithNumber('########');
    this.first_name = 'Onename';
    this.additional_names = 'A lot of names';
    this.gender = 'F';
    this.birthdate = new Date(2003,4,23);
    this.school_grade_id = 1;
    this.school_name = 'Alduraz';
    this.home_telephone = '12345678';
    this.mobile_telephone = '12345678';
    this.block_code = 363;
    this.road = '2550';
    this.building = '298';
    this.flat = '12';
    this.email = faker.internet.email();
    this.notes = 'This student is just alright';
    this.preferred_contact_type_id = 1;
    this.no_call = true;
    this.delinquent = false;
    this.expelled = true;
    this.location_id = 1;
    this.family_id = family_id;
  }
}

class Staff {
  constructor(user_id) {
    this.teaching_rate = '0.00';
    this.active = true;
    this.user_id = user_id;
    this.cpr = faker.helpers.replaceSymbolWithNumber('########');
    this.mobile_number = '12345678';
    this.accent = 'British';
    this.gender = 'F';
    this.birthdate = new Date();
  }
}

module.exports = {
  Staff,
  Student,
  User,
  Family
};
