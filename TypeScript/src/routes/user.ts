import express from 'express';
// const userController = require('../controllers/user');
import {registerUser, updateUser} from '../controllers/user';
const router = express.Router();


router.use('/register',registerUser);
router.use('/update',updateUser);

export default router;
