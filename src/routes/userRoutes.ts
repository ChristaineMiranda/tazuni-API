import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import authValidate from "../middlewares/authMiddleware.js";
import usersSchema from "../schemas/usersSchemas.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";

const userRoutes = Router();

userRoutes.post("/signup", validateSchema(usersSchema.signup) , userControllers.signUp);
userRoutes.post("/signin", validateSchema(usersSchema.signIn), userControllers.signIn);

export default userRoutes;