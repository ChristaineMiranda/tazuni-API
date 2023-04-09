import { Request, Response, NextFunction } from "express";
import errors from "../errors/index.js";

import userRepositories from "../repositories/userRepositories.js";


export default async function authValidate(req: Request, res: Response, next: NextFunction){
    console.log("entrei validate")
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if(!token){
        throw errors.invalidCredentialsError();
    }
    const {rows : [user]} = await userRepositories.findSessionByToken(token);
    res.locals.user = {userId: user.user_id};
    console.log("finalvalidate")

    next();
}