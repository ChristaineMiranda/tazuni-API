import { Router } from "express";
import guessControllers from "../controllers/guessControllers.js";

const guessRoutes = Router();
guessRoutes.post("/new-guess", guessControllers.createGuess);
guessRoutes.get("/guesses-from-user", guessControllers.getGuessesFromUser);
guessRoutes.delete("/remove-guess", guessControllers.deleteGuess);

export default guessRoutes;