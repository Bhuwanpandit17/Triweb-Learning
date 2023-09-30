const express = require('express');
// const userController = require('../controllers/user');
const {registerUser} = require('../controllers/user');
const router = express.Router();


router.use('/register',registerUser);

module.exports = router;
