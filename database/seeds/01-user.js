const bcrypt = require('bcrypt');
exports.seed = function(knex) {
	const password = bcrypt.hashSync('pass', 8);
	return knex('user').insert([
		{
			user_type: 'parent',
			username: 'parent',
			password,
			name: 'Victoria Labdon',
			short_name: 'Victoria',
			cpr: '1',
			mobile_number: '12345678',
			email: 'fakeemail1@gmail.com',
			accent: 'British',
			gender: 'F',
			birthdate: new Date()
		},
		{
			user_type: 'admin',
			username: 'admin',
			password,
			name: 'Benny Labdon',
			short_name: 'Benny',
			cpr: '2',
			mobile_number: '12345678',
			email: 'fakeemail2@gmail.com',
			accent: 'British',
			gender: 'M',
			birthdate: new Date()
		},
		{
			user_type: 'staff',
			username: 'staff',
			password,
			name: 'Layla Al Shehabi',
			short_name: 'Layla',
			cpr: '3',
			mobile_number: '12345678',
			email: 'fakeemail3@gmail.com',
			accent: 'North American',
			gender: 'F',
			birthdate: new Date()
		},
		{
			user_type: 'parent',
			username: 'parent2',
			password,
			name: 'Hadeel Abughulod',
			short_name: 'Hadeel',
			cpr: '4',
			mobile_number: '12345678',
			email: 'fakeemail4@gmail.com',
			accent: 'North American',
			gender: 'M',
			birthdate: new Date()
		},
		{
			user_type: 'admin',
			username: 'admin2',
			password,
			name: 'Sarah Ameer',
			short_name: 'Sarah',
			cpr: '5',
			mobile_number: '12345678',
			email: 'fakeemail5@gmail.com',
			accent: 'North American',
			gender: 'F',
			birthdate: new Date()
		},
		{
			user_type: 'staff',
			username: 'staff2',
			password,
			name: 'Linda Munoz',
			short_name: 'Linda',
			cpr: '6',
			mobile_number: '12345678',
			email: 'fakeemail6@gmail.com',
			accent: 'North American',
			gender: 'F',
			birthdate: new Date()
		}
	]);
};
