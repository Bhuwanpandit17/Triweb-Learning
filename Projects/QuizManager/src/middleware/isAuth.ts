import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


const isAuthenticated = (req:Request, res:Response, next:NextFunction)=>{

    //header----> token
    const authHeader = req.get('Authorization');
    // console.log(authHeader);

    if (!authHeader){
        const err = new Error("Not authenticated");
        //err.statusCode = 401;
        throw err;
    }


    //jwt-->decode using sign "rojinakarki"

    const token = authHeader.split(' ')[1];

   //console.log(token);

     let decodedToken:{userId:String, iat:Number, exp:Number};
    //  try {
        decodedToken = <any> jwt.verify(token, "rojinakarki");
        console.log(decodedToken);
    // } catch (error) {
        // console.log(error);
        // const err = new Error("Not authenticated");
        // //err.statusCode = 401;
        // throw err;
        
    // }

    // if(!decodedToken){
    //     const err = new Error("Not authenticated");
    //     // err.statusCode = 401;
    //     throw err;
    // }

    //  //userId

    // req.userId = decodedToken.userId;

    // //fetch user
    // //req.user = user;

    // next();

};



export {isAuthenticated};