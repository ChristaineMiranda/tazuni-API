import prisma from "../config/database.js";

async function createGuess(gameId:number, userId:number, result:string) {
    await prisma.guess.create({
        data:{
            userId,
            gameId,
            result
        }
    }); 
}

async function getGuessById(id:number) {
    return await prisma.guess.findFirst({
        where:{ id }
    });    
}

async function getGuessesFromUser(userId:number) {
    return await prisma.guess.findFirst({
        where:{ userId }
    });
}

async function deleteGuess(id:number) {
    await prisma.guess.delete({
        where:{ id }
    });    
}

export default{
    createGuess,
    getGuessById,
    getGuessesFromUser,
    deleteGuess
}