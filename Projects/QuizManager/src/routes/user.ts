// Redirect request to particular method or controller

import express from 'express';
import {getUser, updateUser} from '../controller/user';
import { isAuthenticated } from '../middleware/isAuth';
const router = express.Router();



// user should be authenticate
// user should be authorize
//Get /user/:userId

router.get('/:userId',isAuthenticated,getUser)


//Put /user/

router.put('/',updateUser);



export default router;