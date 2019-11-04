
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('staff').insert([
        { name: 'Victoria Labdon', short_name: 'Victoria', cpr: '1', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'British', gender: 'F', birthdate: new Date(), teaching_rate: '0.00', admin: true, active: true, user_id: 18 },
        { name: 'Benny Labdon', short_name: 'Benny', cpr: '2', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'British', gender: 'M', birthdate: new Date(), teaching_rate: '0.00', admin: true, active: true, user_id: 18 },
        { name: 'Layla Al Shehabi', short_name: 'Layla', cpr: '3', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'North American', gender: 'F', birthdate: new Date(), teaching_rate: '0.00', admin: false, active: true, user_id: 18 },
        { name: 'Hadeel Abughulod', short_name: 'Hadeel', cpr: '4', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'North American', gender: 'M', birthdate: new Date(), teaching_rate: '0.00', admin: true, active: false, user_id: 18 },
        { name: 'Sarah Ameer', short_name: 'Sarah', cpr: '5', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'North American', gender: 'F', birthdate: new Date(), teaching_rate: '0.00', admin: true, active: true, user_id: 18 },
        { name: 'Linda Munoz', short_name: 'Linda', cpr: '6', mobile_number: '12345678', email: 'fakeemail@gmail.com', accent: 'North American', gender: 'F', birthdate: new Date(), teaching_rate: '0.00', admin: false, active: true, user_id: 18 }
      ]);
    });
};
