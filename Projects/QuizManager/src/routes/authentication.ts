
// Redirect request to particular method or controller
import express from 'express';
import {registerUser, loginUser} from '../controller/authentication';
const router = express.Router();



//POST/authentication/
router.post('/',registerUser);

//POST /authentication/login
router.post('/login',loginUser);


export default router;