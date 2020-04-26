const express = require('express');
const Users = require('../models/user.model');

const router = express.Router();

const {
    findAllUsers,
    findUserById
  } = require('../controllers/user.controller');

router.get('/users', findAllUsers);
router.get('/users/:UserId', findUserById);

router.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id
  Users.findById(id)
  .then(student => {
    res.status(200).json(student);
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router;