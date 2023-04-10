import { Router } from "express";
import guessControllers from "../controllers/guessControllers.js";

const guessRoutes = Router();
guessRoutes.post("/newguess", guessControllers.createGuess);

export default guessRoutes;