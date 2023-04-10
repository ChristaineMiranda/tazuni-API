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

async function getGuessesFromUser(req: Request, res: Response, next: NextFunction) {
    const { user_id: userId } = req.body as { user_id: number };

    try {
        const list = await guessServices.getGuessesFromUser(userId);
        return res.status(200).send(list);
    } catch (error) {
        next(error);
    }

}

async function deleteGuess(req: Request, res: Response, next: NextFunction) {
    const { guess_id: guessId } = req.body as { guess_id: number }
    const userId = res.locals.user;
    try {
        await guessServices.deleteGuess(userId, guessId);
        return res.sendStatus(200);
    } catch (error) {
        next(error);
    }

}

export default {
    createGuess,
    getGuessesFromUser,
    deleteGuess
}