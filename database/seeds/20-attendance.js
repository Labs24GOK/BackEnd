exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendance').del().then(function() {
    // Inserts seed entries
    return knex('attendance').insert([
      {
        meeting_id: 1,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 1,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 2,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 2,
        student_id: 2,
        attendance: 'present'
      },
      { meeting_id: 2, student_id: 3, attendance: 'late' },
      {
        meeting_id: 2,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 2,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 2,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 3,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 3,
        student_id: 2,
        attendance: 'absent'
      },
      {
        meeting_id: 3,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 3,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 3,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 3,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 4,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 5,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 5,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 5,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 5,
        student_id: 4,
        attendance: 'present'
      },
      { meeting_id: 5, student_id: 5, attendance: 'late' },
      {
        meeting_id: 5,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 6,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 7,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 7,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 7,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 7,
        student_id: 4,
        attendance: 'present'
      },
      { meeting_id: 7, student_id: 5, attendance: 'late' },
      {
        meeting_id: 7,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 8,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 9,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 10,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 11,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 11,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 11,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 11,
        student_id: 4,
        attendance: 'absent'
      },
      {
        meeting_id: 11,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 11,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 12,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 13,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 14,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 15,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 16,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 17,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 18,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 19,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 20,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 21,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 22,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 22,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 22,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 22,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 22,
        student_id: 5,
        attendance: 'present'
      },
      { meeting_id: 22, student_id: 6, attendance: 'late' },
      {
        meeting_id: 23,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 23,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 23,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 23,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 23,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 23,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 24,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 25,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 25,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 25,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 25, student_id: 4, attendance: 'late' },
      {
        meeting_id: 25,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 25,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 26,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 27,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 27,
        student_id: 2,
        attendance: 'absent'
      },
      {
        meeting_id: 27,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 27,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 27,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 27,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 28,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 28,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 28,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 28,
        student_id: 4,
        attendance: 'present'
      },
      { meeting_id: 28, student_id: 5, attendance: 'late' },
      {
        meeting_id: 28,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 29,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 30,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 31,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 31,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 31,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 31,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 31,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 31,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 32,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 33,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 34,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 34,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 34,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 34,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 34,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 34,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 35,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 36,
        student_id: 1,
        attendance: 'present'
      },
      { meeting_id: 36, student_id: 2, attendance: 'late' },
      {
        meeting_id: 36,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 36, student_id: 4, attendance: 'late' },
      {
        meeting_id: 36,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 36,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 37,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 38,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 39,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 40,
        student_id: 1,
        attendance: 'present'
      },
      { meeting_id: 40, student_id: 2, attendance: 'late' },
      {
        meeting_id: 40,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 40,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 40,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 40,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 41,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 42,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 43,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 44,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 44,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 44,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 44,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 44,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 44,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 45,
        student_id: 6,
        attendance: 'absent'
      },
      {
        meeting_id: 46,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 46,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 46,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 46,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 46,
        student_id: 5,
        attendance: 'present'
      },
      { meeting_id: 46, student_id: 6, attendance: 'late' },
      {
        meeting_id: 47,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 47,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 47,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 47,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 47,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 47,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 48,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 49,
        student_id: 6,
        attendance: 'present'
      },
      { meeting_id: 50, student_id: 1, attendance: 'late' },
      {
        meeting_id: 50,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 50,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 50,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 50,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 50,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 51,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 51,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 51,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 51,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 51,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 51,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 52,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 53,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 54,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 55,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 56,
        student_id: 1,
        attendance: 'present'
      },
      { meeting_id: 56, student_id: 2, attendance: 'late' },
      {
        meeting_id: 56,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 56, student_id: 4, attendance: 'late' },
      {
        meeting_id: 56,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 56,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 57,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 58,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 58,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 58,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 58, student_id: 4, attendance: 'late' },
      {
        meeting_id: 58,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 58,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 59,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 59,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 59,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 59,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 59,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 59,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 60,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 61,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 62,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 63,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 64,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 65,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 66,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 67,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 68,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 69,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 70,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 71,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 72,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 73,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 74,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 74,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 74,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 74, student_id: 4, attendance: 'late' },
      {
        meeting_id: 74,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 74,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 75,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 76,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 77,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 78,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 79,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 79,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 79,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 79,
        student_id: 4,
        attendance: 'present'
      },
      { meeting_id: 79, student_id: 5, attendance: 'late' },
      { meeting_id: 79, student_id: 6, attendance: 'late' },
      {
        meeting_id: 80,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 80,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 80,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 80,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 80,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 80,
        student_id: 6,
        attendance: 'absent'
      },
      {
        meeting_id: 81,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 81,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 81,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 81,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 81,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 81,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 82,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 82,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 82,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 82, student_id: 4, attendance: 'late' },
      {
        meeting_id: 82,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 82,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 83,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 84,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 85,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 86,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 87,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 88,
        student_id: 6,
        attendance: 'present'
      },
      { meeting_id: 89, student_id: 1, attendance: 'late' },
      {
        meeting_id: 89,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 89,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 89,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 89,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 89,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 90,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 91,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 91,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 91,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 91,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 91,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 91,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 92,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 92,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 92,
        student_id: 3,
        attendance: 'present'
      },
      { meeting_id: 92, student_id: 4, attendance: 'late' },
      {
        meeting_id: 92,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 92,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 93,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 93,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 93,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 93,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 93,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 93,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 94,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 95,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 96,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 97,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 98,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 99,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 99,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 99,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 99,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 99,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 99,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 100,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 100,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 100,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 100,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 100,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 100,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 101,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 101,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 101,
        student_id: 3,
        attendance: 'late'
      },
      {
        meeting_id: 101,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 101,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 101,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 102,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 103,
        student_id: 6,
        attendance: 'late'
      },
      {
        meeting_id: 104,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 104,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 104,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 104,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 104,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 104,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 105,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 106,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 106,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 106,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 106,
        student_id: 4,
        attendance: 'late'
      },
      {
        meeting_id: 106,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 106,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 107,
        student_id: 6,
        attendance: 'late'
      },
      {
        meeting_id: 108,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 108,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 108,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 108,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 108,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 108,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 109,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 109,
        student_id: 2,
        attendance: 'absent'
      },
      {
        meeting_id: 109,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 109,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 109,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 109,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 110,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 111,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 111,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 111,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 111,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 111,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 111,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 112,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 112,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 112,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 112,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 112,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 112,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 113,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 114,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 115,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 116,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 117,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 118,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 119,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 120,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 121,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 122,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 123,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 123,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 123,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 123,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 123,
        student_id: 5,
        attendance: 'absent'
      },
      {
        meeting_id: 123,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 124,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 124,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 124,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 124,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 124,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 124,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 125,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 126,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 126,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 126,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 126,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 126,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 126,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 127,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 128,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 129,
        student_id: 6,
        attendance: 'absent'
      },
      {
        meeting_id: 130,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 130,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 130,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 130,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 130,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 130,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 131,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 132,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 133,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 133,
        student_id: 2,
        attendance: 'absent'
      },
      {
        meeting_id: 133,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 133,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 133,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 133,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 134,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 134,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 134,
        student_id: 3,
        attendance: 'late'
      },
      {
        meeting_id: 134,
        student_id: 4,
        attendance: 'absent'
      },
      {
        meeting_id: 134,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 134,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 135,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 135,
        student_id: 2,
        attendance: 'late'
      },
      {
        meeting_id: 135,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 135,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 135,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 135,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 136,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 137,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 137,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 137,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 137,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 137,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 137,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 138,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 139,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 140,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 141,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 142,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 143,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 143,
        student_id: 2,
        attendance: 'absent'
      },
      {
        meeting_id: 143,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 143,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 143,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 143,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 144,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 145,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 145,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 145,
        student_id: 3,
        attendance: 'late'
      },
      {
        meeting_id: 145,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 145,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 145,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 146,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 146,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 146,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 146,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 146,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 146,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 147,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 148,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 149,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 149,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 149,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 149,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 149,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 149,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 150,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 151,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 151,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 151,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 151,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 151,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 151,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 152,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 153,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 154,
        student_id: 1,
        attendance: 'late'
      },
      {
        meeting_id: 154,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 154,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 154,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 154,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 154,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 155,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 156,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 156,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 156,
        student_id: 3,
        attendance: 'late'
      },
      {
        meeting_id: 156,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 156,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 156,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 157,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 158,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 159,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 159,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 159,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 159,
        student_id: 4,
        attendance: 'absent'
      },
      {
        meeting_id: 159,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 159,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 160,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 161,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 161,
        student_id: 2,
        attendance: 'late'
      },
      {
        meeting_id: 161,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 161,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 161,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 161,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 162,
        student_id: 6,
        attendance: 'late'
      },
      {
        meeting_id: 163,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 163,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 163,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 163,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 163,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 163,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 164,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 165,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 166,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 167,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 168,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 168,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 168,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 168,
        student_id: 4,
        attendance: 'late'
      },
      {
        meeting_id: 168,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 168,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 169,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 169,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 169,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 169,
        student_id: 4,
        attendance: 'late'
      },
      {
        meeting_id: 169,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 169,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 170,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 170,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 170,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 170,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 170,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 170,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 171,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 172,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 172,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 172,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 172,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 172,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 172,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 173,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 174,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 174,
        student_id: 2,
        attendance: 'late'
      },
      {
        meeting_id: 174,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 174,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 174,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 174,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 175,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 175,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 175,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 175,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 175,
        student_id: 5,
        attendance: 'late'
      },
      {
        meeting_id: 175,
        student_id: 6,
        attendance: 'late'
      },
      {
        meeting_id: 176,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 176,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 176,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 176,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 176,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 176,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 177,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 178,
        student_id: 1,
        attendance: 'absent'
      },
      {
        meeting_id: 178,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 178,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 178,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 178,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 178,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 179,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 3,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 180,
        student_id: 6,
        attendance: 'present'
      },
      {
        meeting_id: 181,
        student_id: 1,
        attendance: 'present'
      },
      {
        meeting_id: 181,
        student_id: 2,
        attendance: 'present'
      },
      {
        meeting_id: 181,
        student_id: 3,
        attendance: 'absent'
      },
      {
        meeting_id: 181,
        student_id: 4,
        attendance: 'present'
      },
      {
        meeting_id: 181,
        student_id: 5,
        attendance: 'present'
      },
      {
        meeting_id: 181,
        student_id: 6,
        attendance: 'late'
      },
      // {
      //   meeting_id: 182,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 182,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 182,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 182,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 182,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 182,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 4,
      //   attendance: 'absent'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 183,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 3,
      //   attendance: 'late'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 184,
      //   student_id: 6,
      //   attendance: 'absent'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 185,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 186,
      //   student_id: 6,
      //   attendance: 'absent'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 187,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 188,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 189,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 190,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 191,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 192,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 193,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 3,
      //   attendance: 'absent'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 194,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 195,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 196,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 197,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 198,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 199,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 200,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 5,
      //   attendance: 'late'
      // },
      // {
      //   meeting_id: 201,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 202,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 203,
      //   student_id: 6,
      //   attendance: 'late'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 204,
      //   student_id: 6,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 1,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 2,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 3,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 4,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 5,
      //   attendance: 'present'
      // },
      // {
      //   meeting_id: 205,
      //   student_id: 6,
      //   attendance: 'present'
      // }
    ]);
  });
};
