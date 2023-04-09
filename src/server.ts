import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorhandlingMiddleware from './middlewares/errorHandlingMiddleware.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errorhandlingMiddleware);

server.listen(5000, () => {
    console.log("Server is running")
});