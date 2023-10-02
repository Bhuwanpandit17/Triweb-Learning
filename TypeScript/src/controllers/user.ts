
import {Request, Response} from 'express';

import {addUserToDB, updateUserData} from '../models/user';



const registerUser = (req:Request, res:Response)=>{
    // validation of data
    // fetch data
const  userName:string = "Rojina";
const password:string = "Password";

const result = addUserToDB(userName, password);
res.send(result);

}

const updateUser = (req: Request, res:Response)=>{
    const result = updateUserData(res.body);
    res.send(result);
}

export{registerUser, updateUser};