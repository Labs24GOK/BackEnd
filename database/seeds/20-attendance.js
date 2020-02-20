exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('attendance')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('attendance').insert([
				{ meeting_id: 1, student_id: 1, attendance: 'present' },
				{ meeting_id: 1, student_id: 2, attendance: 'present' },
				{ meeting_id: 1, student_id: 6, attendance: 'present' },
				{ meeting_id: 2, student_id: 1, attendance: 'late' },
				{ meeting_id: 2, student_id: 2, attendance: 'absent' },
				{ meeting_id: 2, student_id: 6, attendance: 'present' },
				{ meeting_id: 3, student_id: 3, attendance: 'present' },
				{ meeting_id: 3, student_id: 5, attendance: 'late' },
				{ meeting_id: 4, student_id: 3, attendance: 'late' },
				{ meeting_id: 4, student_id: 5, attendance: 'late' },
				{ meeting_id: 5, student_id: 4, attendance: 'present' },
				{ meeting_id: 6, student_id: 4, attendance: 'present' }
			]);
		});
};
