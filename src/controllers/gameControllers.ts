import { Request, Response, NextFunction } from "express";
import gameServices from "../services/gameServices.js";


async function createSoccerMatch(req: Request, res: Response, next: NextFunction) {

    const { firstTeam, secondTeam, time } = req.body
    try {
        await gameServices.createNewGame({ firstTeam, secondTeam, time });

        return res.sendStatus(201);
    } catch (error) {
        next(error)
    }

}

export default {
    createSoccerMatch,
}