require('dotenv').config();

// ------- Imports --------
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const model = require('./model.js');
const initializePassport = require('../passport-config.js');
const createSession = require('../middleware/createSession.js');
const checkAuthenticated = require('../middleware/checkAuthenticated.js');
const staffroutes = require('./routes/staff.routes');
const studentroutes = require('./routes/student.routes');
const globalErrorHandler = require('./controllers/errors.controller');
const authroutes = require('./routes/auth.routes');
const courseroutes = require('./routes/course.routes');

// ------- Set up server -------
const server = express();

// ------- Middleware --------
server.use(
  cors({
    origin: [
      'https://stagingspeakout.netlify.com',
      'https://adminspeakout.netlify.com',
      'http://localhost:3000',
      'https://speakout-now.com',
      'https://speakout-bh.netlify.com'
    ],
    credentials: true
  })
);
server.use(express.json());
createSession(server);
initializePassport(passport);

server.use(staffroutes);
server.use(studentroutes);
server.use(courseroutes);
server.use(authroutes);

// -------- Endpoints --------
server.post('/register', (req, res) => {
  const hashedPassword = bcrypt.hashSync(
    req.body.password,
    10
  );
  model
    .addUser({
      user_type: req.body.user_type,
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name || null,
      email: req.body.email || null
    })
    .then(user => {
      res.status(201).json({
        message: `The user '${user[0]
          .username}' has successfully been created!`
      });
    })
    .catch(error => {
      console.log('register', error);
      res.status(500).json({
        message: `There was an error attempting to register user: ${error}.`
      });
    });
});

// ***********       OLD PARENT-REGISTER API      **********************

// server.post('/parent-register', (req, res) => {
//   console.log('parent-register');
//   const user = req.body.user;
//   const family = req.body.family;
//   const student = req.body.student;

//   const hashedPassword = bcrypt.hashSync(user.password, 10);

//   model
//     .addUser({
//       username: user.username,
//       password: hashedPassword,
//       name: user.name || null,
//       email: user.email || null,
//       user_type: user.user_type
//     })
//     .then(user => {
//       console.log('User return:', user);
//       model
//         .addFamily({
//           mother_name: family.mother_name,
//           father_name: family.father_name,
//           primary_telephone: family.primary_telephone,
//           secondary_telephone: family.secondary_telephone,
//           user_id: user[0].user_id
//         })
//         .then(family => {
//           console.log('Family return:', family);
//           model
//             .addStudent({
//               first_name: student.first_name,
//               additional_names: student.additional_names,
//               cpr: student.cpr,
//               email: student.email,
//               birthdate: student.birthdate,
//               registration_date: new Date(),
//               location_id: student.location_id,
//               family_id: family[0].user_id
//             })
//             .then(student => {
//               console.log('Student return:', student);
//               res.status(200).json({
//                 student_name: student[0]
//               });
//             })
//             .catch(error => {
//               console.log('student', error);
//               res.status(500).json({
//                 message: `There was an error attempting to register a student: ${error}.`
//               });
//             });
//         })
//         .catch(error => {
//           console.log('family', error);
//           res.status(500).json({
//             message: `There was an error attempting to add a family: ${error}.`
//           });
//         });
//     })
//     .catch(error => {
//       console.log('user', error);
//       res.status(500).json({
//         message: `There was an error attempting to register user: ${error}.`
//       });
//     });
// });

// ***********       OLD PARENT-REGISTER API      **********************

server.post(
  '/login',
  passport.authenticate('local', {
    session: true
  }),
  (req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({
        message: 'You have successfully logged in',
        username: req.user.username,
        user_type: req.user.user_type,
        user_id: req.user.user_id
      });
    } else {
      res
        .status(500)
        .json({ message: 'Invalid credentials' });
    }
  }
);

server.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.json({ message: 'bye' });
});

server.get('/user', async (req, res) => {
  console.log('====USER====');
  let userName = req.body ? req.body.username : undefined;
  let userType = req.body.user_type;
  let userId = req.body.user_id;

  res.status(200).json({
    authenticated: req.isAuthenticated(),
    username: userName,
    user_type: userType,
    user_id: userId
  });
});

server.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Find API documentation here: https://documenter.getpostman.com/view/9384043/SW15yGLA'
    );
});

server.get('/api', checkAuthenticated, (req, res) => {
  const perPage = req.query.perPage;
  const skip = req.query.skip;
  const table = req.query.table;
  const where = req.query.where;
  const orderBy = req.query.orderBy;

  model
    .findAny(perPage, skip, table, where, orderBy)
    .then(tableData => {
      res.json({ tableData });
    })
    .catch(error => {
      res.json({ error: `There was an error: ${error}` });
    });
  // res.status(200).json({ message: 'You were able to pass' });
});

server.get('/where', checkAuthenticated, (req, res) => {
  model
    .find(req.query.table, req.query.where)
    .then(tableData => {
      tableData = tableData.rows;
      res.json({ tableData });
    })
    .catch(error => {
      res.json({ error: `There was an error: ${error}` });
    });
  // res.status(200).json({ message: 'You were able to pass' });
});

server.delete('/api', (req, res) => {
  // console.log('delete', req.query)

  model
    .remove(req.query.table, req.query.where)
    .then(removed => {
      res
        .status(200)
        .json(
          'number of rows removed: ' + removed.rowCount
        );
    })
    .catch(error => {
      res.status(500).json(error + '');
    });
});

server.post('/api', (req, res) => {
  console.log('post', req.query);
  model
    .findBy(req.query.table, model.makeWhere(req.body))
    .then(result => {
      if (typeof result[0] !== 'object') {
        model
          .add(req.query.table, req.body)
          .then(updated => {
            res.status(201).json(updated.rows);
          })
          .catch(error => {
            res.status(500).json(error + '');
          });
      } else {
        res.status(201).json(result.rows);
      }
    })
    .catch(error => {
      res.status(500).json(error + '');
    });
});

server.put('/api', (req, res) => {
  console.log('put', req.query);
  model
    .update(req.query.table, req.query.where, req.body)
    .then(updated => {
      res.status(201).json(req.body);
    })
    .catch(error => {
      res.status(500).json(error + '');
    });
});

server.put('/', (req, res) => {
  console.log('put', req.query);
  model
    .updateAny(req.query.table, req.query.where, req.body)
    .then(updated => {
      res.status(201).json(req.body);
    })
    .catch(error => {
      res.status(500).json(error + '');
    });
});

server.post('/api/attendance', (req, res) => {
  model
    .addMeeting(req.body.meeting)
    .then(saved => {
      const meeting_id = saved[0];
      console.log('SAVED : ', saved);
      req.body.students.forEach(student => {
        const studentAttend = { ...student, meeting_id };
        model
          .add('attendance', studentAttend)
          .then(saved => {
            console.log(saved);
          })
          .catch(err => {
            res.status(500).json({
              error: err + '',
              message: 'Error saving students'
            });
          });
      });
      res.status(201).json(saved);
    })
    .catch(err =>
      res.status(500).json({
        error: err + '',
        message: 'Error saving meeting'
      })
    );
});

server.use(globalErrorHandler);

//http://localhost:3000/pagination?perPage=5&skip=10&table=students
// server.get("/pagination", async (req, res) => {
//     const perPage = req.query.perPage;
//     const skip = req.query.skip;
//     const table = req.query.table;
//     //es5
//     db(table)
//       .offset(skip)
//       .limit(perPage)
//       .then(tableData => {
//         res.json({ tableData });
//       });
//     //es6
//     const tableData = await db(table)
//       .offset(skip)
//       .limit(perPage);
//     res.json({ tableData });
//     try {
//       const tableData = await db(table)
//         .offset(skip)
//         .limit(perPage);
//       res.json({ tableData });
//     } catch (err) {
//       res.json({ err });
//     }
//   });

module.exports = server;
