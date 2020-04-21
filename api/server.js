require('dotenv').config();


// ------- Imports --------
const express = require('express');
const cors = require('cors');

const passport = require('passport');


const initializePassport = require('../passport-config.js');
const createSession = require('../middleware/createSession.js');

const globalErrorHandler = require('./controllers/errors.controller');

const staffRoutes = require('./routes/staff.routes');
const studentRoutes = require('./routes/student.routes');
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const courseEnrollmentRoutes = require('./routes/course_enrollment.routes');
const attendanceRoutes = require('./routes/attendance.routes');
const userRoutes = require('./routes/users.routes');
// ------- Set up server -------
const server = express();

// ------- Middleware --------
server.use(
  cors({
    origin: [
      'https://stagingspeakout.netlify.com',
      'https://speakout-stage.netlify.com',
      'https://adminspeakout.netlify.com',
      'http://localhost:3000',
      'https://speakout-now.com',
      'https://speakout-bh.netlify.com',
      'https://speak-out-bh.com',
      'https://www.speak-out-bh.com',
      'https://rc1-staging.d3pg0n6842ntws.amplifyapp.com'
    ],
    credentials: true
  })
);
server.use(express.json());
createSession(server);
initializePassport(passport);


//// NEED TO BE MOVED BENEATH AUTH ROLE MIDDLEWARE -- NOT SECURED --> ANYONE CAN ACCESS THIS ENDPOINT AT THIS MOMENT
server.use(authRoutes);
server.use(staffRoutes);
server.use(studentRoutes);
server.use(courseRoutes);
server.use(courseEnrollmentRoutes);
server.use(attendanceRoutes);
server.use(userRoutes);

/// THIS IS FINE
server.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Find API documentation here: https://documenter.getpostman.com/view/8230639/SWTD8wyQ?version=latest#ab443920-3ba6-46b2-bff9-0de953af9172'
    );
});



server.use(globalErrorHandler);
module.exports = server;
