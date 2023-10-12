import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import projectError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    //let isUserAuthenticated = false;
    //header ---> token

    const authHeader = req.get("Authorization");
    //console.log(authHeader);

    if (!authHeader) {
      const err = new projectError("Not authenticated");
      err.statusCode = 401;
      throw err;
      //throw new Error("");
      //res.status(401).send("Not autheticated");
    }

    //jwt---->> decoding using sign "rojinakarki"
    const token = authHeader.split(" ")[1];
    //console.log(token);
    let decodedToken: { userId: String; iat: Number; exp: Number };

    try {

      decodedToken = <any>jwt.verify(token, "rojinakarki");
      // console.log(decodedToken)

    } catch (error) {
      const err = new projectError("Not authenticated");
      err.statusCode = 401;
      throw err;
     
    }
    //console.log(token);

    if (!decodedToken) {
      const err = new projectError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }
    //userId
    req.userId = decodedToken.userId;
    //console.log(decodedToken);
    next();
  } catch (error) {
    next(error);
  }
};

export { isAuthenticated };
