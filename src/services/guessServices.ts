import guessRepositories from "../repositories/guessRepositories.js";
import gamesRepositories from "../repositories/gamesRepositories.js";
import errors from "../errors/index.js";

async function createGuess(gameId:number,userId: number, score:string) {
    const {rowCount:gameExists} = await gamesRepositories.findGameById(gameId);
    if(!gameExists){
       throw errors.gameNotFound();
    }
    await guessRepositories.createGuess(gameId, userId, score);
    
}

export default {
    createGuess
}