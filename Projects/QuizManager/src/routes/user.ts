// Redirect request to particular method or controller

import express from 'express';
import {registerUser, getUser, updateUser} from '../controller/user';
const router = express.Router();

//POST/user/
router.post('/',registerUser);



//Get /user/:userId

router.get('/:userId',getUser)


//Put /user/

router.put('/',updateUser);


export default router;