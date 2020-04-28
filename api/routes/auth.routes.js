const express = require('express');
const bcrypt = require('bcrypt');
const model = require('../models/model.js');
const jwt = require('jsonwebtoken');

const {validateRegistration}= require ('../middlewares/registration.middleware')
const {jwtSecret} = require('../config/secrets');

const router = express.Router();

module.exports = router;

router.post('/api/auth/login', (req, res) => {
  let { username, password } = req.body;

  model.findByUsername({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/user', async (req, res) => {
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
        message: `There was an error attempting to register user: ${error, message, stack}.`
      });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    name: user.name,
    user_type: user.user_type || 'user'
  };
  const options = {
    expiresIn: '1h',
  }
  return jwt.sign(payload, jwtSecret, options);
}