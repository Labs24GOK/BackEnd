const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const model = require('../models/user.model.js');

const router = express.Router();

const {
   findAllUsers
  } = require('../controllers/user.controller');





router.get('/api/auth/users', findAllUsers)

module.exports = router;