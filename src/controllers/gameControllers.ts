import { Request, Response, NextFunction } from "express";
import gameServices from "../services/gameServices.js";


async function createSoccerMatch(req: Request, res: Response, next: NextFunction) {

    const { first_team, second_team, date, time } = req.body
    try {
        await gameServices.createNewGame({ first_team, second_team, date, time });

        return res.sendStatus(201);
    } catch (error) {
        next(error)
    }

}

async function enableGame(req: Request, res: Response, next: NextFunction) {
    const { id, enabled } = req.body as { id: number, enabled: boolean };

    try {
        await gameServices.enableGame(id, enabled);
        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}

export default {
    createSoccerMatch,
    enableGame
}