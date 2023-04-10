import { Router } from "express";
import guessControllers from "../controllers/guessControllers.js";

const guessRoutes = Router();
guessRoutes.post("/newguess", guessControllers.createGuess);
guessRoutes.get("/guesses-from-user", guessControllers.getGuessesFromUser);

export default guessRoutes;