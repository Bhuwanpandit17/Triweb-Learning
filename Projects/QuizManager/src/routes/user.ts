// Redirect request to particular method or controller

import express from 'express';
import {registerUser, getUser, updateUser, loginUser} from '../controller/user';
const router = express.Router();

//POST/user/
router.post('/',registerUser);

//POST /User/Login
router.post('/login',loginUser);



//Get /user/:userId

router.get('/:userId',getUser)


//Put /user/

router.put('/',updateUser);



export default router;