const express = require('express');
const Users = require('../models/user.model');

const router = express.Router();

const {
    findAllUsers,
    findUserById,
    findAllStudentsByUserId
  } = require('../controllers/user.controller');

router.get('/users', findAllUsers);
router.get('/users/:id', findUserById);
router.get('/users/:id/students', findAllStudentsByUserId);

module.exports = router;