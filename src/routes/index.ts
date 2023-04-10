import { Router } from "express";
import userRoutes from "./userRoutes.js";
import authValidate from "../middlewares/authMiddleware.js";
import gameRoutes from "./gameRoutes.js"
import guessRoutes from "./guessRoutes.js";


const routes = Router();
routes.use(userRoutes);
routes.use(authValidate);
routes.use(gameRoutes);
routes.use(guessRoutes);
export default routes;