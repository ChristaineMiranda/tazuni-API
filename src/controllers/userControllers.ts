import {Request, Response, NextFunction } from "express";
import userServices from "../services/userServices.js";


async function signUp(req:Request, res: Response, next: NextFunction) {
    const {name, email, password} = req.body as {name: string, email: string, password: string};
    try {
        await userServices.createUser(name, email, password);
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

async function signIn(req:Request, res: Response, next: NextFunction) {
  
    const {email, password} = req.body as {email: string, password: string};
    try {
        const token :string = await userServices.signIn(email, password);
        return res.status(200).send(token);
        
    }catch (error) {
        next(error)
    }

}

export default{
    signUp, 
    signIn
}