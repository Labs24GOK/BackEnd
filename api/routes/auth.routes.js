const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const model = require('../models/model.js');

// const {
//   registerStudent
// } = require('../controllers/auth.controller');

const {validateRegistration}= require ('../middlewares/registration.middleware')

// const server = express();
const router = express.Router();

// router.post('/parent-register', registerStudent);

module.exports = router;

/// LOGIN / LOGOUT NEEDS TO BE REFACTORED TO AUTH ROUTES

router.post('/api/auth/login',
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

router.get('/api/auth/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.json({ message: 'bye' });
});

router.get('/user', async (req, res) => {
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


//// END OF AUTH REFACTORING

///// NEED TO BE REFACTORED INTO A MODEL ETC FOR PARENTS, STAFF REGISTRATION IS COMPLETE!
// -------- Endpoints --------
router.post('/api/auth/register', validateRegistration, (req, res) => {
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
      res.status(500).json({
        message: `There was an error attempting to register user: ${error}.`
      });
    });
});

