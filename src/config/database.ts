import pg from 'pg';
import dotenv from 'dotenv'
dotenv.config();

const  {Pool} = pg
const db = new Pool({
    connectionString: process.env.DATABASE_URL
})


db.connect((err) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log("Connected to the database!");
    }
  });

export default db;