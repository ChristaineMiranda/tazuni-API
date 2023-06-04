import prisma from "../config/database.js";
async function createNewGame({firstTeam, secondTeam, time}) {
    await prisma.game.create({
        data:{
            firstTeam,
            secondTeam,
            time,
        }
    });    
}

// async function findGame(team: string, date: Date) {
//     return await db.query(`SELECT * FROM games WHERE (first_team = $1 OR second_team = $1) AND date = $2;`, [team, date]);
    
// }
async function findGameById(id:number) {
    return await prisma.game.findFirst({
        where:{ id }
    });    
}


export default {
    createNewGame,
     findGameById
}
