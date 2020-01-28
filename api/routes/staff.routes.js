const express = require('express');

const { findStaffById } = require('../controllers/staff.controller');

const router = express.Router();

router.get('/staff/:staffID', findStaffById);

module.exports = router;
