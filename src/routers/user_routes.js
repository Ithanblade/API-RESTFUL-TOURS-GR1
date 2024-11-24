import { Router } from "express";
import { registerUserController } from "../controllers/user_controller.js";
import { loginUserController } from "../controllers/user_controller.js";

const router = Router();

//Pública - Todos los usuarios
router.post("/users/register",registerUserController);
router.post("/users/login",loginUserController);



export default router;