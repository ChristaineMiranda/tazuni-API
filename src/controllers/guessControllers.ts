import { Request, Response, NextFunction } from "express"
import guessServices from "../services/guessServices.js";


async function createGuess(req: Request, res: Response, next: NextFunction) {
    const { game_id, score } = req.body as { game_id: number, score: string };
    const userId: number = res.locals.user;
    try {
        await guessServices.createGuess(game_id, userId, score);
        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }
}

export default {
    createGuess
}