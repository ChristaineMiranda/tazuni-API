import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import userRepositories from '../repositories/userRepositories.js';
import errors from '../errors/index.js';



async function createUser(name:string, email: string, password: string) {

    const {rowCount:emailExists} = await userRepositories.findByEmail(email);
    if(emailExists) throw errors.duplicatedEmailError();
    
    const passwordHash = bcrypt.hashSync(password, 10);
    await userRepositories.createUser(name, email, passwordHash);
}

async function signIn(email:string, password:string) {
    const {rowCount : userExists, rows: [user]} = await userRepositories.findByEmail(email);
    
    if(!userExists){
        throw errors.userNotFound();
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        throw errors.invalidCredentialsError();
    }

    const {rows : [session]} = await userRepositories.findSessionById(user.id);
    if(session){
        return session.token;
    }
    const token = uuid();
    await userRepositories.createSession(user.id, token);
    return token; 
}

export default{
    createUser, 
    signIn
}