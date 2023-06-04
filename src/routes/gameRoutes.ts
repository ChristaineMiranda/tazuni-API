import { Router } from "express";
import gameControllers from "../controllers/gameControllers.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import gameSchema from "../schemas/gameSchema.js";

const gameRoutes = Router();

gameRoutes.post("/newsoccermatch", validateSchema(gameSchema), gameControllers.createSoccerMatch);


export default gameRoutes;