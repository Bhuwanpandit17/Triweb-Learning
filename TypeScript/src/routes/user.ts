import express from 'express';
// const userController = require('../controllers/user');
import {registerUser} from '../controllers/user';
const router = express.Router();


router.use('/register',registerUser);

export default router;
