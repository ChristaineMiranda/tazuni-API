import guessRepositories from "../repositories/guessRepositories.js";
import gamesRepositories from "../repositories/gamesRepositories.js";
import userRepositories from "../repositories/userRepositories.js";
import errors from "../errors/index.js";

async function createGuess(gameId:number,userId: number, score:string) {
    const gameExists= await gamesRepositories.findGameById(gameId);
    if(!gameExists){
       throw errors.gameNotFound();
    }
    await guessRepositories.createGuess(gameId, userId, score);
    
}

async function getGuessesFromUser(userId:number) {
    const userExists = await userRepositories.findUserById(userId);
    if(!userExists){
        throw errors.userNotFound();
    }
    const list = await guessRepositories.getGuessesFromUser(userId);
    return list;    
}

async function deleteGuess(userId:number, guessId:number) {
    const guessExists = await guessRepositories.getGuessById(guessId);

    if(!guessExists){
        throw errors.notFound();
    }
    if(userId !== guessExists.userId){
        throw errors.unauthorized();        
    }
    await guessRepositories.deleteGuess(guessId);
}

export default {
    createGuess,
    getGuessesFromUser,
    deleteGuess
}