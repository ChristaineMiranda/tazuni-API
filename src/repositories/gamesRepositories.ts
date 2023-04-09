import db from "../config/database.js";


async function createNewGame({first_team, second_team, date, time}) {
    await db.query(`INSERT INTO games (first_team, second_team, date, time) VALUES ($1, $2, $3, $4);`, [first_team, second_team, date, time])
    
}

async function findGame(team: string, date: Date) {
    return await db.query(`SELECT * FROM games WHERE (first_team = $1 OR second_team = $1) AND date = $2;`, [team, date]);
    
}
async function findGameById(idGame:number) {
    return await db.query(`SELECT * FROM games WHERE id=$1;`, [idGame]);    
}

async function enableGame(id:number, enabled:boolean) {
    await db.query(`UPDATE games SET open = $1 WHERE id=$2;`, [enabled, id]);
    
}

export default {
    createNewGame,
    findGame,
    enableGame,
    findGameById
}
