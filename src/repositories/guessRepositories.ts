import db from "../config/database.js";

async function createGuess(gameId:number, userId:number, score:string) {
    await db.query(`INSERT INTO guess (game_id, user_id, score) VALUES ($1,$2,$3);`, [gameId, userId, score]);  
}

async function getGuessById(guessId:number) {
    return await db.query(`SELECT * FROM guess WHERE id=$1;`, [guessId]);
    
}

async function getGuessesFromUser(userId:number) {
    return await db.query(`SELECT * FROM guess WHERE user_id=$1;`,[userId]);    
}

export default{
    createGuess,
    getGuessById,
    getGuessesFromUser
}