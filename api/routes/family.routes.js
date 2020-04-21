const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const model = require('../models/user.model.js');

const router = express.Router();

const {
    findAllFamilies,
    findFamilyById
  } = require('../controllers/family.controller');





router.get('/families', findAllFamilies);
router.get('/families/:UserId', findFamilyById);

module.exports = router;