
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('level').del()
    .then(function () {
      // Inserts seed entries
      return knex('level').insert([
        { textbook: 'Super Safari 1', description: 'SS 1', cef_equivalent: 'Pre-A1', pacing_guide_id: 1, certificate_text: 'Super Safari Level 1' },
        { textbook: 'Super Safari 2', description: 'SS 2', cef_equivalent: 'Pre-A1', pacing_guide_id: 2, certificate_text: 'Super Safari Level 2' },
        { textbook: 'Super Safari 3', description: 'SS 3', cef_equivalent: 'Pre-A1', pacing_guide_id: 3, certificate_text: 'Super Safari Level 3' },
        { textbook: 'Jolly Phonics 1', description: 'JP 1', cef_equivalent: 'Pre-A1', pacing_guide_id: 4, certificate_text: 'Jolly Phonics Level 1' },
        { textbook: 'Jolly Phonics 2', description: 'JP 2', cef_equivalent: 'Pre-A1', pacing_guide_id: 5, certificate_text: 'Jolly Phonics Level 2' },
        { textbook: 'Jolly Phonics 3', description: 'JP 3', cef_equivalent: 'Pre-A1', pacing_guide_id: 6, certificate_text: 'Jolly Phonics Level 3' }
      ]);
    });
};
