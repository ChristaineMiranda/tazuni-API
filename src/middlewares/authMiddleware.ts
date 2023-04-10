import { Request, Response, NextFunction } from "express";
import errors from "../errors/index.js";

import userRepositories from "../repositories/userRepositories.js";


export default async function authValidate(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");
try {
    if(!token){
        throw errors.invalidCredentialsError();
    }
    const {rowCount: userExists, rows : [user]} = await userRepositories.findSessionByToken(token);
    if(!userExists){
        throw errors.invalidCredentialsError();        
    }
    res.locals.user = user.user_id;    

    next();
} catch (error) {
    next(error)
}
   
}