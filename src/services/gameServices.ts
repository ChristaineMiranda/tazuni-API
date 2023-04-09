import gamesRepositories from "../repositories/gamesRepositories.js";
import errors from "../errors/index.js";

async function createNewGame({first_team, second_team, date, time}) {

    const {rowCount:gameExists} = await gamesRepositories.findGame(first_team, date);
    if(gameExists){
        throw errors.gameAlreadyRegistered();
    }
    await  gamesRepositories.createNewGame({first_team, second_team, date, time});
    
}

async function enableGame(idGame:number, enabled:boolean) {
    const {rowCount: gameExists} = await gamesRepositories.findGameById(idGame);
    if(!gameExists){
        throw errors.gameNotFound();
    }
    await gamesRepositories.enableGame(idGame, enabled);
    
}

export default {
    createNewGame,
    enableGame
}