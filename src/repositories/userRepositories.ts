import db from "../config/database.js";

async function createUser(name: string, email: string, password: string) {
    await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, password]);    
}

async function findByEmail(email:string) {
    return await db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
    
}
async function findSessionById(id: number) {
    return await db.query(`SELECT * FROM sessions WHERE user_id = $1;`, [id]);
}

async function createSession(id:number, token:string) {
    await db.query(`INSERT INTO sessions (user_id, token) VALUES ($1, $2);`, [id, token]);
}
async function findSessionByToken(token: string){
    return await db.query(`SELECT * FROM sessions WHERE token = $1;`, [token]);
}
async function findUserById(userId:number) {
    return await db.query(`SELECT * FROM users WHERE id=$1;`, [userId]);
}

export default{
    createUser,
    findByEmail,
    findSessionById,
    createSession, 
    findSessionByToken,
    findUserById
}