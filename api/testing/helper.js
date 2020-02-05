// const cleaner = require('knex-cleaner');
const cleaner = require('../../database/seeds/00-cleaner').seed;
const user = require('../../database/seeds/01-user').seed;
const school_grade = require('../../database/seeds/02-school_grade').seed;
const preferred_contact_type = require('../../database/seeds/03-preferred_contact_type')
  .seed;
const location = require('../../database/seeds/04-location').seed;
const block = require('../../database/seeds/05-block').seed;
const family = require('../../database/seeds/06-family').seed;
const student = require('../../database/seeds/07-student').seed;
const term = require('../../database/seeds/08-term').seed;
const group_type = require('../../database/seeds/09-group_type').seed;
const course_type = require('../../database/seeds/10-course_type').seed;
const pacing_guide = require('../../database/seeds/11-pacing_guide').seed;
const level = require('../../database/seeds/12-level').seed;
const course_schedule = require('../../database/seeds/13-course_schedule').seed;
const room = require('../../database/seeds/14-room').seed;
const staff = require('../../database/seeds/15-staff').seed;
const course = require('../../database/seeds/16-course').seed;
const result_type = require('../../database/seeds/17-result_type').seed;
const course_enrollment = require('../../database/seeds/18-course_enrollment')
  .seed;
const meeting = require('../../database/seeds/19-meeting').seed;
const attendance = require('../../database/seeds/20-attendance').seed;
const placement_exam = require('../../database/seeds/21-placement_exam').seed;
const progress_report = require('../../database/seeds/22-progress_report').seed;

const cleanDB = async db => {
  await cleaner(db);
  // await user(db);
  await school_grade(db);
  await preferred_contact_type(db);
  await location(db);
  await block(db);
  await term(db);
  await group_type(db);
  await course_type(db);
  // await pacing_guide(db);
  // await level(db);
  // await course_schedule(db);
  // await room(db);
  // await staff(db);
  // await course(db);
  // await result_type(db);
  // await course_enrollment(db);
  // await meeting(db);
  // await attendance(db);
  // await placement_exam(db);
  // await progress_report(db);
};

module.exports = {
  cleanDB
};
