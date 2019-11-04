
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        { cpr: '1', registration_date: new Date(), first_name: 'Mariam', additional_names: 'Saleh Isa', gender: 'F', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 },
        { cpr: '2', registration_date: new Date(), first_name: 'Hamad', additional_names: 'Saleh Isa', gender: 'M', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 },
        { cpr: '3', registration_date: new Date(), first_name: 'Fatima', additional_names: 'Saleh Isa', gender: 'F', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 },
        { cpr: '4', registration_date: new Date(), first_name: 'Hassan', additional_names: 'Saleh Isa', gender: 'M', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 },
        { cpr: '5', registration_date: new Date(), first_name: 'Layla', additional_names: 'Saleh Isa', gender: 'F', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 },
        { cpr: '6', registration_date: new Date(), first_name: 'Hiba', additional_names: 'Saleh Isa', gender: 'F', birthdate: new Date(), school_grade_id: 1, school_name: 'Alduraz', grade_updated: new Date(), home_telephone: '12345678', mobile_telephone: '12345678', block_code: 363, road: '2550', building: '298', flat: '12', email: 'fakeemail@gmail.com', notes: 'This student is just alright', preferred_contact_type_id: 1, no_call: true, delinquent: false, expelled: true, location_id: 1 }
      ]);
    });
};
