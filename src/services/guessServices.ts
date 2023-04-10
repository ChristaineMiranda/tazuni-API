import guessRepositories from "../repositories/guessRepositories.js";
import gamesRepositories from "../repositories/gamesRepositories.js";
import userRepositories from "../repositories/userRepositories.js";
import errors from "../errors/index.js";

async function createGuess(gameId:number,userId: number, score:string) {
    const {rowCount:gameExists} = await gamesRepositories.findGameById(gameId);
    if(!gameExists){
       throw errors.gameNotFound();
    }
    await guessRepositories.createGuess(gameId, userId, score);
    
}

async function getGuessesFromUser(userId:number) {
    const {rowCount: userExists} = await userRepositories.findUserById(userId);
    if(!userExists){
        throw errors.userNotFound();
    }
    const {rows:list} = await guessRepositories.getGuessesFromUser(userId);
    return list;    
}

export default {
    createGuess,
    getGuessesFromUser
}