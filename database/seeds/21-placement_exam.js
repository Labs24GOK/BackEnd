
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('placement_exam').del()
    .then(function () {
      // Inserts seed entries
      return knex('placement_exam').insert([
        { student_id: 1, test_date: '2019-9-15', test: 'Intermediate +', overall_level_id: 6, speaking_fluency: 5, spoken_accuracy: 8, listening_comprehension: 6, oral_level_id: 6, mc_correct: 38, mc_marked: 50, mc_level_id: 5, notes: 'Some notes about this exam' },
        { student_id: 2, test_date: '2019-9-15', test: 'Intermediate +', overall_level_id: 4, speaking_fluency: 5, spoken_accuracy: 8, listening_comprehension: 6, oral_level_id: 3, mc_correct: 15, mc_marked: 50, mc_level_id: 5, notes: 'Some notes about this exam' },
        { student_id: 3, test_date: '2019-9-15', test: 'Intermediate +', overall_level_id: 6, speaking_fluency: 5, spoken_accuracy: 8, listening_comprehension: 6, oral_level_id: 6, mc_correct: 45, mc_marked: 50, mc_level_id: 6, notes: 'Some notes about this exam' },
        { student_id: 4, test_date: '2019-9-15', test: 'Intermediate +', overall_level_id: 1, speaking_fluency: 5, spoken_accuracy: 8, listening_comprehension: 6, oral_level_id: 2, mc_correct: 10, mc_marked: 50, mc_level_id: 3, notes: 'Some notes about this exam' },
        { student_id: 5, test_date: '2019-9-15', test: 'Intermediate +', overall_level_id: 6, speaking_fluency: 5, spoken_accuracy: 8, listening_comprehension: 6, oral_level_id: 6, mc_correct: 38, mc_marked: 50, mc_level_id: 5, notes: 'Some notes about this exam' }
      ]);
    });
};
