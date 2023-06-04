import gamesRepositories from "../repositories/gamesRepositories.js";
import errors from "../errors/index.js";

async function createNewGame({firstTeam, secondTeam,time}) {
    await  gamesRepositories.createNewGame({firstTeam, secondTeam, time});
    
}

export default {
    createNewGame,
}