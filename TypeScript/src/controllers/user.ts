
import {Request, Response} from 'express';

import {addUserToDB} from '../models/user';



const registerUser = (req:Request, res:Response)=>{
    // validation of data
    // fetch data
const  userName = "Bhuwan";
const password = "Password";

const result = addUserToDB(userName, password);
res.send(result);

}

export{registerUser};