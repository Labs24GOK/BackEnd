const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const model = require('../models/user.model.js');

const router = express.Router();

const {
    findAllUsers,
    findUserById
  } = require('../controllers/user.controller');





router.get('/users', findAllUsers);
router.get('/users/:UserId', findUserById);

module.exports = router;